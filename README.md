# VEYRA - Social Media Management Agency Landing Page

A premium, professional landing page for VEYRA Management Agency - a boutique partner for creators pursuing intimacy-first brands.

🔗 **Live Site**: https://aar0wn.github.io/veyra-static/

## ✨ Features

### 📋 **Application Form**
- **Zapier Integration**: Automated form submissions with webhook processing
- **File Uploads**: Support for headshots and bodyshot photos (JPG/PNG, max 5MB)
- **Age Verification**: Custom date picker with 18+ validation
- **Social Handle Formatting**: Automatic @username formatting
- **Form Validation**: Client-side validation with error messaging
- **localStorage Backup**: Reliable data storage even if webhook fails

### 🎨 **Design & UX**
- **Responsive Design**: Mobile-first approach with breakpoint optimization
- **Custom Calendar**: Elegant date picker with smooth animations
- **Professional Branding**: Enhanced logo sizing and premium aesthetic
- **Interactive FAQ**: Collapsible Q&A section
- **Accessibility**: ARIA labels, keyboard navigation, focus management

### 🔧 **Technical**
- **Vanilla HTML/CSS/JS**: No dependencies, no build process
- **Single File Architecture**: Complete implementation in `index.html`
- **Performance Optimized**: Fast loading, minimal footprint
- **GitHub Pages Ready**: Configured for subdirectory deployment

## 🚀 Quick Start

### Local Development
```bash
# Serve locally
python3 -m http.server 8000
# OR
npx serve .

# Access at http://localhost:8000
```

### Deployment
The site is automatically deployed to GitHub Pages from the `master` branch.

## 📁 File Structure
```
├── index.html           # Complete landing page
├── public/
│   ├── logo.png         # VEYRA brand logo
│   └── model.png        # Hero background image
├── WARP.md             # Development documentation
└── README.md           # This file
```

## ⚙️ Configuration

### Webhook Integration
The form submits to a Zapier webhook configured in the JavaScript:
```javascript
const ZAP_WEBHOOK_URL = "https://hooks.zapier.com/hooks/catch/24510282/ud9a18k/";
```

### Form Fields
- **Required**: First Name, Last Name, Email, Phone, State/Region, Date of Birth, Photos (3), Consent
- **Optional**: Social Media Handle

### Validation Rules
- **Email**: Standard email format validation
- **Phone**: Minimum 7 digits required
- **Age**: Must be 18+ years old
- **Files**: JPG/PNG only, 5MB maximum per file
- **Social Handle**: Auto-formatted to @username (optional)

## 🎯 Form Submission Flow

1. **Client Validation** → All fields validated before submission
2. **Data Processing** → Form data and files prepared for transmission
3. **Dual Storage**:
   - **Zapier Webhook** → Complete form data with file uploads
   - **localStorage** → Text data backup for reliability
4. **User Feedback** → Success message and form reset
5. **Error Handling** → Graceful fallback if webhook fails

## 🔐 Features

- **File Upload Validation**: Type and size restrictions
- **Age Verification**: Calendar-based 18+ checking
- **Handle Formatting**: Automatic @ symbol prepending
- **Responsive Calendar**: Mobile-optimized date selection
- **Form Persistence**: Data saved locally during session
- **Professional UX**: Loading states, error messaging, success confirmation

## 📱 Responsive Breakpoints

- **Desktop**: Full-featured experience
- **Tablet** (≤767px): Optimized layouts and interactions
- **Mobile** (≤480px): Compact design with touch-friendly elements

## 🛠️ Development

### Key Components
- **Hero Section**: Background image with overlay and branding
- **Application Form**: Modal-based with comprehensive validation
- **FAQ Section**: Expandable Q&A with smooth animations
- **About Section**: Company information and value proposition

### Asset Management
- All images served from `public/` directory
- Relative paths for GitHub Pages compatibility
- Optimized loading with proper alt tags and lazy loading

## 🚢 Deployment Status

- ✅ **Repository**: Public on GitHub
- ✅ **GitHub Pages**: Automatically deployed
- ✅ **Domain**: Available at github.io subdomain
- ✅ **SSL**: Secure HTTPS by default
- ✅ **CDN**: Global distribution via GitHub's infrastructure

## 📄 License

This project is proprietary to VEYRA Management Agency.

---

**VEYRA** - *Selective creators. Premium results.*
