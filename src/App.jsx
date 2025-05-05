import "./App.css";
import Sidenav from "./Components/side-nav/SideNav";
import Dashboard from "./Components/dashboard/Dashboard";
import RightSideBar from "./Components/right-side-bar/RightSideBar";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTasks } from "./redux/slices/taskSlice";
import { Routes, Route } from "react-router-dom";

function App() {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  if (loading) return <p>Loading users...</p>;
  if (error) return <p>Error: {error}</p>;
  return (
    <>
      <Sidenav />
      <Routes>
        <Route path="/" element={<Dashboard/>} />
        <Route path="/rightsidebar" element={<RightSideBar />} />
      </Routes>
    </>
  );
}

export default App;
