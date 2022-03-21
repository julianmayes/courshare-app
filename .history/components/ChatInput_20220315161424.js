import React from "react";
import styled from "styled-components";

const ChatInput = ({}) => {
  return <InputChat type="text" placeholder="Send any questions!"></InputChat>;
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
  padding: 10px;
`;

const Text = styled.p`
  font-size: 16px;
`;
