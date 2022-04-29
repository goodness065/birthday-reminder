import React, { useState } from "react";
import data from "../data";
import BirthdayList from "./List";

const BirthdayReminder = () => {
  const [people, setPeople] = useState(data);
  const removeItem = (id) => {
    setPeople((people) => {
      return people.filter((person) => person.id !== id);
    });
  };
  return (
    <section className="container">
      <h3 className="header">{people.length} Birthdays Today</h3>
      {people.map((person) => {
        const { id } = person;
        return <BirthdayList key={id} {...person} removeItem={removeItem} />;
      })}
      <button className="button" onClick={() => setPeople([])}>
        Clear All
      </button>
    </section>
  );
};

export default BirthdayReminder;
