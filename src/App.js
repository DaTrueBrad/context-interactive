import logo from "./logo.svg";
import "./App.css";
import { useState, useContext, createContext } from "react";
import Header from "./components/Header";
import Main from "./components/Main";

const CartContext = createContext();
const UserContext = createContext();

function App() {
  const [cart, setCart] = useState([]);
  const [user, setUser] = useState("");
  
  return (
    <div className="App">
      <CartContext.Provider value={{ cart, setCart }}>
        <UserContext.Provider value={{ user, setUser }}>
          <Header />
          <Main />
        </UserContext.Provider>
      </CartContext.Provider>
    </div>
  );
}
export default App;
export { CartContext, UserContext };
