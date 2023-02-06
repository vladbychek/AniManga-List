import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { Anime } from "./components/anime/anime";
import { Favorite } from "./components/favorite/favorite";
import { FullInfoAnime } from "./components/fullAnimePage/fullInfoAnime";
import { FullInfoManga } from "./components/fullMangaPage/fullMangaPage";
import { Header } from "./components/header/header";
import { LoginForm } from "./components/loginForm.tsx/loginForm";
import { MainPage } from "./components/mainPage/mainPage";
import { Manga } from "./components/manga/manga";
import { NotFound } from "./components/notFound/notFound";
import { IRootState } from "./components/redux/store";
import { ThemeProvider } from "./themeContext";

// добавление в избранное
// сделать правильно иморты

function App() {
  const isLoggedIn = useSelector(
    (state: IRootState) => !!state.auth.authData.accessToken
  );



  return (
    <ThemeProvider>
      <Router>
        <Header />
        <Routes>
        <Route path="/anime/:id" element={<FullInfoAnime />}/>
        <Route path="/manga/:id" element={<FullInfoManga />}/>
{/* 
          <Route path="/anime/:id" element={isLoggedIn ? <FullInfoAnime /> : <LoginForm />} />
          <Route path="/manga/:id" element={isLoggedIn ? <FullInfoManga /> : <LoginForm />} /> */}
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
