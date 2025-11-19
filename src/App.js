import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/textForm";
import bg from "./bg-2.jpg";

function App() {

  return (
    <>
      <Navbar title="TextUtils" />
      <div className="container main-background" style={{ backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "100vh",
          width: "100%" }}>
          <main style={{padding: "1rem"}}>
            <TextForm heading="Enter the text to analyze below" />
          </main>
      </div>
    </>
  );
}

export default App;
