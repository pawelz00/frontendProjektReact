import { FC, useState } from "react";
import { Routes, Route, Navigate} from "react-router-dom";
import Posts from "./components/Posts";
import Feed from "./components/Feed";
import { Login } from "./components/Login";
import Users from "./components/Users";
import {QueryClientProvider, QueryClient} from "react-query"

const queryClient = new QueryClient();

export const App: FC = () => {

  return (
    <>
    <QueryClientProvider client={queryClient}>
    <Routes>
     <Route path="/" element={<Login/>}/>
     <Route path="/feed" element={<Feed/>}/>
     <Route path="/posts" element={<Posts/>}/>
     <Route path="/users" element={<Users/>}/>
    </Routes>
    </QueryClientProvider>
    </>
  )
};