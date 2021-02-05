import React from 'react'

import {aboutContent} from '../content/header'


export default function Abour({language}){
    
    let content ={}
    language === 'English' ? content = aboutContent.english : content = aboutContent.spanish
    return <div className="about-container">
    
        <p>
            {content.text}
        </p>
        <p>
        {content.textTwo}
        </p>
        <div className="about-tec">
            
            {
                aboutContent.tec.map(t =>{
                    return <p>
                        {t.icon}
                        {t.name}
                    </p>
                })
            }
        </div>

    </div>
}