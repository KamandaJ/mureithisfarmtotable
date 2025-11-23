import { useQuery } from "@tanstack/react-query";
import { useRoute, Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import { ShoppingCart, ArrowLeft, Leaf, Info } from "lucide-react";
import type { Product } from "@shared/schema";
import { useState } from "react";
import { getProductImage } from "@/lib/productImages";

interface ProductDetailProps {
  onAddToCart: (product: Product, quantity: number) => void;
}

export default function ProductDetail({ onAddToCart }: ProductDetailProps) {
  const [, params] = useRoute("/products/:id");
  const [quantity, setQuantity] = useState(1);

  const { data: product, isLoading } = useQuery<Product>({
    queryKey: ["/api/products", params?.id],
    enabled: !!params?.id,
  });

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Skeleton className="h-10 w-32 mb-8" />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <Skeleton className="w-full aspect-square rounded-md" />
          <div className="space-y-6">
            <Skeleton className="h-10 w-3/4" />
            <Skeleton className="h-6 w-full" />
            <Skeleton className="h-6 w-full" />
            <Skeleton className="h-12 w-32" />
          </div>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
        <Leaf className="h-16 w-16 text-muted-foreground/50 mx-auto mb-4" />
        <h2 className="text-2xl font-semibold mb-2">Product not found</h2>
        <p className="text-muted-foreground mb-6">The product you're looking for doesn't exist.</p>
        <Link href="/products">
          <Button>Back to Products</Button>
        </Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    onAddToCart(product, quantity);
    setQuantity(1);
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Link href="/products">
        <Button variant="ghost" className="mb-8" data-testid="button-back-products">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Products
        </Button>
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="space-y-4">
          <div className="aspect-square overflow-hidden rounded-md border">
            <img
              src={getProductImage(product.image)}
              alt={product.name}
              className="w-full h-full object-cover"
              data-testid="img-product-detail"
            />
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <div className="flex items-start justify-between gap-4 mb-2">
              <h1 className="font-serif text-3xl sm:text-4xl font-bold" data-testid="text-product-detail-name">
                {product.name}
              </h1>
              {product.inStock ? (
                <Badge className="bg-primary/10 text-primary border-primary/20" data-testid="badge-product-stock">
                  In Stock
                </Badge>
              ) : (
                <Badge variant="outline" className="bg-muted" data-testid="badge-product-stock">
                  Out of Stock
                </Badge>
              )}
            </div>
            <p className="text-muted-foreground text-lg leading-relaxed">
              {product.description}
            </p>
          </div>

          <Separator />

          <div>
            <div className="flex items-baseline gap-2 mb-6">
              <span className="text-4xl font-bold text-primary" data-testid="text-product-detail-price">
                KES {parseFloat(product.price).toFixed(2)}
              </span>
              <span className="text-lg text-muted-foreground">per {product.unit}</span>
            </div>

            <div className="flex items-center gap-4 mb-6">
              <label className="font-medium">Quantity:</label>
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  data-testid="button-decrease-quantity"
                >
                  -
                </Button>
                <span className="w-12 text-center font-medium" data-testid="text-quantity">
                  {quantity}
                </span>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setQuantity(quantity + 1)}
                  data-testid="button-increase-quantity"
                >
                  +
                </Button>
              </div>
            </div>

            <Button
              size="lg"
              className="w-full sm:w-auto px-8"
              onClick={handleAddToCart}
              disabled={!product.inStock}
              data-testid="button-add-to-cart"
            >
              <ShoppingCart className="h-5 w-5 mr-2" />
              Add to Cart
            </Button>
          </div>

          <Separator />

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <Info className="h-5 w-5 text-primary" />
                Nutritional Information
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm leading-relaxed text-muted-foreground" data-testid="text-nutritional-info">
                {product.nutritionalInfo}
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <Leaf className="h-5 w-5 text-primary" />
                Preparation Tips
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm leading-relaxed text-muted-foreground" data-testid="text-preparation-tips">
                {product.preparationTips}
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
