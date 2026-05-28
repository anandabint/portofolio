// Main app — routes between hero / work / about / contact / case studies,
// with the curtain transition between sections.
const { useState, useEffect, useRef } = React;

const IDENTITY_SETS = {
  identities: window.IDENTITIES,
  // Alternate flavor — for the Tweaks panel
  fruits: [
    { key:"blackberry", label:"BLACKBERRY", short:"Blackberry", bg:"#2a0a3a", fg:"#fdeaff", tint:"rgba(80,8,110,0.6)",  centerLabel:"Blackberry", era:"Late Summer", where:"Pacific Northwest", detail:"9.6° Brix" },
    { key:"blueberry",  label:"BLUEBERRY",  short:"Blueberry",  bg:"#0d1f5e", fg:"#e7eeff", tint:"rgba(36,60,180,0.6)", centerLabel:"Blueberry",  era:"Mid Summer",  where:"North America",     detail:"13.4° Brix" },
    { key:"raspberry",  label:"RASPBERRY",  short:"Raspberry",  bg:"#7d0a36", fg:"#ffe6ec", tint:"rgba(190,24,80,0.6)", centerLabel:"Raspberry",  era:"Early Summer",where:"Northern Europe",   detail:"10.2° Brix" },
    { key:"strawberry", label:"STRAWBERRY", short:"Strawberry", bg:"#b71229", fg:"#fff0ec", tint:"rgba(255,80,60,0.55)", centerLabel:"Strawberry", era:"Late Spring", where:"France / Chile",    detail:"8.8° Brix" },
    { key:"elderberry", label:"ELDERBERRY", short:"Elderberry", bg:"#1a0820", fg:"#efe2ff", tint:"rgba(60,20,80,0.65)", centerLabel:"Elderberry", era:"Early Autumn",where:"Central Europe",    detail:"7.1° Brix" }
  ]
};

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "themeSet": "identities"
}/*EDITMODE-END*/;

function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const identities = IDENTITY_SETS[t.themeSet] || IDENTITY_SETS.identities;

  const [route, setRoute] = useState("hero");
  const [curtain, setCurtain] = useState(null);
  const [curtainColor, setCurtainColor] = useState("#0a0710");
  const [curtainLabel, setCurtainLabel] = useState("Work");
  const [mounted, setMounted] = useState(false);

  const transitionTo = (target, opts = {}) => {
    setCurtainColor(opts.color || "#0a0710");
    setCurtainLabel(opts.label || target);
    setCurtain("down");
    setTimeout(() => {
      setRoute(target);
      setMounted(false);
      requestAnimationFrame(() => requestAnimationFrame(() => setMounted(true)));
      // Scroll any case-study scroll containers to top
      setTimeout(() => {
        document.querySelectorAll(".case").forEach(el => { el.scrollTop = 0; });
        window.scrollTo({ top: 0 });
      }, 30);
      setTimeout(() => {
        setCurtain("up");
        setTimeout(() => setCurtain(null), 950);
      }, 250);
    }, 950);
  };

  const onNavigate = (label) => {
    if (label === "Work")    transitionTo("work",    { color: "#0a0710", label: "Work" });
    if (label === "About")   transitionTo("about",   { color: "#0a0710", label: "About" });
    if (label === "Contact") transitionTo("contact", { color: "#0a0710", label: "Connect" });
    if (label === "Home")    transitionTo("hero",    { color: "#0a0710", label: "Hero" });
  };

  const openCase = (key) => {
    if (key === "adaptify") transitionTo("adaptify", { color: "#6e0f1e", label: "Adaptify" });
    if (key === "tidar")    transitionTo("tidar",    { color: "#0d2925", label: "Citraland Tidar" });
  };

  const backToWork = () => transitionTo("work", { color: "#0a0710", label: "Work" });

  const activeNav =
    route === "work" || route === "adaptify" || route === "tidar" ? "Work" :
    route === "about" ? "About" :
    route === "contact" ? "Contact" :
    null;

  return (
    <React.Fragment>
      <CustomCursor />
      <Nav active={activeNav} onNavigate={onNavigate} onHomeClick={() => onNavigate("Home")} />

      {route === "hero"     && <Hero identities={identities} onWorkClick={() => onNavigate("Work")} onNavigate={onNavigate}/>}
      {route === "work"     && <Work onOpenCase={openCase} mounted={mounted}/>}
      {route === "about"    && <About mounted={mounted}/>}
      {route === "contact"  && <Contact mounted={mounted}/>}
      {route === "adaptify" && <Adaptify onBack={backToWork}/>}
      {route === "tidar"    && <Tidar onBack={backToWork}/>}

      <div
        className={`curtain ${curtain === "down" ? "is-down" : ""} ${curtain === "up" ? "is-up" : ""}`}
        style={{ "--curtain-color": curtainColor }}
      >
        <div className="curtain__panel" />
        <div className="curtain__label">{curtainLabel}</div>
      </div>

      <TweaksPanel>
        <TweakSection label="Konsep showcase"/>
        <TweakRadio
          label="Set hero"
          value={t.themeSet}
          options={["identities","fruits"]}
          onChange={(v) => setTweak("themeSet", v)}
        />
        <div style={{ padding:"4px 8px 8px", fontSize:11, color:"rgba(255,255,255,0.55)", lineHeight:1.5 }}>
          <strong>Identities</strong> menampilkan 5 sisi diri Anda — Tinkerer, Problem Solver, Field Leader,
          Tech Explorer, HSE Practitioner. <strong>Fruits</strong> mengembalikan tema buah berry sebagai
          referensi konsep awal.
        </div>
      </TweaksPanel>
    </React.Fragment>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
