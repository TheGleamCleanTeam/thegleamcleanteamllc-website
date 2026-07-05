export default function BookPage() {
  return (
    <main className="min-h-screen bg-slate-900 text-white">
      <section className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-5xl font-bold text-center">
          Book Your Cleaning
        </h1>

        <p className="text-center text-gray-300 mt-4 mb-12">
          Complete the form below and we'll contact you with a free quote.
        </p>

        <form className="bg-white text-gray-900 rounded-2xl shadow-xl p-8 space-y-6">

          <div>
            <label className="block font-semibold mb-2">
              Full Name
            </label>
            <input
              type="text"
              className="w-full border rounded-lg p-3"
              placeholder="Your Name"
            />
          </div>

          <div>
            <label className="block font-semibold mb-2">
              Email Address
            </label>
            <input
              type="email"
              className="w-full border rounded-lg p-3"
              placeholder="you@email.com"
            />
          </div>

          <div>
            <label className="block font-semibold mb-2">
              Phone Number
            </label><div>
  <label className="block font-semibold mb-2">
    Service Address
  </label>

  <input
    type="text"
    className="w-full border rounded-lg p-3"
    placeholder="123 Main Street, Richmond, VA"
  />
</div>
            <input
              type="tel"
              className="w-full border rounded-lg p-3"
              placeholder="(804) 963-0985"
            />
          </div>

          <div>
            <label className="block font-semibold mb-2">
              Service Needed
            </label>Full Name

Email

Phone Number

Service Address   ← NEW

Service Needed

            <select className="w-full border rounded-lg p-3">
              <option>Standard Cleaning</option>
              <option>Deep Cleaning</option>
              <option>Move-In / Move-Out</option>
              <option>Commercial Cleaning</option>
              <option>Airbnb Turnover</option>
            </select>
          </div>

          <div>
            <label className="block font-semibold mb-2">
              Preferred Cleaning Date
            </label>

            <input
              type="date"
              className="w-full border rounded-lg p-3"
            />
          </div>

          <div>
            <label className="block font-semibold mb-2">
              Additional Notes
            </label>

            <textarea
              rows={5}
              className="w-full border rounded-lg p-3"
              placeholder="Tell us about your cleaning needs..."
            />
          </div>

          <button
            type="submit"
            className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-4 rounded-full transition"
          >
            Request My Free Quote
          </button>

        </form>
      </section>
    </main>
  );
}