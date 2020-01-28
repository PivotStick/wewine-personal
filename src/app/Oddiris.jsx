import React from "react";
import { BrowserRouter } from "react-router-dom";

import Header from "./c-header/Header";
import Main from "./c-main/Main";

const Oddiris = () => {

    return (
        <BrowserRouter>
            <Header />
            <Main />
        </BrowserRouter>
    );
};

export default Oddiris;