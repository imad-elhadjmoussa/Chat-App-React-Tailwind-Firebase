import { Chat } from "./Components/Chat";
import { Login } from "./Components/Login";
import { Register } from "./Components/Register";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div className=" w-screen h-screen flex justify-center items-center ">
      <Router>

        < Routes >
          <Route path="/Home" element={<Chat />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
        </Routes >

      </Router >
    </div>
  );
}

export default App;

<div className=" w-screen h-screen flex justify-center items-center " >
  <Login />
  <Register />
  <Chat />
</div>