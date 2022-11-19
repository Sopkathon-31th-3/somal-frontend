import React from 'react';
import styled from 'styled-components';
import CopyToClipboard from 'react-copy-to-clipboard';
import sowonSanta from '../assets/image/sowonSanta.svg';

function Ending() {
  return (
    <>
      <StEndingcontainer>
        <p>들어만 준다고 아 ㅋㅋ</p>
        <img src={sowonSanta} alt='sowonSanta' />
      </StEndingcontainer>
      <StShare>
        <CopyToClipboard
          text={window.location.host}
          onCopy={() => alert('링크가 클립보드에 복사되었어요!')}
        >
          <button>공유하기</button>
        </CopyToClipboard>
      </StShare>
    </>
  );
}

export default Ending;

const StEndingcontainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding-top: 5.1rem;

  & > p {
    color: white;
    font-size: 1.8rem;
    padding-bottom: 1.6rem;
  }

  & > img {
    width: 33.3rem;
    height: 49.8rem;
    margin-bottom: 1.1rem;
  }
`;

const StShare = styled.div`
  margin-left: 5.1rem;
  & > button {
    font-family: Galmuri11, sans-serif;
    font-size: 1.8rem;
    background-color: #ee5959;
    color: white;
    margin-right: 1.7rem;
  }
`;
