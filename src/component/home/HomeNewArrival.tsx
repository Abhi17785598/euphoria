import joggersImg from "../../assets/images/newArrivalImg1.png";
import fullSleeveImg from "../../assets/images/newArrivalImg2.png";
import tshirtImg from "../../assets/images/newArrivalImg3.png";
import urbanImg from "../../assets/images/newArrivalImg4.png";

const products = [
  { id: 1, name: "Knitted Joggers", image: joggersImg },

  { id: 2, name: "Full Sleeve", image: fullSleeveImg },

  { id: 3, name: "Active T-Shirts", image: tshirtImg },

  { id: 4, name: "Urban Shirts", image: urbanImg },
];

const HomeNewArrival=()=> {
  return (
    <div className="w-full px-4 sm:px-6 lg:px-20 py-8 sm:py-12">
      <h2 className="text-xl sm:text-2xl font-bold mb-8 sm:mb-10 relative flex items-center group">
        <span className="w-2 h-6 sm:h-8 bg-purple-500 cursor-pointer"></span>

        <span className="relative inline-block">
          <span className="relative z-10 text-black group-hover:text-white transition-colors duration-300">
            New Arrival
          </span>
          <span className="absolute left-0 top-0 h-full w-0 bg-purple-500 transition-all duration-500 ease-in-out group-hover:w-full"></span>
        </span>
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="flex flex-col items-center text-center"
          >
            <div className="w-full overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-[200px] sm:h-[250px] lg:h-[300px] object-cover rounded-xl transform hover:scale-105 transition-transform duration-500 ease-in-out"
              />
            </div>

            <p className="mt-4 sm:mt-6 lg:mt-8 text-base sm:text-lg font-bold text-gray-800">
              {product.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomeNewArrival;
