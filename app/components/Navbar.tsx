"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useRef, useState } from "react";
import { flushSync } from "react-dom";
import type { CSSProperties } from "react";

const data = [
  { text: "home", link: "/" },
  { text: "About me", link: "/about" },
  { text: "extracurricular activities", link: "/activities" },
  { text: "arts", link: "/arts" },
  { text: "academic", link: "/academic" },
  { text: "Moto lab", link: "https://motolabvn.com/" },
];

const isExternal = (link: string) => link.startsWith("http");

const matchesPath = (pathname: string, link: string) =>
  link === "/"
    ? pathname === "/"
    : pathname === link || pathname.startsWith(`${link}/`);

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const routeActive = data.find((each) => !isExternal(each.link) && matchesPath(pathname, each.link));
  const [activeLink, setActiveLink] = useState<string | null>(routeActive?.link ?? null);
  const [lastPathname, setLastPathname] = useState(pathname);

  // Any transition still running on this page (e.g. the activities page morph).
  // Starting another would abort it and snap its DOM to the new state.
  const inFlight = useRef<ViewTransition | null>(null);

  // Reconcile the optimistic click state once navigation actually lands
  // (including browser back/forward, which never goes through handleClick).
  if (pathname !== lastPathname) {
    setLastPathname(pathname);
    setActiveLink(routeActive?.link ?? null);
  }

  const handleClick = (link: string) => {
    if (isExternal(link)) {
      return;
    }

    if (!document.startViewTransition) {
      setActiveLink(link);
      router.push(link);
      return;
    }

    // Abort a leftover transition cleanly so its DOM doesn't get skipped.
    inFlight.current?.skipTransition();

    const transition = document.startViewTransition({
      // Scopes every rule to nav moves: the page itself stays static, so a
      // route change can't collide with a transition already running here.
      types: ["nav-indicator"],
      update: () => {
        flushSync(() => setActiveLink(link));
      },
    });

    inFlight.current = transition;

    transition.ready
      .catch(() => {})
      .finally(() => {
        if (inFlight.current === transition) {
          inFlight.current = null;
        }
      });

    router.push(link);
  };

  return <div className="flex items-center justify-between font-[family-name:var(--font-spider)] text-[28px] uppercase">
    <div className="border border-[#02186F] border-1 rounded-full pt-1 pt-3 px-3">
        LE NGOC QUANG FOLIO
    </div>
    <div className="flex bg-[#CF1B29] text-white rounded-full p-1 pt-3 px-10 gap-6 *:hover:text-black/50 *:transition-all ">
        {data.map((each, i) => {
            const isActive = activeLink === each.link;

            return <Link
              key={i}
              href={each.link}
              onClick={(e) => {
                if (isExternal(each.link)) {
                  return;
                }
                e.preventDefault();
                handleClick(each.link);
              }}
              className={`relative pb-1 ${isActive ? "text-black" : undefined}`}
            >
              <span
                style={{ viewTransitionName: `nav-label-${i}` } as CSSProperties}
              >{each.text}</span>
              {isActive && (
                <span
                  style={{ viewTransitionName: "nav-underline" } as CSSProperties}
                  className="absolute -bottom-0.5 left-0 h-[3px] w-full bg-black"
                />
              )}
            </Link>
        })}
    </div>
  </div>;
}