import React from "react";

const BirthdayList = ({ name, image, age, id, removeItem }) => {
  return (
    <article className="person">
      <img src={image} alt={name} />
      <div>
        <h4 className="name">{name}</h4>
        <p>{age}</p>
      </div>
      <button className="btn" onClick={() => removeItem(id)}>
        Remove
      </button>
    </article>
  );
};

export default BirthdayList;
