# Design Guidelines: Indigenous Leafy Vegetables E-Commerce

## Design Approach

**Reference-Based:** Drawing inspiration from modern farm-to-table e-commerce sites (Farmbox Direct, Thrive Market) combined with clean product showcase patterns (Shopify stores). Focus on authentic, earthy aesthetics that communicate freshness, locality, and traditional knowledge while maintaining modern e-commerce functionality.

**Core Principles:**
- Authenticity over polish: Celebrate small-scale farming
- Educational storytelling: Connect products to heritage and nutrition
- Visual freshness: Photography-first approach showcasing produce vibrancy
- Trust-building: Transparent about farming practices and delivery

## Typography System

**Font Families:**
- Headers: Merriweather or Playfair Display (serif for warmth and tradition)
- Body: Inter or Open Sans (clean readability for product info)

**Hierarchy:**
- Hero Headlines: text-5xl to text-7xl, font-bold
- Section Headers: text-3xl to text-4xl, font-semibold
- Product Names: text-xl to text-2xl, font-medium
- Body Text: text-base to text-lg, leading-relaxed
- Pricing: text-2xl, font-bold (prominent but not garish)
- Captions/Labels: text-sm, font-medium

## Layout System

**Spacing Primitives:** Use Tailwind units of 4, 6, 8, 12, 16, 20 for consistency
- Component padding: p-6 to p-8
- Section spacing: py-16 to py-24 on desktop, py-12 on mobile
- Card gaps: gap-6 to gap-8
- Container max-width: max-w-7xl for main content

**Grid Strategy:**
- Product catalog: grid-cols-1 md:grid-cols-2 lg:grid-cols-3
- Feature sections: grid-cols-1 md:grid-cols-2 (text + image pairings)
- Mobile-first: Always stack to single column on mobile

## Component Library

### Navigation
- Sticky header with logo, product categories, cart icon, and contact link
- Simple horizontal menu on desktop, hamburger on mobile
- Cart badge showing item count
- Transparent overlay on hero, solid background on scroll

### Hero Section
- Full-width image showcasing vibrant fresh vegetables or farmer in field
- Height: 70-80vh (not forced 100vh)
- Centered overlay content with headline, subheadline, and primary CTA
- Buttons with backdrop-blur-md background for legibility over images

### Product Catalog
- Card-based grid layout with hover elevation effects
- Each card: Product image (square ratio), name, short description, price, "Add to Cart" button
- Quick view option on hover showing nutritional highlights
- Filter/sort options: By vegetable type, price, availability
- Search functionality for product discovery

### Product Detail Pages
- Large product imagery (potentially multiple angles/preparation states)
- Product name, price, and availability status prominently displayed
- Detailed description including origin, nutritional benefits, preparation tips
- "Add to Cart" with quantity selector
- Related products section (3-column grid)
- Growing season information and indigenous knowledge snippets

### Shopping Cart
- Slide-out drawer from right side (overlay pattern)
- Line items with thumbnail, name, quantity controls, remove option
- Subtotal, delivery estimate, checkout button
- Empty state with "Continue Shopping" prompt

### About/Story Section
- Two-column layout: Farmer photo/farm imagery + story text
- Highlight indigenous vegetable heritage and farming practices
- Include mission statement and sustainability commitments
- Personal touch: Farmer introduction, land stewardship philosophy

### Contact/Order Information
- Form fields: Name, email, phone, message (for bulk orders/inquiries)
- Delivery area information and schedule
- Alternative contact methods (phone, WhatsApp)
- Map or location reference if applicable

### Footer
- Multi-column layout (3-4 columns on desktop, stacked on mobile)
- Quick links: Products, About, Contact, FAQs
- Social media links (if applicable)
- Newsletter signup with context ("Weekly harvest updates")
- Payment methods accepted
- Operating hours and contact information

## Images

**Hero Image:** Full-width photograph of vibrant indigenous leafy vegetables - either freshly harvested bundles with morning dew, or the farmer tending crops in the field. Should convey freshness, authenticity, and connection to land.

**Product Images:** High-quality photos of each vegetable type on clean backgrounds (white or natural wooden surface). Square format (1:1 ratio). Show the vegetables at their freshest, possibly with water droplets for vibrancy.

**About Section:** Authentic photo of the farmer in their field or at harvest. Candid, natural lighting preferred over studio shots.

**Content Imagery:** Throughout site, intersperse close-up shots of vegetables, growing stages, and preparation/cooking contexts to educate and inspire.

## Interactions & Animations

**Minimal Approach:**
- Card hover: Subtle lift effect (shadow increase)
- Button states: Simple background opacity change on hover
- Cart drawer: Smooth slide-in animation (300ms ease)
- Image loading: Fade-in for perceived performance
- No scroll-triggered animations or parallax effects

## Accessibility

- All form inputs with visible labels and focus states
- Sufficient touch targets (min 44x44px) for mobile cart controls
- Alt text for all product and content images describing vegetables
- Color-independent information (don't rely solely on green for "in stock")
- Keyboard navigation for all interactive elements including cart and filters

## Content Density Philosophy

Every section serves a purpose - no empty space fillers:
- Hero: Immediate value proposition about fresh indigenous vegetables
- Product grid: Complete catalog presentation, not minimal samples
- Educational content: Indigenous knowledge, nutritional facts, cooking tips integrated naturally
- Trust signals: Farming certifications, delivery guarantees, customer testimonials if available

This creates a complete, professional e-commerce experience that honors traditional agricultural heritage while providing modern shopping convenience.