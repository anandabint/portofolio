// Custom cursor: dot + trailing ring
function CustomCursor() {
  const dotRef = React.useRef(null);
  const ringRef = React.useRef(null);
  const targetRef = React.useRef({ x: -100, y: -100 });
  const ringRef2 = React.useRef({ x: -100, y: -100 });
  const [state, setState] = React.useState("");

  React.useEffect(() => {
    document.body.classList.add("custom-cursor-on");
    return () => document.body.classList.remove("custom-cursor-on");
  }, []);

  React.useEffect(() => {
    const onMove = (e) => {
      targetRef.current.x = e.clientX;
      targetRef.current.y = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      }
    };
    const onDown = () => setState("press");
    const onUp = () => setState((s) => (s === "press" ? "" : s));
    const onOver = (e) => {
      const t = e.target.closest("a, button, .hoverable, [data-hover]");
      if (t) setState("hover");
      else setState("");
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    window.addEventListener("mouseover", onOver);

    let raf;
    const loop = () => {
      ringRef2.current.x += (targetRef.current.x - ringRef2.current.x) * 0.18;
      ringRef2.current.y += (targetRef.current.y - ringRef2.current.y) * 0.18;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ringRef2.current.x}px, ${ringRef2.current.y}px)`;
      }
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      window.removeEventListener("mouseover", onOver);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <React.Fragment>
      <div ref={dotRef} className="cc-dot" />
      <div
        ref={ringRef}
        className={`cc-ring ${state}`}
      />
    </React.Fragment>
  );
}

window.CustomCursor = CustomCursor;
