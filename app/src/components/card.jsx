import React, { useState } from "react";

// import { formatDate } from "../utils";

function Card({ addTodo, handleTaskEdit, handleDelete, tasks }) {
  const [text, setText] = useState("");

  // function formatTime(date) {
  //   // const date = new Date();
  //   let hours = date.getHours();
  //   let minutes = date.getMinutes();
  //   const amOrPm = hours >= 12 ? "PM" : "AM";
  //   hours = hours % 12;
  //   hours = hours ? hours : 12;
  //   minutes = minutes < 10 ? "0" + minutes : minutes;
  //   return `${hours}:${minutes} ${amOrPm}`;
  // }
  // const getCurrentDateFormatted = (currentDate) => {
  //   // const currentDate = new Date();
  //   const day = currentDate.getDate();
  //   const month = currentDate.getMonth() + 1;
  //   const year = currentDate.getFullYear();
  //   const formattedDay = day < 10 ? `0${day}` : day;
  //   const formattedMonth = month < 10 ? `0${month}` : month;
  //   const formattedDate = `${formattedDay}/${formattedMonth}/${year}`;
  //   return formattedDate;
  // };

  const addCard = () => {
    setText("");
    addTodo();
  };
  function handletaskChange(newValue) {
    setText(newValue);
  }
  function handleBlur(id) {
    handleTaskEdit(text, id);
  }
  function handleDeletebtn(id) {
    handleDelete(id);
  }
  function onDragStart(e, id) {
    console.log(id);
  }

  return (
    <>
      <div className="add">
        <button onClick={addCard}>+</button>
      </div>
      <div className="card-div">
        {tasks
          .filter((t) => t.inState === "todo")
          .map((task, id) => (
            <div
              className="card"
              key={task.id}
              draggable
              onDragStart={(e) => {
                onDragStart(e, task.id);
              }}
            >
              <div className="delete">
                <button onClick={() => handleDeletebtn(task.id)}>X</button>
              </div>
              <textarea
                value={text.id}
                onChange={(e) => handletaskChange(e.target.value, task.id)}
                onBlur={() => handleBlur(task.id)}
                placeholder="text here"
              />
              <div className="date-time">
                lastUpdate:
                {task.dateTime.toString()}
              </div>
            </div>
          ))}
      </div>
    </>
  );
}

export default Card;
