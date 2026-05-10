export default function Hero() {
  return (
    <section id="hero">
      <div className="hero-bg-dots" />
      <div className="hero-ambient" />

      <div className="hero-inner">
        <div className="hero-content">
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
            Trained in <span className="hl">Reinforcement Learning</span> and Computer Vision,
            with a Master&apos;s from TU/e and a track record spanning AI research, data science,
            and software engineering across academia and industry.
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
            <div className="portrait-image-wrap">
              <img src="/cover_me.png" alt="Portrait" className="portrait-img" />
              <div className="portrait-overlay">
                <div className="portrait-name">Faizuddarain Syam</div>
                <div className="portrait-role">ML Engineer · AI Researcher</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
