import "./styles.css";
import Button from "./Button";
import SearchBar from "./SearchBar";
import HeroSection from "./Components/HeroSection";
import AlbumLayout from './Components/AlbumLayout';

export default function App() {
  return (
    <div className="App">
      <SearchBar />
      <HeroSection />
      <AlbumLayout />
    </div>
  );
}
