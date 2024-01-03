import React from "react";
import Link from "next/link";
import Image from "next/image";

function FirstContent() {
  return (
      <div className="bg-[#4344E5]">
      <div className="flex w-3/4 pt-16 pb-8 flex-col lg:flex-row h-full mx-auto items-center justify-center ">
        <div className="flex flex-col items-center lg:items-start pt-12 gap-4">
          <div className="text-secondaryDark flex flex-col gap-4 text-center lg:text-start lg:self-end">
            <h1 className="font-bold mb-3 text-xl lg:text-[56px] lg:leading-[52px] lg:font-semibold ">
              Online terapi ile değişimi başlat!
            </h1>
            <p className="font-semibold text-sm max-w-sm lg:justify-self-start lg:text-xl">Hemen sana en uygun online
              psikolog ile eşleş ve değişime başla</p>
          </div>

          <Link
              href="/"
              className="text-white hidden lg:block w-fit bg-secondary px-7 py-4 rounded-xl font-semibold lg:text-xl "
          >
            Hemen Başla
          </Link>
        </div>
        <Image
            src="/images/slider.png"
            width={500}
            height={500}
            quality={100}
            alt="Picture of the author"
            className="lg:max-w-lg max-w-xs object-contain"
        />
      </div>
      </div>
  );
}

export default FirstContent;
