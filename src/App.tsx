import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux/es/exports";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { Anime } from "./components/anime/anime";
import { axiosData } from "./components/axios/api";
import { FullInfoAnime } from "./components/fullAnimePage/fullInfoAnime";
import { FullInfoManga } from "./components/fullMangaPage/fullInfoManga";
import { Header } from "./components/header/header";
import { LoginForm } from "./components/loginForm.tsx/loginForm";
import { MainPage } from "./components/mainPage/mainPage";
import { Manga } from "./components/manga/manga";
import { addAnime } from "./components/redux/reducer/animeSlice/animeSlice";
import { addManga, getSortedMangaList } from "./components/redux/reducer/mangaSlice/mangaSlice";
import { SignUpForm } from "./components/signUpForm/signUpForm";
import { ThemeContext, ThemeType } from "./themeContext";

// тотал каунт
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
// адаптив
// фикс невлезающего текста


function App() {
  const [myTheme, setMyTheme] = useState<ThemeType>("light");
  const [currentMangaPage, setCurrentMangaPage] = useState(0);
  const [fetching, setFetching] = useState(true);
  const [fetchingSort, setFetchingSort] = useState(true);
  const [currentAnimePage, setCurrentAnimePage] = useState(0);
  const [sortedBy, setSortedBy] = useState("ratingRank");
  console.log(fetching)
  const dispatch = useDispatch();

  const getManga = async () => {
    try {
      const resultManga = await axiosData.get(
        `/manga?page%5Blimit%5D=20&page%5Boffset%5D=${currentMangaPage}&sort=${sortedBy}`
      );
      setCurrentMangaPage((prevState) => prevState + 20);
      dispatch(addManga({ axiosData: resultManga.data }));
    } catch (err) {
      console.log(err);
    } finally {
      setFetching(false);
    }
  };

  const getAnime = async () => {
    try {
      const resultAnime = await axiosData.get(
        `/anime?page%5Blimit%5D=20&page%5Boffset%5D=${currentAnimePage}`
      );
      dispatch(addAnime({ axiosData: resultAnime.data }));
      setCurrentAnimePage((prevState) => prevState + 20);
    } catch (err) {
      console.log(err);
    } finally {
      setFetching(false);
    }
  };
  useEffect(() => {
    if (fetching) {
      getManga();
      getAnime();
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

  const switchTheme = () => {
    if (myTheme === "light") {
      setMyTheme("dark");
      document.body.style.backgroundColor = "black";
    } else {
      setMyTheme("light");
      document.body.style.backgroundColor = "white";
    }
  };

  const getSortedManga = async () => {
    try {
      const resultManga = await axiosData.get(
        `/manga?page%5Blimit%5D=20&page%5Boffset%5D=0&sort=${sortedBy}`
      );
      dispatch(getSortedMangaList({ axiosData: resultManga.data }));
      setFetchingSort(false);
    } catch (err) {
      console.log(err);
    } 
  };

  const qwer = () => {
    setSortedBy("-ratingRank");
    setFetchingSort(true);
  };
  const qwer2 = () => {
    setSortedBy("ratingRank");
    setFetchingSort(true);
  };

  useEffect(() => {
    if (fetchingSort) {
      getSortedManga();
    }
  }, [fetchingSort]);

  return (
    <ThemeContext.Provider value={{ theme: myTheme, toggler: switchTheme }}>
      <Router>
        <Header />
        <div>
          <button onClick={qwer}>re rating</button>
          <button onClick={qwer2}>rating</button>
        </div>
        <Routes>
          <Route path="/anime/:id" element={<FullInfoAnime />} />
          <Route path="/manga/:id" element={<FullInfoManga />} />
          <Route path="/anime" element={<Anime />} />
          <Route path="/manga" element={<Manga />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/signUp" element={<SignUpForm />} />
          <Route path="*" element={<MainPage />} />
        </Routes>
      </Router>
    </ThemeContext.Provider>
  );
}

export default App;





