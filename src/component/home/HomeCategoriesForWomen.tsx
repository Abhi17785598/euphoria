import ArrowIcon from "../../assets/svgs/Arrow 1.svg"; // <-- your SVG import here
import shirtImg from "../../assets/images/women1.png";
import printedTShirtImg from "../../assets/images/women2.png";
import plainTShirtImg from "../../assets/images/women3.png";
import poloTShirtImg from "../../assets/images/women4.png";


const CategoriesForWomen=()=> {
  const categories = [

    {
       img: shirtImg,
       title: "Hoodies & Sweetshirt",
       sub: "Explore Now!"
     },

    {
       img: printedTShirtImg,
       title: "Coats & Parkas", 
       sub: "Explore Now!" 
      },

    {
       img: plainTShirtImg, 
      title: "Tees & T-Shirt", 
      sub: "Explore Now!" 
    },

    {
       img: poloTShirtImg,
      title: "Boxers",
      sub: "Explore Now!" 
    },
   
  ];

  return (
    <div className="w-full max-w-[1200px] mx-auto py-16">
      <div className="flex items-center gap-2 mb-8">
        <div className="w-[5px] h-6 bg-purple-500 rounded"></div>
        <h2 className="text-2xl font-bold">Categories For Women</h2>
      </div>
      <div className="grid grid-cols-4 gap-10">
        {categories.map((cat, index) => (
          <div key={index} className="flex flex-col">
            <div className="w-full h-[393px] overflow-hidden rounded-[10px] ">
              <img
                src={cat.img}
                alt={cat.title}
                className="w-full h-full object-cover "
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
}
export default CategoriesForWomen;