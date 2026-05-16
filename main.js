import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Registrar o plugin ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", () => {
  // 1. Animação da caixa 3D flutuando
  gsap.to(".floating-box", {
    y: -20,
    duration: 2,
    repeat: -1,
    yoyo: true,
    ease: "power1.inOut"
  });

  // 2. Animação de entrada do Hero Section
  const heroTl = gsap.timeline();
  
  heroTl.from(".badge", { opacity: 0, y: 20, duration: 0.6, ease: "power2.out" })
        .from(".hero-content .title", { opacity: 0, y: 30, duration: 0.8, ease: "power3.out" }, "-=0.4")
        .from(".hero-content .subtitle", { opacity: 0, y: 20, duration: 0.6, ease: "power2.out" }, "-=0.4")
        .from(".features-list .feature-item", { opacity: 0, x: -20, duration: 0.5, stagger: 0.1, ease: "power2.out" }, "-=0.2")
        .from(".cta-wrapper", { opacity: 0, y: 20, duration: 0.6, ease: "back.out(1.7)" }, "-=0.2")
        .from(".hero-image", { opacity: 0, scale: 0.8, duration: 1, ease: "elastic.out(1, 0.5)" }, "-=1");

  // 3. Animação da seção de Stats
  gsap.from(".stats-intro > *", {
    scrollTrigger: {
      trigger: ".stats",
      start: "top 80%",
    },
    y: 30,
    duration: 0.8,
    stagger: 0.2,
    ease: "power2.out"
  });

  gsap.from(".stat-card", {
    scrollTrigger: {
      trigger: ".stats-grid",
      start: "top 85%",
    },
    y: 40,
    duration: 0.6,
    stagger: 0.15,
    ease: "back.out(1.2)"
  });

  // 4. Animação da seção O Que Você Vai Aprender
  gsap.from(".learning .section-title", {
    scrollTrigger: {
      trigger: ".learning",
      start: "top 95%",
    },
    y: 20,
    duration: 0.6
  });

  gsap.from(".learning-card", {
    scrollTrigger: {
      trigger: ".learning-grid",
      start: "top 95%",
    },
    scale: 0.9,
    y: 30,
    duration: 0.6,
    stagger: 0.1,
    ease: "power2.out"
  });

  // 5. Animação da seção Para Quem É
  gsap.from(".audience .section-title, .audience .section-divider", {
    scrollTrigger: {
      trigger: ".audience",
      start: "top 85%",
    },
    y: 20,
    duration: 0.6,
    stagger: 0.2
  });

  gsap.from(".audience-card", {
    scrollTrigger: {
      trigger: ".audience-grid",
      start: "top 80%",
    },
    y: 20,
    duration: 0.5,
    stagger: 0.1,
    ease: "power1.out"
  });

  // 6. Animação da seção Depoimentos
  gsap.from(".testimonial-card", {
    scrollTrigger: {
      trigger: ".testimonials-grid",
      start: "top 80%",
    },
    x: -30,
    duration: 0.6,
    stagger: 0.2,
    ease: "power2.out"
  });

  // 7. Animação do CTA Inferior
  gsap.from(".cta-box", {
    scrollTrigger: {
      trigger: ".bottom-cta",
      start: "top 75%",
    },
    opacity: 0,
    y: 50,
    duration: 0.8,
    ease: "power3.out"
  });

  gsap.from(".cta-box .cta-image img", {
    scrollTrigger: {
      trigger: ".bottom-cta",
      start: "top 70%",
    },
    opacity: 0,
    scale: 0.8,
    duration: 1,
    ease: "elastic.out(1, 0.5)",
    delay: 0.3
  });
  
  // Hamburger menu logic
  const hamburger = document.querySelector(".hamburger-menu");
  const nav = document.querySelector(".nav");
  const navLinks = document.querySelectorAll(".nav-link, .nav .btn-small");

  hamburger.addEventListener("click", () => {
    nav.classList.toggle("active");
    const icon = hamburger.querySelector("i");
    if (nav.classList.contains("active")) {
      icon.classList.remove("ph-list");
      icon.classList.add("ph-x");
    } else {
      icon.classList.remove("ph-x");
      icon.classList.add("ph-list");
    }
  });

  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      nav.classList.remove("active");
      const icon = hamburger.querySelector("i");
      icon.classList.remove("ph-x");
      icon.classList.add("ph-list");
    });
  });

  // Header background on scroll
  const header = document.querySelector(".header");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.style.backgroundColor = "rgba(5, 5, 5, 0.95)";
      header.style.boxShadow = "0 4px 20px rgba(0,0,0,0.5)";
    } else {
      header.style.backgroundColor = "rgba(5, 5, 5, 0.8)";
      header.style.boxShadow = "none";
    }
  });

  window.addEventListener("load", () => {
    ScrollTrigger.refresh();
  });
});
