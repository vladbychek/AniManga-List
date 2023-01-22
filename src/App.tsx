import React , { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { Anime } from "./components/anime/anime";
import { FullInfoAnime } from "./components/fullAnimePage/fullInfoAnime";
import { FullInfoManga } from "./components/fullMangaPage/fullInfoManga";
import { Header } from "./components/header/header";
import { LoginForm } from "./components/loginForm.tsx/loginForm";
import { MainPage } from "./components/mainPage/mainPage";
import { Manga } from "./components/manga/manga";
import { SignUpForm } from "./components/signUpForm/signUpForm";
import { ThemeContext, ThemeType } from "./themeContext";

// тотал каунт
// вход только залогиненым
// пароль чтобы можно было смотреть
// подключение сервера
// добавление в избранное
// главная страница
// поиск
// Добавить типы
// сделать правильно иморты
// Разбить всё по компонентам
// адаптив
// фикс невлезающего текста


function App() {
  const [myTheme, setMyTheme] = useState<ThemeType>("light");


  const switchTheme = () => {
    if (myTheme === "light") {
      setMyTheme("dark");
      document.body.style.backgroundColor = "black";
    } else {
      setMyTheme("light");
      document.body.style.backgroundColor = "white";
    }
  };

  

  return (
    <ThemeContext.Provider value={{ theme: myTheme, toggler: switchTheme }}>
      <Router>
        <Header />
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





