"use client";

interface TextGroup {
  title?: string;
  content: string;
}

interface SectionData {
  groups: TextGroup[];
}

interface PropertyTextDescProps {
  id: string;
  label: string;
  data: SectionData;
}

export default function PropertyTextDesc({
  id,
  label,
  data,
}: PropertyTextDescProps) {
  // Guard: don't render if no data provided
  if (!data || !Array.isArray(data.groups) || data.groups.length === 0)
    return null;

  return (
    <section id={id} className="mb-20 scroll-mt-24">
      <h2 className="text-3xl font-light text-gray-900 mb-8 pb-4 border-b-2 border-secondary">
        {label}
      </h2>

      {data.groups.map((group, groupIndex) => (
        <div className="mb-8" key={`${groupIndex}-group-${id}`}>
          {group.title && (
            <h3 className="text-2xl font-light text-gray-900 mb-4">
              {group.title}
            </h3>
          )}
          <div className="text-gray-700 leading-relaxed whitespace-pre-line">
            {group.content}
          </div>
        </div>
      ))}
    </section>
  );
}
