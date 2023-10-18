function Done() {
  return (
    <>
      <div className="card-div">
        {tasks
          .filter((t) => t.inState === "done")
          .map((task, id) => (
            <div className="card" key={task.id} draggable>
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
export default Done;
