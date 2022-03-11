import React, { useState } from 'react';
import Header from './component/Header.js';
import Contents from './component/Content.js';

function App() {
  const [boolState, setboolState] = useState(true);
  const [txt, setTxt] = useState('');

  const getBoolState = (res) => {
    setboolState(res);
  };
  const setTextEvent = (res) => {
    console.log(res);
    setTxt(res);
  };
  // const viewCart = boolState ? <div className="box" style={{ width: '300px', height: '300px', background: 'black' }}></div>
  //   : <div className="box" style={{ width: '300px', height: '300px', background: 'gray' }}></div>;
  // 부모 <-> 자식 데이터 전달 확인(cart에서 쓰면 될듯 visual 바꿔서)
  const txtEvent = (txt === '') ? <span>Search Text is no text</span> : <span>Search Text is {txt}</span>
  return (
    <div className="App">
      <Header topdown={boolState} getBoolState={getBoolState} txt={txt} setTextEvent={setTextEvent} />
      <div className="nav" style={{
        width: '100%', height: '60px',
        background: 'white', borderTop: '1px solid black', borderBottom: '1px solid black',
        textAlign: 'center', lineHeight: '60px', fontSize:'30px'
      }}>
      {txtEvent}
      </div>
      <Contents setView={boolState} />
      <div className="foot" style={{
        width: '100%', height: '100px',
        background: 'white', borderTop: '1px solid black',
        textAlign: 'center', lineHeight: '100px', fontSize:'20px'
      }}>
        <span>Copyright 2022. Amarket coded to beginner developer Ayumu</span>
      </div>
    </div>
  );
}
export default App;