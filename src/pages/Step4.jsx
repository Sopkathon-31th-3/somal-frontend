import nextIcon from 'assets/icon/nextIcon.png';
import prevIcon from 'assets/icon/prevIcon.png';
import bigBalloon from 'assets/image/big_balloon.svg';
import boonguhppang from 'assets/image/boonguhppang.svg';
import burger from 'assets/image/burger.svg';
import chicken from 'assets/image/chicken.svg';
import coffee from 'assets/image/coffee.svg';
import gimbap from 'assets/image/gimbap.svg';
import gookbap from 'assets/image/gookbap.svg';
import hotdog from 'assets/image/hotdog.svg';
import logo from 'assets/image/logo.svg';
import optionBalloon from 'assets/image/option_balloon.png';
import optionBalloonRed from 'assets/image/option_balloon_red.svg';
import pizza from 'assets/image/pizza.svg';
import ramen from 'assets/image/ramen.svg';
import ttheokbokki from 'assets/image/tteokbokki.svg';
import { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { likeFood } from 'atoms/atom';
import { useRecoilState } from 'recoil';

function Step4() {
  const navigate = useNavigate();

  const onClickNext = () => {
    if (_likeFood == '' || _likeFood == undefined) {
      alert('음식을 선택해주세요!');
    } else {
      navigate(`/loading`);
    }
  };

  const foodList = [
    { src: chicken, name: '뿌링클', price: 22000 },
    { src: boonguhppang, name: '붕어빵', price: 500 },
    { src: coffee, name: '스벅 아아', price: 4500 },
    { src: gookbap, name: '순대 국밥', price: 9000 },
    { src: burger, name: '빅맥세트', price: 7500 },
    { src: ttheokbokki, name: '엽기 떡볶이', price: 14000 },
    { src: gimbap, name: '김가네 김밥', price: 3900 },
    { src: hotdog, name: '핫도그', price: 1800 },
    { src: pizza, name: '피자스쿨', price: 10900 },
    { src: ramen, name: '신라면', price: 820 },
  ];
  const location = useLocation();
  const [_likeFood, setLikeFood] = useRecoilState(likeFood);
  const stepNum = location.pathname.slice(-1);
  const [selected, setSelected] = useState(null);
  const handleSelect = (foodItem, idx) => {
    setSelected(idx);
    setLikeFood(foodItem.name);
  };

  useEffect(() => {}, [selected, setSelected]);

  return (
    <StyledRoot>
      <Step4Background>
        <Logo src={logo} />
        <Question>
          너가 가장
          <br />
          애정하는 음식이...뭐였지?
        </Question>
        <OptionArea>
          {foodList.map((foodItem, index) => (
            // {index===selected ? ():()}
            <OptionBackground
              onClick={() => handleSelect(foodItem, index)}
              key={index}
              idx={index}
              selected={selected}
            >
              <FoodImg src={foodItem.src} key={index} />
              <p>{foodItem.name}</p>
              <span>{foodItem.price}원</span>
            </OptionBackground>
          ))}
        </OptionArea>
        <StepWrapper>
          <StepItem isRed={stepNum === '1'}></StepItem>
          <StepItem isRed={stepNum === '2'}></StepItem>
          <StepItem isRed={stepNum === '3'}></StepItem>
          <StepItem isRed={stepNum === '4'}></StepItem>
        </StepWrapper>
        <ButtonContainer>
          <Link to='/step3'>
            <PrevButtonContainer>
              <img src={prevIcon} alt='prevBtn'></img>
              <p>이전</p>
            </PrevButtonContainer>
          </Link>
          <NextButtonContainer onClick={onClickNext}>
            <p>다음</p>
            <img src={nextIcon} alt='nextBtn'></img>
          </NextButtonContainer>
        </ButtonContainer>
      </Step4Background>
    </StyledRoot>
  );
}

export default Step4;

const StyledRoot = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: absolute;
`;

const Step4Background = styled.div`
  width: 36rem;
  height: 142.3rem;
  position: relative;
  top: 3.5rem;
  margin-bottom: 11.9rem;
  background-image: url(${bigBalloon});
  background-repeat: no-repeat;
  text-align: center;

  p {
    margin: 10.2rem 0 0.4rem 0;
    font-size: 1.4rem;
  }

  span {
    font-size: 1.2rem;
  }
`;

const Question = styled.h1`
  font-weight: 400;
  font-size: 1.8rem;
  text-align: center;
  margin-bottom: 2.8rem;
`;

const OptionArea = styled.div`
  width: 29.2rem;
  height: 85.3rem;
  display: flex;
  flex-wrap: wrap;
  gap: 1.2rem;
  margin-left: 4.2rem;
`;

const OptionBackground = styled.div`
  width: 14rem;
  height: 16.5rem;
  cursor: pointer;

  ${({ idx, selected }) =>
    idx === selected &&
    css`
      background-image: url(${optionBalloonRed});
    `}
  ${({ idx, selected }) =>
    idx !== selected &&
    css`
      background-image: url(${optionBalloon});
    `}
    /* background-color: green; */
  /* background-image: url(${optionBalloon}); */
  position: relative;
`;

const FoodImg = styled.img`
  width: 7.2rem;
  height: 7.2rem;
  position: absolute;
  top: 1.6rem;
  left: 3.2rem;
`;

const Logo = styled.img`
  width: 20.4rem;
  height: 2rem;
  margin: 5.6rem 0 5.9rem 0;
`;

const StepWrapper = styled.div`
  width: 9.2rem;
  height: 0.8rem;
  display: flex;
  justify-content: space-between;
  margin-top: 6rem;
  margin-left: 13.3rem;
`;

const StepItem = styled.div`
  width: 0.8rem;
  height: 0.8rem;
  background: #d9d9d9;

  ${({ isRed }) =>
    isRed &&
    css`
      background-color: #ee5959;
    `}
`;

const PrevButtonContainer = styled.div`
  display: flex;
  align-items: center;

  & > p {
    font-size: 1.8rem;
    margin-left: 1.7rem;
    margin-bottom: 9.5rem;
  }
`;

const NextButtonContainer = styled.div`
  display: flex;
  align-items: center;

  & > p {
    font-size: 1.8rem;
    margin-right: 1.7rem;
    margin-bottom: 9.5rem;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;
