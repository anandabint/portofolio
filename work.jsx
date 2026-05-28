// Work — Project Showcase Log (proyek nyata)
const WORK_ITEMS = [
  {
    key: "adaptify",
    name: "Adaptify",
    sub: "Capstone — Wear OS",
    tag: "Android ‧ IoT Wearable",
    year: "2025",
    desc: "Aplikasi Android & Wear OS yang membaca detak jantung dan langkah dari smartwatch secara real-time, lalu meng-adaptasi musik sesuai kondisi fisiologis pengguna.",
    size: "lg",
    palette: { bg: "linear-gradient(135deg, #b71229, #6e0f1e 65%, #2a0a14)", fg: "#fff0ec", stripe: "rgba(255,210,200,0.22)" },
    glyph: "wave"
  },
  {
    key: "tidar",
    name: "Citraland Tidar",
    sub: "Field Ops — PT MGN",
    tag: "Supervisi ‧ FO Bawah Tanah",
    year: "2025",
    desc: "Memimpin tim lapangan dalam penggelaran kabel fiber optik bawah tanah. Mengaudit pelaksanaan kontrak dan membongkar praktik koruptif di lapangan secara terbuka.",
    size: "md",
    palette: { bg: "linear-gradient(135deg, #0d2925, #142e2a 60%, #1b4540)", fg: "#f1eee1", stripe: "rgba(241,238,225,0.18)" },
    glyph: "chart"
  },
  {
    key: "rfid",
    name: "Smart Door Lock",
    sub: "RFID ‧ IoT Polinema",
    tag: "Mikrokontroler ‧ RFID",
    year: "2024",
    desc: "Sistem kontrol akses pintu berbasis mikrokontroler dan kartu RFID. Logging masuk-keluar tercatat dan dapat dikelola via panel admin sederhana.",
    size: "sm",
    palette: { bg: "linear-gradient(135deg, #1a1a1f, #2a2a32)", fg: "#fff", stripe: "rgba(255,255,255,0.16)" },
    glyph: "grid"
  },
  {
    key: "chat",
    name: "Real-time Chat",
    sub: "Android ‧ Firebase",
    tag: "Kotlin ‧ Firestore ‧ Auth",
    year: "2024",
    desc: "Aplikasi chat real-time dengan otentikasi Firebase dan sinkronisasi pesan via Firestore. Eksperimen pertama dengan reactive state pada Android Studio.",
    size: "sm",
    palette: { bg: "linear-gradient(135deg, #2a0e0a, #5a1a10 70%, #b34a2a)", fg: "#fff1e0", stripe: "rgba(255,210,180,0.22)" },
    glyph: "flame"
  },
  {
    key: "oprek",
    name: "Oprek Sejak 2010",
    sub: "Hardware ‧ Custom ROM",
    tag: "Sejak SD",
    year: "2010 →",
    desc: "Mulai dari flashing Custom ROM pada Samsung Galaxy Young (GT-S5360). Lab pribadi yang terus berlanjut: bootloader, recovery, jaringan, hingga IoT.",
    size: "lg",
    palette: { bg: "linear-gradient(135deg, #0b0d1e, #1a2255 60%, #2a3a8a)", fg: "#e3e9ff", stripe: "rgba(180,200,255,0.22)" },
    glyph: "cube"
  }
];

function CardGlyph({ kind, stripe }) {
  const stripeBg = `repeating-linear-gradient(135deg, ${stripe} 0px, ${stripe} 8px, transparent 8px, transparent 18px)`;
  if (kind === "wave") {
    return (
      <svg viewBox="0 0 400 300" preserveAspectRatio="none" style={{ position:"absolute", inset:0, width:"100%", height:"100%" }}>
        <defs>
          <pattern id="stripeWave" width="14" height="14" patternUnits="userSpaceOnUse" patternTransform="rotate(135)">
            <rect width="14" height="14" fill="transparent"/>
            <rect width="7" height="14" fill={stripe}/>
          </pattern>
        </defs>
        <path d="M0,180 Q100,120 200,160 T400,150 L400,300 L0,300 Z" fill="url(#stripeWave)" opacity="0.7"/>
        <path d="M0,220 Q120,170 240,200 T400,200 L400,300 L0,300 Z" fill="url(#stripeWave)" opacity="0.4"/>
      </svg>
    );
  }
  if (kind === "chart") {
    return (
      <div style={{ position:"absolute", inset:0, background: stripeBg, opacity: 0.4 }}>
        <svg viewBox="0 0 400 300" preserveAspectRatio="none" style={{ position:"absolute", inset:0, width:"100%", height:"100%" }}>
          <polyline points="20,220 80,180 140,200 200,120 260,150 320,80 380,110" fill="none" stroke={stripe.replace(/0\.\d+/, "0.7")} strokeWidth="3"/>
          <polyline points="20,250 80,230 140,240 200,210 260,220 320,180 380,200" fill="none" stroke={stripe.replace(/0\.\d+/, "0.4")} strokeWidth="2" strokeDasharray="4 6"/>
        </svg>
      </div>
    );
  }
  if (kind === "grid") {
    return (
      <div style={{ position:"absolute", inset:0,
        backgroundImage:`linear-gradient(${stripe} 1px, transparent 1px), linear-gradient(90deg, ${stripe} 1px, transparent 1px)`,
        backgroundSize:"40px 40px", opacity: 0.6 }} />
    );
  }
  if (kind === "flame") {
    return (
      <svg viewBox="0 0 400 300" preserveAspectRatio="none" style={{ position:"absolute", inset:0, width:"100%", height:"100%" }}>
        <defs>
          <radialGradient id="flameGrad" cx="50%" cy="80%" r="80%">
            <stop offset="0" stopColor={stripe.replace(/0\.\d+/, "0.5")}/>
            <stop offset="1" stopColor="transparent"/>
          </radialGradient>
        </defs>
        <circle cx="200" cy="220" r="160" fill="url(#flameGrad)"/>
      </svg>
    );
  }
  if (kind === "cube") {
    return (
      <svg viewBox="0 0 400 300" preserveAspectRatio="none" style={{ position:"absolute", inset:0, width:"100%", height:"100%" }}>
        <g transform="translate(160 80)" fill="none" stroke={stripe} strokeWidth="1.5">
          <rect x="0" y="40" width="80" height="80"/>
          <rect x="30" y="10" width="80" height="80"/>
          <line x1="0" y1="40" x2="30" y2="10"/>
          <line x1="80" y1="40" x2="110" y2="10"/>
          <line x1="0" y1="120" x2="30" y2="90"/>
          <line x1="80" y1="120" x2="110" y2="90"/>
        </g>
      </svg>
    );
  }
  return null;
}

function WorkCard({ item, onOpen }) {
  const supportsCase = item.key === "adaptify" || item.key === "tidar";
  return (
    <div
      data-hover
      className={`work__card work__card--${item.size}`}
      style={{ background: item.palette.bg, color: item.palette.fg }}
      onClick={() => supportsCase && onOpen(item.key)}
    >
      <div className="work__card-thumb">
        <CardGlyph kind={item.glyph} stripe={item.palette.stripe} />
      </div>
      <div className="work__card-overlay" />
      <div className="work__card-body">
        <div className="work__card-top">
          <span>{item.year} ‧ {item.tag}</span>
          {supportsCase ? (
            <span className="work__card-tag">CASE STUDY</span>
          ) : (
            <span className="work__card-tag" style={{ opacity: 0.5 }}>LOG</span>
          )}
        </div>
        <div className="work__card-name">
          {item.name}<br/>
          <span style={{ opacity: 0.6, fontSize: "0.55em" }}>/ {item.sub}</span>
        </div>
        <div className="work__card-foot">
          <p className="work__card-desc">{item.desc}</p>
          <div className="work__card-cta" data-hover>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M5 13L13 5M13 5H7M13 5V11" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Work({ onOpenCase, mounted }) {
  return (
    <section className="work">
      <div className="work__head">
        <div>
          <div className={`reveal ${mounted ? "is-in" : ""} reveal--d1`} style={{ fontFamily:"'JetBrains Mono', monospace", fontSize:11, letterSpacing:"0.18em", textTransform:"uppercase", color:"rgba(255,255,255,0.55)", marginBottom: 18 }}>
            ◆ Project Showcase Log / 2010 — 2026
          </div>
          <h1 className={`work__title reveal ${mounted ? "is-in" : ""} reveal--d2`}>
            Lima<br/>karya,<br/><em style={{ fontStyle:"italic", fontWeight: 300, opacity: 0.7 }}>satu lintasan.</em>
          </h1>
        </div>
        <div className={`work__meta reveal ${mounted ? "is-in" : ""} reveal--d3`}>
          <div>◇ {WORK_ITEMS.length} proyek terdokumentasi</div>
          <div>◇ {WORK_ITEMS.filter(w => w.key==="adaptify"||w.key==="tidar").length} case study mendalam</div>
          <div>◇ Klik kartu untuk membuka</div>
        </div>
      </div>
      <div className="work__grid">
        {WORK_ITEMS.map((it, i) => (
          <div key={it.key} className={`reveal ${mounted ? "is-in" : ""} reveal--d${Math.min(i+2, 6)}`} style={{ gridColumn: `span ${it.size==="lg"?7:it.size==="md"?5:4}` }}>
            <WorkCard item={it} onOpen={onOpenCase} />
          </div>
        ))}
      </div>
    </section>
  );
}

window.Work = Work;
window.WORK_ITEMS = WORK_ITEMS;
