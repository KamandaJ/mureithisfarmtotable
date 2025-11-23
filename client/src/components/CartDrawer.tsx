import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Minus, Plus, Trash2, ShoppingBag } from "lucide-react";
import type { CartItemWithProduct } from "@shared/schema";
import { getProductImage } from "@/lib/productImages";

interface CartDrawerProps {
  open: boolean;
  onClose: () => void;
  items: CartItemWithProduct[];
  onUpdateQuantity: (itemId: string, newQuantity: number) => void;
  onRemoveItem: (itemId: string) => void;
}

export function CartDrawer({ open, onClose, items, onUpdateQuantity, onRemoveItem }: CartDrawerProps) {
  const subtotal = items.reduce((sum, item) => sum + parseFloat(item.product.price) * item.quantity, 0);

  return (
    <Sheet open={open} onOpenChange={onClose}>
      <SheetContent side="right" className="w-full sm:max-w-md flex flex-col">
        <SheetHeader>
          <SheetTitle className="flex items-center gap-2">
            <ShoppingBag className="h-5 w-5" />
            Shopping Cart
          </SheetTitle>
        </SheetHeader>

        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center text-center px-4" data-testid="cart-empty">
            <ShoppingBag className="h-16 w-16 text-muted-foreground/50 mb-4" />
            <h3 className="font-semibold text-lg mb-2">Your cart is empty</h3>
            <p className="text-sm text-muted-foreground mb-6">
              Add some fresh indigenous vegetables to get started
            </p>
            <Button onClick={onClose} data-testid="button-continue-shopping">
              Continue Shopping
            </Button>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto py-6">
              <div className="space-y-4">
                {items.map((item) => (
                  <div
                    key={item.id}
                    className="flex gap-4 hover-elevate rounded-md p-3 -mx-3"
                    data-testid={`cart-item-${item.product.id}`}
                  >
                    <img
                      src={getProductImage(item.product.image)}
                      alt={item.product.name}
                      className="w-20 h-20 object-cover rounded-md"
                      data-testid={`img-cart-${item.product.id}`}
                    />
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium mb-1 truncate" data-testid={`text-cart-name-${item.product.id}`}>
                        {item.product.name}
                      </h4>
                      <p className="text-sm text-muted-foreground mb-2">
                        KES {parseFloat(item.product.price).toFixed(2)} / {item.product.unit}
                      </p>
                      <div className="flex items-center gap-2">
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-8 w-8"
                          onClick={() => {
                            if (item.quantity === 1) {
                              onRemoveItem(item.id);
                            } else {
                              onUpdateQuantity(item.id, item.quantity - 1);
                            }
                          }}
                          data-testid={`button-decrease-${item.product.id}`}
                        >
                          <Minus className="h-3 w-3" />
                        </Button>
                        <span className="w-8 text-center text-sm font-medium" data-testid={`text-quantity-${item.product.id}`}>
                          {item.quantity}
                        </span>
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-8 w-8"
                          onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                          data-testid={`button-increase-${item.product.id}`}
                        >
                          <Plus className="h-3 w-3" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 ml-auto"
                          onClick={() => onRemoveItem(item.id)}
                          data-testid={`button-remove-${item.product.id}`}
                        >
                          <Trash2 className="h-4 w-4 text-destructive" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t pt-4 space-y-4">
              <div className="flex items-center justify-between text-lg font-semibold">
                <span>Subtotal</span>
                <span data-testid="text-cart-subtotal">KES {subtotal.toFixed(2)}</span>
              </div>
              <Separator />
              <p className="text-sm text-muted-foreground">
                Contact us to complete your order and arrange delivery or pickup.
              </p>
              <Button className="w-full" size="lg" onClick={() => window.location.href = '/contact'} data-testid="button-checkout">
                Contact Us to Order
              </Button>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
}
