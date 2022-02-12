import * as React from "react";
import styled from "styled-components";
import NightlightIcon from "@mui/icons-material/Nightlight";
import Divider from "@mui/material/Divider";

const BigCont = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 0px 291px;
  font-family: General Sans;
`;

const HeadingCont = styled.div``;
const Heading = styled.p`
  font-size: 20px;
  font-weight: 400;
  font-weight: 400;
`;
const ContentCont = styled.div``;
const Cont = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px 0;
`;
const Heading2 = styled.p`
  font-size: 16px;
`;
const RowCont = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const LeftCont = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const RightCont = styled.div``;
const BodyText = styled.div`
  font-size: 14px;
  color: #8c8c8c;
  margin-left: 10px;
`;
export default function Settings() {
  return (
    <BigCont>
      <HeadingCont>
        <Heading>Settings</Heading>
      </HeadingCont>
      <ContentCont>
        <Cont>
          <Heading2>Appearance</Heading2>
          <RowCont>
            <LeftCont>
              <NightlightIcon style={{ color: "#8c8c8c" }} />
              <BodyText>Night Mode</BodyText>
            </LeftCont>
            <RightCont></RightCont>
          </RowCont>
        </Cont>
        <Divider light />
        <Cont>
          <Heading2>View</Heading2>
          <RowCont>
            <LeftCont>
              <NightlightIcon style={{ color: "#8c8c8c" }} />
              <BodyText>Night Mode</BodyText>
            </LeftCont>
            <RightCont></RightCont>
          </RowCont>
        </Cont>
        <Divider light />
        <Cont></Cont>
      </ContentCont>
    </BigCont>
  );
}
