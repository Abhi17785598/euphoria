import React, { useEffect, useMemo, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { Star } from "lucide-react";

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

type Product = {
  id: number;
  name: string;
  brand: string;
  price: string;
  description: string;
  rating: number;
  reviews: number;
  sizes: string[];
  colors: string[];
  images: string[];
};

const productData: Product[] = [
  {
    id: 1,
    name: "Raven Hoodie With Black colored Design",
    brand: "Puma",
    price: "63.00",
    description:
      "A stylish black hoodie crafted from premium organic cotton. Minimal graphic at chest, soft brushed interior, and ribbed trims. Great for everyday layering.",
    rating: 3.5,
    reviews: 120,
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["#000000", "#D32F2F", "#FBC02D", "#8E24AA"],
    images: [product1, product2, product3, product4],
  },
  {
    id: 2,
    name: "White T-Shirt Classic",
    brand: "Adidas",
    price: "80.00",
    description:
      "Ultra-soft cotton tee with a regular fit. Breathable, lightweight, and made for all-day comfort.",
    rating: 4.2,
    reviews: 90,
    sizes: ["S", "M", "L"],
    colors: ["#FFFFFF", "#000000"],
    images: [product2, product3, product4, product1],
  },
  {
    id: 3,
    name: "Lavender Hoodie",
    brand: "Nike",
    price: "99.00",
    description:
      "Trendy lavender hoodie with cozy fleece lining. Pair with denim or joggers for a relaxed look.",
    rating: 4.5,
    reviews: 210,
    sizes: ["M", "L", "XL"],
    colors: ["#9370DB", "#000000"],
    images: [product3, product4, product5, product2],
  },
  {
    id: 4,
    name: "Iconic Denim Jacket",
    brand: "Levi’s",
    price: "150.00",
    description:
      "Timeless denim jacket with classic stitching and metal buttons. Slightly cropped for a modern silhouette.",
    rating: 4.7,
    reviews: 300,
    sizes: ["S", "M", "L", "XL"],
    colors: ["#1E3A8A", "#808080"],
    images: [product4, product5, product6, product3],
  },
  {
    id: 5,
    name: "Black Slim Jeans",
    brand: "Zara",
    price: "110.00",
    description:
      "Slim-fit stretch denim that moves with you. Clean black wash for dress-up or casual fits.",
    rating: 4.3,
    reviews: 156,
    sizes: ["26", "28", "30", "32"],
    colors: ["#111111"],
    images: [product5, product6, product7, product8],
  },
  {
    id: 6,
    name: "Green Crop Top",
    brand: "H&M",
    price: "70.00",
    description:
      "Ribbed crop top in a vibrant green. Snug, flattering fit with great stretch.",
    rating: 4.1,
    reviews: 64,
    sizes: ["XS", "S", "M", "L"],
    colors: ["#10B981", "#000000"],
    images: [product6, product7, product8, product9],
  },
  {
    id: 7,
    name: "Red Midi Dress",
    brand: "Mango",
    price: "200.00",
    description:
      "Elegant midi dress with a flowing skirt and subtle waist cinch. Perfect for evenings.",
    rating: 4.6,
    reviews: 198,
    sizes: ["S", "M", "L"],
    colors: ["#DC2626"],
    images: [product7, product8, product9, product10],
  },
  {
    id: 8,
    name: "Blue Denim Skirt",
    brand: "ONLY",
    price: "95.00",
    description:
      "High-rise denim skirt with raw hem. Works with tees, shirts, and hoodies alike.",
    rating: 4.0,
    reviews: 73,
    sizes: ["XS", "S", "M"],
    colors: ["#2563EB"],
    images: [product8, product9, product10, product11],
  },
  {
    id: 9,
    name: "Beige Blazer",
    brand: "Allen Solly",
    price: "250.00",
    description:
      "Soft-structured blazer in a neutral beige. Dress it up or down with ease.",
    rating: 4.4,
    reviews: 142,
    sizes: ["S", "M", "L", "XL"],
    colors: ["#D1C7B7"],
    images: [product9, product10, product11, product12],
  },
  {
    id: 10,
    name: "White Sneakers",
    brand: "Reebok",
    price: "130.00",
    description:
      "Clean white sneakers with cushioned insole for day-long comfort.",
    rating: 4.5,
    reviews: 255,
    sizes: ["5", "6", "7", "8"],
    colors: ["#FFFFFF", "#000000"],
    images: [product10, product11, product12, product9],
  },
  {
    id: 11,
    name: "Yellow Hoodie",
    brand: "Fila",
    price: "90.00",
    description:
      "Bright yellow hoodie with soft fleece. Instant mood booster!",
    rating: 4.2,
    reviews: 88,
    sizes: ["S", "M", "L"],
    colors: ["#FACC15"],
    images: [product11, product12, product1, product2],
  },
  {
    id: 12,
    name: "Pink Maxi Dress",
    brand: "Forever 21",
    price: "180.00",
    description:
      "Romantic pink maxi with airy fabric and flow. Perfect for brunch or beach.",
    rating: 4.6,
    reviews: 132,
    sizes: ["S", "M", "L"],
    colors: ["#F472B6"],
    images: [product12, product1, product2, product3],
  },
];

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate(); 

  const product = useMemo(
    () => productData.find((p) => p.id === Number(id)),
    [id]
  );


  const [selectedImage, setSelectedImage] = useState<string | undefined>(
    product?.images[0]
  );
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState<string | undefined>(
    product?.colors[0]
  );

  useEffect(() => {
    if (product) {
      setSelectedImage(product.images[0]);
      setSelectedColor(product.colors[0]);
      setSelectedSize("");
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [product]);

  if (!product) {
    return (
      <div className="flex justify-center items-center h-screen text-xl">
        Product not found
      </div>
    );
  }

  const similar = productData.filter((p) => p.id !== product.id).slice(0, 8);


  const handleAddToCart = () => {
 
    navigate("/cart");
  };

  return (
    <div className="pt-20 px-4 md:px-16 flex flex-col gap-16">
  
      <div className="flex flex-col md:flex-row gap-10">
        <div className="flex flex-col md:flex-row gap-4 md:w-1/2">
          <div className="flex md:flex-col gap-3 overflow-x-auto md:overflow-y-auto">
            {product.images.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`Thumbnail ${idx + 1}`}
                onClick={() => setSelectedImage(img)}
                className={`w-20 h-20 object-contain rounded-lg cursor-pointer border transition ${
                  selectedImage === img
                    ? "border-purple-600"
                    : "border-gray-300 hover:border-gray-400"
                }`}
              />
            ))}
          </div>

          <div className="flex-1">
            <img
              src={selectedImage}
              alt={product.name}
              className="w-full h-[400px] md:h-[500px] object-contain rounded-xl bg-gray-100 shadow-md"
            />
          </div>
        </div>

      
        <div className="md:w-1/2 flex flex-col gap-6">
          <p className="text-gray-500 text-sm">Shop &gt; Women &gt; Top</p>
          <h1 className="text-3xl font-bold">{product.name}</h1>

          <div className="flex items-center gap-2">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={20}
                className={
                  i < Math.floor(product.rating)
                    ? "text-yellow-400 fill-yellow-400"
                    : "text-gray-300"
                }
              />
            ))}
            <span className="ml-2 text-gray-600">{product.rating}</span>
            <span className="text-gray-400">({product.reviews} comments)</span>
          </div>

          {/* Sizes */}
          <div>
            <p className="font-semibold mb-2">Select Size</p>
            <div className="flex gap-3 flex-wrap">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-4 py-2 rounded-full border transition ${
                    selectedSize === size
                      ? "border-purple-600 bg-purple-100"
                      : "border-gray-300 hover:border-gray-400"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Colors */}
          <div>
            <p className="font-semibold mb-2">Colours Available</p>
            <div className="flex gap-3">
              {product.colors.map((color, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedColor(color)}
                  className={`w-8 h-8 rounded-full border-2 ${
                    selectedColor === color
                      ? "border-purple-600"
                      : "border-gray-300"
                  }`}
                  style={{ backgroundColor: color }}
                  aria-label={`Color ${color}`}
                />
              ))}
            </div>
          </div>

       
          <div className="flex items-center gap-4">
            <button
              onClick={handleAddToCart}
              className="bg-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-purple-700 transition"
            >
              Add to cart
            </button>
            <p className="text-xl font-bold">${product.price}</p>
          </div>

          {/* Badges */}
          <div className="grid grid-cols-2 gap-2 text-sm text-gray-600 mt-2">
            <p>✔ Secure payment</p>
            <p>✔ Size &amp; Fit</p>
            <p>✔ Free shipping</p>
            <p>✔ Free Shipping &amp; Returns</p>
          </div>
        </div>
      </div>

   
      <section className="bg-gray-50 p-6 rounded-2xl shadow-sm">
        <h2 className="text-2xl font-bold mb-4">Product Description</h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          Elevate your everyday rotation with this versatile piece that blends{" "}
          <span className="font-semibold">comfort, durability, and style</span>.
          Crafted from premium fabrics for a soft hand-feel, it’s designed to
          keep its shape and color wash after wash. Easy to style with jeans,
          skirts, or joggers — from coffee runs to cool evenings out.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="rounded-xl bg-white p-4 border">
            <h3 className="font-semibold mb-2">Fabric &amp; Care</h3>
            <ul className="text-sm text-gray-600 space-y-1 list-disc ml-5">
              <li>Bio-washed cotton / soft fleece lining*</li>
              <li>Breathable, no-pilling finish</li>
              <li>Machine wash cold, tumble dry low</li>
              <li>Do not bleach; wash inside out</li>
            </ul>
          </div>

          <div className="rounded-xl bg-white p-4 border">
            <h3 className="font-semibold mb-2">Fit &amp; Construction</h3>
            <ul className="text-sm text-gray-600 space-y-1 list-disc ml-5">
              <li>Regular fit with ribbed cuffs/hem</li>
              <li>Reinforced seams for durability</li>
              <li>True-to-size — pick your usual</li>
              <li>Multiple colorways available</li>
            </ul>
          </div>

          <div className="rounded-xl bg-white p-4 border">
            <h3 className="font-semibold mb-2">What’s Great</h3>
            <ul className="text-sm text-gray-600 space-y-1 list-disc ml-5">
              <li>All-season layering essential</li>
              <li>Minimal design, easy to pair</li>
              <li>Comfy for travel &amp; daily wear</li>
              <li>Backed by 30-day free returns</li>
            </ul>
          </div>
        </div>
      </section>

 
      <section>
        <h2 className="text-2xl font-bold mb-6">Similar Products</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {similar.map((sp) => (
            <Link
              key={sp.id}
              to={`/product/${sp.id}`}
              className="group bg-white rounded-2xl border p-4 shadow-sm hover:shadow-md transition"
            >
              <div className="w-full h-44 md:h-48 rounded-lg bg-gray-50 overflow-hidden flex items-center justify-center">
                <img
                  src={sp.images[0]}
                  alt={sp.name}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="mt-3">
                <p className="font-semibold leading-snug group-hover:text-purple-700">
                  {sp.name}
                </p>
                <p className="text-sm text-gray-500">{sp.brand}</p>
                <p className="text-purple-600 font-bold mt-1">${sp.price}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ProductDetail;
