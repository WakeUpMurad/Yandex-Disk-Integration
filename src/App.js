import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from "react";
import axios from "axios";
import {Route, Routes} from "react-router";
import Home from "./components/page/Home";

function App() {
  const [courses, setCoursesData] = useState();



  return (
      <Routes>
          <Route path={'/'} element={<Home />}/>
      </Routes>
  );
}

export default App;
