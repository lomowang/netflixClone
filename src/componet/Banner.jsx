import React from "react";

function Banner() {
  return (
    <header
      className="relative h-96 text-white"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://raw.githubusercontent.com/thatanjan/netflix-clone-yt/youtube/media/banner.jpg")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="" alt="bannerContents">
        <h1 className="" alt="bannerTitle">
          Movie Name
        </h1>
        <div className="" alt="bannerButtons">
          <button className="bg-slate-300 text-black px-4 py-2 rounded-lg">
            Play
          </button>
          <button className="bg-slate-300 text-black px-4 py-2 rounded-lg">
            My List
          </button>
        </div>
        <h1>This is a test description</h1>
      </div>
      <div alt="bannerFedeBottom" />
      <div></div>
    </header>
  );
}

export default Banner;
