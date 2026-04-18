import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch("https://xcountries-backend.labs.crio.do/all")
      .then((res) => res.json())
      .then((data) => setCountries(data))
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="container">
      {countries.map((c, i) => (
        <div className="card" key={i}>
          <img src={c.flag} alt={`Flag of ${c.name}`} />
          <p>{c.name}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
