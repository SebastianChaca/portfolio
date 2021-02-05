import React from 'react'
import {contactContent} from '../content/data'
export default function Contact(){
    
    
    return <div className="main-container">            
            {contactContent.map(icon=>{
                return <div className="contact-container">
                        <div className="container-icon">
                            
                            <a href={icon.link} >
                                {icon.icon}
                            </a>
                        </div>
                        <div className="container-text">
                            <a href={icon.link}>
                                {icon.text}
                            </a>
                        </div>
                </div>
            })}
    </div>
}