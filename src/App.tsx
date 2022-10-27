import { FC, useState } from "react";
import { Routes, Route, Navigate} from "react-router-dom";
import Posts from "./components/Posts";
import { Login } from "./components/Login";

export const App: FC = () => {

  return (
    <>
    <Routes>
     <Route path="/" element={<Login/>}/>
     <Route path="/posts" element={<Posts/>}/>
    </Routes>
    </>
  )
};