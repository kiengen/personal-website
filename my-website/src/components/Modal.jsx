import React, { useState, useEffect } from "react";
import Feather from "feather-icons-react";

const Modal = ({ setIsOpen, data }) => {
    const [imgIndx, setImgIndx] = useState(1);
    const [prevImg, setPrevImg] = useState(1);

    const getNextImage = (forwards) => {
        if(forwards == 1 && imgIndx == data.imageTypes.length) {
            setImgIndx(1);
        }
        else if(forwards == -1 && imgIndx == 1) {
            setImgIndx(data.imageTypes.length);
        }
        else { 
            setImgIndx(imgIndx+forwards);
        }
    }

    useEffect(() => {
        const dotBox = document.getElementById("dotBox");
        if(dotBox.childElementCount == 1) {
            const dot = document.getElementById("dot");
            if(!data.imageTypes || data.imageTypes.length == 1) {
                dot.remove();
                document.getElementById("left").remove();
                document.getElementById("right").remove();
            }
            else {
                for(let i = 2; i <= data.imageTypes.length; i++) {
                    let copy = dot.cloneNode(true);
                    copy.setAttribute("class", "image-indicator-dot");
                    copy.addEventListener("click", () => {setImgIndx(i);});
                    dotBox.appendChild(copy);
                }
                let active = dotBox.children[imgIndx-1];
                active.setAttribute("class", active.getAttribute("class")+" bg-b");
                dot.addEventListener("click", () => {setImgIndx(1)});
            }
        }
        else {
            let kids = document.getElementById("dotBox").children;
            kids[imgIndx-1].setAttribute("class", "image-indicator-dot bg-b");
            kids[prevImg-1].setAttribute("class", "image-indicator-dot bg-t");
            setPrevImg(imgIndx);
        }
      }, [imgIndx]);

    return (
        <div className="dark-bg" onClick={() => {return; setIsOpen(null)}}>
            <div className="modal-bg">
                <div className="flex-container-v">
                    <div className="modal-header">
                        <div>
                            <b className="big-font uppercase color-b">{data.name} </b>
                            <text className="small-font italic color-b">{data.skills}</text>
                        </div>
                        <Feather className="modal-x" icon="x" onClick={() => setIsOpen(null)}/>
                    </div>
                    <div className="flex-container-h">
                        <div className="modal-container">
                            <div className="modal-picture-box color-b bordered">
                                <div className="modal-picture">
                                    {data.imageTypes && data.imageTypes[imgIndx-1] == 0 && <img className="project-image" src={`${data.images}/${imgIndx}.png`}/>}
                                    {data.imageTypes && data.imageTypes[imgIndx-1] == 1 && <video controls autoPlay muted className="project-video" src={`${data.images}/${imgIndx}.mp4`}/>}
                                </div>
                                <Feather id="left" className="modal-x" icon="arrow-left" onClick={() => {getNextImage(-1)}}/>
                                <Feather id="right" className="modal-x" icon="arrow-right" onClick={() => {getNextImage(1)}}/>
                            </div>
                            <div id="dotBox" className="flex-h modal-container center-container">
                                <div id="dot" className="image-indicator-dot"/>
                            </div>
                        </div>
                        <div className="modal-container">
                            <text>test</text>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    );
}

export default Modal;
