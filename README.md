# RAGtional Landing Page

A modern, responsive landing page for RAGtional - an AI agency specializing in RAG, LLMs, agents, and intelligent automation solutions.

## 🚀 Features

- **Responsive Design**: Built with Bootstrap 5 for mobile-first, responsive layouts
- **Dark/Light Mode**: Toggle between themes with persistent preference storage
- **Modern UI**: Clean, professional design with smooth animations and hover effects
- **TypeScript**: Full type safety with React functional components
- **Modular Architecture**: Organized component structure for easy maintenance
- **Accessibility**: WCAG compliant with proper focus management and ARIA labels

## 🛠️ Tech Stack

- **Frontend**: React 18 + TypeScript
- **Styling**: Bootstrap 5 + Custom CSS
- **Build Tool**: Webpack 5 + Babel
- **Icons**: Font Awesome 6
- **Development**: Hot reload with webpack-dev-server

## 📋 Sections

1. **Hero Section**: Compelling headline with animated AI network visualization
2. **Solutions**: Four main service offerings (n8n Workflows, RAG Pipelines, AI Agents, Custom Chatbots)
3. **Technology**: Tech stack showcase (Vector DBs, LLMs, LangChain, Document Processing)
4. **Use Cases**: Real-world applications with benefits and industry tags
5. **Footer**: Comprehensive navigation, contact info, and newsletter signup

## 🚀 Getting Started

### Prerequisites

- Node.js 16+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd ragtional-landing
```

2. Install dependencies:
```bash
npm install
```

3. Start development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:3000`

### Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run start` - Start development server
- `npm run build` - Build for production
- `npm test` - Run tests (placeholder)

## 🏗️ Project Structure

```
src/
├── components/          # React components
│   ├── Navbar.tsx      # Navigation bar with theme toggle
│   ├── Hero.tsx        # Hero section with CTA
│   ├── Solutions.tsx   # Solutions showcase
│   ├── Technology.tsx  # Technology stack
│   ├── UseCases.tsx    # Use cases and examples
│   └── Footer.tsx      # Footer with links and contact
├── contexts/           # React contexts
│   └── ThemeContext.tsx # Theme management
├── App.tsx             # Main app component
├── index.tsx           # Entry point
└── index.css           # Global styles and theme overrides
```

## 🎨 Theme System

The landing page supports both light and dark modes:

- **Light Mode**: Clean, professional appearance with subtle shadows
- **Dark Mode**: Modern dark theme with enhanced contrast
- **Persistent**: User preference is saved in localStorage
- **System Default**: Automatically detects system theme preference

## 📱 Responsive Design

- **Mobile First**: Optimized for mobile devices
- **Breakpoints**: Bootstrap 5 responsive grid system
- **Touch Friendly**: Optimized for touch interactions
- **Performance**: Optimized images and animations

## 🔧 Customization

### Colors
Update the CSS custom properties in `src/index.css`:
```css
:root {
  --bs-primary: #007bff;
  --bs-secondary: #6c757d;
  /* ... other colors */
}
```

### Content
Modify component data in respective files:
- Solutions: `src/components/Solutions.tsx`
- Technology: `src/components/Technology.tsx`
- Use Cases: `src/components/UseCases.tsx`

### Styling
Custom styles are defined in each component using CSS-in-JS or in `src/index.css` for global styles.

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📞 Support

For support and questions:
- Email: hello@ragtional.ai
- Website: https://ragtional.ai

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

The built files will be in the `dist/` directory, ready for deployment to any static hosting service like:
- Netlify
- Vercel
- GitHub Pages
- AWS S3
- Firebase Hosting

### Environment Variables
No environment variables are required for the basic landing page. For production deployments, consider adding:
- Analytics tracking IDs
- Contact form endpoints
- Newsletter signup services

---

Built with ❤️ by the RAGtional team
