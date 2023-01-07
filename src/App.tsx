import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux/es/exports";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { mangaData } from "./components/axios/api";
import { FullInfoManga } from "./components/fullMangaPage/fullInfoManga";
import { Header } from "./components/header/header";
import { Manga } from "./components/manga/manga";
import { addManga } from "./components/redux/reducer/mangaSlice/mangaSlice";

function App() {
  const [currentPage, setCurrentPage] = useState(0);
  const [fetching, setFetching] = useState(true);
  const [totalCount, setTotalCount] = useState(0);

  const dispatch = useDispatch();
  const getManga = async () => {
    try {
      const resultManga = await mangaData.get(
        `/manga?page%5Blimit%5D=20&page%5Boffset%5D=${currentPage}`
      );
      dispatch(addManga({ mangaData: resultManga.data }));
      setCurrentPage((prevState) => prevState + 20);
      //  setTotalCount(resultManga)
    } catch (err) {
      console.log(err);
    } finally {
      setFetching(false);
    }
  };

  useEffect(() => {
    if (fetching) {
      getManga();
    }
  }, [fetching]);

  const scrollHandler = (e: any) => {
    if (
      e.target.documentElement.scrollHeight -
        (e.target.documentElement.scrollTop + window.innerHeight) <
      200
    ) {
      setFetching(true);
    }
  };

  useEffect(() => {
    document.addEventListener("scroll", scrollHandler);
    return function () {
      document.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/manga/:id" element={<FullInfoManga />} />
        <Route path="/anime" element={<Manga />} />
        <Route path="/manga" element={<Manga />} />
        <Route path="*" element={<Manga />} />
      </Routes>
    </Router>
  );
}

export default App;
