// Pure server component — renders into SSR HTML so the loader
// is visible from the very first byte, before any JS runs.
// The tiny inline <script> at the bottom handles the fade-out
// once the window "load" event fires.

export default function PageLoader() {
  const css = `
    #pl-overlay {
      position: fixed;
      inset: 0;
      z-index: 99999;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 32px;
      background: #ffffff;
      opacity: 1;
      transition: opacity 0.5s ease;
      overflow: hidden;
      pointer-events: all;
    }

    #pl-overlay.pl-out {
      opacity: 0;
      pointer-events: none;
    }

    /* ── decorative paper-fibre lines ── */
    #pl-fibres {
      position: absolute;
      inset: 0;
      pointer-events: none;
    }

    .pl-fibre {
      position: absolute;
      top: 0;
      bottom: 0;
      width: 1px;
      background: linear-gradient(
        to bottom,
        transparent 0%,
        rgba(1, 117, 116, 0.08) 30%,
        rgba(1, 117, 116, 0.14) 50%,
        rgba(1, 117, 116, 0.08) 70%,
        transparent 100%
      );
      animation: plFibreDrift 3.5s ease-in-out infinite alternate;
    }

    @keyframes plFibreDrift {
      from { transform: scaleY(0.88) translateY(-5px); opacity: 0.4; }
      to   { transform: scaleY(1.06) translateY(5px);  opacity: 1;   }
    }

    /* ── brand block ── */
    #pl-brand {
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 20px;
      animation: plRise 0.65s cubic-bezier(0.22, 1, 0.36, 1) both;
    }

    @keyframes plRise {
      from { opacity: 0; transform: translateY(18px); }
      to   { opacity: 1; transform: translateY(0);    }
    }

    #pl-logo-wrap {
      width: 120px;
      height: 120px;
      border-radius: 50%;
      background: transparent;
      border: none;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0;
      box-sizing: border-box;
      animation: plPulse 2.2s ease-in-out infinite;
    }

    @keyframes plPulse {
      0%, 100% { box-shadow: 0 0 0 0   rgba(1, 117, 116, 0.15); }
      50%       { box-shadow: 0 0 0 10px rgba(1, 117, 116, 0);   }
    }

    #pl-logo {
      width: 100%;
      height: 100%;
      object-fit: contain;
      display: block;
    }

    #pl-wordmark {
      font-family: "Playfair Display", "Playfair", Georgia, serif;
      font-size: 17px;
      font-weight: 600;
      letter-spacing: 0.05em;
      color: #004342;
      margin: 0;
      white-space: nowrap;
    }

    #pl-tagline {
      font-family: -apple-system, "Segoe UI", sans-serif;
      font-size: 11px;
      font-weight: 500;
      letter-spacing: 0.14em;
      text-transform: uppercase;
      color: rgba(1, 117, 116, 0.65);
      margin: -12px 0 0;
      white-space: nowrap;
    }

    /* ── progress bar ── */
    #pl-bar-wrap {
      width: 150px;
      height: 2px;
      background: rgba(1, 117, 116, 0.15);
      border-radius: 999px;
      overflow: hidden;
    }

    #pl-bar {
      height: 100%;
      width: 0%;
      background: linear-gradient(90deg, #017574, #02c4c2);
      border-radius: 999px;
      animation: plFill 1s cubic-bezier(0.4, 0, 0.2, 1) 0.05s forwards;
    }

    @keyframes plFill {
      from { width: 0%; }
      to   { width: 100%; }
    }

    /* ── loading dots ── */
    #pl-dots {
      display: flex;
      gap: 6px;
    }

    .pl-dot {
      width: 5px;
      height: 5px;
      border-radius: 50%;
      background: rgba(1, 117, 116, 0.35);
      animation: plDotBounce 1.2s ease-in-out infinite;
    }

    .pl-dot:nth-child(2) { animation-delay: 0.2s; }
    .pl-dot:nth-child(3) { animation-delay: 0.4s; }

    @keyframes plDotBounce {
      0%, 80%, 100% { transform: scale(1);   opacity: 0.35; }
      40%           { transform: scale(1.5); opacity: 1;    }
    }

    @media (max-width: 480px) {
      #pl-logo-wrap { width: 96px; height: 96px; }
      #pl-wordmark  { font-size: 14px; }
      #pl-bar-wrap  { width: 110px; }
    }
  `;

  // 18 fibre lines spread evenly
  const fibres = Array.from({ length: 18 }, (_, i) => ({
    left: `${(i / 17) * 100}%`,
    delay: `${(i * 0.18).toFixed(2)}s`,
  }));

  // Inline script: fade out on window load (no React needed)
  const script = `
    (function() {
      function dismiss() {
        var el = document.getElementById('pl-overlay');
        if (!el) return;
        el.classList.add('pl-out');
        setTimeout(function() {
          if (el && el.parentNode) el.parentNode.removeChild(el);
        }, 520);
      }
      if (document.readyState === 'complete') {
        setTimeout(dismiss, 200);
      } else {
        window.addEventListener('load', function() {
          setTimeout(dismiss, 200);
        });
      }
    })();
  `;

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css }} />

      <div id="pl-overlay">
        {/* Paper fibre texture */}
        <div id="pl-fibres" aria-hidden="true">
          {fibres.map((f, i) => (
            <span
              key={i}
              className="pl-fibre"
              style={{ left: f.left, animationDelay: f.delay }}
            />
          ))}
        </div>

        {/* Brand */}
        <div id="pl-brand">
          <div id="pl-logo-wrap">
            <img
              id="pl-logo"
              src="/images/logo/logo2.png"
              alt="Century Overseas Papers"
            />
          </div>
          <p id="pl-wordmark">Century Overseas Papers</p>
          {/* <p id="pl-tagline">Handmade · Sustainable · Since 1990</p> */}
        </div>

        {/* Progress bar */}
        <div id="pl-bar-wrap" aria-hidden="true">
          <div id="pl-bar" />
        </div>

        {/* Bouncing dots */}
        {/* <div id="pl-dots" aria-hidden="true">
          <span className="pl-dot" />
          <span className="pl-dot" />
          <span className="pl-dot" />
        </div> */}
      </div>

      {/* Runs immediately — no hydration wait */}
      <script dangerouslySetInnerHTML={{ __html: script }} />
    </>
  );
}
