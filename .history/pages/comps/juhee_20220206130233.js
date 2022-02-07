import styled from "styled-components";
import CourseDetailCard from "@/components/CourseDetailCard";

export default function Juhee() {
  return (
    <Cont>
      {/* make components here */}
      <CourseDetailCard></CourseDetailCard>
    </Cont>
  );
}

const Cont = styled.div`
  display: flex;
  align-items: center;
  justify-contents: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;
