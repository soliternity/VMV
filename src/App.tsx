import {Routes, Route} from 'react-router-dom';
import Landing from './pages/Landing.tsx';
import StaffLogin from './pages/staffLogin.tsx';

function App() {
  return(
  <Routes>
    <Route path="/" element={<Landing/>}/>
    <Route path="/staff-login" element={<StaffLogin/>}></Route>
  </Routes>
  )
}

export default App
