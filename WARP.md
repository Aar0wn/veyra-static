# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

This is a landing page for VEYRA, an OnlyFans management agency. The project is a single-file vanilla HTML implementation:
- **Vanilla HTML/CSS/JS**: `index.html` - A complete standalone landing page with embedded CSS and JavaScript

The landing page includes an application form modal for potential clients.

## Architecture

### Vanilla Implementation (`index.html`)
- **Single-file architecture**: Complete landing page in one HTML file with embedded CSS and JavaScript
- **No dependencies**: Pure HTML, CSS, and JavaScript - no build process required
- **Self-contained**: All styles, scripts, and structure in a single 1,290-line file
- **Form handling**: Client-side validation with localStorage persistence and optional Zapier webhook integration

## Common Development Tasks

### Running the Project
```bash
# Serve the vanilla version locally
python3 -m http.server 8000
# OR
npx serve .

# Access at http://localhost:8000
```

### Testing Changes
- Edit `index.html` directly, refresh browser to see changes

### Form Configuration
- **Webhook integration**: Zapier webhook URL is configured at `https://hooks.zapier.com/hooks/catch/24510282/ud9a18k/`
- **Local storage**: All form data automatically saved to browser localStorage as `veyra_leads`
- **File uploads**: Validates image types (JPG/PNG) and size limits (5MB max)

### Validation Logic
- Email format validation
- Phone number validation (minimum 7 digits)
- Social media handle validation (`@username` format)
- Age verification (18+ required)
- Image file validation (type and size)

## Key Features

### Form Components
- **Personal Information**: Name, email, phone, location
- **Date Picker**: Custom calendar component with 18+ age validation
- **File Uploads**: Image upload with preview functionality
- **Consent Management**: Required agreement checkbox

### UI/UX Components
- **FAQ Section**: Collapsible Q&A with smooth animations
- **Modal System**: Centered application form with backdrop
- **Responsive Design**: Mobile-first approach with CSS Grid/Flexbox
- **Custom Styling**: CSS custom properties for theming

### Asset Management
- **Logo**: `public/logo.png` - VEYRA brand logo
- **Background**: `public/model.png` - Hero section background image
- **Responsive Images**: Proper loading and optimization

## Development Notes

- **No build system**: This is a simple static site project
- **Git repository**: Initialized but no commits yet - first commit needed
- **Asset paths**: Relative paths used for GitHub Pages compatibility
- **Form persistence**: Data stored locally even if webhook fails
- **Accessibility**: ARIA labels, keyboard navigation, focus management included

## File Structure
```
/home/admin/veyra-trial/
├── index.html           # Main landing page (vanilla implementation)
├── public/
│   ├── logo.png         # VEYRA logo image
│   └── model.png        # Background hero image
├── guide/
│   └── source.tsx       # Legacy React implementation (for reference)
└── .git/               # Git repository (no commits yet)
```

## Deployment

### GitHub Pages Ready
- Relative asset paths configured for subdirectory deployment
- Single file deployment possible with `index.html`
- No build process required for vanilla version

### Webhook Integration
- Zapier webhook configured and active at `https://hooks.zapier.com/hooks/catch/24510282/ud9a18k/`
- FormData multipart uploads supported for file attachments
- Graceful fallback to localStorage if webhook fails
