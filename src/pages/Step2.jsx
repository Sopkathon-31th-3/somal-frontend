import React from 'react';
import styled from 'styled-components';
import container from '../assets/image/container.png';
import StepButton from 'components/common/StepButton';
import StepView from 'components/common/StepView';
import { wishItem } from 'atoms/atom';
import logo from '../assets/image/logo.svg';
import { useRecoilState } from 'recoil';

function Step2() {
  const [_wishItem, setWishItem] = useRecoilState(wishItem);

  const changeItem = (e) => {
    if (e.target.value.length < 21) {
      setWishItem(e.target.value);
    } else {
      alert('최대 20자 까지 입력 가능합니다');
    }
  };
  return (
    <StyledRoot>
      <Container>
        <Main>
          <Logo src={logo} />
          <Question>
            크리스마스에 가~장
            <br /> 갖고 싶은게 뭐야?
          </Question>
          <InputBox onChange={(e) => changeItem(e)} value={_wishItem || ''}></InputBox>
        </Main>
        <StepView></StepView>
        <StepButton data={_wishItem}></StepButton>
      </Container>
    </StyledRoot>
  );
}

export default Step2;

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

const Logo = styled.img`
  width: 20.4rem;
  height: 2rem;
  margin: 5.6rem 0 5.9rem 0;
`;
