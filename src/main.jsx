import { React, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
)


//emaployee1(name, emp_salary) and emp2(name no of leaves, remaining leaves)

// select e1.name from 
// employee1 e1 join emp2 e2 on e1.name = e2.name
// where e2.no_of_leaves > 2 and e1.emp_salary > 100K;