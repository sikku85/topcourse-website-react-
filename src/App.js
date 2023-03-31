import React from "react";
import { useState, useEffect } from "react";
import { Navbar } from "./Components/Navbar";
import { Cards } from "./Components/Cards";
import { Filter } from "./Components/Filter";
import { filterData, apiUrl } from "./data";
import { Spining } from "./Components/Spining";
import {toast} from "react-toastify";

export default function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [catageory, setCatageory] = useState(filterData[0].title);

  async function fetchdata() {
    try {
      setLoading(true);
      const response = await fetch(apiUrl);
      const data = await response.json();
      setData(data.data);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {
    fetchdata();
  }, []);

  return (
    <div>
      <div>
        <Navbar />
      </div>

      <div>
        <Filter data={filterData} catageory={catageory} setCatageory={setCatageory}></Filter>
      </div>

      <div>{loading ? <Spining></Spining> : <Cards data={data} catageory={catageory}></Cards>}</div>
    </div>
  );
}
