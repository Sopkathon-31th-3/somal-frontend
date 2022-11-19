import santa from 'assets/image/santa.svg';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

function Loading() {
  const [message, setMessage] = useState('');
  const [count, setCount] = useState(0);
  const completionWord = '로 딩 중';
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate('/resultoneday');
    }, 3000);
  }, []);

  useEffect(() => {
    const typingInterval = setInterval(() => {
      setMessage((prevValue) => {
        let result = prevValue ? prevValue + completionWord[count] : completionWord[0];
        setCount(count + 1);

        if (count >= completionWord.length) {
          setCount(0);
          setMessage('');
        }

        return result;
      });
    }, 300);

    return () => {
      clearInterval(typingInterval);
    };
  });

  return (
    <StLoadingContainer>
      <StLoading>
        <img src={santa} alt='santa' />
        <p>{message}</p>
      </StLoading>
    </StLoadingContainer>
  );
}

export default Loading;

const StLoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100vh;
`;

const StLoading = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;

  color: white;
  font-size: 1.8rem;

  & > p {
    height: 1.8rem;
  }
`;
