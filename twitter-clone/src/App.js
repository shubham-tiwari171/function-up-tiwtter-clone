
import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/molecules/login/Login';
import SignUp from './components/organisms/SignUp/SignUp';
import Sidenavbar from './components/molecules/Sidenavbar/Sidenavbar';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={< Login />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/home" element={<Sidenavbar />}></Route>
      </Routes>
    </BrowserRouter>
  )
}
export default App;
