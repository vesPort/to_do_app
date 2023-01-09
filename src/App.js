import { Fragment, useState } from "react";
import { AiFillCheckCircle, AiFillEdit } from "react-icons/ai";
import { BsFillTrashFill } from "react-icons/bs";
import "./App.css";

function App() {
  //ToDos
  const [toDo, setToDo] = useState([
    {
      id: 0,
      title: "Task1",
      status: false,
    },
    {
      id: 1,
      title: "Task2",
      status: false,
    },
  ]);
  //Temp State
  const [newTask, setNewTask] = useState("");
  const [editTask, setEditTask] = useState("");

  //Add Task
  const addTask = () => {
    if (newTask) {
      let num = toDo.length + 1;
      let newEntry = { id: num, title: newTask, status: false };
      setToDo([...toDo, newEntry]);
      setNewTask("");
    }
  };
  //Edit Task
  const editTaskData = (task) => {
    let filterRecord = [...toDo].filter((task) => task.id !== editTask.id);
    let updatedObj = [...filterRecord, editTask];
    setToDo(updatedObj);
    setEditTask("");
  };
  //Delete Task
  const deleteTask = (taskId) => {
    let newTasks = toDo.filter((item) => item.id !== taskId);
    setToDo(newTasks);
  };
  //Task Done or COmpleted
  const markCompleteOrNot = (id) => {
    let task = toDo.map((task) => {
      if (task.id === id) {
        return {
          ...task,
          status: !task.status,
        };
      }
      return task;
    });
    setToDo(task);
  };
  //Cncel Update
  const cancelUpdate = () => {
    setEditTask("");
  };
  //Chnge TAsk for update
  const changeTask = (e) => {
    let newEntry = {
      id: editTask.id,
      title: e.target.value,
      status: editTask.status,
    };
    setEditTask(newEntry);
  };

  return (
    <div className="container App">
      ToDoApp
      <br></br>
      {/* Update Task */}
      {editTask && editTask ? (
        <div className="row">
          <div className="col">
            <input
              value={editTask && editTask.title}
              onChange={(e) => changeTask(e)}
              className="form-control form-control-lg"
            />
          </div>
          <div className="col-auto">
            <button
              className="btn btn-lg button-success mr-20"
              onClick={editTaskData}
            >
              Update
            </button>
            <button className="btn btn-lg button-warning" onClick={cancelUpdate}>Cancel</button>
          </div>
        </div>
      ) : (
        <div className="row">
          <div className="col">
            <input
              className="form-control form-control-lg"
              value={newTask}
              onChange={(event) => setNewTask(event.target.value)}
            />
          </div>
          <div className="col-auto">
            <button className="btn btn-lg btn-success" onClick={addTask}>
              Add Task
            </button>
          </div>
          <br></br>
        </div>
      )}
      {/* Add Task */}
      {/* {Display ToDOs} */}
      {toDo && toDo.length ? "" : "No Tasks"}
      {toDo &&
        toDo.map((task, index) => {
          return (
            <Fragment key={index}>
              <div className="col taskBg">
                <div className={task.status ? "done" : ""}>
                  <span className="tasktext">{task.title}</span>
                </div>
                <div className="iconsWrap">
                  <span
                    title="Completed / Uncomleted"
                    onClick={() => markCompleteOrNot(task.id)}
                  >
                    <AiFillCheckCircle />
                  </span>
                  {task.status ? (
                    ""
                  ) : (
                    <span
                      title="Edit"
                      onClick={() =>
                        setEditTask({
                          id: task.id,
                          title: task.title,
                          status: task.status,
                        })
                      }
                    >
                      <AiFillEdit />
                    </span>
                  )}
                  <span title="Delete" onClick={() => deleteTask(task.id)}>
                    <BsFillTrashFill />
                  </span>
                </div>
              </div>
            </Fragment>
          );
        })}
    </div>
  );
}

export default App;
