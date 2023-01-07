import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux/es/exports";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { mangaData } from "./components/axios/api";
import { FullInfoManga } from "./components/fullMangaPage/fullInfoManga";
import { Header } from "./components/header/header";
import { LoginForm } from "./components/loginForm.tsx/loginForm";
import { MainPage } from "./components/mainPage/mainPage";
import { Manga } from "./components/manga/manga";
import { addManga } from "./components/redux/reducer/mangaSlice/mangaSlice";
import { SignUpForm } from "./components/signUpForm/signUpForm";



// вход только залогиненым
// пароль чтобы можно было смотреть
// подключение сервера
// добавление в избранное
// аниме раздел
// главная страница
// поиск 
// Добавить типы
// сделать правильно иморты
// Разбить всё по компонентам


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
        <Route path="/login" element={<LoginForm />} />
        <Route path="/signUp" element={<SignUpForm />} />
        <Route path="*" element={<MainPage />} />
      </Routes>
    </Router>
  );
}

export default App;
