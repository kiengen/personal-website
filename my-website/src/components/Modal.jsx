import React from "react";
import Feather from "feather-icons-react";

const Modal = ({ setIsOpen, data }) => {
    return (
        <div className="dark-bg" onClick={() => setIsOpen(null)}>
            <div className="modal-bg">
                <div className="flex-container-v">
                    <div className="modal-header">
                        <div>
                            <text className="modal-title">{data.name} </text>
                            <text className="modal-skills">{data.skills}</text>
                        </div>
                        <Feather className="modal-x" icon="x" onClick={() => setIsOpen(null)}/>
                    </div>
                    <div className="flex-container-h">
                        <div className="modal-picture">

                        </div>
                        <div className="modal-picture">
                            
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    );
}

export default Modal;
