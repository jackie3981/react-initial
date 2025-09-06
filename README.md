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
src/components/
├── clock/
│ └── Clock.jsx # Standalone clock component
├── header/ # All header-related components
│ ├── banner/ # Banner carousel system
│ │ ├── Banner.jsx
│ │ ├── BannerControls.jsx
│ │ └── BannerSlide.jsx
│ ├── ctas/ # Call-to-action components
│ ├── menu/ # Navigation menu system
│ │ ├── Menu.jsx
│ │ ├── MenuItem.jsx
│ │ └── SubMenu.jsx
│ └── topbar/ # Top bar components
├── weather/
│ └── Weather.jsx # Standalone weather component
├── FormExample.jsx # Form examples
└── TestRequest.jsx # API test components
```

### Benefits of this structure:

✅ **Logical grouping** by functionality area  
✅ **Better scalability** for future features  
✅ **Clear separation** of concerns  
✅ **Easier maintenance** and team collaboration  
✅ **Ready for complex applications**

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

### Utility Components

- **Clock** - Reusable time component with real-time updates
- **Weather** - Weather component with API-ready structure
- **FormExample** - Form handling examples
- **TestRequest** - API testing components

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

[⬆️ Back to top](#-table-of-contents)

✅ Everything Functional and Configured

- Build works without errors
- Tailwind CSS integrated and working
- ESLint + Prettier configured
- Modular component structure
- Usage examples included

✅ Stable Features Implemented:

- Fully functional banner carousel system
- Real-time clock component
- Weather component structure
- Customizable colors, sizes, and alignment
- Support for background images with overlays
- Prop validation using PropTypes
- Responsive design

## 🚀 Planned Features {#-planned-features}

[⬆️ Back to top](#-table-of-contents)

### Short-term

- Real API integration for Weather component
- Enhanced slide transition animations
- Responsive breakpoint configurations
- Accessibility improvements (ARIA labels)

### Medium-term

- Theme system support
- Predefined style presets
- Internationalization (i18n) support
- State management integration

### Long-term

- Additional utility components
- Advanced form handling examples
- API caching strategies
- Performance optimization

### 📖 Usage Examples {#-usage-examples}

[⬆️ Back to top](#-table-of-contents)

### Banner Carousel System

```
import Banner from "./components/header/banner/Banner";
import Clock from "./components/clock/Clock";
import Weather from "./components/weather/Weather";

// Multiple slides with auto-rotation
<Banner
  slides={[
    { image: "/slide1.jpg", title: "Welcome", subtitle: "First slide" },
    { image: "/slide2.jpg", title: "Features", subtitle: "Second slide" }
  ]}
  slideInterval={5000}
  showControls={true}
  showIndicators={true}
  components={[
    { element: <Clock />, align: "left" },
    { element: <Weather />, align: "right" }
  ]}
/>

// Fixed text banner
<Banner
  slides={[{ image: "/hero.jpg" }]}
  textFixed={true}
  title="Fixed Title"
  subtitle="This text appears on all slides"
/>
```

### Menu Component

```
import Menu from "./components/header/menu/Menu";

<Menu
  items={menuItems}
  orientation="horizontal"
  linkComponent={CustomLink}
/>
```
