import React from 'react';
import styled from 'styled-components';
import CopyToClipboard from 'react-copy-to-clipboard';
import sowonSanta from '../assets/image/sowonSanta.png';
import { Link } from 'react-router-dom';
import { wishPrice, wishItem, likeFood, userName } from 'atoms/atom';
import { useSetRecoilState } from 'recoil';
import { useEffect } from 'react';

function Ending() {
  const setUserName = useSetRecoilState(userName);
  const setWishItem = useSetRecoilState(wishItem);
  const setWishPrice = useSetRecoilState(wishPrice);
  const setLikeFood = useSetRecoilState(likeFood);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);

  function ResetRecoil() {
    setUserName('');
    setWishItem('');
    setWishPrice('');
    setLikeFood('');
  }

  return (
    <>
      <StEndingcontainer>
        <p>우리가 들어줄게~</p>
        <p>들어만 준다고 아 ㅋㅋ</p>
        <img src={sowonSanta} alt='sowonSanta' />
      </StEndingcontainer>
      <StShare>
        <Link to='/'>
          <button onClick={ResetRecoil}>처음으로</button>
        </Link>
        <CopyToClipboard
          text={`https://makeawish.vercel.app?ref=makeawish_web&utm_campaign=makeawish_web&utm_source=share&utm_medium=referral`}
          onCopy={() => alert('링크가 클립보드에 복사되었어요!')}
        >
          <button>공유하기</button>
        </CopyToClipboard>
      </StShare>
    </>
  );
}

export default Ending;

const StEndingcontainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding-top: 5.1rem;

  & > p {
    color: white;
    font-family: Galmuri11, sans-serif;
    font-size: 1.8rem;
    line-height: 2.7rem;
    letter-spacing: 1.1%;
    font-weight: 400;
  }

  & > img {
    width: 32.6rem;
    height: 49.8rem;
    margin-bottom: 1.1rem;
  }
`;

const StShare = styled.div`
  & > button {
    width: 50%;
    text-align: right;
    font-family: Galmuri11, sans-serif;
    font-size: 1.8rem;
    background-color: #ee5959;
    color: white;
    margin-right: 4.1rem;
  }
  & > a > button {
    width: 50%;
    text-align: left;
    font-family: Galmuri11, sans-serif;
    font-size: 1.8rem;
    background-color: #ee5959;
    color: white;
    margin-left: 4.1rem;
    margin-right: 16.2rem;
  }
  display: flex;
  justify-content: space-between;
`;
