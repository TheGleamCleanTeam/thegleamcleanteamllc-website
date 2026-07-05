export default function PricingPage() {
  const services = [
    {
      name: "Standard Cleaning",
      price: "$200",
      description:
        "Perfect for maintaining a clean and comfortable home. Includes kitchens, bathrooms, bedrooms, living areas, dusting, vacuuming, and mopping.",
    },
    {
      name: "Deep Cleaning",
      price: "$360",
      description:
        "A detailed top-to-bottom cleaning designed for homes needing extra attention. Great for seasonal cleaning or first-time visits.",
    },
    {
      name: "Move-In / Move-Out Cleaning",
      price: "$400",
      description:
        "Comprehensive cleaning to prepare your home before moving in or after moving out.",
    },
    {
      name: "Commercial Cleaning",
      price: "Starting at $420",
      description:
        "Professional cleaning services for offices, retail spaces, and commercial properties.",
    },
    {
      name: "Airbnb Turnover",
      price: "$280",
      description:
        "Fast, reliable turnover cleaning to ensure every guest arrives to a spotless property.",
    },
  ];

  return (
    <main className="min-h-screen bg-slate-900 text-white">
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h1 className="text-5xl font-bold text-center">
          Pricing
        </h1>

        <p className="text-center text-gray-300 mt-4 max-w-2xl mx-auto">
          Transparent pricing with no hidden fees. Every home is unique, so final
          pricing may vary based on size, condition, and requested services.
        </p>

        <div className="grid gap-8 mt-12 md:grid-cols-2">
          {services.map((service) => (
            <div
              key={service.name}
              className="rounded-2xl bg-white text-gray-900 p-8 shadow-xl"
            >
              <h2 className="text-2xl font-bold text-slate-800">
                {service.name}
              </h2>

              <p className="text-3xl font-bold text-yellow-600 mt-4">
                {service.price}
              </p>

              <p className="mt-4 text-gray-600">
                {service.description}
              </p>

              <a
                href="/#contact"
                className="inline-block mt-8 bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-full font-semibold"
              >
                Request a Free Quote
              </a>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold">
            Need a Custom Quote?
          </h2>

          <p className="mt-4 text-gray-300">
            Contact The Gleam Clean Team LLC today for a personalized estimate
            based on your home's size and cleaning needs.
          </p>

          <a
            href="tel:8049630985"
            className="inline-block mt-8 border border-white px-8 py-3 rounded-full hover:bg-white hover:text-slate-900 transition"
          >
            📞 Call (804) 963-0985
          </a>
        </div>
      </section>
    </main>
  );
}