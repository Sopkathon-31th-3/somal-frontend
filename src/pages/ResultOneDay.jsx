import React from 'react';
import { useEffect } from 'react';
import axios from 'axios';
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
    //하위 5개 음식 데이터
    const foodList = () => {
      switch (likeFoodValue) {
        case '뿌링클': {
          return [1, 2, 5, 6, 9];
        }
        case '붕어빵': {
          return [0, 3, 6, 7, 8];
        }
        case '스벅 아아': {
          return [1, 5, 7, 8, 9];
        }
        case '순대 국밥': {
          return [0, 1, 2, 4, 5];
        }
        case '빅맥세트': {
          return [2, 3, 5, 8, 9];
        }
        case '엽기 떡볶이': {
          return [2, 3, 4, 7, 8];
        }
        case '김가네 김밥': {
          return [0, 1, 3, 5, 9];
        }
        case '명랑 핫도그': {
          return [1, 2, 4, 5, 6];
        }
        case '피자스쿨': {
          return [0, 3, 5, 7, 9];
        }
        case '신라면': {
          return [0, 1, 2, 4, 6];
        }

        default: {
          return;
        }
      }
    };
    //선택한 음식 데이터
    const foodSelectedIdx = () => {
      switch (likeFoodValue) {
        case '뿌링클': {
          return 0;
        }
        case '붕어빵': {
          return 1;
        }
        case '스벅 아아': {
          return 2;
        }
        case '순대 국밥': {
          return 3;
        }
        case '빅맥세트': {
          return 4;
        }
        case '엽기 떡볶이': {
          return 5;
        }
        case '김가네 김밥': {
          return 6;
        }
        case '명랑 핫도그': {
          return 7;
        }
        case '피자스쿨': {
          return 8;
        }
        case '신라면': {
          return 9;
        }

        default: {
          return;
        }
      }
    };
    axios
      .post('http://54.180.113.169:3000/result', {
        foodName: likeFoodValue,
        wishItemPrice: wishPriceValue,
      })
      .then(function (response) {
        const resultArr = response.data.data;
        setFood2(resultArr[foodList()[1]]);
        setFood3(resultArr[foodList()[2]]);
        setFood1(resultArr[foodList()[0]]);
        setFood4(resultArr[foodList()[3]]);
        setFood5(resultArr[foodList()[4]]);
        setFoodSelectedResult(resultArr[[foodSelectedIdx()]]);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [likeFoodValue, wishPriceValue]);

  //foodList는 매번 업데이트될 필요가 있지. 얘의 역할은 10개 중에서 5개를 뭘 뽑을지 그 번호를 저장하는 거고
  //주석 귀엽다 현수야 ><

  function checkName(name, num) {
    const charCode = name.charCodeAt(name.length - 1);

    const consonantCode = (charCode - 44032) % 28;

    if (consonantCode === 0) {
      //받침 없음
      return (
        <>
          <Bolded>{name}</Bolded>
          {num === 1 ? '에게' : '를'}
        </>
      );
    }

    return (
      <>
        <Bolded>{name}이</Bolded>
        {num === 1 ? '에게' : '를'}
      </>
    );
  }

  function checkName2(name) {
    const charCode = name.charCodeAt(name.length - 1);

    const consonantCode = (charCode - 44032) % 28;

    if (consonantCode === 0) {
      //받침 없음
      return '는';
    }

    return '은';
  }

  return (
    <StyledRoot>
      <Container1>
        <TextWrapper>
          <Text>{checkName(userNameValue, 1)}</Text>
          <Text>
            <BoldRed>{wishItemValue}</BoldRed>
          </Text>
          <Text>선물해주기 프로젝트</Text>
          <Text>선물 주기 생각보다 쉽다~🎁</Text>
          <Blank></Blank>
          <Text>
            <BoldRed>
              {likeFoodValue} {inputPriceFormat(foodSelectedResult.foodNum)}
              {foodSelectedResult.unit}
            </BoldRed>
            만
          </Text>
          <Text> 포기하면 돼ㅋ</Text>
          <br />
          <FoodPhoto src={foodSelectedResult.imageURL} alt='선택한 음식 사진'></FoodPhoto>
          <br />
          <br />
          <Text>{checkName(userNameValue, 0)} 향한 애정,</Text>
          <Text>그 정도는 되잖아~❤️?</Text>
          <br />
          <br />
        </TextWrapper>
        <DailyFoodWrapper>
          <p> 만약 어렵다면~</p>
          <br />
          <p>
            {food1.foodName} {inputPriceFormat(food1.foodNum)}
            {food1.unit} 먹지 말든지..~
          </p>
          <p>
            {food2.foodName} {inputPriceFormat(food2.foodNum)}
            {food2.unit} 먹지 말든지..~
          </p>
          <p>
            {food3.foodName} {inputPriceFormat(food3.foodNum)}
            {food3.unit} 먹지 말든지..~
          </p>
          <p>
            {food4.foodName} {inputPriceFormat(food4.foodNum)}
            {food4.unit} 먹지 말든지..~
          </p>
          <p>
            {food5.foodName} {inputPriceFormat(food5.foodNum)}
            {food5.unit} 먹지 말든지..~
          </p>
          <ScrollIcon src={scrollIcon} alt='scrollIcon'></ScrollIcon>
        </DailyFoodWrapper>
      </Container1>
      <DescText>화면을 캡쳐해서 네 산타에게 보내봐!</DescText>
      <Container2>
        <SantaText>혜인아 아무래도</SantaText>
        <SantaText>힘들 것 같아 </SantaText>
        <SantaText>
          ‘{likeFoodValue}'{checkName2(likeFoodValue)} 죽어도
        </SantaText>
        <SantaText>포기 못하겠어 ㅠ</SantaText>
        <EndingBtn>
          <Link to={'/ending'}>
            <NextText>그럼... 우리가 들어줄까?</NextText>
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
  width: 37.2rem; // 짤려서 수정했음
  height: 62.8rem; //짤려서 수정했음
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
  width: 37.2rem; // 짤려서 수정했음
  height: 35.3rem; //짤려서 수정했음
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
