# React + Vite Project Template

This is a React project template using Vite, including essential configurations and base components.

## 🚀 Features of this initial version

### 📦 Main Dependencies

- **React 19** + **Vite** - Framework and bundler
- **Tailwind CSS 4** - Styling with full configuration
- **Axios** - HTTP client for APIs
- **React Hook Form** - Form handling
- **Lucide React** - Icons
- **PropTypes** - Prop validation

### 🛠 Dev Tools

- **ESLint** - Linting with custom configuration
- **Prettier** - Code formatting
- **TypeScript types** - Typings for React

### 📁 Organized Structure

```
src/
├── components/
│ ├── menu/ # Modular navigation components
│ │ ├── Menu.jsx
│ │ ├── MenuItem.jsx
│ │ └── SubMenu.jsx
│ ├── FormExample.jsx # Form example
│ └── TestRequest.jsx # HTTP request example
├── lib/
│ └── axios.js # Axios configuration
└── assets/ # Static resources
```

### 🎨 Implemented Components

#### Menu Component

```jsx
// Modular navigation component with support for:
- Horizontal/vertical orientation
- Custom link components (React Router compatible)
- Styling with Tailwind CSS
- Prop validation with PropTypes
```

## Available Scripts

npm run dev # Development
npm run build # Production build
npm run lint # Linting
npm run format # Code formatting

Current Status
Everything functional and configured

- Build works without errors
- Tailwind CSS integrated and working
- ESLint + Prettier configured
- Modular component structure
- Usage examples included

### 🆕 Added Banner Components

### 📋 Current Status - Version 1.0

✅ **Implemented and Stable Features:**

- Fully functional base banner
- System for inserting components (left/center/right)
- BannerClock with a real-time clock
- BannerWeather with a basic structure
- Customizable colors, sizes, and alignment options
- Support for background images
- Prop validation using PropTypes

### 🚀 Upcoming Planned Improvements

- [ ] Introduction of a carousel/slideshow system for displaying multiple banners
- [ ] Implementation of transitions and animations
- [ ] Integration with a real-time weather API
- [ ] Addition of more customizable components
- [ ] Provision of predefined themes and presets

#### 📂 Banner Components structure

```
src/components/banner/
├── Banner.jsx # Componente principal
├── BannerClock.jsx # Reloj en tiempo real
└── BannerWeather.jsx # Widget de clima
```

#### 🎨 Banner Features

- **Fully customizable** – colors, sizes, and alignment
- **Supports background images** with optional overlays
- **Grid system** for positioning content elements (left, center, right)
- **Prop type validation** using PropTypes
- **Completely responsive**

#### 💡 How to use it:

```jsx
import Banner from "./components/banner/Banner";
import BannerClock from "./components/banner/BannerClock";
import BannerWeather from "./components/banner/BannerWeather";

<Banner
  title="Dashboard Principal"
  subtitle="Bienvenido al sistema"
  backgroundColor="bg-blue-600"
  height="h-48"
  components={[
    { element: <BannerClock />, align: "left" },
    { element: <BannerWeather />, align: "right" }
  ]}
/>

⚡ Components included:
- Banner Clock: A digital clock that automatically updates the time.
- Banner Weather: A weather information widget ready for API connection.
```
