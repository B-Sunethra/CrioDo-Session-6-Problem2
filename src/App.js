import "./styles.css";
import Button from "./Button";
import SearchBar from "./SearchBar";
import HeroSection from "./Components/HeroSection";

export default function App() {
  return (
    <div className="App">
      <SearchBar />
      <HeroSection />
    </div>
  );
}
