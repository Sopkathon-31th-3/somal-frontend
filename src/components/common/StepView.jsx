import { useLocation } from 'react-router-dom';
import styled, { css } from 'styled-components';

function StepView() {
  const location = useLocation();
  const stepNum = location.pathname.slice(-1);
  return (
    <StepWrapper>
      <StepItem isRed={stepNum === '1'}></StepItem>
      <StepItem isRed={stepNum === '2'}></StepItem>
      <StepItem isRed={stepNum === '3'}></StepItem>
      <StepItem isRed={stepNum === '4'}></StepItem>
    </StepWrapper>
  );
}

export default StepView;

const StepWrapper = styled.div`
  width: 9.2rem;
  height: 0.8rem;
  display: flex;
  justify-content: space-between;
  margin-bottom: 10rem;
`;

const StepItem = styled.div`
  width: 0.8rem;
  height: 0.8rem;
  background: #d9d9d9;

  ${({ isRed }) =>
    isRed &&
    css`
      background-color: #ee5959;
    `}
`;
