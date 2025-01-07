
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Services from "./components/Service"
import Contact from "./components/Contact"
import LoadingScreen from "./components/LoadingScreen"
import { useEffect, useState } from "react"
import WhatsAppChat from "./components/WhatsAppChat"
import Footer from "./components/Footer"


const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  // Simulate loading by using useEffect
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false); // Hide the loading screen after 3 seconds
    }, 3000); // Set the time to 3 seconds
  }, []);

  return (
    <div>
      {isLoading ? (
        <LoadingScreen /> // Display loading screen
      ) : (
        <>
          <Navbar />
          <Hero />
          <About />
          <Services />
          <Contact />
          <Footer/>
          <WhatsAppChat/>
        </>
      )}
    </div>
  );
}

export default App