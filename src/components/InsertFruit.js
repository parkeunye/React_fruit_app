import React, { useState } from "react";
import "./InsertFruit.css";

const InsertFruit = ({ insertfruit }) => {
  const [fruit, setFruits] = useState({
    name: "",
    season: "",
    color: "",
    taste: "",
    price: 0,
  });

  const submitHandler = (e) => {
    // 페이지 새로고침 방지
    e.preventDefault();
    // 빈칸을 입력한 경우, 추가 안함
    // if (fruits.trim() === "") {
    //   return;
    // }
    // 아이템 추가
    insertfruit(fruit);
    // input 창에 텍스트 비우기
    setFruits({
      name: "",
      season: "",
      color: "",
      taste: "",
      price: 0,
    });
  };
  function fruitInpo(e) {
    setFruits({ ...fruit, [e.target.name]: e.target.value });
  }
  return (
    <div className="insert">
      <h2>🍉과일 데이터베이스🍉</h2>
      <form className="formstyle" onSubmit={submitHandler}>
        <input
          type="text"
          value={fruit.name}
          name="name"
          placeholder="이름"
          onChange={fruitInpo}
        ></input>
        <br />
        <input
          type="text"
          value={fruit.season}
          name="season"
          placeholder="계절"
          onChange={fruitInpo}
        ></input>
        <br />
        <input
          type="text"
          value={fruit.color}
          name="color"
          placeholder="색상"
          onChange={fruitInpo}
        ></input>
        <br />
        <input
          type="text"
          value={fruit.taste}
          name="taste"
          placeholder="맛"
          onChange={fruitInpo}
        ></input>
        <br />
        <input
          type="number"
          value={fruit.price}
          name="price"
          step={1000}
          placeholder="가격"
          onChange={fruitInpo}
        ></input>
        <br />
        <button className="insertBtn" type="submit">
          추가
        </button>
      </form>
    </div>
  );
};

export default InsertFruit;
