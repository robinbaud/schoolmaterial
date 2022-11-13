import React from "react";

import axios from "axios";
import { useForm } from "react-hook-form";
import "./App.css";

function App() {
  const [data, setData] = React.useState(null);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const setItem = (item) => {
    axios.put(
      "http://localhost:3001/set-material/" + item.id /*, {
      id: item.id,
      given: !item.given,
    }*/
    );
  };
  const postMaterial = (data) => {
    console.log(data);
    axios
      .post("http://localhost:3001/material", {
        name: "le pc",
        type: "ordinateur",
      })
      .then((r) => console.log(r))
      .catch((e) => console.error(e));
  };

  const onSubmit = (data) => postMaterial(JSON.stringify(data));

  React.useEffect(() => {
    axios
      .get("http://localhost:3001/all-material")
      .then((r) => setData(r.data))
      .catch((e) => console.log(e));
  }, []);

  return (
    <div className="App">
      <h1>Le matériel de l'école</h1>
      <div className="container">
        <div className="table">
          {data &&
            data.map((item) => {
              return (
                <div className="cell">
                  <div className="name">
                    <h3>{item.name}</h3>
                  </div>

                  <p>{item.type}</p>
                  {item.given === false && (
                    <a href="" onClick={() => setItem(item)}>
                      disponible
                    </a>
                  )}
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default App;
