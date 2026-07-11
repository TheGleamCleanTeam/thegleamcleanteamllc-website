import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen">

      
{/* Navigation */}
<header className="fixed top-0 left-0 w-full z-50">
  <div className="max-w-7xl mx-auto px-6 pt-6">
    <div className="backdrop-blur-2xl bg-white/10 border border-white/15 rounded-full px-8 py-4 flex items-center justify-between shadow-2xl">

      <div className="flex items-center gap-4">
        <Image
          src="/images/logo.png"
          alt="The Gleam Clean Team LLC"
          width={72}
          height={72}
          className="rounded-full"
        />

        <div>
          <h1 className="text-xl font-bold text-white">
            The Gleam Clean Team
          </h1>

          <p className="text-xs uppercase tracking-[0.3em] text-[#f2d67c]">
            Luxury Cleaning Services
          </p>
        </div>
      </div>

      <nav className="hidden lg:flex gap-8 font-semibold text-white">
        <a href="#about" className="hover:text-[#D4AF37] transition">
          About
        </a>

        <a href="#services" className="hover:text-[#D4AF37] transition">
          Services
        </a>

        <a href="#gallery" className="hover:text-[#D4AF37] transition">
          Gallery
        </a>

        <a
          href="/booking-policy"
          className="hover:text-[#D4AF37] transition"
        >
          Policy
        </a>
      </nav>

      <a
        href="/book"
        className="bg-gradient-to-r from-[#D4AF37] to-[#f2d67c] hover:scale-105 transition px-8 py-3 rounded-full font-bold text-white shadow-lg"
      >
        Book Now
      </a>

    </div>
  </div>
</header>

{/* Hero */}
<section className="relative overflow-hidden pt-48 pb-32">

  <div className="absolute inset-0 bg-gradient-to-br from-[#062644] via-[#173d73] to-[#445f99]" />

  <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">

    <div>

      <span className="inline-block mb-6 px-5 py-2 rounded-full bg-white/20 text-[#D4AF37] font-semibold tracking-[0.2em] uppercase">
        Richmond's Luxury Cleaning Company
      </span>

      <h2 className="text-6xl lg:text-7xl font-black leading-tight text-white">
        Luxury Cleaning,
        <br />
        <span className="text-[#ff5ba7]">
          Beautiful Results.
        </span>
      </h2>

      <p className="mt-8 text-xl leading-10 text-white/90 max-w-2xl">
        Experience meticulous, detail-focused cleaning for your home or
        business throughout Richmond and the surrounding areas.
      </p>

      <div className="mt-12 flex flex-wrap gap-6">

        <a
          href="/book"
          className="bg-gradient-to-r from-[#D4AF37] via-[#e5c55a] to-[#f2d67c] hover:scale-105 transition px-10 py-4 rounded-full font-bold text-white shadow-xl"
        >
          Book Your Cleaning
        </a>

        <a
          href="tel:8049630985"
          className="glass px-10 py-4 rounded-full font-bold text-white"
        >
          📞 (804) 963-0985
        </a>

      </div>

    </div>

    <div className="relative flex justify-center">

      <div className="glass p-4 rounded-[42px] border border-white/20 shadow-2xl">
        <Image
          src="/images/headshot.png"
          alt="Owner"
          width={500}
          height={620}
          className="rounded-[32px]"
        />
      </div>

    </div>

  </div>

</section>

      {/* New Customer Special */}

      <section className="py-20">

        <div className="max-w-6xl mx-auto px-8">

          <div className="glass rounded-[40px] p-12 text-center shadow-2xl">

            <span className="uppercase tracking-[0.35em] text-[#D4AF37] font-bold">
              New Customer Special
            </span>

            <h2 className="mt-6 text-5xl font-black text-[#082B63]">
              Save $25 On Your First Cleaning
            </h2>

            <div className="w-24 h-1 bg-[#D4AF37] rounded-full mx-auto my-8"></div>

            <p className="max-w-3xl mx-auto text-xl leading-9 text-slate-700">

              Experience the luxury difference with The Gleam Clean Team LLC.
              Receive $25 OFF your first residential cleaning and discover why
              homeowners across Richmond trust us with their homes.

            </p>

            <a
              href="/book"
              className="inline-block mt-10 bg-gradient-to-r from-[#D4AF37] to-[#e8c253] hover:scale-105 transition px-10 py-4 rounded-full text-white font-bold shadow-xl"
            >
              Claim My Discount
            </a>

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
                "I am listing my home in Short Pump for sale next week and used The Gleam Clean Team for a deep clean. They were very thorough, friendly, and hard-working. The owner, Tessa, is so easy to deal with. I highly recommend The Gleam Team for your next cleaning!"
              </p>
              <h4 className="font-bold mt-6">— Dondi Madison</h4>
            </div>

            <div className="bg-white border-2 border-yellow-400 rounded-2xl shadow-xl p-8">
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
      {/* Service Areas */}
      <section id="areas" className="py-20 bg-[#0b3c5d] text-white">
        <div className="max-w-7xl mx-auto px-8 text-center">

          <h2 className="text-4xl font-bold">
            Proudly Serving Richmond & Surrounding Areas
          </h2>

          <p className="mt-6 text-xl text-gray-200">
            We proudly provide professional cleaning services throughout Central Virginia.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mt-12 text-lg">

            <div>📍 Richmond</div>
            <div>📍 Midlothian</div>
            <div>📍 Chesterfield</div>
            <div>📍 Henrico</div>
            <div>📍 Powhatan</div>
            <div>📍 Goochland</div>
            <div>📍 Cumberland</div>
            <div>📍 Glen Allen</div>
            <div>📍 Short Pump</div>

          </div>

          <a
            href="/book"
            className="inline-block mt-12 bg-[#d4af37] hover:bg-yellow-500 text-white px-8 py-4 rounded-full font-semibold"
          >
            Book Your Cleaning Today
          </a>

        </div>
      </section>
      {/* Footer */}
      <footer className="bg-[#06263d] text-white py-12">
        <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-3 gap-10">

          <div>
            <h3 className="text-2xl font-bold">The Gleam Clean Team LLC</h3>
            <p className="mt-4 text-gray-300">
              Professional residential and commercial cleaning services you can trust.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-xl mb-4">Contact</h4>
            <p>📞 (804) 963-0985</p>
            <p>✉️ thegleamcleanteamllc@gmail.com</p>
            <p>Richmond, Virginia</p>
          </div>

          <div>
            <h4 className="font-bold text-xl mb-4">Business Hours</h4>
            <p>Monday–Friday: 8:00 AM – 5:00 PM</p>
            <p>Saturday & Sunday: By Appointment</p>

            <a
              href="/book"
              className="inline-block mt-6 bg-[#d4af37] hover:bg-yellow-500 text-white px-6 py-3 rounded-full font-semibold"
            >
              Book a Cleaning
            </a>
          </div>

        </div>

        <div className="border-t border-gray-600 mt-10 pt-6 text-center text-gray-400">
          © 2026 The Gleam Clean Team LLC. All Rights Reserved.
        </div>
      </footer>
    </main>
  );
}      