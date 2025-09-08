import { Home, Settings, User, Lock } from "lucide-react";

export const menuItems = [
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
    path: "https://translate.google.com/",
    external: true,
  },
];
