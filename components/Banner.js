import Image from "next/image";

function Banner() {
  return (
    <div className="border border-3 font-inter">
      <div className="relative h-[9em] sm:h-auto object-cover">
        <Image
          src="/assets/banner.png"
          alt="banner-image"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "inherit" }}
        />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black opacity-60"></div>
        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
          <div className=" z-1 text-center text-white ">
            <h2 className="font-bold md:text-4xl text-xl">Seller</h2>
            <h4 className="sm:mt-2 mt-auto md:text-xl text-base">Home-Seller</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
