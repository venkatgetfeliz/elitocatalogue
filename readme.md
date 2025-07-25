# Elito Cast Iron Catalogue

A modern, responsive web catalogue for Elito's premium cast iron cookware collection. Built with clean HTML, CSS, and JavaScript for optimal performance and user experience.

## 🌟 Features

- **Responsive Design** - Works perfectly on desktop, tablet, and mobile
- **Modern UI/UX** - Clean, professional design with Elito red branding
- **Interactive Product Gallery** - Multiple images per product with hover carousel
- **Product Detail Modals** - Detailed specifications, features, and image galleries
- **Fast Loading** - Optimized images and lightweight code
- **SEO Optimized** - Proper meta tags and semantic HTML
- **Easy Maintenance** - JSON-based product data for easy updates
- **Print Friendly** - Optimized for printing as physical catalogues

## 🚀 Live Demo

Visit the live catalogue: [Your Netlify URL will go here]

## 📁 Project Structure

```
elito-cast-iron-catalogue/
├── index.html              # Main HTML file
├── README.md               # This file
├── css/
│   └── styles.css          # All CSS styles
├── js/
│   └── main.js             # JavaScript functionality
├── images/
│   ├── products/           # Product images (organized by product)
│   │   ├── FE03-dosa-tawa-30cm/
│   │   │   ├── FE03-dosa-tawa-30cm-main.jpg
│   │   │   ├── FE03-dosa-tawa-30cm-side.jpg
│   │   │   └── FE03-dosa-tawa-30cm-inuse.jpg
│   │   ├── FE04-roti-tawa-26cm/
│   │   │   ├── FE04-roti-tawa-26cm-main.jpg
│   │   │   ├── FE04-roti-tawa-26cm-top.jpg
│   │   │   └── FE04-roti-tawa-26cm-cooking.jpg
│   │   └── ... (other product folders)
│   └── icons/              # Favicon and icons
├── data/
│   └── products.json       # Product data
```

## 🛠️ Adding Product Images

### Image Organization Structure:
Each product gets its own folder under `images/products/`:

#### Naming Convention:
- **Folder**: `[PRODUCT-CODE]-[product-description]/`
- **Images**: `[PRODUCT-CODE]-[product-description]-[view-type].jpg`

#### Image Types per Product:
1. **main.jpg**: Primary hero shot of the product
2. **side/angle/top.jpg**: Different angle view
3. **inuse/cooking/filled.jpg**: Product in action/context

#### Recommended Image Specifications:
- **Resolution**: 800x800px minimum
- **Format**: JPG (for photographs)
- **Quality**: High quality, well-lit, white/neutral background
- **Consistency**: Same lighting and style across all products

### Example Structure:
```
images/products/
├── FE03-dosa-tawa-30cm/
│   ├── FE03-dosa-tawa-30cm-main.jpg     # Primary product shot
│   ├── FE03-dosa-tawa-30cm-side.jpg     # Side angle view
│   └── FE03-dosa-tawa-30cm-inuse.jpg    # Product being used
├── FE04-roti-tawa-26cm/
│   ├── FE04-roti-tawa-26cm-main.jpg
│   ├── FE04-roti-tawa-26cm-top.jpg
│   └── FE04-roti-tawa-26cm-cooking.jpg
└── ... (continue for all 17 products)
```

## 🎨 Brand Identity

### **Elito Brand Colors:**
- **Elito Red**: `#E53E3E` (primary brand color)
- **Dark Text**: `#1a1a1a` (main text)
- **Light Text**: `#666666` (secondary text)
- **Background**: `#ffffff` (clean white)
- **Surface**: `#f5f3f0` (elegant beige)

### **Typography:**
- **Font Family**: Inter (Google Fonts)
- **Logo**: Bold, uppercase "ELITO" in Elito Red
- **Tagline**: "Making Cooking Healthier"

## 📱 Interactive Features

### **Product Gallery:**
- **Multiple Images**: 2-3 images per product
- **Hover Carousel**: Images automatically scroll left-to-right on hover
- **Visual Indicators**: Dots show current image in carousel
- **Smooth Transitions**: 4-second cycle with seamless animation

### **Product Details:**
- **Clickable Cards**: Entire product tile opens detail modal
- **Full Gallery**: Large main image with thumbnail navigation
- **Detailed Info**: Extended descriptions, features, and specifications
- **Easy Navigation**: Click thumbnails or use keyboard (Escape to close)

### **Responsive Design:**
- **Mobile Optimized**: Touch-friendly interface on mobile devices
- **Tablet Support**: Optimized layouts for tablet viewing
- **Desktop Experience**: Full-featured experience with hover effects

## 🏪 Product Collection

### **Traditional Series (9 Products):**
- Cast Iron Dosa Tawa (30cm & 26cm)
- Cast Iron Roti Tawa (26cm)
- Cast Iron Paniyaram Pan (12 pits)
- Cast Iron Kadai (24cm & 20cm with curved handle)
- Cast Iron Concave Tawa (24cm)
- Cast Iron Skillet (15cm)
- Cast Iron Tadka Pan (4 inch)

### **Premium White Handle Series (8 Products):**
- Cast Iron WH Dosa Tawa (300mm)
- Cast Iron WH Roti Tawa (205mm)
- Cast Iron WH Kadai (255mm & 205mm)
- Cast Iron WH Wok (255mm)
- Cast Iron WH Fry Pan (255mm & 205mm)
- Cast Iron WH Grill Pan (280mm)

## 🚀 Deployment

### **Netlify Deployment:**
1. **Connect GitHub**: Link your repository to Netlify
2. **Auto-Deploy**: Automatic builds on every push to main branch
3. **Custom Domain**: Add your own domain name
4. **SSL Certificate**: Free HTTPS certificate included
5. **CDN Distribution**: Global content delivery network

### **Manual Deployment:**
1. Download repository as ZIP
2. Upload to any web hosting service
3. Ensure all file paths are correct

## 🔧 Technical Features

- **Modern CSS Grid & Flexbox** for responsive layouts
- **CSS Custom Properties** for easy theming
- **Intersection Observer API** for scroll animations
- **Lazy Loading** for images
- **Error Handling** for missing images
- **Print Optimization** for physical catalogues
- **SEO Meta Tags** for search engine optimization

## 📈 Performance Optimizations

- **Lightweight CSS** (no frameworks)
- **Minimal JavaScript** (vanilla JS)
- **Optimized Images** with lazy loading
- **CSS Animations** (hardware accelerated)
- **Efficient DOM Manipulation**

## 🌐 Browser Support

- ✅ Chrome 80+
- ✅ Firefox 75+
- ✅ Safari 13+
- ✅ Edge 80+
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 📄 Product Data Management

### **Adding New Products:**
1. Add product images to `images/products/[PRODUCT-FOLDER]/`
2. Update `data/products.json` with new product information
3. Deploy changes - the site updates automatically

### **JSON Structure:**
```json
{
  "code": "FE03",
  "name": "Cast Iron Dosa Tawa",
  "size": "30cm",
  "quantity": 50,
  "series": "traditional",
  "images": [
    "images/products/FE03-dosa-tawa-30cm/FE03-dosa-tawa-30cm-main.jpg",
    "images/products/FE03-dosa-tawa-30cm/FE03-dosa-tawa-30cm-side.jpg",
    "images/products/FE03-dosa-tawa-30cm/FE03-dosa-tawa-30cm-inuse.jpg"
  ],
  "bestseller": true,
  "description": "Short description",
  "detailedDescription": "Long description for modal",
  "features": ["Feature 1", "Feature 2"],
  "specifications": {
    "diameter": "30cm",
    "weight": "2.4kg"
  }
}
```

## 🤝 Contributing

To update the catalogue:
1. Fork the repository
2. Make your changes
3. Test locally
4. Submit a pull request

## 📞 Contact

**Elito - Making Cooking Healthier**
- **Location**: Bangalore, Karnataka, India
- **Business**: Premium Cast Iron Cookware (Wholesale & Retail)
- **Speciality**: Traditional & Modern Cast Iron Solutions

## 📄 License

This project is created for Elito Cast Iron Cookware. All rights reserved.

---

**Built with ❤️ for Elito Cast Iron Cookware**  
*Made in Bangalore, India* 🇮🇳