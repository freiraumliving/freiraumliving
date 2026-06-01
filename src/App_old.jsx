import React, { useEffect, useRef, useState } from "react";

/* =========================================================
   SVG ICONS
========================================================= */

function IconMail() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <polyline points="2,4 12,13 22,4" />
    </svg>
  );
}

function IconMapPin() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
      <circle cx="12" cy="9" r="2.5" />
    </svg>
  );
}

function IconHeart() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  );
}

function IconWifi() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12.55a11 11 0 0 1 14.08 0" />
      <path d="M1.42 9a16 16 0 0 1 21.16 0" />
      <path d="M8.53 16.11a6 6 0 0 1 6.95 0" />
      <circle cx="12" cy="20" r="1" fill="currentColor" />
    </svg>
  );
}

function IconCar() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 17H3v-5l2-5h14l2 5v5h-2" />
      <circle cx="7.5" cy="17.5" r="2.5" />
      <circle cx="16.5" cy="17.5" r="2.5" />
    </svg>
  );
}

function IconTree() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2L8 9h3l-4 7h6v4h2v-4h6l-4-7h3L12 2z" />
    </svg>
  );
}

function IconChevronRight() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="9,18 15,12 9,6" />
    </svg>
  );
}

function IconX({ size = 24 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

function IconMenu() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  );
}

function IconInstagram({ size = 22 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

/* =========================================================
   HERO IMAGES
========================================================= */

const HERO_IMAGES = [
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?q=80&w=1800&auto=format&fit=crop",
];

/* =========================================================
   GALLERY IMAGES
========================================================= */

const GALLERY_IMAGES = [
  "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1505693530683-55f2860f3b1d?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1460317442991-0ec209397118?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1502672023488-70e25813eb80?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1505692952047-1a78307da8f2?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop",
];

const DETAIL_IMAGE_URL =
  "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=1400&auto=format&fit=crop";

const GOOGLE_MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=Dorfstra%C3%9Fe+6b,+9524+Villach";

const INSTAGRAM_URL =
  "https://www.instagram.com/freiraum_urlaubsapartments?igsh=Mml6M3N4a3c0M2No&utm_source=qr";

const navItems = [
  { label: "Haus", href: "#haus" },
  { label: "Beschreibung", href: "#beschreibung" },
  { label: "Galerie", href: "#galerie" },
  { label: "Kalender", href: "#kalender" },
  { label: "Buchen", href: "#buchen" },
  { label: "Kontakt", href: "#kontakt" },
];

/* =========================================================
   CALENDAR
========================================================= */

function SmoobuCalendar() {
  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;

    const existingLink = document.querySelector('link[href*="calendarWidget.css"]');
    if (!existingLink) {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = "https://login.smoobu.com/css/calendarWidget.css";
      document.head.appendChild(link);
    }

    const existingScript = document.querySelector('script[src*="CalendarWidget.js"]');
    if (!existingScript) {
      const script = document.createElement("script");
      script.src = "https://login.smoobu.com/js/Apartment/CalendarWidget.js";
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div id="smoobuApartment3328252de" className="calendarWidget">
      <div
        className="calendarContent"
        data-load-calendar-url="https://login.smoobu.com/de/cockpit/widget/single-calendar/3328252"
        data-verification="2ffbf504b33aad995902dd3280110493fc1c47af563a4625973f93b17e65f33c"
        data-baseUrl="https://login.smoobu.com"
        data-disable-css="false"
      />
    </div>
  );
}

/* =========================================================
   BOOKING
========================================================= */

function SmoobuBooking() {
  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;

    document.querySelectorAll('script[src*="BookingToolIframe"]').forEach((s) => s.remove());

    const script = document.createElement("script");
    script.src = "https://login.smoobu.com/js/Settings/BookingToolIframe.js";
    document.body.appendChild(script);

    script.onload = () => {
      window.BookingToolIframe &&
        window.BookingToolIframe.initialize({
          url: "https://login.smoobu.com/en/booking-tool/iframe/1754982",
          baseUrl: "https://login.smoobu.com",
          target: "#apartmentIframeAll",
        });
    };

    return () => {
      if (document.body.contains(script)) document.body.removeChild(script);
    };
  }, []);

  return <div id="apartmentIframeAll" style={{ maxWidth: "650px", margin: "0 auto" }} />;
}

/* =========================================================
   MODAL
========================================================= */

function Modal({ title, onClose, children }) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    const handleKeyDown = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 px-4">
      <div className="bg-white rounded-[2rem] max-w-2xl w-full max-h-[85vh] overflow-y-auto p-10 relative">
        <button onClick={onClose} className="absolute top-6 right-6 text-gray-400 hover:text-black transition">
          <IconX size={24} />
        </button>
        <h2 className="text-3xl font-light mb-8 text-[#1e3a2f]">{title}</h2>
        <div className="text-[#444] leading-8 space-y-4 text-sm">{children}</div>
      </div>
    </div>
  );
}

/* =========================================================
   APP
========================================================= */

export default function App() {
  const [showImpressum, setShowImpressum] = useState(false);
  const [showDatenschutz, setShowDatenschutz] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [heroIndex, setHeroIndex] = useState(0);
  const [showGallery, setShowGallery] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setHeroIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const GalleryOverlay = () => (
    <div className="fixed inset-0 bg-black z-[200] overflow-y-auto">
      <button onClick={() => setShowGallery(false)} className="fixed top-6 right-6 text-white z-50">
        <IconX size={36} />
      </button>
      <div className="max-w-7xl mx-auto px-6 py-24">
        <h2 className="text-white text-5xl font-light mb-16 text-center">Haus Freiraum Galerie</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {GALLERY_IMAGES.map((image, index) => (
            <div key={index} onClick={() => setSelectedImage(image)} className="overflow-hidden rounded-[2rem] cursor-pointer group">
              <img src={image} alt="Galerie" className="w-full h-[320px] object-cover group-hover:scale-105 transition duration-700" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="bg-[#f4f2ee] text-[#2b2b2b] min-h-screen">

      {/* HINWEIS BANNER */}
<div className="w-full bg-[#c9a84c] text-white text-center text-sm py-3 px-4 relative z-[60]">
  🔧 Diese Website befindet sich noch im Aufbau — Fotos werden in Kürze durch aktuelle Aufnahmen ersetzt - Derzeit Beispielfotos!!.
</div>
      {showGallery && <GalleryOverlay />}

      {selectedImage && (
        <div className="fixed inset-0 bg-black/95 z-[300] flex items-center justify-center p-6" onClick={() => setSelectedImage(null)}>
          <img src={selectedImage} alt="Großansicht" className="max-w-full max-h-full rounded-[2rem]" />
          <button className="absolute top-6 right-6 text-white" onClick={() => setSelectedImage(null)}>
            <IconX size={36} />
          </button>
        </div>
      )}

      {showImpressum && (
        <Modal title="Impressum" onClose={() => setShowImpressum(false)}>
          <p><strong>Inhaberin:</strong><br />Noemi Opitz-Orjan<br />Widmanngasse 31<br />9500 Villach</p>
          <p><strong>Ferienhaus:</strong><br />Haus Freiraum<br />Dorfstraße 6b<br />9524 Villach</p>
          <p><strong>E-Mail:</strong><br />info@freiraumliving.at</p>
        </Modal>
      )}

      {showDatenschutz && (
        <Modal title="Datenschutz" onClose={() => setShowDatenschutz(false)}>
          <p>Der Schutz deiner persönlichen Daten ist uns ein besonderes Anliegen.</p>
          <p>Buchungsdaten werden ausschließlich zur Abwicklung deiner Reservierung verarbeitet.</p>
        </Modal>
      )}

      {/* NAVBAR */}
   <header className="fixed top-[44px] left-0 w-full z-50 backdrop-blur-md bg-[#142a20]/50 text-white">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-2xl font-semibold tracking-wide">Freiraum Living</div>

          <nav className="hidden md:flex items-center gap-8 text-sm uppercase tracking-wider">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="hover:text-[#c9a84c] transition">
                {item.label}
              </a>
            ))}
            <a href="#buchen" className="bg-[#c9a84c] text-white px-5 py-2 rounded-full hover:bg-white hover:text-black transition">
              Jetzt buchen
            </a>
            <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" className="hover:text-[#c9a84c] transition" aria-label="Instagram">
              <IconInstagram size={22} />
            </a>
          </nav>

          <button onClick={() => setMobileMenu(!mobileMenu)} className="md:hidden">
            <IconMenu />
          </button>
        </div>

        {mobileMenu && (
          <div className="md:hidden bg-[#142a20]/95 px-6 py-6 space-y-4">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} onClick={() => setMobileMenu(false)} className="block text-white/80 hover:text-[#c9a84c]">
                {item.label}
              </a>
            ))}
            <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" onClick={() => setMobileMenu(false)} className="flex items-center gap-2 text-white/80 hover:text-[#c9a84c]">
              <IconInstagram size={18} />
              Instagram
            </a>
          </div>
        )}
      </header>

      {/* HERO */}
      <section id="haus" className="relative h-screen flex items-center justify-center text-white overflow-hidden">
        {HERO_IMAGES.map((image, index) => (
          <img
            key={index}
            src={image}
            alt="Freiraum Living"
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[2000ms] ${heroIndex === index ? "opacity-100" : "opacity-0"}`}
          />
        ))}
        <div className="absolute inset-0 bg-black/45" />
        <div className="relative z-10 text-center px-6">
          <div className="uppercase tracking-[0.4em] text-sm mb-6 opacity-80">Urlaub • Natur • Entspannung</div>
          <h1 className="text-5xl md:text-7xl font-light mb-8">Haus Freiraum</h1>
          <p className="max-w-3xl mx-auto text-lg md:text-xl leading-relaxed text-white/90">
            Urlaubsapartment in Villach – Ruhe, Natur und Komfort im Dreiländereck
          </p>
          <a href="#buchen" className="inline-flex items-center gap-2 mt-10 bg-white text-black px-8 py-4 rounded-full hover:bg-[#c9a84c] hover:text-white transition">
            Jetzt entdecken
            <IconChevronRight />
          </a>
        </div>
      </section>

      {/* BESCHREIBUNG */}
      <section id="beschreibung" className="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <div className="uppercase text-sm tracking-[0.3em] text-[#c9a84c] mb-4">Willkommen</div>
          <h2 className="text-4xl md:text-5xl font-light mb-8 leading-tight">Ein Ort zum<br />Ankommen & Wohlfühlen</h2>
          <p className="text-lg leading-8 text-[#555] mb-8">
            Haus Freiraum verbindet großzügiges Wohnen mit moderner Ausstattung und einer einzigartigen Lage am Silbersee.
            Auf rund 160 m² erwarten dich drei gemütliche Schlafzimmer, drei moderne Badezimmer sowie ein offener Wohn- und
            Essbereich mit viel Licht und Raum zum Entspannen. Die sonnige Südterrasse lädt zum Frühstück im Freien oder
            entspannten Grillabenden ein. Der kostenlose Badestrand des Silbersees ist nur wenige Gehminuten entfernt.
            Im Winter erreichst du die Gerlitzen Alpe in nur wenigen Minuten und weitere Skigebiete wie Nassfeld in unter 40 Minuten.
          </p>
          <div className="grid grid-cols-2 gap-6 mt-10">
            <Feature icon={<IconWifi />} text="Highspeed WLAN" />
            <Feature icon={<IconCar />} text="Privater Parkplatz" />
            <Feature icon={<IconTree />} text="Natur & Ruhe" />
            <Feature icon={<IconHeart />} text="Modernes Design" />
          </div>
        </div>
        <div>
          <img src={DETAIL_IMAGE_URL} alt="Apartment" className="rounded-[2rem] shadow-2xl" />
        </div>
      </section>

      {/* GALERIE */}
      <section id="galerie" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="uppercase text-sm tracking-[0.3em] text-[#c9a84c] mb-4">Eindrücke</div>
            <h2 className="text-4xl font-light mb-6">Fotogalerie</h2>
            <p className="text-[#666] max-w-2xl mx-auto">Entdecke die Atmosphäre von Haus Freiraum am Silbersee.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {GALLERY_IMAGES.slice(0, 6).map((image, index) => (
              <div key={index} onClick={() => setSelectedImage(image)} className="overflow-hidden rounded-[2rem] group cursor-pointer relative">
                <img src={image} alt="Haus Freiraum" loading="lazy" className="w-full h-[320px] object-cover group-hover:scale-110 transition duration-700" />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition" />
              </div>
            ))}
          </div>
          <div className="text-center mt-14">
            <button onClick={() => setShowGallery(true)} className="bg-[#1e3a2f] text-white px-8 py-4 rounded-full hover:bg-[#c9a84c] transition">
              Mehr Bilder ansehen
            </button>
          </div>
        </div>
      </section>

      {/* KALENDER */}
      <section id="kalender" className="bg-[#f8f8f8] py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <div className="uppercase text-sm tracking-[0.3em] text-[#c9a84c] mb-4">Verfügbarkeit</div>
            <h2 className="text-4xl font-light mb-6">Belegungskalender</h2>
            <p className="text-[#666] max-w-2xl mx-auto">Hier siehst du alle verfügbaren Termine auf einen Blick.</p>
          </div>
          <div className="bg-white rounded-[2rem] p-8 shadow-lg">
            <SmoobuCalendar />
          </div>
        </div>
      </section>

      {/* BUCHUNG */}
      <section id="buchen" className="py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-14">
            <div className="uppercase text-sm tracking-[0.3em] text-[#c9a84c] mb-4">Buchung</div>
            <h2 className="text-4xl font-light mb-6">Direkt online buchen</h2>
            <p className="text-[#666] max-w-2xl mx-auto">Wähle deine Wunschdaten und buche direkt bei uns.</p>
          </div>
          <div className="bg-white rounded-[2rem] shadow-xl p-8">
            <SmoobuBooking />
          </div>
        </div>
      </section>

      {/* KONTAKT */}
      <section id="kontakt" className="bg-[#1e3a2f] text-white py-24 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <div className="uppercase text-sm tracking-[0.3em] text-[#c9a84c] mb-4">Kontakt</div>
          <h2 className="text-4xl font-light mb-10">Wir freuen uns auf deine Anfrage</h2>
          <div className="grid md:grid-cols-3 gap-8 mt-16 max-w-3xl mx-auto">
            <ContactCard icon={<IconMail />} title="E-Mail" text="info@freiraumliving.at" href="mailto:info@freiraumliving.at" />
            <ContactCard icon={<IconMapPin />} title="Location" text="Dorfstraße 6b, 9524 Villach" href={GOOGLE_MAPS_URL} />
            <ContactCard icon={<IconInstagram />} title="Instagram" text="@freiraum_urlaubsapartments" href={INSTAGRAM_URL} />
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#142a20] text-white py-8 text-center text-sm tracking-wide">
        <p>© {new Date().getFullYear()} Haus Freiraum</p>
        <div className="mt-3 flex justify-center gap-6 text-white/50 text-xs">
          <button onClick={() => setShowImpressum(true)} className="hover:text-white transition">Impressum</button>
          <button onClick={() => setShowDatenschutz(true)} className="hover:text-white transition">Datenschutz</button>
        </div>
      </footer>
    </div>
  );
}

/* =========================================================
   FEATURE
========================================================= */

function Feature({ icon, text }) {
  return (
    <div className="flex items-center gap-4">
      <div className="w-12 h-12 rounded-full bg-[#1e3a2f] shadow flex items-center justify-center text-white">
        {icon}
      </div>
      <span className="text-[#444]">{text}</span>
    </div>
  );
}

/* =========================================================
   CONTACT CARD
========================================================= */

function ContactCard({ icon, title, text, href }) {
  const isExternal = href?.startsWith("http");

  const content = (
    <div className="bg-white/5 border border-white/10 rounded-[1.5rem] p-8 hover:bg-white/10 transition">
      <div className="w-14 h-14 rounded-full bg-[#c9a84c]/20 flex items-center justify-center mx-auto mb-6 text-[#c9a84c]">
        {icon}
      </div>
      <h3 className="text-xl mb-3">{title}</h3>
      <p className="text-white/70 break-words text-sm">{text}</p>
    </div>
  );

  if (href) {
    return (
      <a href={href} target={isExternal ? "_blank" : undefined} rel={isExternal ? "noreferrer" : undefined}>
        {content}
      </a>
    );
  }

  return content;
}
