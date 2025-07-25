# Elito Cast Iron Catalogue

A modern, responsive web catalogue for Elito's premium cast iron cookware collection. Built with clean HTML, CSS, and JavaScript for optimal performance and user experience.

## 🌟 Features

- **Responsive Design** - Works perfectly on desktop, tablet, and mobile
- **Modern UI/UX** - Clean, professional design inspired by leading cookware brands
- **Fast Loading** - Optimized images and lightweight code
- **SEO Optimized** - Proper meta tags and semantic HTML
- **Easy Maintenance** - JSON-based product data for easy updates
- **Print Friendly** - Optimized for printing as physical catalogues

## 🚀 Quick Start

### Option 1: Netlify Drag & Drop (Easiest)
1. Download all files to your computer
2. Create a zip file of the entire project
3. Go to [netlify.com](https://netlify.com)
4. Drag and drop the zip file
5. Your site is live instantly!

### Option 2: Git + Netlify (Recommended)
1. Create a new repository on GitHub
2. Upload all files to the repository
3. Connect your GitHub repo to Netlify
4. Auto-deploy on every update

### Option 3: Netlify CLI
```bash
npm install -g netlify-cli
netlify deploy
netlify deploy --prod
```

## 📁 Project Structure

```
elito-catalogue/
├── index.html              # Main HTML file
├── css/
│   └── styles.css          # All CSS styles
├── js/
│   └── main.js             # JavaScript functionality
├── images/
│   ├── products/           # Product images
│   └── icons/              # Favicon and icons
├── data/
│   └── products.json       # Product data
└── README.md               # This file
```

## 🛠️ Setup Instructions

### 1. Add Your Product Images
1. Place all product images in the `images/products/` folder
2. Use this naming convention: `[PRODUCT-CODE]-[description].[ext]`
   - Example: `FE03-dosa-tawa-30cm.jpg`
3. Recommended image size: 800x800px for best quality

### 2. Update Product Data
Edit `data/products.json` to add/modify products:

```json
{
  "code": "FE03",
  "name": "Cast Iron Dosa Tawa",
  "size": "30cm",
  "quantity": 50,
  "series": "traditional",
  "image": "images/products/FE03-dosa-tawa-30cm.jpg",
  "bestseller": true,
  "description": "Perfect for making crispy dosas"
}
```

### 3. Customize Branding
- Update company information in `index.html`
- Modify colors and styling in `css/styles.css`
- Replace favicon in `images/icons/`

## 🎨 Customization

### Colors
Update CSS variables in `css/styles.css`:
```css
:root {
    --primary-color: #1a1a1a;
    --accent-color: #007bff;
    --background-color: #ffffff;
    /* ... other colors */
}
```

### Content
- **Header**: Edit brand name and tagline in `index.html`
- **Benefits**: Modify the benefits section
- **Contact Info**: Update contact details
- **SEO**: Update meta tags for better search engine optimization

## 📱 Responsive Design

The catalogue is fully responsive and tested on:
- ✅ Desktop (1920px+)
- ✅ Laptop (1366px)
- ✅ Tablet (768px)
- ✅ Mobile (320px+)

## 🔧 Technical Features

- **Modern CSS Grid & Flexbox** for responsive layouts
- **CSS Custom Properties** for easy theming
- **Intersection Observer API** for scroll animations
- **Lazy Loading** for images
- **Error Handling** for missing images
- **Print Optimization** for physical catalogues

## 📈 Performance Optimizations

- Lightweight CSS (no frameworks)
- Minimal JavaScript (vanilla JS)
- Optimized images with lazy loading
- CSS animations (hardware accelerated)
- Efficient DOM manipulation

## 🌐 Browser Support

- ✅ Chrome 80+
- ✅ Firefox 75+
- ✅ Safari 13+
- ✅ Edge 80+

## 📄 License

This project is created for Elito Cast Iron Cookware. All rights reserved.

## 🤝 Support

For technical support or customization requests, please contact the development team.

---

**Built with ❤️ for Elito Cast Iron Cookware**

Made in Bangalore, India 🇮🇳