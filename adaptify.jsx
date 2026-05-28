// Adaptify — Capstone case study (replaces Surf Ranch)
// Cinematic biometric→music adaptive app on Wear OS + Android.

function HeartTrace() {
  // Animated EKG-style trace
  const [phase, setPhase] = React.useState(0);
  React.useEffect(() => {
    let raf;
    const tick = () => { setPhase((p) => (p + 1) % 200); raf = requestAnimationFrame(tick); };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);
  const w = 800, h = 160;
  const points = [];
  for (let i = 0; i <= 80; i++) {
    const x = (i / 80) * w;
    const t = (i + phase) % 40;
    let y = h / 2;
    if (t === 18) y -= 6;
    else if (t === 19) y -= 16;
    else if (t === 20) y += 60;
    else if (t === 21) y -= 70;
    else if (t === 22) y += 18;
    else if (t === 23) y -= 4;
    else y += Math.sin(t * 0.4) * 3;
    points.push(`${x.toFixed(1)},${y.toFixed(1)}`);
  }
  return (
    <svg viewBox={`0 0 ${w} ${h}`} preserveAspectRatio="none" style={{ width:"100%", height:"100%" }}>
      <defs>
        <linearGradient id="ekgGrad" x1="0" x2="1">
          <stop offset="0" stopColor="rgba(255,180,180,0)"/>
          <stop offset="0.5" stopColor="rgba(255,180,180,1)"/>
          <stop offset="1" stopColor="rgba(255,180,180,0)"/>
        </linearGradient>
      </defs>
      <polyline points={points.join(" ")} fill="none" stroke="url(#ekgGrad)" strokeWidth="2"/>
    </svg>
  );
}

function Adaptify({ onBack }) {
  const [scrollY, setScrollY] = React.useState(0);
  React.useEffect(() => {
    const el = document.querySelector(".adapt");
    if (!el) return;
    const onScroll = () => setScrollY(el.scrollTop);
    el.addEventListener("scroll", onScroll);
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  const [bpm, setBpm] = React.useState(112);
  React.useEffect(() => {
    const id = setInterval(() => {
      setBpm((b) => Math.max(72, Math.min(168, b + Math.round((Math.random() - 0.5) * 6))));
    }, 1200);
    return () => clearInterval(id);
  }, []);

  const tempo = bpm < 90 ? "Slow ‧ Lo-fi" : bpm < 120 ? "Mid ‧ Indie" : bpm < 145 ? "Up ‧ Synth-pop" : "High ‧ Drum & Bass";

  return (
    <section className="case adapt" style={{ height: "100vh", overflowY: "auto" }}>
      <button className="case__back" data-hover onClick={onBack}>
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
          <path d="M8 2L4 6L8 10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        Kembali ke grid
      </button>

      {/* Hero */}
      <div className="adapt__hero">
        <div className="adapt__hero-bg" style={{ transform: `translateY(${scrollY * 0.3}px)` }}/>
        <div className="adapt__hero-trace"><HeartTrace/></div>

        <div className="adapt__hero-content">
          <div>
            <div style={{ fontFamily:"'JetBrains Mono', monospace", fontSize:11, letterSpacing:"0.24em", textTransform:"uppercase", marginBottom: 24, opacity: 0.7 }}>
              ◇ Case Study N° 01 ‧ Android + Wear OS Capstone
            </div>
            <h1 className="adapt__display">
              Detak jantung,<br/>
              <em>tempo musik,</em><br/>
              satu loop.
            </h1>
          </div>
          <div className="adapt__hero-tag">
            <div>◇ Adaptify — 2025</div>
            <div>◇ Kotlin ‧ Room DB ‧ Wear OS</div>
            <div>◇ Real-time biometrics → adaptive playback</div>
            <div style={{ marginTop: 14, opacity:0.6 }}>
              Smartwatch membaca heart rate &amp; step count secara live, lalu kurva tempo musik
              menyesuaikan zona fisiologis pengguna — tanpa input manual.
            </div>
          </div>
        </div>

        {/* Live demo widget */}
        <div className="adapt__widget">
          <div className="adapt__widget-row">
            <div className="adapt__widget-bpm">
              <div className="adapt__widget-num">{bpm}</div>
              <div className="adapt__widget-unit">BPM</div>
            </div>
            <div className="adapt__widget-mid">
              <div className="adapt__widget-label">Adaptive zone</div>
              <div className="adapt__widget-val">{tempo}</div>
              <div className="adapt__widget-bar">
                <span style={{ left: `${Math.min(100, Math.max(0, (bpm - 60) / 1.2))}%` }} />
              </div>
            </div>
            <div className="adapt__widget-side">
              <div className="adapt__widget-label">Source</div>
              <div className="adapt__widget-val">Galaxy Watch ‧ Wear OS</div>
              <div className="adapt__widget-label" style={{ marginTop: 10 }}>Cadence</div>
              <div className="adapt__widget-val">{(bpm * 1.1 | 0)} steps/min</div>
            </div>
          </div>
        </div>
      </div>

      {/* How it works grid */}
      <div className="adapt__how">
        <div className="adapt__how-head">
          <div className="adapt__how-eyebrow">◇ 01 — Bagaimana cara kerjanya</div>
          <h2 className="adapt__how-h">Tiga lapisan, <em>satu denyut.</em></h2>
        </div>
        <div className="adapt__how-grid">
          {[
            {
              num: "01",
              title: "Sensor Layer",
              tags: ["Wear OS", "Sensor API", "Heart Rate", "Pedometer"],
              body: "Wear OS menyiarkan heart rate & step rate via Sensor API. Aplikasi watch berjalan ringan, hanya streaming."
            },
            {
              num: "02",
              title: "Logic Layer",
              tags: ["Kotlin", "Coroutines", "Room DB"],
              body: "Sinyal masuk dibersihkan, dirata-ratakan, lalu dipetakan ke zona tempo. Histori disimpan di Room untuk grafik harian."
            },
            {
              num: "03",
              title: "Playback Layer",
              tags: ["MediaPlayer", "Playlist Curation"],
              body: "Sistem memilih playlist berdasar zona aktif. Transisi antar lagu dihaluskan agar tidak mengejutkan."
            }
          ].map((s) => (
            <div className="adapt__step" key={s.num}>
              <div className="adapt__step-num">{s.num}</div>
              <div className="adapt__step-title">{s.title}</div>
              <p className="adapt__step-body">{s.body}</p>
              <div className="adapt__step-tags">
                {s.tags.map((t) => <span key={t}>{t}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Stats */}
      <div className="adapt__stats">
        {[
          ["3", "lapisan arsitektur"],
          ["1 Hz", "sampling heart rate"],
          ["120ms", "latency end-to-end"],
          ["Kotlin", "100% native"]
        ].map(([n, l]) => (
          <div key={l}>
            <div className="adapt__stat-num">{n}</div>
            <div className="adapt__stat-label">{l}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

window.Adaptify = Adaptify;
