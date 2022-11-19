import React from 'react';
import styled from 'styled-components';
import container from '../assets/image/container.png';
import StepButton from 'components/common/StepButton';
import StepView from 'components/common/StepView';
import { useRecoilState } from 'recoil';
import { wishDate } from 'atoms/atom';

function Step3() {
  const [_wishDate, setWishDate] = useRecoilState(wishDate);
  const test = (e) => {
    // if (today > e.target.value) {
    //   alert('잘못된 날짜예여');
    //   console.log('냐냐');
    // } else {
    setWishDate(e.target.value);
    console.log(e.target.value);

    // }
  };

  const getYmd10 = () => {
    //yyyy-mm-dd 포맷 날짜 생성
    let d = new Date();
    return (
      d.getFullYear() +
      '-' +
      (d.getMonth() + 1 > 9 ? (d.getMonth() + 1).toString() : '0' + (d.getMonth() + 1)) +
      '-' +
      (d.getDate() > 9 ? d.getDate().toString() : '0' + d.getDate().toString())
    );
  };

  const today = getYmd10();
  return (
    <StyledRoot>
      <Container>
        <Main>
          <Title>소원을 말해보세영</Title>
          <Question>
            그거...
            <br /> 언제쯤 받고 싶어?
          </Question>
          <InputBox
            type='date'
            onChange={(e) => {
              test(e);
            }}
            min={today}
          ></InputBox>
        </Main>
        <StepView></StepView>
        <StepButton></StepButton>
      </Container>
    </StyledRoot>
  );
}

export default Step3;

const StyledRoot = styled.div`
  height: 100vh;
  width: 100%;
  background-color: #ee5959;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  width: 37rem;
  height: 60rem;
  left: 14px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url(${container});
  background-repeat: no-repeat;
`;

const Main = styled.div`
  display: flex;
  height: 60%;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

const Title = styled.h1`
  font-weight: bold;
  font-size: 2.4rem;
`;
const Question = styled.p`
  font-weight: 400;
  font-size: 1.8rem;
  text-align: center;
`;
const InputBox = styled.input`
  outline: none;
  border: none;
  width: 24.4rem;
  border-bottom: 0.2rem solid black;
  font-size: 1.8rem;
  font-family: Galmuri11;
  text-align: center;
  padding-bottom: 1rem;
`;
