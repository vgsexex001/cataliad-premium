"use client";

import { useEffect, useState, RefObject } from "react";

interface UseIntersectionObserverOptions {
  threshold?: number;
  triggerOnce?: boolean;
}

interface UseIntersectionObserverReturn {
  isInView: boolean;
  hasAnimated: boolean;
}

export function useIntersectionObserver(
  ref: RefObject<Element | null>,
  { threshold = 0.1, triggerOnce = true }: UseIntersectionObserverOptions = {}
): UseIntersectionObserverReturn {
  const [isInView, setIsInView] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    if (triggerOnce && hasAnimated) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const inView = entry.isIntersecting;
        setIsInView(inView);

        if (inView && !hasAnimated) {
          setHasAnimated(true);
        }

        if (triggerOnce && inView) {
          observer.unobserve(element);
        }
      },
      { threshold }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [ref, threshold, triggerOnce, hasAnimated]);

  return { isInView, hasAnimated };
}
