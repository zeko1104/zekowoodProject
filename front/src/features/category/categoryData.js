import { RiSofaLine } from "react-icons/ri";
import { PiCookingPot,PiRug,PiOfficeChair } from "react-icons/pi";
import { FaRegClock } from "react-icons/fa6";
import { FaRegLightbulb,FaBed  } from "react-icons/fa";
import { MdOutlineOutdoorGrill,MdShelves,MdOutlineBed  } from "react-icons/md";
import { TbCandle } from "react-icons/tb";


export const categories = [
  {
    id: 1,
    name: "Furniture",
    children: ["Chairs", "Tables", "Sofas", "Beds"],
    icon: RiSofaLine,
  },
  {
    id: 2,
    name: "Cooking",
    children: ["Cookware", "Utensils", "Bakeware"],
    icon: PiCookingPot,
  },
  {
    id: 3,
    name: "Accessories",
    children: ["Wall Art", "Mirrors", "Clocks"],
    icon : FaRegClock,
  },
  {
    id: 4,
    name: "Lighting",
    children: ["Ceiling Lights", "Lamps", "Outdoor"],
    icon: FaRegLightbulb ,
  },
  {
    id: 5,
    name: "Outdoor",
    children: ["Patio Furniture", "Garden Decor", "Grills"],
    icon: MdOutlineOutdoorGrill,
  },
  {
    id: 6,
    name: "Storage",
    children: ["Shelves", "Cabinets", "Closets"],
    icon: MdShelves,
  },
  {
    id: 7,
    name: "Rugs",
    children: ["Area Rugs", "Outdoor Rugs", "Runners"],
    icon: PiRug,
  },
  {
    id: 8,
    name: "Bedding",
    children: ["Sheets", "Comforters", "Pillows"],
    icon: MdOutlineBed  ,
  },
  {
    id: 9,
    name: "Decor",
    children: ["Vases", "Candles", "Plants"],
    icon: TbCandle,
  },
  {
    id: 10,
    name: "Office",
    children: ["Desks", "Chairs", "Storage"],
    icon: PiOfficeChair,
  }
];
