import React from "react";
import "../Styles/CreateTodoButtom.css"
function CreateTodoButtom (props) {
    const onClickTodoButtom = () => {
        props.setOpenModal(prevState => !prevState);
    };
    return (
        <button 
        className="CreateTodoButtom"
        onClick={onClickTodoButtom}
        >
        +
        </button>
    );
}

export { CreateTodoButtom }