import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import ballon from '../assets/image/ballon.svg';
import santa from '../assets/image/santa.png';
import present from '../assets/image/present.png';
import { wishPrice, wishItem, likeFood, userName } from 'atoms/atom';
import { useSetRecoilState } from 'recoil';

function Landing() {
  const setUserName = useSetRecoilState(userName);
  const setWishItem = useSetRecoilState(wishItem);
  const setWishPrice = useSetRecoilState(wishPrice);
  const setLikeFood = useSetRecoilState(likeFood);

  function resetRecoil() {
    setUserName('');
    setWishItem('');
    setWishPrice('');
    setLikeFood('');
  }

  return (
    <Stcontainer>
      <StWrapper>
        <StTitle src={ballon} alt='title' />
        <StStart>
          <Santa src={santa} alt='santa' />

          <Link to={'/step1'}>
            <button type='button' onClick={resetRecoil}>
              시작하기
            </button>
          </Link>
        </StStart>
      </StWrapper>
      <Present src={present} alt='present' />
    </Stcontainer>
  );
}

export default Landing;

const Stcontainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 9.8rem;

  & > img {
    padding-top: 3.3rem;
  }
`;
const StWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StTitle = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 26.5rem;
  height: 16.2rem;
`;

const Santa = styled.img`
  width: 17.2rem;
  height: 17.2rem;
`;

const Present = styled.img`
  width: 100%;
`;

const StStart = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.2rem;
  color: white;

  & > a {
    display: flex;
    justify-content: center;

    width: 12.3rem;
    padding: 0.7rem 2.5rem;

    background-color: #ee5959;
    border: 0.1rem solid white;
    border-radius: 0.5rem;
  }
  & > a > button {
    color: white;
    background-color: #ee5959;

    font-family: Galmuri14, sans-serif;
    font-size: 1.8rem;
    font-weight: 400;
  }
  & > a:active {
    color: black;
    background-color: white;
    border: 0.1rem solid black;
  }
  & > a:active > button {
    color: black;
    background-color: white;
  }
`;
