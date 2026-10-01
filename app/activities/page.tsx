"use client";

import Image from "next/image";
import { useState } from "react";
import type { CSSProperties } from "react";
import { flushSync } from "react-dom";
import { activities } from "./data";

type ThumbProps = {
  src: string;
  alt: string;
  viewName: string;
  className?: string;
};

function Thumb({ src, alt, viewName, className = "w-full" }: ThumbProps) {
  const style = { viewTransitionName: viewName } as CSSProperties;

  if (!src) {
    return (
      <div
        style={style}
        className={`aspect-[309/437] ${className} rounded-2xl bg-[#D9D9D9]`}
      />
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={309}
      height={437}
      style={style}
      className={`aspect-[309/437] ${className} object-cover`}
    />
  );
}

export default function Activities() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const active = activities.find((each) => each.id === activeId) ?? null;

  const transitionTo = (nextId: string | null) => {
    if (!document.startViewTransition) {
      setActiveId(nextId);
      return;
    }

    const transition = document.startViewTransition(() => {
      flushSync(() => setActiveId(nextId));
    });

    transition.ready.catch(() => {});
    transition.finished.catch(() => {});
  };

  const handleSelect = (id: string) => {
    transitionTo(id);
  };

  const handleBack = () => {
    transitionTo(null);
  };

  return (
    <main className="w-full ">
      <h1 className="font-[family-name:var(--font-spider)] my-15 border-y-[3px] border-[#02186F] py-15 pb-12 text-[86px] leading-none text-[#02186F] uppercase text-center">
        extracurricular activities ¥
      </h1>

      {/* bottom of the web, not the main */}
      <Image className={`absolute bottom-0 left-1/2 -translate-x-1/2 ${!active ? "hidden" : ""}`} src={'/activity/bg.png'} alt="" width={1081} height={400}></Image>

      <div className={`relative z-1 grid grid-cols-4 gap-10 ${active ? "hidden" : ""}`}>
        {activities.map((each) => {
          const preview = each.text.split("\n")[0];

          return (
            <button
              key={each.id}
              type="button"
              onClick={() => handleSelect(each.id)}
              className="flex flex-col items-start gap-3 text-left transition-colors border-[#02186F] bg-white hover:bg-[#EDEDED]"
            >
              <Thumb src={each.thumb} alt={each.title} viewName={`thumb-${each.id}`} />

              <div
                style={
                  { viewTransitionName: `title-${each.id}` } as CSSProperties
                }
                className="text-[28px] leading-tight text-[#02186F] uppercase font-[family-name:var(--font-42dot)] pb-2 border-b-[3px] border-[#02186F] w-full"
              >
                {each.title || "Title"}
              </div>

              <p className="line-clamp-3 text-[16px] text-[#02186F]">
                {preview || "Preview text"}
              </p>
            </button>
          );
        })}
      </div>

      <div
        className={`mt-15 flex flex-col items-center gap-6 bg-white p-10 relative z-1 ${
          active ? "" : "hidden"
        }`}
      >
        {active && (
          <>
            <button type="button" onClick={handleBack} className="text-2xl hover:scale-110 hover:text-red-400 transition-all duration-300 ">
              ← Go back
            </button>

            <h2
              style={
                { viewTransitionName: `title-${active.id}` } as CSSProperties
              }
              className="text-[96px] leading-tight text-[#02186F] uppercase text-center font-bold"
            >
              {active.title || "Title"}
            </h2>

            <div className="flex gap-9">
              <Thumb
                src={active.thumb}
                alt={active.title}
                viewName={`thumb-${active.id}`}
                className="w-[309px] shrink-0"
              />

              <div className="flex flex-col gap-4 text-[20px] text-[#02186F]">
                {active.text.split("\n").map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>
            </div>

            <div className="border-1 border-black border-solid w-full mt-15" />

            {active.image && (
              <Image
                src={active.image}
                alt={active.title}
                width={1117}
                height={744}
                className="h-auto w-full border-[3px] border-[#02186F]"
              />
            )}
          </>
        )}
      </div>
    </main>
  );
}