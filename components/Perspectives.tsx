export default function Perspectives() {
  return (
    <section id="perspectives">
      <div className="container">
        <div className="persp-header reveal">
          <div className="sec-label">04 — Perspectives</div>
          <h2 className="persp-headline">
            The world beyond<br />the model.
          </h2>
        </div>

        <div className="persp-layout">
          <div className="persp-quote-block reveal">
            <div className="quote-text">
              &ldquo;The most powerful technology is the kind that disappears — becoming so natural
              that people forget it&apos;s there, and only notice its absence.&rdquo;
            </div>
            <div className="quote-attr">— Something I keep coming back to</div>
          </div>

          <div className="persp-tiles">
            <div className="ptile reveal d1">
              <div className="ptile-icon">📖</div>
              <div>
                <div className="ptile-label">Reading Now</div>
                <div className="ptile-content">Thinking, Fast and Slow</div>
                <div className="ptile-sub">Daniel Kahneman — on how we actually make decisions</div>
              </div>
            </div>
            <div className="ptile reveal d2">
              <div className="ptile-icon">💡</div>
              <div>
                <div className="ptile-label">Thinking About</div>
                <div className="ptile-content">Emergence &amp; Complexity</div>
                <div className="ptile-sub">How simple rules produce surprisingly rich behavior</div>
              </div>
            </div>
            <div className="ptile reveal d3">
              <div className="ptile-icon">🌱</div>
              <div>
                <div className="ptile-label">Inspired By</div>
                <div className="ptile-content">Nature&apos;s design patterns</div>
                <div className="ptile-sub">Evolution, networks, and systems that self-organize</div>
              </div>
            </div>
            <div className="ptile reveal d4">
              <div className="ptile-icon">🔭</div>
              <div>
                <div className="ptile-label">Exploring</div>
                <div className="ptile-content">Philosophy of mind &amp; cognition</div>
                <div className="ptile-sub">What it actually means for something to understand</div>
              </div>
            </div>
            <div className="ptile reveal d5">
              <div className="ptile-icon">🎵</div>
              <div>
                <div className="ptile-label">Lately Enjoying</div>
                <div className="ptile-content">Long-form podcasts, jazz, and quiet mornings</div>
                <div className="ptile-sub">The kind of thinking that happens when you slow down</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
