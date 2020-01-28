import React from "react";
import { withRouter } from "react-router-dom";

const Tab = withRouter(({ name, to, history }) => {

    return (
        <li onClick={_ => history.push(to)} className="tab">
            {name}
        </li>
    );
});

export default Tab;