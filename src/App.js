
import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Footer } from './components/public/Footer';
import { Navbar } from './components/public/Navbar';
import Main from './components/public/Main';
import { Detail } from './components/public/Detail';
import { UserForm } from './components/public/UserForm';


function App() {
  return (
    <div>

      <Navbar />

      <Routes>
        <Route exact path="/" element={<Main />}></Route>
        <Route exact path="/user-form" element={<UserForm/>}  ></Route>
        <Route exact path="/detail/:id" element={<Detail/>}  ></Route>
      </Routes>

      <Footer />

    </div>
  );
}

export default App;