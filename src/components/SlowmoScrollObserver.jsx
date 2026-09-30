import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function SlowmoScrollObserver() {
  const location = useLocation();

  useEffect(() => {
    const selector = [
      'section',
      '.section-header',
      '.section-tag',
      '.section-title',
      '.section-desc',
      '.card',
      '.paper-card',
      '.slowmo-reveal',
      'main > div > section > div > div',
      '.grid > *',
      '[style*="display: grid"] > *',
      '[style*="display:grid"] > *',
      '.hero-about-text',
      '.hero-about-image',
      '.btn-primary',
      '.btn-secondary'
    ].join(', ');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('slowmo-visible');
          }
        });
      },
      {
        threshold: 0.08,
        rootMargin: '0px 0px -40px 0px'
      }
    );

    // Track "already observed by THIS effect instance" separately from the
    // 'slowmo-init' CSS class. React StrictMode mounts this effect twice in
    // dev (mount -> cleanup -> mount); the class persists on elements across
    // that remount, but a fresh observer instance still needs to observe
    // every element itself, or nothing ever gets revealed.
    const observedTargets = new WeakSet();

    const attach = (root) => {
      root.querySelectorAll(selector).forEach((target) => {
        if (observedTargets.has(target)) return;
        observedTargets.add(target);

        if (!target.classList.contains('slowmo-init')) {
          target.classList.add('slowmo-init');

          if (target.parentElement) {
            const siblings = Array.from(target.parentElement.children);
            const index = siblings.indexOf(target);
            if (index >= 0) {
              target.style.transitionDelay = `${(index % 6) * 0.15}s`;
            }
          }
        }

        observer.observe(target);
      });
    };

    // Initial pass for whatever is already rendered on this route.
    attach(document);

    // Only react to actual DOM changes (new nodes appearing — modals, async
    // content, route transitions) instead of polling on a timer forever.
    const mutationObserver = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        mutation.addedNodes.forEach((node) => {
          if (node.nodeType === 1) attach(node.parentElement || document);
        });
      }
    });

    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, [location.pathname]);

  return null;
}
