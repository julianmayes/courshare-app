import styled from "styled-components";
import { useState } from "react";
import Checkbox from "./Checkbox";

export default function FilterDropdownSingle({
  name = "Ratings",
  categories = ["4.5 - 5.5", "4.0 - 4.5", "3.5 - 4.0", "0 - 3.5"],
  selected,
  setSelected = () => {},
  show,
  showFilter,
  setShowFilter,
}) {

  const [showAll, setShowAll] = useState(false);

  const handleSelect = (x) => {
    setSelected(x);
  };

  const clearAll = () => {
    setSelected([]);
  };

  return (
    <Cont>
      <Dropdown
        onClick={
          showFilter == name
            ? () => setShowFilter("")
            : () => setShowFilter(name)
        }
      >
        {name}
        <Icon>
          {show ? (
            <img src="/icons/up-caret.svg" />
          ) : (
            <img src="/icons/down-caret.svg" />
          )}
        </Icon>
      </Dropdown>
      {show ? (
        <DrowpdownBox>
          <CategoryCont>
            {categories.slice(0, showAll ? 32 : 8).map((x) => (
              <Category>
                <Checkbox
                  handleSelect={handleSelect}
                  x={x}
                  setSelected={setSelected}
                  selected={selected}
                />
                <div>{x}</div>
              </Category>
            ))}
          </CategoryCont>
          <Clear onClick={clearAll}>Clear</Clear>
        </DrowpdownBox>
      ) : (
        <></>
      )}
    </Cont>
  );
}

const Cont = styled.div`
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none; /* Non-prefixed version, currently supported by Chrome, Edge, Opera and Firefox */
`;

const Dropdown = styled.div`
  background: #ffffff;
  box-shadow: 0px 2px 8px rgba(185, 185, 185, 0.52);
  border-radius: 10px;
  height: 35px;
  width: 160px;
  padding: 0 21px 0 29px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: General Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 24px;
  color: #000000;
  cursor: pointer;
`;

const DrowpdownBox = styled.div`
  min-height: 162px;
  height: auto;
  width: 160px;
  background: #ffffff;
  margin: 24px 0 0 0;
  box-shadow: 0px 2px 8px rgba(185, 185, 185, 0.52);
  border-radius: 10px;
  box-sizing: border-box;
  border-radius: 10px;
  padding: 12px 18px 58px 18px;
  font-family: General Sans;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0em;
  text-align: left;
  position: relative;
  z-index: 100;
  background: #ffffff;
  position: absolute;
`;

const CategoryCont = styled.div`
  height: auto;
  display: grid;
  grid-template-columns: 2fr;
  grid-gap: 12px 0;
  grid-template-rowss: auto;
`;

const Category = styled.div`
  font-family: General Sans;

  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
  text-align: left;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const ShowAll = styled.div`
  font-family: General Sans;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 19px;
  color: #ffc403;
  cursor: pointer;
  position: absolute;
  right: 18px;
  bottom: 12px;
`;

const Clear = styled.div`
  font-family: General Sans;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 19px;
  color: #ffc403;
  cursor: pointer;
  position: absolute;
  left: 18px;
  bottom: 12px;
`;

const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
