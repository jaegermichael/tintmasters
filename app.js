const page = document.body.dataset.page;
const phone = '+263 78 422 7110';
const tel = '+263784227110';
const email = 'sales@tintmasters.co.zw';
const images = {
  tint: 'https://tintmasters.co.zw/wp-content/uploads/2025/04/Tint-masters-tinting-.jpg',
  frost: 'https://tintmasters.co.zw/wp-content/uploads/2025/04/IMG-20250408-WA0091.jpg',
  building: 'https://tintmasters.co.zw/wp-content/uploads/2025/04/IMG-20250408-WA0080.jpg',
  gate: 'https://tintmasters.co.zw/wp-content/uploads/2025/04/m100-2-sliding-gate-opener-1000x1000-1.jpg',
  signage: 'https://tintmasters.co.zw/wp-content/uploads/2025/04/drew-beamer-bSEyq0LR2mk-unsplash-scaled.jpg',
  wrap: 'https://tintmasters.co.zw/wp-content/uploads/2025/04/IMG-20250409-WA0121.jpg',
  founder: 'https://tintmasters.co.zw/wp-content/uploads/2025/04/IMG-20250409-WA0118.jpg',
  team: 'https://tintmasters.co.zw/wp-content/uploads/2025/04/IMG-20250408-WA0099.jpg'
};

const nav = [
  ['Home', 'index.html', 'home'], ['About', 'about.html', 'about'], ['Services', 'services.html', 'services'], ['Gallery', 'gallery.html', 'gallery'], ['Contact us', 'contact.html', 'contact']
];

function header() {
  return `<header class="site-header"><div class="shell nav"><a class="brand" href="index.html" aria-label="Tint Masters home">Tint<span>Masters</span><small>Zimbabwe</small></a><nav class="nav-links" id="main-nav" aria-label="Primary navigation">${nav.map(([label, href, id]) => `<a href="${href}" ${page === id ? 'aria-current="page"' : ''}>${label}</a>`).join('')}</nav><a class="nav-cta" href="contact.html">Request a quote</a><button class="menu-toggle" aria-expanded="false" aria-controls="main-nav" aria-label="Open menu">Menu</button></div></header>`;
}

function footer() {
  return `<footer class="site-footer"><div class="shell footer-grid"><section class="footer-brand"><a class="brand" href="index.html">Tint<span>Masters</span><small>Zimbabwe</small></a><p>Practical tinting, branding and security work for vehicles, homes and businesses across Harare.</p></section><section><p class="footer-title">Explore</p><nav class="footer-links" aria-label="Footer navigation">${nav.map(([label, href]) => `<a href="${href}">${label}</a>`).join('')}</nav></section><section><p class="footer-title">Contact</p><div class="footer-links"><a href="tel:${tel}">${phone}</a><a href="mailto:${email}">${email}</a><span>15223 10th Close, Sunningdale 2, Harare</span><a href="https://www.facebook.com/CarWindowTintHarare" target="_blank" rel="noreferrer">Facebook</a></div></section></div><div class="shell footer-bottom"><span>Copyright © ${new Date().getFullYear()} Tint Masters Zimbabwe</span><span>Privacy and security, professionally handled.</span></div></footer>`;
}

function pageHero(kicker, title, copy) {
  return `<section class="page-hero"><div class="shell reveal"><p class="eyebrow">${kicker}</p><h1>${title}</h1><p>${copy}</p></div></section>`;
}

function home() {
  return `<main id="content"><section class="hero"><div class="shell hero-grid"><div class="reveal"><p class="eyebrow">Tinting. Branding. Security.</p><h1>Protect the view. <em>Own</em> the finish.</h1><p class="hero-copy">Precision tinting, vehicle branding and practical security installations for homes, businesses and the road.</p><div class="hero-actions"><a class="button button-primary" href="contact.html">Get a free consultation</a><a class="button button-outline" href="services.html">Explore services</a></div></div><aside class="hero-aside reveal"><strong>${phone}</strong>Talk to our Harare team about your vehicle, property or business project.</aside></div></section><section class="trust-strip"><div class="shell trust-items"><span>Automotive and building tinting</span><span>Vehicle branding and wrapping</span><span>Signage and window frosting</span><span>CCTV and electric gates</span></div></section><section class="section section-fog"><div class="shell intro-grid"><div class="intro-image"></div><div class="intro-copy"><p class="eyebrow">What we do</p><h2>Your space. Your privacy. Your standard.</h2><p>Every job starts with a clear purpose: reduce glare, strengthen privacy, make a brand easier to recognise or improve the security around a property.</p><div class="capability-list"><div><span>01</span>Automotive and building tinting</div><div><span>02</span>Vehicle branding and wrapping</div><div><span>03</span>Signage and frosted glass</div><div><span>04</span>CCTV and electric gates</div></div><a class="button button-primary" href="services.html">View all services</a></div></div></section><section class="section"><div class="shell"><div class="section-heading"><p class="eyebrow">Built for real work</p><h2>Six ways we improve the everyday.</h2><p>Choose the result you need. We will recommend a finish that suits the surface, setting and use.</p></div><div class="services-grid">${serviceCards()}</div></div></section><section class="section section-dark"><div class="shell"><div class="section-heading"><p class="eyebrow">Why Tint Masters</p><h2>Good work stays good.</h2></div><div class="promise-grid"><article class="promise"><strong>Value</strong><h3>Price with purpose</h3><p>We help you choose a practical solution that makes sense for the job.</p></article><article class="promise"><strong>Finish</strong><h3>Details checked</h3><p>Clean lines, well-fitted materials and a handover you can feel confident about.</p></article><article class="promise"><strong>Durability</strong><h3>Made to last</h3><p>We use dependable materials and install them with long-term use in mind.</p></article></div></div></section><section class="section section-fog"><div class="shell founder"><div class="founder-image"></div><div><p class="eyebrow">From our founder</p><span class="quote-mark">“</span><p class="quote">No project is too small to deserve full attention. We look after your spaces, your vehicles and your brand.</p></div></div></section><section class="cta-band"><div class="shell"><h2>Tell us what you need.</h2><a class="button" href="contact.html">Start your project</a></div></section></main>`;
}

function serviceCards() {
  const cards = [
    ['Automotive tinting', 'Ceramic tint options for comfort, privacy and a refined finish.', images.tint],
    ['Window frosting', 'Privacy that still lets the light work.', images.frost],
    ['Building tinting', 'Residential and commercial window solutions.', images.building],
    ['Gates and CCTV', 'Stronger access control for the spaces that matter.', images.gate],
    ['Signage', 'Clear, practical signs that do their job.', images.signage],
    ['Vehicle branding', 'Put your business in motion.', images.wrap]
  ];
  return cards.map(([title, copy, image]) => `<a class="service" href="services.html"><img src="${image}" alt="${title}" loading="lazy" /><span class="service-content"><h3>${title}</h3><p>${copy}</p></span></a>`).join('');
}

function about() {
  return `<main id="content">${pageHero('About Tint Masters', 'Work you can see. Standards you can trust.', 'We bring tinting, branding and security under one roof, with a practical approach and careful finish.') }<section class="section section-fog"><div class="shell intro-grid"><div class="intro-copy"><p class="eyebrow">Our approach</p><h2>We solve the practical part, then refine the visible part.</h2><p>Tint Masters Zimbabwe works with vehicle owners, homeowners and businesses that want a better result from the surfaces they use every day.</p><p>That could be cooler cabin temperatures, a private meeting room, a branded fleet or a more secure entrance. The material and installation method change, but the standard stays the same.</p><a class="button button-primary" href="contact.html">Talk to our team</a></div><div class="about-visual"><img src="${images.team}" alt="Tint Masters project work" /><img src="${images.founder}" alt="Tint Masters team at work" /></div></div></section><section class="section"><div class="shell"><div class="section-heading"><p class="eyebrow">What guides us</p><h2>Clear recommendations. Careful execution.</h2></div><div class="values"><article class="value"><b>01 / Advice</b><h3>Start with the need</h3><p>We listen first, then suggest materials and a scope that suit your vehicle, building or business.</p></article><article class="value"><b>02 / Craft</b><h3>Respect the detail</h3><p>From surface preparation to the final edge, good work is built through the small decisions.</p></article><article class="value"><b>03 / Service</b><h3>Keep it simple</h3><p>We communicate clearly, turn up prepared and focus on completing the job properly.</p></article></div></div></section><section class="cta-band"><div class="shell"><h2>Ready to improve your space?</h2><a class="button" href="contact.html">Request a quote</a></div></section></main>`;
}

const serviceData = [
  ['Automotive window tinting', 'Ceramic tint films for a cleaner look, improved comfort and added privacy inside your vehicle.', images.tint],
  ['Window frosting', 'Create privacy for offices, bathrooms, partitions and shopfronts without closing off natural light.', images.frost],
  ['Residential and commercial tinting', 'A practical way to manage glare, privacy and heat across homes, offices and commercial buildings.', images.building],
  ['CCTV and electric gates', 'Add a more controlled approach to access and monitoring around your property.', images.gate],
  ['Signage', 'From shopfront identity to directional signage, we help businesses become easier to find and recognise.', images.signage],
  ['Vehicle branding and wrapping', 'Turn cars, vans and fleets into visible, professional brand assets while they are out on the road.', images.wrap]
];

function services() {
  return `<main id="content">${pageHero('Our services', 'The right finish for the way you work.', 'Six core services for vehicles, buildings and business premises. Tell us the outcome you need, and we will help shape the right route.') }<section class="section"><div class="shell">${serviceData.map(([title, text, image]) => `<article class="service-detail"><img src="${image}" alt="${title}" loading="lazy" /><div><p class="eyebrow">Tint Masters service</p><h2>${title}</h2><p>${text}</p><a class="button button-primary" href="contact.html?service=${encodeURIComponent(title)}">Ask about this service</a></div></article>`).join('')}</div></section></main>`;
}

const galleryItems = [
  ['tint', 'Automotive tinting', images.tint], ['frost', 'Window frosting', images.frost], ['building', 'Building tinting', images.building], ['security', 'Security installation', images.gate], ['signage', 'Signage', images.signage], ['branding', 'Vehicle branding', images.wrap], ['team', 'Project work', images.team], ['tint', 'Tinting detail', images.founder]
];

function gallery() {
  return `<main id="content">${pageHero('Project gallery', 'A closer look at the work.', 'A selection of Tint Masters projects across automotive, property, branding and security work.') }<section class="section section-fog"><div class="shell"><div class="gallery-controls" aria-label="Filter gallery"><button class="filter active" data-filter="all">All work</button><button class="filter" data-filter="tint">Tinting</button><button class="filter" data-filter="building">Property</button><button class="filter" data-filter="branding">Branding</button><button class="filter" data-filter="security">Security</button></div><div class="gallery-grid">${galleryItems.map(([category, label, src]) => `<button class="gallery-card" data-category="${category}" data-src="${src}" data-alt="${label}"><img src="${src}" alt="${label}" loading="lazy" /><span>${label}</span></button>`).join('')}</div></div></section><dialog class="dialog"><button aria-label="Close image">×</button><img src="" alt="" /></dialog></main>`;
}

function contact() {
  return `<main id="content">${pageHero('Contact Tint Masters', 'Let’s talk about the job.', 'Call, email or send a short brief. The more context you share, the more useful our recommendation can be.') }<section class="section section-fog"><div class="shell contact-grid"><section class="contact-info"><p class="eyebrow">Visit or get in touch</p><h2>Start with a conversation.</h2><div class="contact-points"><div><small>Call</small><a href="tel:${tel}">${phone}</a></div><div><small>Email</small><a href="mailto:${email}">${email}</a></div><div><small>Location</small><p>15223 10th Close<br />Sunningdale 2, Harare, Zimbabwe</p></div></div></section><form class="contact-form" novalidate><div class="form-row"><div class="field"><label for="name">Your name</label><input id="name" name="name" required autocomplete="name" /></div><div class="field"><label for="phone">Phone number</label><input id="phone" name="phone" required autocomplete="tel" /></div></div><div class="field"><label for="email">Email address</label><input id="email" name="email" type="email" required autocomplete="email" /></div><div class="field"><label for="service">Service needed</label><select id="service" name="service"><option value="">Select a service</option>${serviceData.map(([title]) => `<option>${title}</option>`).join('')}</select></div><div class="field"><label for="message">Tell us about the project</label><textarea id="message" name="message" rows="5" required placeholder="Vehicle type, location, approximate scope or timing"></textarea></div><button class="button button-primary" type="submit">Send enquiry</button><p class="form-message" role="status">Thanks. Your enquiry is ready to send. A live site can connect this form to your email or CRM.</p></form></div></section></main>`;
}

const pages = { home, about, services, gallery, contact };
document.querySelector('#site').innerHTML = header() + pages[page]() + footer();

const menuToggle = document.querySelector('.menu-toggle');
if (menuToggle) menuToggle.addEventListener('click', () => { const navEl = document.querySelector('.nav-links'); const isOpen = navEl.classList.toggle('open'); menuToggle.setAttribute('aria-expanded', String(isOpen)); menuToggle.textContent = isOpen ? 'Close' : 'Menu'; });

const form = document.querySelector('.contact-form');
if (form) {
  const requestedService = new URLSearchParams(location.search).get('service');
  if (requestedService) form.service.value = requestedService;
  form.addEventListener('submit', event => { event.preventDefault(); if (!form.checkValidity()) { form.reportValidity(); return; } form.querySelector('.form-message').classList.add('show'); form.reset(); });
}

document.querySelectorAll('.filter').forEach(button => button.addEventListener('click', () => { document.querySelectorAll('.filter').forEach(item => item.classList.remove('active')); button.classList.add('active'); const filter = button.dataset.filter; document.querySelectorAll('.gallery-card').forEach(card => { card.hidden = filter !== 'all' && card.dataset.category !== filter; }); }));

const dialog = document.querySelector('.dialog');
if (dialog) { document.querySelectorAll('.gallery-card').forEach(card => card.addEventListener('click', () => { dialog.querySelector('img').src = card.dataset.src; dialog.querySelector('img').alt = card.dataset.alt; dialog.showModal(); })); dialog.querySelector('button').addEventListener('click', () => dialog.close()); dialog.addEventListener('click', event => { if (event.target === dialog) dialog.close(); }); }

const wowStyles = document.createElement('link');
wowStyles.rel = 'stylesheet';
wowStyles.href = 'wow.css';
document.head.append(wowStyles);

if (page === 'home') {
  const revealMarkup = `<section class="tint-reveal"><div class="shell tint-reveal-grid"><div class="tint-reveal-copy"><p class="eyebrow">The tint difference</p><h2>More comfort. Less exposure.</h2><p>Move the control and see the visual effect of a darker, more private finish. The right film is chosen around your vehicle, building and goals.</p><div class="reveal-stat"><b>Control the light</b><span>Privacy, glare reduction and a cleaner visual finish.</span></div></div><div class="tint-stage" style="--reveal:57%"><img src="${images.tint}" alt="Vehicle window tinting example" /><div class="tint-treated"><img src="${images.tint}" alt="" /></div><div class="tint-divider" aria-hidden="true"><i></i></div><input class="tint-control" type="range" min="10" max="90" value="57" aria-label="Adjust tint comparison" /></div></div></section>`;
  document.querySelector('main .section-fog').insertAdjacentHTML('beforebegin', revealMarkup);
  const tintControl = document.querySelector('.tint-control');
  tintControl.addEventListener('input', () => tintControl.closest('.tint-stage').style.setProperty('--reveal', `${tintControl.value}%`));
}
