import Link from "next/link";

interface PropertyHeaderProps {
  ref: string;
  title: string;
  location: string;
}

export default function PropertyHeader({
  ref,
  title,
  location,
}: PropertyHeaderProps) {
  return (
    <div className="bg-white border-b border-gray-200 px-6 md:px-12 py-4 pt-24">
      <div>
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <Link href="/" className="hover:text-gray-900">
            Inicio
          </Link>
          <span>/</span>
          <Link
            href="/design-a/propiedades"
            className="hover:text-gray-900"
          >
            Propiedades
          </Link>
          <span>/</span>
          <span className="text-gray-900">{title}</span>
        </div>
      </div>
    </div>
  );
}
