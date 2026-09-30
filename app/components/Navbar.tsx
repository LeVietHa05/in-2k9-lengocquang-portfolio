"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const data = [
  { text: "home", link: "/" },
  { text: "About me", link: "/about" },
  { text: "extracurricular activities", link: "/activities" },
  { text: "arts", link: "/arts" },
  { text: "academic", link: "/academic" },
  { text: "Moto lab", link: "https://motolabvn.com/" },
];

export default function Navbar() {
  const pathname = usePathname();

  const isActive = (link: string) =>
    link === "/"
      ? pathname === "/"
      : pathname === link || pathname.startsWith(`${link}/`);

  return <div className="flex items-center justify-between font-[family-name:var(--font-spider)] text-[28px] uppercase">
    <div className="border border-[#02186F] border-1 rounded-full pt-1 pt-3 px-3">
        LE NGOC QUANG FOLIO
    </div>
    <div className="flex bg-[#CF1B29] text-white rounded-full p-1 pt-3 px-10 gap-6 *:hover:text-black/50 *:transition-all ">
        {data.map((each, i ) => {
            return <Link
              key={i}
              href={each.link}
              className={isActive(each.link) ? "text-black" : undefined}
            >{each.text}</Link>
        })}
    </div>
  </div>;
}
