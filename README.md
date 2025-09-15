# Arman Rakib - Portfolio Website

A modern, responsive portfolio website showcasing Arman Rakib's experience and projects as an Android Developer.

## Live Demo

The website is hosted on GitHub Pages and can be accessed at: [https://armanrakib520.github.io](https://armanrakib520.github.io)

## Features

- **Modern Design**: Clean, professional UI with consistent color scheme and typography
- **Responsive**: Fully responsive design that works on all devices and screen sizes
- **Interactive Elements**: Smooth animations, modal project details, and micro-interactions
- **Performance Optimized**: Fast loading times with optimized images and efficient code
- **Accessibility**: Follows WCAG guidelines with semantic HTML, proper alt text, and keyboard navigation
- **Single-Page Application**: Smooth scrolling between sections without page reloads

## Technologies Used

- HTML5
- CSS3 (with CSS Variables for theming)
- JavaScript (ES6+)
- [AOS - Animate On Scroll](https://michalsnik.github.io/aos/) for scroll animations
- [Font Awesome](https://fontawesome.com/) for icons

## Project Structure

```
/
├── index.html          # Main HTML file with content structure
├── style.css           # CSS styling and animations
├── script.js           # JavaScript functionality
└── README.md           # Documentation
```

## Sections

1. **Hero Section**: Introduction with name, role, and tagline
2. **About**: Brief professional summary and statistics
3. **Skills**: Technical skills with visual indicators
4. **Experience**: Work history presented as a timeline
5. **Projects**: Featured projects with thumbnails and interactive modal details
6. **Contact**: Contact information and form
7. **Footer**: Copyright information and scroll-to-top button

## Performance Optimizations

The website implements several performance optimizations:

- **Image Optimization**: Lazy loading, correct dimensions, and responsive images
- **Code Optimization**: Minified CSS/JS for production
- **Efficient Animations**: Using CSS transforms and opacity for smooth animations
- **Resource Handling**: Deferred loading of non-critical JavaScript
- **Throttled Event Handlers**: Preventing excessive function calls during scrolling
- **Intersection Observer API**: For efficient scroll-based animations
- **Content Visibility**: Improved rendering performance for offscreen content

## Accessibility Features

- **Semantic HTML**: Proper HTML structure for better screen reader compatibility
- **ARIA Labels**: Where appropriate for improved accessibility
- **Keyboard Navigation**: All interactive elements accessible via keyboard
- **Sufficient Color Contrast**: Meeting WCAG AA standards
- **Text Alternatives**: Alt text for all images
- **Focus Management**: Visible focus indicators for keyboard users

## Browser Compatibility

The website is compatible with:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Opera (latest)
- Mobile browsers (iOS Safari, Chrome for Android)

## Local Development

### Prerequisites

- A modern web browser
- Basic knowledge of HTML, CSS, and JavaScript
- A code editor (VS Code, Sublime Text, etc.)

### Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/armanrakib520/armanrakib520.github.io.git
   cd armanrakib520.github.io
   ```

2. **Open in browser**:
   Simply open `index.html` in your browser to view the website locally.

3. **Make changes**:
   Edit the HTML, CSS, or JavaScript files as needed. Refresh your browser to see the changes.

## Deployment

### GitHub Pages Deployment

1. **Push to GitHub**:
   ```bash
   git add .
   git commit -m "Update portfolio website"
   git push origin main
   ```

2. **Enable GitHub Pages**:
   - Go to your repository on GitHub
   - Navigate to Settings > Pages
   - Set the source branch to `main`
   - Save the settings

3. **Access your website**:
   Your website will be available at `https://<your-username>.github.io`

### Alternative Hosting Options

You can also host this website on:

- **Netlify**: Drag and drop the folder or connect to your GitHub repository
- **Vercel**: Connect to your GitHub repository for automatic deployments
- **Any static hosting service**: Upload the files to any service that can serve static files

## Customization

### Changing Personal Information

1. Edit `index.html` to update:
   - Name, role, and tagline in the hero section
   - About me text
   - Experience details
   - Project information
   - Contact details

2. Replace placeholder images with actual project screenshots

### Modifying the Design

1. **Colors**: Edit CSS variables in `style.css` to change the color scheme:
   ```css
   :root {
     --primary: #4A90E2;
     --secondary: #FF6B6B;
     /* other color variables */
   }
   ```

2. **Typography**: Change the font by updating the Google Fonts link in `index.html` and the font-family in `style.css`

3. **Layout**: Modify the grid layouts and section structures in `style.css`

## License

This project is open source and available under the [MIT License](LICENSE).

## Credits

- [AOS - Animate On Scroll](https://michalsnik.github.io/aos/)
- [Font Awesome](https://fontawesome.com/)
- [Google Fonts](https://fonts.google.com/)

---

Designed and developed by Arman Rakib | © 2025