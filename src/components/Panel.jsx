import React, { useState } from "react";
import "../styles/Panel.css";

import cuteGif from "../assets/cute.gif";
import yesGif from "../assets/yes.gif";
import nonoGif from "../assets/nono.gif";

export function Panel (props) {
       
       const [countClickButton1, setCountClickButton1] = useState(0);
       const [countClickButton2, setCountClickButton2] = useState(0);

       const checkButton1 = () => {
              setCountClickButton1(prev => prev + 1)
              setCountClickButton2(0)
              console.log(countClickButton1);
       }
       const checkButton2 = () => {
              setCountClickButton2(prev => prev + 1)
              console.log(countClickButton2);
       }

       return (
              <>     
                     <div className="panel_content">
                            <h1>{countClickButton2 > 0 ? "" : "8/3"}</h1>
                            <h1>{countClickButton2 > 0 ? "" : "Tặng Chíp bông hoa"}</h1>
                            <img src={countClickButton2 > 0 ? nonoGif : cuteGif} alt="Cute" />
                            <h1>{countClickButton2 > 0 ? "Không cho từ chối" : "Chíp nhận không ?"}</h1>
                            <div className="panel_button">
                                   <button 
                                          className="button_accept"
                                          type="button"
                                          onClick={() => checkButton1()}
                                   >
                                          Nhận
                                   </button>
                                   {countClickButton2 == 0 ? (
                                          <button 
                                                 className="button_cancel"
                                                 type="button"
                                                 onClick={() => checkButton2()}
                                          >
                                                 Không thèm
                                          </button>) : ""
                                   }
                            </div>
                     </div>
              </>
       );
}