import React, { useState } from "react";
//import buttonStyle from "./styles.css";
import text from './assets/text.png'
import logo from './assets/logo.png'

const SearchBar = ({ placeholder, onSearch }) => {
  const [query, setQuery] = useState("");

  const inputStyle = {
    padding: "10px",
    borderColor: "black",
    borderRadius: "5px 0px 0px 5px",
    width: "40%",
  };

  const searchButtonStyle = {
    padding: "9px",
    borderColor: "black",
    borderRadius: "0px 5px 5px 0px",
    background: "#FFFFFF",
    cursor: "pointer",
  };

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(query);
  };

  return (
    <div style={{ flex: "1", marginRight: "8px" }}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder={placeholder}
          value={query}
          onChange={handleInputChange}
          style={inputStyle}
        />
        <button type="submit" style={searchButtonStyle}>
          🔍
        </button>
      </form>
    </div>
  );
};

const Button = ({ label, onClick }) => {
  const buttonStyle = {
    backgroundColor: "#000",
    color: "#4caf50",
    padding: "10px 20px",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    outline: "none",
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)",
    fontWeight: "bold",
    marginLeft: "8px",
  };

  return (
    <button onClick={onClick} style={buttonStyle}>
      {label}
    </button>
  );
};

const App = () => {
  const navbarStyle = {
    background: "#4caf50",
    padding: "16px 30px",
    display: "flex",
    borderBottom: "2px solid black", // Black line
  };

  const handleSearch = (query) => {
    console.log("Searching for:", query);
  };

  const handleButtonClick = () => {
    console.log("Button clicked");
  };

  return (
    <div style={navbarStyle}>
      <div style={{ display: "flex", width: "50%", flex: "1" }}>
        <div>
          <img 
            src={logo}
            position = 'relative'
            alt="Spotify Logo"
            style={{height: "auto", height: "40px" }}
          /> 
          <img 
            src={text}
            position =  'absoulte'
            alt="Spotify Logo"
            style={{height:"20px", width:"90px", marginLeft : "-34px"}}
            // style={{ width: "100px", height: "auto", height: "40px" }}
          /> 
        </div>
        <SearchBar
          placeholder="Search a song of your choice"
          onSearch={handleSearch}
        />
        <Button label="Give Feedback" onClick={handleButtonClick} />
      </div>
    </div>
  );
};

export default App;
