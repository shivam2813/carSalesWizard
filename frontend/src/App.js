import "./App.css";
import CarSalesSection from "./components/carSalesSection/CarSalesSection";
import ContactComponent from "./components/contactComponent/ContactComponent";
import HeroSection from "./components/heroSection/HeroSection";
import InsuranceComponent from "./components/insuranceComponent/InsuranceComponent";
import Navbar from "./components/Navbar/Navbar";
import ReviewsComponent from "./components/reviewsComponent/ReviewsComponent";
import ValuePropComponent from "./components/valueProposition/ValueProposition";

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <CarSalesSection />
      <ValuePropComponent />
      <InsuranceComponent />
      <ReviewsComponent />
      <ContactComponent />
    </div>
  );
}

export default App;
