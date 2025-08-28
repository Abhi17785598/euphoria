import shirtImg from "../../assets/images/men1.png";
import printedTShirtImg from "../../assets/images/men2.png";
import plainTShirtImg from "../../assets/images/men3.png";
import poloTShirtImg from "../../assets/images/men4.png";
import hoodieImg from "../../assets/images/men5.png";
import jeansImg from "../../assets/images/men6.png";
import activewearImg from "../../assets/images/men7.png";
import boxersImg from "../../assets/images/men8.png";
import ArrowIcon from "../../assets/svgs/Arrow 1.svg"; 

const CategoriesForMen = () => {
  const categories = [
    {

     img: shirtImg,
     title: "Shirts",
     sub: "Explore Now!" 
    
    },

    { 
      img: printedTShirtImg,
      title: "Printed T-Shirts",
      sub: "Explore Now!" 
    
    },

    { 
      img: plainTShirtImg,
       title: "Plain T-Shirt",
        sub: "Explore Now!"
      },

    {
       img: poloTShirtImg,
       title: "Polo T-Shirt",
        sub: "Explore Now!" 
      },

    { 
      img: hoodieImg,
       title: "Hoodies & Sweatshirt",
        sub: "Explore Now!" 
      },

    { 
      img: jeansImg,
       title: "Jeans",
        sub: "Explore Now!"
       },

    { 
      img: activewearImg,
       title: "Activewear",
        sub: "Explore Now!"
       },

    {
       img: boxersImg,
       title: "Boxers",
        sub: "Explore Now!"
       },
  ];

  return (
    <div className="w-full max-w-[1200px] mx-auto py-16">
      <div className="flex items-center gap-2 mb-8">
        <div className="w-[5px] h-6 bg-purple-500 rounded"></div>
        <h2 className="text-2xl font-bold">Categories For Men</h2>
      </div>

      <div className="grid grid-cols-4 gap-10">
        {categories.map((cat, index) => (
          <div key={index} className="flex flex-col">
            <div className="w-full h-[393px] overflow-hidden rounded-[10px]">
              <img
                src={cat.img}
                alt={cat.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex items-center justify-between mt-2">
              <div>
                <h3 className="text-sm font-medium">{cat.title}</h3>
                <p className="text-xs text-gray-500">{cat.sub}</p>
              </div>
              <img src={ArrowIcon} alt="arrow" className="w-4 h-4" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default CategoriesForMen;
