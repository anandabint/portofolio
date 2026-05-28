// Contact — System Terminal Connections
function Contact({ mounted }) {
  const [copied, setCopied] = React.useState("");
  const copy = (text, key) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text);
    }
    setCopied(key);
    setTimeout(() => setCopied(""), 1600);
  };

  const channels = [
    {
      key: "email",
      protocol: "smtp",
      label: "Email — primary channel",
      value: "anandabramadhan@gmail.com",
      href: "mailto:anandabramadhan@gmail.com",
      hint: "Untuk peluang kerja, kolaborasi proyek, atau diskusi serius."
    },
    {
      key: "linkedin",
      protocol: "https",
      label: "LinkedIn — profesional",
      value: "linkedin.com/in/anandabint",
      href: "https://linkedin.com/in/anandabint",
      hint: "CV lengkap, koneksi, dan riwayat aktivitas profesional."
    },
    {
      key: "instagram",
      protocol: "https",
      label: "Instagram — sisi personal",
      value: "instagram.com/anandabint",
      href: "https://instagram.com/anandabint",
      hint: "Sisi yang lebih santai — di luar jam kerja."
    }
  ];

  return (
    <section className="contact">
      <div className="contact__inner">
        <div className={`reveal ${mounted ? "is-in" : ""} reveal--d1`} style={{ fontFamily:"'JetBrains Mono', monospace", fontSize:11, letterSpacing:"0.22em", textTransform:"uppercase", color:"rgba(255,255,255,0.55)", marginBottom: 18 }}>
          ◆ SYSTEM TERMINAL ‧ /connections.sock
        </div>

        <h1 className={`contact__title reveal ${mounted ? "is-in" : ""} reveal--d2`}>
          Buka<br/>
          <em>jalur.</em>
        </h1>

        <p className={`contact__sub reveal ${mounted ? "is-in" : ""} reveal--d3`}>
          Tiga kanal aktif. Pilih yang paling nyaman — saya membalas dalam 24 jam pada hari kerja.
        </p>

        <div className="conn">
          {channels.map((c, i) => (
            <a
              key={c.key}
              href={c.href}
              target="_blank"
              rel="noreferrer"
              data-hover
              className={`conn__row reveal ${mounted ? "is-in" : ""} reveal--d${Math.min(i + 3, 6)}`}
            >
              <div className="conn__proto">{c.protocol}://</div>
              <div className="conn__main">
                <div className="conn__label">{c.label}</div>
                <div className="conn__value">{c.value}</div>
                <div className="conn__hint">{c.hint}</div>
              </div>
              <button
                data-hover
                className="conn__copy"
                onClick={(e) => { e.preventDefault(); copy(c.value, c.key); }}
              >
                {copied === c.key ? "✓ COPIED" : "COPY"}
              </button>
              <div className="conn__arrow">
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                  <path d="M6 16L16 6M16 6H9M16 6V13" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </a>
          ))}
        </div>

        <div className={`contact__meta reveal ${mounted ? "is-in" : ""} reveal--d6`}>
          <div>
            <div className="contact__meta-label">◇ Lokasi</div>
            <div className="contact__meta-val">Blitar / Malang — ID</div>
          </div>
          <div>
            <div className="contact__meta-label">◇ Zona Waktu</div>
            <div className="contact__meta-val">WIB (GMT+7)</div>
          </div>
          <div>
            <div className="contact__meta-label">◇ Status</div>
            <div className="contact__meta-val">
              <span style={{ width:8, height:8, borderRadius:999, background:"#a3e635", display:"inline-block", marginRight:8, boxShadow:"0 0 8px #a3e635" }}/>
              Open for opportunities
            </div>
          </div>
          <div>
            <div className="contact__meta-label">◇ Fokus saat ini</div>
            <div className="contact__meta-val">HSE Practitioner ‧ Field roles</div>
          </div>
        </div>
      </div>
    </section>
  );
}

window.Contact = Contact;
