import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";
import ax from "axios";
import { useEffect } from "react";
import { useState } from "react/cjs/react.development";
import FilterBar from "@/components/FilterBar";
import AddCurriculumForm from "@/components/AddCurriculumForm";
import CourseCardLV from "@/components/CourseCardLV";
import SortDropdown from "@/components/SortDropdown";
import CurriculumSlider from "@/components/CurriculumSlider";
import PageNavigation from "@/components/PageNavigationCourse";
import PageNavigationCourse from "@/components/PageNavigationCourse";
import PageNavigationCurriculum from "@/components/PageNavigationCurriculum";
import SectionTabs from "@/components/SectionTabs";
import { useTheme } from "@/utils/provider";
import { comp_themes } from "@/utils/variables";

export default function MyPage() {
  const [courses, setCourses] = useState([]);
  const [curriculums, setCurriculums] = useState([]);
  const [search, setSearch] = useState("");
  const [display, setDisplay] = useState("One");
  const [addCurriculum, setAddCurriculum] = useState(false);
  const [coursePage, setCoursePage] = useState(0);
  const [curriculumPage, setCurriculumPage] = useState(0);

  const getCourses = async () => {
    const res = await ax.get("./api/courses", {
      params: {
        page: coursePage,
      },
    });
    console.log(res.data);
    setCourses(res.data);
  };

  const getCurriculums = async () => {
    const res = await ax.get("./api/curriculums", {
      params: {
        page: curriculumPage,
      },
    });
    setCurriculums(res.data);
  };

  useEffect(() => {
    getCourses();
    getCurriculums();
  }, []);
  const { theme, setTheme } = useTheme();
  return (
    <Cont>
      <SectionTabs
        value={display}
        setValue={setDisplay}
        one="Saved"
        two="Your Curriculums"
      />

      {display == "One" ? (
        <>
          {courses &&
            courses.map((x) => (
              <CourseCardLV
                courseName={x["Course Name"]}
                teachingSource={x["University"]}
                ratingCount={x["Course Rating"]}
                difficulty={x["Difficulty Level"]}
                image={x.Image}
              />
            ))}
          <PageNavigationCourse
            setCoursePage={setCoursePage}
            getCourses={() => getCourses()}
            coursePage={coursePage}
          />

          <Header color={comp_themes[theme].switch_text}>
            Saved Curriculums
          </Header>

          {curriculums &&
            curriculums.map((x) => (
              <CurriculumSlider
                avaText={x["name"]}
                favouriteCount={x["likes"]}
                courses={x["courses"]}
              />
            ))}
          <PageNavigationCurriculum
            setCurriculumPage={setCurriculumPage}
            curriculumPage={curriculumPage}
            getCurriculums={() => getCurriculums()}
          />
        </>
      ) : display == "Two" ? (
        <>
          {curriculums &&
            curriculums.map((x) => (
              <CurriculumSlider
                avaText={x["name"]}
                favouriteCount={x["likes"]}
                courses={x["courses"]}
              />
            ))}
          <PageNavigationCurriculum
            setCurriculumPage={setCurriculumPage}
            curriculumPage={curriculumPage}
            getCurriculums={() => getCurriculums()}
          />
        </>
      ) : (
        <></>
      )}
    </Cont>
  );
}

const Cont = styled.div`
  width: 90%;
  margin: 0 5%;
  padding: 0 0 0 8%;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const Header = styled.p`
  font-family: General Sans;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 43px;
  color: ${(props) => props.color};
  margin: 176px 0 86px;
`;
