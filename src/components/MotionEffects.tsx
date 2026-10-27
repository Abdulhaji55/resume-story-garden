import { useEffect, useRef } from 'react';
import { useRouterState } from '@tanstack/react-router';
import { useAppearance } from '@/components/AppearanceProvider';
export function MotionEffects() {
  const path = useRouterState({ select: state => state.location.pathname });
  const { preferences, systemReduced } = useAppearance();
  const progress = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!preferences.motion || systemReduced) return;
    const sections = document.querySelectorAll('main section, main article, main header');
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target); }
    }), { threshold: 0.06 });
    sections.forEach(section => { section.classList.add('scroll-reveal'); observer.observe(section); });
    return () => { observer.disconnect(); sections.forEach(section => section.classList.remove('scroll-reveal', 'is-visible')); };
  }, [path, preferences.motion, systemReduced]);
  useEffect(() => {
    const update = () => {
      const height = document.documentElement.scrollHeight - innerHeight;
      if (progress.current) progress.current.style.transform = `scaleX(${height > 0 ? scrollY / height : 0})`;
    };
    update(); window.addEventListener('scroll', update, { passive: true }); window.addEventListener('resize', update);
    return () => { window.removeEventListener('scroll', update); window.removeEventListener('resize', update); };
  }, [path]);
  return <div ref={progress} aria-hidden className="pointer-events-none fixed left-0 top-0 z-50 h-0.5 w-full origin-left scale-x-0 bg-primary" />;
}
