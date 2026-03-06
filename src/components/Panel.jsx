import React, { useState } from "react";
import "../styles/Panel.css";

import hiGif from "../assets/hi.gif";
import cuteGif from "../assets/cute.gif";
import yesGif from "../assets/yes.gif";
import nonoGif from "../assets/nono.gif";
import ngaiGif from "../assets/ngai.gif";

export function Panel (props) {
       
       const [countStep, setCountStep] = useState(0);
       const [countClickButton1, setCountClickButton1] = useState(0);
       const [countClickButton2, setCountClickButton2] = useState(0);

       const list_title_1 = [
              "Hellu Chíp",
              "This flower is for",
              "Chíp Chíp 8/3 thiệt là vui vẻ và luôn xing gái nha."
       ];
       const list_title_2 = [
              "8/3 em có cái này cho Chíp",
              "the most beautiful flower",
              ""
       ];
       const list_img = [
              hiGif,
              cuteGif,
              ngaiGif
       ];

       const checkButton1 = () => {
              setCountStep(prev => prev + 1)
              setCountClickButton2(0)
       }
       const checkButton2 = () => {
              setCountStep(prev => prev + 1)
       }

       return (
              <>     
                     <div className="panel_content">
                            <h1>{list_title_1.at(countStep)}</h1>
                            <img src={list_img.at(countStep)} className="img_panel" alt="Cute" />
                            <h1>{list_title_2.at(countStep)}</h1>
                            {countStep >= 2 ? "" :
                                   <div className="panel_button">
                                          <button 
                                                 className="button_accept"
                                                 type="button"
                                                 onClick={() => checkButton1()}
                                          >
                                                 Tiếp
                                          </button>
                                   </div>
                            }
                     </div>
              </>
       );
}