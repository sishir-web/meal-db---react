import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Mealdb from './mealdb/Mealdb.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <Mealdb />
  </StrictMode>,
)
