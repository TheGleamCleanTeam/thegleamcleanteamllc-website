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
            <a href="#contact">Contact</a>
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

    </main>
  );
}