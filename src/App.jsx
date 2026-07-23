import React, { useEffect, useRef, useState } from "react";

// AUSSEN
import aussen1 from "./assets/aussen/aussen1.jpg";
import aussen2 from "./assets/aussen/aussen2.jpg";
import aussen3 from "./assets/aussen/aussen3.jpg";
import aussen4 from "./assets/aussen/aussen4.jpg";
import aussen5 from "./assets/aussen/aussen5.jpg";
import aussen6 from "./assets/aussen/aussen6.jpg";

// WOHNBEREICH
import wohn1 from "./assets/wohnbereich/wohn1.jpg";
import wohn2 from "./assets/wohnbereich/wohn2.jpg";
import wohn3 from "./assets/wohnbereich/wohn3.jpg";
import wohn4 from "./assets/wohnbereich/wohn4.jpg";
import wohn5 from "./assets/wohnbereich/wohn5.jpg";
import wohn6 from "./assets/wohnbereich/wohn6.jpg";
import wohn7 from "./assets/wohnbereich/wohn7.jpg";
import wohn8 from "./assets/wohnbereich/wohn8.jpg";
import wohn9 from "./assets/wohnbereich/wohn9.jpg";
import wohn10 from "./assets/wohnbereich/wohn10.jpg";
import wohn11 from "./assets/wohnbereich/wohn11.jpg";
import wohn12 from "./assets/wohnbereich/wohn12.jpg";
import wohn13 from "./assets/wohnbereich/wohn13.jpg";


// KÜCHE
import kueche1 from "./assets/kueche/kueche1.jpg";
import kueche2 from "./assets/kueche/kueche2.jpg";

// SCHLAFZIMMER
import sz1 from "./assets/schlafzimmer/sz1.jpg";
import sz2 from "./assets/schlafzimmer/sz2.jpg";
import sz3 from "./assets/schlafzimmer/sz3.jpg";
import sz4 from "./assets/schlafzimmer/sz4.jpg";
import sz5 from "./assets/schlafzimmer/sz5.jpg";
import sz6 from "./assets/schlafzimmer/sz6.jpg";
import sz7 from "./assets/schlafzimmer/sz7.jpg";
import sz8 from "./assets/schlafzimmer/sz8.jpg";
import sz9 from "./assets/schlafzimmer/sz9.jpg";
import sz10 from "./assets/schlafzimmer/sz10.jpg";
import sz11 from "./assets/schlafzimmer/sz11.jpg";
import sz12 from "./assets/schlafzimmer/sz12.jpg";
import sz13 from "./assets/schlafzimmer/sz13.jpg";
import sz14 from "./assets/schlafzimmer/sz14.jpg";

// BAD
import bad1 from "./assets/bad/bad1.jpg";
import bad2 from "./assets/bad/bad2.jpg";
import bad3 from "./assets/bad/bad3.jpg";
import bad4 from "./assets/bad/bad4.jpg";
import bad5 from "./assets/bad/bad5.jpg";
import bad6 from "./assets/bad/bad6.jpg";
import bad7 from "./assets/bad/bad7.jpg";
import bad8 from "./assets/bad/bad8.jpg";
import bad9 from "./assets/bad/bad9.jpg";
import bad10 from "./assets/bad/bad10.jpg";
import bad11 from "./assets/bad/bad11.jpg";
import bad12 from "./assets/bad/bad12.jpg";

// GARTEN & TERRASSE
import garten1 from "./assets/garten_terrasse/garten1.jpg";
import garten2 from "./assets/garten_terrasse/garten2.jpg";
import garten3 from "./assets/garten_terrasse/garten3.jpg";
import garten4 from "./assets/garten_terrasse/garten4.jpg";
import garten5 from "./assets/garten_terrasse/garten5.jpg";
import garten6 from "./assets/garten_terrasse/garten6.jpg";
import garten7 from "./assets/garten_terrasse/garten7.jpg";

// ATMOSPHÄRE
import deko1 from "./assets/atmosphaere/deko1.jpg";
import deko2 from "./assets/atmosphaere/deko2.jpg";
import deko3 from "./assets/atmosphaere/deko3.jpg";
import deko4 from "./assets/atmosphaere/deko4.jpg";
import deko5 from "./assets/atmosphaere/deko5.jpg";
import deko6 from "./assets/atmosphaere/deko6.jpg";
import deko7 from "./assets/atmosphaere/deko7.jpg";
import deko8 from "./assets/atmosphaere/deko8.jpg";
import deko9 from "./assets/atmosphaere/deko9.jpg";
import deko10 from "./assets/atmosphaere/deko10.jpg";
import deko11 from "./assets/atmosphaere/deko11.jpg";
import deko12 from "./assets/atmosphaere/deko12.jpg";
import deko13 from "./assets/atmosphaere/deko13.jpg";
import deko14 from "./assets/atmosphaere/deko14.jpg";

/* =========================================================
   SVG ICONS
========================================================= */
function IconMail() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2" /><polyline points="2,4 12,13 22,4" />
    </svg>
  );
}
function IconMapPin() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" /><circle cx="12" cy="9" r="2.5" />
    </svg>
  );
}
function IconHeart() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l7.78-7.78a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  );
}
function IconWifi() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12.55a11 11 0 0 1 14.08 0" /><path d="M1.42 9a16 16 0 0 1 21.16 0" /><path d="M8.53 16.11a6 6 0 0 1 6.95 0" /><circle cx="12" cy="20" r="1" fill="currentColor" />
    </svg>
  );
}
function IconCar() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 17H3v-5l2-5h14l2 5v5h-2" /><circle cx="7.5" cy="17.5" r="2.5" /><circle cx="16.5" cy="17.5" r="2.5" />
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
      <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}
function IconMenu() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  );
}
function IconInstagram({ size = 22 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

/* =========================================================
   DATA
========================================================= */
const HERO_IMAGES = [garten2, garten3, aussen1];
const DETAIL_IMAGE = wohn1;

const GALLERY_CATEGORIES = [
  { id: "aussen", label: "Außen", images: [aussen1, aussen2, aussen3, aussen4, aussen5, aussen6] },
  { id: "wohnbereich", label: "Wohnbereich", images: [wohn1, wohn2, wohn3, wohn4, wohn5, wohn6, wohn7, wohn8, wohn9, wohn10, wohn11, wohn12, wohn13] },
  { id: "kueche", label: "Küche", images: [kueche1, kueche2] },
  { id: "schlafzimmer", label: "Schlafzimmer", images: [sz1, sz2, sz3, sz4, sz5, sz6, sz7, sz8, sz9, sz10, sz11, sz12, sz13, sz14] },
  { id: "bad", label: "Bad", images: [bad1, bad2, bad3, bad4, bad5, bad6, bad7, bad8, bad9, bad10, bad11, bad12] },
  { id: "garten", label: "Garten & Terrasse", images: [garten1, garten2, garten3, garten4, garten5, garten6, garten7] },
  { id: "atmosphaere", label: "Atmosphäre", images: [deko1, deko2, deko3, deko4, deko5, deko6, deko7, deko8, deko9, deko10, deko11, deko12, deko13, deko14] },
];

const GOOGLE_MAPS_URL = "https://www.google.com/maps/search/?api=1&query=Dorfstra%C3%9Fe+6b,+9524+Villach";
const INSTAGRAM_URL = "https://www.instagram.com/freiraum_urlaubsapartments?igsh=Mml6M3N4a3c0M2No&utm_source=qr";

const navItems = [
  { label: "Haus", href: "#haus" },
  { label: "Lage", href: "#lage" },
  { label: "Ausstattung", href: "#ausstattung" },
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
      <div className="calendarContent"
        data-load-calendar-url="https://login.smoobu.com/de/cockpit/widget/single-calendar/3328252"
        data-verification="2ffbf504b33aad995902dd3280110493fc1c47af563a4625973f93b17e65f33c"
        data-baseUrl="https://login.smoobu.com"
        data-disable-css="false" />
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
      window.BookingToolIframe && window.BookingToolIframe.initialize({
        url: "https://login.smoobu.com/en/booking-tool/iframe/1754982",
        baseUrl: "https://login.smoobu.com",
        target: "#apartmentIframeAll",
      });
    };
    return () => { if (document.body.contains(script)) document.body.removeChild(script); };
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
    return () => { document.body.style.overflow = ""; window.removeEventListener("keydown", handleKeyDown); };
  }, [onClose]);
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 px-4">
      <div className="bg-white rounded-[2rem] max-w-2xl w-full max-h-[85vh] overflow-y-auto p-10 relative">
        <button onClick={onClose} className="absolute top-6 right-6 text-gray-400 hover:text-black transition"><IconX size={24} /></button>
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
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeTab, setActiveTab] = useState("aussen");

  useEffect(() => {
    const interval = setInterval(() => {
      setHeroIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const activeCategory = GALLERY_CATEGORIES.find((c) => c.id === activeTab);

  return (
    <div className="bg-[#f4f2ee] text-[#2b2b2b] min-h-screen">

      {/* LIGHTBOX */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/95 z-[300] flex items-center justify-center p-6" onClick={() => setSelectedImage(null)}>
          <img src={selectedImage} alt="Großansicht" className="max-w-full max-h-full rounded-[2rem]" />
          <button className="absolute top-6 right-6 text-white" onClick={() => setSelectedImage(null)}><IconX size={36} /></button>
        </div>
      )}

      {showImpressum && (
        <Modal title="Impressum" onClose={() => setShowImpressum(false)}>
          <p><strong>Inhaberin:</strong><br />Noémi Opitz-Orján<br />Widmanngasse 31<br />9500 Villach</p>
          <p><strong>Ferienhaus:</strong><br />Haus Freiraum<br />Dorfstraße 6b<br />9524 Villach</p>
          <p><strong>E-Mail:</strong><br />info@freiraumliving.at</p>
        </Modal>
      )}

      {showDatenschutz && (
        <Modal title="Datenschutz" onClose={() => setShowDatenschutz(false)}>
          <p>Der Schutz Ihrer persönlichen Daten ist uns ein besonderes Anliegen.</p>
          <p>Buchungsdaten werden ausschließlich zur Abwicklung Ihrer Reservierung verarbeitet.</p>
        </Modal>
      )}

      {/* NAVBAR */}
      <header className="fixed top-0 left-0 w-full z-50 bg-[#142a20] text-white">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-2xl font-semibold tracking-wide">Freiraum Living</div>
          <nav className="hidden md:flex items-center gap-8 text-sm uppercase tracking-wider">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="hover:text-[#c9a84c] transition">{item.label}</a>
            ))}
            <a href="#buchen" className="bg-[#c9a84c] text-white px-5 py-2 rounded-full hover:bg-white hover:text-black transition">Jetzt buchen</a>
            <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" className="hover:text-[#c9a84c] transition" aria-label="Instagram"><IconInstagram size={22} /></a>
          </nav>
          <button onClick={() => setMobileMenu(!mobileMenu)} className="md:hidden"><IconMenu /></button>
        </div>
        {mobileMenu && (
          <div className="md:hidden bg-[#142a20]/95 px-6 py-6 space-y-4">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} onClick={() => setMobileMenu(false)} className="block text-white/80 hover:text-[#c9a84c]">{item.label}</a>
            ))}
            <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" onClick={() => setMobileMenu(false)} className="flex items-center gap-2 text-white/80 hover:text-[#c9a84c]">
              <IconInstagram size={18} /> Instagram
            </a>
          </div>
        )}
      </header>

      {/* HERO */}
      <section id="haus" className="relative h-screen flex items-center justify-center text-white overflow-hidden">
        {HERO_IMAGES.map((image, index) => (
          <img key={index} src={image} alt="Haus Freiraum"
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[2000ms] ${heroIndex === index ? "opacity-100" : "opacity-0"}`}
          />
        ))}
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center px-6">
          <div className="uppercase tracking-[0.4em] text-sm mb-6 opacity-80">Urlaub • Natur • Entspannung</div>
          <h1 className="text-5xl md:text-7xl font-light mb-8">Haus Freiraum</h1>
          <p className="max-w-3xl mx-auto text-lg md:text-xl leading-relaxed text-white/90">
            Großzügiges Urlaubsapartment in Villach – mit viel Platz, Komfort und perfekter Lage zwischen Bergen, Seen und im Dreiländereck.
          </p>
          <a href="#beschreibung" className="inline-flex items-center gap-2 mt-10 bg-white text-black px-8 py-4 rounded-full hover:bg-[#c9a84c] hover:text-white transition">
            Jetzt entdecken <IconChevronRight />
          </a>
        </div>
      </section>

      {/* BESCHREIBUNG */}
      <section id="beschreibung" className="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <div className="uppercase text-sm tracking-[0.3em] text-[#c9a84c] mb-4">Willkommen</div>
          <h2 className="text-4xl md:text-5xl font-light mb-8 leading-tight">Ein Ort zum<br />Ankommen & Wohlfühlen</h2>
          <p className="text-lg leading-8 text-[#555] mb-6">Willkommen in unserem großzügigen Urlaubsapartment in Villach, betreut von Ihrer Gastgeberin Noémi Opitz-Orján.</p>
          <p className="text-lg leading-8 text-[#555] mb-6">Das Apartment befindet sich in einer ruhigen, sonnigen Wohngegend und ist der ideale Ausgangspunkt für Erholung und Aktivitäten zu jeder Jahreszeit.</p>
          <p className="text-lg leading-8 text-[#555]">Der kostenlose Badestrand am Silbersee ist bequem erreichbar, ebenso zahlreiche Rad- und Wanderwege.</p>
          <div className="grid grid-cols-2 gap-6 mt-10">
            <MiniFeature icon={<IconWifi />} text="Kostenloses WLAN" />
            <MiniFeature icon={<IconCar />} text="2 Parkplätze" />
            <MiniFeature icon={<IconTree />} text="Natur & Ruhe" />
            <MiniFeature icon={<IconHeart />} text="Hunde willkommen" />
          </div>
        </div>
        <div>
          <img src={DETAIL_IMAGE} alt="Apartment" className="rounded-[2rem] shadow-2xl w-full h-[500px] object-cover" />
        </div>
      </section>

      {/* LAGE */}
      <section id="lage" className="bg-white py-24 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className="uppercase text-sm tracking-[0.3em] text-[#c9a84c] mb-4">Lage</div>
          <h2 className="text-4xl md:text-5xl font-light mb-8">Perfekte Lage im Dreiländereck</h2>
          <p className="max-w-4xl mx-auto text-lg leading-8 text-[#555] mb-12">
            Genießen Sie Ihren Urlaub im Herzen Kärntens, nahe dem Dreiländereck von Österreich, Italien und Slowenien. Entdecken Sie drei Länder während eines einzigen Urlaubs.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <InfoCard title="Sommer" text="Badestrand am Silbersee, Radwege, Wanderwege, Wassersport und viele Ausflugsziele in der Umgebung." />
            <InfoCard title="Winter" text="Die Gerlitzen Alpe erreichen Sie in etwa 15 Minuten mit dem Auto – ideal für Skifahrer und Winterurlauber." />
            <InfoCard title="Dreiländereck" text="Österreich, Italien und Slowenien liegen nahe beieinander und bieten Kultur, Kulinarik, Berge und Seen." />
          </div>
        </div>
      </section>

      {/* AUSSTATTUNG */}
      <section id="ausstattung" className="py-24 px-6 bg-[#f8f8f8]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="uppercase text-sm tracking-[0.3em] text-[#c9a84c] mb-4">Ausstattung</div>
            <h2 className="text-4xl md:text-5xl font-light mb-6">Ausstattung des Apartments</h2>
            <p className="text-[#666] max-w-3xl mx-auto text-lg leading-8">128 m² mit großzügigen Räumen, moderner Ausstattung und allem was Sie für einen komfortablen Aufenthalt benötigen.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <DetailCard title="128 m²" text="Wohnfläche" />
            <DetailCard title="3" text="Schlafzimmer" />
            <DetailCard title="3" text="Badezimmer mit Dusche" />
            <DetailCard title="1" text="Badezimmer mit Badewanne" />
            <DetailCard title="Terrasse" text="Große Terrasse zum Entspannen" />
            <DetailCard title="Küche" text="Voll ausgestattete Küche" />
            <DetailCard title="Wohnbereich" text="Großzügiger Wohn- und Essbereich" />
            <DetailCard title="WLAN" text="Kostenloses WLAN" />
          </div>
        </div>
      </section>

      {/* GARTEN */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="uppercase text-sm tracking-[0.3em] text-[#c9a84c] mb-4">Außenbereich</div>
            <h2 className="text-4xl md:text-5xl font-light mb-8">Garten & Entspannung</h2>
            <p className="text-lg leading-8 text-[#555] mb-8">Rund um das Apartment erwartet Sie ein ca. 200 m² großer Garten mit viel Platz zum Entspannen. Die Terrasse, Liegestühle und der Außenbereich laden zu ruhigen Stunden im Freien ein.</p>
            <div className="grid md:grid-cols-2 gap-4">
              <CheckItem text="Ca. 200 m² Garten" />
              <CheckItem text="Grillmöglichkeit" />
              <CheckItem text="Sonnenschirm" />
              <CheckItem text="Liegestühle" />
              <CheckItem text="Große Terrasse" />
              <CheckItem text="Viel Platz zum Genießen" />
            </div>
          </div>
          <div>
            <img src={garten1} alt="Garten" className="rounded-[2rem] shadow-2xl w-full h-[500px] object-cover" />
          </div>
        </div>
      </section>

      {/* GALERIE */}
      <section id="galerie" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="uppercase text-sm tracking-[0.3em] text-[#c9a84c] mb-4">Eindrücke</div>
            <h2 className="text-4xl font-light mb-4">Fotogalerie</h2>
            <p className="text-[#666] max-w-2xl mx-auto">Entdecken Sie alle Räume und Bereiche von Haus Freiraum.</p>
          </div>
          {/* TABS */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {GALLERY_CATEGORIES.map((cat) => (
              <button key={cat.id} onClick={() => setActiveTab(cat.id)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition ${activeTab === cat.id ? "bg-[#1e3a2f] text-white" : "bg-[#f4f2ee] text-[#555] hover:bg-[#c9a84c] hover:text-white"}`}>
                {cat.label}
              </button>
            ))}
          </div>
          {/* GRID */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {activeCategory?.images.map((image, index) => (
              <div key={index} onClick={() => setSelectedImage(image)} className="overflow-hidden rounded-[2rem] group cursor-pointer relative">
                <img src={image} alt="Haus Freiraum" loading="lazy" className="w-full h-[280px] object-cover group-hover:scale-110 transition duration-700" />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INKLUSIVE */}
      <section className="bg-[#1e3a2f] text-white py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <div className="uppercase text-sm tracking-[0.3em] text-[#c9a84c] mb-4">Inklusive</div>
          <h2 className="text-4xl font-light mb-10">Inklusive Leistungen</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <IncludedCard text="Bettwäsche" />
            <IncludedCard text="Handtücher" />
            <IncludedCard text="2 kostenlose Parkplätze" />
            <IncludedCard text="Erlebniskarte für Gäste" />
          </div>
        </div>
      </section>

      {/* KALENDER */}
      <section id="kalender" className="bg-[#f8f8f8] py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <div className="uppercase text-sm tracking-[0.3em] text-[#c9a84c] mb-4">Verfügbarkeit</div>
            <h2 className="text-4xl font-light mb-6">Belegungskalender</h2>
            <p className="text-[#666] max-w-2xl mx-auto">Hier sehen Sie alle verfügbaren Termine auf einen Blick.</p>
          </div>
          <div className="bg-white rounded-[2rem] p-8 shadow-lg"><SmoobuCalendar /></div>
        </div>
      </section>

      {/* BUCHUNG */}
      <section id="buchen" className="py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-14">
            <div className="uppercase text-sm tracking-[0.3em] text-[#c9a84c] mb-4">Buchung</div>
            <h2 className="text-4xl font-light mb-6">Direkt online buchen</h2>
            <p className="text-[#666] max-w-2xl mx-auto">Wählen Sie Ihre Wunschdaten und buchen Sie direkt bei uns.</p>
          </div>
          <div className="bg-white rounded-[2rem] shadow-xl p-8"><SmoobuBooking /></div>
        </div>
      </section>

      {/* KONTAKT */}
      <section id="kontakt" className="bg-[#1e3a2f] text-white py-24 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <div className="uppercase text-sm tracking-[0.3em] text-[#c9a84c] mb-4">Kontakt</div>
          <h2 className="text-4xl font-light mb-10">Wir freuen uns auf Ihre Anfrage</h2>
          <div className="grid md:grid-cols-3 gap-8 mt-16 max-w-3xl mx-auto">
            <ContactCard icon={<IconMail />} title="E-Mail" text="info@freiraumliving.at" href="mailto:info@freiraumliving.at" />
            <ContactCard icon={<IconMapPin />} title="Adresse" text="Dorfstraße 6b, 9524 Villach" href={GOOGLE_MAPS_URL} />
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
   COMPONENTS
========================================================= */
function MiniFeature({ icon, text }) {
  return (
    <div className="flex items-center gap-4">
      <div className="w-12 h-12 rounded-full bg-[#1e3a2f] shadow flex items-center justify-center text-white">{icon}</div>
      <span className="text-[#444]">{text}</span>
    </div>
  );
}
function InfoCard({ title, text }) {
  return (
    <div className="bg-[#f4f2ee] rounded-[2rem] p-8 text-left shadow-sm">
      <h3 className="text-2xl font-light text-[#1e3a2f] mb-4">{title}</h3>
      <p className="text-[#555] leading-7">{text}</p>
    </div>
  );
}
function DetailCard({ title, text }) {
  return (
    <div className="bg-white rounded-[1.5rem] p-8 text-center shadow-sm hover:shadow-lg transition">
      <h3 className="text-3xl font-light text-[#1e3a2f] mb-3">{title}</h3>
      <p className="text-[#666]">{text}</p>
    </div>
  );
}
function CheckItem({ text }) {
  return (
    <div className="flex items-center gap-3 text-[#555] text-lg">
      <span className="w-7 h-7 rounded-full bg-[#c9a84c] text-white flex items-center justify-center text-sm">✓</span>
      <span>{text}</span>
    </div>
  );
}
function IncludedCard({ text }) {
  return (
    <div className="bg-white/10 border border-white/10 rounded-[1.5rem] p-6">
      <div className="text-2xl mb-3">✓</div>
      <p>{text}</p>
    </div>
  );
}
function ContactCard({ icon, title, text, href }) {
  const isExternal = href?.startsWith("http");
  const content = (
    <div className="bg-white/5 border border-white/10 rounded-[1.5rem] p-8 hover:bg-white/10 transition">
      <div className="w-14 h-14 rounded-full bg-[#c9a84c]/20 flex items-center justify-center mx-auto mb-6 text-[#c9a84c]">{icon}</div>
      <h3 className="text-xl mb-3">{title}</h3>
      <p className="text-white/70 break-words text-sm">{text}</p>
    </div>
  );
  if (href) return <a href={href} target={isExternal ? "_blank" : undefined} rel={isExternal ? "noreferrer" : undefined}>{content}</a>;
  return content;
}
