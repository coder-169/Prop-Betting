import HeaderMain from "@/components/Shared/HeaderMain";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <HeaderMain />
      <div className="px-40 flex gap-8 h-[60vh] items-center">
        <div className="w-3/4">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/svgs/large-text.svg"
            className="w-[660px] mt-6 ml-3"
            alt=""
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/svgs/sm-text.svg" className="w-[500px] mt-6 ml-3" alt="" />
        </div>
        <div className="w-1/4">
          <Image
            width={200}
            height={200}
            src={"/images/home.png"}
            alt="Cards"
          />
        </div>
      </div>
    </>
  );
}
