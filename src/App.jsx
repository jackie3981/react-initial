import "./App.css";
import TestRequest from "./components/TestRequest";
import FormExample from "./components/FormExample";
import Menu from "./components/Header/Navbar";
import Banner from "./components/Header/Banner";
import Clock from "./components/Clock";
import Weather from "./components/Weather";
import Footer from "./components/Footer";
import { menuItems } from "./data/menuItems";
import { bannerSlides } from "./data/bannerSlides";

function App() {
  return (
    <>
      <div className="p-6">
        <Menu items={menuItems} orientation="horizontal" />
      </div>

      <Banner
        slides={bannerSlides}
        textFixed={false}
        title="Bienvenido a mi Proyecto"
        subtitle="Usando Tailwind CSS"
        textAlign="center"
        backgroundColor="black"
        textColor="text-white"
        height="h-64"
        overlay={true}
        slideInterval={4000}
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
      <Footer />
    </>
  );
}

export default App;
