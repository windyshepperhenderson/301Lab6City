import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import axios from "axios";
import { useState } from "react";

const API_KEY = import.meta.env.VITE_API_KEY;

function App() {
  const [location, setLocation] = useState({});
  const [search, setSearch] = useState("");

  function handleChange(event) {
    setSearch(event.target.value);
  }

  async function getLocation(event) {
    event.preventDefault();

    //API URL REQUEST
    const API = `https://eu1.locationiq.com/v1/search?q=${search}&key=${API_KEY}&format=json`;

    //make a GET REQUEST
    const response = await axios.get(API);

    setLocation(res.data[0]);
  }

  return (
    <>
      <h1>!!!!!!</h1>
      <form onSubmit={getLocation}>
        <input onChange={handleChange} placeholder="Enter Location" />
        <button>Get Location</button>
      </form>

      <h2>{location.display_name}</h2>
      {/* a form with an input for the user to search */}
      {/* information about the location saved in state */}
    </>
  );
}

export default App;
