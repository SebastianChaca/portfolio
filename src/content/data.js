import React from 'react'
//contact icons
import {ImLinkedin} from 'react-icons/im'
import {SiGmail} from 'react-icons/si'
import {IoLogoWhatsapp} from 'react-icons/io'
import {AiOutlineGithub} from 'react-icons/ai'
import {MdPhoneAndroid, MdPictureAsPdf} from 'react-icons/md'
//project icons
import ReactReduxlogo from '../img/react-redux.png'
import JsIcon from '../img/js.png'
import ReactIcon from '../img/reacticon.png'
//tec icons
import {IoLogoHtml5, IoLogoJavascript} from 'react-icons/io'
import {FaCss3Alt, FaNodeJs, FaReact} from 'react-icons/fa'
import {SiStrapi} from 'react-icons/si'

import CV from '../img/SebastianAristidesChacaCV.pdf'




export const headerContent={
    english:{
        about:'About',
        projects:'Projects',
        contact:'Contact'
    },
    spanish:{
        about:'Sobre mí',
        projects:'Proyectos',
        contact:'Contacto'
    }
}

export const homeContent={
    english:{
        title:`Welcome...`,
        text:`I'm Sebastian, Front-end developer from Buenos Aires, Argentina`
    },
    spanish:{
        title:'Bienvenido...',
        text:'Soy Sebastian, Front-end Developer de Buenos Aires, Argentina.'
    }
}

export  const contactContent=[
    {
        icon: <ImLinkedin className="linkedin"/>,
        text:'LinkedIn',
        link:'https://www.linkedin.com/in/sebastianchaca/'
    },
    {
        icon: <SiGmail className="gmail"/>,
        text:'Gmail',
        link:'mailto=sebastian.dalinger@gmail.com'
    },
    {
        icon: <AiOutlineGithub/>,
        text:'GitHub',
        link:'https://github.com/SebastianChaca'
    },
    {
        icon: <IoLogoWhatsapp className="wsp"/>,
        text:'Whats up',
        link:'https://wa.me/5491165027205'
    },
    
    {
        icon:<MdPhoneAndroid/>,
        text:'1565027205'
    },
    {
        icon:<MdPictureAsPdf/>,
        text:'CV',
        link:CV
    }
]
export const projectsContent=[
    {
        img: ReactReduxlogo,
        text:{
            english:'E-commerce with React, Redeux, Strapi and Mercado Pago Checkout Pro',
            spanish:'E-commerce con React, Redux, Strapi y Mercado Pago Checkout Pro'
        },
        github:'https://github.com/SebastianChaca/mtg-e-commerce',
        live:'https://mtg-ecommerce.netlify.app/'
    },
    {
        img: JsIcon,
        text:{
            english:'Homebanking simulation with plain JS and Css',
            spanish:'Simulación de Homebanking con Js y css plano'
        },
        github:'https://github.com/SebastianChaca/homebanking',
        live:'https://homebanking-nucba.sebastianchaca.vercel.app/'
    },
    {
        img: ReactIcon,
        text:{
            english:'Bugget Calculator with React and Boostrap',
            spanish:'Calculadora de presupuesto con React y Boostrap'
        },
        github:'https://github.com/SebastianChaca/React-Budget-Calculator',
        live:'https://sebastian-chaca-budget-calculator.netlify.app/'
    },
    {
        img: ReactIcon,
        text:{
            english:'Source code of this Page',
            spanish:'Codigo fuente de este Pagina'
        },
        github:'https://github.com/SebastianChaca/portfolio',
        live:'https://sebastianchaca-portfolio.netlify.app/projects'
    }
    
]
export const aboutContent ={
    spanish:{
        text:'Me llamo Sebastian Aristides Chaca, soy estudiante y estoy buscando conseguir mi primer trabajo como programador. Actualmente me encuentro realizando un curso de Full Stack de Javascript en NUCBA.',
        textTwo: 'Estas son algunas de las tecnologías que estuve estudiando y utilizando en mis proyectos últimamente:'
    },
    english:{
        text:"Mi name is Sebastian Aristides Chaca, i'm a student who's looking to get his first job as a developer. I'm currently doing Full Stack Javascript course at NUCBA",
        textTwo:"These are one of the tegnologies that i've been studyng and using in my projects lately:"
    },
    tec:[
        {
        name:'Html',
        icon:<IoLogoHtml5 className="html icon"/>
    },
    {
        name:'Css',
        icon:<FaCss3Alt className="css icon"/>
    },
    {
        name:'Javascript',
        icon:<IoLogoJavascript className="js icon"/>
    },
    {
        name:'Node Js',
        icon:<FaNodeJs className="node icon"/>
    },
    {
        name:'React js',
        icon:<FaReact className="react icon"/>
    },
    {
        name:'Strapi',
        icon:<SiStrapi className="strapi icon"/>
    }
    ]    
}