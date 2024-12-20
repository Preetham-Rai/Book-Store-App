import React from "react";
import { assets } from "../assets/assets";

function Banner() {
  return (
    <div className="flex flex-col md:flex-row py-16 justify-between items-center gap-12">
      <div className="md:w-1/2 w-full">
        <h1 className="md:text-5xl text-2xl font-medium mb-7">
          New Releases this week
        </h1>
        <p className="mb-10">
          It's time to update your reading list with some of the latest and
          greatest releases in the literary world. From heart-pumping thrillers
          to captivating memoirs, this week's new releases offer something for
          everyone
        </p>
        <button className="bg-primary px-12 py-2 rounded-md text-base font-secondary font-bold hover:bg-secondary hover:text-white transition-all duration-200 cursor-pointer">
          Subscribe
        </button>
      </div>
      <div className="md:w-1/2 w-full flex items-center md:justify-end">
        <img src={assets.bannerImage} alt="banner-image" />
      </div>
    </div>
  );
}

export default Banner;
