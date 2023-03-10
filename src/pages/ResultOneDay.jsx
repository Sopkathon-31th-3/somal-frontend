import React from 'react';
import { useEffect } from 'react';
import styled from 'styled-components';
import resultContainer1 from '../assets/image/resultContainer1.png';
import resultContainer2Test from '../assets/image/resultContainer2_test.png';

import foods from '../assets/image/foods.png';
import scrollIcon from '../assets/image/scrollIcon.png';
import endingIcon from '../assets/image/endingIcon.png';

import { Link } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { likeFood, wishPrice, userName, wishItem } from 'atoms/atom';
import { useState } from 'react';

import burger from '../assets/image/burger.png';
import chicken from '../assets/image/chicken.png';
import coffee from '../assets/image/coffee.png';
import gookbap from '../assets/image/gookbap.png';
import tteokbokki from '../assets/image/tteokbokki.png';
import gimbap from '../assets/image/gimbap.png';
import hotdog from '../assets/image/hotdog.png';
import pizza from '../assets/image/pizza.png';
import ramen from '../assets/image/ramen.png';
import boonguhppang from '../assets/image/boonguhppang.png';

export default function Result() {
  const checkZero = (num) => {
    if (num === 0) {
      return 1;
    } else {
      return num;
    }
  };

  const inputPriceFormat = (str) => {
    str = String(checkZero(str));
    str.replace(/(^0+)/, '');
    const comma = (str) => {
      str = String(str);
      return str.replace(/(\d)(?=(?:\d{3})+(?!\d))/g, '$1,');
    };
    const uncomma = (str) => {
      str = String(str);
      return str.replace(/[^\d]+/g, '');
    };
    return comma(uncomma(str));
  };

  const likeFoodValue = useRecoilValue(likeFood);
  const wishPriceValue = useRecoilValue(wishPrice);
  const userNameValue = useRecoilValue(userName);
  const wishItemValue = useRecoilValue(wishItem);

  const [foodSelectedResult, setFoodSelectedResult] = useState('');
  const [food1, setFood1] = useState('');
  const [food2, setFood2] = useState('');
  const [food3, setFood3] = useState('');
  const [food4, setFood4] = useState('');
  const [food5, setFood5] = useState('');

  useEffect(() => {
    //?????? 5??? ?????? ?????????
    const foodList = () => {
      switch (likeFoodValue) {
        case '?????????': {
          return [1, 2, 5, 6, 9];
        }
        case '?????????': {
          return [0, 3, 6, 7, 8];
        }
        case '?????? ??????': {
          return [1, 5, 7, 8, 9];
        }
        case '?????? ??????': {
          return [0, 1, 2, 4, 5];
        }
        case '????????????': {
          return [2, 3, 5, 8, 9];
        }
        case '?????? ?????????': {
          return [2, 3, 4, 7, 8];
        }
        case '????????? ??????': {
          return [0, 1, 3, 5, 9];
        }
        case '?????? ?????????': {
          return [1, 2, 4, 5, 6];
        }
        case '????????????': {
          return [0, 3, 5, 7, 9];
        }
        case '?????????': {
          return [0, 1, 2, 4, 6];
        }

        default: {
          return;
        }
      }
    };
    //????????? ?????? ?????????
    const foodSelectedIdx = () => {
      switch (likeFoodValue) {
        case '?????????': {
          return 0;
        }
        case '?????????': {
          return 1;
        }
        case '?????? ??????': {
          return 2;
        }
        case '?????? ??????': {
          return 3;
        }
        case '????????????': {
          return 4;
        }
        case '?????? ?????????': {
          return 5;
        }
        case '????????? ??????': {
          return 6;
        }
        case '?????? ?????????': {
          return 7;
        }
        case '????????????': {
          return 8;
        }
        case '?????????': {
          return 9;
        }

        default: {
          return;
        }
      }
    };

    const getResultData = () => {
      return [
        {
          id: 1,
          foodName: '?????????',
          foodNum: Math.floor(wishPriceValue / 18000),
          unit: '??????',
          imageUrl: chicken,
        },
        {
          id: 2,
          foodName: '?????????',
          foodNum: Math.floor(wishPriceValue / 500),
          unit: '??????',
          imageUrl: boonguhppang,
        },
        {
          id: 3,
          foodName: '?????? ??????',
          foodNum: Math.floor(wishPriceValue / 4500),
          unit: '???',
          imageUrl: coffee,
        },
        {
          id: 4,
          foodName: '?????? ??????',
          foodNum: Math.floor(wishPriceValue / 9000),
          unit: '??????',
          imageUrl: gookbap,
        },
        {
          id: 5,
          foodName: '?????? ??????',
          foodNum: Math.floor(wishPriceValue / 7500),
          unit: '???',
          imageUrl: burger,
        },
        {
          id: 6,
          foodName: '?????? ?????????',
          foodNum: Math.floor(wishPriceValue / 14000),
          unit: '???',
          imageUrl: tteokbokki,
        },
        {
          id: 7,
          foodName: '????????? ??????',
          foodNum: Math.floor(wishPriceValue / 3900),
          unit: '???',
          imageUrl: gimbap,
        },
        {
          id: 8,
          foodName: '?????? ?????????',
          foodNum: Math.floor(wishPriceValue / 1800),
          unit: '???',
          imageUrl: hotdog,
        },
        {
          id: 9,
          foodName: '????????????',
          foodNum: Math.floor(wishPriceValue / 10900),
          unit: '???',
          imageUrl: pizza,
        },
        {
          id: 10,
          foodName: '?????????',
          foodNum: Math.floor(wishPriceValue / 820),
          unit: '??????',
          imageUrl: ramen,
        },
      ];
    };
    const resultArr = getResultData();
    setFood2(resultArr[foodList()[1]]);
    setFood3(resultArr[foodList()[2]]);
    setFood1(resultArr[foodList()[0]]);
    setFood4(resultArr[foodList()[3]]);
    setFood5(resultArr[foodList()[4]]);
    setFoodSelectedResult(resultArr[[foodSelectedIdx()]]);
  }, [likeFoodValue, wishPriceValue]);

  function checkName(name, num) {
    const charCode = name.charCodeAt(name.length - 1);

    const consonantCode = (charCode - 44032) % 28;

    if (consonantCode === 0) {
      //?????? ??????
      return (
        <>
          <Bolded>{name}</Bolded>
          {num === 1 ? '??????' : '???'}
        </>
      );
    }

    return (
      <>
        <Bolded>{name}???</Bolded>
        {num === 1 ? '??????' : '???'}
      </>
    );
  }

  function checkName2(name) {
    const charCode = name.charCodeAt(name.length - 1);

    const consonantCode = (charCode - 44032) % 28;

    if (consonantCode === 0) {
      //?????? ??????
      return '???';
    }

    return '???';
  }

  function checkName3(name) {
    const charCode = name.charCodeAt(name.length - 1);

    const consonantCode = (charCode - 44032) % 28;

    if (consonantCode === 0) {
      //?????? ??????
      return '???';
    }

    return '???';
  }

  return (
    <StyledRoot>
      <Container1>
        <TextWrapper>
          <Text>{checkName(userNameValue, 1)}</Text>
          <Text>
            <BoldRed>{wishItemValue}</BoldRed>
          </Text>
          <Text>??????????????? ????????????</Text>
          <Text>?????? ?????? ???????????? ??????~????</Text>
          <Blank></Blank>
          <Text>
            <BoldRed>
              {likeFoodValue} {inputPriceFormat(foodSelectedResult.foodNum)}
              {foodSelectedResult.unit}
            </BoldRed>
            ???
          </Text>
          <Text> ???????????? ??????</Text>
          <br />
          <FoodPhoto src={foodSelectedResult.imageUrl} alt='????????? ?????? ??????'></FoodPhoto>
          <br />
          <br />
          <Text>{checkName(userNameValue, 0)} ?????? ??????,</Text>
          <Text>??? ????????? ?????????~???????</Text>
          <br />
          <br />
        </TextWrapper>
        <DailyFoodWrapper>
          <p> ?????? ????????????~</p>
          <br />
          <p>
            {food1.foodName} {inputPriceFormat(food1.foodNum)}
            {food1.unit} ?????? ?????????..~
          </p>
          <p>
            {food2.foodName} {inputPriceFormat(food2.foodNum)}
            {food2.unit} ?????? ?????????..~
          </p>
          <p>
            {food3.foodName} {inputPriceFormat(food3.foodNum)}
            {food3.unit} ?????? ?????????..~
          </p>
          <p>
            {food4.foodName} {inputPriceFormat(food4.foodNum)}
            {food4.unit} ?????? ?????????..~
          </p>
          <p>
            {food5.foodName} {inputPriceFormat(food5.foodNum)}
            {food5.unit} ?????? ?????????..~
          </p>
          <ScrollIcon src={scrollIcon} alt='scrollIcon'></ScrollIcon>
        </DailyFoodWrapper>
      </Container1>
      <DescText>????????? ???????????? ??? ???????????? ?????????!</DescText>
      <Container2>
        <SantaText>
          {userNameValue}
          {checkName3(userNameValue)} ????????????
        </SantaText>
        <SantaText>?????? ??? ?????? </SantaText>
        <SantaText>
          ???{likeFoodValue}'{checkName2(likeFoodValue)} ?????????
        </SantaText>
        <SantaText>?????? ???????????? ???</SantaText>
        <EndingBtn>
          <Link to={'/ending'}>
            <NextText>??????... ????????? ?????????????</NextText>
            <EndingIcon src={endingIcon} alt='endingIcon'></EndingIcon>
          </Link>
        </EndingBtn>
      </Container2>
    </StyledRoot>
  );
}

const BoldRed = styled.span`
  color: #ee5959;
  font-weight: 700;
  font-family: Galmuri11, sans-serif;
  font-size: 1.8rem;
  line-height: 2.7rem;
`;

const Bolded = styled.span`
  font-weight: 700;
  font-family: Galmuri11, sans-serif;
  font-size: 1.8rem;
  line-height: 2.7rem;
`;

const Text = styled.p`
  font-weight: 400;
  font-family: Galmuri11, sans-serif;
  font-size: 1.8rem;
  line-height: 2.7rem;
  text-align: center;
`;

const Container1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url(${resultContainer1});
  margin-top: 3.5rem;
  background-size: cover;
  background-repeat: no-repeat;
  width: 37.2rem; // ????????? ????????????
  height: 62.8rem; //????????? ????????????
`;

const Container2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 3rem;
  background-image: url(${resultContainer2Test});
  background-size: cover;
  /* margin-bottom: 15rem; */
  background-repeat: no-repeat;
  width: 37.2rem; // ????????? ????????????
  height: 35.3rem; //????????? ????????????
`;

const SantaText = styled.p`
  position: relative;
  left: 5.2rem;
  top: 7.5rem;
  font-weight: 400;
  font-size: 1.2rem;
  line-height: 150%;
`;

const NextText = styled.span`
  font-weight: 400;
  font-size: 18px;
  /* line-height: 150%; */
  /* width: 20rem; */
  margin-right: 1.7rem;
`;

const EndingIcon = styled.img`
  width: 1.2rem;
  height: 1.3rem;
`;

const EndingBtn = styled.div`
  position: relative;
  left: 2rem;
  top: 22rem;
  flex: row;
  justify-content: center;
  align-items: center;
  width: 23.7rem;
  height: 2.7rem;
`;

const StyledRoot = styled.div`
  width: 39rem;
  /* height: 149.7rem; */
  overflow-y: scroll;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const DescText = styled.p`
  font-weight: 400;
  font-size: 1.2rem;
  color: white;
`;

const ScrollIcon = styled.img`
  margin-top: 3.1rem;
`;

const Blank = styled.div`
  height: 2.7rem;
`;

const TextWrapper = styled.div`
  /* width: 24.7rem; */
  width: 40rem;
  margin-top: 4.3rem;
  text-align: center;
`;

const DailyFoodWrapper = styled.div`
  text-align: center;
  background-image: url(${foods});
  background-repeat: no-repeat;
  width: 26.45rem;
  height: 11.46rem;
  font-size: 1.2rem;
  line-height: 1.8rem;
`;

const FoodPhoto = styled.img`
  width: 6.3rem;
  height: 6.3rem;
`;
