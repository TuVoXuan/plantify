import { Fragment } from "react";
import bannerBg from "../assets/images/BannerBg.png";
import bannerImage from "../assets/images/BannerImage.png";
import Image from "next/image";

export default function Home() {
  return (
    <Fragment>
      <section className="bg-neutral-50 bg-no-repeat" style={{ backgroundImage: `url(${bannerBg.src})` }}>
        <div className="px-4 pt-[104px] container-cs md:px-0 mb:pb-[7px] md:flex md:items-center md:pt-[64px] xl:pt-[88px] xl:gap-x-8 xl:pb-[44px]">
          <div className="w-[305px] mx-auto flex flex-col items-center mb-8 md:mx-0 md:items-start md:w-[333px] xl:w-[565px]">
            <h2 className="text-desktop-h2 text-primary-800 text-center mb-3 md:text-left md:mb-4 xl:text-desktop-md xl:mb-6">
              Green up Your Space into nature
            </h2>
            <p className="text-body-md text-neutral-600 text-center mb-6 md:text-left xl:text-body-xl xl:mb-10">
              Morem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum.
            </p>
            <button className="py-2 px-6 rounded-[4px] bg-primary-500 hover:bg-primary-400 xl:px-[30.5px] xl:py-3">
              <span className="text-body-lg font-medium text-white-cs">Shop Now</span>
            </button>
          </div>
          <div className="ml-auto xl:ml-0">
            <Image
              src={bannerImage}
              height={568}
              width={683}
              alt="banner image"
              className="w-full h-auto md:w-[421px] md:h-[334px] xl:w-[683px] xl:h-auto"
            />
          </div>
        </div>
      </section>
    </Fragment>
  );
}
