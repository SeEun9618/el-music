import styled from "styled-components";
import { IoSearchOutline } from "react-icons/io5";
import {useEffect, useState} from "react";
import { useRouter } from "next/router";
import { SITE_NAME } from "@/constants";
import Link from "next/link";
import {getAlbums} from "@/api/albums";

export default function Header() {
  const router = useRouter();

  const [keyword, setKeyword] = useState("");

  const [searchKeyword, setSearchKeyword] = useState(null);

  const handleOnKeyUp = (e) => {
    if (e.key === "Enter") {
      handleSubmit(e);
    }
    if(e.target.value === "" && e.key.length === 1) {
      setSearchKeyword(null);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push(`/albums?q=${keyword}`);
  };

  useEffect(() => {
    setKeyword(router.query.q || "");
  }, [router.query]);

  useEffect(() => {
    const init = async () => {
      const data = await getAlbums();

      let searchData = data.feed.entry.filter((list) =>
          list["im:name"]["label"].toLowerCase().includes(keyword) === true)
      .slice(0, 10);
      setSearchKeyword(searchData.length > 0 ? searchData : null);
    }
    init();
  }, [keyword]);


  return (
    <HeaderContainer>
      <NavContainer>
        <NavWrapper>
          <LogoBox onClick={() => router.push("/albums")}>
            <img src="https://itunes.apple.com/favicon.ico" />
            <span>{SITE_NAME}</span>
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
            {keyword &&
                <AutoSearchContainer>
                  <AutoSearchWrapper>
                    {searchKeyword &&
                        searchKeyword.map((data) => {
                          return (
                              <AutoSearchData key={data["id"]["attributes"]["im:id"]}>
                                <Link href={`/albums/${data["id"]["attributes"]["im:id"]}`}>
                                  <span>{data["im:name"]["label"]}</span>
                                </Link>
                              </AutoSearchData>
                          );
                      })
                    }
                  </AutoSearchWrapper>
                </AutoSearchContainer>
            }
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

  @media all and (max-width: 479px) {
    > img {
      width: 25%;
    }
  }
`;

const SearchBox = styled.div`
  max-width: 250px;
  width: 100%;
  position: relative;
  z-index: 2;

  > input {
    background-color: rgb(248, 249, 251);
    border: 1px solid rgb(233, 235, 239);
    padding: 10px 20px;
    width: 100%;
    height: auto;
    transition: all 0.2s ease;
  }

  @media all and (max-width: 479px) {
    max-width: 200px;
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

const AutoSearchContainer = styled.div`
  height: 30vh;
  width: 100%;
  background: #fff;
  position: absolute;
  top: 37px;
  border: 2px solid rgb(134, 141, 150);
  padding: 10px;
  overflow-y: scroll;
`;

const AutoSearchWrapper = styled.ul``;

const AutoSearchData = styled.li`
  padding: 10px 8px;
  width: 100%;
  font-size: 14px;
  font-weight: bold;
  z-index: 4;
  letter-spacing: 2px;
  position: relative;

  &:hover {
    background-color: rgb(248, 249, 251);
    cursor: pointer;
  }
`;
