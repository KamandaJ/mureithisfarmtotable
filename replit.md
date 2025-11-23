# Fresh Greens - Indigenous Vegetables E-Commerce

An e-commerce website for selling indigenous leafy vegetables with a focus on agricultural heritage and sustainable farming practices.

## Project Overview

**Purpose**: Online store for small-scale farmer selling indigenous leafy vegetables  
**Launch Date**: November 23, 2025  
**Status**: MVP Complete - Ready for deployment

## Products

- **Amaranth** - Ancient grain leaves rich in iron, protein, and vitamins
- **Black Nightshade (Managu)** - Traditional African vegetable high in iron and calcium
- **Cowpea Leaves** - Nutritious greens packed with protein and vitamins
- **Fordhook Swisschard** - Colorful stems with mild, earthy flavor

## Features Implemented

### Frontend Pages
- **Home** (`/`) - Hero section with agricultural imagery and call-to-action
- **Products** (`/products`) - Product catalog grid with cards showing images, names, prices
- **Product Detail** (`/products/:id`) - Individual product pages with nutrition info, quantity selector
- **About** (`/about`) - Information about indigenous farming practices and heritage
- **Contact** (`/contact`) - Contact form for inquiries and bulk orders

### Shopping Cart
- Add products to cart from catalog or detail pages
- Adjust quantities with increment/decrement controls
- Remove items from cart
- Real-time cart badge showing total item count
- Cart drawer with subtotal calculations
- Backend cart persistence using in-memory storage

### Backend API
- `GET /api/products` - Fetch all products
- `GET /api/products/:id` - Fetch single product
- `GET /api/cart` - Fetch cart items with hydrated product data
- `POST /api/cart` - Add item to cart (merges duplicates)
- `PATCH /api/cart/:id` - Update cart item quantity
- `DELETE /api/cart/:id` - Remove cart item
- `POST /api/contact` - Submit contact form

## Tech Stack

**Frontend**:
- React with TypeScript
- Wouter for routing
- TanStack Query for data fetching
- Shadcn UI components
- Tailwind CSS for styling
- Framer Motion for animations

**Backend**:
- Express.js
- In-memory storage (MemStorage)
- Zod validation
- RESTful API design

**Design**:
- Typography: Merriweather/Playfair Display (headers), Open Sans (body)
- Colors: Earth-tone palette with greens and browns
- Responsive, mobile-first design
- Modern, clean aesthetic reflecting agricultural heritage

## Project Structure

```
client/src/
  pages/           - Home, Products, ProductDetail, About, Contact
  components/      - Header, Footer, CartDrawer, ui/ (Shadcn components)
  lib/            - productImages.ts, queryClient.ts
server/
  storage.ts      - IStorage interface and MemStorage implementation
  routes.ts       - API endpoint definitions
  index-dev.ts    - Development server entry
shared/
  schema.ts       - Type definitions and Zod schemas
```

## Key Implementation Details

### Cart System
- Backend returns hydrated `CartItemWithProduct[]` to eliminate frontend data dependencies
- Cart operations merge duplicate products automatically
- Quantity of 0 triggers item deletion
- All mutations invalidate cart cache for consistency

### Product Images
- Generated AI images stored in `attached_assets/generated_images/`
- Imported via `@assets` alias in frontend
- Product image mapping in `client/src/lib/productImages.ts`

### Form Handling
- React Hook Form with Zod validation
- Contact form submissions validated and stored
- Success/error toasts for user feedback

## Running the Project

```bash
npm run dev
```

Frontend: http://localhost:5000  
Backend API: http://localhost:5000/api

## Future Enhancements

- **Optimistic Updates**: Add optimistic cache updates for smoother cart interactions
- **Product Snapshots**: Persist product data snapshots with cart items for price consistency
- **User Authentication**: Add user accounts and order history
- **Payment Integration**: Integrate Stripe or similar for checkout
- **Admin Panel**: Product management and order fulfillment interface
- **Email Notifications**: Automated order confirmations and inquiries
- **Database Migration**: Move from in-memory to persistent database (PostgreSQL)
- **Search & Filters**: Product search and category filtering
- **Reviews & Ratings**: Customer feedback system
- **Inventory Management**: Stock tracking and low-stock alerts

## Testing

End-to-end tests verified:
- ✅ Full shopping journey (browse → view → add to cart → manage cart)
- ✅ Product catalog and detail page functionality
- ✅ Cart operations (add, update quantity, remove)
- ✅ Contact form submission
- ✅ Navigation and routing
- ✅ Responsive layout and design
