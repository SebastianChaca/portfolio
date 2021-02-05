import React from 'react'
import Spain from '../img/Spain3.png'
import uk from '../img/uk.png'
import {useHistory} from "react-router-dom";

export default function SelectLeng({handleLanguage}){
    const history=useHistory()
    return <div className="flags-container">
        
        <div className="flags">                        
            <button className="lang-btn spain-btn" onClick={()=>{handleLanguage('Español'); history.push("/home")}}>
                <img src={Spain} alt="spain"/>
                
            </button>            
        
            <button className="lang-btn uk-btn" onClick={()=>{handleLanguage('English'); history.push("/home")}}>
                <img className="uk" src={uk} alt=""/>
                
            </button>
        </div>

        
    </div>
}