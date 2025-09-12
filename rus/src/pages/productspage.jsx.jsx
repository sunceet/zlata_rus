import { Link } from "react-router-dom";

import bgGreen from "@/assets/bg-green.svg";
import bgYellow from "@/assets/bg-yellow.svg";

import flourLinen from "@/assets/flour-linen_carousel.png";
import flourSesame from "@/assets/flour-sesame-carousel.png";
import oilLinen from "@/assets/oil-linen.png";
import oilMustard from "@/assets/oil-mustard.png";
import oilSesame from "@/assets/oil-sesame.png";
import oilSunflower from "@/assets/oil-sunflower.png";
import vector from "@/assets/Vector2.svg";

// список продуктов со slug
const products = [
  { id: 1, slug: "linen_oil", name: "Масло льняное", image: oilLinen },
  { id: 2, slug: "mustard_oil", name: "Масло горчичное", image: oilMustard },
  { id: 3, slug: "sesame_oil", name: "Масло кунжутное", image: oilSesame },
  {
    id: 4,
    slug: "sunflower_oil",
    name: "Масло подсолнечное",
    image: oilSunflower,
  },
  {
    id: 5,
    slug: "linen_flour",
    name: "Мука льняная",
    image: flourLinen,
    type: "flour",
  },
  {
    id: 6,
    slug: "sesame_flour",
    name: "Мука кунжутная",
    image: flourSesame,
    type: "flour",
  },
];

function ProductCard({ name, image, type }) {
  const insetTop = type === "flour" ? "90px" : "84px";
  const imageShift =
    type === "flour"
      ? "mt-[115px] max-h-[700px]"
      : "mt-[130px] -mb-[40px] max-h-[540px]";

  return (
    <div
      className="
        relative rounded-[18px] bg-[#1C3B3E]
        transition-all duration-300 ease-out
        group-hover:-translate-y-1 group-hover:scale-[1.01]
        group-hover:shadow-[0_18px_40px_rgba(20,45,48,0.35)]
        "
      style={{ width: "426px", height: "526px" }}
    >
      {/* Золотой кант при hover */}
      <div
        className="
          pointer-events-none absolute inset-0 rounded-[18px]
          border border-transparent
          transition-colors duration-300
          group-hover:border-[#D7B56D]
        "
      />

      <div className="pt-4 px-5 text-center relative z-[1]">
        <h3
          className="
            text-[36px] font-lato font-semibold
            bg-gradient-to-r from-[#7C622B] to-[#FFD170] bg-clip-text text-transparent
            transition-[filter] duration-300
            group-hover:brightness-110
          "
        >
          {name}
        </h3>
      </div>

      <div
        className="
          absolute rounded-[12px] border border-[#D7B56D]
          flex items-center justify-center overflow-hidden
          transition-shadow duration-300
          group-hover:shadow-[inset_0_0_30px_rgba(215,181,109,0.25)]
          bg-cover bg-center
        "
        style={{
          top: insetTop,
          left: "16px",
          right: "16px",
          bottom: "16px",
          backgroundImage: `url(${bgGreen})`,
        }}
      >
        {/* Глянец сверху при hover */}
        <div
          className="
            pointer-events-none absolute inset-0
            opacity-0 group-hover:opacity-100 transition-opacity duration-300
            "
          style={{
            background:
              "linear-gradient( to bottom, rgba(255, 247, 224, 0.25), transparent 35% )",
          }}
        />

        {/* Лёгкое свечение по контуру при hover */}
        <div
          className="
            pointer-events-none absolute inset-0 rounded-[12px]
            opacity-0 group-hover:opacity-100 transition-opacity duration-300
          "
          style={{
            boxShadow: "0 0 40px rgba(215,181,109,0.18) inset",
          }}
        />

        <img
          src={image}
          alt={name}
          className={`
            relative z-[1] ${imageShift} max-w-full object-contain
            transition-transform duration-300 ease-out
            group-hover:scale-105 group-hover:-translate-y-1
          `}
        />
      </div>
    </div>
  );
}

export default function ProductsPage() {
  return (
    <div
      className="relative h-[1520px] bg-no-repeat bg-cover"
      style={{ backgroundImage: `url(${bgYellow})` }}
    >
      <div className="absolute left-[160px] top-[70px] text-[24px] font-bold font-lato text-[#1C3B3E]">
        НАЖМИТЕ НА КАРТОЧКУ С ПРОДУКЦИЕЙ, ЧТОБЫ УЗНАТЬ ПОДРОБНУЮ ИНФОРМАЦИЮ
      </div>

      <h1 className="pt-30 pl-[160px] text-[48px] font-lato text-[#1C3B3E] font-bold">
        ПРОДУКЦИЯ
      </h1>

      <div className="mt-10 flex justify-center">
        <div
          className="grid grid-cols-3"
          style={{ width: "1550px", gap: "70px", rowGap: "100px" }}
        >
          {products.map((p) => (
            <Link key={p.id} to={`/${p.slug}`} className="group">
              <ProductCard name={p.name} image={p.image} type={p.type} />
            </Link>
          ))}
        </div>
      </div>

      <div className="flex mt-12 px-20 w-full justify-center">
        <img src={vector} alt="Орнамент" className="w-[1550px] h-[34px]" />
      </div>
    </div>
  );
}
