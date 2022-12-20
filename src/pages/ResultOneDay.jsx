import React from 'react';
import styled from 'styled-components';
import CopyToClipboard from 'react-copy-to-clipboard';
import Union from '../assets/image/Union.png';
import presentBox from '../assets/image/presentbox.png';
import ResultSanta from '../assets/image/ResultSanta.svg';
import resultContainer1 from '../assets/image/resultContainer1.png';
import resultContainer2 from '../assets/image/resultContainer2.png';
import resultContainer2Test from '../assets/image/resultContainer2_test.png';

import foods from '../assets/image/foods.png';
import scrollIcon from '../assets/image/scrollIcon.png';
import endingIcon from '../assets/image/endingIcon.png';

import NextIcon from '../assets/icon/NextIcon.svg';
import { Link } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { wishPrice, wishItem, likeFood } from 'atoms/atom';
//dayjs format

export default function Result() {
  // const [_wishDate, setWishDate] = useRecoilState(wishDate);
  const [_wishItem, setWishItem] = useRecoilState(wishItem);
  const [_wishPrice, setWishPrice] = useRecoilState(wishPrice);
  const [_likeFood, setLikeFood] = useRecoilState(likeFood);

  const product = _wishItem;
  // const year = dayjs(_wishDate).year();
  // const month = dayjs(_wishDate).month() + 1;
  // const date = dayjs(_wishDate).date();
  const day = 1;
  const foodName = _likeFood;
  const foodNum = 1;

  const food1 = '붕어빵';
  const food2 = '스벅 아아';
  const food3 = '빅맥 세트';
  const food4 = '엽기 떡볶이';
  const food5 = '신라면';

  const foodNum1 = 'n';
  const foodNum2 = 'n';
  const foodNum3 = 'n';
  const foodNum4 = 'n';
  const foodNum5 = 'n';

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
            {food1} {foodNum1}마리 먹지 말든지 ㅋㅎ ~
          </p>
          <p>
            {food2} {foodNum2}잔 먹지 말든지 ㅋㅋ ~
          </p>
          <p>
            {food3} {foodNum3}개 먹지 말든지 ㅎㅋ ~
          </p>
          <p>
            {food4} {foodNum4}개 먹지 말든지 ㅋㅋ ~
          </p>
          <p>
            {food5} {foodNum5}봉지 먹지 말든지 ㅋㅋㅋ ~
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
