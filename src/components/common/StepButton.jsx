import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import nextIcon from '../../assets/icon/nextIcon.png';
import prevIcon from '../../assets/icon/prevIcon.png';

function StepButton() {
  const location = useLocation();
  const navigate = useNavigate();
  const stepNum = Number(location.pathname.slice(-1));

  const onClickPrev = () => {
    if (stepNum > 1) {
      navigate(`/step${stepNum - 1}`);
    }
  };
  const onClickNext = () => {
    if (stepNum < 4) {
      navigate(`/step${stepNum + 1}`);
    } else {
      navigate(`/ending`);
    }
  };

  return (
    <StyledRoot>
      <PrevButtonContainer onClick={onClickPrev}>
        <img src={prevIcon} alt='prevBtn'></img>
        <p>이전</p>
      </PrevButtonContainer>
      <NextButtonContainer onClick={onClickNext}>
        <p>다음</p>
        <img src={nextIcon} alt='nextBtn'></img>
      </NextButtonContainer>
    </StyledRoot>
  );
}

export default StepButton;

const StyledRoot = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
`;

const PrevButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  & > p {
    font-size: 1.8rem;
    margin-left: 1.7rem;
  }
`;

const NextButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  & > p {
    font-size: 1.8rem;
    margin-right: 1.7rem;
  }
`;
