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

  const getHello = () => {
    axios
      .get("http://localhost:3001/all-materiel")
      .catch((e) => console.log(e));
  };
  return (
    <div className="App">
      <form
        onSubmit={handleSubmit(onSubmit)}
        action="http://localhost:3001/add-material"
      >
        <input {...register("Name")} />
        <select {...register("type")}>
          <option value="ordinateur">ordinateur</option>
          <option value="cable">cable</option>
          <option value="souris">souris</option>
        </select>
        <input type="submit" />
      </form>
      <button onClick={() => getHello()}>cliiiique</button>
      {data &&
        data.map((item) => {
          return (
            <div>
              <h1>{item.name}</h1>
              <p>{item.description}</p>
            </div>
          );
        })}
    </div>
  );
}

export default App;
