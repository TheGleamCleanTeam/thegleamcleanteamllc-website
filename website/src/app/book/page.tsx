"use client";

import { useState } from "react";

export default function BookPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    service: "Standard Cleaning",
    date: "",
    notes: "",
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    alert("Booking request submitted! Email integration will be connected next.");
  }

  return (
    <main className="min-h-screen bg-slate-900 text-white">
      <section className="max-w-4xl mx-auto px-6 py-16">

        <h1 className="text-5xl font-bold text-center">
          Book Your Cleaning
        </h1>

        <p className="text-center text-gray-300 mt-4 mb-12">
          Complete the form below and we'll contact you shortly to confirm your appointment.
        </p>

        <form
          onSubmit={handleSubmit}
          className="bg-white text-gray-900 rounded-2xl shadow-xl p-8 space-y-6"
        >

          <div>
            <label className="block font-semibold mb-2">
              Full Name
            </label>

            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              type="text"
              required
              className="w-full border rounded-lg p-3"
              placeholder="Your Name"
            />
          </div>

          <div>
            <label className="block font-semibold mb-2">
              Email Address
            </label>

            <input
              name="email"
              value={form.email}
              onChange={handleChange}
              type="email"
              required
              className="w-full border rounded-lg p-3"
              placeholder="you@email.com"
            />
          </div>

          <div>
            <label className="block font-semibold mb-2">
              Phone Number
            </label>

            <input
              name="phone"
              value={form.phone}
              onChange={handleChange}
              type="tel"
              required
              className="w-full border rounded-lg p-3"
              placeholder="(804) 963-0985"
            />
          </div>

          <div>
            <label className="block font-semibold mb-2">
              Service Address
            </label>

            <input
              name="address"
              value={form.address}
              onChange={handleChange}
              type="text"
              required
              className="w-full border rounded-lg p-3"
              placeholder="123 Main Street, Richmond, VA"
            />
          </div>          <div>
            <label className="block font-semibold mb-2">
              Service Needed
            </label>

            <select
              name="service"
              value={form.service}
              onChange={handleChange}
              className="w-full border rounded-lg p-3"
            >
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
              name="date"
              value={form.date}
              onChange={handleChange}
              type="date"
              className="w-full border rounded-lg p-3"
            />
          </div>

          <div>
            <label className="block font-semibold mb-2">
              Additional Notes
            </label>

            <textarea
              name="notes"
              value={form.notes}
              onChange={handleChange}
              rows={5}
              className="w-full border rounded-lg p-3"
              placeholder="Tell us about your cleaning needs..."
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#d4af37] hover:bg-yellow-500 text-white font-bold py-4 rounded-full transition"
          >
            Request My Free Quote
          </button>

        </form>

      </section>
    </main>
  );
}