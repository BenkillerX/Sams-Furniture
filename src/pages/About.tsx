import { Award, Users, Hammer, CheckCircle } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: <Award size={40} className="text-amber-700" />,
      title: "Quality Craftsmanship",
      description:
        "Every piece of furniture is carefully crafted using premium materials and attention to detail.",
    },
    {
      icon: <Users size={40} className="text-amber-700" />,
      title: "Customer Satisfaction",
      description:
        "Our clients are at the heart of everything we do, delivering furniture that exceeds expectations.",
    },
    {
      icon: <Hammer size={40} className="text-amber-700" />,
      title: "Custom Designs",
      description:
        "We create furniture tailored to suit your style, space, and personal preferences.",
    },
    {
      icon: <CheckCircle size={40} className="text-amber-700" />,
      title: "Trusted Service",
      description:
        "Years of experience have earned us the trust of homeowners and businesses alike.",
    },
  ];

  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="bg-stone-100 py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-stone-900">
            SAMLEK
          </h1>

          <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-600 leading-8">
            We specialize in creating beautiful, durable, and functional
            furniture that transforms homes, offices, hotels, and commercial
            spaces into elegant environments.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1513694203232-719a280e022f?w=1200"
              alt="Furniture Workshop"
              className="rounded-2xl shadow-xl w-full object-cover"
            />
          </div>

          <div>
            <span className="text-amber-700 font-semibold uppercase tracking-widest">
              Our Story
            </span>

            <h2 className="text-4xl font-bold mt-4 text-stone-900">
              Crafting Furniture That Lasts for Generations
            </h2>

            <p className="mt-6 text-gray-600 leading-8">
              Since our establishment, we have been committed to designing
              furniture that combines comfort, elegance, and durability. Every
              product reflects our passion for quality craftsmanship and timeless
              design.
            </p>

            <p className="mt-5 text-gray-600 leading-8">
              Whether you're furnishing your home, office, or commercial space,
              our experienced team ensures every piece meets the highest
              standards of quality and style.
            </p>

            <button className="mt-8 bg-amber-700 text-white px-7 py-3 rounded-lg hover:bg-amber-800 transition">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-stone-100 py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-3xl font-bold text-stone-900">Our Mission</h3>

            <p className="mt-5 text-gray-600 leading-8">
              To provide high-quality furniture that blends functionality,
              comfort, and exceptional craftsmanship while delivering excellent
              customer service.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-3xl font-bold text-stone-900">Our Vision</h3>

            <p className="mt-5 text-gray-600 leading-8">
              To become a trusted leader in the furniture industry by creating
              inspiring spaces through innovative designs and lasting quality.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-stone-900">
              Why People Choose Us
            </h2>

            <p className="mt-5 text-gray-600 max-w-2xl mx-auto">
              We combine creativity, quality materials, and expert craftsmanship
              to deliver furniture our customers love.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-14">
            {values.map((item, index) => (
              <div
                key={index}
                className="bg-white shadow-lg rounded-2xl p-8 hover:-translate-y-2 transition duration-300"
              >
                {item.icon}

                <h3 className="text-xl font-bold mt-6">{item.title}</h3>

                <p className="mt-4 text-gray-600 leading-7">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-amber-700 text-white py-20">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          <div>
            <h2 className="text-4xl font-bold">10+</h2>
            <p className="mt-2">Years Experience</p>
          </div>

          <div>
            <h2 className="text-4xl font-bold">500+</h2>
            <p className="mt-2">Happy Clients</p>
          </div>

          <div>
            <h2 className="text-4xl font-bold">1000+</h2>
            <p className="mt-2">Projects Completed</p>
          </div>

          <div>
            <h2 className="text-4xl font-bold">100%</h2>
            <p className="mt-2">Quality Assurance</p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;