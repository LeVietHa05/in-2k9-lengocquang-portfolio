import Image from "next/image";
import Link from "next/link";

const data = [
  {
    img: "/academic/1.png",
    w: 337.7088317871094,
    h: 260.6087646484375,
    text: "International Journal of Economics and Business Management Research",
  },
  {
    img: "/academic/2.png",
    h: 260.4236450195315,
    w: 369.09667968750034,
    text: " COMBELT International Conference ",
  },
  {
    img: "/academic/3.png",
    w: 368,
    h: 261,
    text: "COMBELT International Conference ",
  },
  {
    img: "/academic/4.png",
    w: 329,
    h: 233,
    text: "Cambridge Economics and Finance Competition",
  },
  {
    img: "/academic/5.png",
    w: 326,
    h: 231,
    text: "Cambridge Economics and Finance Competition",
  },
  {
    img: "/academic/6.png",
    w: 326,
    h: 231,
    text: "High School Social Impact Challenge ",
  },
  {
    img: "/academic/7.png",
    w: 177,
    h: 236,
    text: "International Creative Papers Conference & Olympic ",
  },
  {
    img: "/academic/8.png",
    w: 326,
    h: 231,
    text: "Math, Einstein Olympiad",
  },
  {
    img: "/academic/9.png",
    w: 326,
    h: 231,
    text: "Siam International Math and Science Olympics ",
  },
];

export default function Arts() {
  return (
    <main className="w-full ">
      <h1 className="font-[family-name:var(--font-spider)] my-15 border-y-[3px] border-[#02186F] py-15 pb-2 text-[186px] leading-none text-[#02186F] uppercase text-center">
        academic ¥
      </h1>

      {/* bottom of the web, not the main */}
      <Image
        className={`absolute bottom-0 left-1/2 -translate-x-1/2  `}
        src={"/activity/bg.png"}
        alt=""
        width={1081}
        height={400}
      ></Image>

      <div
        className={`relative z-1  max-w-6xl text-justify mx-auto  text-2xl `}
      >
        <div className="font-bold text-[36px] *:my-8 *:[&_a]:underline">
          <div>
            <Link
              href={
                "https://drive.google.com/file/d/1shW_YvZL2lB4rsrLB6otvK12gjc8VT0a/view"
              }
            >
              ICPC2-Consumers-Green-Product
            </Link>
          </div>
          <div className="flex justify-end">
            <Link
              className="  text-right"
              href={
                "https://drive.google.com/file/d/10PopZsuzbbNOIN3wlexIN7ZI-Bslcjtq/view"
              }
            >
              International Journal of Economics, <br />
              Business and Management Research
            </Link>
          </div>
          <div>
            <Link
              href={
                "https://drive.google.com/file/d/1qSARr_2vJHytRjjbkgCpkmXajEbsGYqo/view"
              }
            >
              COMBELT 2026
            </Link>
          </div>
        </div>

        <div className="border-y-2 border-[#02186F] my-15"></div>

        <div className="grid grid-cols-3 gap-y-[4px] bg-[#02186F] *:bg-white justify-center itme-center">
          {data.map((each, i) => {
            return (
              <div key={i} className="p-3 py-8">
                <Image
                  src={each.img}
                  alt=""
                  width={each.w}
                  height={each.h}
                  className="h-[300px]"
                ></Image>
                <div className="text-left text-lg">{each.text}</div>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
