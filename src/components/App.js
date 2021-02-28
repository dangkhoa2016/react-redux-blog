import React, { useEffect } from 'react';
import { Route, Switch } from "react-router-dom";
import Header from "./parts/Header";
import './App.css';
import Home from "./pages/Home";
import About from "./pages/About";
import BlogsWithGraphCMS from "./pages/BlogsWithGraphCMS";
import Blogs from "./pages/Blogs";

function App() {

    useEffect(function () {
        if (typeof window['LoadTheme'] === 'function') {
            setTimeout(function() { window['LoadTheme']() }, 200);
        }
    }, []);

    return (
        <div className="App container">
            <Header />

            <div className="main-wrapper">
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route exact path="/about">
                        <About />
                    </Route>
                    <Route exact path="/blogs_graphcms">
                        <BlogsWithGraphCMS />
                    </Route>
                    <Route exact path="/blogs">
                        <Blogs />
                    </Route>
                </Switch>
            </div>
        </div>
    );
}

export default App;