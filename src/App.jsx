import React, { useMemo, useState, useEffect } from "react";

/* ===== Dictionary (TH/EN) ===== */
const dict = {
  th: {
    langLabel: "ไทย",
    siteTitle: "Paranee Prestige Studio — เช่าชุดไทย & แต่งหน้า ใกล้วัดอรุณ",
    heroTitle: "เช่าชุดไทย ถ่ายรูปสวย ใกล้วัดอรุณ",
    heroSubtitle:
      "บริการครบวงจร: เช่าชุดไทย แต่งหน้า-ทำผม และช่างภาพมืออาชีพ ราคากันเอง อุปกรณ์ครบ สะอาด คุณภาพดี",
    ctaBook: "จองคิว / แชทเลย",
    ctaCall: "โทรหาเรา",
    aboutTitle: "เกี่ยวกับเรา",
    aboutBody:
      'เราเป็นสตูดิโอเช่าชุดไทย แต่งหน้า และถ่ายภาพ ใกล้ "วัดอรุณ" ดูแลความสะอาดของชุด ซักทุกวัน พร้อมเครื่องประดับครบ',
    servicesTitle: "แพ็กเกจ & ราคา",
    rental: "เช่าชุดไทย คนละ",
    baht: "บาท",
    makeup200: "แต่งหน้าธรรมชาติ — 200 บาท",
    makeup500: "แต่งหน้าพรีเมียม — 500 บาท",
    hair: "ทำผมเริ่มต้นที่ — 50 บาท",
    photographerTitle: "บริการช่างภาพ",
    photo12: "1–2 คน — 1,500 บาท",
    photo34: "3–4 คน — 2,000 บาท (+500 ต่อ 2 คนถัดไป)",
    includedTitle: "สิ่งที่รวม",
    includedItems: ["เครื่องประดับครบชุด", "ห้องเปลี่ยนชุดสะอาด"],
    galleryTitle: "แกลเลอรี่",
    reviewsTitle: "รีวิวจากลูกค้า",
    review1: "บริการดีมาก ชุดสวยสะอาด ถ่ายรูปออกมาสวย ใกล้วัดอรุณเดินไม่ไกล",
    review2: "แต่งหน้าติดทน ช่างภาพมืออาชีพ มุมถ่ายเยอะ ประทับใจค่ะ",
    locationTitle: "ที่ตั้ง & เวลาเปิด",
    address: "ใกล้วัดอรุณราชวราราม เขตบางกอกใหญ่ กรุงเทพฯ (พิกัดแจ้งทางแชท)",
    hours: "เวลาเปิด: โปรดสอบถาม (อัปเดตในแชท)",
    map: "เปิดแผนที่",
    contactTitle: "ติดต่อเรา",
    contactSub: "แชทจองคิว สอบถามคิว-ราคา หรือขอเส้นทาง",
    footer: "© " + new Date().getFullYear() + " Paranee Prestige Studio. All rights reserved.",
    brandTag: "Makeup by Paranee Prestige Studio",
  },
  en: {
    langLabel: "EN",
    siteTitle:
      "Paranee Prestige Studio — Thai Costume Rental, Makeup & Photography near Wat Arun",
    heroTitle: "Thai Costume Rental • Makeup • Photography",
    heroSubtitle:
      "All-in-one near Wat Arun: clean, high-quality costumes with full accessories, makeup & hair, and pro photographers at friendly prices.",
    ctaBook: "Chat / Book Now",
    ctaCall: "Call us",
    aboutTitle: "About Us",
    aboutBody:
      "Thai costume rental, makeup, and photography studio near Wat Arun. Costumes & accessories are cleaned daily and kept in top condition.",
    servicesTitle: "Packages & Pricing",
    rental: "Thai costume rental per person",
    baht: "THB",
    makeup200: "Basic makeup — 200 THB",
    makeup500: "Premium makeup — 500 THB",
    hair: "Hairstyling starts at — 50 THB",
    photographerTitle: "Photography Service",
    photo12: "1–2 people — 1,500 THB",
    photo34: "3–4 people — 2,000 THB (+500 per next 2 people)",
    includedTitle: "What’s Included",
    includedItems: ["Full accessory set", "Clean changing area"],
    galleryTitle: "Gallery",
    reviewsTitle: "Customer Reviews",
    review1: "Great service and clean costumes. Close to Wat Arun and the photos turned out amazing!",
    review2: "Professional, long-lasting makeup. Many photo spots. Highly recommended!",
    locationTitle: "Location & Hours",
    address: "Near Wat Arun, Bangkok (exact pin will be shared via chat)",
    hours: "Open hours: please ask (we update via chat)",
    map: "Open Map",
    contactTitle: "Contact Us",
    contactSub: "Message us to book, ask for pricing, or get directions",
    footer: "© " + new Date().getFullYear() + " Paranee Prestige Studio. All rights reserved.",
    brandTag: "Makeup by Paranee Prestige Studio",
  },
};

export default function App() {
  // === Phone reveal ===
const PHONE = "0812345678"; // <-- แก้เป็นเบอร์จริงของร้าน
const [showPhone, setShowPhone] = useState(false);
const copyPhone = () => {
  navigator.clipboard?.writeText(PHONE);
  alert(`คัดลอกเบอร์: ${PHONE}`);
};

  /* ===== Language ===== */
  const [lang, setLang] = useState("th");
  const t = useMemo(() => dict[lang], [lang]);

  /* ===== Smooth scroll to contact ===== */
  const scrollToContact = (e) => {
    e?.preventDefault?.();
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  /* ===== Gallery data (ปรับจำนวนรูปได้) ===== */
  const gallery = Array.from({ length: 11 }, (_, i) => `/g${i + 1}.jpg`);

  /* ===== Lightbox / Index ===== */
  const [lightbox, setLightbox] = useState({ open: false, index: 0 });

  /* ===== Swipe (เฉพาะตอนไม่ซูม) ===== */
  const [swipe, setSwipe] = useState({ active: false, startX: 0, deltaX: 0 });

  /* ===== Zoom & Pan ===== */
  const [zoom, setZoom] = useState(1);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [isPanning, setIsPanning] = useState(false);
  const [lastPos, setLastPos] = useState({ x: 0, y: 0 });
  const clamp = (v, mn, mx) => Math.min(Math.max(v, mn), mx);
  const ZMIN = 1, ZMAX = 3, ZSTEP = 0.25;

  const zoomIn  = () => setZoom(z => clamp(z + ZSTEP, ZMIN, ZMAX));
  const zoomOut = () => setZoom(z => clamp(z - ZSTEP, ZMIN, ZMAX));
  const resetZoom = () => { setZoom(1); setPan({x:0,y:0}); };
  const toggleZoom = () => setZoom(z => (z === 1 ? 2 : 1));
  const onWheelZoom = (e) => { e.preventDefault(); const d = -e.deltaY * 0.001; setZoom(z => clamp(z + d, ZMIN, ZMAX)); };

  /* ===== Next / Prev ===== */
  const next = () => setLightbox(s => ({ open: true, index: (s.index + 1) % gallery.length }));
  const prev = () => setLightbox(s => ({ open: true, index: (s.index - 1 + gallery.length) % gallery.length }));

  /* ===== Reset zoom/pan when open/changed ===== */
  useEffect(() => { if (lightbox.open) { setZoom(1); setPan({x:0,y:0}); setSwipe({active:false,startX:0,deltaX:0}); } }, [lightbox.index, lightbox.open]);

  /* ===== Keyboard ===== */
  useEffect(() => {
    if (!lightbox.open) return;
    const onKey = (e) => {
      if (e.key === "Escape") setLightbox(s => ({ ...s, open: false }));
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft")  prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightbox.open]);

  /* ===== Pointer handlers (ซูม = pan, ไม่ซูม = swipe) ===== */
  const onPointerDown = (e) => {
    if (zoom > 1) {
      e.currentTarget.setPointerCapture?.(e.pointerId);
      setIsPanning(true);
      setLastPos({ x: e.clientX, y: e.clientY });
      return;
    }
    setSwipe({ active: true, startX: e.clientX, deltaX: 0 });
  };

  const onPointerMove = (e) => {
    if (isPanning && zoom > 1) {
      const dx = e.clientX - lastPos.x;
      const dy = e.clientY - lastPos.y;
      setPan(p => ({ x: p.x + dx, y: p.y + dy }));
      setLastPos({ x: e.clientX, y: e.clientY });
      return;
    }
    if (swipe.active && zoom === 1) {
      setSwipe(s => ({ ...s, deltaX: e.clientX - s.startX }));
    }
  };

  const onPointerUp = () => {
    if (isPanning) setIsPanning(false);
    if (swipe.active) {
      const THRESHOLD = 60;
      if (swipe.deltaX > THRESHOLD) prev();
      else if (swipe.deltaX < -THRESHOLD) next();
      setSwipe({ active: false, startX: 0, deltaX: 0 });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-fuchsia-50 via-pink-50 to-white text-gray-900">
      {/* ===== Top Bar ===== */}
      <div className="w-full border-b bg-white/80 backdrop-blur z-40 sticky top-0">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
          <div className="flex items-center gap-2">
            <span className="text-2xl">👑</span>
            <h1 className="text-lg md:text-xl font-semibold tracking-tight">Paranee Prestige Studio</h1>
          </div>
          <div className="flex items-center gap-2">
            {["th","en"].map(code => (
              <button
                key={code}
                onClick={() => setLang(code)}
                className={`px-3 py-1 rounded-full border text-sm transition ${lang === code ? "bg-gray-900 text-white border-gray-900" : "bg-white hover:bg-gray-100"}`}
                aria-label={`switch-language-${code}`}
              >
                {dict[code].langLabel}
              </button>
            ))}
            <a
              href="#contact"
              onClick={scrollToContact}
              className="hidden sm:inline-flex px-4 py-2 rounded-full bg-gray-900 text-white text-sm font-medium hover:opacity-90"
            >
              {t.ctaBook}
            </a>
          </div>
        </div>
      </div>

      {/* ===== Hero ===== */}
      <section className="relative">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: "url('/bg.jpg')" }}
          aria-hidden
        />
        <div className="max-w-6xl mx-auto px-4 py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-extrabold leading-tight">{t.heroTitle}</h2>
              <p className="mt-4 text-base md:text-lg text-gray-700">{t.heroSubtitle}</p>
              <div className="mt-6 flex flex-wrap gap-3">
  {/* ปุ่มจอง / แชทเลย */}
  <a
    href="#contact"
    onClick={(e) => {
      e.preventDefault();
      const el = document.getElementById("contact");
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }}
    className="px-5 py-3 rounded-xl bg-gray-900 text-white font-semibold hover:opacity-90"
  >
    {t.ctaBook}
  </a>

  {/* ปุ่มโทรหาเรา (เพิ่ม scroll ด้วย) */}
  <a
    href="#contact"
    onClick={(e) => {
      e.preventDefault();
      const el = document.getElementById("contact");
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }}
    className="px-5 py-3 rounded-xl border font-semibold hover:bg-gray-50"
  >
    {t.ctaCall}
  </a>
</div>

              <p className="mt-3 text-xs text-gray-500">{t.brandTag}</p>
            </div>
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-xl">
                <img alt="Thai costume near Wat Arun" className="w-full h-72 md:h-96 object-cover" src="/g99.jpg" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== About ===== */}
      <section id="about" className="max-w-6xl mx-auto px-4 py-14 md:py-20">
        <h3 className="text-2xl md:text-3xl font-bold">{t.aboutTitle}</h3>
        <p className="mt-4 text-gray-700 leading-relaxed">{t.aboutBody}</p>
      </section>

      {/* ===== Services ===== */}
      <section id="services" className="bg-white border-y">
        <div className="max-w-6xl mx-auto px-4 py-14 md:py-20">
          <h3 className="text-2xl md:text-3xl font-bold">{t.servicesTitle}</h3>
          <div className="mt-6 grid md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl border bg-white shadow-sm">
              <h4 className="text-lg font-semibold">Rental</h4>
              <p className="mt-2 text-gray-700">{t.rental} <span className="font-bold">200</span> {t.baht}</p>
              <ul className="mt-4 space-y-2 text-sm text-gray-700 list-disc list-inside">
                {t.includedItems.map((i, idx) => (<li key={idx}>{i}</li>))}
              </ul>
            </div>
            <div className="p-6 rounded-2xl border bg-white shadow-sm">
              <h4 className="text-lg font-semibold">Makeup</h4>
              <p className="mt-2 text-gray-700">{t.makeup200}</p>
              <p className="text-gray-700">{t.makeup500}</p>
              <p className="text-gray-700">{t.hair}</p>
            </div>
            <div className="p-6 rounded-2xl border bg-white shadow-sm">
              <h4 className="text-lg font-semibold">{t.photographerTitle}</h4>
              <p className="mt-2 text-gray-700">{t.photo12}</p>
              <p className="text-gray-700">{t.photo34}</p>
            </div>
          </div>
          <p className="mt-4 text-xs text-gray-500">* ราคาอาจเปลี่ยนแปลงตามโปรโมชั่น/ช่วงเวลา กรุณาแชทเพื่อยืนยัน</p>
        </div>
      </section>

      {/* ===== Gallery + Lightbox ===== */}
      <section id="gallery" className="max-w-6xl mx-auto px-4 py-14 md:py-20">
        <h3 className="text-2xl md:text-3xl font-bold">{t.galleryTitle}</h3>

        {/* Thumbnails */}
        <div className="mt-6 grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {gallery.map((src, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setLightbox({ open: true, index: i })}
              className="group relative rounded-2xl overflow-hidden border focus:outline-none focus:ring-2 focus:ring-gray-900"
              aria-label={`open image ${i + 1}`}
            >
              <img
                alt={`gallery-${i + 1}`}
                className="w-full h-52 object-cover transition-transform duration-300 group-hover:scale-105"
                src={src}
                loading="lazy"
              />
            </button>
          ))}
        </div>

        {/* Lightbox */}
        {lightbox.open && (
          <div
            role="dialog"
            aria-modal="true"
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
            onClick={() => setLightbox((s) => ({ ...s, open: false }))}
          >
            <div
              className="relative max-w-[90vw] max-h-[85vh] select-none"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close */}
              <button
                onClick={(e) => { e.stopPropagation(); setLightbox((s) => ({ ...s, open: false })); }}
                className="absolute -top-3 -right-3 bg-white text-gray-900 rounded-full w-9 h-9 shadow flex items-center justify-center z-20 pointer-events-auto"
                aria-label="close"
                title="ปิด (Esc)"
              >
                ✕
              </button>

              {/* Prev / Next */}
              <button
                className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-900 rounded-full w-10 h-10 shadow flex items-center justify-center z-20 pointer-events-auto"
                onClick={(e) => { e.stopPropagation(); prev(); }}
                aria-label="previous"
                title="ก่อนหน้า (←/ปัดขวา)"
              >
                ‹
              </button>
              <button
                className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-900 rounded-full w-10 h-10 shadow flex items-center justify-center z-20 pointer-events-auto"
                onClick={(e) => { e.stopPropagation(); next(); }}
                aria-label="next"
                title="ถัดไป (→/ปัดซ้าย)"
              >
                ›
              </button>

              {/* Image (Zoom + Pan + Swipe) */}
              <div
                className="overflow-hidden max-h-[85vh] max-w-[90vw] flex justify-center items-center bg-black rounded-lg"
                onWheel={onWheelZoom}
                onDoubleClick={(e) => { e.stopPropagation(); toggleZoom(); }}
              >
                <img
                  src={gallery[lightbox.index]}
                  alt={`preview-${lightbox.index + 1}`}
                  className={`object-contain transition-transform duration-200 ${zoom > 1 ? "cursor-grab" : "cursor-zoom-in"}`}
                  draggable={false}
                  onPointerDown={onPointerDown}
                  onPointerMove={onPointerMove}
                  onPointerUp={onPointerUp}
                  onPointerCancel={onPointerUp}
                  style={{
                    transform: `translate(${zoom > 1 ? pan.x : swipe.deltaX}px, ${zoom > 1 ? pan.y : 0}px) scale(${zoom})`,
                    transition: isPanning || swipe.active ? "none" : "transform 200ms ease-out",
                    touchAction: "none",
                    maxHeight: "85vh",
                    maxWidth: "90vw",
                  }}
                />
              </div>

              {/* Zoom Controls */}
              <div className="absolute bottom-3 left-3 flex items-center gap-2 z-20">
                <button onClick={(e)=>{e.stopPropagation(); zoomOut();}} className="bg-white/90 hover:bg-white text-gray-900 rounded-md px-3 py-1 shadow" title="ซูมออก">−</button>
                <button onClick={(e)=>{e.stopPropagation(); resetZoom();}} className="bg-white/90 hover:bg-white text-gray-900 rounded-md px-3 py-1 shadow" title="รีเซ็ต">100%</button>
                <button onClick={(e)=>{e.stopPropagation(); zoomIn();}} className="bg-white/90 hover:bg-white text-gray-900 rounded-md px-3 py-1 shadow" title="ซูมเข้า">+</button>
              </div>

              {/* Counter */}
              <div className="absolute bottom-2 right-3 text-white/80 text-sm z-20">
                {lightbox.index + 1} / {gallery.length}
              </div>
            </div>
          </div>
        )}
      </section>

      {/* ===== Reviews ===== */}
      <section id="reviews" className="bg-white border-y">
        <div className="max-w-6xl mx-auto px-4 py-14 md:py-20">
          <h3 className="text-2xl md:text-3xl font-bold">{t.reviewsTitle}</h3>
          <div className="mt-6 grid md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl border bg-white shadow-sm"><p className="text-gray-800">“{t.review1}”</p></div>
            <div className="p-6 rounded-2xl border bg-white shadow-sm"><p className="text-gray-800">“{t.review2}”</p></div>
          </div>
        </div>
      </section>

      {/* ===== Location ===== */}
      <section
  id="location"
  className="max-w-6xl mx-auto px-4 py-14 md:py-20 text-center"
>
  <h3 className="text-2xl md:text-3xl font-bold mb-6 flex items-center justify-center gap-2">
    <span>📍</span> แผนที่ร้าน Paranee Prestige Studio
  </h3>

  <div className="rounded-2xl overflow-hidden shadow-lg border border-pink-100">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4592.189100779074!2d100.4847617113442!3d13.742302986592952!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e299001333832b%3A0xa183ef6bab621d6b!2sParanee%20Prestige%20Studio!5e1!3m2!1sen!2sth!4v1761239458359!5m2!1sen!2sth"
      width="100%"
      height="450"
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      title="Google Map - Paranee Prestige Studio"
      className="w-full h-[400px] md:h-[500px]"
    ></iframe>
  </div>
</section>


      {/* ===== Contact ===== */}
      <section id="contact" className="bg-gray-900 text-white scroll-mt-24">
        <div className="max-w-6xl mx-auto px-4 py-14 md:py-20">
          <h3 className="text-2xl md:text-3xl font-bold">{t.contactTitle}</h3>
          <p className="mt-2 text-gray-300">{t.contactSub}</p>
          <div className="mt-6 grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            <a className="block text-center px-5 py-3 rounded-xl bg-white text-gray-900 font-semibold hover:opacity-90" href="https://line.me/R/ti/p/%40YOUR_LINE_ID" target="_blank" rel="noreferrer">LINE</a>
            <a className="block text-center px-5 py-3 rounded-xl bg-white text-gray-900 font-semibold hover:opacity-90" href="https://wa.me/YOUR_NUMBER" target="_blank" rel="noreferrer">WhatsApp</a>
            <a className="block text-center px-5 py-3 rounded-xl bg-white text-gray-900 font-semibold hover:opacity-90" href="tel:+66661093100">{t.ctaCall}</a>
          </div>
          <p className="mt-4 text-xs text-gray-400">* ใส่ LINE ID/เบอร์โทร/ลิงก์ WhatsApp ของร้านจริงภายหลัง</p>
        </div>
      </section>

      {/* ===== Footer ===== */}
      <footer className="border-t bg-white">
        <div className="max-w-6xl mx-auto px-4 py-6 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-sm text-gray-600">{t.footer}</p>
          <div className="text-sm text-gray-500">Made with ❤️ in Bangkok</div>
        </div>
      </footer>
    </div>
  );
}
