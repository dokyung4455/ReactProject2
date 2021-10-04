import logo from "./logo.svg";
import "./App.css";
import AddressInput from "./comps/AddressInput";
import AddressList from "./comps/AddressList";
import { useState } from "react";
import UUID from "react-uuid";

function App() {
  // 주소 한개의 데이터를 저장할 state 선언하기
  const [address, setAddress] = useState({
    a_id: UUID(),
  });
  const [addrBook, setAddrBook] = useState([]);
  const stateGroup = {
    address,
    setAddress,
    addrBook,
    setAddrBook,
  };

  return (
    <div className="App">
    
	  <div className="left">
	  <div className="name">Address Input Service Test Version</div>
	  <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <AddressInput stateGroup={stateGroup} />
	  </div>
	  <div className="right">
      <AddressList addrBook={addrBook} />
	  </div>
    </div>
  );
}

export default App;
