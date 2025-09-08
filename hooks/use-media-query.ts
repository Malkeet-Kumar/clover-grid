import { useState, useEffect } from "react";

const queries = {
  mobile: "(max-width: 600px)",
  tab: "(min-width: 601px) and (max-width: 1024px)",
  pc: "(min-width: 1025px)",
};

/**
 * Custom hook to listen for media query matches.
 * @param {string} query - 'mobile' | 'tab' | 'pc'
 * @returns {boolean} Whether the media query currently matches
 */
export function useMediaQuery(query: "mobile" | "tab" | "pc"): boolean {
  const mediaQuery = queries[query];

  const [matches, setMatches] = useState<boolean>(() => {
    if (typeof window !== "undefined" && window.matchMedia) {
      return window.matchMedia(mediaQuery).matches;
    }
    return false;
  });

  useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) return;

    const mediaQueryList = window.matchMedia(mediaQuery);

    const listener = (event: MediaQueryListEvent) => {
      setMatches(event.matches);
    };

    mediaQueryList.addEventListener("change", listener);

    setMatches(mediaQueryList.matches);

    return () => {
      mediaQueryList.removeEventListener("change", listener);
    };
  }, [mediaQuery]);

  return matches;
}
