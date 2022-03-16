import React from "react";
import styled from "styled-components";

const ChatInput = ({}) => {
  return <InputChat type="text" placeholder="Ask any questions"></InputChat>;
};

export default ChatInput;

const InputChat = styled.input`
  width: 944px;
  height: 82px;
  border: 1px solid #d0d0d0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 20px;
  ::placeholder {
    margin-left: 10px;
  }
`;

const Text = styled.p`
  font-size: 16px;
`;
