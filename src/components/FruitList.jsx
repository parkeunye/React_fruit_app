import React from "react";
import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore"; // 1
import { db } from "../firebase"; // 2
import FruitItem from "./FruitItem";

const FruitList = () => {
  const [state, setState] = useState([]);
  const fruitCollection = collection(db, "fruits"); // 3

  async function getFruits() {
    const resultList = await getDocs(fruitCollection); // 4
    setState(resultList.docs); // 5 데이터 옮기기
  }

  useEffect(() => {
    getFruits();
  }, []);

  return (
    <>
      <div>과일 리스트</div>
      {state.map((item, idx) => (
        <FruitItem key={idx} data={item.data()} id={item.id}></FruitItem>
      ))}
    </>
  );
};

export default FruitList;
