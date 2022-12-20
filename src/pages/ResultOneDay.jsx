import React from 'react';
import styled from 'styled-components';
import hotdog from '../assets/image/hotdog.svg';
import ResultSanta from '../assets/image/ResultSanta.svg';
import { useRecoilState } from 'recoil';
import { wishPrice, wishItem, likeFood } from 'atoms/atom';
import { postWishData } from 'lib/api';

export default function Result() {
  // const [_wishItem, setWishItem] = useRecoilState(wishItem);
  // const [_wishPrice, setWishPrice] = useRecoilState(wishPrice);
  // const [_likeFood, setLikeFood] = useRecoilState(likeFood);

  // const product = _wishItem;
  // const day = 1;
  // const foodName = _likeFood;
  // const foodNum = 1;

  console.log(postWishData({ foodName: '현지', wishItemPrice: 100 }));

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

  return (
    <Container>
      <p>'박현지'에게</p>
      <p>'에어팟' 선물해주기 프로젝트 생각보다 쉽다~</p>
      <p>'뿌링클' '100''마리' 만 포기하면 돼~</p>

      <img src={hotdog} alt='hotdog'></img>
      <DailyFoodWrapper>
        <p> 만약 어렵다면~</p>
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
    </Container>
  );
}

const Container = styled.div`
  margin-top: 5rem;
  font-size: 2.2rem;
`;

const DailyFoodWrapper = styled.div`
  text-align: center;
  font-size: 1.2rem;
  margin-top: 2.1rem;
  margin-bottom: 5.4rem;
  line-height: 1.8rem;
`;
