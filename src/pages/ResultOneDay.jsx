import React from 'react';
import styled from 'styled-components';
import CopyToClipboard from 'react-copy-to-clipboard';

export default function Result() {
  const product = '맥북 M1 에어 루삥뽕 가알ㅇ날ㄴㅇ밀ㄴㅁㄹ ';
  const year = 2023;
  const month = 1;
  const date = 1;
  const day = 1;
  const foodName = '치킨이아닐수도있고맞을수도있고모르겠다나는';
  const foodNum = 1;
  return (
    <div>
      {/**/}
      <div>
        <Text>
          너.. <BoldRed>{product}</BoldRed>
        </Text>
        {/*recoil*/}
        <Text> 꼭 사 ㅋ</Text>
        <Text>안사면 무조건 후회함</Text>
        <Text>진짜로</Text>
        <Text>지금 삘왔을 때 사야돼</Text>
        <Text>고민은 배송만 늦출 뿐ㅋ</Text>
        <br></br>
        <Text>그냥...</Text>
        <Text>
          <Bolded>{year}</Bolded>년 <Bolded>{month}</Bolded>월 <Bolded>{date}</Bolded>일까지
        </Text>
        {/*recoil*/}
        <Text>
          <Bolded>
            {day}일 {foodNum}
            {foodName}
          </Bolded>
          <Bolded> </Bolded>포기하면 돼 ㅋ
        </Text>
        {/*axios + recoil*/}
        <Text>그정도야 뭐...</Text>
        <Text>당연히 할 수 있잖아? ㅎ</Text>
        <Text>
          <BoldRed>{foodName}</BoldRed> 포기하는 게{' '}
        </Text>
        {/*recoil*/}
        <Text>정 어렵다면,,,...</Text>
        <p></p>
        <CopyToClipboard
          text={window.location.href}
          onCopy={() => alert('링크가 클립보드에 복사되었어요!')}
        >
          <button>
            공유하기
            {/* <img className='link shareicon' src={link} /> */}
          </button>
        </CopyToClipboard>
      </div>
    </div>
  );
}

const BoldRed = styled.span`
  color: #ee5959;
  font-weight: 700;
  font-family: Galmuri11, sans-serif;
  font-size: 2.2rem;
  line-height: 3.3rem;
`;

const Bolded = styled.span`
  font-weight: 700;
  font-family: Galmuri11, sans-serif;
  font-size: 2.2rem;
  line-height: 3.3rem;
`;

const Text = styled.p`
  font-weight: 400;
  font-family: Galmuri11, sans-serif;
  font-size: 1.8rem;
  line-height: 2.7rem;
  text-align: center;
`;
