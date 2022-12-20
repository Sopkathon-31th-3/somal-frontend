import { React, useState } from 'react';
import styled from 'styled-components';
import container from '../assets/image/container.png';
import StepButton from 'components/common/StepButton';
import StepView from 'components/common/StepView';
import { wishPrice } from '../atoms/atom';
import logo from '../assets/image/logo.svg';
import { useRecoilState } from 'recoil';

// input창 3자리 자동 콤마 삽입
const inputPriceFormat = (str) => {
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

function Step3() {
  const [_wishPrice, setWishPrice] = useRecoilState(wishPrice);
  const [price, setPrice] = useState();

  const handlePrice = (e) => {
    const newPrice = Number(e.target.value);
    setWishPrice(newPrice);
  };

  return (
    <StyledRoot>
      <Container>
        <Main>
          <Logo src={logo} />
          <Question>
            근데 그거...
            <br /> 얼마짜리더라?
          </Question>

          <InputContainer>
            <p>₩</p>
            <InputBox
              type='text'
              value={price}
              onChange={(e) => {
                setPrice(inputPriceFormat(e.target.value));
              }}
            ></InputBox>
          </InputContainer>
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

  span {
    flex: none;
    position: absolute;
  }
`;

const Question = styled.p`
  font-weight: 400;
  font-size: 1.8rem;
  text-align: center;
`;
const InputContainer = styled.div`
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24.4rem;
  border-bottom: 0.2rem solid black;
  font-size: 1.8rem;
  padding: 0 0 1rem 1rem;

  p {
    font-size: 1.8rem;
  }
`;

const InputBox = styled.input`
  outline: none;
  border: none;
  width: 100%;
  font-size: 1.8rem;
  font-family: Galmuri11;
  text-align: center;
  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

const Logo = styled.img`
  width: 20.4rem;
  height: 2rem;
  margin: 5.6rem 0 5.9rem 0;
`;
