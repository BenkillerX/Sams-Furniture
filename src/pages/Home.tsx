import { ArrowRight, Truck, ShieldCheck, Sofa, Star } from "lucide-react";

const Home = () => {
  const featuredProducts = [
    {
      title: "Luxury Sofa",
      image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800",
    },
    {
      title: "Modern Dining Set",
      image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800",
    },
    {
      title: "Classic Wooden Chair",
      image: "https://images.unsplash.com/photo-1519947486511-46149fa0a254?w=800",
    },
  ];

  return (
    <main>
      {/* Hero Section */}
      <section
        id="home"
        className="bg-stone-100 min-h-screen flex items-center"
      >
        <div className="max-w-7xl mx-auto px-6 py-10 grid lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div>

            <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-extrabold text-stone-900 leading-tight">
              Transform Your Space With Elegant Furniture
            </h1>

            <p className="mt-6 text-gray-600 text-lg leading-8">
              Discover handcrafted furniture designed for comfort, durability,
              and timeless beauty. From living rooms to offices, we create
              pieces that bring your vision to life.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <button className="bg-amber-700 hover:bg-amber-800 text-white px-7 py-4 rounded-lg flex items-center justify-center gap-2 transition">
                Explore Collection
                <ArrowRight size={20} />
              </button>

              <button className="border-2 border-stone-900 hover:bg-stone-900 hover:text-white px-7 py-4 rounded-lg transition">
                Contact Us
              </button>
            </div>

            <div className="mt-10 flex flex-wrap gap-8">
              <div>
                <h2 className="text-3xl font-bold text-stone-900">500+</h2>
                <p className="text-gray-500">Happy Clients</p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-stone-900">10+</h2>
                <p className="text-gray-500">Years Experience</p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-stone-900">1000+</h2>
                <p className="text-gray-500">Furniture Delivered</p>
              </div>
            </div>
          </div>

          {/* Right */}
          <div>
            <img
              src="/SamLeg.jpg"
              alt="Luxury Furniture"
              className="rounded-3xl shadow-2xl w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Featured Furniture */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-stone-900">
              Featured Furniture
            </h2>

            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Explore some of our most loved furniture collections crafted with
              premium materials and modern designs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">
            {featuredProducts.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:-translate-y-2 hover:shadow-2xl transition duration-300"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-72 w-full object-cover"
                />

                <div className="p-6">
                  <h3 className="text-2xl font-bold">{item.title}</h3>

                  <button className="mt-5 bg-amber-700 text-white px-5 py-3 rounded-lg hover:bg-amber-800 transition">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-stone-100 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center">
            Why Choose Us
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-14">
            <div className="bg-white p-8 rounded-2xl shadow">
              <Truck className="text-amber-700 mb-4" size={40} />
              <h3 className="font-bold text-xl">Fast Delivery</h3>
              <p className="mt-3 text-gray-600">
                Reliable and timely delivery to your doorstep.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow">
              <ShieldCheck className="text-amber-700 mb-4" size={40} />
              <h3 className="font-bold text-xl">Quality Guarantee</h3>
              <p className="mt-3 text-gray-600">
                Durable furniture built with premium materials.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow">
              <Sofa className="text-amber-700 mb-4" size={40} />
              <h3 className="font-bold text-xl">Custom Designs</h3>
              <p className="mt-3 text-gray-600">
                Furniture tailored to suit your taste and space.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow">
              <Star className="text-amber-700 mb-4" size={40} />
              <h3 className="font-bold text-xl">Trusted by Clients</h3>
              <p className="mt-3 text-gray-600">
                Hundreds of satisfied customers across the country.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-amber-700 text-white py-20">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl font-bold">
            Ready to Transform Your Space?
          </h2>

          <p className="mt-5 text-lg text-amber-100">
            Let us help you create a beautiful and comfortable environment with
            furniture designed just for you.
          </p>

          <button className="mt-8 bg-white text-amber-700 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition">
            Request a Free Quote
          </button>
        </div>
      </section>
    </main>
  );
};

export default Home;