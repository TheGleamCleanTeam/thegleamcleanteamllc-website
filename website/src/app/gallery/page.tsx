import Image from "next/image";

const projects = [
  {
    title: "Living Room Windows",
    before: "/images/before living room window.jpeg",
    after: "/images/after-windows&floor living room.jpeg",
  },
  {
    title: "Dining Area",
    before: "/images/before dining area.jpeg",
    after: "/images/after dining area.jpeg",
  },
  {
    title: "Hardwood Floors",
    before: "/images/before living room floor.jpeg",
    after: "/images/cleaned&glossed floors.jpeg",
  },
  {
    title: "Second Living Room Window",
    before: "/images/before 2nd living room window.jpeg",
    after: "/images/after-windows&floor living room.jpeg",
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
            Before & After Gallery
          </h1>

          <div className="w-24 h-1 bg-[#d4af37] mx-auto rounded-full mb-8"></div>

          <p className="max-w-3xl mx-auto text-xl text-gray-300 leading-8">
            We take pride in delivering exceptional results. See the difference
            our professional cleaning services make with these real before and
            after photos from recent projects.
          </p>

        </div>

        <div className="space-y-12">

          {projects.map((project) => (

            <div
              key={project.title}
              className="bg-white rounded-3xl shadow-2xl overflow-hidden"
            >

              <div className="p-8">

                <h2 className="text-3xl font-bold text-[#0b3c5d] text-center">
                  {project.title}
                </h2>

                <div className="w-20 h-1 bg-[#d4af37] rounded-full mx-auto my-5"></div>

                <div className="grid md:grid-cols-2 gap-8">

                  <div>

                    <h3 className="text-center text-red-600 font-bold text-xl mb-4">
                      BEFORE
                    </h3>

                    <Image
                      src={project.before}
                      alt={`${project.title} Before`}
                      width={900}
                      height={700}
                      className="rounded-2xl shadow-lg w-full h-[420px] object-cover"
                    />

                  </div>

                  <div>

                    <h3 className="text-center text-green-600 font-bold text-xl mb-4">
                      AFTER
                    </h3>

                    <Image
                      src={project.after}
                      alt={`${project.title} After`}
                      width={900}
                      height={700}
                      className="rounded-2xl shadow-lg w-full h-[420px] object-cover"
                    />

                  </div>

                </div>

              </div>

            </div>

          ))}

        </div>

        <div className="bg-white rounded-3xl shadow-xl mt-20 p-10 text-center">

          <h2 className="text-4xl font-bold text-[#0b3c5d] mb-6">
            Ready for Results Like These?
          </h2>

          <p className="text-gray-600 text-lg mb-8 max-w-3xl mx-auto">
            Whether you need recurring service, a deep clean, or a move-in/move-out
            cleaning, The Gleam Clean Team LLC is ready to help make your home shine.
          </p>

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