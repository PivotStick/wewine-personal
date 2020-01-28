import React from "react";

const Details = ({ history }) => {

    console.log(history);

    return (
        <div className="details">
            BLabla mon compte avec les infos trop cool
            <button onClick={_ => history.push("/account")}>"Icone de flèche retour"</button>
        </div>
    );
};

export default Details;