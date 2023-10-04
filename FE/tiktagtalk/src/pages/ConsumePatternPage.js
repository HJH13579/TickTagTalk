import { useSelector } from 'react-redux';
import AppBar from '../components/ui/AppBar';
import './ConsumePatternPage.css'
import DropdownMenu from '../components/ui/DropdownMenu';
import { useState,useEffect } from 'react';
import { customAxios } from '../CustomAxios';
import styled from 'styled-components';
import { useNavigate } from 'react-router';

import { IconButton } from '@mui/material';
import { ArrowBackIosNew, ArrowLeft, ArrowRight } from '@mui/icons-material';

function ConsumePatternPage() {
    const naviage = useNavigate()
    let user = useSelector((state)=>state.user)
  const [mymonth, setmymonth] = useState();
  const [year, setYear] = useState(new Date().getFullYear());
  const [month, setMonth] = useState(new Date().getMonth() + 1);
    const [totalamount, settotalamount] = useState('0원')
    const [highesttag, sethighesttag] = useState([])
  
    const goBack = () => {
      window.history.back();
  };
  
  useEffect(() => {
    setmymonth(year + "-" + month);
  }, [])
  
  const subMonth = () => {
    if (month === 1) {
      setYear(year - 1);
      setMonth(12);
    }
    else {
      setMonth(month - 1);
    }
    setmymonth(year + "-" + month);
    console.log(mymonth);
  };

  const sumMonth = () => {

  };

    useEffect(() => {
        // mymonth 상태 업데이트 후에 axios 요청을 보내도록 처리합니다.
        setmymonth(`${new Date().getFullYear()}-${String(new Date().getMonth()).padStart(2, '0')}`);
      }, []); // 빈 배열을 전달하여 이펙트가 한 번만 실행되도록 합니다.

      useEffect(() => {
        if (mymonth !== '') { // mymonth가 빈 문자열이 아닐 때만 실행
        // mymonth 상태가 업데이트되면 실행되는 이펙트
        console.log('mymonth 업뎃:',mymonth)
        let body = {'yearAndMonth' : `${mymonth}`}
        console.log(body)
        customAxios
          .post(process.env.REACT_APP_BASE_URL + '/consume/checkaccount',body)
          .then((res) => {
            settotalamount(res.data.totalAmount);
            console.log('거래내역', res.data.totalAmount);
          })
          .catch((error) => {
            console.log('거래내역 에러', error);
          });
          customAxios
          .post(process.env.REACT_APP_BASE_URL + '/consume/highest', body)
          .then((res) => {
            // highesttag를 업데이트합니다.
            sethighesttag(res.data.slice(0, 4));
            console.log(res)
            console.log('응답상위',res.data.slice(0,4))
            // console.log('상위4개:', highesttag);
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
    const handlefilter = (tagName)=>{
        console.log(tagName)
        naviage(`/filter-purchase/${tagName}`,{ state: { mymonth } })
    }



    return (
        <>
            <div className='appbar-container'>
                {/* 이전 페이지 이동 버튼 */}
                <IconButton
                    className='go-back-icon'
                    onClick={goBack} 
                >
                    <ArrowBackIosNew/>
                </IconButton>
          
                {/* 연월 선택하기 */}
                <div className="select-month">
                    <IconButton
                      className='move-month-icon'
                      onClick={subMonth} 
                    >
                      <ArrowLeft/>
                    </IconButton>
                    {mymonth}
                    <IconButton
                      className='move-month-icon'
                      onClick={sumMonth} 
                    >
                      <ArrowRight/>
                    </IconButton>
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
                <div>{totalamount}원</div>
                    {highesttag.map((item,index)=>(
                        <div key = {index} className='consume-container'>
                            <div><CircleIcon></CircleIcon></div>
                            <div>{item.tag.name+" : "}</div>
                            <div>{item.amount + '원'}</div>
                            <StyledButton onClick={handlefilter.bind(null,item.tag.name)}></StyledButton>
                        </div>
                    ))}

            </div>
        </>
    );
}

export default ConsumePatternPage;
