import { useEffect, useMemo, useRef, ReactNode } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ScrollFloatProps {
  children: ReactNode;
  containerClassName?: string;
  textClassName?: string;
  animationDuration?: number;
  ease?: string;
  scrollStart?: string;
  scrollEnd?: string;
  stagger?: number;
}

const ScrollFloat = ({
  children,
  containerClassName = '',
  textClassName = '',
  animationDuration = 0.5,
  ease = 'back.inOut(1.5)',
  scrollStart = 'center bottom+=40%',
  scrollEnd = 'bottom bottom-=30%',
  stagger = 0.02,
}: ScrollFloatProps) => {
  const containerRef = useRef<HTMLParagraphElement>(null);

  const splitText = useMemo(() => {
    const text = typeof children === 'string' ? children : '';
    return text.split('').map((char, index) => (
      <span
        key={index}
        style={{ display: 'inline-block' }}
      >
        {char === ' ' ? ' ' : char}
      </span>
    ));
  }, [children]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const charElements = el.querySelectorAll('span');

    const ctx = gsap.context(() => {
      gsap.fromTo(
        charElements,
        {
          willChange: 'opacity, transform',
          opacity: 0,
          yPercent: 80,
          scaleY: 1.8,
          scaleX: 0.8,
          transformOrigin: '50% 0%',
        },
        {
          duration: animationDuration,
          ease,
          opacity: 1,
          yPercent: 0,
          scaleY: 1,
          scaleX: 1,
          stagger,
          scrollTrigger: {
            trigger: el,
            start: scrollStart,
            end: scrollEnd,
            scrub: true,
          },
        }
      );
    }, el);

    return () => ctx.revert();
  }, [animationDuration, ease, scrollStart, scrollEnd, stagger]);

  return (
    <p
      ref={containerRef}
      className={containerClassName}
      style={{ overflow: 'hidden' }}
    >
      <span className={textClassName}>{splitText}</span>
    </p>
  );
};

export default ScrollFloat;
