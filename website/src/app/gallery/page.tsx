import Image from "next/image";

const galleryImages = [
  {
    src: "/images/IMG_0685.jpeg",
    title: "Luxury Bathroom",
  },
  {
    src: "/images/IMG_0689.jpeg",
    title: "Kitchen Detail",
  },
  {
    src: "/images/IMG_0690.jpeg",
    title: "Fresh Kitchen",
  },
  {
    src: "/images/IMG_0691.jpeg",
    title: "Dining Area",
  },
];

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-slate-900 text-white">
      <section className="max-w-7xl mx-auto px-6 py-20">

        <div className="text-center mb-20">

          <span className="inline-block bg-[#d4af37] text-slate-900 px-5 py-2 rounded-full font-semibold uppercase tracking-widest text-sm mb-6">
            The Gleam Clean Team LLC
          </span>

          <h1 className="text-6xl font-extrabold mb-6">
            Our Work
          </h1>

          <div className="w-24 h-1 bg-[#d4af37] mx-auto rounded-full mb-8"></div>

          <p className="max-w-3xl mx-auto text-xl text-gray-300 leading-8">
            Every home deserves exceptional care. Browse a few of our recent
            cleaning projects and experience the level of detail our clients
            have come to expect.
          </p>

        </div>

        <div className="grid gap-10 md:grid-cols-2">

          {galleryImages.map((image) => (
            <div
              key={image.src}
              className="bg-white rounded-3xl overflow-hidden shadow-2xl hover:-translate-y-2 transition-all duration-500"
            >
              <Image
                src={image.src}
                alt={image.title}
                width={900}
                height={700}
                className="w-full h-[430px] object-cover hover:scale-105 transition duration-700"
              />

              <div className="p-8">

                <h2 className="text-2xl font-bold text-slate-900">
                  {image.title}
                </h2>

                <div className="w-16 h-1 bg-[#d4af37] rounded-full my-4"></div>

                <p className="text-gray-600 leading-7">
                  Professional residential cleaning completed with attention
                  to every detail, leaving the space fresh, spotless, and
                  ready to enjoy.
                </p>

              </div>
            </div>
          ))}

        </div>

        <div className="text-center mt-20">

          <a
            href="/book"
            className="inline-block bg-[#d4af37] hover:bg-yellow-500 text-white font-bold px-10 py-4 rounded-full transition"
          >
            Schedule Your Cleaning
          </a>

        </div>

      </section>
    </main>
  );
}