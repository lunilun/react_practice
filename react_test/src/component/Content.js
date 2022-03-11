import '../Style/Content.css'
import Items from '../component/Counter.js' 
import { useEffect, useState } from 'react';

const Content = (props) => {
    const [view, setView] = useState('');
    const [cartIndex, setcartIndex] = useState([]);
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (props.setView) setView('');
        else setView('none')
    });
    const itemIndex = [
        {img:'https://gdimg.gmarket.co.kr/2286367025/still/280?ver=1644998672', itemName: '닌텐도스위치 게임칩 보관함 직사각형 12개입보관가능', itemPrice: 6900, vendor: '쇼핑79'},
        {img:'https://gdimg.gmarket.co.kr/1187159502/still/280?ver=1621835919',itemName:'닌텐도 스위치 크리스탈 케이스 투명 + 필름(2매)',itemPrice:7900,vendor:'쵸미앤세븐'},
        {img:'https://gdimg.gmarket.co.kr/2309937227/still/280?ver=1639380304',itemName:'닌텐도 스위치 NS 고양이발 파우치 핑크 OLED',itemPrice:14800,vendor:'GAMMAC™'},
        {img:'https://gdimg.gmarket.co.kr/2234972885/still/280?ver=1632885091',itemName:'닌텐도 스위치 NS OLED 강화유리 스크린 보호 필름',itemPrice:9800,vendor:'판매자jshop1'},
        {img:'https://gdimg.gmarket.co.kr/2244911537/still/280?ver=1633953407',itemName:'상품명 닌텐도스위치 별의커비 스타얼라이즈 한국 정식발매',itemPrice:127820,vendor:'도영닷컴'},
        {img:'https://gdimg.gmarket.co.kr/2269988068/still/280?ver=1643373397',itemName: '닌텐도상품명 닌텐도 스위치 OLED+게임팩+10종 악세사리 패키지',itemPrice:499470,vendor:'판매자(주)에스엠퓨처스'},
    ];
    const addItem = (res) => {
        if (res !== '') {
            var num = -1;
            for (let i = 0; i < cartIndex.length; i++) {
                if (cartIndex[i].name == res.split("/")[0]) {
                    num = i;
                }
            }
            if (num !== -1) {
                const beforeC = cartIndex[num].quantity;
                setcartIndex(cartIndex.filter(cartIndexes => cartIndexes.name !== cartIndex[num].name));
                setcartIndex(cartIndex => [...cartIndex, { name: [res.split("/")[0]], quantity: [ Number(beforeC) + Number(res.split("/")[1])], price: [res.split("/")[2]] }]);
                setCount(count + ( Number(res.split("/")[1]) * res.split("/")[2])  );
            } else {
                setcartIndex(cartIndex => [...cartIndex, {name: [res.split("/")[0]], quantity: [Number(res.split("/")[1])], price: [res.split("/")[2]] }]);
                setCount(count + (res.split("/")[1]*res.split("/")[2]));
            }
        }
    };
    const setDigit = (n)=>{
       return n.toLocaleString('ko-KR', 3);
    }
    const forItem = itemIndex.map((i,index) => {
        return (
            <Items total={count} addItem={addItem} lists={i} key={index}/>
        )
    });

    const removeItem = (name,index) => {
        setcartIndex(cartIndex.filter(cartIndexes => cartIndexes.name !== name));
        setCount(count - (cartIndex[index].quantity * cartIndex[index].price));
    };

     const forCartItem = cartIndex.map((i,index) => {
        return (
            <div className="item" key={index}>
                <div className="info">
                    <div className="title"><span>{i.name}</span></div>
                    <div className="count"><span>{i.quantity}개</span></div>
                </div>
                <div className="sum"><span>{setDigit(i.quantity * i.price)}원</span></div>
                <button onClick={()=>removeItem(i.name,index)} className='delBtn'>삭제</button>
            </div>
        )
    });

    return (
    <div className="Content">
        <div className="content_inner">
            <div className="content_itemList">
                {forItem}
            </div>
            <div className="content_cartList" style={{display:[view]}}>
                <div className="cover">
                    {forCartItem}
                </div>
                <div className="sumPrice">
                    <span>{setDigit(count)}</span>
                    <span>원</span>
                </div>
            </div> 
        </div>
    </div>
    );
};

export default Content;