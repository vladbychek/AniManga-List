import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { IRootState } from "./components/redux/store";
import { ThemeProvider } from "./themeContext";

import { NotFound } from "./components/common/notFound/notFound";
import { Header } from "./components/header/header";
import { FullInfoAnime } from "./components/anime/fullAnimePage/fullAnimePage";
import { LoginForm } from "./components/loginForm/loginForm";
import { FullInfoManga } from "./components/manga/fullMangaPage/fullMangaPage";
import { Anime } from "./components/anime/animeList/anime";
import { Manga } from "./components/manga/mangaList/manga";
import { Favorite } from "./components/favorite/favorite";
import { MainPage } from "./components/mainPage/mainPage";


function App() {
  const isLoggedIn = useSelector(
    (state: IRootState) => !!state.auth.authData.accessToken
  );

  return (
    <ThemeProvider>
      <Router>
        <Header />
        <Routes>
          <Route
            path="/anime/:id"
            element={isLoggedIn ? <FullInfoAnime /> : <LoginForm />}
          />
          <Route
            path="/manga/:id"
            element={isLoggedIn ? <FullInfoManga /> : <LoginForm />}
          />
          <Route path="/favorite/manga/:id" element={<FullInfoManga />} />
          <Route path="/favorite/anime/:id" element={<FullInfoAnime />} />
          <Route path="/anime" element={<Anime />} />
          <Route path="/manga" element={<Manga />} />
          <Route path="/loginForm" element={<LoginForm />} />
          <Route path="/favorite" element={<Favorite />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<MainPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
