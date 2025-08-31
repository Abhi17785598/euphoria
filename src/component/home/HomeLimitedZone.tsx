import  HeartIcon  from "../../assets/svgs/heart.svg"; // Import SVG as React component
import img1 from "../../assets/images/limited1.png";
import img2 from "../../assets/images/limited2.png";
import img3 from "../../assets/images/limited3.png";
import img4 from "../../assets/images/limited4.png";

const HomeLimitedZone=()=> {
  const products = [
    {
      img: img1,
      title: "Black Sweatshirt with White Logo",
      brand: "Jhanvi's Brand",
      price: 1230,
    },
    {
      img: img2,
      title: "Line Pattern Black Hat",
      brand: "AS's Brand",
      price: 370,
    },
    {
      img: img3,
      title: "Black Shorts",
      brand: "MM's Brand",
      price: 370,
    },
    {
      img: img4,
      title: "Lavender Hoodie with White Strings",
      brand: "Nike's Brand",
      price: 1190,
    },
  ];

  return (
    <div className="w-full max-w-[1200px] mx-auto py-8 sm:py-10 px-4 sm:px-6">
      <div className="flex items-center gap-2 mb-6 sm:mb-8">
        <div className="w-[5px] h-6 bg-purple-500 rounded"></div>
        <h2 className="text-xl sm:text-2xl font-bold">In The Limelight</h2>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
        {products.map((product, index) => (
          <div key={index} className="group">
            <div className="relative overflow-hidden rounded-lg">
              <div className="absolute top-3 right-3 w-8 h-8 bg-white rounded-full flex items-center justify-center z-10">
                <img src={HeartIcon} alt="" className="w-5 h-5 fill-gray-400 hover:fill-red-500 transition-colors duration-300 cursor-pointer"/> 
              </div>
              <img
                src={product.img}
                alt={product.title}
                className="w-full h-[250px] sm:h-[300px] lg:h-[350px] object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="mt-2 sm:mt-3">
              <h3 className="text-xs sm:text-sm font-medium text-gray-800 line-clamp-2">
                {product.title}
              </h3>
              <div className="flex items-center justify-between">
                <p className="text-xs text-gray-500">{product.brand}</p>
                <button className="text-xs sm:text-sm font-semibold text-gray-900 mx-2 sm:mx-3 bg-gray-100 px-2 sm:px-4 py-1 rounded">
                  ₹{product.price.toLocaleString("en-IN")}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default HomeLimitedZone;