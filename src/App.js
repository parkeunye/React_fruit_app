import React, { useRef } from "react";
import { db } from "./firebase";
import { collection, doc, setDoc } from "firebase/firestore";
import InsertFruit from "./components/InsertFruit";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./components/Main";
import Menubar from "./components/Menubar";
import FruitList from "./components/FruitList";
import Fruit from "./components/Fruit";

//router

const App = () => {
  const fruitCollection = collection(db, "fruits");
  const randomId = useRef(Math.random().toString(36).substr(2, 16));
  async function insertHandler(fruit) {
    await setDoc(doc(fruitCollection, randomId.current), {
      name: fruit.name,
      season: fruit.season,
      color: fruit.color,
      taste: fruit.taste,
      price: fruit.price,
    });
    randomId.current = Math.random().toString(36).substr(2, 16);
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Menubar />
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route
            path="/insert"
            element={<InsertFruit insertfruit={insertHandler} />}
          ></Route>
          <Route path="/list" element={<FruitList />}></Route>
          <Route path="/list/:id" element={<Fruit />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};
export default App;
