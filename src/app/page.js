import Client from "./components/Client/Client";
import Contact from "./components/Contact/Contact";
import Header from "./components/Header/Header";
import Herosection from "./components/HeroSection/Herosection";
import Ourservice from "./components/Ourservice/Ourservice";
import Project from "./components/Project/Project";
import Whatwedo from "./components/whatwedo/Whatwedo";
import { TranslationProvider } from "./translations/provider";

export default function Home() {
  return (
    <TranslationProvider>
      <div>
        <div>
          <Header />
          <Herosection />
          <Whatwedo />
          <Ourservice />
          <Project />
          <Client />
          <Contact />
        </div>
      </div>
    </TranslationProvider>
  );
}
