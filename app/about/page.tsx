import Image from "next/image";

export default function About() {
  return (
    <main className="relative mt-10 min-h-[80vh] w-full overflow-hidden rounded-4xl bg-white">
      <Image
        src="/home/2.png"
        alt=""
        width={823}
        height={634}
        className="absolute left-0 top-0 z-0 h-auto w-[876px]"
      />

      <div className="absolute  z-20 top-1/3 left-1/3 w-fit flex gap-5 items-center">
        <h1 className="absolute top-0 right-0 z-30  font-[family-name:var(--font-spider)] text-[128px] leading-normal text-[#FFF15D] uppercase [-webkit-text-stroke:3px_#000]">
          about me
        </h1>
        <Image
          src="/about/1.png"
          alt=""
          width={509}
          height={509}
          className=" z-10 h-auto w-[509px] aspect-square "
        />
        <p className="relative w-[312px] z-100 mt-6  text-justify">
          Standing at the center of a career fair I built, I saw hundreds of
          students moving between booths, each representing a different
          possibility: Architecture, Data Science, Marketing, Law,
          Biotechnology, Computer Science, and more. With every conversation
          came another potential direction, another version of who they could
          become......
        </p>
      </div>
    </main>
  );
}
