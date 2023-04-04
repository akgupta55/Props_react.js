import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <App name="Ajay Kumar Gupta"
      interest={['Drawing', 'Photography', 'Programming']}
      skill="Web Design with HTML & CSS"
      EduDetails={["Kashi Institute Of Technology, Varanasi", "The Abs Rowland School, Varanasi"]}
      grade={["7.96", "7.5"]}
      experience1={{ company: 'Microsoft India', year: 2019, role: 'SDE 3' }}
      experience2={{ company: 'Google India', year: 2016, role: 'SDE 1' }}
      experience3={{ company: 'Tata consulted ltd', year: 2012, role: 'Software Assistance' }}
    />
  </React.StrictMode>,
)
