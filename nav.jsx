// Glass navbar
function Nav({ active, onNavigate, onHomeClick }) {
  const items = ["Work", "About", "Contact"];
  return (
    <nav className="nav" data-hover>
      <button className="nav__brand" data-hover onClick={onHomeClick} style={{ background:"none", border:0, padding:0 }}>
        <span className="nav__brand-mark" />
        ABB<span style={{ opacity: 0.5 }}>.studio</span>
      </button>
      <div className="nav__items">
        {items.map((label) => (
          <button
            key={label}
            data-hover
            className={`nav__item ${active === label ? "is-active" : ""}`}
            onClick={() => onNavigate(label)}
          >
            {label}
          </button>
        ))}
      </div>
      <button
        className="nav__cta"
        data-hover
        onClick={() => onNavigate("Contact")}
      >
        Mari bicara
        <svg className="nav__cta-arrow" viewBox="0 0 14 14" fill="none">
          <path d="M3 11L11 3M11 3H5M11 3V9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
    </nav>
  );
}

window.Nav = Nav;
