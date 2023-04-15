import styled from "styled-components";
import { useState } from "react";

export default function MenuFilter({ setSort }) {
  const [selectedMenu, setSelectedMenu] = useState(null);

  const handleClickSort = (data) => {
    setSort(data);
    setSelectedMenu(data);
  };

  return (
    <MenuFilterContainer>
      <MenuFilterWrapper>
        <MenuFilters>
          <Menu onClick={() => handleClickSort("asc")}>
            <input type="radio" id="filter1" name="filter" value="오름차순" />
            <label
              htmlFor="filter1"
              className={selectedMenu === "asc" ? "active" : ""}
            >
              오름차순
            </label>
          </Menu>
          <Menu onClick={() => handleClickSort("desc")}>
            <input type="radio" id="filter2" name="filter" value="내림차순" />
            <label
              htmlFor="filter2"
              className={selectedMenu === "desc" ? "active" : ""}
            >
              내림차순
            </label>
          </Menu>
        </MenuFilters>
      </MenuFilterWrapper>
    </MenuFilterContainer>
  );
}

const MenuFilterContainer = styled.section``;

const MenuFilterWrapper = styled.div`
  display: block;
  max-width: 1180px;
  width: 100%;
  height: 50px;
  padding: 0;
  margin: 0 auto;
`;

const MenuFilters = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
`;

const Menu = styled.div`
  flex-shrink: 0;
  padding: 6px;

  > input {
    outline: none;
    opacity: 0;
    position: fixed;
    width: 0;
  }

  > label {
    display: inline-flex;
    -webkit-box-pack: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.2s ease 0s;
    padding: 5px 13px;
    background-color: rgb(255, 255, 255);
    border: 1px solid rgb(185, 188, 194);
    border-radius: 5rem;
    color: rgb(134, 141, 150);
    font-size: 16px;
  }

  > label:hover,
  > label.active {
    border: 1px solid rgb(66, 119, 242);
    color: rgb(66, 119, 242);
  }
`;
