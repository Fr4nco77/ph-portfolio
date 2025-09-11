(function () {
  const setupAnimations = () => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const anim = entry.target.dataset.animate;
            if (anim) {
              entry.target.classList.add(`animate-${anim}`);
              observer.unobserve(entry.target);
            }
          }
        });
      },
      { threshold: 0.3 },
    );

    document.querySelectorAll("[data-animate]").forEach((el) => {
      observer.observe(el);
    });
  };

  document.addEventListener("DOMContentLoaded", setupAnimations);
  document.addEventListener("astro:after-swap", setupAnimations);
})();
