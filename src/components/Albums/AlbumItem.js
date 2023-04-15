import styled from "styled-components";
import Image from "next/image";

export default function AlbumItem({ data }) {

    const handleOpenAlbumLink = () => {
        window.open(data.link.attributes.href, "_blank");
    };

    return (
        <AlbumItemContainer>
            <Title>
                <h2>앨범 정보</h2>
            </Title>
            <AlbumInfoWrapper>
                <AlbumInfo>
                    <AlbumPhoto>
                        <Image src={data["im:image"][2]["label"]} width={300} height={300} alt="album" />
                    </AlbumPhoto>
                    <AlbumDesc>
                        <AlbumTitleBox>
                            <span>{data["category"]["attributes"]["term"]}</span>
                            <AlbumTitle>{data["im:name"]["label"]}</AlbumTitle>
                            <AlbumArtist>{data["im:artist"]["label"]}</AlbumArtist>
                        </AlbumTitleBox>
                        <AlbumDescInfoBox>
                            <AlbumDescInfo>
                                <p>{data["im:releaseDate"]["attributes"]["label"]}</p>
                                <p>{data["im:price"]["label"]}</p>
                            </AlbumDescInfo>
                        </AlbumDescInfoBox>
                        <AlbumDescBtn>
                            <button onClick={handleOpenAlbumLink}>앨범 수록곡 보기</button>
                        </AlbumDescBtn>
                    </AlbumDesc>
                </AlbumInfo>
            </AlbumInfoWrapper>
        </AlbumItemContainer>
    );
}

const AlbumItemContainer = styled.section`
  display: block;
  max-width: 1180px;
  width: 100%;
  margin: 0 auto;
  padding: 10px;
`;

const Title = styled.div`
  position: relative;
  margin: 30px 0;
  
  > h2 {
    font-size: 25px;
    font-weight: 500;
  }

  @media all and (max-width: 479px) {
    text-align: center;
  }
`;

const AlbumInfoWrapper = styled.div``;

const AlbumInfo = styled.div`
  display: flex;

  @media all and (max-width: 479px) {
    flex-direction: column;
    align-items: center;
  }
`;

const AlbumPhoto = styled.div`
  position: relative;
  float: left;
  width: 300px;
  height: 300px;
  margin-right: 15px;
  
  > img {
    width: 100%;
    height: 100%;
    border-radius: 6px;
  }
`;

const AlbumDesc = styled.div`
  position: relative;
  padding: 20px 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const AlbumTitleBox = styled.div`
  > span {
    display: block;
    font-size: 17px;
    color: lightcoral;
    margin-bottom: 10px;
  }

  @media all and (max-width: 479px) {
    > span {
      text-align: center;
    }
  }
`;

const AlbumTitle = styled.div`
  font-size: 27px;
  font-weight: 600;
  margin-bottom: 4px;
`;

const AlbumArtist = styled.div`
  color: rgb(154, 158, 167);
  font-weight: 600;
  font-size: 20px;

  @media all and (max-width: 479px) {
    text-align: center;
  }
`;

const AlbumDescInfoBox = styled.div``;

const AlbumDescInfo = styled.div`
  font-size: 17px;
  > p:first-child {
    margin-bottom: 5px;
  }

  @media all and (max-width: 479px) {
    margin: 5px 0;
    text-align: center;
  }
`;

const AlbumDescBtn = styled.div`
  > button {
    cursor: pointer;
    padding: 10px 15px;
    background-color: #4277f2;
    border-radius: 6px;
    border: none;
    font-size: 15px;
    color: #fff;
  }
  
  > button:hover {
    background-color: #1255ef;
  }

  @media all and (max-width: 479px) {
    > button {
      width: 100%;
    }
  }
`;