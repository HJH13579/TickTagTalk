import { useSelector } from 'react-redux';
import AppBar from '../components/ui/AppBar';
import './ConsumePatternPage.css'
import DropdownMenu from '../components/ui/DropdownMenu';
import { useState,useEffect } from 'react';
import { customAxios } from '../CustomAxios';
import styled from 'styled-components';
import { useNavigate } from 'react-router';
// import { useState } from "react";
// import { useSelector } from 'react-redux';
// import Modal from '../components/ui/Modal';
// import ItemModal from '../components/ItemModal';

function ConsumePatternPage() {
    const naviage = useNavigate()
    let user = useSelector((state)=>state.user)
    const [mymonth, setmymonth] = useState('');
    const [requestmonth, setrequestmonth] = useState({yearAndMonth:'2023-08'})
    const [totalamount, settotalamount] = useState('0원')
    // console.log('redux임',user)
    const handleData = (data) =>{
        console.log(data)
        setmymonth(data)
        console.log('월데이터?', data)

    }

    useEffect(() => {
        // mymonth 상태 업데이트 후에 axios 요청을 보내도록 처리합니다.
        setmymonth(`${new Date().getFullYear()}-${String(new Date().getMonth()).padStart(2, '0')}`);
      }, []); // 빈 배열을 전달하여 이펙트가 한 번만 실행되도록 합니다.

      useEffect(() => {
        if (mymonth !== '') { // mymonth가 빈 문자열이 아닐 때만 실행
        // mymonth 상태가 업데이트되면 실행되는 이펙트
        console.log('mymonth 업뎃:',mymonth)
        let body = {yearAndMonth : mymonth}
        customAxios
          .get(process.env.REACT_APP_BASE_URL + `/consume/checkaccount?yearAndMonth=${mymonth}`)
          .then((res) => {
            console.log('거래내역', res);
            settotalamount(res.totalamount);
          })
          .catch((error) => {
            console.log('거래내역 에러', error);
          });
        }
        // mymonth이 변경될 때마다 이펙트를 실행하도록 설정
      }, [mymonth]);




    // 동그라미

    const CircleIcon = styled.div`
    width: 5vw; /* 동그라미 아이콘의 너비 */
    height: 2vh; /* 동그라미 아이콘의 높이 */
    background-color: #007bff; /* 동그라미의 배경 색상 */
    border-radius: 50%; /* 원 모양으로 만듭니다. */
    display: flex;
    justify-content: center;
    align-items: center;
    color: white; /* 아이콘 색상 */
    font-size: 24px; /* 아이콘 크기 */
    `;
    const StyledButton = styled.button`
  background-color: white; /* 버튼 배경 색상 */
  color: white; /* 버튼 텍스트 색상 */`;
    const handlefilter = ()=>{
        naviage('/filter-purchase')
    }



    return (
        <>
            <div className='appbar-container'>
                <div>
                    <img src="/Icon/뒤로가기.png" alt="" />
                </div>
                <div>
                    <DropdownMenu monthData={handleData}></DropdownMenu>
                </div>
            </div>
            <div className='consume-pattern'>
                <div>
                    <img src="/Character/1.jpg" alt="" />
                </div>
                <div>
                    {user.userId}
                </div>
                <div>{mymonth}</div>
                <div>{totalamount}</div>
                <div>
                    <div className='consume-container'>
                        <div><CircleIcon></CircleIcon></div>
                        <div>종목이름</div>
                        <div>종목금액</div>
                        <StyledButton onClick={handlefilter}></StyledButton>

                    </div>
                    <div className='consume-container'>
                        <div><CircleIcon></CircleIcon></div>
                        <div>종목이름</div>
                        <div>종목금액</div>
                        <button></button>
                    </div>                    
                    <div className='consume-container'>
                        <div><CircleIcon></CircleIcon></div>
                        <div>종목이름</div>
                        <div>종목금액</div>
                        <button></button>
                    </div>                    
                    <div className='consume-container'>
                        <div><CircleIcon></CircleIcon></div>
                        <div>종목이름</div>
                        <div>종목금액</div>
                        <button></button>
                    </div>
                </div>



            </div>
        </>
    );
}

export default ConsumePatternPage;
