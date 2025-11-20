import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/textForm";
import bg from "./bg-2.jpg";

function App() {

  return (
    <>
      <Navbar title="TextUtils" />
      <div className="container-fluid main-background" style={{ backgroundImage: `url(${bg})`}}>
          <main style={{padding: "1rem"}}>
            <TextForm heading="Enter the text to analyze below" />
          </main>
      </div>
    </>
  );
}

export default App;
