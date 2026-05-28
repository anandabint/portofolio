// About — Terminal narrative + Specs/Stats + Experience timeline
function TerminalLine({ prompt, children, delay = 0 }) {
  return (
    <div className="term__line" style={{ animationDelay: `${delay}ms` }}>
      <span className="term__prompt">{prompt}</span>
      <span className="term__text">{children}</span>
    </div>
  );
}

function About({ mounted }) {
  return (
    <section className="about">
      {/* Hero header */}
      <div className="about__head">
        <div className="about__head-left">
          <div className={`reveal ${mounted ? "is-in" : ""} reveal--d1`} style={{ fontFamily:"'JetBrains Mono', monospace", fontSize:11, letterSpacing:"0.2em", textTransform:"uppercase", color:"rgba(255,255,255,0.55)", marginBottom: 18 }}>
            ◆ ABR.Studio / About — Kisah Diri
          </div>
          <h1 className={`about__title reveal ${mounted ? "is-in" : ""} reveal--d2`}>
            Antara<br/>
            <em>kabel, kode,</em><br/>
            dan keselamatan.
          </h1>
        </div>
        <div className={`about__pitch reveal ${mounted ? "is-in" : ""} reveal--d3`}>
          Telekomunikasi mengajari saya jaringan. Lapangan mengajari saya tanggung jawab.
          K3 mengajari saya bahwa nyawa orang tidak boleh dinegosiasikan. Tiga jalur itu
          bertemu di satu meja kerja.
        </div>
      </div>

      {/* Terminal narrative */}
      <div className={`term reveal ${mounted ? "is-in" : ""} reveal--d3`}>
        <div className="term__bar">
          <span className="term__dot" style={{ background:"#ff5f56" }}/>
          <span className="term__dot" style={{ background:"#ffbd2e" }}/>
          <span className="term__dot" style={{ background:"#27c93f" }}/>
          <span className="term__title">~/abr.studio/about — narrative.log</span>
        </div>
        <div className="term__body">
          <TerminalLine prompt="$">
            <span style={{ color:"#7dd3fc" }}>cat</span> origin_story.md
          </TerminalLine>
          <div className="term__out">
            Saya mulai oprek sejak SD, tahun 2010. Hape pertama yang saya bedah adalah
            <strong> Samsung Galaxy Young (GT-S5360)</strong> — flashing custom ROM,
            mengganti recovery, melihat sistem yang seharusnya disegel terbuka di
            depan saya. Rasa penasaran itu tidak pernah berhenti.
          </div>

          <TerminalLine prompt="$" delay={120}>
            <span style={{ color:"#7dd3fc" }}>cat</span> discipline.md
          </TerminalLine>
          <div className="term__out">
            Saya juga <strong>mantan atlet basket kompetitif</strong> sepanjang SMP
            dan SMA. Basket mengajari saya hal yang tidak diajarkan ruang kelas:
            disiplin latihan, baca permainan, dan keberanian mengambil keputusan
            ketika waktu habis.
          </div>

          <TerminalLine prompt="$" delay={240}>
            <span style={{ color:"#7dd3fc" }}>cat</span> field_leader.md
          </TerminalLine>
          <div className="term__out">
            Disiplin itu terbawa ke <strong>PT. Multiuser Global Network</strong>.
            Di lapangan, saya tidak hanya mengawasi kabel — saya memimpin rapat tim
            dan manajemen senior, mendokumentasikan setiap titik, dan ketika
            menemukan praktik koruptif, saya pilih jalan yang lebih sulit:
            <em> jujur, terbuka, dan terdokumentasi.</em>
          </div>

          <TerminalLine prompt="$" delay={360}>
            <span style={{ color:"#7dd3fc" }}>cat</span> next_chapter.md
          </TerminalLine>
          <div className="term__out">
            Sekarang saya menutup D3 Teknik Elektro di <strong>Politeknik Negeri Malang</strong>
            sambil membangun fondasi sebagai praktisi <strong>HSE</strong>. Telekomunikasi
            tetap akar saya — tapi keselamatan kerja adalah arah saya berikutnya.
          </div>

          <TerminalLine prompt="$" delay={480}>
            <span style={{ color:"#7dd3fc" }}>echo</span> "ready_for_what's_next"
          </TerminalLine>
          <div className="term__out" style={{ color:"#a3e635" }}>
            ready_for_what's_next ✓
          </div>
        </div>
      </div>

      {/* Specs grid */}
      <div className="about__specs">
        <div className="about__specs-head">
          <div className="about__specs-eyebrow">◆ 02 — Professional Specs & Stats</div>
          <h2 className="about__specs-title">Pendidikan & <em>Sertifikasi</em></h2>
        </div>
        <div className="specs">
          <div className="specs__card">
            <div className="specs__card-label">◇ Pendidikan Formal</div>
            <div className="specs__card-h">D3 Teknik Elektro</div>
            <div className="specs__card-sub">Konsentrasi Telekomunikasi</div>
            <div className="specs__card-meta">
              <div><span>Institusi</span><strong>Politeknik Negeri Malang</strong></div>
              <div><span>Angkatan</span><strong>2023 → 2026</strong></div>
              <div><span>Status</span><strong style={{ color:"#a3e635" }}>● Aktif (Semester Akhir)</strong></div>
            </div>
          </div>

          <div className="specs__card specs__card--accent">
            <div className="specs__card-label">◇ Sertifikasi Profesional</div>
            <div className="specs__card-h">Manajemen Risiko K3</div>
            <div className="specs__card-sub">Health, Safety & Environment</div>
            <div className="specs__card-meta">
              <div><span>Penerbit</span><strong>Prime Safety Indonesia</strong></div>
              <div><span>Diterbitkan</span><strong>April 2025</strong></div>
              <div><span>ID Sertifikat</span><strong style={{ fontFamily:"'JetBrains Mono', monospace", letterSpacing:"0.02em" }}>PS.C-25.04.17.0066</strong></div>
            </div>
            <div className="specs__seal">
              <div className="specs__seal-ring" />
              <div className="specs__seal-text">VERIFIED ‧ 2025</div>
            </div>
          </div>

          <div className="specs__card">
            <div className="specs__card-label">◇ Domain Teknis</div>
            <div className="specs__card-h">Stack & Tools</div>
            <div className="specs__card-sub">Yang sering saya pakai</div>
            <div className="specs__tags">
              {[
                "Kotlin","Android Studio","Wear OS","Room DB",
                "Firebase","Firestore","Auth",
                "Mikrokontroler","RFID","IoT",
                "Fiber Optik","Network Support",
                "Custom ROM","Recovery",
                "Manajemen Risiko K3","HSE"
              ].map((t) => <span key={t} className="specs__tag">{t}</span>)}
            </div>
          </div>
        </div>
      </div>

      {/* Experience timeline */}
      <div className="about__exp">
        <div className="about__specs-head">
          <div className="about__specs-eyebrow">◆ 03 — Interactive Experience Timeline</div>
          <h2 className="about__specs-title">Lintasan <em>perjalanan</em></h2>
        </div>
        <div className="timeline">
          {[
            {
              year: "Jul — Nov 2025",
              role: "Network Support Engineer & Field Supervisor (Intern)",
              org: "PT. Multiuser Global Network (MGN)",
              points: [
                "Memimpin rapat koordinasi tim teknis dan manajemen senior secara berkala.",
                "Mensupervisi penggelaran kabel fiber optik bawah tanah di proyek Citraland Tidar.",
                "Mengaudit kesesuaian pekerjaan lapangan terhadap kontrak dan standar teknis.",
                "Mengangkat secara terbuka dan terdokumentasi praktik koruptif yang ditemukan di lapangan."
              ]
            },
            {
              year: "Mei 2022 — Agu 2023",
              role: "E-commerce Seller (Freelance)",
              org: "Shopee — toko mandiri",
              points: [
                "Mengelola seluruh siklus operasi toko: katalog, harga, fulfillment, layanan pelanggan.",
                "Membaca data penjualan untuk menyesuaikan stok dan strategi promosi mingguan.",
                "Membangun reputasi toko dengan SLA pengiriman dan rating tinggi yang konsisten."
              ]
            },
            {
              year: "SMP — SMA",
              role: "Atlet Basket Kompetitif",
              org: "Tim sekolah & kompetisi regional",
              points: [
                "Menjalani regimen latihan harian — membentuk disiplin dan ketahanan mental.",
                "Mengambil peran kepemimpinan di lapangan: membaca permainan, mengatur tempo, eksekusi clutch.",
                "Mengalihkan mental kompetitif itu ke dunia kerja: deadline, supervisi, problem-solving cepat."
              ]
            },
            {
              year: "Sejak 2010 — SD",
              role: "Self-taught Tinkerer",
              org: "Lab pribadi",
              points: [
                "Memulai dengan flashing Custom ROM Samsung Galaxy Young (GT-S5360).",
                "Terus mengeksplorasi: bootloader, recovery, jaringan rumah, hingga mikrokontroler.",
                "Membangun fondasi rasa ingin tahu yang masih menyalakan semua proyek hari ini."
              ]
            }
          ].map((tl, i) => (
            <div className="tl__row" key={i}>
              <div className="tl__year">{tl.year}</div>
              <div className="tl__line">
                <div className="tl__dot" />
              </div>
              <div className="tl__body">
                <div className="tl__role">{tl.role}</div>
                <div className="tl__org">{tl.org}</div>
                <ul className="tl__points">
                  {tl.points.map((p, j) => <li key={j}>{p}</li>)}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

window.About = About;
