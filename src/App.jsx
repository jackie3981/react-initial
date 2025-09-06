import "./App.css";
import TestRequest from "./components/TestRequest";
import FormExample from "./components/FormExample";
import Menu from "./components/header/menu/Menu";
import { Home, Settings, User, Lock } from "lucide-react";
import Banner from "./components/header/banner/Banner";
import Clock from "./components/clock/Clock";
import Weather from "./components/weather/Weather";

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
    path: "https://translate.google.com/",
    external: true,
  },
];

function App() {
  return (
    <>
      <div className="p-6">
        {/* When the orientation is set to "horizontal," you can omit the parameter, as this is the default orientation. */}
        <Menu items={menuItems} orientation="horizontal" />

        {/* <div className="mt-8">
          <h2 className="font-semibold">Vertical Menu:</h2>
          <Menu items={menuItems} orientation="vertical" />
        </div> */}
      </div>
      <Banner
        slides={[
          // {
          //   image: "/vite.svg", // imagen local en /public
          //   title: "Bienvenido a mi Proyecto",
          //   subtitle: "React + Vite + Tailwind",
          // },
          {
            image: "https://picsum.photos/id/1015/1200/400",
            title: "Segundo Slide",
            subtitle: "Texto dinámico para el slide 2",
          },
          {
            image: "https://picsum.photos/id/1016/1200/400",
            title: "Tercer Slide",
            subtitle: "Aquí podría ir un mensaje distinto",
          },
        ]}
        textFixed={false} // el texto cambia según cada slide
        title="Bienvenido a mi Proyecto"
        subtitle="Usando Tailwind CSS"
        textAlign="center"
        backgroundColor="black"
        textColor="text-white"
        height="h-64"
        overlay={true}
        slideInterval={4000} // cambia cada 4s
        showControls={true}
        showIndicators={true}
        components={[
          { element: <Weather />, align: "left" },
          { element: <Clock />, align: "right" },
        ]}
        className="mb-6"
      />

      <div className="text-4xl font-bold text-red-500">
        Tailwind is working!
      </div>
      <TestRequest />
      <FormExample />
    </>
  );
}

export default App;
