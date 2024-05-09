import React, { useState, useEffect } from "react";

function Restrict() {
  const restrictMessages = [
    "Why you're not working?",
    "NO!! I'll try my best to keep you away from distraction",
    "Hold on, we can fix this!",
    "Lost in the digital maze? WORK!!!!",
  ];

  const [randomMessage, setRandomMessage] = useState("");

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * restrictMessages.length);
    setRandomMessage(restrictMessages[randomIndex]);
    try {
      chrome.tabs.query({active:true,currentWindow:true},function(tabs){
        console.log('current tab title all tabs',tabs)
        const activeTab=tabs[0]
        const tabTitle=activeTab.title
        console.log('current tab title',tabTitle)
      })
    } catch (error) {
      console.log("current tab title error",error)
    }
  }, []);

  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: 99999,
        width: "100%",
        height: "100vh",
        background: "white",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          src="https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif"
          alt="restrict gif"
        />
      </div>

      <h3 style={{ textAlign: "center", fontSize: "30px", color: "black" }}>
        {randomMessage}
      </h3>
    </div>
  );
}

export default Restrict;
