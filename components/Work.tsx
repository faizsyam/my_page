export default function Work() {
  return (
    <section id="work">
      <div className="container">
        <div className="work-header reveal">
          <div>
            <div className="sec-label">02 — Work</div>
            <h2 className="work-headline">
              Things I&apos;ve built,<br />explored, and learned from.
            </h2>
          </div>
          <p className="work-sub">
            Each project starts with a question and ends with an insight — often a new question entirely.
          </p>
        </div>

        <div className="work-grid">
          <div className="proj-card feat reveal d1">
            <div className="proj-vis ratio-port pv1">
              <div className="pv-inner">
                <div className="pv-icon">🧠</div>
              </div>
            </div>
            <div className="proj-body">
              <span className="proj-tag">Reinforcement Learning</span>
              <h3 className="proj-title">Autonomous Navigation via Deep RL</h3>
              <p className="proj-desc">
                An experiment in training an agent to navigate complex, dynamic environments using
                model-free reinforcement learning. The challenge: making the policy generalize
                without overfitting to the training distribution.
              </p>
              <div className="proj-insight">
                <span className="pi-label">Insight</span>
                <span className="pi-text">
                  Reward shaping is as much an art as a science — small design choices have outsized
                  downstream effects on policy behavior.
                </span>
              </div>
            </div>
          </div>

          <div className="proj-card reveal d2">
            <div className="proj-vis ratio-land pv2">
              <div className="pv-inner">
                <div className="pv-icon">👁️</div>
              </div>
            </div>
            <div className="proj-body">
              <span className="proj-tag">Computer Vision</span>
              <h3 className="proj-title">Real-Time Object Detection Pipeline</h3>
              <p className="proj-desc">
                Built a lightweight detection system optimized for edge deployment — balancing
                inference speed, accuracy, and model size constraints in real-world conditions.
              </p>
              <div className="proj-insight">
                <span className="pi-label">Insight</span>
                <span className="pi-text">
                  Deployment constraints force creativity that pure research rarely demands.
                </span>
              </div>
            </div>
          </div>

          <div className="proj-card reveal d3">
            <div className="proj-vis ratio-land pv3">
              <div className="pv-inner">
                <div className="pv-icon">🎨</div>
              </div>
            </div>
            <div className="proj-body">
              <span className="proj-tag">AI × Creativity</span>
              <h3 className="proj-title">Exploring AI in Creative Workflows</h3>
              <p className="proj-desc">
                An ongoing exploration of how generative AI changes the way humans ideate, create,
                and make decisions — and what it means for creative agency.
              </p>
              <div className="proj-insight">
                <span className="pi-label">Insight</span>
                <span className="pi-text">
                  AI doesn&apos;t replace taste. It amplifies the gap between those who have it and
                  those who don&apos;t.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
