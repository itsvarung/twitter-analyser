import React from "react";
import logo from "./logo.svg";
import "./App.css";
import SearchBar from "./SearchBar";
const App: React.FC = () => {
  const [hashtag, setHashtag] = React.useState("");

  return (
    <div className="App">
      <SearchBar
        onHashtagChanged={hashtag => {
          setHashtag(hashtag);
          console.log("value", hashtag);
        }}
      />
    </div>
  );
};

export default App;
