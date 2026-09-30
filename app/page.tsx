import Image from "next/image";

export default function Home() {
  return (
    <main className="relative h-[700px] w-full overflow-hidden rounded-4xl mt-10">
      <div className="absolute inset-0 z-0 bg-[#122C95]" />
      <div className="absolute inset-x-0 bottom-0 z-0 h-1/3 bg-[#02186F] rounded-4xl" />
      <Image
        src="/home/2.png"
        alt=""
        width={823}
        height={634}
        className="absolute right-10 top-1/2 left-1/2 z-10 h-auto w-[520px] -translate-1/2 opacity-80"
      />

      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center font-[family-name:var(--font-spider)] text-[200px] text-[#FFF15D] uppercase text-shadow-[2px_2px_1px_rgba(0,0,0)]">
        <span>LE NGOC QUANG</span>
        <span>P@RTF€RLIO</span>
      </div>

      <Image
        src="/home/1.png"
        alt=""
        width={250}
        height={358}
        className="absolute left-1/2 top-1/3 z-30 h-auto w-[250px] -translate-x-1/2 -translate-y-1/2"
      />
    </main>
  );
}
