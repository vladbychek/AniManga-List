import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux/es/exports";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { mangaData } from "./components/axios/api";
import { Header } from "./components/header/header";
import { Manga } from "./components/manga/manga";
import { addManga } from "./components/redux/reducer/mangaSlice/mangaSlice";

function App() {
  const scroll = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const next = () => {
    setCurrentPage((prevState) => prevState + 20);
    scroll();
  };
  const prev = () => {
    setCurrentPage((prevState) => prevState - 20);
    scroll();
  };

 
 const [currentPage, setCurrentPage] = useState(0);

 const dispatch = useDispatch();
 const getManga = async () => {
   try {
     const resultManga = await mangaData.get(
       `/manga?page%5Blimit%5D=20&page%5Boffset%5D=${currentPage}`
     );
     dispatch(addManga({ mangaData: resultManga.data }));
   } catch (err) {
     console.log(err);
   }
 };

  useEffect(() => {
    getManga();
  });

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/anime" element={<Manga />} />
        <Route path="/manga" element={<Manga />} />
      </Routes>
      <button onClick={prev}>prev</button>
         <button onClick={next}>next</button>
    </Router>
  );
}

export default App;
