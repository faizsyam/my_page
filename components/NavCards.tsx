export default function NavCards() {
    return (
      <section id="nav-cards">
        <div className="navc-bg-dots" />
        <div className="navc-ambient" />
        <div className="navc-geo-d1" />
        <div className="navc-geo-d2" />
        <div className="navc-geo-d3" />
        <div className="navc-geo-tri" />
        <div className="container">
          <div className="navc-header reveal">
            <div className="sec-label">On this page</div>
            <h2 className="navc-section-title">Where to start.</h2>
            <p className="navc-intro">A few things worth exploring — take it in any order.</p>
          </div>
          <div className="navc-grid">
            <a href="#identity" className="navc navc-1">
              <div className="navc-top">
                <div className="navc-icon">🧭</div>
                <span className="navc-num">01</span>
              </div>
              <div className="navc-title">My Story</div>
              <p className="navc-desc">Career history, academic background, and the experiences that shaped how I work.</p>
              <div className="navc-foot">
                <span className="navc-go">Background <span className="navc-arrow">↗</span></span>
              </div>
            </a>
  
            <a href="#work" className="navc navc-2">
              <div className="navc-top">
                <div className="navc-icon">⚙️</div>
                <span className="navc-num">02</span>
              </div>
              <div className="navc-title">Things I&apos;ve built</div>
              <p className="navc-desc">From production AI systems to research experiments — a look at what I&apos;ve shipped.</p>
              <div className="navc-foot">
                <span className="navc-go">Projects <span className="navc-arrow">↗</span></span>
              </div>
            </a>
  
            <a href="#thinking" className="navc navc-3">
              <div className="navc-top">
                <div className="navc-icon">✍️</div>
                <span className="navc-num">03</span>
              </div>
              <div className="navc-title">How I think</div>
              <p className="navc-desc">I write when something&apos;s worth thinking through — usually about AI, sometimes other things.</p>
              <div className="navc-foot">
                <span className="navc-go">Writings <span className="navc-arrow">↗</span></span>
              </div>
            </a>
  
            <a href="#perspectives" className="navc navc-4">
              <div className="navc-top">
                <div className="navc-icon">🔭</div>
                <span className="navc-num">04</span>
              </div>
              <div className="navc-title">Beyond the work</div>
              <p className="navc-desc">Books, ideas, and whatever else I&apos;m paying attention to right now.</p>
              <div className="navc-foot">
                <span className="navc-go">Perspectives <span className="navc-arrow">↗</span></span>
              </div>
            </a>
          </div>
        </div>
      </section>
    )
  }