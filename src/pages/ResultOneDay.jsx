import React from 'react';
import styled from 'styled-components';
import CopyToClipboard from 'react-copy-to-clipboard';
import Union from '../assets/image/Union.png';
import presentBox from '../assets/image/presentbox.png';
import ResultSanta from '../assets/image/ResultSanta.svg';
import NextIcon from '../assets/icon/NextIcon.svg';
import { Link } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { wishPrice, wishItem, likeFood } from 'atoms/atom';
//dayjs format
import dayjs from 'dayjs';

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

  //wishItem, wishPrice, wishDate

  // console.log(_wishDate);
  // console.log(_wishItem);
  // console.log(dayjs(_wishDate).year());

  return (
    <div>
      {/**/}
      <WrapperWrapper>
        <Wrapper>
          <PresentBoxWrapper>
            <img src={presentBox} />
          </PresentBoxWrapper>
          <TextWrapperWrapper>
            <TextWrapper>
              <Text>자자,</Text>
              <Text>
                <Bolded>나림이</Bolded>
                에게 <BoldRed>에어팟 맥스</BoldRed>
              </Text>
              <Text>선물해주기 프로젝트</Text>
              <Text>선물 주기 생각보다 쉽다~🎁</Text>
              <Blank></Blank>
              <Text>
                <BoldRed>뿌링클 200개</BoldRed>만 포기하면 돼ㅋ
              </Text>

              <Text>
                <Bolded>나림이</Bolded>를 향한 애정,
              </Text>
              <Text>그 정도는 되잖아~❤️?</Text>
              <Blank></Blank>
            </TextWrapper>
          </TextWrapperWrapper>
          <DailyFoodWrapper>
            <p> 만약 어렵다면~</p>
            <Blank></Blank>
            <p>
              {food1} 하루에 {foodNum1}마리 먹지 말든지 ㅋㅎ ~
            </p>
            <p>
              {food2} 하루에 {foodNum2}잔 먹지 말든지 ㅋㅋ ~
            </p>
            <p>
              {food3} 하루에 {foodNum3}개 먹지 말든지 ㅎㅋ ~
            </p>
            <p>
              {food4} 하루에 {foodNum4}개 먹지 말든지 ㅋㅋ ~
            </p>
            <p>
              {food5} 하루에 {foodNum5}봉지 먹지 말든지 ㅋㅋㅋ ~
            </p>
          </DailyFoodWrapper>
          <SantaWrapper>
            <img src={ResultSanta} alt='result Santa'></img>
          </SantaWrapper>
          <BelowButton>
            <CopyToClipboard
              text={window.location.host}
              onCopy={() => alert('링크가 클립보드에 복사되었어요!')}
            >
              <button>
                공유하기
                {/* <img className='link shareicon' src={link} /> */}
              </button>
            </CopyToClipboard>
            <ComplainWrapper>
              <Link to={'/ending'}>
                <button>불만 있니?</button>
                <img src={NextIcon}></img>
              </Link>
            </ComplainWrapper>
          </BelowButton>
        </Wrapper>
      </WrapperWrapper>
    </div>
  );
}

const BoldRed = styled.span`
  color: #ee5959;
  font-weight: 700;
  font-family: Galmuri11, sans-serif;
  font-size: 2.2rem;
  line-height: 3.3rem;
`;

const Bolded = styled.span`
  font-weight: 700;
  font-family: Galmuri11, sans-serif;
  font-size: 2.2rem;
  line-height: 3.3rem;
`;

const Text = styled.p`
  font-weight: 400;
  font-family: Galmuri11, sans-serif;
  font-size: 1.8rem;
  line-height: 2.7rem;
  text-align: center;
`;

const Wrapper = styled.div`
  background-image: url(${Union});
  margin-top: 3.5rem;
  width: 36rem; // 짤려서 수정했음
  height: 110.8rem; //짤려서 수정했음
`;

const WrapperWrapper = styled.div`
  width: 39rem;
  height: 149.7rem;
  display: flex;
  justify-content: center;
`;

const PresentBoxWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 4rem;
  margin-bottom: 1.1rem;
`;

const Blank = styled.div`
  height: 3.3rem;
`;

const TextWrapper = styled.div`
  /* width: 24.7rem; */
  width: 40rem;
`;

const TextWrapperWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const SantaWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const ComplainWrapper = styled.div`
  display: flex;
  align-items: center;
  & > a {
    display: flex;
    align-items: center;
  }
  & > a > button {
    font-family: Galmuri11, sans-serif;
    font-size: 1.8rem;
    background-color: white;
    margin-right: 1.7rem;
  }
`;

const BelowButton = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 5.9rem;
  & > button {
    font-family: Galmuri11, sans-serif;
    font-size: 1.8rem;
    background-color: white;
    margin-right: 1.7rem;
  }
  margin-left: 5.1rem;
  margin-right: 4.7rem;
`;

const DailyFoodWrapper = styled.div`
  text-align: center;
  font-size: 1.2rem;
  margin-top: 2.1rem;
  margin-bottom: 5.4rem;
  line-height: 1.8rem;
`;
