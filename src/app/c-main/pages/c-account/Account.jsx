import React from "react";
import { withRouter } from "react-router-dom";

const Account = () => {

    return (
        <div className="account">
            <Link to="/account/details">Infos perso</Link>
            <Link to="/account/settings">Paramètres</Link>
        </div>
    );
};

const Link = withRouter(({ children, to, history }) => (
    <div
        onClick={_ => history.push(to)}
        className="account__link"
    >
        {children}
    </div>
))

export default Account;