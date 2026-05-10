export default function Identity() {
  return (
    <section id="identity">
      <div className="container">
        <div className="id-header reveal">
          <div>
            <div className="sec-label">01 — Who I Am</div>
            <h2 className="id-headline">
              A mind that moves<br />between disciplines.
            </h2>
          </div>
          <p className="id-sub">
            I don&apos;t fit neatly into one category. I think across systems, build across domains,
            and approach technology with both analytical rigor and creative curiosity.
          </p>
        </div>

        <div className="id-cards">
          <div className="id-card reveal d1">
            <div className="id-card-img ic-img-1" />
            <div className="id-card-icon">🤖</div>
            <span className="id-card-tag">Expertise</span>
            <div className="id-card-title">AI Engineer</div>
            <p className="id-card-desc">
              Designing and training models that learn, adapt, and solve real-world problems through data.
            </p>
          </div>
          <div className="id-card reveal d2">
            <div className="id-card-img ic-img-2" />
            <div className="id-card-icon">🧭</div>
            <span className="id-card-tag">Mindset</span>
            <div className="id-card-title">Explorer</div>
            <p className="id-card-desc">
              Always curious. I study, question, and connect ideas across disciplines and domains.
            </p>
          </div>
          <div className="id-card reveal d3">
            <div className="id-card-img ic-img-3" />
            <div className="id-card-icon">🔨</div>
            <span className="id-card-tag">Approach</span>
            <div className="id-card-title">Builder</div>
            <p className="id-card-desc">
              From research to products, I enjoy turning ideas into impactful, tangible solutions.
            </p>
          </div>
          <div className="id-card reveal d4">
            <div className="id-card-img ic-img-4" />
            <div className="id-card-icon">✏️</div>
            <span className="id-card-tag">Perspective</span>
            <div className="id-card-title">Thinker</div>
            <p className="id-card-desc">
              I write, reflect, and share thoughts on AI, society, systems, and the shape of the future.
            </p>
          </div>
          <div className="id-card reveal d5">
            <div className="id-card-img ic-img-5" />
            <div className="id-card-icon">🤝</div>
            <span className="id-card-tag">Nature</span>
            <div className="id-card-title">Collaborator</div>
            <p className="id-card-desc">
              I love meaningful conversations and building alongside people with diverse perspectives.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
