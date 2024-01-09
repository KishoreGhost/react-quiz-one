import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import HomeCompo from './components/HomeCompo.jsx'
import QuizCompo from './components/QuizCompo.jsx'
import ResultCompo from './components/ResultCompo.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <HomeCompo />
    <QuizCompo />
    <ResultCompo />
  </React.StrictMode>,
)
