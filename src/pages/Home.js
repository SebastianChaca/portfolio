import React from 'react'
import avatar from '../img/avatar.jpg'
import {homeContent} from '../content/data'

export default function Home({language}){
    let content=''
    language === 'English' ? content = homeContent.english : content = homeContent.spanish
    
    return (
        <>
        <div className="home-container">
            <div className="img-container">
                <img className="avatar" src={avatar} alt=""/>
            </div>
            
            <div className="text-container">
                <h1>{content.title}</h1>
                <h3>{content.text}</h3>
            </div>
        </div>
        </>
    )
}