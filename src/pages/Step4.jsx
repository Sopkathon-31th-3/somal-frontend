import bigBalloon from 'assets/image/big_balloon.svg';
import boonguhppang from 'assets/image/boonguhppang.png';
import burger from 'assets/image/burger.png';
import chicken from 'assets/image/chicken.png';
import coffee from 'assets/image/coffee.png';
import gimbap from 'assets/image/gimbap.png';
import gookbap from 'assets/image/gookbap.png';
import hotdog from 'assets/image/hotdog.png';
import optionBalloon from 'assets/image/option_balloon.png';
import pizza from 'assets/image/pizza.png';
import ramen from 'assets/image/ramen.png';
import ttheokbokki from 'assets/image/ttheokbokki.png';
import styled from 'styled-components';

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
  return (
    <StyledRoot>
      <Step4Background>
        <OptionArea>
          {foodImgList.map((foodImg, index) => (
            <OptionBackground>
              <FoodImg src={foodImg} key={index} />
              <p>뿌링클</p>
              <span>20000원</span>
            </OptionBackground>
          ))}
        </OptionArea>
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
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  p {
    margin: 10.2rem 0 0.4rem 0;
    font-size: 1.4rem;
  }

  span {
    font-size: 1.2rem;
  }
`;

const OptionArea = styled.div`
  width: 29.2rem;
  height: 85.3rem;
  display: flex;
  flex-wrap: wrap;
  gap: 1.2rem;
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
