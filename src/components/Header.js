import styled from "styled-components";
import { IoSearchOutline } from "react-icons/io5";
import { useState } from "react";
import { useRouter } from "next/router";

export default function Header() {
  const router = useRouter();

  const [keyword, setKeyword] = useState("");

  const handleOnKeyUp = (e) => {
    if (e.key === "Enter") {
      handleSubmit(e);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push(`/albums?q=${keyword}`);
  };

  return (
    <HeaderContainer>
      <NavContainer>
        <NavWrapper>
          <LogoBox onClick={() => router.push("/albums")}>
            <img src="https://itunes.apple.com/favicon.ico" />
            <span>이엘뮤직</span>
          </LogoBox>
          <SearchBox>
            <input
              type="text"
              placeholder="앨범명을 검색하세요."
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              onKeyUp={handleOnKeyUp}
            />
            <SearchBtn onClick={handleSubmit}>
              <IoSearchOutline />
            </SearchBtn>
          </SearchBox>
        </NavWrapper>
      </NavContainer>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.header`
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  background: #fff;
  border-bottom: 1px solid #e9ebef;
  color: black;
`;

const NavContainer = styled.nav`
  max-width: 1180px;
  width: 100%;
  height: 100%;
  padding: 0 1rem;
  margin: 0 auto;
`;

const NavWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
`;

const LogoBox = styled.div`
  height: auto;
  display: flex;
  align-items: center;
  cursor: pointer;

  > img {
    width: 40%;
  }

  > span {
    font-size: 20px;
  }
`;

const SearchBox = styled.div`
  max-width: 250px;
  width: 100%;
  position: relative;

  > input {
    background-color: rgb(248, 249, 251);
    border: 1px solid rgb(233, 235, 239);
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
    padding: 10px 20px;
    border-radius: 28px;
    width: 100%;
    height: auto;
    transition: all 0.2s ease;
  }
`;

const SearchBtn = styled.button`
  position: absolute;
  right: 20px;
  top: 50%;
  background: none;
  border: none;

  > svg {
    cursor: pointer;
    font-size: 20px;
    color: rgb(134, 141, 150);
    top: 50%;
    transform: translateY(-50%);
  }
`;
