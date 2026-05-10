export default function Work() {
  return (
    <section id="work">
      <div className="container">
        <div className="work-header reveal">
          <div>
            <div className="sec-label">02 — Work</div>
            <h2 className="work-headline">
              Things I&apos;ve built,<br />explored, and shipped.
            </h2>
          </div>
          <p className="work-sub">
            From production AI systems to academic research — each project starts with a problem worth solving.
          </p>
        </div>

        <div className="work-grid">
          <div className="proj-card reveal d1">
            <div className="proj-vis ratio-land pv1">
              <div className="pv-inner"><div className="pv-icon">🤖</div></div>
            </div>
            <div className="proj-body">
              <span className="proj-tag">Agentic AI · Full-Stack</span>
              <h3 className="proj-title">CIAMIC — Enterprise LLM Chatbot &amp; WhatsApp AI Agent</h3>
              <p className="proj-desc">
                Built an omnichannel AI agent at PT Telkom Indonesia — combining RAG pipelines, React.js + Laravel, and PostgreSQL + MongoDB into a production system used by nationwide organizations.
              </p>
              <div className="proj-insight">
                <span className="pi-label">Impact</span>
                <span className="pi-text">850% increase in user growth across 4+ major use cases, 4/5 satisfaction rating.</span>
              </div>
            </div>
          </div>

          <div className="proj-card reveal d2">
            <div className="proj-vis ratio-land pv2">
              <div className="pv-inner"><div className="pv-icon">♟️</div></div>
            </div>
            <div className="proj-body">
              <span className="proj-tag">Reinforcement Learning · Research</span>
              <h3 className="proj-title">Applying AlphaZero to International Draughts</h3>
              <p className="proj-desc">
                Master&apos;s thesis at TU/e. Adapted AlphaZero with PyTorch, trained on 7M+ self-play games via SLURM/HPC. Proposed a novel product-based loss function demonstrating superior stability.
              </p>
              <div className="proj-insight">
                <span className="pi-label">Result</span>
                <span className="pi-text">Defeated 7–8 ply minimax opponents with only 500 MCTS simulations.</span>
              </div>
              <a href="https://research.tue.nl/en/studentTheses/applying-alphazero-to-the-game-of-international-draughts" className="proj-link" target="_blank" rel="noopener noreferrer">
                View thesis ↗
              </a>
            </div>
          </div>

          <div className="proj-card reveal d3">
            <div className="proj-vis ratio-land pv3">
              <div className="pv-inner"><div className="pv-icon">🕸️</div></div>
            </div>
            <div className="proj-body">
              <span className="proj-tag">Data Analytics · NLP</span>
              <h3 className="proj-title">VASDAT — Visual Analytics Suspicious Data Analysis Tool</h3>
              <p className="proj-desc">
                A Streamlit investigation tool using NetworkX graph analytics and SpaCy NER to extract persons, locations, and organizations from unstructured text and visualize entity relationships.
              </p>
              <div className="proj-insight">
                <span className="pi-label">Approach</span>
                <span className="pi-text">Integrated news, email, and report datasets for multi-perspective criminal link analysis.</span>
              </div>
            </div>
          </div>

          <div className="proj-card reveal d4">
            <div className="proj-vis ratio-land pv4">
              <div className="pv-inner"><div className="pv-icon">🖼️</div></div>
            </div>
            <div className="proj-body">
              <span className="proj-tag">Computer Vision · Deep Learning</span>
              <h3 className="proj-title">Image Inpainting on Celebrity Face Dataset</h3>
              <p className="proj-desc">
                Developed and compared four U-Net based CNNs for image reconstruction across CelebA, Flickr, and Cityscapes. Evaluated 3-channel vs. 4-channel inputs and MSE vs. combined MSE+SSIM loss.
              </p>
              <div className="proj-insight">
                <span className="pi-label">Metrics</span>
                <span className="pi-text">SSIM 0.9770 · PSNR 32.69 on masked regions using 4-channel input + combined loss.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}