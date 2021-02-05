import React from 'react'
import UkIcon from './UkIcon'
import SpainIcon from './SpainIcon'
import {headerContent} from '../content/header'
import { Link } from "react-router-dom";



export default function Sidebar({open, openBar, handleLanguage, language}){
    let content ={}
    
    language === 'English' ? content = headerContent.english : content = headerContent.spanish
    
    return <aside className={`sidebar ${open ? `show-sidebar`: ''}`} >
            <ul>
                
                <li>
                    <Link to="/" onClick={()=>openBar()}>Home</Link>
                    <hr/>
                </li>
                <li>
                    <Link to="/about" onClick={()=>openBar()}>{content.about}</Link>
                    <hr/>
                </li>
                
                <li>
                    <Link to="/projects" onClick={()=>openBar()}>{content.projects}</Link>
                    <hr/>
                </li>
                <li>
                    <Link to="/contact" onClick={()=>openBar()}>{content.contact}</Link>
                    <hr/>
                </li>
                <li>
                    <UkIcon handleLanguage={handleLanguage}/>
                    <hr/>
                </li>
                <li>
                    <SpainIcon handleLanguage={handleLanguage}/>
                </li>
            </ul>
        </aside>
    
    
    
}