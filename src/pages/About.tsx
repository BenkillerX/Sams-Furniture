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
const services = [
  {
    title: "Home & Residential",
    description:
      "Replace this text with details about your home and residential furniture services.",
  },
  {
    title: "Smart Cabimetry & Wardrobes",
    description:
      "Handcrafted kitchen cainets, closets, and storage units built high-grade plywood to maximise your space beautifully.",
  },
  {
    title: "Hotels, Hostels & Hospitality",
    description:
      "Heavy-duty, long-lasting beds, wardrobes, study desks, and lounge furniture built to hande dauly use while looking great.",
  },
  {
    title: "Restaurants & Cafes",
    description:
      "Custom dining tables, booths bar counters, and seating designed to fit your layout and match your dining aestgetic perfectly.",
  },
  {
    title: "Expert Repairs and Restoration",
    description:
      "Don't throw away quality. We professionally repair and restore damaged or worn-out furniture to make it look and feel brand new again..",
  },
];
  return (
    <main className="bg-white">
      {/* Hero */}
    <section
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: "url('/Logo.jpg')",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold">
          SAMLEK
        </h1>

        <p className="mt-8 text-lg md:text-xl leading-8 text-gray-200">
          We specialize in creating beautiful, durable, and functional furniture
          that transforms homes, offices, hotels, and commercial spaces into
          elegant environments.
        </p>
      </div>
    </section>

      {/* Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <img
              src="/SamLeg.jpg"
              alt="Furniture Workshop"
              className="rounded-2xl shadow-xl w-full object-cover"
            />
          </div>

          <div>
            <span className="text-amber-700 font-semibold uppercase tracking-widest">
              Our Story
            </span>

            <h2 className="text-4xl font-bold mt-4 text-stone-900">
              Where craftsmanship meets mordern living
            </h2>

            <p className="mt-6 text-gray-600 leading-8">
              We don't just build furniture, we make pieces that actually bring a room together. At Samlek Furniture, we combine premium hardwood with high-grade, durable plywood to build funtional art.
            </p>

            <p className="mt-5 text-gray-600 leading-8">
              Whether it's solid dining table where yuor family gathers or sleek, custom cabinetry deisgned to finally organize your space, everything we craft is built by hand with care and precision, and an eye for detail. We belive furniture should look incredible, feel comfortable and last a lifetime.
            </p>
          </div>
        </div>
      </section>

{/* What We Do */}
<section className="py-20 bg-white">
  <div className="max-w-7xl mx-auto px-6">
    <div className="text-center">
      <span className="text-amber-700 font-semibold uppercase tracking-widest">
        What We Do
      </span>

      <h2 className="text-4xl font-bold text-stone-900 mt-3">
        Furniture Crafted for Every Space
      </h2>

      <p className="mt-5 max-w-3xl mx-auto text-gray-600 leading-8">
       At Samlek Furniture, we design, build, and repair premium furniture for a wide variety of spaces:
      </p>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
  {services.map((service, index) => (
    <div
      key={index}
      className="bg-stone-100 p-8 rounded-2xl hover:shadow-xl hover:-translate-y-2 transition duration-300"
    >
      <h3 className="text-2xl font-bold text-stone-900">
        {service.title}
      </h3>

      <p className="mt-4 text-gray-600 leading-7">
        {service.description}
      </p>
    </div>
  ))}
</div>
  </div>
</section>
{/* Our Craftmanship */}
<section className="py-20 bg-stone-100">
  <div className="max-w-7xl mx-auto px-6">

    {/* Heading */}
    <div className="text-center max-w-3xl mx-auto">
      <span className="text-amber-700 uppercase tracking-widest font-semibold">
        Behind The Scenes
      </span>

      <h2 className="mt-3 text-4xl md:text-5xl font-bold text-stone-900">
        See Our Craftsmanship
      </h2>

      <p className="mt-5 text-gray-600 leading-8">
        Every masterpiece begins with skilled hands, quality materials, and
        attention to detail. Take a look behind the scenes and see how our
        furniture comes to life.
      </p>
    </div>

    {/* Content */}
    <div className="grid lg:grid-cols-2 gap-12 items-center mt-16">

      {/* Video */}
      <div>
        <video
          
          autoPlay
          muted
          loop
          className="w-full h-72 md:h-96 object-cover rounded-2xl shadow-xl"
        >
          <source src="/workshop.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Text */}
      <div>
        <h3 className="text-3xl font-bold text-stone-900">
          Crafted With Passion
        </h3>

        <p className="mt-6 text-gray-600 leading-8">
          Behind every finished piece is a process built on precision,
          patience, and craftsmanship. Every cut, joint, and finishing touch
          is completed with care to ensure lasting quality.
        </p>

        <p className="mt-5 text-gray-600 leading-8">
          We believe exceptional furniture is more than just appearance. It
          should provide comfort, durability, and timeless elegance for years
          to come. That's why every project receives the attention it deserves
          from start to finish.
        </p>
      </div>

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
            <p className="mt-5 text-gray-600 leading-8">
              To become a trusted leader in the furniture industry by creating
              inspiring spaces through innovative designs and lasting quality.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-3xl font-bold text-stone-900">Our Values</h3>

            <p className="mt-5 text-gray-600 leading-8">
              Uncompromising Quality: We don't belive in shortcuts. By paring high-grade plywood with premium hardwoods and employing professional joinery techniques, we ensure every piece is built to stand the test of time.
            </p>
            <p className="mt-5 text-gray-600 leading-8">
            Your Vision, Our Blueprint: You are the heart of the design process. We collaborate closely with you from the very first sketch to ensure the final result fits your space, your style, and your life perfectly. 
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