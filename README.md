# New Delhi Tourism Website

A modern, responsive tourism website showcasing attractions in New Delhi, India.

## Project Structure

```
local-attraction/
├── index.html
├── styles.css
├── script.js
├── README.md
└── assets/
    └── images/
        ├── hero-bg.jpg          # Hero section background image
        ├── red-fort.jpg          # Red Fort attraction image
        ├── india-gate.jpg        # India Gate attraction image
        ├── qutub-minar.jpg       # Qutub Minar attraction image
        ├── lotus-temple.jpg      # Lotus Temple attraction image
        ├── humayun-tomb.jpg      # Humayun's Tomb attraction image
        ├── akshardham-temple.jpg  # Akshardham Temple attraction image
        ├── chandni-chowk.jpg     # Chandni Chowk attraction image
        ├── jama-masjid.jpg       # Jama Masjid attraction image
        ├── lodi-gardens.jpg      # Lodi Gardens attraction image
        └── national-museum.jpg   # National Museum attraction image
```

## Setup Instructions

1. **Create the assets folder structure:**

   ```bash
   mkdir -p assets/images
   ```

2. **Add your images:**

   - Place all attraction images in the `assets/images/` folder
   - Use the exact filenames listed above
   - Recommended image dimensions:
     - Hero background: 1920x1080px or larger
     - Attraction images: 800x600px or larger
   - Supported formats: JPG, PNG, WebP

3. **Image Naming:**
   - All images should match the filenames in the project structure
   - Use lowercase with hyphens (e.g., `red-fort.jpg`)
   - Ensure proper file extensions (.jpg, .png, etc.)

## Features

- **Hero Section**: Full-page hero image with scroll indicator
- **Featured Carousel**: Swiper.js powered carousel for featured attractions
- **Filter System**: Category-based filtering (Monuments, Religious, Markets, Parks, Museums)
- **Responsive Design**: Mobile-first approach with breakpoints
- **Modal System**: Detailed information modals for each attraction
- **Modern UI**: Font Awesome icons, gradients, glassmorphism effects

## Technologies Used

- HTML5
- CSS3 (Modern CSS features)
- JavaScript (Vanilla JS)
- Swiper.js (Carousel library)
- Font Awesome 6.4.0 (Icons)
- Google Fonts (Inter & Playfair Display)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Notes

- All images are loaded from the local `assets/images/` folder
- Make sure all image files exist before running the website
- For best performance, optimize images before adding them to the project
