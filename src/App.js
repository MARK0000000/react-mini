import React from "react";
import './styles/style.scss'
import Quiz from "./componenets/Quiz";
import Modal from "./componenets/Modal";
import Invite from "./componenets/Invite";
import CurrencyConvertor from "./componenets/CurrencyConvertor";
import Photos from "./componenets/Photos";
function App() {

  return (
   <div className="App">
      <Quiz/>
      <Modal/>
      <Invite/>
      <CurrencyConvertor/>
      <Photos/>
   </div>
  );
}

export default App;

