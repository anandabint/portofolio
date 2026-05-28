// Citraland Tidar — Field Operations Console (replaces Leadify)
// Dashboard untuk supervisi FO bawah tanah di proyek PT MGN.

function Sparkline({ data, color = "#0d8a5b" }) {
  const w = 120, h = 28;
  const max = Math.max(...data), min = Math.min(...data);
  const pts = data.map((v, i) => {
    const x = (i / (data.length - 1)) * w;
    const y = h - ((v - min) / (max - min || 1)) * h;
    return `${x.toFixed(1)},${y.toFixed(1)}`;
  }).join(" ");
  const area = `0,${h} ${pts} ${w},${h}`;
  return (
    <svg viewBox={`0 0 ${w} ${h}`} preserveAspectRatio="none" style={{ width: "100%", height: "100%" }}>
      <polygon points={area} fill={color} opacity="0.12"/>
      <polyline points={pts} fill="none" stroke={color} strokeWidth="1.6"/>
    </svg>
  );
}

function CableRunMap({ progress, hover, setHover }) {
  // A stylized site map: 5 segments along a curve. Each segment has a status.
  const segments = [
    { x: 60,  y: 220, status: "done",    label: "S-01" },
    { x: 200, y: 180, status: "done",    label: "S-02" },
    { x: 340, y: 200, status: "done",    label: "S-03" },
    { x: 470, y: 150, status: "active",  label: "S-04" },
    { x: 590, y: 120, status: "pending", label: "S-05" }
  ];
  const colorOf = (s) => s === "done" ? "#0d8a5b" : s === "active" ? "#e0a13c" : "#6c6a85";
  return (
    <svg viewBox="0 0 660 280" style={{ width:"100%", height:"100%" }}>
      <defs>
        <pattern id="tidarStripe" width="20" height="20" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
          <rect width="20" height="20" fill="transparent"/>
          <rect width="2" height="20" fill="rgba(13,138,91,0.18)"/>
        </pattern>
      </defs>
      <rect x="0" y="0" width="660" height="280" fill="url(#tidarStripe)"/>
      {/* Cable route */}
      <path d="M20,250 C 120,180 240,250 360,180 S 540,80 640,80" fill="none" stroke="#2f4844" strokeWidth="10" strokeLinecap="round"/>
      <path d="M20,250 C 120,180 240,250 360,180 S 540,80 640,80" fill="none" stroke="#0d8a5b" strokeWidth="2" strokeDasharray={`${progress * 6} 1000`} strokeLinecap="round"/>
      {/* Segments */}
      {segments.map((s, i) => (
        <g key={s.label}
          onMouseEnter={() => setHover(i)}
          onMouseLeave={() => setHover(null)}
          style={{ cursor: "pointer" }}>
          <circle cx={s.x} cy={s.y} r={hover === i ? 14 : 10} fill="#0d2925" stroke={colorOf(s.status)} strokeWidth="2.5"/>
          <text x={s.x} y={s.y + 4} textAnchor="middle" fontSize="10" fontFamily="JetBrains Mono" fill={colorOf(s.status)}>{s.label}</text>
        </g>
      ))}
      <text x="20" y="30" fontSize="10" fontFamily="JetBrains Mono" letterSpacing="2" fill="#8aa39a">CITRALAND TIDAR ‧ RUN A-7</text>
      <text x="20" y="48" fontSize="10" fontFamily="JetBrains Mono" letterSpacing="2" fill="#8aa39a">{`PROGRESS ${Math.round(progress * 10)} / 50`}</text>
    </svg>
  );
}

const FINDINGS = [
  { id:"FND-014", date:"22 Sep 25", segment:"S-03 → S-04", level:"high",   note:"Kedalaman galian 18cm di bawah spek (40cm). Foto bukti diarsipkan." },
  { id:"FND-013", date:"19 Sep 25", segment:"S-02",        level:"medium", note:"Pipa pelindung HDPE diganti tipe non-standar oleh subkon. Diganti ulang." },
  { id:"FND-012", date:"15 Sep 25", segment:"S-02",        level:"high",   note:"Penagihan volume tidak sesuai berita acara — selisih 12m. Eskalasi terbuka." },
  { id:"FND-011", date:"11 Sep 25", segment:"S-01",        level:"low",    note:"Marker peringatan kurang 2 unit. Disesuaikan hari yang sama." },
  { id:"FND-010", date:"08 Sep 25", segment:"S-01",        level:"medium", note:"APD operator alat berat tidak lengkap pada shift malam. Briefing ulang." }
];

function Tidar({ onBack }) {
  const [hover, setHover] = React.useState(null);
  const progress = 64; // %

  return (
    <section className="case tidar">
      <button className="case__back" data-hover onClick={onBack}>
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
          <path d="M8 2L4 6L8 10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        Kembali ke grid
      </button>

      <div className="tidar__shell">
        <aside className="tidar__side">
          <div className="tidar__brand">
            <span className="tidar__brand-dot"/>
            MGN ‧ Field Ops
          </div>
          <div className="tidar__nav">
            <div className="tidar__nav-section">Proyek aktif</div>
            <a className="tidar__nav-item is-active" data-hover>
              <span>◆ Citraland Tidar</span>
              <span className="tidar__nav-badge">A-7</span>
            </a>
            <a className="tidar__nav-item" data-hover><span>◇ Run logs</span></a>
            <a className="tidar__nav-item" data-hover><span>◇ Tim lapangan</span><span style={{fontSize:11,opacity:0.6}}>14</span></a>
            <a className="tidar__nav-item" data-hover><span>◇ Findings</span><span className="tidar__nav-badge tidar__nav-badge--alert">5</span></a>
            <a className="tidar__nav-item" data-hover><span>◇ K3 / HSE</span></a>
            <div className="tidar__nav-section">Arsip</div>
            <a className="tidar__nav-item" data-hover><span>◇ Berita acara</span></a>
            <a className="tidar__nav-item" data-hover><span>◇ Foto bukti</span></a>
            <a className="tidar__nav-item" data-hover><span>◇ Pengaturan</span></a>
          </div>
          <div className="tidar__supervisor">
            <div className="tidar__avatar">AB</div>
            <div>
              <strong style={{ color:"#f1eee1" }}>Ananda B. R.</strong>
              <div style={{ fontSize:11, opacity:0.6, marginTop:2 }}>Field Supervisor ‧ Intern</div>
            </div>
          </div>
        </aside>

        <main className="tidar__main">
          <div className="tidar__topbar">
            <div>
              <h1 className="tidar__topbar-h">Citraland Tidar Run A-7</h1>
              <div className="tidar__topbar-sub">FO bawah tanah ‧ Penggelaran &amp; supervisi ‧ Jul → Nov 2025</div>
            </div>
            <button className="tidar__btn-primary" data-hover>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M7 2v10M2 7h10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
              </svg>
              Lapor finding
            </button>
          </div>

          {/* KPIs */}
          <div className="tidar__kpi-row">
            {[
              { label: "Kabel terpasang", val: "3,210", unit:"m", delta: "+82m hari ini", up: true, data: [120,140,180,220,240,280,310,320,360] },
              { label: "Splice point",   val: "126", unit:"", delta: "+4 minggu ini", up: true, data: [10,18,22,30,42,58,72,98,126] },
              { label: "Findings terbuka", val: "5", unit:"", delta: "−2 dari minggu lalu", up: false, data: [9,11,10,8,9,7,8,6,5] },
              { label: "Manhari aman",   val: "184", unit:"", delta: "0 incident", up: true, data: [40,60,80,100,120,140,160,170,184] }
            ].map((k) => (
              <div className="tidar__kpi" key={k.label} data-hover>
                <div className="tidar__kpi-label">{k.label}<span style={{ opacity:0.5 }}>◇</span></div>
                <div className="tidar__kpi-val">
                  {k.val}<span className="tidar__kpi-unit">{k.unit}</span>
                </div>
                <div className={`tidar__kpi-delta ${k.up ? "up" : "down"}`}>{k.delta}</div>
                <div className="tidar__kpi-spark">
                  <Sparkline data={k.data} color={k.up ? "#0d8a5b" : "#e0a13c"}/>
                </div>
              </div>
            ))}
          </div>

          {/* Map + progress side panel */}
          <div className="tidar__row">
            <div className="tidar__card">
              <div className="tidar__card-head">
                <div>
                  <div className="tidar__card-h">Peta penggelaran</div>
                  <div className="tidar__card-sub">5 segmen ‧ {progress}% selesai</div>
                </div>
                <div className="tidar__legend">
                  <span><i style={{background:"#0d8a5b"}}/>Selesai</span>
                  <span><i style={{background:"#e0a13c"}}/>Aktif</span>
                  <span><i style={{background:"#6c6a85"}}/>Pending</span>
                </div>
              </div>
              <div style={{ height: 260 }}>
                <CableRunMap progress={progress} hover={hover} setHover={setHover}/>
              </div>
              {hover !== null && (
                <div style={{ marginTop:10, fontSize:12, color:"#cfe0d8", fontFamily:"'JetBrains Mono', monospace" }}>
                  ◇ Segmen S-0{hover + 1} dipilih klik untuk membuka berita acara
                </div>
              )}
            </div>
            <div className="tidar__card">
              <div className="tidar__card-h">Progres harian</div>
              <div className="tidar__card-sub" style={{ marginBottom: 18 }}>Minggu ke-12 ‧ shift pagi + sore</div>
              {[
                ["Sen", 92], ["Sel", 78], ["Rab", 86], ["Kam", 64], ["Jum", 88], ["Sab", 42]
              ].map(([d, p]) => (
                <div key={d} className="tidar__progress">
                  <div className="tidar__progress-day">{d}</div>
                  <div className="tidar__progress-bar"><span style={{ width: `${p}%` }}/></div>
                  <div className="tidar__progress-val">{p}m</div>
                </div>
              ))}
            </div>
          </div>

          {/* Findings table */}
          <div className="tidar__card">
            <div className="tidar__card-head">
              <div>
                <div className="tidar__card-h">Findings &amp; eskalasi</div>
                <div className="tidar__card-sub">Termasuk satu kasus penagihan korupif yang dieskalasi terbuka</div>
              </div>
              <button className="tidar__btn-secondary" data-hover>Ekspor PDF</button>
            </div>
            <table className="tidar__table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Tanggal</th>
                  <th>Segmen</th>
                  <th>Level</th>
                  <th>Catatan</th>
                </tr>
              </thead>
              <tbody>
                {FINDINGS.map((f) => (
                  <tr key={f.id} data-hover>
                    <td style={{ fontFamily:"'JetBrains Mono', monospace", color:"#cfe0d8" }}>{f.id}</td>
                    <td style={{ color:"#8aa39a" }}>{f.date}</td>
                    <td>{f.segment}</td>
                    <td>
                      <span className={`tidar__pill ${f.level}`}>{f.level}</span>
                    </td>
                    <td style={{ color:"#cfe0d8" }}>{f.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </section>
  );
}

window.Tidar = Tidar;
