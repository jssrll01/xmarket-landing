import { useEffect } from "react";

export function useParallax() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const els = Array.from(document.querySelectorAll("[data-speed]"));
    let ticking = false;
    const update = () => {
      const mid = window.innerHeight / 2;
      els.forEach((el) => {
        const p = el.parentElement.getBoundingClientRect();
        const off = (p.top + p.height / 2 - mid) * parseFloat(el.dataset.speed);
        el.style.transform = "translate3d(0," + off.toFixed(1) + "px,0)";
      });
      ticking = false;
    };
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(update);
        ticking = true;
      }
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);
}
