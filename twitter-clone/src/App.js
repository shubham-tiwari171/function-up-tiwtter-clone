
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SignUp from './components/organisms/SignUp/SignUp';

function App() {
  return (
    <div>
      <SignUp/>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div className="App">App</div>}></Route>
        
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
