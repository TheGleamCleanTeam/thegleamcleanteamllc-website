export default function BookingPolicyPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <section className="max-w-4xl mx-auto px-6 py-16">

        <h1 className="text-5xl font-bold text-[#0b3c5d] text-center">
          Booking & Payment Policy
        </h1>

        <p className="mt-6 text-lg text-gray-600 text-center">
          Thank you for choosing The Gleam Clean Team LLC. Please review our
          booking and payment policies before scheduling your cleaning service.
        </p>

        <div className="mt-12 space-y-10">

          <div>
            <h2 className="text-2xl font-bold text-[#0b3c5d]">
              Booking Deposit
            </h2>
            <p className="mt-3">
              A <strong>30% non-refundable deposit</strong> is required to
              reserve your cleaning appointment. Your appointment is not
              confirmed until your deposit has been received.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#0b3c5d]">
              Final Payment
            </h2>
            <p className="mt-3">
              The remaining balance is due upon completion of your cleaning
              service. We accept cash and secure online payments through Stripe.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#0b3c5d]">
              Rescheduling
            </h2>
            <p className="mt-3">
              Appointments may be rescheduled with at least 24 hours' notice.
              Deposits may be transferred one time to your new appointment date.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#0b3c5d]">
              Cancellations
            </h2>
            <p className="mt-3">
              Cancellations made less than 24 hours before the scheduled
              appointment or no-shows may result in forfeiture of the deposit.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#0b3c5d]">
              Customer Satisfaction
            </h2>
            <p className="mt-3">
              Your satisfaction is our priority. If you have any concerns about
              your cleaning, please contact us within 24 hours so we can work
              with you toward a resolution.
            </p>
          </div>

        </div>

        <div className="mt-16 text-center">
          <a
            href="/book"
            className="bg-[#d4af37] hover:bg-yellow-500 text-white px-8 py-4 rounded-full font-semibold text-lg"
          >
            I Understand & Want to Book My Cleaning
          </a>
        </div>

      </section>
    </main>
  );
}