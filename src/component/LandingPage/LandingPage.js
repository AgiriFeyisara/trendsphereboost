import { Header } from "./Header";
import { Trendsphere } from "./Trendsphere";
import { Hero } from "./Hero";
import { Icons } from "./Icons";
import { Stats } from "./Stats";
import { Profile } from "./Profile";
import { UpdatedNews } from "./UpdatedNews";
import { Footer } from "./Footer";

function LandingPage() {
  return (
    <div className="LandingPage">
      <Header />
      <Trendsphere />
      <Hero />
      <Icons />
      <Stats />
      <Profile />
      <UpdatedNews />
      <Footer />
    </div>
  );
}

export default LandingPage;
