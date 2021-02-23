import React, { useEffect, useState } from "react";
import axios from "axios";
import { Counter } from "./features/counter/Counter";
import "./App.css";

const App = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://orchiddingo5.sakura.ne.jp/find_c/wp-json/wp/v2/event")
      .then(response => setData(response.data))
      .catch(error => console.log(error));
  }, []);
  return (
    <>
      {data.map((item, index) => (
        <li key={index}>
          <a href={item.link}>
            <date>{item.date}</date>
            <p>{item.title.rendered}</p>
            <p>{item.content.rendered}</p>
          </a>
        </li>
      ))}
    </>
  );
};

export default App;
