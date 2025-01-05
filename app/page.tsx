import AboutUs from "@/components/AboutUs";
import Explore from "@/components/Explore";
import ExploreArea from "@/components/ExploreArea";
import FeaturedPlaces from "@/components/FeaturedPlaces";
import FeaturesSection from "@/components/FeaturesSection";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import RightSellingOption from "@/components/RightSellingOption";
import { Button } from "@/components/ui/button";
import UserReviews from "@/components/UserReviews";
import WelcomeSection from "@/components/WelcomeSection";
import { Suspense } from "react";

export default function Home() {
  return (
    <main className="overflow-x-hidden min-h-[100vh] pb-4 bg-estate-grey-6">
      <Navbar activeLink="home" />
      <WelcomeSection />
      <FeaturesSection />
      <AboutUs />
      <Explore />
      <Suspense fallback={<div>Loading...</div>}>
        <FeaturedPlaces />
      </Suspense>
      <ExploreArea />
      <UserReviews />
      <RightSellingOption />
      <Footer />
    </main>
  );
}
