import { useQuery } from "@tanstack/react-query";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { ShoppingCart, Leaf } from "lucide-react";
import { Link } from "wouter";
import type { Product } from "@shared/schema";
import { getProductImage } from "@/lib/productImages";

interface ProductsProps {
  onAddToCart: (product: Product) => void;
}

export default function Products({ onAddToCart }: ProductsProps) {
  const { data: products, isLoading } = useQuery<Product[]>({
    queryKey: ["/api/products"],
  });

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-12">
          <Skeleton className="h-10 w-64 mb-4" />
          <Skeleton className="h-6 w-96" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4].map((i) => (
            <Card key={i}>
              <Skeleton className="w-full aspect-square" />
              <CardContent className="p-6">
                <Skeleton className="h-6 w-3/4 mb-2" />
                <Skeleton className="h-4 w-full mb-4" />
                <Skeleton className="h-8 w-24" />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-12">
        <div className="flex items-center gap-2 mb-4">
          <Leaf className="h-8 w-8 text-primary" />
          <h1 className="font-serif text-3xl sm:text-4xl font-bold" data-testid="text-products-heading">
            Our Indigenous Vegetables
          </h1>
        </div>
        <p className="text-muted-foreground text-lg max-w-3xl">
          Fresh, nutrient-rich traditional leafy greens harvested daily from our farm.
          Each variety carries generations of agricultural wisdom and exceptional nutritional value.
        </p>
      </div>

      {products && products.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <Card key={product.id} className="hover-elevate overflow-hidden" data-testid={`card-product-${product.id}`}>
              <Link href={`/products/${product.id}`} className="block">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={getProductImage(product.image)}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    data-testid={`img-product-${product.id}`}
                  />
                </div>
              </Link>
              <CardContent className="p-6">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <Link href={`/products/${product.id}`}>
                    <h3 className="font-semibold text-xl hover:text-primary transition-colors cursor-pointer" data-testid={`text-product-name-${product.id}`}>
                      {product.name}
                    </h3>
                  </Link>
                  {product.inStock ? (
                    <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20" data-testid={`badge-stock-${product.id}`}>
                      In Stock
                    </Badge>
                  ) : (
                    <Badge variant="outline" className="bg-muted" data-testid={`badge-stock-${product.id}`}>
                      Out of Stock
                    </Badge>
                  )}
                </div>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2 leading-relaxed">
                  {product.description}
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-2xl font-bold text-primary" data-testid={`text-price-${product.id}`}>
                      KES {parseFloat(product.price).toFixed(2)}
                    </span>
                    <span className="text-sm text-muted-foreground ml-1">/ {product.unit}</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="p-6 pt-0 gap-2">
                <Link href={`/products/${product.id}`} className="flex-1">
                  <Button variant="outline" className="w-full" data-testid={`button-view-${product.id}`}>
                    View Details
                  </Button>
                </Link>
                <Button
                  className="flex-1"
                  onClick={() => onAddToCart(product)}
                  disabled={!product.inStock}
                  data-testid={`button-add-cart-${product.id}`}
                >
                  <ShoppingCart className="h-4 w-4 mr-2" />
                  Add to Cart
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <Leaf className="h-16 w-16 text-muted-foreground/50 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">No products available</h3>
          <p className="text-muted-foreground">Check back soon for fresh greens!</p>
        </div>
      )}
    </div>
  );
}
