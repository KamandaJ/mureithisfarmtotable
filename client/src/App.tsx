import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider, useQuery, useMutation } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CartDrawer } from "@/components/CartDrawer";
import Home from "@/pages/Home";
import Products from "@/pages/Products";
import ProductDetail from "@/pages/ProductDetail";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import NotFound from "@/pages/not-found";
import { useState } from "react";
import type { Product, CartItemWithProduct } from "@shared/schema";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";

function Router() {
  const [cartOpen, setCartOpen] = useState(false);
  const { toast } = useToast();

  const { data: cartItems = [], refetch: refetchCart } = useQuery<CartItemWithProduct[]>({
    queryKey: ["/api/cart"],
  });

  const addToCartMutation = useMutation({
    mutationFn: async ({ productId, quantity }: { productId: string; quantity: number }) => {
      const res = await apiRequest("POST", "/api/cart", { productId, quantity });
      return res.json();
    },
    onSuccess: () => {
      refetchCart();
    },
  });

  const updateCartMutation = useMutation({
    mutationFn: async ({ id, quantity }: { id: string; quantity: number }) => {
      const res = await apiRequest("PATCH", `/api/cart/${id}`, { quantity });
      if (res.status === 204) {
        return null;
      }
      return res.json();
    },
    onSuccess: () => {
      refetchCart();
    },
  });

  const deleteCartMutation = useMutation({
    mutationFn: async (id: string) => {
      await apiRequest("DELETE", `/api/cart/${id}`);
    },
    onSuccess: () => {
      refetchCart();
      toast({
        title: "Removed from cart",
        description: "Item has been removed from your cart.",
      });
    },
  });

  const handleAddToCart = (product: Product, quantity: number = 1) => {
    addToCartMutation.mutate(
      { productId: product.id, quantity },
      {
        onSuccess: () => {
          toast({
            title: "Added to cart",
            description: `${product.name} has been added to your cart.`,
          });
        },
      }
    );
  };

  const handleUpdateQuantity = (itemId: string, newQuantity: number) => {
    updateCartMutation.mutate({ id: itemId, quantity: newQuantity });
  };

  const handleRemoveItem = (itemId: string) => {
    deleteCartMutation.mutate(itemId);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header
        cartItemCount={cartItems.reduce((sum, item) => sum + item.quantity, 0)}
        onCartClick={() => setCartOpen(true)}
      />
      <main className="flex-1">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/products">
            <Products onAddToCart={(product) => handleAddToCart(product, 1)} />
          </Route>
          <Route path="/products/:id">
            <ProductDetail onAddToCart={handleAddToCart} />
          </Route>
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
      <CartDrawer
        open={cartOpen}
        onClose={() => setCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
      />
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
