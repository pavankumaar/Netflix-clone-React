import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import './App.css'
import Signup from './pages/Signup/Signup'
import SignIn from './pages/SignIn/SignIn'
import Registration from './pages/Registration/Registration'
import RegForm from './pages/RegForm/RegForm'
import Plan from './pages/Plan/Plan'
import PlanForm from './pages/PlanForm/PlanForm'

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Signup />} />
        <Route path='/login' element={<SignIn />} />
        <Route path='/signup/registration' element={<Registration />}></Route>
        <Route path='/signup/regform' element={<RegForm />}></Route>
        <Route path='/signup/plan' element={<Plan />}></Route>
        <Route path='/signup/planform' element={<PlanForm />}></Route>
      </Routes>
    </Router>
  )
}

export default App
