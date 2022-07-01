import './App.css';
import Home from './Pages/Home/Home';
import Navbar from './Pages/Home/Navbar';
import { Routes, Route } from "react-router-dom";
import Footer from './Pages/Home/Footer';
import Tasks from './Pages/Page/Tasks';
import ToDo from './Pages/Page/ToDo';
import Calendar from './Pages/Page/Calendar';
import UpdateTask from './Pages/Page/UpdateTask';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/task' element={<Tasks></Tasks>}></Route>
        <Route path='/todo' element={<ToDo></ToDo>}></Route>
        <Route path='/update/:id' element={<UpdateTask></UpdateTask>}></Route>
        <Route path='/calendar' element={<Calendar></Calendar>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
