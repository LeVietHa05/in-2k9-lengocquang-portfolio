import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <main className="relative mt-10 min-h-[80vh] w-full  rounded-4xl bg-white">
      <Image
        src="/home/2.png"
        alt=""
        width={823}
        height={634}
        className="absolute left-0 top-0 z-0 h-auto w-[876px]"
      />

      <div className="absolute  z-20 top-1/3 left-1/3 -translate-x-1/3 w-full     ">
        <h1 className="absolute top-0 right-0 z-30  font-[family-name:var(--font-spider)] text-[128px] leading-normal text-[#FFF15D] uppercase [-webkit-text-stroke:3px_#000]">
          about me
        </h1>
        <Image
          src="/about/1.png"
          alt=""
          width={509}
          height={509}
          className=" z-10 h-auto w-[509px] right-[722px] aspect-square absolute"
        />
        <p className="absolute w-[710px] z-100 mt-6  text-justify absolute right-0 top-35">
          Hi! I’m Le Ngoc Quang, a Russian-major student at Foreign Language
          Specialized School (FLSS), Vietnam National University, Hanoi. I’m
          curious about how finance, economics, data, and technology come
          together to shape the way people and businesses make decisions. I am
          also interested in Spiderman, that’s my favorite superhero!
          <br />
          Outside the classroom, I stay actively involved in student leadership,
          event organization, research, community service, and content creation.
          From leading student teams and organizing large-scale school events to
          conducting research and building independent finance-related projects,
          each experience has given me a different way to learn, collaborate,
          and turn ideas into something meaningful.
          <br />
          I also enjoy exploring new perspectives beyond my main academic
          interests, whether through languages, creative projects, or working
          with people from different backgrounds. For me, high school has been
          about more than academics; it has been a space to experiment, build,
          lead, and discover what genuinely interests me.
          <br />
          This portfolio brings together some of the experiences, projects, and
          ideas that have shaped who I am so far and where I hope to go next!
          <br />
          <b> Contact Information</b> <br />
          <b>Email:</b> quanglngc@gmail.com <br />
          <b>LinkedIn:</b> <Link href={'linkedin.com/in/ngoc-quang-le-5b74a2362/'} className="underline hover:font-bold">linkedin.com/in/ngoc-quang-le-5b74a2362/</Link> <br />
          <b>Location:</b> Hanoi, Vietnam <br />
          <b>Phone number:</b> +84979865899 <br />
        </p>
      </div>
    </main>
  );
}
