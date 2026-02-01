import { useEffect, useState, useRef } from "react";
import { useInView } from "react-intersection-observer";

interface UseScrollAnimationOptions {
  threshold?: number;
  triggerOnce?: boolean;
  rootMargin?: string;
  initialInView?: boolean;
}

interface UseScrollAnimationReturn {
  ref: (node?: Element | null) => void;
  isInView: boolean;
  hasAnimated: boolean;
}

/**
 * Custom hook for triggering animations when elements enter viewport
 * Uses Intersection Observer for performance and supports reduced motion
 *
 * @param options - Intersection Observer options
 * @returns Object containing ref, isInView state, and hasAnimated state
 */
export const useScrollAnimation = (
  options: UseScrollAnimationOptions = {}
): UseScrollAnimationReturn => {
  const {
    threshold = 0.1,
    triggerOnce = true,
    rootMargin = "0px",
    initialInView = false,
  } = options;

  const [hasAnimated, setHasAnimated] = useState(initialInView);
  const { ref, inView } = useInView({
    threshold,
    triggerOnce,
    rootMargin,
  });

  useEffect(() => {
    if (inView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [inView, hasAnimated]);

  return {
    ref,
    isInView: inView || hasAnimated,
    hasAnimated,
  };
};

/**
 * Hook to detect user's reduced motion preference
 * @returns boolean indicating if user prefers reduced motion
 */
export const useReducedMotion = (): boolean => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = () => setPrefersReducedMotion(mediaQuery.matches);
    mediaQuery.addEventListener("change", handleChange);

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  return prefersReducedMotion;
};

/**
 * Hook for animating multiple elements in sequence
 * Useful for list items, cards, etc.
 *
 * @param options - Intersection Observer options
 * @returns Object containing ref and array of inView states
 */
export const useStaggeredAnimation = (
  itemCount: number,
  options: UseScrollAnimationOptions = {}
) => {
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());
  const { ref, isInView } = useScrollAnimation(options);

  useEffect(() => {
    if (isInView) {
      const interval = setInterval(() => {
        setVisibleItems((prev) => {
          const nextIndex = prev.size;
          if (nextIndex >= itemCount) {
            clearInterval(interval);
            return prev;
          }
          return new Set(prev).add(nextIndex);
        });
      }, 100);

      return () => clearInterval(interval);
    }
  }, [isInView, itemCount]);

  return {
    containerRef: ref,
    visibleItems,
    isInView,
  };
};

/**
 * Hook for parallax scroll effect
 *
 * @param speed - Speed factor for parallax (higher = faster)
 * @returns transform value for inline styles
 */
export const useParallax = (speed: number = 0.5): string => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.scrollY * speed);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [speed]);

  return `translateY(${offset}px)`;
};

/**
 * Hook for detecting scroll direction
 * @returns "up" | "down" | null
 */
export const useScrollDirection = (): "up" | "down" | null => {
  const [scrollDirection, setScrollDirection] = useState<"up" | "down" | null>(
    null
  );
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY.current) {
        setScrollDirection("down");
      } else if (currentScrollY < lastScrollY.current) {
        setScrollDirection("up");
      }
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return scrollDirection;
};

/**
 * Hook for scroll progress indicator
 * @returns scroll progress as percentage (0-100)
 */
export const useScrollProgress = (): number => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrolled = window.scrollY;
      const scrollableHeight = documentHeight - windowHeight;
      const scrollPercentage = (scrolled / scrollableHeight) * 100;
      setProgress(Math.min(100, Math.max(0, scrollPercentage)));
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return progress;
};

/**
 * Hook for smooth scroll to element
 * @returns function to scroll to element
 */
export const useSmoothScroll = () => {
  const scrollToElement = (
    elementId: string,
    offset: number = 80
  ): void => {
    const element = document.getElementById(elementId);
    if (element) {
      const elementPosition =
        element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return scrollToElement;
};

export default useScrollAnimation;
