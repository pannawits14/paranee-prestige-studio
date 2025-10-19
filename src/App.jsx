import React, { useMemo, useState } from "react";

const dict = {
  th: {
    langLabel: "ไทย",
    siteTitle: "Paranee Prestige Studio — เช่าชุดไทย & แต่งหน้า ใกล้วัดอรุณ",
    heroTitle: "เช่าชุดไทย ถ่ายรูปสวย ใกล้วัดอรุณ",
    heroSubtitle:
      "บริการครบวงจร: เช่าชุดไทย แต่งหน้า-ทำผม และช่างภาพมืออาชีพ ในราคาเป็นกันเอง พร้อมอุปกรณ์ครบ สะอาด ใหม่ คุณภาพสูง",
    ctaBook: "จองคิว / แชทเลย",
    ctaCall: "โทรหาเรา",
    aboutTitle: "เกี่ยวกับเรา",
    aboutBody:
      "เราเป็นสตูดิโอเช่าชุดไทยและบริการแต่งหน้า/ถ่ายภาพ ตั้งอยู่ใกล้ \"วัดอรุณ\" เดินทางสะดวก ดูแลอย่างมืออาชีพ ใส่ใจความสะอาดของชุดและเครื่องประดับ ซักทุกวัน พร้อมอุปกรณ์ครบถ้วน",
    servicesTitle: "แพ็กเกจ & ราคา",
    rental: "เช่าชุดไทย (หญิง/ชาย) คนละ",
    baht: "บาท",
    makeup200: "แต่งหน้าพื้นฐาน (Natural) — 200 บาท",
    makeup500: "แต่งหน้าพรีเมียม (Detailed) — 500 บาท",
    photographerTitle: "บริการช่างภาพ",
    photo12: "1–2 คน — 1,500 บาท",
    photo34: "3–4 คน — 2,000 บาท (เพิ่มคนถัดไป +500 บาท/ทุก 2 คน)",
    includedTitle: "สิ่งที่รวมในบริการ",
    includedItems: [
      "เครื่องประดับครบชุด, ผ้าโพก/ผ้าเบี่ยง, เข็มขัด",
      "ทำผมเบื้องต้นให้เข้าชุด",
      "ห้องแต่งตัว/พื้นที่เปลี่ยนชุดสะอาด",
    ],
    makeupTitle: "เมคอัพที่ให้บริการ",
    makeupList: [
      "รองพื้น (Foundation)",
      "คอนซีลเลอร์ (Concealer)",
      "แป้งฝุ่น/แป้งผสมรองพื้น (Foundation Powder)",
      "คิ้ว (Eyebrow)",
      "อายแชโดว์ (Eyeshadow)",
      "อายไลเนอร์ & มาสคาร่า (Eyeliner & Mascara)",
      "บรอนเซอร์ & คอนทัวร์ (Bronzer & Contour)",
      "บลัชออน & ไฮไลต์ (Blush & Highlight)",
      "ลิปสติก (Lipstick)",
    ],
    galleryTitle: "แกลเลอรี่",
    reviewsTitle: "รีวิวจากลูกค้า",
    review1:
      "บริการดีมากค่ะ ชุดสวยสะอาด ถ่ายรูปออกมาสวยมาก อยู่ใกล้วัดอรุณ เดินไม่ไกล",
    review2:
      "แต่งหน้าดี หน้าเป๊ะติดทน ถ่ายรูปได้หลายมุม ประทับใจสุดๆ",
    locationTitle: "ที่ตั้ง & เวลาเปิดให้บริการ",
    address:
      "ใกล้วัดอรุณราชวราราม เขตบางกอกใหญ่ กรุงเทพมหานคร (พิกัดจะแจ้งหลังแชท)",
    hours: "เวลาเปิด: โปรดสอบถาม (อัปเดตในแชท)",
    map: "เปิดแผนที่",
    contactTitle: "ติดต่อเรา",
    contactSub: "แชทจองคิว สอบถามคิว-ราคา หรือขอคำแนะนำเส้นทาง",
    footer: "© " + new Date().getFullYear() + " Paranee Prestige Studio. All rights reserved.",
    brandTag: "Makeup by Paranee Prestige Studio",
  },
  en: {
    langLabel: "EN",
    siteTitle: "Paranee Prestige Studio — Thai Costume Rental, Makeup & Photography near Wat Arun",
    heroTitle: "Thai Costume Rental • Makeup • Photography",
    heroSubtitle:
      "All‑in‑one service near Wat Arun: clean, high‑quality costumes with full accessories, makeup & hair, and professional photographers at friendly prices.",
    ctaBook: "Chat / Book Now",
    ctaCall: "Call us",
    aboutTitle: "About Us",
    aboutBody:
      "We are a Thai costume rental, makeup and photography studio located near Wat Arun. We care about hygiene: costumes and accessories are cleaned daily and kept in top condition.",
    servicesTitle: "Packages & Pricing",
    rental: "Thai costume rental (any gender) per person",
    baht: "THB",
    makeup200: "Basic makeup (Natural) — 200 THB",
    makeup500: "Premium makeup (Detailed) — 500 THB",
    photographerTitle: "Photography Service",
    photo12: "1–2 people — 1,500 THB",
    photo34: "3–4 people — 2,000 THB (+500 THB per additional 2 people)",
    includedTitle: "What’s Included",
    includedItems: [
      "Full accessories set, shawl, belt",
      "Basic hairstyling to match the outfit",
      "Clean changing area",
    ],
    makeupTitle: "Makeup Items",
    makeupList: [
      "Foundation",
      "Concealer",
      "Foundation Powder",
      "Eyebrow",
      "Eyeshadow",
      "Eyeliner & Mascara",
      "Bronzer & Contour",
      "Blush & Highlight",
      "Lipstick",
    ],
    galleryTitle: "Gallery",
    reviewsTitle: "Customer Reviews",
    review1: "Great service and clean costumes. Close to Wat Arun and the photos turned out amazing!",
    review2: "Makeup was professional and long‑lasting. Many photo spots. Highly recommended!",
    locationTitle: "Location & Hours",
    address:
      "Near Wat Arun, Bangkok (exact pin will be shared after chat)",
    hours: "Open hours: please ask (we update via chat)",
    map: "Open Map",
    contactTitle: "Contact Us",
    contactSub: "Message us to book, ask for pricing, or get directions",
    footer: "© " + new Date().getFullYear() + " Paranee Prestige Studio. All rights reserved.",
    brandTag: "Makeup by Paranee Prestige Studio",
  },
};

export default function App() {
  // ==== Gallery data ====
const gallery = Array.from({ length: 11 }, (_, i) => `/g${i + 1}.jpg`);

// ==== Lightbox state ====
const [lightbox, setLightbox] = useState({ open: false, index: 0 });

// ==== Swipe state ====
const [touch, setTouch] = useState({ startX: 0, deltaX: 0, dragging: false });

// ==== Zoom state ====
const [zoom, setZoom] = useState(1);
const [pinchDist, setPinchDist] = useState(0);

// ปุ่มคีย์บอร์ด: Esc ปิด, ←/→ เปลี่ยนรูป
useEffect(() => {
  if (!lightbox.open) return;
  const onKey = (e) => {
    if (e.key === "Escape") setLightbox((s) => ({ ...s, open: false }));
    if (e.key === "ArrowRight") next();
    if (e.key === "ArrowLeft") prev();
  };
  window.addEventListener("keydown", onKey);
  return () => window.removeEventListener("keydown", onKey);
}, [lightbox.open, gallery.length]);

// เปลี่ยนรูปถัดไป/ก่อนหน้า
const next = () =>
  setLightbox((s) => ({ open: true, index: (s.index + 1) % gallery.length }));
const prev = () =>
  setLightbox((s) => ({
    open: true,
    index: (s.index - 1 + gallery.length) % gallery.length,
  }));

// รีเซ็ตซูมทุกครั้งที่เปิดภาพใหม่
useEffect(() => {
  if (lightbox.open) setZoom(1);
}, [lightbox.index, lightbox.open]);

// Touch handlers: รองรับ 1 นิ้ว = swipe, 2 นิ้ว = pinch zoom
const onTouchStart = (e) => {
  if (e.touches.length === 2) {
    const dx = e.touches[0].clientX - e.touches[1].clientX;
    const dy = e.touches[0].clientY - e.touches[1].clientY;
    setPinchDist(Math.hypot(dx, dy));
  } else if (e.touches.length === 1) {
    const x = e.touches[0].clientX;
    setTouch({ startX: x, deltaX: 0, dragging: true });
  }
};

const onTouchMove = (e) => {
  if (e.touches.length === 2) {
    const dx = e.touches[0].clientX - e.touches[1].clientX;
    const dy = e.touches[0].clientY - e.touches[1].clientY;
    const newDist = Math.hypot(dx, dy);
    setZoom((z) => Math.min(Math.max(0.5, (z * newDist) / Math.max(pinchDist, 1)), 3));
    setPinchDist(newDist);
  } else if (touch.dragging && e.touches.length === 1) {
    const x = e.touches[0].clientX;
    setTouch((s) => ({ ...s, deltaX: x - s.startX }));
  }
};

const onTouchEnd = () => {
  if (touch.dragging) {
    const THRESHOLD = 60;
    if (touch.deltaX > THRESHOLD) prev();
    else if (touch.deltaX < -THRESHOLD) next();
  }
  setTouch({ startX: 0, deltaX: 0, dragging: false });
  setPinchDist(0);
};

  // ------- เพิ่มส่วนนี้ไว้ก่อน return() ---------
const gallery = Array.from({ length: 11 }, (_, i) => `/g${i + 1}.jpg`);
const [lightbox, setLightbox] = useState({ open: false, index: 0 });
const [touch, setTouch] = useState({ startX: 0, deltaX: 0, dragging: false });

const next = () =>
  setLightbox((s) => ({ open: true, index: (s.index + 1) % gallery.length }));
const prev = () =>
  setLightbox((s) => ({
    open: true,
    index: (s.index - 1 + gallery.length) % gallery.length,
  }));

const onTouchStart = (e) => {
  const x = e.touches[0].clientX;
  setTouch({ startX: x, deltaX: 0, dragging: true });
};
const onTouchMove = (e) => {
  if (!touch.dragging) return;
  const x = e.touches[0].clientX;
  setTouch((s) => ({ ...s, deltaX: x - s.startX }));
};
const onTouchEnd = () => {
  if (!touch.dragging) return;
  const THRESHOLD = 60;
  if (touch.deltaX > THRESHOLD) prev();
  else if (touch.deltaX < -THRESHOLD) next();
  setTouch({ startX: 0, deltaX: 0, dragging: false });
};

  const [lang, setLang] = useState("th");
  const t = useMemo(() => dict[lang], [lang]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 text-gray-900">
      <div className="w-full border-b bg-white/80 backdrop-blur z-40 sticky top-0">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
          <div className="flex items-center gap-2">
            <span className="text-2xl">👑</span>
            <h1 className="text-lg md:text-xl font-semibold tracking-tight">
              Paranee Prestige Studio
            </h1>
          </div>
          <div className="flex items-center gap-2">
            {(["th", "en"]).map((code) => (
              <button
                key={code}
                onClick={() => setLang(code)}
                className={`px-3 py-1 rounded-full border text-sm transition ${
                  lang === code
                    ? "bg-gray-900 text-white border-gray-900"
                    : "bg-white hover:bg-gray-100"
                }`}
                aria-label={`switch-language-${code}`}
              >
                {dict[code].langLabel}
              </button>
            ))}
            <a
              href="#contact"
              className="hidden sm:inline-flex px-4 py-2 rounded-full bg-gray-900 text-white text-sm font-medium hover:opacity-90"
            >
              {t.ctaBook}
            </a>
          </div>
        </div>
      </div>

      <section className="relative">
        <div
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1600&auto=format&fit=crop')] bg-cover bg-center opacity-20"
          aria-hidden
        />
        <div className="max-w-6xl mx-auto px-4 py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-extrabold leading-tight">
                {t.heroTitle}
              </h2>
              <p className="mt-4 text-base md:text-lg text-gray-700">
                {t.heroSubtitle}
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="#contact"
                  className="px-5 py-3 rounded-xl bg-gray-900 text-white font-semibold hover:opacity-90"
                >
                  {t.ctaBook}
                </a>
                <a
                  href="tel:+66XXXXXXXXX"
                  className="px-5 py-3 rounded-xl border font-semibold hover:bg-gray-50"
                >
                  {t.ctaCall}
                </a>
              </div>
              <p className="mt-3 text-xs text-gray-500">{t.brandTag}</p>
            </div>
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-xl">
                <img
                  alt="Thai costume near Wat Arun"
                  className="w-full h-72 md:h-96 object-cover"
                  src="https://images.unsplash.com/photo-1495360010541-f48722b34f7d?q=80&w=1600&auto=format&fit=crop"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="max-w-6xl mx-auto px-4 py-14 md:py-20">
        <h3 className="text-2xl md:text-3xl font-bold">{t.aboutTitle}</h3>
        <p className="mt-4 text-gray-700 leading-relaxed">{t.aboutBody}</p>
      </section>

      <section id="services" className="bg-white border-y">
        <div className="max-w-6xl mx-auto px-4 py-14 md:py-20">
          <h3 className="text-2xl md:text-3xl font-bold">{t.servicesTitle}</h3>

          <div className="mt-6 grid md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl border bg-white shadow-sm">
              <h4 className="text-lg font-semibold">Rental</h4>
              <p className="mt-2 text-gray-700">
                {t.rental} <span className="font-bold">200</span> {t.baht}
              </p>
              <ul className="mt-4 space-y-2 text-sm text-gray-700 list-disc list-inside">
                {t.includedItems.map((i, idx) => (
                  <li key={idx}>{i}</li>
                ))}
              </ul>
            </div>

            <div className="p-6 rounded-2xl border bg-white shadow-sm">
              <h4 className="text-lg font-semibold">Makeup</h4>
              <p className="mt-2 text-gray-700">{t.makeup200}</p>
              <p className="text-gray-700">{t.makeup500}</p>
              <details className="mt-4">
                <summary className="cursor-pointer text-sm font-medium">{t.makeupTitle}</summary>
                <ul className="mt-2 space-y-1 text-sm text-gray-700 list-disc list-inside">
                  {t.makeupList.map((i, idx) => (
                    <li key={idx}>{i}</li>
                  ))}
                </ul>
              </details>
            </div>

            <div className="p-6 rounded-2xl border bg-white shadow-sm">
              <h4 className="text-lg font-semibold">{t.photographerTitle}</h4>
              <p className="mt-2 text-gray-700">{t.photo12}</p>
              <p className="text-gray-700">{t.photo34}</p>
            </div>
          </div>

          <p className="mt-4 text-xs text-gray-500">
            * ราคาอาจเปลี่ยนแปลงตามโปรโมชั่น/ช่วงเวลา กรุณาแชทเพื่อยืนยัน
          </p>
        </div>
      </section>

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
      onClick={() => setLightbox((s) => ({ ...s, open: false }))}  // คลิกพื้นหลังเพื่อปิด
    >
      <div
        className="relative max-w-[90vw] max-h-[85vh] touch-pan-y"
        onClick={(e) => e.stopPropagation()}  // กันคลิกทะลุ
      >
        {/* ปิด */}
        <button
          onClick={() => setLightbox((s) => ({ ...s, open: false }))}
          className="absolute -top-3 -right-3 bg-white text-gray-900 rounded-full w-9 h-9 shadow flex items-center justify-center"
          aria-label="close"
          title="ปิด (Esc)"
        >
          ✕
        </button>

        {/* ก่อนหน้า/ถัดไป */}
        <button
          onClick={prev}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-900 rounded-full w-10 h-10 shadow flex items-center justify-center"
          aria-label="previous"
          title="ก่อนหน้า (←/ปัดขวา)"
        >
          ‹
        </button>
        <button
          onClick={next}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-900 rounded-full w-10 h-10 shadow flex items-center justify-center"
          aria-label="next"
          title="ถัดไป (→/ปัดซ้าย)"
        >
          ›
        </button>

        {/* ภาพใหญ่ + ซูม + ปัด */}
        <div
          className="overflow-hidden max-h-[85vh] max-w-[90vw] flex justify-center items-center bg-black rounded-lg select-none"
          onWheel={(e) => {
            e.preventDefault();
            setZoom((z) => Math.min(Math.max(0.5, z + e.deltaY * -0.001), 3));
          }}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          <img
            src={gallery[lightbox.index]}
            alt={`preview-${lightbox.index + 1}`}
            className="object-contain transition-transform duration-200"
            draggable={false}
            style={{
              transform: `scale(${zoom}) translateX(${touch.deltaX / zoom}px)`,
              transition: touch.dragging ? "none" : "transform 200ms ease-out",
            }}
          />
        </div>

        {/* ตัวเลขสถานะ */}
        <div className="absolute bottom-2 right-3 text-white/80 text-sm">
          {lightbox.index + 1} / {gallery.length}
        </div>
      </div>
    </div>
  )}
</section>

      <section id="reviews" className="bg-white border-y">
        <div className="max-w-6xl mx-auto px-4 py-14 md:py-20">
          <h3 className="text-2xl md:text-3xl font-bold">{t.reviewsTitle}</h3>
          <div className="mt-6 grid md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl border bg-white shadow-sm">
              <p className="text-gray-800">“{t.review1}”</p>
            </div>
            <div className="p-6 rounded-2xl border bg-white shadow-sm">
              <p className="text-gray-800">“{t.review2}”</p>
            </div>
          </div>
        </div>
      </section>

      <section id="location" className="max-w-6xl mx-auto px-4 py-14 md:py-20">
        <h3 className="text-2xl md:text-3xl font-bold">{t.locationTitle}</h3>
        <div className="mt-4 grid md:grid-cols-2 gap-6 items-start">
          <div>
            <p className="text-gray-700">{t.address}</p>
            <p className="text-gray-700 mt-1">{t.hours}</p>
            <a className="inline-block mt-4 px-4 py-2 rounded-xl border font-medium hover:bg-gray-50" href="#map">
              {t.map}
            </a>
          </div>
          <div className="rounded-2xl overflow-hidden border" id="map">
            <img
              alt="map-placeholder"
              className="w-full h-64 object-cover"
              src="https://images.unsplash.com/photo-1502920917128-1aa500764b8a?q=80&w=1400&auto=format&fit=crop"
            />
          </div>
        </div>
      </section>

      <section id="contact" className="bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto px-4 py-14 md:py-20">
          <h3 className="text-2xl md:text-3xl font-bold">{t.contactTitle}</h3>
          <p className="mt-2 text-gray-300">{t.contactSub}</p>
          <div className="mt-6 grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            <a className="block text-center px-5 py-3 rounded-xl bg-white text-gray-900 font-semibold hover:opacity-90" href="https://line.me/R/ti/p/%40YOUR_LINE_ID" target="_blank" rel="noreferrer">
              LINE
            </a>
            <a className="block text-center px-5 py-3 rounded-xl bg-white text-gray-900 font-semibold hover:opacity-90" href="https://wa.me/YOUR_NUMBER" target="_blank" rel="noreferrer">
              WhatsApp
            </a>
            <a className="block text-center px-5 py-3 rounded-xl bg-white text-gray-900 font-semibold hover:opacity-90" href="tel:+66XXXXXXXXX">
              {t.ctaCall}
            </a>
          </div>
          <p className="mt-4 text-xs text-gray-400">
            * ใส่ LINE ID/เบอร์โทร/ลิงก์ WhatsApp ของร้านจริงในภายหลัง
          </p>
        </div>
      </section>

      <footer className="border-t bg-white">
        <div className="max-w-6xl mx-auto px-4 py-6 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-sm text-gray-600">{t.footer}</p>
          <div className="text-sm text-gray-500">Made with ❤️ in Bangkok</div>
        </div>
      </footer>
    </div>
  );
}
