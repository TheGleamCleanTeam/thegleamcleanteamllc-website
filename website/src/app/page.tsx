import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">

      {/* Navigation */}
      <header className="sticky top-0 z-50 bg-white shadow-md">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          <h1 className="text-2xl font-bold text-[#0b3c5d]">
            The Gleam Clean Team LLC
          </h1>

          <nav className="hidden md:flex gap-8 font-medium">
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#gallery">Gallery</a>
            <a href="/book">Contact</a>
          </nav>

        
           
          <a
  
  href="tel:8049630985"
  className="mr-4 font-semibold text-[#0b2f4a] hover:text-[#d4af37]"
>
  📞 (804) 963-0985
</a>

<a
  href="/book"
  className="bg-[#d4af37] hover:bg-yellow-500 text-white px-6 py-3 rounded-full font-semibold"
>
  Get Free Quote
</a>
        </div>
      </header>

      {/* Hero */}

      <section className="bg-gradient-to-br from-[#0b3c5d] via-[#1d5c88] to-[#6fa9c9] text-white">

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-12 px-8 py-24">

          <div>

            <h2 className="text-5xl font-extrabold leading-tight">
              Luxury Residential &
              <br />
              Commercial Cleaning
            </h2>

            <p className="mt-6 text-xl text-gray-200">
              Professional cleaning services serving Richmond and surrounding
              areas.
            </p>

            <div className="mt-10 flex gap-4">

              <a
                href="/book"
                className="bg-[#d4af37] px-8 py-4 rounded-full text-lg font-semibold"
              >
                Get Free Quote
              </a>

              <a
                href="tel:8049630985"
                className="border border-white px-8 py-4 rounded-full text-lg"
              >
                Call Now
              </a>

            </div>

          </div>

          <div className="flex justify-center">

            <Image
              src="/images/headshot.png"
              alt="The Gleam Clean Team"
              width={450}
              height={450}
              className="rounded-3xl shadow-2xl"
            />

          </div>

        </div>

      </section>
      {/* About */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-4xl font-bold text-center text-[#0b3c5d]">
            About The Gleam Clean Team
          </h2>

          <p className="mt-8 max-w-3xl mx-auto text-center text-lg text-gray-700 leading-8">
            The Gleam Clean Team LLC proudly serves Richmond, Virginia and the
            surrounding communities with dependable residential, commercial,
            move-in, move-out, Airbnb turnover, and deep cleaning services.
            Every cleaning is completed with attention to detail, reliability,
            and professional care so your home or business looks its absolute
            best.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <div className="text-5xl mb-4">🏠</div>
              <h3 className="text-2xl font-bold mb-3">Residential Cleaning</h3>
              <p>
                Weekly, bi-weekly, monthly and one-time home cleaning services.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <div className="text-5xl mb-4">🏢</div>
              <h3 className="text-2xl font-bold mb-3">Commercial Cleaning</h3>
              <p>
                Offices, retail spaces and businesses cleaned professionally.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <div className="text-5xl mb-4">✨</div>
              <h3 className="text-2xl font-bold mb-3">Deep Cleaning</h3>
              <p>
                Perfect for first-time clients, seasonal cleaning and special
                occasions.
              </p>
            </div>
          </div>
        </div>
      </section>
            {/* Services */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-4xl font-bold text-center text-[#0b3c5d]">
            Our Cleaning Services
          </h2>

          <p className="mt-4 text-center text-gray-600 max-w-3xl mx-auto">
            We provide reliable, detail-oriented cleaning services tailored to
            your home or business.
          </p>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

  <div className="bg-white rounded-2xl shadow-lg p-8">
    <h3 className="text-2xl font-bold mb-3">Standard Cleaning</h3>
    <p className="text-gray-600">
      Routine cleaning to keep your home fresh, clean, and inviting.
    </p>
  </div>

  <div className="bg-white rounded-2xl shadow-lg p-8">
    <h3 className="text-2xl font-bold mb-3">Deep Cleaning</h3>
    <p className="text-gray-600">
      Detailed top-to-bottom cleaning for kitchens, bathrooms, bedrooms, and more.
    </p>
  </div>

  <div className="bg-white rounded-2xl shadow-lg p-8">
    <h3 className="text-2xl font-bold mb-3">Move-In / Move-Out</h3>
    <p className="text-gray-600">
      Leave your old home spotless or move into a perfectly clean one.
    </p>
  </div>

  <div className="bg-white rounded-2xl shadow-lg p-8">
    <h3 className="text-2xl font-bold mb-3">Commercial Cleaning</h3>
    <p className="text-gray-600">
      Professional office and commercial cleaning customized to your business.
    </p>
  </div>

  <div className="bg-white rounded-2xl shadow-lg p-8">
    <h3 className="text-2xl font-bold mb-3">Airbnb Turnovers</h3>
    <p className="text-gray-600">
      Fast, reliable turnover cleaning to keep every guest impressed.
    </p>
  </div>

  <div className="bg-[#0b3c5d] text-white rounded-2xl shadow-lg p-8">
    <h3 className="text-2xl font-bold mb-3">Book Today</h3>
    <p>
      Ready for a spotless home or office? Get your free quote today.
    </p>

    <a
      href="/book"
      className="inline-block mt-6 bg-[#d4af37] hover:bg-yellow-500 text-white px-6 py-3 rounded-full font-semibold"
    >
      Get Free Quote
    </a>
  </div>

</div>
        </div>  
      </section>
            {/* Gallery */}
      <section id="gallery" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-8">

          <h2 className="text-4xl font-bold text-center text-[#0b3c5d]">
            Our Recent Work
          </h2>

          <p className="mt-4 text-center text-gray-600 max-w-3xl mx-auto">
            See the quality of our work. We'll replace these placeholders with your own cleaning photos.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mt-16">

            <div className="h-80 rounded-2xl bg-gray-200 flex items-center justify-center text-gray-500 text-xl shadow-lg">
              Photo Coming Soon
            </div>

            <div className="h-80 rounded-2xl bg-gray-200 flex items-center justify-center text-gray-500 text-xl shadow-lg">
              Photo Coming Soon
            </div>

            <div className="h-80 rounded-2xl bg-gray-200 flex items-center justify-center text-gray-500 text-xl shadow-lg">
              Photo Coming Soon
            </div>

          </div>

        </div>
      </section>
            {/* Pricing */}
      <section id="pricing" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-8">

          <h2 className="text-4xl font-bold text-center text-[#0b3c5d]">
            Transparent Pricing
          </h2>

          <p className="mt-4 text-center text-gray-600 max-w-3xl mx-auto">
            Simple, honest pricing with no hidden fees.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold">Standard Cleaning</h3>
              <p className="text-5xl font-bold text-[#0b3c5d] mt-4">$200</p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold">Deep Cleaning</h3>
              <p className="text-5xl font-bold text-[#0b3c5d] mt-4">$360</p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold">Move-In / Move-Out</h3>
              <p className="text-5xl font-bold text-[#0b3c5d] mt-4">$400</p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold">Airbnb Turnover</h3>
              <p className="text-5xl font-bold text-[#0b3c5d] mt-4">$280</p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold">Commercial Cleaning</h3>
              <p className="text-5xl font-bold text-[#0b3c5d] mt-4">From $420</p>
            </div>

            <div className="bg-[#0b3c5d] text-white rounded-2xl shadow-lg p-8 flex flex-col justify-center">
              <h3 className="text-2xl font-bold">Need Something Custom?</h3>
              <p className="mt-4">
                Contact us for a personalized quote based on your cleaning needs.
              </p>

              <a
                href="/book"
                className="inline-block mt-6 bg-[#d4af37] hover:bg-yellow-500 text-white px-6 py-3 rounded-full font-semibold text-center"
              >
                Request a Quote
              </a>
            </div>

          </div>

        </div>
      </section>
            {/* Reviews */}
      <section id="reviews" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-8">

          <h2 className="text-4xl font-bold text-center text-[#0b3c5d]">
            What Our Clients Say
          </h2>

          <p className="mt-4 text-center text-gray-600">
            We take pride in delivering exceptional cleaning services.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mt-16">

            <div className="bg-gray-50 rounded-2xl shadow-lg p-8">
              <div className="text-2xl mb-4">⭐⭐⭐⭐⭐</div>
              <p className="italic">
                "Excellent service! My house has never looked this clean. Highly recommend!"
              </p>
              <h4 className="font-bold mt-6">— Happy Customer</h4>
            </div>

            <div className="bg-gray-50 rounded-2xl shadow-lg p-8">
              <div className="text-2xl mb-4">⭐⭐⭐⭐⭐</div>
              <p className="italic">
                "Professional, friendly, and very detailed. We'll definitely book again."
              </p>
              <h4 className="font-bold mt-6">— Repeat Client</h4>
            </div>

            <div className="bg-gray-50 rounded-2xl shadow-lg p-8">
              <div className="text-2xl mb-4">⭐⭐⭐⭐⭐</div>
              <p className="italic">
                "The best cleaning company we've hired. Everything looked amazing!"
              </p>
              <h4 className="font-bold mt-6">— Richmond Homeowner</h4>
            </div>

          </div>

        </div>
      </section>
    </main>
  );
}      