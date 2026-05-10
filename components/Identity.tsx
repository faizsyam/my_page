export default function Identity() {
  return (
    <section id="identity">
      <div className="container">
        <div className="id-header reveal">
          <div>
            <div className="sec-label">01 — Who I Am</div>
            <h2 className="id-headline">
              Background &amp;<br />experience.
            </h2>
          </div>
          <p className="id-sub">
            A track record across machine learning research, software engineering, and data
            science — built through graduate study in the Netherlands and industry roles across
            three sectors.
          </p>
        </div>

        <div className="id-layout">
          <div className="id-col">
            <div className="id-group-label">Current</div>

            <div className="id-entry current reveal d1">
              <div className="id-entry-banner id-banner-insignia">
                <div className="id-banner-orb" />
                <div className="id-banner-orb2" />
                <span className="id-banner-tag">Full-time · Active</span>
              </div>
              <div className="id-entry-top">
                <div className="id-logo-box">KMA<br />AI</div>
                <div className="id-entry-meta">
                  <span className="id-entry-tag">Machine Learning Engineer</span>
                  <div className="id-entry-title">PT Kreasi Media Asia (Insignia)</div>
                  <div className="id-entry-org">Architect agentic AI workflows · Deploy LLM-based chatbots at scale</div>
                  <div className="id-entry-period">January 2026 — Present</div>
                </div>
              </div>
            </div>

            <div className="id-group-label" style={{ marginTop: '6px' }}>Education</div>

            <div className="id-entry reveal d2">
              <div className="id-entry-banner id-banner-tue">
                <div className="id-banner-orb" />
                <div className="id-banner-orb2" />
                <span className="id-banner-tag">Graduate · Netherlands</span>
              </div>
              <div className="id-entry-top">
                <div className="id-logo-box">TU/<br />e</div>
                <div className="id-entry-meta">
                  <span className="id-entry-tag">M.Sc · Data Science in Engineering</span>
                  <div className="id-entry-title">Eindhoven University of Technology</div>
                  <div className="id-entry-org">Thesis: Applying AlphaZero in International Draughts — IPK 3.28</div>
                  <div className="id-entry-period">September 2020 — February 2023</div>
                </div>
              </div>
            </div>

            <div className="id-entry reveal d3">
              <div className="id-entry-top">
                <div className="id-logo-box">ITS</div>
                <div className="id-entry-meta">
                  <span className="id-entry-tag">S.Kom · Informatics Engineering</span>
                  <div className="id-entry-title">Institut Teknologi Sepuluh Nopember</div>
                  <div className="id-entry-org">Final Project: Dynamic Difficulty Adjustment via ANFIS — IPK 3.48</div>
                  <div className="id-entry-period">September 2013 — September 2017</div>
                </div>
              </div>
            </div>

            <div className="id-awards reveal d4">
              <div className="id-awards-icon">🏅</div>
              <div>
                <div className="id-awards-label">Honors &amp; Award</div>
                <div className="id-awards-title">Amandus H. Lundqvist Scholarship (ALSP) + Holland Scholarship</div>
                <div className="id-awards-sub">Fully funded admission for graduate studies at TU/e</div>
                <div className="id-awards-period">2020 — 2022</div>
              </div>
            </div>
          </div>

          <div className="id-col">
            <div className="id-group-label">Previous Roles</div>

            <div className="id-entry reveal d2">
              <div className="id-entry-top">
                <div className="id-logo-box">Tel<br />kom</div>
                <div className="id-entry-meta">
                  <span className="id-entry-tag">Data Scientist</span>
                  <div className="id-entry-title">PT Telkom Indonesia</div>
                  <div className="id-entry-org">LLM chatbots · RAG pipelines · 850% user growth</div>
                  <div className="id-entry-period">June 2024 — December 2025</div>
                </div>
              </div>
            </div>

            <div className="id-entry reveal d3">
              <div className="id-entry-top">
                <div className="id-logo-box">Game<br />loft</div>
                <div className="id-entry-meta">
                  <span className="id-entry-tag">C++ Programmer</span>
                  <div className="id-entry-title">PT Gameloft Indonesia</div>
                  <div className="id-entry-org">Gameplay engineering · 3D assets · AI behavior</div>
                  <div className="id-entry-period">April 2018 — April 2019</div>
                </div>
              </div>
            </div>

            <div className="id-entry reveal d4">
              <div className="id-entry-top">
                <div className="id-logo-box">Met<br />ro</div>
                <div className="id-entry-meta">
                  <span className="id-entry-tag">Back-End Developer · Internship</span>
                  <div className="id-entry-title">PT Metrodata Electronics</div>
                  <div className="id-entry-org">Internal recruitment platform · C# + ASP.NET MVC</div>
                  <div className="id-entry-period">July 2016 — September 2016</div>
                </div>
              </div>
            </div>

            <div className="id-group-label" style={{ marginTop: '6px' }}>Part-time &amp; Freelance</div>

            <div className="id-freelance-box reveal d5">
              <div className="id-freelance-icon">＋</div>
              <div className="id-freelance-inner">
                <div className="id-freelance-label">Open section</div>
                <div className="id-freelance-title">Projects &amp; collaborations</div>
                <div className="id-freelance-desc">
                  Part-time roles, freelance work, and independent projects to be added here.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}