"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";

interface PropertyHeaderProps {
  title: string;
}

export default function PropertyHeader({
  title,
}: PropertyHeaderProps) {
  const t = useTranslations('PropertyDetailPage.breadcrumb');

  return (
    <div className="bg-white border-b border-gray-200 px-6 md:px-12 py-4 pt-24">
      <div>
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <Link href="/" className="hover:text-gray-900">
            {t('home')}
          </Link>
          <span>/</span>
          <Link
            href="/design-a/propiedades"
            className="hover:text-gray-900"
          >
            {t('properties')}
          </Link>
          <span>/</span>
          <span className="text-gray-900">{title}</span>
        </div>
      </div>
    </div>
  );
}
