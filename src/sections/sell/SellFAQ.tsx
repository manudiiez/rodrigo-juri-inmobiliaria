'use client';

import { useTranslations } from 'next-intl';

export default function SellFAQ() {
  const t = useTranslations('SellPage.faq');

  const faqs = [
    {
      question: t('question1'),
      answer: t('answer1'),
    },
    {
      question: t('question2'),
      answer: t('answer2'),
    },
    {
      question: t('question3'),
      answer: t('answer3'),
    },
    {
      question: t('question4'),
      answer: t('answer4'),
    },
    {
      question: t('question5'),
      answer: t('answer5'),
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-16">
          {t('title')}
        </h2>
        <div className="max-w-4xl mx-auto space-y-5">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg border border-gray-200"
            >
              <div className="text-lg font-semibold text-gray-900 mb-3">
                {faq.question}
              </div>
              <div className="text-base text-gray-600 leading-relaxed">
                {faq.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
