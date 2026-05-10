export default function Hero() {
  return (
    <section id="hero">
      <div className="hero-bg-dots" />
      <div className="hero-ambient" />

      <div style={{ display: 'contents' }}>
        <div className="hero-content" style={{ paddingLeft: '52px' }}>
          <div className="hero-pill">
            <span className="hero-pill-dot" />
            AI <span className="hero-pill-dividers">·</span> Systems{' '}
            <span className="hero-pill-dividers">·</span> Creativity{' '}
            <span className="hero-pill-dividers">·</span> Impact
          </div>
          <div className="hero-greeting">
            Hi, I&apos;m Faiz <span>👋</span>
          </div>
          <h1 className="hero-headline">
            I build intelligent systems<br />
            and explore ideas at the<br />
            intersection of <span className="ha">AI, creativity</span>,<br />
            and <span className="hb">real-world impact.</span>
          </h1>
          <div className="hero-bar" />
          <p className="hero-body">
            My expertise lies in <span className="hl">Reinforcement Learning</span> and Computer
            Vision, but my curiosity goes far beyond algorithms. I care about building things that
            matter, understanding how they shape us, and creating technology that empowers people.
          </p>
          <p className="hero-body">
            I&apos;m not your typical AI engineer. I blend technical depth with creative thinking,
            broad insights, and a human-first approach. Let&apos;s build, learn, and create
            something meaningful together. 😊
          </p>
          <div className="hero-ctas">
            <a href="#connect" className="btn btn-primary">
              Let&apos;s Connect <span>↗</span>
            </a>
            <a href="#work" className="btn-ghost">
              <span>Explore My Work</span>
              <span className="bounce">↓</span>
            </a>
          </div>
        </div>

        <div className="hero-portrait-wrap">
          <div className="portrait-circle-1" />
          <div className="portrait-circle-2" />
          <div className="portrait-glow-base" />

          <div className="skill-card sc1">
            <span className="skill-icon">🧠</span>
            <span className="skill-label">
              Intelligent<br />Systems
            </span>
          </div>
          <div className="skill-card sc2">
            <span className="skill-icon">👁️</span>
            <span className="skill-label">
              Computer<br />Vision
            </span>
          </div>
          <div className="skill-card sc3">
            <span className="skill-icon">🔁</span>
            <span className="skill-label">
              Reinforcement<br />Learning
            </span>
          </div>

          <div className="geo-dot gd1" />
          <div className="geo-dot gd2" />
          <div className="geo-dot gd3" />
          <div className="geo-tri" />

          <div className="portrait-wrap">
            <div className="portrait-svg-wrap">
              <svg viewBox="0 0 280 420" xmlns="http://www.w3.org/2000/svg" className="portrait-svg">
                <defs>
                  <linearGradient id="bodyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{ stopColor: '#B8CDE8' }} />
                    <stop offset="100%" style={{ stopColor: '#7AA0CC' }} />
                  </linearGradient>
                  <linearGradient id="headGrad" x1="20%" y1="0%" x2="80%" y2="100%">
                    <stop offset="0%" style={{ stopColor: '#C8D8EE' }} />
                    <stop offset="100%" style={{ stopColor: '#8AAED4' }} />
                  </linearGradient>
                  <linearGradient id="shirtGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{ stopColor: '#A8C0DC' }} />
                    <stop offset="100%" style={{ stopColor: '#6890BC' }} />
                  </linearGradient>
                  <linearGradient id="hairGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{ stopColor: '#7890B0' }} />
                    <stop offset="100%" style={{ stopColor: '#506880' }} />
                  </linearGradient>
                  <filter id="softBlur">
                    <feGaussianBlur stdDeviation="1.5" />
                  </filter>
                  <radialGradient id="ambGlow" cx="50%" cy="80%" r="60%">
                    <stop offset="0%" style={{ stopColor: '#B0C8E4', stopOpacity: 0.4 }} />
                    <stop offset="100%" style={{ stopColor: '#B0C8E4', stopOpacity: 0 }} />
                  </radialGradient>
                </defs>
                <ellipse cx="140" cy="400" rx="130" ry="28" fill="url(#ambGlow)" />
                <path d="M 30 420 Q 20 320 40 280 Q 60 240 140 230 Q 220 240 240 280 Q 260 320 250 420 Z" fill="url(#shirtGrad)" opacity=".95" />
                <path d="M 78 290 Q 72 310 68 340 Q 64 370 62 420 L 30 420 Q 22 360 32 300 Z" fill="url(#bodyGrad)" opacity=".7" />
                <path d="M 202 290 Q 208 310 212 340 Q 216 370 218 420 L 250 420 Q 258 360 248 300 Z" fill="url(#bodyGrad)" opacity=".7" />
                <ellipse cx="140" cy="185" rx="52" ry="60" fill="url(#headGrad)" />
                <path d="M 90 165 Q 92 135 108 122 Q 122 110 140 108 Q 158 110 168 118 Q 182 128 188 148 Q 192 162 190 172 Q 178 158 168 152 Q 158 148 148 148 Q 135 148 118 155 Q 104 162 90 165 Z" fill="url(#hairGrad)" />
                <path d="M 92 168 Q 88 160 90 150 Q 92 143 96 140" fill="none" stroke="#8090A8" strokeWidth="1.5" opacity=".5" />
                <path d="M 188 168 Q 192 160 190 150 Q 188 143 184 140" fill="none" stroke="#8090A8" strokeWidth="1.5" opacity=".5" />
                <ellipse cx="123" cy="192" rx="7" ry="4.5" fill="rgba(90,110,140,.22)" />
                <ellipse cx="157" cy="192" rx="7" ry="4.5" fill="rgba(90,110,140,.22)" />
                <ellipse cx="123" cy="190" rx="5" ry="3.5" fill="rgba(60,80,120,.35)" />
                <ellipse cx="157" cy="190" rx="5" ry="3.5" fill="rgba(60,80,120,.35)" />
                <path d="M 130 208 Q 140 214 150 208" fill="none" stroke="rgba(90,110,140,.45)" strokeWidth="1.8" strokeLinecap="round" />
                <path d="M 115 186 Q 118 183 125 184" fill="none" stroke="rgba(70,90,120,.4)" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M 155 184 Q 162 183 165 186" fill="none" stroke="rgba(70,90,120,.4)" strokeWidth="1.5" strokeLinecap="round" />
                <ellipse cx="140" cy="240" rx="30" ry="12" fill="url(#shirtGrad)" opacity=".6" />
                <path d="M 110 250 Q 115 255 140 258 Q 165 255 170 250" fill="none" stroke="rgba(80,100,140,.25)" strokeWidth="1.5" />
              </svg>
            </div>
            <span className="portrait-caption">PNG Portrait Placeholder</span>
          </div>
        </div>
      </div>
    </section>
  )
}
