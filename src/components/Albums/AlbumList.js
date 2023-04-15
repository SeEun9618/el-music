import styled from "styled-components";
import Link from "next/link";

export default function AlbumList({ data }) {
  if (data?.length === 0) {
    return <div>데이터가 없습니다.</div>;
  }

  return (
    <AlbumListContainer>
      <AlbumListWrapper>
        <ContentBox>
          <ContentTitle>
            <h2>TOP100</h2>
          </ContentTitle>
          <CardList>
            {data?.map((list) => (
              <Link
                href={`/albums/${list["id"]["attributes"]["im:id"]}`}
                key={list["id"]["attributes"]["im:id"]}
              >
                <CardPhoto image={list["im:image"][2]["label"]} />
                <CardDesc>
                  <CardTitle>{list["im:name"]["label"]}</CardTitle>
                  <CardArtist>{list["im:artist"]["label"]}</CardArtist>
                  <CardCategory>
                    {list["category"]["attributes"]["term"]}
                  </CardCategory>
                </CardDesc>
              </Link>
            ))}
          </CardList>
        </ContentBox>
      </AlbumListWrapper>
    </AlbumListContainer>
  );
}

const AlbumListContainer = styled.section`
  display: block;
`;

const AlbumListWrapper = styled.div`
  max-width: 1180px;
  height: 100%;
  padding: 0 1rem;
  margin: 0 auto;

  @media all and (max-width: 799px) {
    padding: 0 10px;
  }

  @media all and (max-width: 479px) {
    margin: 10px 0;
    padding: 0 1rem;
  }
`;

const ContentBox = styled.div`
  margin: 20px 0;
`;

const ContentTitle = styled.div`
  margin-bottom: 15px;

  > h2 {
    font-size: 20px;
    color: #303441;
    font-weight: 700;
  }
`;

const CardList = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -12px;

  > a {
    width: 20%;
    padding: 0 12px;
    cursor: pointer;
    margin-bottom: 20px;
  }

  @media all and (max-width: 799px) {
    > a {
      width: 50%;
    }
  }

  @media all and (max-width: 479px) {
    > a {
      display: flex;
      align-items: center;
      width: 100%;
      margin-bottom: 20px;
    }
  }
`;

const CardPhoto = styled.div`
  position: relative;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  background-color: rgb(238, 238, 238);
  border-radius: 6px;
  overflow: hidden;
  padding-bottom: 75%;
  margin-bottom: 10px;
  background-image: url("${(props) => props.image}");

  @media all and (max-width: 479px) {
    flex-shrink: 0;
    width: 125px;
    height: 90px;
    padding: 0;
    margin-bottom: 0;
    margin-right: 10px;
  }
`;

const CardDesc = styled.div``;

const CardTitle = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
  color: rgb(48, 52, 65);
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  line-height: 1.4;
  font-size: 15px;
`;

const CardArtist = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
  color: rgb(154, 158, 167);
  font-size: 15px;
`;

const CardCategory = styled.div`
  color: lightcoral;
  font-size: 13px;
  margin-top: 3px;
`;
