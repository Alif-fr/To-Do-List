import { useState, useEffect } from "react";
import Header from "../components/Header";
import TaskForm from "../components/TaskForm";
import Login from "../components/Login";
import TaskList from "../components/TaskList";
import Calendar from "../components/Calendar";
import "../assets/style.css";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [username, setUsername] = useState(localStorage.getItem("username"));

  useEffect(() => {
    if (username) {
      const savedTasks =
        JSON.parse(localStorage.getItem(`${username}_tasks`)) || [];
      setTasks(savedTasks);
    }
  }, [username]);

  const addTask = (task) => {
    const NewTasks = [...tasks, task];
    setTasks(NewTasks);
    if (username) {
      localStorage.setItem(`${username}_tasks`, JSON.stringify(NewTasks));
    }
  };

  const handleDelete = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
    if (username) {
      localStorage.setItem(`${username}_tasks`, JSON.stringify(updatedTasks))
    }
  };

  const nextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  const previousMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const jumpToMonth = (month) => {
    setCurrentMonth(month);
  };

  const jumpToYear = (year) => {
    setCurrentYear(year);
  };

  return (
    <>
      <Header />
      <div id="topgridcontent">
        <TaskForm addTask={addTask} username={username} />
        <Login username={username} setUsername={setUsername} />
      </div>
      <div id="botgridcontent">
        <TaskList
          tasks={tasks}
          currentMonth={currentMonth}
          currentYear={currentYear}
          onDelete={handleDelete}
        />
        <Calendar
          currentMonth={currentMonth}
          currentYear={currentYear}
          tasks={tasks}
          nextMonth={nextMonth}
          previousMonth={previousMonth}
          jumpToMonth={jumpToMonth}
          jumpToYear={jumpToYear}
        />
      </div>
    </>
  );
};

export default App;
