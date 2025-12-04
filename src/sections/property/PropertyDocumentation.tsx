"use client";

interface DocumentacionLegal {
  label: string;
  groups: {
    fields: {
      label: string;
      value: string | string[];
      subText?: string;
      link?: string;
    }[];
  }[];
}

interface PropertyDocumentationProps {
  legal: DocumentacionLegal;
}

export default function PropertyDocumentation({
  legal,
}: PropertyDocumentationProps) {
  // Guard: don't render if legal or groups missing
  if (!legal || !Array.isArray(legal.groups) || legal.groups.length === 0 || !legal.groups[0] || !Array.isArray(legal.groups[0].fields) || legal.groups[0].fields.length === 0) return null;

  return (
    <section id="documentacion" className="mb-20 scroll-mt-24">
      <h2 className="text-3xl font-light text-gray-900 mb-8 pb-4 border-b-2 border-secondary">
        {legal.label}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {legal.groups[0].fields.map((field, index) => (
          <div className="flex items-start gap-3" key={`${index}-legal-field`}>
            {field.link ? (
              // Renderizar con ícono de documento y botón si hay link
              <>
                <svg
                  className="w-6 h-6 text-secondary flex-shrink-0 mt-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                <div className="flex-1">
                  <p className="text-xs uppercase tracking-widest text-gray-500 mb-2">
                    {field.label}
                  </p>
                  <a
                    href={field.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-secondary text-white rounded-md hover:bg-secondary/90 transition-colors"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      />
                    </svg>
                    {Array.isArray(field.value) ? field.value.join(', ') : field.value}
                  </a>
                </div>
              </>
            ) : (
              // Renderizar normal si no hay link
              <>
                <svg
                  className="w-6 h-6 text-green-600 flex-shrink-0 mt-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <div>
                  <p className="text-xs uppercase tracking-widest text-gray-500 mb-1">
                    {field.label}
                  </p>
                  <p className="text-lg text-gray-900">
                    {Array.isArray(field.value) ? field.value.join(', ') : field.value}
                  </p>
                  {field.subText && (
                    <p className="text-xs text-gray-500 mt-1">
                      {field.subText}
                    </p>
                  )}
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
