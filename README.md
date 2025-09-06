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

npm run dev       # Development
npm run build     # Production build
npm run lint      # Linting
npm run format    # Code formatting

Current Status
Everything functional and configured
- Build works without errors
- Tailwind CSS integrated and working
- ESLint + Prettier configured
- Modular component structure
- Usage examples included