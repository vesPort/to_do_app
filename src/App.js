import { Fragment, useState } from "react";
import { AiFillCheckCircle, AiFillEdit } from "react-icons/ai";
import { BsFillTrashFill } from "react-icons/bs";
import "./App.css";

function App() {
  //ToDos
  const [toDo, setToDo] = useState([
    {
      id: 1,
      title: "Task1",
      status: false,
    },
    {
      id: 2,
      title: "Task2",
      status: false,
    },
  ]);
  //Temp State
  const [newTask, setNewTask] = useState("");
  const [editTask, setEditTask] = useState("");

  //Add Task
  const addTask = (task) => {};
  //Edit Task
  const editTaskData = (task) => {};
  //Delete Task
  const deleteTask = (id) => {};
  //Task Done or COmpleted
  const markCompleteOrDone = (id) => {};
  //Cncel Update
  const cancelUpdate = () => {};
  //Chnge TAsk for update
  const changeTask = () => {};

  return (
    <div className="container App">
      ToDoApp
      {/* {Display ToDOs} */}
      {toDo && toDo.length ? "" : "No Tasks"}
      {toDo &&
        toDo
        .sort((objA,objB) => objA.id > objB ? 1 : -1).map((task, index) => {
          return (
            <Fragment key={index}>
              <div className="col taskBg">
                <div className={task.status ? "done" : ""}>
                  <span className="tasktext">{task.title}</span>
                </div>
                <div className="iconsWrap">
                  <span title="Completed / Uncomleted"><AiFillCheckCircle/></span>
                  <span title="Edit"><AiFillEdit/></span>
                  <span title="Delete"><BsFillTrashFill/></span>

                </div>
              </div>
            </Fragment>
          );
        })}
    </div>
  );
}

export default App;
