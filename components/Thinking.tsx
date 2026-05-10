export default function Thinking() {
  return (
    <section id="thinking">
      <div className="container">
        <div className="thinking-header reveal">
          <div>
            <div className="sec-label">03 — Thinking</div>
            <h2 className="thinking-headline">
              Ideas, reflections,<br />and open questions.
            </h2>
          </div>
          <p className="thinking-sub">
            Writing helps me think. These are pieces I return to — not finished conclusions, but
            live thinking.
          </p>
        </div>

        <div className="thinking-grid">
          <div className="idea-card feat reveal d1">
            <span className="idea-cat">AI Commentary</span>
            <div className="idea-title">
              Why Reinforcement Learning matters far beyond games — and what it reveals about
              intelligence itself
            </div>
            <div className="idea-excerpt">
              RL is often framed as a game-playing technique. But the underlying paradigm — learning
              through consequence, navigating delayed reward, balancing exploration with exploitation
              — maps cleanly onto how complex real-world systems actually behave. The deeper question
              isn&apos;t what RL can do, but what it tells us about the structure of intelligence
              when feedback loops are sparse and noisy.
            </div>
            <div className="idea-meta">
              <span>May 2025</span>
              <span className="idea-read">8 min read</span>
            </div>
          </div>

          <div className="idea-card reveal d2">
            <span className="idea-cat">Systems</span>
            <div className="idea-title">
              Thinking in systems: why most AI problems are really design problems
            </div>
            <div className="idea-excerpt">
              The bottleneck is rarely the model. It&apos;s the system around it — the feedback
              loops, the incentive structures, the edge cases we didn&apos;t name.
            </div>
            <div className="idea-meta">
              <span>Apr 2025</span>
              <span className="idea-read">5 min</span>
            </div>
          </div>

          <div className="idea-card reveal d3">
            <span className="idea-cat">Reflection</span>
            <div className="idea-title">
              What I learned building my first ML product from scratch
            </div>
            <div className="idea-excerpt">
              Research and production are different disciplines. The gap between a working model and
              a useful product is enormous, and instructive.
            </div>
            <div className="idea-meta">
              <span>Mar 2025</span>
              <span className="idea-read">6 min</span>
            </div>
          </div>

          <div className="idea-card reveal d4">
            <span className="idea-cat">Essay</span>
            <div className="idea-title">
              AI and creativity: allies or adversaries? A more honest look.
            </div>
            <div className="idea-excerpt">
              The real question isn&apos;t whether AI can be creative. It&apos;s who controls the
              definition of good — and whether that defaults to the loudest dataset.
            </div>
            <div className="idea-meta">
              <span>Feb 2025</span>
              <span className="idea-read">7 min</span>
            </div>
          </div>

          <div className="idea-card reveal d5">
            <span className="idea-cat">Observation</span>
            <div className="idea-title">
              On the quiet importance of interdisciplinary thinking in AI research
            </div>
            <div className="idea-excerpt">
              The most interesting insights I&apos;ve encountered didn&apos;t come from AI papers.
              They came from economics, biology, philosophy — fields with different assumptions.
            </div>
            <div className="idea-meta">
              <span>Jan 2025</span>
              <span className="idea-read">4 min</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
