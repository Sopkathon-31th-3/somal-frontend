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
import pizza from 'assets/image/pizza.svg';
import ramen from 'assets/image/ramen.svg';
import ttheokbokki from 'assets/image/tteokbokki.svg';
import { Link, useLocation } from 'react-router-dom';
import styled, { css } from 'styled-components';

function Step4() {
  const foodImgList = [
    chicken,
    boonguhppang,
    coffee,
    gookbap,
    burger,
    ttheokbokki,
    gimbap,
    hotdog,
    pizza,
    ramen,
  ];
  const location = useLocation();
  const stepNum = location.pathname.slice(-1);
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
          {foodImgList.map((foodImg, index) => (
            <OptionBackground key={index}>
              <FoodImg src={foodImg} key={index} />
              <p>뿌링클</p>
              <span>20000원</span>
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
          <PrevButtonContainer>
            <img src={prevIcon} alt='prevBtn'></img>
            <p>이전</p>
          </PrevButtonContainer>
          <Link to='/loading'>
            <NextButtonContainer>
              <p>다음</p>
              <img src={nextIcon} alt='nextBtn'></img>
            </NextButtonContainer>
          </Link>
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
  background-image: url(${optionBalloon});
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
