"use client";

import PropertyGroupedFields from "./PropertyGroupedFields";
import PropertyMapSection from "./PropertyMapSection";
import PropertyFieldsList from "./PropertyFieldsList";
import PropertyTextDesc from "./PropertyTextDesc";

interface Section {
  id: string;
  label: string;
  type: string;
  data: any;
}

interface SectionRendererProps {
  section: Section;
}

export default function SectionRenderer({ section }: SectionRendererProps) {
  const { id, label, type, data } = section;

  switch (type) {
    case "grouped-fields":
      return <PropertyGroupedFields id={id} label={label} data={data} />;

    case "map-location":
      return <PropertyMapSection id={id} label={label} data={data} />;

    case "fields-list":
      return <PropertyFieldsList id={id} label={label} data={data} />;

    case "text-desc":
      return <PropertyTextDesc id={id} label={label} data={data} />;

    case "summary":
    case "contact":
      // These sections are handled separately in the page
      return null;

    default:
      console.warn(`Unknown section type: ${type}`);
      return null;
  }
}
