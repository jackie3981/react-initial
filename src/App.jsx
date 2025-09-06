import "./App.css";
import TestRequest from "./components/TestRequest";
import FormExample from "./components/FormExample";
import Menu from "./components/menu/Menu";
import { Home, Settings, User, Lock } from "lucide-react";

const menuItems = [
  { id: "home", label: "Home", path: "/", icon: <Home size={18} /> },
  {
    id: "settings",
    label: "Settings",
    icon: <Settings size={18} />,
    children: [
      {
        id: "profile",
        label: "Profile",
        path: "/profile",
        icon: <User size={18} />,
      },
      {
        id: "security",
        label: "Security",
        path: "/security",
        icon: <Lock size={18} />,
      },
    ],
  },
  {
    id: "help",
    label: "Help (External)",
    path: "https://example.com/docs",
    external: true,
  },
];

function App() {
  return (
    <>
      <div className="p-6">
        <h1 className="text-xl font-bold mb-6">Menu Demo</h1>
        <h2 className="font-semibold">Horizontal Menu:</h2>
        {/* When the orientation is set to "horizontal," you can omit the parameter, as this is the default orientation. */}
        <Menu items={menuItems} orientation="vertical" />

        {/* <div className="mt-8">
          <h2 className="font-semibold">Vertical Menu:</h2>
          <Menu items={menuItems} orientation="vertical" />
        </div> */}
      </div>
      <div className="text-4xl font-bold text-red-500">
        Tailwind is working!
      </div>
      <TestRequest />
      <FormExample />
    </>
  );
}

export default App;
