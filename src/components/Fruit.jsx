import React from "react";
import { useState, useEffect } from "react";
import {
  collection,
  doc,
  getDoc,
  deleteDoc,
  updateDoc,
} from "firebase/firestore"; // 1
import { db } from "../firebase"; // 2
import { useParams } from "react-router-dom";
import "./Fruit.css";

const Fruit = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);

  function changeHandler(e) {
    setData({ ...data, [e.target.name]: e.target.value });
  }
  function submitHandler(e) {
    e.preventDefault();
  }
  const fruitCollection = collection(db, "fruits"); // 3

  const [state, setState] = useState("");
  useEffect(() => {
    async function getFruits() {
      const docRef = doc(fruitCollection, id);
      const fruit = await getDoc(docRef);
      setState(fruit.data());
    }
    getFruits();
  }, []);

  async function updateFruit() {
    await updateDoc(doc(fruitCollection, id), {
      name: data.name,
      season: data.season,
      color: data.color,
      taste: data.taste,
      price: parseInt(data.price),
    });
  }
  async function deleteFruit() {
    if (window.confirm("삭제하시겠습니까?")) {
      await deleteDoc(doc(fruitCollection, id));
      alert("삭제되었습니다.");
      window.location.replace("/list");
    } else {
      alert("취소합니다.");
    }
  }

  return (
    <div className="fruitBody">
      <div>{id} 정보</div>
      <form className="fruitForm" onSubmit={submitHandler}>
        <input
          type="text"
          name="name"
          defaultValue={state.name}
          onChange={changeHandler}
        />
        <input
          type="text"
          name="season"
          defaultValue={state.season}
          onChange={changeHandler}
        />
        <input
          type="text"
          name="color"
          defaultValue={state.color}
          onChange={changeHandler}
        />
        <input
          type="text"
          name="taste"
          defaultValue={state.taste}
          onChange={changeHandler}
        />
        <input
          type="number"
          step={1000}
          name="price"
          defaultValue={state.price}
          onChange={changeHandler}
        />
        <div className="fruitbtn">
          <button className="btn-left" onClick={updateFruit}>
            수정
          </button>
          <button className="btn-right" onClick={deleteFruit}>
            삭제
          </button>
        </div>
      </form>
    </div>
  );
};

export default Fruit;
