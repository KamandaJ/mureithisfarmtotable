import { type Product, type InsertProduct, type ContactMessage, type InsertContactMessage, type CartItem, type InsertCartItem, type CartItemWithProduct } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  getAllProducts(): Promise<Product[]>;
  getProductById(id: string): Promise<Product | undefined>;
  createContactMessage(message: InsertContactMessage): Promise<ContactMessage>;
  getAllCartItems(): Promise<CartItem[]>;
  getAllCartItemsWithProducts(): Promise<CartItemWithProduct[]>;
  addCartItem(item: InsertCartItem): Promise<CartItem>;
  updateCartItem(id: string, quantity: number): Promise<CartItem | undefined>;
  deleteCartItem(id: string): Promise<boolean>;
}

export class MemStorage implements IStorage {
  private products: Map<string, Product>;
  private contactMessages: Map<string, ContactMessage>;
  private cartItems: Map<string, CartItem>;

  constructor() {
    this.products = new Map();
    this.contactMessages = new Map();
    this.cartItems = new Map();
    this.seedProducts();
  }

  private seedProducts() {
    const productsData: Omit<Product, "id">[] = [
      {
        name: "Amaranth (Terere)",
        description: "Vibrant green and purple-red leafy vegetable rich in protein, iron, and calcium. A traditional favorite with a mild, earthy flavor.",
        price: "80.00",
        unit: "bunch",
        image: "amaranth_product_photo.png",
        nutritionalInfo: "Amaranth leaves are exceptionally high in protein (compared to most greens), iron, calcium, and vitamins A, C, and K. They contain essential amino acids and powerful antioxidants that support immune health and bone strength.",
        preparationTips: "Wash thoroughly and remove tough stems. Sauté with onions, tomatoes, and a touch of salt for 5-7 minutes. Amaranth pairs wonderfully with ugali or rice. The tender leaves can also be added raw to salads.",
        inStock: 1,
      },
      {
        name: "Black Nightshade (Managu)",
        description: "Dark green indigenous leaves with a unique, slightly bitter taste. Packed with nutrients and beloved in traditional cuisine.",
        price: "70.00",
        unit: "bunch",
        image: "black_nightshade_product_photo.png",
        nutritionalInfo: "Black nightshade is rich in iron, calcium, vitamins A and C, and contains beneficial compounds that support digestive health. It's particularly valued for its high antioxidant content.",
        preparationTips: "Boil leaves for 10-15 minutes to reduce bitterness, then drain and sauté with onions, tomatoes, and cream or milk. The slight bitterness balances beautifully with creamy accompaniments. Traditionally served with ugali.",
        inStock: 1,
      },
      {
        name: "Cowpea Leaves (Kunde)",
        description: "Tender, bright green leaves from cowpea plants. Mild flavor and delicate texture make them a family favorite.",
        price: "75.00",
        unit: "bunch",
        image: "cowpea_leaves_product_photo.png",
        nutritionalInfo: "Cowpea leaves provide excellent amounts of protein, fiber, iron, and folate. They're particularly rich in vitamins A and C, supporting eye health and immune function. Low in calories but high in nutrients.",
        preparationTips: "Quick-cooking greens that retain their bright color. Sauté with onions, garlic, and tomatoes for 5-8 minutes until tender. Add coconut milk for a creamy variation. Serve with ugali, rice, or as a side to any protein.",
        inStock: 1,
      },
      {
        name: "Fordhook Swiss Chard",
        description: "Vibrant green leaves with crisp white or light green stems. Mild, slightly sweet flavor with a tender texture when cooked.",
        price: "90.00",
        unit: "bunch",
        image: "swiss_chard_product_photo.png",
        nutritionalInfo: "Swiss chard is a nutritional powerhouse containing vitamins K, A, and C, along with magnesium, potassium, and iron. It supports bone health, blood sugar regulation, and cardiovascular wellness.",
        preparationTips: "Separate stems from leaves—stems take longer to cook. Chop stems and sauté first for 3-4 minutes, then add chopped leaves and cook for another 3-5 minutes. Delicious with garlic, lemon juice, or in soups and stews.",
        inStock: 1,
      },
    ];

    productsData.forEach((productData) => {
      const id = randomUUID();
      const product: Product = { ...productData, id };
      this.products.set(id, product);
    });
  }

  async getAllProducts(): Promise<Product[]> {
    return Array.from(this.products.values());
  }

  async getProductById(id: string): Promise<Product | undefined> {
    return this.products.get(id);
  }

  async createContactMessage(insertMessage: InsertContactMessage): Promise<ContactMessage> {
    const id = randomUUID();
    const message: ContactMessage = { ...insertMessage, id };
    this.contactMessages.set(id, message);
    return message;
  }

  async getAllCartItems(): Promise<CartItem[]> {
    return Array.from(this.cartItems.values());
  }

  async getAllCartItemsWithProducts(): Promise<CartItemWithProduct[]> {
    const cartItems = Array.from(this.cartItems.values());
    return cartItems
      .map((item) => {
        const product = this.products.get(item.productId);
        if (!product) return null;
        return {
          ...item,
          product,
        };
      })
      .filter((item): item is CartItemWithProduct => item !== null);
  }

  async addCartItem(insertItem: InsertCartItem): Promise<CartItem> {
    const existingItem = Array.from(this.cartItems.values()).find(
      (item) => item.productId === insertItem.productId
    );

    if (existingItem) {
      existingItem.quantity += insertItem.quantity;
      this.cartItems.set(existingItem.id, existingItem);
      return existingItem;
    }

    const id = randomUUID();
    const cartItem: CartItem = { ...insertItem, id };
    this.cartItems.set(id, cartItem);
    return cartItem;
  }

  async updateCartItem(id: string, quantity: number): Promise<CartItem | undefined> {
    const item = this.cartItems.get(id);
    if (!item) {
      return undefined;
    }
    
    if (quantity <= 0) {
      this.cartItems.delete(id);
      return undefined;
    }
    
    item.quantity = quantity;
    this.cartItems.set(id, item);
    return item;
  }

  async deleteCartItem(id: string): Promise<boolean> {
    return this.cartItems.delete(id);
  }
}

export const storage = new MemStorage();
