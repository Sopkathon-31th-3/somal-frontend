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
import { postWishData } from 'lib/api';
import { useRecoilValue } from 'recoil';
import { likeFood, wishPrice } from 'atoms/atom';
import { useState } from 'react';

export default function Result() {
  const likeFoodValue = useRecoilValue(likeFood);
  const wishPriceValue = useRecoilValue(wishPrice);

  const [food1, setFood1] = useState('');
  const [food2, setFood2] = useState('');
  const [food3, setFood3] = useState('');
  const [food4, setFood4] = useState('');
  const [food5, setFood5] = useState('');

  const [foodList, setFoodList] = useState([]);

  //const result = postWishData({ foodName: likeFoodValue, wishItemPrice: wishPriceValue });
  //console.log(result.then((res) => res.data.data[0])); //왜 then..?

  useEffect(() => {
    switch (likeFoodValue) {
      case '뿌링클':
        setFoodList([1, 2, 5, 6, 9]);
        break;
      case '붕어빵':
        setFoodList([0, 3, 6, 7, 8]);
        break;
      case '스벅 아아':
        setFoodList([1, 5, 7, 8, 9]);
        break;
      case '순대국밥':
        setFoodList([0, 1, 2, 4, 5]);
        break;
      case '빅맥 세트':
        setFoodList([2, 3, 5, 8, 9]);
        break;
      case '엽기떡볶이':
        setFoodList([2, 3, 4, 7, 8]);
        break;
      case '김가네 김밥':
        setFoodList([0, 1, 3, 5, 9]);
        break;
      case '명랑 핫도그':
        setFoodList([1, 2, 4, 5, 6]);
        break;
      case '피자스쿨':
        setFoodList([0, 3, 5, 7, 9]);
        break;
      case '신라면':
        setFoodList([0, 1, 2, 4, 6]);
        break;
      default:
        break;
    }

    axios
      .post('http://54.180.113.169:3000/result', {
        foodName: likeFoodValue,
        wishItemPrice: wishPriceValue,
      })
      .then(function (response) {
        setFood1(response.data.data[foodList[0]].foodName);
        setFood2(response.data.data[foodList[1]].foodName);
        setFood3(response.data.data[foodList[2]].foodName);
        setFood4(response.data.data[foodList[3]].foodName);
        setFood5(response.data.data[foodList[4]].foodName); // 이걸로 잘 되면 foodList 에 문제가 있다는 것.
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [likeFoodValue, wishPriceValue]);

  //foodList는 매번 업데이트될 필요가 있지. 얘의 역할은 10개 중에서 5개를 뭘 뽑을지 그 번호를 저장하는 거고
  const foodNum1 = 'n';
  const foodNum2 = 'n';
  const foodNum3 = 'n';
  const foodNum4 = 'n';
  const foodNum5 = 'n';

  //console.log(food1);
  //console.log(food2);

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

  return (
    <StyledRoot>
      <Container1>
        <TextWrapper>
          <Text>
            <Bolded>나림이</Bolded>
            에게
          </Text>
          <Text>
            <BoldRed>에어팟 맥스</BoldRed>
          </Text>
          <Text>선물해주기 프로젝트</Text>
          <Text>선물 주기 생각보다 쉽다~🎁</Text>
          <Blank></Blank>
          <Text>
            <BoldRed>뿌링클 200개</BoldRed>만
          </Text>
          <Text> 포기하면 돼ㅋ</Text>
          <Text>{checkName('혜인', 0)} 향한 애정,</Text>
          <Text>그 정도는 되잖아~❤️?</Text>
          <Blank></Blank>
        </TextWrapper>
        <DailyFoodWrapper>
          <p> 만약 어렵다면~</p>
          <Blank></Blank>
          <p>
            {food1} {foodNum1}개 먹지 말든지 ㅋㅎ ~
          </p>
          <p>
            {food2} {foodNum2}마리 먹지 말든지 ㅋㅋ ~
          </p>
          <p>
            {food3} {foodNum3}잔 먹지 말든지 ㅎㅋ ~
          </p>
          <p>
            {food4} {foodNum4}봉지 먹지 말든지 ㅋㅋ ~
          </p>
          <p>
            {food5} {foodNum5}개 먹지 말든지 ㅋㅋㅋ ~
          </p>
        </DailyFoodWrapper>
        <ScrollIcon src={scrollIcon} alt='scrollIcon'></ScrollIcon>
      </Container1>
      <DescText>화면을 캡쳐해서 네 산타에게 보내봐!</DescText>
      <Container2>
        <SantaText>혜인아 아무래도</SantaText>
        <SantaText>힘들 것 같아 </SantaText>
        <SantaText>‘뿌링클'은 죽어도</SantaText>
        <SantaText>포기 못하겠어 ㅠ</SantaText>
        <EndingBtn>
          <Link to={'/ending'}>
            <NextText>그럼...우리가 들어줄까?</NextText>
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
  line-height: 3.3rem;
`;

const Bolded = styled.span`
  font-weight: 700;
  font-family: Galmuri11, sans-serif;
  font-size: 1.8rem;
  line-height: 3.3rem;
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

const ScrollIcon = styled.img``;

const Blank = styled.div`
  height: 3.3rem;
`;

const TextWrapper = styled.div`
  /* width: 24.7rem; */
  width: 40rem;
  margin-top: 4.3rem;
`;

const DailyFoodWrapper = styled.div`
  text-align: center;
  background-image: url(${foods});
  background-repeat: no-repeat;
  width: 26.45rem;
  height: 11.46rem;
  font-size: 1.2rem;
  margin-top: 2.1rem;
  margin-bottom: 5.4rem;
  line-height: 1.8rem;
`;
