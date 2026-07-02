import Image from "next/image";
import Link from "next/link";

const services = [
  { name: "Standard Cleaning", price: "$280" },
  { name: "Deep Cleaning", price: "$460" },
  { name: "Move-In/Move-Out", price: "$290" },
  { name: "Airbnb Turnover", price: "$300" },
  { name: "Commercial Cleaning", price: "$430" },
];

const galleryImages = [
  "IMG_0685.jpeg",
  "IMG_0689.jpeg",
  "IMG_0690.jpeg",
  "IMG_0691.jpeg",
  "image.png",
  "logo2.png",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-[#04263a]">
      <header className="sticky top-0 z-50 backdrop-blur bg-white/60 border-b border-white/30">
        <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="#home" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#d4af37] flex items-center justify-center text-white font-bold">G</div>
            <span className="font-semibold text-lg">The Gleam Clean Team LLC</span>
          </Link>

          <div className="hidden md:flex items-center gap-6 text-sm font-medium">
            <a href="#home" className="hover:text-[#0fb9b1]">Home</a>
            <a href="#services" className="hover:text-[#0fb9b1]">Services</a>
            <a href="#gallery" className="hover:text-[#0fb9b1]">Gallery</a>
            <a href="#contact" className="hover:text-[#0fb9b1]">Contact</a>
          </div>

          <div className="md:hidden">
            <a href="#contact" className="text-sm font-medium text-[#04263a]">Contact</a>
          </div>
        </nav>
      </header>

      <section id="home" className="bg-gradient-to-b from-[#04263a] via-[#0b4f55] to-white text-white">
        <div className="max-w-6xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-4">The Gleam Clean Team LLC</h1>
            <p className="text-xl md:text-2xl mb-4">Professional Residential & Commercial Cleaning Services</p>
            <p className="text-lg mb-6 text-[#f3f3f3] italic">We Don't Just Clean Spaces — We Create Peace of Mind.</p>

            <div className="flex gap-4 justify-center md:justify-start flex-wrap">
              <a href="#contact" className="bg-[#d4af37] text-[#04263a] px-6 py-3 rounded-lg font-semibold shadow-md hover:opacity-95">Get Free Quote</a>
              <a href="tel:+18049630985" className="bg-white text-[#04263a] px-6 py-3 rounded-lg font-semibold shadow-md">Call Now</a>
            </div>

            <p className="mt-6 text-sm text-white/80">Serving Richmond • Henrico • Chesterfield • Midlothian • Goochland • Cumberland</p>
          </div>

          <div className="flex justify-center md:justify-end">
            <div className="w-56 h-56 md:w-72 md:h-72 rounded-xl overflow-hidden ring-4 ring-white/30 shadow-lg bg-white">
              <Image src="/images/image.png" alt="Owner Tessa Gaskin" width={500} height={500} className="object-cover w-full h-full" />
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          <div className="md:col-span-2">
            <h2 className="text-3xl font-bold mb-4 text-[#04263a]">About</h2>
            <p className="text-lg mb-4">Tessa Gaskin is the Owner of The Gleam Clean Team LLC. With a passion for exceptional service and an eye for detail, Tessa built the company to provide premium residential and commercial cleaning with professionalism, trust, and care.</p>
            <p className="text-sm text-gray-600">Minimum booking $200 • 30% deposit required • $30 travel fee • Weekend appointments available upon request.</p>
          </div>

          <div className="flex justify-center md:justify-end">
            <div className="w-40 h-40 rounded-xl overflow-hidden ring-2 ring-[#d4af37] shadow-sm">
              <Image src="/images/image.png" alt="Tessa Gaskin" width={400} height={400} className="object-cover w-full h-full" />
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="bg-white/60 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-[#04263a] mb-6">Services</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <div key={s.name} className="border rounded-2xl p-6 shadow-sm hover:shadow-md transition">
                <h3 className="font-semibold text-xl mb-2">{s.name}</h3>
                <p className="text-2xl font-bold text-[#04263a] mb-4">{s.price}</p>
                <p className="text-sm text-gray-600">Professional cleaners, eco-friendly products, and meticulous attention to detail.</p>
              </div>
            ))}
          </div>

          <div className="mt-6 text-sm text-gray-700">
            <p><strong>Minimum booking:</strong> $200</p>
            <p><strong>Deposit:</strong> 30% required</p>
            <p><strong>Travel fee:</strong> $30</p>
            <p><strong>Weekend appointments:</strong> Available upon request</p>
          </div>
        </div>
      </section>

      <section id="gallery" className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-[#04263a] mb-6">Gallery</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {galleryImages.map((img) => (
            <div key={img} className="rounded-lg overflow-hidden bg-gray-100">
              <Image src={`/images/${img}`} alt={img} width={800} height={600} className="object-cover w-full h-48 sm:h-40 md:h-32" />
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="bg-[#f8fafb] py-16">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-3xl font-bold text-[#04263a] mb-4">Contact</h2>
            <p className="mb-2"><strong>Phone:</strong> <a href="tel:+18049630985" className="text-[#0fb9b1]">(804) 963-0985</a></p>
            <p className="mb-2"><strong>Email:</strong> <a href="mailto:gaskintessa1@gmail.com" className="text-[#0fb9b1]">gaskintessa1@gmail.com</a></p>
            <p className="mb-2"><strong>Facebook:</strong> The Gleam Clean Team LLC</p>

            <div className="mt-4">
              <h4 className="font-semibold">Service Areas</h4>
              <ul className="list-inside list-disc text-sm text-gray-700">
                <li>Richmond</li>
                <li>Henrico</li>
                <li>Chesterfield</li>
                <li>Midlothian</li>
                <li>Goochland</li>
                <li>Cumberland</li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-md flex flex-col justify-center">
            <h3 className="font-semibold mb-2">Request a Free Quote</h3>
            <p className="text-sm text-gray-600 mb-4">Call or email to schedule service or ask for a custom estimate.</p>
            <div className="flex gap-3">
              <a href="tel:+18049630985" className="flex-1 text-center bg-[#04263a] text-white py-3 rounded-lg">Call (804) 963-0985</a>
              <a href="mailto:gaskintessa1@gmail.com" className="flex-1 text-center border border-[#04263a] text-[#04263a] py-3 rounded-lg">Email</a>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-8 text-center text-sm text-gray-600">
        © {new Date().getFullYear()} The Gleam Clean Team LLC. All rights reserved.
      </footer>
    </main>
  );
}