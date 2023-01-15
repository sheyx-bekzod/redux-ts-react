import React from 'react';
import {Router, Route, Routes} from "react-router-dom"
import Home from "./pages/Home";
import Favourite from "./pages/Favoirite";
import Navigation from "./Components/Navigation";
import UserList from "./Components/UserList";
import Todo from "./Components/Todo";

function App() {
    return (
        <>
            <Navigation />
            <UserList />
            <br/>
            <Todo />
            {/*<Routes>*/}
            {/*    <Route path={"/"} element={<Home/>}/>*/}
            {/*    <Route path={"/favourite"} element={<Favourite/>}/>*/}
            {/*    <Route/>*/}
            {/*</Routes>*/}
        </>
    );
}

export default App;