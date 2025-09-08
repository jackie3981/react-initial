# React + Vite Project Template

## 📚 Table of Contents

- [🚀 Features](#-features)
- [🏗️ Project Structure](#-project-structure)
- [📦 Main Dependencies](#-main-dependencies)
- [🛠️ Development Tools](#-development-tools)
- [🎯 Component Overview](#-component-overview)
- [⚡ Available Scripts](#-available-scripts)
- [📋 Current Status](#-current-status)
- [🚀 Planned Features](#-planned-features)
- [📖 Usage Examples](#-usage-examples)

## 🚀 Features {#-features}

[⬆️ Back to top](#-table-of-contents)

This is a React project template using Vite, including essential configurations and base components with a modern, scalable architecture.

## 🏗️ Project Structure {#-project-structure}

[⬆️ Back to top](#-table-of-contents)

### 📁 Organized Folder Architecture

```
src/
├── components/
│ ├── Clock/
│ │ ├── Clock.jsx
│ │ └── index.js
│ ├── Footer/
│ │ ├── Copyright.jsx
│ │ ├── Footer.jsx
│ │ ├── index.js
│ │ ├── Links.jsx
│ │ └── SocialMedia.jsx
│ ├── Header/
│ │ ├── Banner/
│ │ │ ├── Banner.jsx
│ │ │ ├── BannerControls.jsx
│ │ │ ├── BannerSlide.jsx
│ │ │ └── index.js
│ │ ├── CTAs/
│ │ │ └── index.js
│ │ ├── Navbar/
│ │ │ ├── index.js
│ │ │ ├── Menu.jsx
│ │ │ ├── MenuItem.jsx
│ │ │ └── SubMenu.jsx
│ │ └── TopBar/
│ │ └── index.js
│ ├── Weather/
│ │ ├── index.js
│ │ └── Weather.jsx
│ ├── FormExample.jsx
│ └── TestRequest.jsx
├── data/
│ ├── bannerSlides.jsx
│ └── menuItems.jsx
└── lib/
└── axios.js
```

### Benefits of this structure:

✅ **Logical grouping** by functionality area  
✅ **Better scalability** for future features  
✅ **Clear separation** of concerns  
✅ **Easier maintenance** and team collaboration  
✅ **Ready for complex applications**  
✅ **Clean imports** with index.js exports  
✅ **Data separation** in dedicated folder

## 📦 Main Dependencies {#-main-dependencies}

[⬆️ Back to top](#-table-of-contents)

- **React 19** + **Vite** - Framework and bundler
- **Tailwind CSS 4** - Styling with full configuration
- **Axios** - HTTP client for APIs
- **React Hook Form** - Form handling
- **Lucide React** - Icons
- **PropTypes** - Prop validation

## 🛠️ Development Tools {#-development-tools}

[⬆️ Back to top](#-table-of-contents)

- **ESLint** - Linting with custom configuration
- **Prettier** - Code formatting
- **TypeScript types** - Typings for React

## 🎯 Component Overview {#-component-overview}

[⬆️ Back to top](#-table-of-contents)

### Header Components

- **Banner System** - Full carousel/slideshow with auto-play, navigation controls, and configurable transitions
- **Menu System** - Modular navigation component with horizontal/vertical orientation support
- **Topbar** - Top bar components (ready for implementation)
- **CTAs** - Call-to-action components (ready for implementation)

### Footer Components

- **Footer** - Complete footer system with links and social media
- **Copyright** - Dynamic copyright with current year
- **Links** - Navigation links component
- **SocialMedia** - Social media icons with hover effects

### Utility Components

- **Clock** - Reusable time component with real-time updates
- **Weather** - Weather component with API-ready structure
- **FormExample** - Form handling examples
- **TestRequest** - API testing components

### Data Files

- **menuItems.jsx** - Navigation menu configuration
- **bannerSlides.jsx** - Carousel slides data

## ⚡ Available Scripts {#-available-scripts}

[⬆️ Back to top](#-table-of-contents)

```bash
npm run dev       # Development
npm run build     # Production build
npm run lint      # Linting
npm run format    # Code formatting
npm run preview   # Production preview
```

## 📋 Current Status {#-current-status}

⬆️ Back to top

✅ Everything Functional and Configured

- Build works without errors
- Tailwind CSS integrated and working
- ESLint + Prettier configured
- Modular component structure
- Usage examples included
- Clean import system with index.js files
- Data separation implemented

✅ Stable Features Implemented:

- Fully functional banner carousel system
- Real-time clock component
- Weather component structure
- Complete footer system with 4 subcomponents
- Customizable colors, sizes, and alignment
- Support for background images with overlays
- Prop validation using PropTypes
- Responsive design
- External data management

### 🚀 Planned Features {#-planned-features}

⬆️ Back to top

Short-term

- Real API integration for Weather component
- Enhanced slide transition animations
- Responsive breakpoint configurations
- Accessibility improvements (ARIA labels)

Medium-term

- Theme system support
- Predefined style presets
- Internationalization (i18n) support
- State management integration
- CTAs components implementation
- TopBar component development

Long-term

- Additional utility components
- Advanced form handling examples
- API caching strategies
- Performance optimization
- PWA capabilities
- Testing suite implementation

### 📖 Usage Examples {#-usage-examples}

⬆️ Back to top

Banner Carousel System

```
import Banner from "./components/Header/Banner";
import Clock from "./components/Clock";
import Weather from "./components/Weather";
import { bannerSlides } from "./data/bannerSlides";

<Banner
  slides={bannerSlides}
  textFixed={false}
  title="Welcome to my Project"
  subtitle="Using Tailwind CSS"
  slideInterval={4000}
  showControls={true}
  showIndicators={true}
  components={[
    { element: <Weather />, align: "left" },
    { element: <Clock />, align: "right" }
  ]}
/>
```

Menu Component

```
import Menu from "./components/Header/Navbar";
import { menuItems } from "./data/menuItems";

<Menu
  items={menuItems}
  orientation="horizontal"
/>
```

Footer Component

```
import Footer from "./components/Footer";

// Simple usage
<Footer />
```

Data Management

```
// External data files for better organization
import { menuItems } from "./data/menuItems";
import { bannerSlides } from "./data/bannerSlides";
```

Clean Imports with Index.js

```
// Clean import syntax using index.js files
import Banner from "./components/Header/Banner";
import Menu from "./components/Header/Navbar";
import Footer from "./components/Footer";
import Clock from "./components/Clock";
import Weather from "./components/Weather";
```
