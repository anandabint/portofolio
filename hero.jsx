// Hero — Concept Showcase: 5 identitas Ananda Bintang Ramadhan
// (struktur visual sama dengan versi berries, kontennya identitas pribadi)

const IDENTITIES = [
  {
    key: "tinkerer",
    label: "TINKERER",
    short: "Tinkerer",
    bg: "#2a0a3a",
    fg: "#fdeaff",
    tint: "rgba(80, 8, 110, 0.6)",
    centerLabel: "Galaxy Young — flashed",
    era: "Sejak 2010 — SD",
    where: "Blitar, Jawa Timur",
    detail: "Custom ROM ‧ Bootloader ‧ Recovery"
  },
  {
    key: "solver",
    label: "PROBLEM SOLVER",
    short: "Problem Solver",
    bg: "#0d1f5e",
    fg: "#e7eeff",
    tint: "rgba(36, 60, 180, 0.6)",
    centerLabel: "Lab Telekomunikasi",
    era: "Polinema ‧ 2023 → 2026",
    where: "Politeknik Negeri Malang",
    detail: "D3 Teknik Elektro / Telekomunikasi"
  },
  {
    key: "leader",
    label: "FIELD LEADER",
    short: "Field Leader",
    bg: "#7d0a36",
    fg: "#ffe6ec",
    tint: "rgba(190, 24, 80, 0.6)",
    centerLabel: "Site — Citraland Tidar",
    era: "Juli — November 2025",
    where: "PT. Multiuser Global Network",
    detail: "Supervisi FO Bawah Tanah"
  },
  {
    key: "explorer",
    label: "TECH EXPLORER",
    short: "Tech Explorer",
    bg: "#b71229",
    fg: "#fff0ec",
    tint: "rgba(255, 80, 60, 0.55)",
    centerLabel: "Adaptify — Wear OS",
    era: "Capstone ‧ 2025",
    where: "Android ‧ Kotlin ‧ Room ‧ Firebase",
    detail: "Biometrik → Musik Adaptif"
  },
  {
    key: "hse",
    label: "HSE PRACTITIONER",
    short: "HSE Practitioner",
    bg: "#1a0820",
    fg: "#efe2ff",
    tint: "rgba(60, 20, 80, 0.65)",
    centerLabel: "Manajemen Risiko K3",
    era: "Bersertifikat ‧ April 2025",
    where: "Prime Safety Indonesia",
    detail: "ID PS.C-25.04.17.0066"
  }
];

function Hero({ identities, onWorkClick, onNavigate }) {
  const list = identities && identities.length ? identities : IDENTITIES;
  const [idx, setIdx] = React.useState(0);
  const id = list[idx] || list[0];

  // Parallax for centerpiece
  const stageRef = React.useRef(null);
  React.useEffect(() => {
    const onMove = (e) => {
      if (!stageRef.current) return;
      const rect = stageRef.current.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = (e.clientX - cx) / window.innerWidth;
      const dy = (e.clientY - cy) / window.innerHeight;
      stageRef.current.style.transform =
        `translateY(8%) translate(${dx * 18}px, ${dy * 14}px) rotate(${dx * 2}deg)`;
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  // Auto-rotate
  React.useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % list.length), 6800);
    return () => clearInterval(t);
  }, [list.length]);

  return (
    <section
      className="hero"
      style={{
        background: id.bg,
        color: id.fg,
        "--berry-bg": id.bg,
        "--center-tint": id.tint
      }}
    >
      <div className="hero__meta">
        <div className="hero__meta-line">
          <span className="hero__meta-dot" />
          <span>ABB.Studio / Portofolio</span>
        </div>
        <div>2026 ‧ Vol.07</div>
        <div style={{ marginTop: 8 }}>Ananda Bintang Ramadhan</div>
        <div style={{ opacity: 0.6 }}>Tinkerer ‧ Problem Solver ‧ Future HSE</div>
        <div style={{ opacity: 0.45, marginTop: 4 }}>Blitar / Malang — ID</div>
      </div>

      <div className="hero__meta-right">
        <div className="hero__meta-line" style={{ justifyContent: "flex-end" }}>
          <span>Tersedia untuk kolaborasi</span>
          <span className="hero__meta-dot" />
        </div>
        <div>{id.era}</div>
        <div style={{ marginTop: 8 }}>Konsep N° {String(idx + 1).padStart(2, "0")} / {String(list.length).padStart(2, "0")}</div>
        <div style={{ opacity: 0.6 }}>{id.where}</div>
        <div style={{ opacity: 0.45, marginTop: 4 }}>{id.detail}</div>
      </div>

      {/* Big background type */}
      <div className="hero__bgtype" aria-hidden="true">
        <div className="hero__bgtype-text" key={id.key}>
          {id.label.split(" ").map((part, i) => (
            <span key={i} style={{ display: "block" }}>{part}</span>
          ))}
        </div>
      </div>

      {/* Centerpiece */}
      <div className="hero__center">
        <div className="hero__center-stage" ref={stageRef}>
          {list.map((b, i) => (
            <div
              key={b.key}
              className={`hero__center-img ${i === idx ? "is-active" : ""}`}
              style={{ "--center-tint": b.tint }}
            >
              <div className="hero__center-label">{b.centerLabel} — placeholder</div>
              <div className="hero__center-shine" />
            </div>
          ))}
          <div className="hero__center-shadow" />
        </div>
      </div>

      {/* Floating identity tagline (bottom-center, above selector) */}
      <div className="hero__tagline">
        <div className="hero__tagline-eyebrow">◆ Dari Telekomunikasi ke Lapangan</div>
        <h1 className="hero__tagline-h">
          Saya membangun, mengaudit, dan
          <em> menyelesaikan masalah</em><br/>
          di antara kabel, kode, dan keselamatan.
        </h1>
      </div>

      {/* Identity selector */}
      <div className="hero__selector" data-hover>
        {list.map((b, i) => (
          <button
            key={b.key}
            data-hover
            className={`hero__selector-item ${i === idx ? "is-active" : ""}`}
            onClick={() => setIdx(i)}
          >
            {b.short}
          </button>
        ))}
      </div>

      {/* Ticker */}
      <div className="hero__ticker">
        <div className="hero__ticker-inner">
          {Array.from({ length: 2 }).map((_, k) => (
            <span key={k} style={{ display: "inline-flex", gap: 48 }}>
              <span>D3 TEKNIK ELEKTRO ‧ POLINEMA</span><span>◆</span>
              <span>K3 MANAJEMEN RISIKO ‧ PS.C-25.04.17.0066</span><span>◆</span>
              <span>OPREK SEJAK 2010 — GT-S5360</span><span>◆</span>
              <span>PT. MGN ‧ SUPERVISI FO BAWAH TANAH</span><span>◆</span>
              <span>SELECTED WORK ‧ <button data-hover onClick={onWorkClick} style={{textDecoration:"underline",cursor:"none",background:"none",border:0,color:"inherit",font:"inherit",letterSpacing:"inherit"}}>BUKA GRID</button></span><span>◆</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

window.Hero = Hero;
window.DEFAULT_BERRIES = IDENTITIES; // legacy export name for backwards compat
window.IDENTITIES = IDENTITIES;
