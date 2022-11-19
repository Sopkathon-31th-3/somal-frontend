import React from 'react';
import styled from 'styled-components';
import CopyToClipboard from 'react-copy-to-clipboard';

function Ending() {
  return (
    <StEndingcontainer>
      <CopyToClipboard
        text={window.location.href}
        onCopy={() => alert('링크가 클립보드에 복사되었어요!')}
      >
        <button>
          공유하기
          {/* <img className='link shareicon' src={link} /> */}
        </button>
      </CopyToClipboard>
    </StEndingcontainer>
  );
}

export default Ending;

const StEndingcontainer = styled.div`
  display: flex;
`;
