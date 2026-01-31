import AboutUs from "./components/AboutUs";
import EmailCTA from "./components/EmailCTA";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Mission from "./components/Mission";
import Newsletter from "./components/Newsletter";
import Products from "./components/Products";
import Roadmap from "./components/Roadmap";
import SupporterCTA from "./components/SupporterCTA";

function App() {
  return (
    <main className="min-h-screen">
      <Hero />
      <EmailCTA />
      <Mission />
      <Products />
      <AboutUs />
      <Roadmap />
      <SupporterCTA />
      <Newsletter />
      <Footer />
    </main>
  );
}

export default App;
