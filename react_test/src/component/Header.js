import { useState } from 'react';
import '../Style/Header.css'

const Header = (props) => {
  const [Onoff, setOnoff] = useState(!props.topdown);
  const [txts, setTxts] = useState(props.txt);

  const onoffCart = () => {
    setOnoff(!Onoff)
    props.getBoolState(Onoff);
  };
  const setText = (e) => {
    setTxts(e.target.value);
  };
  const sendTxt = () => {
    props.setTextEvent(txts);
    document.getElementById('input').value = '';
    setTxts('');
  };
  return (
    <div className="Header">
      <div className="header_inner">

         <div className="header_title">
          <div className='header_title_effect'>A</div><div>market</div>
        </div>

        <div className="header_search">
          <input id='input' onKeyUp={setText} type="text" maxLength={50}/>
          <img onClick={sendTxt} src="https://pics.gmarket.co.kr/pc/single/kr/common/image__header-search.png" alt="검색" />
        </div>

        <div className="header_icons">
          <img src="http://pics.gmarket.co.kr/pc/single/kr/common/image__header-mypage.svg" alt="사용자 정보" />
          <img src="http://pics.gmarket.co.kr/pc/single/kr/common/image__header-recent.svg" alt="뭔지 모르겠음" />
          <img className='cart' src="http://pics.gmarket.co.kr/pc/single/kr/common/image__header-cart.svg" alt="장바구니" onClick={onoffCart}/>
        </div>

      </div>
    </div>
  );
};

export default Header;