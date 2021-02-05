import React,{useState, useEffect} from 'react'
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Header from './components/Header'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Projects from './pages/Projects'
import About from './pages/About'
import './App.css';


function App() {
  const [language, setLeng]=useState(false)
  
  const handleLanguage=(leng)=>{        
        setLeng(leng)              
  }
  useEffect(()=>{
    setLeng('Español')
  },[])
  
  
  return (
    <Router>
     <Header language={language} handleLanguage={handleLanguage} />
      
      <Switch>
        <Route exact path="/">
          <Home language={language}/>
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/projects">
          <Projects language={language}/>
        </Route>
        <Route>
          <About path="/about" language={language}/>
        </Route>
      </Switch>
    </Router>
      
  )
}

export default App;
