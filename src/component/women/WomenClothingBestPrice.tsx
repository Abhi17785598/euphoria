const WomensClothingTable = () => {
  const products = [
    { name: "Pick Any 4 - Womens Plain T-shirt Combo", price: "₹1099" },
    { name: "Pick Any 4 - Plain Womens Boxer Combo", price: "₹1099" },
    {
      name: "Pick Any 4 - Women Plain Full Sleeve T-shirt Combo",
      price: "₹1399",
    },
    {
      name: "Multicolor Checkered Long Casual Shirts for Women",
      price: "₹499",
    },
    {
      name: "Pick Any 2: Plain Boxy Casual Shirts for Women Combo",
      price: "₹799",
    },
    { name: "Blue Floral Anarkali Kurti", price: "₹599" },
    { name: "Jade Black Narrow Cut Flexible Women Jeggings", price: "₹998" },
    { name: "Mustard-yellow Solid Straight-Fit Women Pant", price: "₹499" },
    { name: "Women Pants Combo - Pick Any 2", price: "₹800" },
    { name: "Pista Green Solid Boxy Casual Shirts for Women", price: "₹449" },
    { name: "Plain Burgundy Womens Boxer", price: "₹349" },
    { name: "Striped Front Tie Casual Shirts for Women", price: "₹449" },
  ];

  return (
    <section className="w-full max-w-[1240px] mx-auto px-4 md:px-6 lg:px-8 py-10">
      <h2 className="text-[20px] md:text-[28px] font-bold text-[#3C4242] mb-6">
        Buy Women's Clothing at Best Price
      </h2>

      <div className="bg-[#F6F6F6] rounded-lg overflow-hidden mb-8">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-[#E0E0E0]">
              <th className="py-8 px-17 font-bold text-[#3C4242] text-xl w-[70%] pb-9">
                Women's Clothing
              </th>
              <th className="py-8 px-20 font-bold text-[#3C4242] text-xl w-[20%] border-l border-[#E0E0E0]">
                Best Price
              </th>
            </tr>
          </thead>
          <tbody>
            {products.map((item, index) => (
              <tr key={index}>
                <td className="py-4 px-18 text-[#807D7E] text-[19px]">
                  {item.name}
                </td>

                <td className="py-4 px-24 text-[#807D7E] text-[20px] font-medium border-l border-[#E0E0E0]">
                  {item.price}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default WomensClothingTable;
