import "./App.css";
import Sidenav from "./Components/side-nav/SideNav";
import RightSideBar from "./Components/right-side-bar/RightSideBar";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTasks } from "./redux/slices/taskSlice";

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
      <RightSideBar />
    </>
  );
}

export default App;
