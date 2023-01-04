import React from "react";
import { useNavigate } from "react-router-dom";

const FruitItem = ({ data, id }) => {
  const navigate = useNavigate();
  return (
    <div>
      <tr>
        <td>{id}</td>
        <td>{data.name}</td>
        <td>{data.season}</td>
        <td>{data.color}</td>
        <td>{data.taste}</td>
      </tr>

      <button
        onClick={() => {
          navigate(id);
        }}
      >
        상세정보
      </button>
    </div>
  );
};

export default FruitItem;
