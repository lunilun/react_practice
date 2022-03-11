import { useEffect, useState } from 'react';
const Items = (props) => {
  const [count, UseCount] = useState(0);
  const [sendIndex, setsendIndex] = useState('');

  useEffect(() => {
    props.addItem(sendIndex);
    setTimeout(() => {
      setsendIndex('');
    }, 500);
  }, [sendIndex]);

  const downCount = () => {
    if ((count - 1) > 0) UseCount(count - 1);
    else UseCount(0);
  };

  const upCount = () => {
    UseCount(count + 1);
  };

  const addTotal = () => {
    if (count !== 0) {
      setsendIndex(props.lists.itemName + "/" + count + "/" + props.lists.itemPrice);
      UseCount(0);
    }
    else alert("수량을 선택해주세요");
  };

  return (
    <div className="item">
      <img src={props.lists.img} alt="품목 사진" />
      <div className="info">
        <div className="title">{props.lists.itemName}</div>
        <div className="price">{props.lists.itemPrice}원</div>    
      </div>    
      <div className="vendor">
        <div className="vendor"><span>{props.lists.vendor}</span></div>
        <div className="counting">
          <button id='evBtn' onClick={downCount}>-</button>
          <span id='cntNumber '>{count}</span>    
          <button id='evBtn' onClick={upCount}>+</button>
          <button id='evBtn' onClick={addTotal}>추가</button>
        </div>
      </div>    
    </div>
  );
};

export default Items;