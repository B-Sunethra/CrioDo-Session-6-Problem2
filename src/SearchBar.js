import React, { useState } from "react";

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
          {/* <img
            src="data:image/jpeg;base64,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"
            alt="Spotify Logo"
            style={{ width: "100px", height: "auto", height: "40px" }}
          /> */}
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
