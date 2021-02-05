import React,{useState, useEffect} from 'react'
import Sidebar from './Sidebar'
import {headerContent} from '../content/header'
import UkIcon from './UkIcon'
import SpainIcon from './SpainIcon'
import { Link, useLocation } from "react-router-dom";
let content ={}
export default function Header({language, handleLanguage}){
    const location=useLocation()
    const [current, setCurrent]=useState('')
    const [open, setOpen]=useState(false)   
    
    language === 'English' ? content = headerContent.english : content = headerContent.spanish
    
    const openBar=()=>{
        setOpen(!open)
    }
    const handleCurrentPage=(curr)=>{
        setCurrent(curr)
    }
    useEffect(()=>{
        setCurrent(location.pathname)
    },[location])
    return( 
    <>
    <Sidebar open={open} openBar={openBar} handleLanguage={handleLanguage} language={language} />
    <header className="header">
        <nav className={open ? `nav-color` : ''}>
            <ul>                
                <div className="rigth-links">
                <div className={`nombre ${open ? `nombre-color`: ''}`}>
                   <h1>Sebastian Chaca</h1>                    
                </div>                    
                    {
                        open ?                        
                            <button className={` ${open ? `header-btn-rotate sidebar-btn-close `: ``}`} onClick={()=>{openBar()}}>
                            <h1>X</h1>
                            </button>
                        :
                            <button className={` ${open ? `sidebar-btn-close `: `header-btn`}`} onClick={()=>{openBar()}}>
                                <span  />
                                <span />
                                <span />                                        
                            </button>
                    }                      
                    
                    <li>
                        <Link className={`${current === '/' ? `currentPage`: `` }`} to="/" onClick={()=>{handleCurrentPage('/')}}>Home</Link>
                    </li>
                    <li>
                        <Link className={`${current === '/about' ? `currentPage`: `` }`} to="/about" onClick={()=>{handleCurrentPage('/about')}}>{content.about}</Link>
                    </li>
                    <li>
                        <Link to="/projects" className={`${current === '/projects' ? `currentPage`: `` }`}  onClick={()=>{handleCurrentPage('/projects')}}>{content.projects}</Link>
                    </li>
                    <li>
                        <Link to="/contact" className={`${current === '/contact' ? `currentPage`: `` }`}  onClick={()=>{handleCurrentPage('/contact')}}>{content.contact}</Link>
                    </li>
                    <li>
                        <UkIcon handleLanguage={handleLanguage}/>
                    </li>
                    <li>
                        <SpainIcon handleLanguage={handleLanguage}/>
                    </li>
                </div>
               
            </ul>
            
        </nav>
        <hr/>

    </header>
    
    </>
    )
}