"use client";

import Image from "next/image";
import { useState } from "react";

const data = [
  {
    id: 1,
    title: "the tay",
    imgs: ["/arts/1_1.png", "/arts/1_2.png"],
    text: [
      "Inspired by the traditional clothing of the <b>Tay people</b>, this male design preserves the culture’s distinctive <b>deep indigo palette and understated aesthetic</b> while translating them into a contemporary look. Traditional Tày menswear is known for its simple construction, minimal decoration, and five-panel shirts with a central row of fabric buttons. These characteristics are reinterpreted through a structured denim jacket and wide-leg jeans, retaining the monochromatic indigo appearance while introducing a material strongly associated with modern everyday fashion.\nThe jacket maintains a clean, upright neckline and central opening, reflecting the restrained silhouette of traditional Tày garments. A matching <b>indigo headscarf</b> further preserves the visual identity of the original attire. Rather than introducing elaborate patterns, the design intentionally remains minimal, reflecting the Tày tradition of emphasizing form and color over ornamentation.\nThe dan tinh, an iconic musical instrument in Tày cultural life, completes the outfit, connecting its contemporary silhouette with a recognizable symbol of Tày heritage.",
      "Inspired by traditional <b>Tay women’s clothing</b>, this design transforms the community’s characteristic indigo attire into a contemporary, elegant silhouette. The traditional preference for <b>deep indigo, clean construction, and minimal ornamentation</b> is preserved through a fitted denim jacket and monochromatic skirt, reimagining the simplicity of Tày dress within modern professional fashion.\nThe jacket retains several recognizable elements of traditional Tày clothing, including its <b>structured neckline, central fastening, and restrained form</b>, while open shoulders and flared sleeves introduce a more contemporary silhouette. A long waist sash, inspired by the fabric belts traditionally worn around the body, creates movement and contrasts with the fitted office-style skirt.\nAccessories provide another connection to Tay cultural identity. The indigo <b>headscarf</b> is redesigned with a modern shape, while <b>silver necklaces and bracelets</b> reference the silver jewelry traditionally used to complement women’s clothing. A miniature handbag and high heels complete the reinterpretation, placing traditional visual elements within a distinctly modern wardrobe.",
    ],
  },
  {
    id: 2,
    title: "the e-de",
    imgs: ["/arts/2_1.png", "/arts/2_2.png"],
    text: [
      "This <b>E De male redesign</b> brings the community’s distinctive <b>black-based textiles and geometric brocade patterns</b> into a relaxed contemporary silhouette.\nThe traditional pullover structure is transformed into a <b>black long-sleeved V-neck top</b>, paired with straight, loose-fitting trousers. <b>Red, white, and yellow geometric bands</b> become the key visual motif, appearing selectively along the neckline, sleeve cuffs, waist, trouser hems, and headband. Their repeated placement preserves the rhythmic character of E De brocade without overwhelming the clean, modern construction of the outfit.\nThe styling further connects traditional references with everyday menswear. <b>Open sandals and a metallic bracelet</b> maintain the outfit’s simple, practical character, while the patterned headband extends the brocade language beyond the clothing itself. Most prominently, the large woven <b>gùi carried over the shoulder</b> is retained as a recognizable cultural element of E De life. Against the streamlined black outfit, it becomes both a functional reference and a strong visual link between the contemporary redesign and its cultural roots.",
      "<b>A fitted top and sweeping A-line skirt</b> give this E De female look an elegant, contemporary proportion, with the simplicity of the silhouette allowing traditional textile details to take visual focus. The almost entirely black foundation acts as a canvas for bands of <b>bright geometric brocade</b>, creating contrast through both color and placement.\nRather than distributing patterns evenly, the design builds visual rhythm from top to bottom. Fine woven borders frame the <b>wide neckline and short sleeves</b>, continue around the waist to define the figure, then expand into broad, intricate bands across the lower skirt. The concentration of <b>red, white, yellow, and green motifs</b> near the hem turns traditional E De textile language into the statement feature of the garment.\nA sleek <b>low bun, silver hoop earrings, and delicate necklace</b> keep the styling refined, while contemporary flat sandals soften the formality of the long skirt. Together, these details create a look that feels suitable for modern fashion while allowing <b>E De brocade craftsmanship</b> to remain its most recognizable visual signature.\n",
    ],
  },
  {
    id: 3,
    title: "the hmong",
    imgs: ["/arts/3_1.png", "/arts/3_2.png"],
    text: [
      "<b>Streetwear meets H’Mong visual heritage</b> in this male look, where a familiar jacket-and-sneaker combination becomes the foundation for traditional colors, patterns, and cultural references.\nThe outfit is built around a loose <b>black jacket and wide-leg trousers</b>, layered over a plain white T-shirt and finished with <b>Jordan-style sneakers</b>. Against this minimal black-and-white base, vivid embroidered-style borders run continuously along the shoulders and sleeves before reappearing at the trouser hems. Their <b>red, pink, blue, and white geometric motifs</b> echo the bold colors and intricate decorative language associated with H’Mông textiles, turning the trims into the defining feature of an otherwise contemporary silhouette.\nA coordinating <b>patterned headpiece</b> extends the same visual language above the outfit, creating continuity from head to hem. At the center of the look is the <b>khen Mong</b>, whose bamboo structure provides a striking contrast to the streamlined streetwear. By placing this culturally significant instrument directly within a modern outfit, the design connects H’Mong identity with the visual language of contemporary youth fashion.\n",
      "Rather than recreating traditional H’Mong clothing as a complete ensemble, this design <b>extracts its most recognizable visual codes and places them within a youthful wardrobe</b>. The result pairs a cropped jacket and white top with a short, voluminous skirt and high-top sneakers – pieces that could naturally belong to contemporary street fashion.\nThe skirt carries most of the cultural reference. Its <b>full, outward-spreading shape</b> recalls the layered and pleated character of H’Mong skirts, while rows of vivid textile patterns introduce the dense decoration associated with H’Mong craftsmanship. Shades of <b>red, pink, orange, blue, and green</b> break through the black foundation, with a wide red section at the hem giving the garment an especially strong finish. Matching patterned bands appear only at the jacket cuffs, allowing the skirt to remain dominant.\nInstead of traditional styling from head to toe, <b>high-top sneakers and a crop top</b> deliberately shift the look toward younger wearers. A patterned hairpiece and <b>silver-toned earrings</b> bring selected traditional references back into the styling, balancing cultural recognition with a distinctly casual, present-day attitude.\n",
    ],
  },
  {
    id: 4,
    title: "the dao",
    imgs: ["/arts/4_1.png", "/arts/4_2.png"],
    text: [
      "<b>For this Red Dao male look</b>, color becomes the main bridge between cultural identity and contemporary menswear. A dark <b>indigo-blue jacket and straight-cut trousers</b> form a restrained base, allowing carefully placed red details to immediately draw attention.\nInstead of reproducing the richly decorated traditional garment in full, the design isolates its decorative language into a few statement elements. A rectangular <b>embroidered chest patch</b> brings intricate red, white, and multicolored geometric motifs onto the otherwise minimal jacket, while bright <b>red cuffs</b> repeat the accent at the sleeves. At the waist, a long red fabric sash falls asymmetrically over the trousers, translating the prominent red textiles of Red Dao dress into a simple styling feature with added movement.\nThe traditional head covering is reinterpreted through a <b>black beret</b>, giving the look an urban character without adding excessive ornamentation. A white inner shirt breaks up the dark palette, while <b>dark ankle boots and wide trousers</b> complete the modern silhouette. Red is therefore not simply decorative, but used selectively to make the outfit immediately identifiable with <b>Red Dao visual culture.</b>",
      "The elaborate decoration of <b>Red Dao women’s dress</b> is edited into a cleaner, more polished wardrobe in this female design. Instead of carrying every traditional detail at once, selected elements are repositioned across a <b>fitted blouse and streamlined skirt</b>, giving the outfit an elegant, office-inspired character.\nRed embroidery forms a visual line through the design: it travels vertically down the center of the blouse, wraps around the waist, and finishes the wide bell sleeves with bands of intricate geometric pattern. Four rounded <b>red pom-pom details</b> on the chest reinterpret the striking tassels and wool ornaments associated with Red Dao dress, while the vivid <b>red panel near the skirt hem</b> brings the color back at the base of the silhouette.\nThe headwear is simplified into a sleek <b>red wrapped scarf with a long trailing end</b>, preserving one of the most immediately recognizable features of Red Dao women’s attire. Even the small black handbag carries a bright embroidered panel and tassel detail, extending the textile language into a modern accessory. <b>Pointed heels</b> complete the polished styling, bringing the entire look into a contemporary setting without losing its distinctive red-and-black identity.",
    ],
  },
  {
    id: 5,
    title: "the cham",
    imgs: ["/arts/5_1.png", "/arts/5_2.png"],
    text: [
      "Soft layering and an <b>ivory-and-earth-gold palette</b> shape this Cham male design, creating a look that feels understated while still carrying clear references to traditional dress. Instead of relying on dense ornamentation, the outfit explores proportion, texture, and flowing fabric as its main visual language.\nA long <b>cream outer coat</b> with structured shoulders falls over a simple white inner shirt and wide, cropped trousers, combining a contemporary tailored form with the loose elegance associated with Cham clothing. Running vertically through the entire outfit, a <b>woven golden scarf</b> introduces warmth and texture, its long fringed ends emphasizing movement against the monochromatic base. A slim belt adds definition at the waist without interrupting the relaxed silhouette.\nThe <b>light headwrap</b>, tied with fabric trailing to one side, carries traditional headwear into a cleaner modern form. Gold-toned sandals echo the scarf and complete the restrained palette. Through its flowing layers, natural shades, and minimal decoration, the look interprets <b>Cham aesthetics through simplicity rather than excess</b>, allowing fabric and silhouette to become the central expression of cultural influence.",
      "This Cham female design plays with <b>proportion</b>, shortening the traditionally long and fluid silhouette into a fitted, above-the-knee dress while allowing the headscarf to preserve its sense of length and movement.\nThe dress is kept intentionally simple: a soft <b>ivory base</b> is shaped by a V-neckline, gently flared sleeves, and a defined waist, with <b>earthy golden-brown borders</b> tracing the neck, cuffs, belt, and hem. Rather than adding dense decoration, these clean lines reflect the restrained geometric quality and subtle color combinations found in Cham dress. The fitted shape brings the garment closer to contemporary womenswear, while the warm cream-and-gold palette keeps the overall appearance soft and cohesive.\nThe most dramatic element is the <b>long ochre headscarf</b>, which falls from the head past the body like a veil and restores fluidity to the shortened silhouette. A delicate <b>silver bracelet</b> adds a restrained accessory detail, while pointed high heels shift the styling toward an elegant modern setting. The contrast between the compact dress and flowing scarf allows traditional grace and contemporary tailoring to coexist within the same look.",
    ],
  },
];

const MAN_LABEL = "MAN";
const WOMEN_LABEL = "women";

function toColumnText(text: string | string[], index: number) {
  const lines = Array.isArray(text) ? text : text.split("\n");
  return lines[index] ?? "";
}

function RichText({ value }: { value: string }) {
  const paragraphs = value.split("\n").filter((line) => line.trim() !== "");

  return (
    <>
      {paragraphs.map((paragraph, i) => (
        <p key={i} dangerouslySetInnerHTML={{ __html: paragraph }} />
      ))}
    </>
  );
}

export default function Arts() {
  const [activeId, setActiveId] = useState<number>(data[0].id);
  const active = data.find((each) => each.id === activeId) ?? data[0];

  return (
    <main className="w-full ">
      <h1 className="font-[family-name:var(--font-spider)] my-15 border-y-[3px] border-[#02186F] py-15 pb-2 text-[186px] leading-none text-[#02186F] uppercase text-center">
        arts ¥
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
        <b>Re-Ethnic</b> is a personal fashion design that explores how
        Vietnam’s traditional ethnic clothing can be reimagined for a
        contemporary generation. Focusing on five ethnic communities – the{" "}
        <b>Tay, E De, H’Mong, Red Dao, and Cham</b>, the project brings cultural
        research, creative design and storytelling together in one experience.{" "}
        <br />
        <br />
        The project begins with research into the history, cultural identity,
        traditional clothing, colors, patterns, materials, and distinctive
        visual elements of each community. Rather than simply reproducing
        traditional garments, Re-Ethnic identifies the features that make each
        culture visually recognizable and translates them into contemporary
        fashion. Traditional silhouettes, embroidery, motifs, color
        combinations, and accessories are selectively adapted into modern
        designs that remain connected to their cultural origins while becoming
        more relevant to everyday life.
        <br /> <br />
        Each collection therefore acts as a conversation between heritage and
        modernity. Through this combination of cultural research, fashion and
        technology, Re-Ethnic seeks to make Vietnam’s ethnic diversity more
        approachable and engaging for young audiences. Ultimately, the project
        asks a simple question: What if preserving tradition does not only mean
        looking back, but also finding thoughtful ways to carry it forward?
        <br />
        <br />
        Let’s find the answer!
        <div
          role="tablist"
          className={`font-[family-name:var(--font-spider)] uppercase flex items-center justify-between text-[36px] border-y-[3px] border-[#02186F] pt-3 mt-12`}
        >
          {data.map((each) => {
            const isActive = each.id === activeId;

            return (
              <div
                key={each.id}
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveId(each.id)}
                className={`transition-colors duration-200 hover:text-[#d1a020] cursor-pointer ${
                  isActive ? "!text-[#CF1B29]" : "text-[#02186F]"
                }`}
              >
                {each.title}
              </div>
            );
          })}
        </div>
        <div key={active.id} className="animate-tab-fade">
          <div className="grid grid-cols-2 gap-9 mt-9">
            {[0, 1].map((column) => (
              <div key={column} className="flex flex-col items-start relative">
                <h2 className="font-[family-name:var(--font-spider)] text-[36px] leading-none text-[#CF1B29] uppercase absolute top-0 left-0">
                  {column === 0 ? MAN_LABEL : WOMEN_LABEL}
                </h2>

                <Image
                  src={active.imgs[column]}
                  alt={`${active.title} ${column === 0 ? MAN_LABEL : WOMEN_LABEL}`}
                  width={column === 0 ? 407 : 383}
                  height={column === 0 ? 574 : 542}
                  className="mt-4 h-auto w-full  "
                />

                <div className="mt-6 flex flex-col gap-4 text-justify">
                  <RichText value={toColumnText(active.text, column)} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
