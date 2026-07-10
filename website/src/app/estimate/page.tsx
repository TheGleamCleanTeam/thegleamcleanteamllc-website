export default function EstimatePage() {
  return (
    <main className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl p-10">

        <h1 className="text-4xl font-bold text-[#0b3c5d] text-center">
          Request Your Free Cleaning Estimate
        </h1>

        <p className="text-center text-gray-600 mt-4 mb-10">
          Complete the form below and we'll contact you with a personalized quote.
        </p>

        <form
  action="https://formspree.io/f/mjgqnvyw"
  method="POST"
  className="space-y-6"
>

          <input
  type="text"
  name="fullName"
  placeholder="Full Name"
            className="w-full border rounded-lg p-4"
          />

          <input
  type="email"
  name="email"
  placeholder="Email Address"
  className="w-full border rounded-lg p-4"
/>
          

          <input
  type="tel"
  name="phone"
  placeholder="Phone Number"
  className="w-full border rounded-lg p-4"
/>
          <input
  type="number"
  placeholder="Approximate Square Footage"
  className="w-full border rounded-lg p-4"
/>

          <input
            type="text"
            placeholder="Property Address"
            className="w-full border rounded-lg p-4"
          />

          <div className="grid md:grid-cols-2 gap-4">

            <input
              type="number"
              placeholder="Bedrooms"
              className="border rounded-lg p-4"
            />

            <input
              type="number"
              placeholder="Bathrooms"
              className="border rounded-lg p-4"
            />

          </div>

          <select className="w-full border rounded-lg p-4">
            <option>Select Cleaning Type</option>
            <option>Standard Cleaning</option>
            <option>Deep Cleaning</option>
            <option>Move-In / Move-Out</option>
            <option>Commercial Cleaning</option>
            <option>Airbnb Turnover</option>
          </select>
          <select className="w-full border rounded-lg p-4">
  <option>How Often?</option>
  <option>One-Time Cleaning</option>
  <option>Weekly</option>
  <option>Bi-Weekly</option>
  <option>Monthly</option>
  <option>Every 2 Months</option>
</select>
<input
  type="date"
  className="w-full border rounded-lg p-4"
/>
Preferred Cleaning Date
⬇️
🐶 Are there pets in the home?   ← Add it here
⬇️
Add-On Services (Optional)
⬇️
Tell us about your cleaning needs...
<div>
  <label className="block font-semibold mb-3 text-[#0b3c5d]">
    Add-On Services (Optional)
  </label>

  <div className="grid grid-cols-2 gap-3">

    <label><input type="checkbox" className="mr-2" /> Inside Oven</label>

    <label><input type="checkbox" className="mr-2" /> Inside Refrigerator</label>

    <label><input type="checkbox" className="mr-2" /> Interior Windows</label>

    <label><input type="checkbox" className="mr-2" /> Baseboards</label>

    <label><input type="checkbox" className="mr-2" /> Laundry</label>

    <label><input type="checkbox" className="mr-2" /> Organization</label>

  </div>
</div>
          <textarea
            rows={5}
            placeholder="Tell us about your cleaning needs..."
            className="w-full border rounded-lg p-4"
          />

          <button
            className="w-full bg-[#0b3c5d] text-white py-4 rounded-lg text-lg font-semibold hover:opacity-90"
          >
            Request Free Estimate
          </button>

        </form>

      </div>
    </main>
  );
}