import React from "react";
import appStore from "../img/App Store.png";
import googlePlay from "../img/Google Play.png";

function DownloadAds() {
  const downloadStyle = "rounded-[13px] h-[3rem] w-[10rem]";
  return (
    <div className="download">
      <div className="download_images flex">
        <img src={appStore} alt="" className={downloadStyle + ` mr-[2rem]`} />
        <img src={googlePlay} alt="" className={downloadStyle} />
      </div>
    </div>
  );
}

export default DownloadAds;
