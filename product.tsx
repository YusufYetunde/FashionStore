
import ProductPagination from "./pagination";
import Products from "./products";


const products = [
     {
      imageSrc: "/explore/redish.png",
      category: "Vegetables",
      name: "Redish 500g",
      brand: "Glovo",
      price: "$2.00",
      originalPrice: "$3.99",
    },
    {
      imageSrc: "/explore/potatoes.png",
      category: "Vegetables",
      name: "Potatoes 500g",
      brand: "Nestle",
      price: "$2.50",
      originalPrice: "$3.49",
    },
    {
      imageSrc: "/explore/tomatoes.png",
      category: "Vegetables",
      name: "Tomatoes 1kg",
      brand: "Fresh Farms",
      price: "$3.99",
      originalPrice: "$5.99",
    },
    {
      imageSrc: "/explore/lettuce.png",
      category: "Vegetables",
      name: "Lettuce",
      brand: "Organic Greens",
      price: "$1.75",
      originalPrice: "$2.49",
    },
    {
      imageSrc: "/explore/banana.png",
      category: "Fruits",
      name: "Bananas 1kg",
      brand: "Tropical Delights",
      price: "$1.99",
      originalPrice: "$2.99",
    },
    {
      imageSrc: "/explore/oranges.png",
      category: "Fruits",
      name: "Oranges 1kg",
      brand: "Sunkist",
      price: "$2.25",
      originalPrice: "$3.49",
    },
    {
      imageSrc: "/explore/strawberries.png",
      category: "Fruits",
      name: "Strawberries 250g",
      brand: "Berry Bliss",
      price: "$2.99",
      originalPrice: "$4.99",
    },
    
  ];
  

export default function Product() {
  return (
    <div className="w-full bg-white my-10">
      <div className="flex flex-wrap w-full flex-row justify-between items-start gap-4 mb-10">
        {products.map((product, index) => (
          <Products key={index} product={product} />
        ))}
      </div>
      <ProductPagination />
    </div>
  );
}
