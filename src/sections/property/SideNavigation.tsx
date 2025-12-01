"use client";

interface Section {
  id: string;
  label: string;
}

interface SideNavigationProps {
  sections: Section[];
  activeSection: string;
  onSectionClick: (sectionId: string) => void;
}

export default function SideNavigation({
  sections,
  activeSection,
  onSectionClick,
}: SideNavigationProps) {
  return (
    <div className="hidden lg:block w-64">
      <div className="sticky top-24">
        <h3 className="text-sm uppercase tracking-widest text-gray-500 mb-4">
          En esta página
        </h3>
        <nav className="space-y-1">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => onSectionClick(section.id)}
              className={`block w-full text-left px-4 py-2 text-sm transition-colors ${
                activeSection === section.id
                  ? "text-[#0A1628] font-medium border-l-2 border-[#E2B34C] bg-gray-50"
                  : "text-gray-600 hover:text-gray-900 border-l-2 border-transparent hover:border-gray-300"
              }`}
            >
              {section.label}
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
}
