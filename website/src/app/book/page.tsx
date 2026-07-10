export default function BookPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">

      {/* Hero */}
      <section className="bg-gradient-to-br from-[#0b3c5d] via-[#1d5c88] to-[#6fa9c9] text-white py-20">
        <div className="max-w-5xl mx-auto px-8 text-center">

          <h1 className="text-5xl font-extrabold">
            Book Your Cleaning
          </h1>

          <p className="mt-6 text-xl text-gray-200">
            You're just one step away from a cleaner home or business.
          </p>

        </div>
      </section>

      {/* Booking Content */}
      <section className="py-20 bg-gray-50">

        <div className="max-w-6xl mx-auto px-8">

          <div className="bg-white rounded-3xl shadow-2xl p-10">

            <div className="text-center">

              <p className="uppercase tracking-[0.2em] text-[#d4af37] font-bold">
                New Customer Special
              </p>

              <h2 className="text-4xl font-extrabold text-[#0b3c5d] mt-4">
                Save $25 OFF Your First Residential Cleaning
              </h2>

              <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
                Thank you for choosing <strong>The Gleam Clean Team LLC</strong>.
                We proudly serve Richmond and surrounding communities with dependable,
                detail-oriented residential and commercial cleaning services.
              </p>

            </div>

            {/* Information Cards */}

            <div className="grid md:grid-cols-3 gap-8 mt-14">

              <div className="bg-gray-50 rounded-2xl p-8 shadow-lg text-center">

                <div className="text-5xl mb-4">📅</div>

                <h3 className="text-2xl font-bold text-[#0b3c5d]">
                  Schedule
                </h3>

                <p className="mt-4 text-gray-600">
                  Choose the service and appointment time that works best for you.
                </p>

              </div>

              <div className="bg-gray-50 rounded-2xl p-8 shadow-lg text-center">

                <div className="text-5xl mb-4">💳</div>

                <h3 className="text-2xl font-bold text-[#0b3c5d]">
                  Secure Booking
                </h3>

                <p className="mt-4 text-gray-600">
                  Housecall Pro provides secure scheduling, invoices, and payment processing.
                </p>

              </div>

              <div className="bg-gray-50 rounded-2xl p-8 shadow-lg text-center">

                <div className="text-5xl mb-4">✨</div>

                <h3 className="text-2xl font-bold text-[#0b3c5d]">
                  Professional Cleaning
                </h3>

                <p className="mt-4 text-gray-600">
                  Relax while we make your home or business shine.
                </p>

              </div>

            </div>

            {/* Before You Book */}

            <div className="bg-[#0b3c5d] text-white rounded-3xl mt-16 p-10">

              <h2 className="text-3xl font-bold text-center">
                Before You Book
              </h2>

              <div className="grid md:grid-cols-2 gap-8 mt-10 text-lg">

                <div>

                  <p>✔ Minimum Booking: $200</p>
                  <p className="mt-4">✔ 30% Deposit Required</p>
                  <p className="mt-4">✔ Residential & Commercial Cleaning</p>

                </div>

                <div>

                  <p>✔ Richmond & Surrounding Areas</p>
                  <p className="mt-4">✔ Reliable & Professional Service</p>
                  <p className="mt-4">✔ Email Confirmation Included</p>

                </div>

              </div>

            </div>

            {/* Booking Button */}

            <div className="text-center mt-16">

              <a
                href="https://book.housecallpro.com/book/The-Gleam-Clean-Team-LLC/5ca3d94b7fee42bdbc2b89db18199c93?v2=true&lead_source=google&merchant_id=ff958142-e950-43c6-a8c6-8b86062182eb&rwg_token=AE37R_jlNq5J8dB1Xrz60ScM-zlgbZrXqrCeHmO1WigkN4y1WKMBfXdz8nQQ715LCHV1RZK4gIKADpIAqdofgy6C5HJ76j_0mQ%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#d4af37] hover:bg-yellow-500 text-white px-12 py-5 rounded-full text-xl font-bold transition"
              >
                Book & Save $25
              </a>

              <p className="mt-6 text-gray-500">
                Secure online scheduling powered by Housecall Pro.
              </p>

            </div>

            {/* Contact */}

            <div className="text-center mt-16 border-t pt-10">

              <h3 className="text-3xl font-bold text-[#0b3c5d]">
                Need Help?
              </h3>

              <p className="mt-6 text-lg">
                📞 (804) 963-0985
              </p>

              <p className="mt-2 text-lg">
                ✉️ thegleamcleanteamllc@gmail.com
              </p>

              <p className="mt-6 text-gray-600">
                Questions before booking? We'd be happy to help!
              </p>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}