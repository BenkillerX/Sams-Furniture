import { Link } from "react-router-dom";

const products = [
  {
    id: 1,
    name: "Modern Sofa",
    category: "Living Room",
    image: "/Couch1.jpg",
  },
  {
    id: 2,
    name: "Shelf",
    category: "Shelf",
    image: "/Shelf2.jpg",
  },
  {
    id: 3,
    name: "Long Sofa",
    category: "Living room",
    image: "/LongSofa.jpg",
  },
  {
    id: 4,
    name: "Dinning Chair",
    category: "Chairs",
    image: "/Chair.jpg",
  },
  {
    id: 5,
    name: "TV Stand",
    category: "Living Room",
    image: "/TV.jpg",
  },
  {
    id: 6,
    name: "Wardrobe",
    category: "Bedroom",
    image: "/Wardrope.jpg",
  },
  {
    id: 7,
    name: "Standard Kitchen Cabinet",
    category: "Kitchen",
    image: "/Kitchen.jpg",
  },
  {
    id: 8,
    name: "Mini Kitchen Cabinet",
    category: "Kitchen",
    image: "/Kitchen-cabinet.jpg",
  },
  {
    id: 9,
    name: "Hand Crafted Wardrobe",
    category: "Handcrafted Arts",
    image: "/Wardrobe2.jpg",
  },
  {
    id: 10,
    name: "Hand Crafted Wooden Dresser",
    category: "Handcrafted Arts",
    image: "/Wooden-Dreser.jpg",
  },
  {
    id: 11,
    name: "Hand Crafted Military Eagle",
    category: "Handcrafted Arts",
    image: "/Military-Eagle.jpg",
  },
  {
    id: 12,
    name: "Sofa",
    category: "Sofa's",
    image: "/Couch2.jpg",
  },
  {
    id: 13,
    name: "Black Sofa",
    category: "Living Room",
    image: "/BlackSofa.jpg",
  },
  {
    id: 14,
    name: "Wardrobe",
    category: "Bedroom",
    image: "/Wardroe3.jpg",
  },
  {
    id: 15,
    name: "Wardrobe",
    category: "Bedroom",
    image: "/wardrobe4.jpg",
  },
  {
    id: 16,
    name: "Comfort Chair",
    category: "Living Room",
    image: "/Confort-chair.jpg",
  },
  {
    id: 17,
    name: " Luxury Bed",
    category: "Bedroom",
    image: "/Bes2.jpg",
  },
  {
    id: 18,
    name: "Comfortable Bed",
    category: "Bedroom",
    image: "/Bed1.jpg",
  },
];

const Products = () => {
  return (
    <main>
      {/* Hero */}
      <section
        className="relative min-h-screen bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: "url('/Logo.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 text-center text-white px-6">
          <h1 className="text-5xl md:text-6xl font-bold">
            Our Products
          </h1>

          <p className="mt-5 max-w-2xl mx-auto text-lg text-gray-200">
            Browse our collection of premium handcrafted furniture designed
            for comfort, elegance, and durability.
          </p>
        </div>
      </section>

      {/* Products */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold">
              Furniture Collection
            </h2>

            <p className="mt-4 text-gray-600">
              Discover furniture for every room in your home and office.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:-translate-y-2 hover:shadow-xl transition"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-72 object-cover"
                />

                <div className="p-6">
                  <span className="text-amber-700 text-sm font-semibold">
                    {product.category}
                  </span>

                  <h3 className="mt-2 text-2xl font-bold">
                    {product.name}
                  </h3>
                  <Link to="/contact">
                  <button className="mt-6 w-full bg-amber-700 text-white py-3 rounded-lg hover:bg-amber-800 transition cursor-pointer">
                    Get Yours
                  </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-amber-700 py-20 text-white">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl font-bold">
            Looking for Custom Furniture?
          </h2>

          <p className="mt-5 text-lg text-amber-100">
            We design and build furniture tailored to your style, space,
            and specific needs.
          </p>
            <Link to="/contact">
            <button className="mt-8 bg-white text-amber-700 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition cursor-pointer">
            Request a Free Quote
          </button>
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Products;