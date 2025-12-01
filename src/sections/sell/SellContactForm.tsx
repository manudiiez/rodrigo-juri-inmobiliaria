"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";

export default function SellContactForm() {
  const t = useTranslations('SellPage.form');
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-3xl mx-auto px-6 md:px-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4">
            {t('title')}
          </h2>
          <p className="text-lg text-gray-600">
            {t('description')}
          </p>
        </div>

        <div className="bg-white border border-gray-200 p-8 md:p-10">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label
                  htmlFor="firstName"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  {t('firstName')} {t('required')}
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  required
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 focus:border-[#0A1628] focus:ring-1 focus:ring-[#0A1628] outline-none transition-colors"
                />
              </div>
              <div>
                <label
                  htmlFor="lastName"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  {t('lastName')} {t('required')}
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  required
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 focus:border-[#0A1628] focus:ring-1 focus:ring-[#0A1628] outline-none transition-colors"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                {t('email')} {t('required')}
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 focus:border-[#0A1628] focus:ring-1 focus:ring-[#0A1628] outline-none transition-colors"
              />
            </div>
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                {t('phone')} {t('required')}
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 focus:border-[#0A1628] focus:ring-1 focus:ring-[#0A1628] outline-none transition-colors"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                {t('message')}
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 focus:border-[#0A1628] focus:ring-1 focus:ring-[#0A1628] outline-none transition-colors resize-none"
                placeholder={t('messagePlaceholder')}
              />
            </div>
            <button
              type="submit"
              className="w-full bg-[#0A1628] text-white py-4 px-6 hover:bg-[#1a2d4d] transition-colors font-medium text-lg"
            >
              {t('submit')}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
