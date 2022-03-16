import styled from "styled-components";

const HighlightsL = ({}) => {
  return (
    <Cont background={background}>
      <Text>You got questions? Let's chat 💬</Text>
    </Cont>
  );
};

export default HighlightsL;

const Cont = styled.div`
  width: 188px;
  height: 30px;
  background: #fcfcfc;
  border: 0.8px solid #d4d4d4;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
`;

const Text = styled.p`
  font-size: 16px;
`;
