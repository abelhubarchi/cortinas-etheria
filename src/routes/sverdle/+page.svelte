<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>VELOUR — Cortinas & Ambientes</title>
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=Montserrat:wght@200;400;500;700&display=swap" rel="stylesheet">
<style>
  *, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }

  :root {
    --cream: #F5EFE4;
    --linen: #EDE4D3;
    --gold: #C8A96E;
    --gold-light: #DFC08A;
    --charcoal: #2A2520;
    --warm-dark: #1C1714;
    --muted: #7A6F63;
    --white: #FDFAF5;
  }

  html { scroll-behavior: smooth; }

  body {
    font-family: 'Montserrat', sans-serif;
    background: var(--cream);
    color: var(--charcoal);
    overflow-x: hidden;
    cursor: none;
  }

  /* Custom cursor */
  .cursor {
    position: fixed;
    width: 10px; height: 10px;
    background: var(--gold);
    border-radius: 50%;
    pointer-events: none;
    z-index: 9999;
    transition: transform 0.1s ease;
    mix-blend-mode: multiply;
  }
  .cursor-follower {
    position: fixed;
    width: 36px; height: 36px;
    border: 1px solid var(--gold);
    border-radius: 50%;
    pointer-events: none;
    z-index: 9998;
    transition: all 0.18s ease;
    opacity: 0.6;
  }

  /* Loader / Intro curtain */
  #loader {
    position: fixed;
    inset: 0;
    z-index: 1000;
    display: flex;
    align-items: center;
    justify-content: center;
    pointer-events: none;
  }
  .curtain-left, .curtain-right {
    position: absolute;
    top: 0; bottom: 0;
    width: 50%;
    background: var(--warm-dark);
    transition: transform 1.4s cubic-bezier(0.76, 0, 0.24, 1);
  }
  .curtain-left { left: 0; transform-origin: left; }
  .curtain-right { right: 0; transform-origin: right; }
  .loader-text {
    position: relative;
    z-index: 2;
    font-family: 'Cormorant Garamond', serif;
    font-size: clamp(2rem, 6vw, 4rem);
    font-weight: 300;
    color: var(--cream);
    letter-spacing: 0.3em;
    text-transform: uppercase;
    opacity: 1;
    transition: opacity 0.5s ease;
  }
  .loader-text span { color: var(--gold); }
  #loader.open .curtain-left { transform: translateX(-100%); }
  #loader.open .curtain-right { transform: translateX(100%); }
  #loader.open .loader-text { opacity: 0; }

  /* NAV */
  nav {
    position: fixed;
    top: 0; left: 0; right: 0;
    z-index: 100;
    padding: 2rem 4rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    opacity: 0;
    animation: fadeDown 1s ease 1.8s forwards;
  }
  nav::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(to bottom, rgba(245,239,228,0.95) 0%, transparent 100%);
    backdrop-filter: blur(2px);
    -webkit-backdrop-filter: blur(2px);
  }
  .nav-logo {
    position: relative;
    font-family: 'Cormorant Garamond', serif;
    font-size: 1.6rem;
    font-weight: 400;
    letter-spacing: 0.25em;
    color: var(--charcoal);
    text-decoration: none;
  }
  .nav-logo em { font-style: italic; color: var(--gold); }
  .nav-links {
    position: relative;
    display: flex;
    gap: 3rem;
    list-style: none;
  }
  .nav-links a {
    font-size: 0.7rem;
    font-weight: 500;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: var(--muted);
    text-decoration: none;
    transition: color 0.3s;
    position: relative;
  }
  .nav-links a::after {
    content: '';
    position: absolute;
    bottom: -3px; left: 0;
    width: 0; height: 1px;
    background: var(--gold);
    transition: width 0.4s ease;
  }
  .nav-links a:hover { color: var(--charcoal); }
  .nav-links a:hover::after { width: 100%; }

  @keyframes fadeDown {
    from { opacity: 0; transform: translateY(-20px); }
    to { opacity: 1; transform: translateY(0); }
  }
  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(40px); }
    to { opacity: 1; transform: translateY(0); }
  }
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  /* HERO */
  .hero {
    height: 100vh;
    display: grid;
    grid-template-columns: 1fr 1fr;
    overflow: hidden;
  }
  .hero-left {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 8rem 5rem 5rem;
    position: relative;
    opacity: 0;
    animation: fadeUp 1s ease 2s forwards;
  }
  .hero-tag {
    font-size: 0.65rem;
    font-weight: 500;
    letter-spacing: 0.25em;
    text-transform: uppercase;
    color: var(--gold);
    margin-bottom: 2rem;
    display: flex;
    align-items: center;
    gap: 1rem;
  }
  .hero-tag::before {
    content: '';
    width: 40px; height: 1px;
    background: var(--gold);
    display: block;
  }
  .hero-title {
    font-family: 'Cormorant Garamond', serif;
    font-size: clamp(3.5rem, 7vw, 6rem);
    font-weight: 300;
    line-height: 1.0;
    margin-bottom: 2rem;
  }
  .hero-title em {
    display: block;
    font-style: italic;
    color: var(--gold);
  }
  .hero-desc {
    font-size: 0.8rem;
    font-weight: 300;
    line-height: 1.9;
    color: var(--muted);
    max-width: 340px;
    margin-bottom: 3.5rem;
  }
  .hero-cta {
    display: inline-flex;
    align-items: center;
    gap: 1.5rem;
    font-size: 0.7rem;
    font-weight: 500;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--charcoal);
    text-decoration: none;
    position: relative;
    width: fit-content;
  }
  .hero-cta .cta-line {
    width: 50px; height: 1px;
    background: var(--charcoal);
    transition: width 0.5s ease;
  }
  .hero-cta:hover .cta-line { width: 80px; background: var(--gold); }
  .hero-cta:hover { color: var(--gold); }

  .hero-right {
    position: relative;
    overflow: hidden;
    opacity: 0;
    animation: fadeIn 1.2s ease 2.3s forwards;
  }
  .hero-right::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, rgba(200,169,110,0.12) 0%, transparent 60%);
    z-index: 2;
  }
  .hero-img-wrap {
    position: absolute;
    inset: 0;
    background: 
      linear-gradient(180deg, #D4C4A8 0%, #B8A88A 40%, #8C7A62 100%);
  }
  /* Decorative curtain SVG illustration */
  .curtain-art {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
  }
  .floating-badge {
    position: absolute;
    bottom: 4rem;
    left: -2rem;
    z-index: 10;
    background: var(--warm-dark);
    color: var(--cream);
    padding: 1.5rem 2rem;
    min-width: 180px;
    animation: floatUp 3s ease-in-out infinite;
  }
  .floating-badge .badge-num {
    font-family: 'Cormorant Garamond', serif;
    font-size: 2.5rem;
    font-weight: 300;
    color: var(--gold);
    line-height: 1;
  }
  .floating-badge .badge-label {
    font-size: 0.6rem;
    font-weight: 500;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: var(--muted);
    margin-top: 0.3rem;
  }
  @keyframes floatUp {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-8px); }
  }

  /* Scroll indicator */
  .scroll-hint {
    position: absolute;
    bottom: 3rem;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    opacity: 0;
    animation: fadeIn 1s ease 3s forwards;
  }
  .scroll-hint span {
    font-size: 0.6rem;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--muted);
  }
  .scroll-line {
    width: 1px;
    height: 60px;
    background: linear-gradient(to bottom, var(--muted), transparent);
    animation: scrollDrop 2s ease infinite;
  }
  @keyframes scrollDrop {
    0% { transform: scaleY(0); transform-origin: top; }
    50% { transform: scaleY(1); transform-origin: top; }
    51% { transform: scaleY(1); transform-origin: bottom; }
    100% { transform: scaleY(0); transform-origin: bottom; }
  }

  /* MARQUEE */
  .marquee-section {
    background: var(--warm-dark);
    padding: 1.5rem 0;
    overflow: hidden;
    border-top: 1px solid rgba(200,169,110,0.2);
  }
  .marquee-track {
    display: flex;
    gap: 0;
    animation: marquee 22s linear infinite;
    white-space: nowrap;
  }
  .marquee-item {
    display: flex;
    align-items: center;
    gap: 2rem;
    padding: 0 2rem;
    font-size: 0.7rem;
    font-weight: 500;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--muted);
  }
  .marquee-item span { color: var(--gold); font-size: 1.2rem; }
  @keyframes marquee {
    from { transform: translateX(0); }
    to { transform: translateX(-50%); }
  }

  /* SECTION commons */
  section { position: relative; }
  .section-label {
    font-size: 0.62rem;
    font-weight: 500;
    letter-spacing: 0.3em;
    text-transform: uppercase;
    color: var(--gold);
    margin-bottom: 1.5rem;
  }
  .section-title {
    font-family: 'Cormorant Garamond', serif;
    font-size: clamp(2.5rem, 5vw, 4.5rem);
    font-weight: 300;
    line-height: 1.1;
  }
  .section-title em { font-style: italic; color: var(--gold); }

  /* ABOUT */
  .about {
    padding: 10rem 4rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 8rem;
    align-items: center;
  }
  .about-left .section-title { margin-bottom: 2.5rem; }
  .about-text {
    font-size: 0.85rem;
    font-weight: 300;
    line-height: 1.9;
    color: var(--muted);
    margin-bottom: 1.5rem;
  }
  .about-stats {
    display: flex;
    gap: 3rem;
    margin-top: 3rem;
    padding-top: 3rem;
    border-top: 1px solid var(--linen);
  }
  .stat-num {
    font-family: 'Cormorant Garamond', serif;
    font-size: 2.8rem;
    font-weight: 300;
    color: var(--charcoal);
    line-height: 1;
  }
  .stat-num span { color: var(--gold); }
  .stat-label {
    font-size: 0.62rem;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: var(--muted);
    margin-top: 0.3rem;
  }
  .about-right {
    position: relative;
    height: 600px;
  }
  .about-img-main {
    position: absolute;
    right: 0; top: 0;
    width: 80%;
    height: 80%;
    background: linear-gradient(160deg, #C8B89A 0%, #9A8570 100%);
    overflow: hidden;
  }
  .about-img-main svg { width: 100%; height: 100%; }
  .about-img-accent {
    position: absolute;
    left: 0; bottom: 0;
    width: 55%;
    height: 50%;
    background: var(--warm-dark);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2rem;
  }
  .about-img-accent blockquote {
    font-family: 'Cormorant Garamond', serif;
    font-size: 1.2rem;
    font-style: italic;
    color: var(--linen);
    line-height: 1.6;
  }
  .about-img-accent blockquote footer {
    font-family: 'Montserrat', sans-serif;
    font-size: 0.6rem;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--gold);
    margin-top: 1rem;
    font-style: normal;
  }
  .about-decor {
    position: absolute;
    top: 50%;
    right: -2rem;
    transform: translateY(-50%);
    width: 80px;
    height: 80px;
    border: 1px solid var(--gold);
    border-radius: 50%;
    opacity: 0.4;
  }

  /* PRODUCTS / COLLECTION */
  .collection {
    padding: 8rem 4rem;
    background: var(--warm-dark);
  }
  .collection-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    margin-bottom: 5rem;
  }
  .collection-header .section-title { color: var(--cream); }
  .collection-header .section-label { color: var(--gold); }
  .view-all {
    display: flex;
    align-items: center;
    gap: 1rem;
    font-size: 0.65rem;
    font-weight: 500;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--muted);
    text-decoration: none;
    transition: color 0.3s;
  }
  .view-all:hover { color: var(--gold); }
  .view-all::after {
    content: '→';
    font-size: 1.2rem;
    transition: transform 0.3s;
  }
  .view-all:hover::after { transform: translateX(4px); }

  .products-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2px;
  }
  .product-card {
    position: relative;
    overflow: hidden;
    cursor: none;
  }
  .product-card:first-child {
    grid-row: span 2;
  }
  .product-img {
    height: 320px;
    position: relative;
    overflow: hidden;
    transition: transform 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  }
  .product-card:first-child .product-img { height: 100%; min-height: 640px; }
  .product-img-inner {
    width: 100%;
    height: 100%;
    transition: transform 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  }
  .product-card:hover .product-img-inner { transform: scale(1.06); }
  .product-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(to top, rgba(28,23,20,0.9) 0%, transparent 50%);
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 2rem;
    transition: background 0.4s;
  }
  .product-card:hover .product-overlay {
    background: linear-gradient(to top, rgba(28,23,20,0.95) 0%, rgba(28,23,20,0.3) 100%);
  }
  .product-cat {
    font-size: 0.6rem;
    font-weight: 500;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--gold);
    margin-bottom: 0.5rem;
  }
  .product-name {
    font-family: 'Cormorant Garamond', serif;
    font-size: 1.6rem;
    font-weight: 300;
    color: var(--cream);
    line-height: 1.2;
  }
  .product-detail {
    font-size: 0.7rem;
    color: var(--muted);
    margin-top: 0.8rem;
    opacity: 0;
    transform: translateY(10px);
    transition: all 0.4s ease;
  }
  .product-card:hover .product-detail {
    opacity: 1;
    transform: translateY(0);
  }

  /* gradient backgrounds for cards */
  .bg-c1 { background: linear-gradient(160deg, #D4B896 0%, #9A7A5A 100%); }
  .bg-c2 { background: linear-gradient(160deg, #B8C4CA 0%, #7A9AA8 100%); }
  .bg-c3 { background: linear-gradient(160deg, #C4B8D0 0%, #8A7A9A 100%); }
  .bg-c4 { background: linear-gradient(160deg, #C8C4A0 0%, #8A8660 100%); }
  .bg-c5 { background: linear-gradient(160deg, #D0C0A0 0%, #A08060 100%); }

  /* PROCESS */
  .process {
    padding: 10rem 4rem;
    position: relative;
  }
  .process::before {
    content: '';
    position: absolute;
    top: 0; right: 0;
    width: 35%;
    height: 100%;
    background: var(--linen);
  }
  .process-header {
    max-width: 50%;
    margin-bottom: 6rem;
    position: relative;
  }
  .process-header .section-title { margin-top: 1rem; }
  .process-steps {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 2rem;
    position: relative;
  }
  .process-steps::before {
    content: '';
    position: absolute;
    top: 2.5rem;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(to right, var(--gold) 0%, var(--linen) 100%);
  }
  .step {
    position: relative;
    padding-top: 5rem;
  }
  .step-num {
    position: absolute;
    top: 0;
    width: 5rem;
    height: 5rem;
    border: 1px solid var(--gold);
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Cormorant Garamond', serif;
    font-size: 1.4rem;
    color: var(--gold);
    background: var(--cream);
  }
  .step-title {
    font-family: 'Cormorant Garamond', serif;
    font-size: 1.4rem;
    font-weight: 400;
    margin-bottom: 1rem;
  }
  .step-text {
    font-size: 0.78rem;
    font-weight: 300;
    line-height: 1.8;
    color: var(--muted);
  }

  /* TESTIMONIAL */
  .testimonial-section {
    padding: 8rem 4rem;
    background: linear-gradient(135deg, var(--charcoal) 0%, var(--warm-dark) 100%);
    text-align: center;
    overflow: hidden;
    position: relative;
  }
  .testimonial-section::before,
  .testimonial-section::after {
    content: '❝';
    position: absolute;
    font-family: 'Cormorant Garamond', serif;
    font-size: 20rem;
    color: rgba(200,169,110,0.05);
    line-height: 1;
  }
  .testimonial-section::before { top: -4rem; left: 2rem; }
  .testimonial-section::after { bottom: -8rem; right: 2rem; content: '❞'; }
  .testimonials-wrapper {
    position: relative;
    overflow: hidden;
    max-width: 800px;
    margin: 0 auto;
  }
  .testimonials-inner {
    display: flex;
    transition: transform 0.8s cubic-bezier(0.76, 0, 0.24, 1);
  }
  .testimonial-item {
    min-width: 100%;
    padding: 0 2rem;
  }
  .t-quote {
    font-family: 'Cormorant Garamond', serif;
    font-size: clamp(1.4rem, 3vw, 2rem);
    font-weight: 300;
    font-style: italic;
    color: var(--cream);
    line-height: 1.6;
    margin-bottom: 2.5rem;
  }
  .t-author {
    font-size: 0.65rem;
    font-weight: 500;
    letter-spacing: 0.25em;
    text-transform: uppercase;
    color: var(--gold);
  }
  .t-role {
    font-size: 0.6rem;
    letter-spacing: 0.1em;
    color: var(--muted);
    margin-top: 0.3rem;
    text-transform: uppercase;
  }
  .t-nav {
    display: flex;
    justify-content: center;
    gap: 0.8rem;
    margin-top: 3rem;
  }
  .t-dot {
    width: 6px; height: 6px;
    border-radius: 50%;
    background: var(--muted);
    cursor: pointer;
    transition: all 0.3s;
  }
  .t-dot.active {
    background: var(--gold);
    width: 24px;
    border-radius: 3px;
  }

  /* GALLERY ROW */
  .gallery-strip {
    display: flex;
    height: 60vh;
    overflow: hidden;
  }
  .gallery-strip-item {
    flex: 1;
    position: relative;
    overflow: hidden;
    transition: flex 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    cursor: none;
  }
  .gallery-strip-item:hover { flex: 2.5; }
  .gallery-strip-item .g-img {
    width: 100%;
    height: 100%;
    transition: transform 0.7s ease;
  }
  .gallery-strip-item:hover .g-img { transform: scale(1.04); }
  .gallery-strip-item .g-label {
    position: absolute;
    bottom: 0; left: 0; right: 0;
    padding: 2rem 1.5rem;
    background: linear-gradient(to top, rgba(28,23,20,0.9) 0%, transparent 100%);
    font-family: 'Cormorant Garamond', serif;
    font-size: 1.4rem;
    font-style: italic;
    color: var(--cream);
    opacity: 0;
    transform: translateY(10px);
    transition: all 0.4s ease;
  }
  .gallery-strip-item:hover .g-label { opacity: 1; transform: translateY(0); }
  .bg-g1 { background: linear-gradient(180deg, #C5A882 0%, #7A5A3A 100%); }
  .bg-g2 { background: linear-gradient(180deg, #B0BCC0 0%, #607480 100%); }
  .bg-g3 { background: linear-gradient(180deg, #C0B0C5 0%, #70607A 100%); }
  .bg-g4 { background: linear-gradient(180deg, #BCBA90 0%, #6A6840 100%); }
  .bg-g5 { background: linear-gradient(180deg, #C8A88A 0%, #785840 100%); }

  /* CONTACT */
  .contact {
    padding: 10rem 4rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 8rem;
    align-items: center;
    background: var(--cream);
  }
  .contact-info .section-title { margin: 1rem 0 2rem; }
  .contact-desc {
    font-size: 0.85rem;
    font-weight: 300;
    line-height: 1.9;
    color: var(--muted);
    margin-bottom: 3rem;
  }
  .contact-details { list-style: none; }
  .contact-details li {
    display: flex;
    gap: 1.5rem;
    align-items: flex-start;
    padding: 1.5rem 0;
    border-bottom: 1px solid var(--linen);
    font-size: 0.78rem;
    color: var(--muted);
  }
  .contact-details li strong {
    font-size: 0.6rem;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: var(--gold);
    min-width: 80px;
    padding-top: 0.1rem;
    font-weight: 500;
  }
  .contact-form {
    background: var(--warm-dark);
    padding: 4rem;
  }
  .form-title {
    font-family: 'Cormorant Garamond', serif;
    font-size: 2rem;
    font-weight: 300;
    color: var(--cream);
    margin-bottom: 2.5rem;
  }
  .form-group {
    margin-bottom: 2rem;
    position: relative;
  }
  .form-group input,
  .form-group textarea,
  .form-group select {
    width: 100%;
    background: transparent;
    border: none;
    border-bottom: 1px solid rgba(255,255,255,0.15);
    padding: 1rem 0;
    font-family: 'Montserrat', sans-serif;
    font-size: 0.78rem;
    color: var(--cream);
    outline: none;
    transition: border-color 0.3s;
    cursor: none;
  }
  .form-group select option { background: var(--warm-dark); }
  .form-group input:focus,
  .form-group textarea:focus,
  .form-group select:focus {
    border-bottom-color: var(--gold);
  }
  .form-group label {
    position: absolute;
    top: 1rem;
    left: 0;
    font-size: 0.65rem;
    font-weight: 500;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: var(--muted);
    pointer-events: none;
    transition: all 0.3s;
  }
  .form-group input:focus ~ label,
  .form-group input:not(:placeholder-shown) ~ label,
  .form-group textarea:focus ~ label,
  .form-group textarea:not(:placeholder-shown) ~ label,
  .form-group select:focus ~ label {
    top: -0.8rem;
    font-size: 0.55rem;
    color: var(--gold);
  }
  .form-group textarea { resize: none; height: 80px; }
  .form-submit {
    width: 100%;
    background: var(--gold);
    border: none;
    padding: 1.3rem;
    font-family: 'Montserrat', sans-serif;
    font-size: 0.7rem;
    font-weight: 700;
    letter-spacing: 0.25em;
    text-transform: uppercase;
    color: var(--warm-dark);
    cursor: none;
    transition: all 0.4s;
    margin-top: 1rem;
  }
  .form-submit:hover {
    background: var(--gold-light);
    transform: translateY(-2px);
  }

  /* FOOTER */
  footer {
    background: var(--warm-dark);
    padding: 5rem 4rem 3rem;
    border-top: 1px solid rgba(200,169,110,0.15);
  }
  .footer-top {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr 1fr;
    gap: 4rem;
    padding-bottom: 4rem;
    border-bottom: 1px solid rgba(255,255,255,0.06);
    margin-bottom: 3rem;
  }
  .footer-brand .nav-logo { font-size: 1.8rem; display: block; margin-bottom: 1.5rem; color: var(--cream); }
  .footer-brand .nav-logo em { color: var(--gold); }
  .footer-about {
    font-size: 0.75rem;
    font-weight: 300;
    line-height: 1.8;
    color: var(--muted);
  }
  .footer-col h4 {
    font-size: 0.62rem;
    font-weight: 700;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--cream);
    margin-bottom: 1.5rem;
  }
  .footer-col ul { list-style: none; }
  .footer-col ul li {
    margin-bottom: 0.8rem;
  }
  .footer-col ul li a {
    font-size: 0.75rem;
    font-weight: 300;
    color: var(--muted);
    text-decoration: none;
    transition: color 0.3s;
  }
  .footer-col ul li a:hover { color: var(--gold); }
  .footer-bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 0.65rem;
    color: rgba(122,111,99,0.5);
  }
  .social-links {
    display: flex;
    gap: 1.5rem;
  }
  .social-links a {
    font-size: 0.65rem;
    letter-spacing: 0.15em;
    color: var(--muted);
    text-decoration: none;
    text-transform: uppercase;
    transition: color 0.3s;
  }
  .social-links a:hover { color: var(--gold); }

  /* REVEAL ANIMATIONS */
  .reveal {
    opacity: 0;
    transform: translateY(50px);
    transition: opacity 0.9s ease, transform 0.9s ease;
  }
  .reveal.visible {
    opacity: 1;
    transform: translateY(0);
  }
  .reveal-delay-1 { transition-delay: 0.15s; }
  .reveal-delay-2 { transition-delay: 0.3s; }
  .reveal-delay-3 { transition-delay: 0.45s; }
  .reveal-delay-4 { transition-delay: 0.6s; }

  /* Gold line decoration */
  .gold-line {
    width: 50px;
    height: 2px;
    background: var(--gold);
    margin: 1.5rem 0;
  }

  /* Responsive */
  @media (max-width: 900px) {
    nav { padding: 1.5rem 2rem; }
    .nav-links { display: none; }
    .hero { grid-template-columns: 1fr; }
    .hero-right { display: none; }
    .hero-left { padding: 7rem 2rem 5rem; }
    .about, .contact { grid-template-columns: 1fr; gap: 4rem; padding: 5rem 2rem; }
    .about-right { height: 300px; }
    .collection { padding: 5rem 2rem; }
    .products-grid { grid-template-columns: 1fr; }
    .product-card:first-child { grid-row: span 1; }
    .product-card:first-child .product-img { min-height: 320px; }
    .process { padding: 5rem 2rem; }
    .process::before { display: none; }
    .process-steps { grid-template-columns: 1fr 1fr; }
    .gallery-strip { height: 200px; }
    .footer-top { grid-template-columns: 1fr 1fr; gap: 2rem; }
  }
</style>
</head>
<body>

<!-- Custom cursor -->
<div class="cursor" id="cursor"></div>
<div class="cursor-follower" id="cursorFollower"></div>

<!-- Loader -->
<div id="loader">
  <div class="curtain-left"></div>
  <div class="curtain-right"></div>
  <div class="loader-text">VELOUR <span>&</span> ARTE</div>
</div>

<!-- NAV -->
<nav>
  <a href="#" class="nav-logo">VEL<em>OUR</em></a>
  <ul class="nav-links">
    <li><a href="#coleccion">Colección</a></li>
    <li><a href="#proceso">Proceso</a></li>
    <li><a href="#nosotros">Nosotros</a></li>
    <li><a href="#contacto">Contacto</a></li>
  </ul>
</nav>

<!-- HERO -->
<section class="hero">
  <div class="hero-left">
    <div class="hero-tag">Diseño Exclusivo · Desde 2003</div>
    <h1 class="hero-title">
      El Arte de<br>
      <em>Vestir</em><br>
      Espacios
    </h1>
    <p class="hero-desc">
      Cortinas y textiles de diseño que transforman cada habitación en una obra de arte. Cada pieza es creada a medida, con telas seleccionadas a mano de los mejores telares del mundo.
    </p>
    <a href="#coleccion" class="hero-cta">
      <span class="cta-line"></span>
      Descubrir Colección
    </a>
    <div class="scroll-hint">
      <span>Scroll</span>
      <div class="scroll-line"></div>
    </div>
  </div>
  <div class="hero-right">
    <div class="hero-img-wrap">
      <!-- Decorative curtain SVG -->
      <svg class="curtain-art" viewBox="0 0 600 900" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="curtGrad1" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stop-color="#E8D5B5"/>
            <stop offset="100%" stop-color="#B89A70"/>
          </linearGradient>
          <linearGradient id="curtGrad2" x1="1" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#D4BFA0"/>
            <stop offset="100%" stop-color="#9A7A55"/>
          </linearGradient>
          <filter id="shadow">
            <feDropShadow dx="8" dy="0" stdDeviation="15" flood-opacity="0.4"/>
          </filter>
        </defs>
        <!-- Background -->
        <rect width="600" height="900" fill="#C8B090"/>
        <!-- Window frame suggestion -->
        <rect x="50" y="0" width="500" height="900" fill="rgba(255,255,255,0.08)"/>
        <!-- Left curtain drape -->
        <path d="M0,0 Q80,120 40,280 Q10,420 60,560 Q100,700 30,900 L0,900 Z" fill="url(#curtGrad1)" filter="url(#shadow)"/>
        <path d="M0,0 Q100,100 80,250 Q60,400 90,550 Q120,700 70,900 L-20,900 Z" fill="#C8A870" opacity="0.5"/>
        <!-- Fold lines left -->
        <path d="M40,0 Q55,150 35,300 Q20,450 45,600 Q65,750 35,900" stroke="#A8885A" stroke-width="1" fill="none" opacity="0.5"/>
        <path d="M80,0 Q90,200 70,400 Q55,580 80,780" stroke="#A8885A" stroke-width="0.5" fill="none" opacity="0.3"/>
        <!-- Right curtain drape -->
        <path d="M600,0 Q520,120 560,280 Q590,420 540,560 Q500,700 570,900 L600,900 Z" fill="url(#curtGrad2)" filter="url(#shadow)"/>
        <path d="M600,0 Q500,100 520,250 Q540,400 510,550 Q480,700 530,900 L620,900 Z" fill="#B89060" opacity="0.5"/>
        <!-- Fold lines right -->
        <path d="M560,0 Q545,150 565,300 Q580,450 555,600 Q535,750 565,900" stroke="#9A7848" stroke-width="1" fill="none" opacity="0.5"/>
        <!-- Pelmet / Rod -->
        <rect x="-10" y="0" width="620" height="18" fill="#5A3E28"/>
        <rect x="-10" y="0" width="620" height="4" fill="#8A6444"/>
        <!-- Gold rings -->
        <circle cx="70" cy="9" r="6" fill="none" stroke="#C8A048" stroke-width="2"/>
        <circle cx="130" cy="9" r="6" fill="none" stroke="#C8A048" stroke-width="2"/>
        <circle cx="190" cy="9" r="6" fill="none" stroke="#C8A048" stroke-width="2"/>
        <circle cx="250" cy="9" r="6" fill="none" stroke="#C8A048" stroke-width="2"/>
        <circle cx="310" cy="9" r="6" fill="none" stroke="#C8A048" stroke-width="2"/>
        <circle cx="370" cy="9" r="6" fill="none" stroke="#C8A048" stroke-width="2"/>
        <circle cx="430" cy="9" r="6" fill="none" stroke="#C8A048" stroke-width="2"/>
        <circle cx="490" cy="9" r="6" fill="none" stroke="#C8A048" stroke-width="2"/>
        <!-- Sheer/light fabric in middle -->
        <path d="M90,18 Q110,200 100,400 Q90,600 105,900 L495,900 Q510,600 500,400 Q490,200 510,18 Z" fill="rgba(255,248,235,0.25)"/>
        <!-- Light rays -->
        <path d="M200,18 L180,400 L300,700 L420,400 L400,18" fill="rgba(255,248,210,0.15)"/>
        <!-- Floor reflection -->
        <ellipse cx="300" cy="895" rx="180" ry="8" fill="rgba(0,0,0,0.2)"/>
        <!-- Room background elements -->
        <rect x="120" y="500" width="160" height="200" fill="rgba(100,80,60,0.15)" rx="2"/>
        <rect x="140" y="520" width="60" height="120" fill="rgba(100,80,60,0.2)"/>
        <rect x="220" y="520" width="40" height="120" fill="rgba(100,80,60,0.2)"/>
        <!-- Gold embroidery detail on curtain edge -->
        <path d="M88,18 Q86,100 90,200 Q94,300 88,400 Q82,500 88,600" stroke="#C8A048" stroke-width="2" fill="none" opacity="0.6"/>
        <path d="M512,18 Q514,100 510,200 Q506,300 512,400 Q518,500 512,600" stroke="#C8A048" stroke-width="2" fill="none" opacity="0.6"/>
        <!-- Tiebacks -->
        <path d="M0,450 Q50,420 88,380 Q80,450 88,510 Q50,480 0,460 Z" fill="#9A7848" opacity="0.8"/>
        <path d="M600,450 Q550,420 512,380 Q520,450 512,510 Q550,480 600,460 Z" fill="#887040" opacity="0.8"/>
      </svg>
    </div>
    <div class="floating-badge">
      <div class="badge-num">20+</div>
      <div class="badge-label">Años de experiencia</div>
    </div>
  </div>
</section>

<!-- MARQUEE -->
<div class="marquee-section">
  <div class="marquee-track" id="marqueeTrack">
    <div class="marquee-item"><span>✦</span> Blackout Premium</div>
    <div class="marquee-item"><span>✦</span> Cortinas Romanas</div>
    <div class="marquee-item"><span>✦</span> Lino Natural</div>
    <div class="marquee-item"><span>✦</span> Seda Pura</div>
    <div class="marquee-item"><span>✦</span> Terciopelo Europeo</div>
    <div class="marquee-item"><span>✦</span> Translúcidas</div>
    <div class="marquee-item"><span>✦</span> Cortinas a Medida</div>
    <div class="marquee-item"><span>✦</span> Instalación Incluida</div>
    <div class="marquee-item"><span>✦</span> Blackout Premium</div>
    <div class="marquee-item"><span>✦</span> Cortinas Romanas</div>
    <div class="marquee-item"><span>✦</span> Lino Natural</div>
    <div class="marquee-item"><span>✦</span> Seda Pura</div>
    <div class="marquee-item"><span>✦</span> Terciopelo Europeo</div>
    <div class="marquee-item"><span>✦</span> Translúcidas</div>
    <div class="marquee-item"><span>✦</span> Cortinas a Medida</div>
    <div class="marquee-item"><span>✦</span> Instalación Incluida</div>
  </div>
</div>

<!-- ABOUT -->
<section class="about" id="nosotros">
  <div class="about-left reveal">
    <div class="section-label">Nuestra Historia</div>
    <h2 class="section-title">Artesanía que<br><em>cuenta</em> historias</h2>
    <div class="gold-line"></div>
    <p class="about-text">
      Durante más de dos décadas, hemos transformado espacios con textiles de excepción. Cada cortina que creamos nace de un profundo respeto por el oficio, la calidad y el diseño atemporal.
    </p>
    <p class="about-text">
      Trabajamos exclusivamente con materiales seleccionados de los mejores productores de Europa y Asia, garantizando una calidad que perdura generaciones.
    </p>
    <div class="about-stats">
      <div class="reveal reveal-delay-1">
        <div class="stat-num">850<span>+</span></div>
        <div class="stat-label">Proyectos</div>
      </div>
      <div class="reveal reveal-delay-2">
        <div class="stat-num">35<span>+</span></div>
        <div class="stat-label">Materiales</div>
      </div>
      <div class="reveal reveal-delay-3">
        <div class="stat-num">20<span>+</span></div>
        <div class="stat-label">Años</div>
      </div>
    </div>
  </div>
  <div class="about-right reveal reveal-delay-2">
    <div class="about-img-main">
      <svg viewBox="0 0 400 480" xmlns="http://www.w3.org/2000/svg">
        <rect width="400" height="480" fill="#C8B090"/>
        <path d="M0,0 Q60,80 30,200 Q10,310 40,480 L0,480 Z" fill="#D4BC98"/>
        <path d="M400,0 Q340,80 370,200 Q390,310 360,480 L400,480 Z" fill="#B89870"/>
        <rect x="-5" y="0" width="410" height="12" fill="#4A3020"/>
        <path d="M60,12 Q70,160 60,320 Q50,420 65,480 L335,480 Q350,420 340,320 Q330,160 340,12 Z" fill="rgba(255,245,225,0.3)"/>
        <circle cx="80" cy="6" r="5" fill="none" stroke="#C8A040" stroke-width="1.5"/>
        <circle cx="140" cy="6" r="5" fill="none" stroke="#C8A040" stroke-width="1.5"/>
        <circle cx="200" cy="6" r="5" fill="none" stroke="#C8A040" stroke-width="1.5"/>
        <circle cx="260" cy="6" r="5" fill="none" stroke="#C8A040" stroke-width="1.5"/>
        <circle cx="320" cy="6" r="5" fill="none" stroke="#C8A040" stroke-width="1.5"/>
        <path d="M0,340 Q40,310 62,270 Q55,340 62,400 Q38,372 0,355 Z" fill="#8A6844" opacity="0.7"/>
        <path d="M400,340 Q360,310 338,270 Q345,340 338,400 Q362,372 400,355 Z" fill="#7A5838" opacity="0.7"/>
      </svg>
    </div>
    <div class="about-img-accent">
      <blockquote>
        "La luz que entra por una ventana bien vestida no solo ilumina, transforma."
        <footer>— Fundadores de Velour</footer>
      </blockquote>
    </div>
    <div class="about-decor"></div>
  </div>
</section>

<!-- COLLECTION -->
<section class="collection" id="coleccion">
  <div class="collection-header reveal">
    <div>
      <div class="section-label">Nuestra Colección</div>
      <h2 class="section-title">Textiles que<br><em>definen</em> espacios</h2>
    </div>
    <a href="#" class="view-all">Ver Todo</a>
  </div>
  <div class="products-grid">
    <div class="product-card reveal">
      <div class="product-img bg-c1">
        <div class="product-img-inner">
          <svg viewBox="0 0 400 640" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <rect width="400" height="640" fill="#D4B896"/>
            <path d="M0,0 Q80,160 40,360 Q10,520 50,640 L0,640Z" fill="#C4A882" opacity="0.8"/>
            <path d="M400,0 Q320,160 360,360 Q390,520 350,640 L400,640Z" fill="#B89070"/>
            <rect x="-5" y="0" width="410" height="16" fill="#5A4030"/>
            <path d="M80,16 Q90,200 80,400 Q75,540 85,640 L315,640 Q325,540 320,400 Q310,200 320,16Z" fill="rgba(255,245,220,0.2)"/>
            <circle cx="100" cy="8" r="7" fill="none" stroke="#C8A040" stroke-width="2"/>
            <circle cx="160" cy="8" r="7" fill="none" stroke="#C8A040" stroke-width="2"/>
            <circle cx="200" cy="8" r="7" fill="none" stroke="#C8A040" stroke-width="2"/>
            <circle cx="240" cy="8" r="7" fill="none" stroke="#C8A040" stroke-width="2"/>
            <circle cx="300" cy="8" r="7" fill="none" stroke="#C8A040" stroke-width="2"/>
            <path d="M0,480 Q50,440 82,390 Q74,480 82,560 Q45,525 0,500Z" fill="#8A6844" opacity="0.8"/>
            <path d="M400,480 Q350,440 318,390 Q326,480 318,560 Q355,525 400,500Z" fill="#7A5838" opacity="0.8"/>
            <path d="M80,16 Q78,200 82,400 Q84,540 80,640" stroke="#C8A048" stroke-width="1.5" fill="none" opacity="0.5"/>
            <path d="M320,16 Q322,200 318,400 Q316,540 320,640" stroke="#C8A048" stroke-width="1.5" fill="none" opacity="0.5"/>
          </svg>
        </div>
        <div class="product-overlay">
          <div class="product-cat">Colección Clásica</div>
          <div class="product-name">Terciopelo<br>Veneciano</div>
          <div class="product-detail">Tejido artesanal italiano · 12 colores disponibles</div>
        </div>
      </div>
    </div>
    <div class="product-card reveal reveal-delay-1">
      <div class="product-img bg-c2">
        <div class="product-img-inner">
          <svg viewBox="0 0 400 320" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <rect width="400" height="320" fill="#B8C4CA"/>
            <rect x="-5" y="0" width="410" height="10" fill="#4A5055"/>
            <path d="M0,0 L0,320 Q80,270 70,180 Q60,100 0,60Z" fill="#A8B4BA" opacity="0.7"/>
            <path d="M400,0 L400,320 Q320,270 330,180 Q340,100 400,60Z" fill="#98A8B0" opacity="0.7"/>
            <path d="M70,10 Q80,160 70,320 L330,320 Q320,160 330,10Z" fill="rgba(220,235,245,0.25)"/>
            <line x1="70" y1="10" x2="70" y2="320" stroke="#88A0AA" stroke-width="1" opacity="0.5"/>
            <line x1="330" y1="10" x2="330" y2="320" stroke="#88A0AA" stroke-width="1" opacity="0.5"/>
          </svg>
        </div>
        <div class="product-overlay">
          <div class="product-cat">Colección Moderna</div>
          <div class="product-name">Lino Nórdico</div>
          <div class="product-detail">Textura natural · Efecto translúcido</div>
        </div>
      </div>
    </div>
    <div class="product-card reveal reveal-delay-2">
      <div class="product-img bg-c3">
        <div class="product-img-inner">
          <svg viewBox="0 0 400 320" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <rect width="400" height="320" fill="#C4B8D0"/>
            <rect x="-5" y="0" width="410" height="10" fill="#4A405A"/>
            <path d="M0,0 Q60,50 40,150 Q20,250 60,320L0,320Z" fill="#B4A8C4"/>
            <path d="M400,0 Q340,50 360,150 Q380,250 340,320L400,320Z" fill="#A898B8"/>
            <!-- Roman blind fold lines -->
            <line x1="60" y1="10" x2="60" y2="320" stroke="#9888AC" stroke-width="0.5" opacity="0.6"/>
            <line x1="340" y1="10" x2="340" y2="320" stroke="#9888AC" stroke-width="0.5" opacity="0.6"/>
            <line x1="0" y1="80" x2="400" y2="80" stroke="#9888AC" stroke-width="1" opacity="0.4"/>
            <line x1="0" y1="160" x2="400" y2="160" stroke="#9888AC" stroke-width="1" opacity="0.4"/>
            <line x1="0" y1="240" x2="400" y2="240" stroke="#9888AC" stroke-width="1" opacity="0.4"/>
          </svg>
        </div>
        <div class="product-overlay">
          <div class="product-cat">Cortina Romana</div>
          <div class="product-name">Seda Lavanda</div>
          <div class="product-detail">Sistema plegable · Motor eléctrico</div>
        </div>
      </div>
    </div>
    <div class="product-card reveal reveal-delay-1">
      <div class="product-img bg-c4">
        <div class="product-img-inner">
          <svg viewBox="0 0 400 320" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <rect width="400" height="320" fill="#C8C4A0"/>
            <rect x="-5" y="0" width="410" height="10" fill="#504830"/>
            <path d="M0,0 Q70,40 50,140 Q30,240 70,320L0,320Z" fill="#BAB490"/>
            <path d="M400,0 Q330,40 350,140 Q370,240 330,320L400,320Z" fill="#ACAA80"/>
            <path d="M70,10 Q80,100 70,200 Q65,270 72,320 L328,320 Q335,270 330,200 Q320,100 330,10Z" fill="rgba(245,240,210,0.3)"/>
            <!-- Weave pattern -->
            <path d="M70,60 L330,60" stroke="#A8A070" stroke-width="1" opacity="0.5"/>
            <path d="M70,110 L330,110" stroke="#A8A070" stroke-width="1" opacity="0.5"/>
            <path d="M70,160 L330,160" stroke="#A8A070" stroke-width="1" opacity="0.5"/>
            <path d="M70,210 L330,210" stroke="#A8A070" stroke-width="1" opacity="0.5"/>
            <path d="M70,260 L330,260" stroke="#A8A070" stroke-width="1" opacity="0.5"/>
          </svg>
        </div>
        <div class="product-overlay">
          <div class="product-cat">Blackout</div>
          <div class="product-name">Yute Natural</div>
          <div class="product-detail">Bloqueo total de luz · Aislamiento térmico</div>
        </div>
      </div>
    </div>
    <div class="product-card reveal reveal-delay-2">
      <div class="product-img bg-c5">
        <div class="product-img-inner">
          <svg viewBox="0 0 400 320" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <rect width="400" height="320" fill="#D0C0A0"/>
            <rect x="-5" y="0" width="410" height="10" fill="#503820"/>
            <path d="M0,0 Q80,60 50,180 Q20,280 60,320L0,320Z" fill="#C0B090"/>
            <path d="M400,0 Q320,60 350,180 Q380,280 340,320L400,320Z" fill="#B0A080"/>
            <!-- Sheer curtain with panels -->
            <path d="M60,10 L60,320 M160,10 L160,320 M240,10 L240,320 M340,10 L340,320" stroke="#C0A870" stroke-width="0.8" opacity="0.4"/>
            <path d="M60,10 Q80,100 70,200 Q65,270 68,320L162,320 Q158,270 155,200 Q145,100 160,10Z" fill="rgba(255,245,225,0.3)"/>
            <path d="M240,10 Q260,100 250,200 Q245,270 248,320L342,320 Q338,270 335,200 Q325,100 340,10Z" fill="rgba(255,245,225,0.3)"/>
          </svg>
        </div>
        <div class="product-overlay">
          <div class="product-cat">Colección Luxury</div>
          <div class="product-name">Algodón<br>Egypte</div>
          <div class="product-detail">400 hilos · Bordados artesanales</div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- PROCESS -->
<section class="process" id="proceso">
  <div class="process-header reveal">
    <div class="section-label">Cómo trabajamos</div>
    <h2 class="section-title">Un proceso<br><em>perfecto</em></h2>
  </div>
  <div class="process-steps">
    <div class="step reveal">
      <div class="step-num">01</div>
      <h3 class="step-title">Consulta & Visita</h3>
      <p class="step-text">Un especialista visita tu espacio para asesorarte sobre estilos, materiales y tonalidades que mejor se adapten a tu hogar.</p>
    </div>
    <div class="step reveal reveal-delay-1">
      <div class="step-num">02</div>
      <h3 class="step-title">Diseño a Medida</h3>
      <p class="step-text">Creamos una propuesta personalizada con muestras físicas de tela, visualizaciones digitales y opciones de confección.</p>
    </div>
    <div class="step reveal reveal-delay-2">
      <div class="step-num">03</div>
      <h3 class="step-title">Confección</h3>
      <p class="step-text">Nuestros artesanos trabajan cada pieza en nuestro taller con los estándares más exigentes de calidad y detalle.</p>
    </div>
    <div class="step reveal reveal-delay-3">
      <div class="step-num">04</div>
      <h3 class="step-title">Instalación</h3>
      <p class="step-text">Nuestro equipo técnico realiza la instalación profesional, garantizando un acabado perfecto y duradero en tu espacio.</p>
    </div>
  </div>
</section>

<!-- TESTIMONIALS -->
<section class="testimonial-section">
  <div class="section-label" style="color:var(--gold);margin-bottom:3rem;">Lo que dicen nuestros clientes</div>
  <div class="testimonials-wrapper">
    <div class="testimonials-inner" id="testimonialInner">
      <div class="testimonial-item">
        <p class="t-quote">"Velour transformó completamente nuestra sala de estar. Las cortinas de terciopelo que eligieron son absolutamente perfectas — cada detalle, cada pliegue, es una obra de arte."</p>
        <div class="t-author">María Elena Rodríguez</div>
        <div class="t-role">Diseñadora de Interiores · Madrid</div>
      </div>
      <div class="testimonial-item">
        <p class="t-quote">"El servicio fue excepcional desde la primera llamada hasta la instalación. Han vestido cuatro de mis propiedades y el resultado siempre supera las expectativas."</p>
        <div class="t-author">Carlos Méndez</div>
        <div class="t-role">Arquitecto · Buenos Aires</div>
      </div>
      <div class="testimonial-item">
        <p class="t-quote">"La calidad de los materiales y la atención al detalle son incomparables. Mis clientes siempre preguntan por las cortinas, y siempre los remito a Velour."</p>
        <div class="t-author">Sofía Alvarado</div>
        <div class="t-role">Decoradora de Interiores · Ciudad de México</div>
      </div>
    </div>
  </div>
  <div class="t-nav" id="tNav">
    <div class="t-dot active" onclick="goToTestimonial(0)"></div>
    <div class="t-dot" onclick="goToTestimonial(1)"></div>
    <div class="t-dot" onclick="goToTestimonial(2)"></div>
  </div>
</section>

<!-- GALLERY STRIP -->
<div class="gallery-strip">
  <div class="gallery-strip-item bg-g1">
    <svg class="g-img" viewBox="0 0 200 600" xmlns="http://www.w3.org/2000/svg"><rect width="200" height="600" fill="#C5A882"/><path d="M0,0 Q50,100 30,300 Q10,460 40,600L0,600Z" fill="#D4BC98" opacity="0.7"/><rect x="-2" y="0" width="204" height="10" fill="#5A3E28"/><circle cx="40" cy="5" r="4" fill="none" stroke="#C8A040" stroke-width="1.5"/><circle cx="80" cy="5" r="4" fill="none" stroke="#C8A040" stroke-width="1.5"/><circle cx="120" cy="5" r="4" fill="none" stroke="#C8A040" stroke-width="1.5"/><circle cx="160" cy="5" r="4" fill="none" stroke="#C8A040" stroke-width="1.5"/></svg>
    <div class="g-label">Salones</div>
  </div>
  <div class="gallery-strip-item bg-g2">
    <svg class="g-img" viewBox="0 0 200 600" xmlns="http://www.w3.org/2000/svg"><rect width="200" height="600" fill="#B0BCC0"/><path d="M0,0 Q40,80 30,250 Q15,400 35,600L0,600Z" fill="#C0CCCE" opacity="0.6"/><rect x="-2" y="0" width="204" height="10" fill="#405055"/><line x1="35" y1="10" x2="35" y2="600" stroke="#9AB0B8" stroke-width="0.5" opacity="0.5"/><line x1="165" y1="10" x2="165" y2="600" stroke="#9AB0B8" stroke-width="0.5" opacity="0.5"/></svg>
    <div class="g-label">Dormitorios</div>
  </div>
  <div class="gallery-strip-item bg-g3">
    <svg class="g-img" viewBox="0 0 200 600" xmlns="http://www.w3.org/2000/svg"><rect width="200" height="600" fill="#C0B0C5"/><path d="M0,0 Q55,90 35,280 Q15,450 45,600L0,600Z" fill="#D0C0D5" opacity="0.6"/><rect x="-2" y="0" width="204" height="10" fill="#504055"/><line x1="0" y1="150" x2="200" y2="150" stroke="#A090B0" stroke-width="1" opacity="0.4"/><line x1="0" y1="300" x2="200" y2="300" stroke="#A090B0" stroke-width="1" opacity="0.4"/><line x1="0" y1="450" x2="200" y2="450" stroke="#A090B0" stroke-width="1" opacity="0.4"/></svg>
    <div class="g-label">Estudios</div>
  </div>
  <div class="gallery-strip-item bg-g4">
    <svg class="g-img" viewBox="0 0 200 600" xmlns="http://www.w3.org/2000/svg"><rect width="200" height="600" fill="#BCBA90"/><path d="M0,0 Q45,70 30,240 Q15,400 40,600L0,600Z" fill="#CECA9E" opacity="0.6"/><rect x="-2" y="0" width="204" height="10" fill="#504830"/><circle cx="50" cy="5" r="3.5" fill="none" stroke="#C0A038" stroke-width="1.5"/><circle cx="100" cy="5" r="3.5" fill="none" stroke="#C0A038" stroke-width="1.5"/><circle cx="150" cy="5" r="3.5" fill="none" stroke="#C0A038" stroke-width="1.5"/></svg>
    <div class="g-label">Comedores</div>
  </div>
  <div class="gallery-strip-item bg-g5">
    <svg class="g-img" viewBox="0 0 200 600" xmlns="http://www.w3.org/2000/svg"><rect width="200" height="600" fill="#C8A88A"/><path d="M0,0 Q60,80 40,260 Q20,430 50,600L0,600Z" fill="#D8B898" opacity="0.7"/><rect x="-2" y="0" width="204" height="10" fill="#503820"/><path d="M40,10 Q45,150 38,300 Q33,430 40,600" stroke="#C8A040" stroke-width="1.5" fill="none" opacity="0.5"/><path d="M160,10 Q155,150 162,300 Q167,430 160,600" stroke="#C8A040" stroke-width="1.5" fill="none" opacity="0.5"/></svg>
    <div class="g-label">Oficinas</div>
  </div>
</div>

<!-- CONTACT -->
<section class="contact" id="contacto">
  <div class="contact-info reveal">
    <div class="section-label">Hablemos</div>
    <h2 class="section-title">Transforma tu<br><em>espacio</em> hoy</h2>
    <p class="contact-desc">
      Agenda una consulta gratuita y descubre cómo nuestros textiles pueden dar vida a cualquier ambiente. Visitamos tu hogar sin costo ni compromiso.
    </p>
    <ul class="contact-details">
      <li><strong>Teléfono</strong> +34 91 456 78 90</li>
      <li><strong>Email</strong> hola@velourcortinas.com</li>
      <li><strong>Taller</strong> Calle del Diseño 24, Madrid</li>
      <li><strong>Horario</strong> Lun – Sáb · 9:00 – 19:00</li>
    </ul>
  </div>
  <div class="contact-form reveal reveal-delay-1">
    <div class="form-title">Consulta Gratuita</div>
    <div class="form-group">
      <input type="text" id="nombre" placeholder=" ">
      <label for="nombre">Nombre completo</label>
    </div>
    <div class="form-group">
      <input type="email" id="email" placeholder=" ">
      <label for="email">Correo electrónico</label>
    </div>
    <div class="form-group">
      <select id="tipo" style="color:var(--muted)">
        <option value="" disabled selected></option>
        <option value="salon">Sala de Estar</option>
        <option value="dorm">Dormitorio</option>
        <option value="oficina">Oficina</option>
        <option value="otro">Otro</option>
      </select>
      <label for="tipo">Tipo de espacio</label>
    </div>
    <div class="form-group">
      <textarea id="mensaje" placeholder=" "></textarea>
      <label for="mensaje">Cuéntanos tu proyecto</label>
    </div>
    <button class="form-submit" onclick="handleSubmit()">Solicitar Consulta</button>
  </div>
</section>

<!-- FOOTER -->
<footer>
  <div class="footer-top">
    <div class="footer-brand">
      <span class="nav-logo">VEL<em>OUR</em></span>
      <p class="footer-about">Creadores de ambientes únicos a través de cortinas y textiles de excepción. Más de veinte años transformando espacios en hogares.</p>
    </div>
    <div class="footer-col">
      <h4>Colección</h4>
      <ul>
        <li><a href="#">Terciopelo</a></li>
        <li><a href="#">Lino Natural</a></li>
        <li><a href="#">Seda Pura</a></li>
        <li><a href="#">Blackout</a></li>
        <li><a href="#">Translúcidas</a></li>
      </ul>
    </div>
    <div class="footer-col">
      <h4>Servicios</h4>
      <ul>
        <li><a href="#">Consulta a Domicilio</a></li>
        <li><a href="#">Confección a Medida</a></li>
        <li><a href="#">Instalación</a></li>
        <li><a href="#">Asesoría de Color</a></li>
        <li><a href="#">Proyectos Contract</a></li>
      </ul>
    </div>
    <div class="footer-col">
      <h4>Empresa</h4>
      <ul>
        <li><a href="#">Nuestra Historia</a></li>
        <li><a href="#">Sostenibilidad</a></li>
        <li><a href="#">Prensa</a></li>
        <li><a href="#">Colaboraciones</a></li>
        <li><a href="#">Contacto</a></li>
      </ul>
    </div>
  </div>
  <div class="footer-bottom">
    <span>©️ 2025 Velour · Todos los derechos reservados</span>
    <div class="social-links">
      <a href="#">Instagram</a>
      <a href="#">Pinterest</a>
      <a href="#">Houzz</a>
    </div>
  </div>
</footer>

<script>
  // CURSOR
  const cursor = document.getElementById('cursor');
  const follower = document.getElementById('cursorFollower');
  let mouseX = 0, mouseY = 0, followerX = 0, followerY = 0;

  document.addEventListener('mousemove', e => {
    mouseX = e.clientX; mouseY = e.clientY;
    cursor.style.left = mouseX - 5 + 'px';
    cursor.style.top = mouseY - 5 + 'px';
  });

  function animateFollower() {
    followerX += (mouseX - followerX) * 0.12;
    followerY += (mouseY - followerY) * 0.12;
    follower.style.left = followerX - 18 + 'px';
    follower.style.top = followerY - 18 + 'px';
    requestAnimationFrame(animateFollower);
  }
  animateFollower();

  document.querySelectorAll('a, button, .product-card, .gallery-strip-item, .t-dot').forEach(el => {
    el.addEventListener('mouseenter', () => {
      cursor.style.transform = 'scale(2.5)';
      follower.style.transform = 'scale(1.5)';
      follower.style.borderColor = 'var(--gold)';
    });
    el.addEventListener('mouseleave', () => {
      cursor.style.transform = 'scale(1)';
      follower.style.transform = 'scale(1)';
      follower.style.borderColor = 'var(--gold)';
    });
  });

  // LOADER
  window.addEventListener('load', () => {
    setTimeout(() => {
      document.getElementById('loader').classList.add('open');
    }, 1000);
  });

  // REVEAL ON SCROLL
  const reveals = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
      }
    });
  }, { threshold: 0.15 });
  reveals.forEach(r => observer.observe(r));

  // TESTIMONIALS
  let currentTestimonial = 0;
  const totalT = 3;

  function goToTestimonial(index) {
    currentTestimonial = index;
    document.getElementById('testimonialInner').style.transform = `translateX(-${index * 100}%)`;
    document.querySelectorAll('.t-dot').forEach((d, i) => {
      d.classList.toggle('active', i === index);
    });
  }

  setInterval(() => {
    goToTestimonial((currentTestimonial + 1) % totalT);
  }, 5000);

  // FORM SUBMIT
  function handleSubmit() {
    const btn = document.querySelector('.form-submit');
    btn.textContent = '✓ Solicitud Enviada';
    btn.style.background = 'var(--gold-light)';
    setTimeout(() => {
      btn.textContent = 'Solicitar Consulta';
      btn.style.background = 'var(--gold)';
    }, 3000);
  }

  // Smooth scroll
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = document.querySelector(a.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Parallax on hero
  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const heroLeft = document.querySelector('.hero-left');
    if (heroLeft) {
      heroLeft.style.transform = `translateY(${scrollY * 0.15}px)`;
    }
  });
</script>
</body>
</html>