import React from "react";
import './App.css';
import Navbar from "./ui/components/Navbar/Navbar";
import MovieList from "./ui/components/MovieList/MovieList";

const App = () => {
  return(
    <div className='app'>
      <Navbar/>
      <MovieList/>
    </div>
  );
};

export default App;



// import { BrowserRouter, Navigate, Route, Routes } from "react-router";
// import "./App.css";
// import Homepage from "./pages/Homepage";
// import MoviePage from "./pages/MoviePage";
// import Profile from "./pages/Profile";
// import QuizzesPage from "./pages/QuizzesPage";
// import QuizPage from "./pages/QuizPage";
// import LoginPage from "./pages/LoginPage";
// import SignupPage from "./pages/SignupPage";

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route index element={<Navigate replace to="home" />}></Route>
//         <Route path="home" element={<Homepage></Homepage>}></Route>
//         <Route path="movie/:id" element={<MoviePage></MoviePage>}></Route>
//         <Route path="profile" element={<Profile></Profile>}></Route>
//         <Route path="quizzes" element={<QuizzesPage></QuizzesPage>}></Route>
//         <Route path="quiz" element={<QuizPage></QuizPage>}></Route>
//         <Route path="login" element={<LoginPage></LoginPage>}></Route>
//         <Route path="signup" element={<SignupPage></SignupPage>}></Route>
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;
