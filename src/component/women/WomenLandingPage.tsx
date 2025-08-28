import { useState } from "react";
import HeartIcon from "../../assets/svgs/whishlist.svg";
import filterIcon from "../../assets/svgs/filter.svg";
import arrowIcon from "../../assets/svgs/Arrow 1.svg";

import product1 from "../../assets/images/WomenProductImages/womenproduct1.png";
import product2 from "../../assets/images/WomenProductImages/womenproduct2.png";
import product3 from "../../assets/images/WomenProductImages/womenproduct3.png";
import product4 from "../../assets/images/WomenProductImages/womenproduct4.png";
import product5 from "../../assets/images/WomenProductImages/womenproduct5.png";
import product6 from "../../assets/images/WomenProductImages/womenproduct6.png";
import product7 from "../../assets/images/WomenProductImages/womenproduct7.png";
import product8 from "../../assets/images/WomenProductImages/womenproduct8.png";
import product9 from "../../assets/images/WomenProductImages/womenproduct9.png";
import product10 from "../../assets/images/WomenProductImages/womenproduct10.png";
import product11 from "../../assets/images/WomenProductImages/womenproduct11.png";
import product12 from "../../assets/images/WomenProductImages/womenproduct12.png";

const products = [
  { id: 1, title: "Black Sweatshirt", brand: "Puma Brand", price: "120.00", img: product1 },
  { id: 2, title: "White T-shirt", brand: "Adidas Brand", price: "80.00", img: product2 },
  { id: 3, title: "Lavender Hoodie", brand: "Nike Brand", price: "99.00", img: product3 },
  { id: 4, title: "Lavender Hoodie", brand: "Nike Brand", price: "99.00", img: product4 },
  { id: 5, title: "Lavender Hoodie", brand: "Nike Brand", price: "99.00", img: product5 },
  { id: 6, title: "Lavender Hoodie", brand: "Nike Brand", price: "99.00", img: product6 },
  { id: 7, title: "Lavender Hoodie", brand: "Nike Brand", price: "99.00", img: product7 },
  { id: 8, title: "Lavender Hoodie", brand: "Nike Brand", price: "99.00", img: product8 },
  { id: 9, title: "Lavender Hoodie", brand: "Nike Brand", price: "99.00", img: product9 },
  { id: 10, title: "Lavender Hoodie", brand: "Nike Brand", price: "99.00", img: product10 },
  { id: 11, title: "Lavender Hoodie", brand: "Nike Brand", price: "99.00", img: product11 },
  { id: 12, title: "Lavender Hoodie", brand: "Nike Brand", price: "99.00", img: product12 },
];

const filterOptions = [
  "Tops",
  "Printed T-shirts",
  "Plain T-shirts",
  "Kurti",
  "Boxers",
  "Full Sleeve T-shirts",
  "Joggers",
  "Pajamas",
  "Jeans",
];

const colors = [
  { name: "Purple", hex: "#8434E1" },
  { name: "Black", hex: "#000000" },
  { name: "Red", hex: "#F35528" },
  { name: "Orange", hex: "#F16F2B" },
  { name: "Navy", hex: "#345EFF" },
  { name: "White", hex: "#FFFFFF" },
  { name: "Brown", hex: "#D67E3B" },
  { name: "Green", hex: "#48BC4E" },
  { name: "Yellow", hex: "#FDC761" },
  { name: "Grey", hex: "#E4E5E8" },
  { name: "Pink", hex: "#E08D9D" },
  { name: "Blue", hex: "#3FDEFF" },
];

const sizes = ["XXS", "XS", "S", "M", "L", "XL", "XXL", "3XL", "4XL"];
const dressStyles = ["Classic", "Casual", "Business", "Sport", "Elegant", "Formal"];

type SectionProps = {
  title: string;
  icon: string;
  isOpen: boolean;
  setOpen: (open: boolean) => void;
  children: React.ReactNode;
};

const Section: React.FC<SectionProps> = ({ title, icon, isOpen, setOpen, children }) => (
  <div className="mb-4">
 
    <div>
      <div
        className="flex justify-between items-center cursor-pointer pb-2"
        onClick={() => setOpen(!isOpen)}
      >
        <h3 className="font-semibold text-[#807D7E]">{title}</h3>
        <img
          src={icon}
          alt="icon"
          className={`w-5 h-5 transition-transform ${typeof icon !== "string" ? "" : isOpen && icon.includes("Arrow") ? "rotate-180" : ""}`}
        />
      </div>
      <div className="w-full border-b border-[#BEBCBD]"></div>
    </div>

    
    {isOpen && <div className="mt-3">{children}</div>}
  </div>
);

const WomenLandingPage: React.FC = () => {
  const [filterOpen, setFilterOpen] = useState(false);
  const [priceOpen, setPriceOpen] = useState(false);
  const [colorsOpen, setColorsOpen] = useState(false);
  const [sizesOpen, setSizesOpen] = useState(false);
  const [dressStyleOpen, setDressStyleOpen] = useState(false);

  return (
    <section className="w-full px-6 lg:px-16 py-10">
     
      <div className="w-screen border-b border-[#BEBCBD] mb-6 relative left-1/2 -translate-x-1/2"></div>

      <div className="flex gap-8">
       
        <div className="w-[285px] border-l border-r border-b border-[#BEBCBD] p-3 -mt-6 -mb-4">
          
       
          <Section title="Filter" icon={filterIcon} isOpen={filterOpen} setOpen={setFilterOpen}>
            <ul className="space-y-2 text-gray-600">
              {filterOptions.map((item, i) => (
                <li key={i} className="hover:underline cursor-pointer">
                  {item}
                </li>
              ))}
            </ul>
          </Section>

      
          <Section title="Price" icon={arrowIcon} isOpen={priceOpen} setOpen={setPriceOpen}>
            <div className="flex gap-2 items-center  ">
              <input
                type="number"
                placeholder="$10"
                className="border border-[#807D7E] px-2 py-1 w-20 rounded-md text-sm"
              />
              <span>-</span>
              <input
                type="number"
                placeholder="$500"
                className="border border-[#807D7E] px-2 py-1 w-20 rounded-md text-sm "
              />
            </div>
            <input type="range" min="10" max="500" className="w-full mt-3 " />
          </Section>

         
          <Section title="Colors" icon={arrowIcon} isOpen={colorsOpen} setOpen={setColorsOpen}>
            <div className="grid grid-cols-4 gap-4">
              {colors.map((c, i) => (
                <div key={i} className="flex flex-col items-center cursor-pointer">
                  <span
                    className="w-10 h-10 rounded-xl border border-gray-300"
                    style={{ backgroundColor: c.hex }}
                  ></span>
                  <span className="text-xs mt-1 text-[#8A8989] font-medium">{c.name}</span>
                </div>
              ))}
            </div>
          </Section>

         
          <Section title="Size" icon={arrowIcon} isOpen={sizesOpen} setOpen={setSizesOpen}>
            <div className="flex flex-wrap gap-2">
              {sizes.map((s, i) => (
                <span
                  key={i}
                  className="px-3 py-1 border border-[#BEBCBD] font-semibold rounded-md text-sm cursor-pointer text-[#3C4242] hover:bg-gray-300"
                >
                  {s}
                </span>
              ))}
            </div>
          </Section>

       
          <Section title="Dress Style" icon={arrowIcon} isOpen={dressStyleOpen} setOpen={setDressStyleOpen}>
            <ul className="space-y-2 text-gray-600">
              {dressStyles.map((item, i) => (
                <li key={i} className="hover:underline cursor-pointer">
                  {item}
                </li>
              ))}
            </ul>
          </Section>

        </div>

       
        <div className="flex-1">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold">Women’s Clothing</h2>
            <div className="flex gap-6 text-sm font-medium text-gray-600">
              <span className="cursor-pointer hover:text-[#8A33FD]">New</span>
              <span className="cursor-pointer hover:text-[#8A33FD]">Recommended</span>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-6">
            {products.map((product, index) => (
              <div key={index} className="group">
                <div className="relative overflow-hidden rounded-lg">
                  <div className="absolute top-3 right-3 w-8 h-8 bg-white rounded-full flex items-center justify-center z-10">
                    <img src={HeartIcon} alt="" className="w-5 h-5 fill-gray-400 hover:fill-red-500 transition-colors duration-300 cursor-pointer" /> 
                  </div>
                  <img
                    src={product.img}
                    alt={product.title}
                    className="w-full h-[350px] object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="mt-3">
                  <h3 className="text-sm font-medium text-gray-800 line-clamp-2">
                    {product.title}
                  </h3>
                  <div className="flex items-center justify-between ">
                    <p className="text-xs text-gray-500">{product.brand}</p>
                    <button className="text-sm font-semibold text-gray-900 mx-3 bg-gray-100 px-4 py-1 rounded">
                      ₹{product.price}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WomenLandingPage;
