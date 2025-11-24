'use client';

import { useTranslations } from 'next-intl';
import { useState, FormEvent } from 'react';

export default function SellForm() {
  const t = useTranslations('SellPage.form');
  const [showSuccess, setShowSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));

    setShowSuccess(true);
    setIsSubmitting(false);

    // Reset form and hide success message after 5 seconds
    setTimeout(() => {
      setShowSuccess(false);
      (e.target as HTMLFormElement).reset();
    }, 5000);
  };

  return (
    <section id="formulario" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mx-auto bg-gray-50 p-12 rounded-xl border border-gray-200">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {t('title')}
            </h2>
            <p className="text-gray-600">{t('subtitle')}</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="flex flex-col">
              <label htmlFor="nombre" className="text-sm font-semibold text-gray-900 mb-2">
                {t('fullName')} *
              </label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                required
                className="px-4 py-3 border border-gray-300 rounded-lg text-base focus:outline-none focus:border-bordeaux bg-white"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-5">
              <div className="flex flex-col">
                <label htmlFor="email" className="text-sm font-semibold text-gray-900 mb-2">
                  {t('email')} *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="px-4 py-3 border border-gray-300 rounded-lg text-base focus:outline-none focus:border-bordeaux bg-white"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="telefono" className="text-sm font-semibold text-gray-900 mb-2">
                  {t('phone')} *
                </label>
                <input
                  type="tel"
                  id="telefono"
                  name="telefono"
                  required
                  className="px-4 py-3 border border-gray-300 rounded-lg text-base focus:outline-none focus:border-bordeaux bg-white"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-5">
              <div className="flex flex-col">
                <label htmlFor="ubicacion" className="text-sm font-semibold text-gray-900 mb-2">
                  {t('location')} *
                </label>
                <select
                  id="ubicacion"
                  name="ubicacion"
                  required
                  className="px-4 py-3 border border-gray-300 rounded-lg text-base focus:outline-none focus:border-bordeaux bg-white"
                >
                  <option value="">{t('selectOption')}</option>
                  <option value="tupungato">Tupungato</option>
                  <option value="tunuyan">Tunuyán</option>
                  <option value="san-carlos">San Carlos</option>
                  <option value="lujan">Luján de Cuyo</option>
                  <option value="maipu">Maipú</option>
                  <option value="san-rafael">San Rafael</option>
                  <option value="otra">{t('otherLocation')}</option>
                </select>
              </div>
              <div className="flex flex-col">
                <label htmlFor="superficie" className="text-sm font-semibold text-gray-900 mb-2">
                  {t('surface')} *
                </label>
                <input
                  type="number"
                  id="superficie"
                  name="superficie"
                  placeholder={t('surfacePlaceholder')}
                  required
                  className="px-4 py-3 border border-gray-300 rounded-lg text-base focus:outline-none focus:border-bordeaux bg-white"
                />
              </div>
            </div>

            <div className="flex flex-col">
              <label htmlFor="tipo" className="text-sm font-semibold text-gray-900 mb-2">
                {t('productionType')}
              </label>
              <select
                id="tipo"
                name="tipo"
                className="px-4 py-3 border border-gray-300 rounded-lg text-base focus:outline-none focus:border-bordeaux bg-white"
              >
                <option value="">{t('selectOption')}</option>
                <option value="viñedos">{t('vineyards')}</option>
                <option value="olivos">{t('olives')}</option>
                <option value="mixto">{t('mixed')}</option>
                <option value="frutales">{t('fruits')}</option>
                <option value="campo">{t('noProduction')}</option>
                <option value="otro">{t('other')}</option>
              </select>
            </div>

            <div className="flex flex-col">
              <label htmlFor="comentarios" className="text-sm font-semibold text-gray-900 mb-2">
                {t('comments')}
              </label>
              <textarea
                id="comentarios"
                name="comentarios"
                placeholder={t('commentsPlaceholder')}
                rows={4}
                className="px-4 py-3 border border-gray-300 rounded-lg text-base focus:outline-none focus:border-bordeaux bg-white resize-vertical"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-bordeaux text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-bordeaux-light transition-colors disabled:opacity-50 disabled:cursor-not-allowed mt-3"
            >
              {isSubmitting ? t('sending') : t('submit')}
            </button>

            {showSuccess && (
              <div className="bg-green-600 text-white p-5 rounded-lg text-center font-semibold">
                {t('successMessage')}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
