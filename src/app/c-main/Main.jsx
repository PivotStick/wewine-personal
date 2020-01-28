import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./pages/c-home/Home";
import Account from "./pages/c-account/Account";
import Details from "./pages/c-account/c-details/Details";
import Contact from "./pages/c-contact/Contact";

import NotFound from "./pages/NotFound";

const Main = () => {

    return (
        <main className="main">
            {/* Handling Routes */}
            <Switch> {/* The Switch makes sure that only one route will be displayed at a time */}

                {/* -- HOME -- */}
                <Route path="/" exact component={Home} />

                {/* -- ACCOUNT -- */}
                <Route path="/account" exact component={Account} />
                <Route path="/account/details" exact component={Details} />

                {/* -- CONTACT -- */}
                <Route path="/contact" exact component={Contact} />

                {/* -- 404 NOT FOUND -- */}
                <Route path="/" component={NotFound} />
            </Switch>
        </main>
    );
}

export default Main;