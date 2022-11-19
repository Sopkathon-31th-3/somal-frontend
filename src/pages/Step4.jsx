import bigBalloon from 'assets/image/big_balloon.png';
import styled from 'styled-components';

function Step4() {
  return (
    <StyledRoot>
      <Step4Background />
    </StyledRoot>
  );
}

export default Step4;

const StyledRoot = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: absolute;
`;

const Step4Background = styled.div`
  width: 36rem;
  height: 94.9rem;
  position: relative;
  top: 3.5rem;
  margin-bottom: 11.9rem;
  background-image: url(${bigBalloon});
  background-repeat: no-repeat;
`;
