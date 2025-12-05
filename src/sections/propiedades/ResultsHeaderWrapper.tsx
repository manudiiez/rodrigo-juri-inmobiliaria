"use client";

import { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import ResultsHeaderSection from "./ResultsHeaderSection";

interface ResultsHeaderWrapperProps {
  propertiesCount: number;
  initialSortBy: string;
}

export default function ResultsHeaderWrapper({
  propertiesCount,
  initialSortBy,
}: ResultsHeaderWrapperProps) {
  const router = useRouter();
  const pathname = usePathname();
  const [sortBy, setSortBy] = useState(initialSortBy);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);

    if (sortBy && sortBy !== "featured") {
      params.set("sortBy", sortBy);
    } else {
      params.delete("sortBy");
    }

    const queryString = params.toString();
    const newUrl = queryString ? `${pathname}?${queryString}` : pathname;

    router.push(newUrl);
  }, [sortBy, pathname, router]);

  return (
    <ResultsHeaderSection
      propertiesCount={propertiesCount}
      sortBy={sortBy}
      setSortBy={setSortBy}
    />
  );
}
