import config from "../config.json";
import styled from "styled-components";
import { CSSReset } from "./src/components/CSSReset";
import Menu from "./src/components/Menu";
import { StyledTimeline } from "./src/components/Timeline";

function HomePage() {
  const estilosDaHomepage = {
    background: "#ced4da",
  };
  //console.log(config.playlists);

  return (
    <>
      <CSSReset />
      <div style={estilosDaHomepage}>
        <Menu />
        <Header />
        <Timeline playlists={config.playlists} />
      </div>
    </>
  );
}

export default HomePage;

//function Menu() {return <div>Menu</div>;}

const StyledHeader = styled.div`
  img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
  }
  .user-info {
    margin-top: 75px;
    margin-left: 20px;
    display: flex;
    align-items: center;
    width: 100%;
    padding: 16px 32;
    gap: 16px;
  }
`;

function Header() {
  return (
    <StyledHeader>
      {/*<img src="banner" />*/}

      <section className="user-info">
        <img src={`https://github.com/${config.github}.png`} />
        <div>
          <h2>{config.name}</h2>
          <p>{config.job}</p>
        </div>
      </section>
    </StyledHeader>
  );
}

function Timeline(propriedades) {
  // console.log("dentro do componente", propriedades.playlists);
  const playlistNames = Object.keys(propriedades.playlists);

  return (
    <StyledTimeline>
      <div>
        {playlistNames.map(function (playlistName) {
          const videos = propriedades.playlists[playlistName];
          console.log(playlistName);
          console.log(videos);
          return (
            <section>
              <h2>{playlistName}</h2>
              <div>
                {videos.map((video) => {
                  return (
                    <a href={video.url}>
                      <img src={video.thumb} />
                      <span>{video.title}</span>
                    </a>
                  );
                })}
              </div>
            </section>
          );
        })}
      </div>
    </StyledTimeline>
  );
}
