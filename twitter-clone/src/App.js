
import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/molecules/login/Login';
import SignUp from './components/organisms/SignUp/SignUp';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={< Login />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
      </Routes>
    </BrowserRouter>
  )
}



// function App() {
//   return (
//     <div>
//       <SignUp />
//       <BrowserRouter>
//         <Routes>
//           <Route path="/" element={<div className="App">App</div>}></Route>

//         </Routes>
//       </BrowserRouter>
//     </div>
//   );
// }

export default App;
