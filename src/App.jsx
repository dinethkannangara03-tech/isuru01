import { useEffect, useState } from 'react'
import {
  ArrowRight, BarChart3, Clapperboard, Compass, Instagram, Layers3,
  Linkedin, Menu, Megaphone, Palette, Play, Rocket, Sparkles, Target,
  TrendingUp, Video, X, Youtube, Zap
} from 'lucide-react'

const services = [
  { icon: Megaphone, title: 'Social Media Management', text: 'Always-on social that keeps your audience close.', tone: 'purple' },
  { icon: Sparkles, title: 'Content Creation', text: 'Original ideas made to earn attention and action.', tone: 'blue' },
  { icon: Video, title: 'Video Production', text: 'From first frame to final cut, built for the feed.', tone: 'pink' },
  { icon: Compass, title: 'Brand Strategy', text: 'Clear positioning that gives every post purpose.', tone: 'orange' },
  { icon: Target, title: 'Paid Advertising', text: 'Smart campaigns focused on measurable growth.', tone: 'green' },
  { icon: Palette, title: 'Graphic Design', text: 'Distinct visuals that make your brand recognizable.', tone: 'cyan' },
]

const work = [
  { title: 'Fizz in Full Colour', category: 'Beverage Campaign', subtitle: 'A summer launch built to sparkle.', cls: 'work-one' },
  { title: 'Own the Moment', category: 'Fashion Reel Campaign', subtitle: 'Movement, mood and modern style.', cls: 'work-two' },
  { title: 'Glow, Naturally', category: 'Beauty Product Reel', subtitle: 'A softer story for brighter skin.', cls: 'work-three' },
  { title: 'Tomorrow, Unboxed', category: 'Tech Launch Campaign', subtitle: 'Turning a launch into an event.', cls: 'work-four' },
]

const strengths = [
  { icon: Compass, title: 'Strategy First', text: 'Every creative choice starts with a clear reason.' },
  { icon: Zap, title: 'Fast Creative Execution', text: 'Speed, without ever compromising the craft.' },
  { icon: Layers3, title: 'Platform-Specific Content', text: 'Native ideas made for where they will live.' },
  { icon: BarChart3, title: 'Measurable Growth', text: 'Creative you can feel, results you can prove.' },
]

function Reveal({ children, className = '' }) {
  return <div className={`reveal ${className}`}>{children}</div>
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(entry => entry.isIntersecting && entry.target.classList.add('visible')),
      { threshold: 0.12 },
    )
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <header className="nav-wrap">
        <nav className="navbar">
          <a href="#home" className="logo" aria-label="Lourus Media home"><span>L</span>Lourus Media</a>
          <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
            {['Home', 'Services', 'Work', 'About'].map(item => (
              <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMenuOpen(false)}>{item}</a>
            ))}
            <a href="#contact" className="button button-small">Let's Talk <ArrowRight size={16} /></a>
          </div>
          <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">
            {menuOpen ? <X /> : <Menu />}
          </button>
        </nav>
      </header>

      <main>
        <section className="hero section" id="home">
          <div className="hero-copy hero-enter">
            <div className="eyebrow"><Sparkles size={15} /> Creative Social Media Agency</div>
            <h1>We turn brands into digital experiences <span>people remember.</span></h1>
            <p className="hero-text">Strategy, content and campaigns designed to make ambitious brands impossible to scroll past.</p>
            <div className="hero-actions">
              <a className="button" href="#contact">Start a Project <ArrowRight size={18} /></a>
              <a className="button button-ghost" href="#work">View Our Work <Play size={17} fill="currentColor" /></a>
            </div>
            <div className="stats">
              {[['50+', 'Projects'], ['20+', 'Brands'], ['1M+', 'Reach'], ['8+', 'Markets']].map(([num, label]) => (
                <div className="stat" key={label}><strong>{num}</strong><span>{label}</span></div>
              ))}
            </div>
          </div>

          <div className="hero-visual hero-enter">
            <div className="orbit orbit-one"><i /><i /></div>
            <div className="orbit orbit-two"><i /></div>
            <div className="portrait-card">
              <div className="portrait-art">
                <div className="portrait-sun" />
                <div className="portrait-person">
                  <div className="hair" /><div className="head" /><div className="body" />
                </div>
                <div className="portrait-label">PLACEHOLDER PORTRAIT</div>
              </div>
            </div>
            <div className="float-card card-engagement"><span className="icon-chip pink"><TrendingUp size={17} /></span><div><strong>+142%</strong><small>Engagement</small></div></div>
            <div className="float-card card-strategy"><span className="icon-chip purple"><Sparkles size={17} /></span><div><strong>Creative</strong><small>Strategy</small></div></div>
            <div className="float-card card-views"><span className="icon-chip blue"><Play size={17} fill="currentColor" /></span><div><strong>1M+</strong><small>Views</small></div></div>
          </div>
        </section>

        <Reveal className="services-shell section" >
          <div className="section-heading" id="services">
            <div><span className="kicker">What we do</span><h2>Everything your brand needs <span>to stand out.</span></h2></div>
            <p>One creative partner for the strategy, content and momentum your brand deserves.</p>
          </div>
          <div className="service-grid">
            {services.map(({ icon: Icon, title, text, tone }) => (
              <article className="service-card" key={title}>
                <span className={`service-icon ${tone}`}><Icon size={23} /></span>
                <h3>{title}</h3><p>{text}</p>
                <span className="round-arrow"><ArrowRight size={16} /></span>
              </article>
            ))}
          </div>
        </Reveal>

        <section className="section work-section" id="work">
          <Reveal className="section-heading work-heading">
            <div><span className="kicker">Selected work</span><h2>Work that stops <span>the scroll.</span></h2></div>
            <a href="#work" className="text-link">Explore all work <ArrowRight size={17} /></a>
          </Reveal>
          <Reveal className="work-grid">
            {work.map(item => (
              <article className="work-card" key={item.title}>
                <div className={`work-image ${item.cls}`}>
                  <span className="work-shape" /><span className="work-object" />
                  <button className="play-button" aria-label={`Play ${item.title}`}><Play size={19} fill="currentColor" /></button>
                </div>
                <div className="work-info"><span>{item.category}</span><h3>{item.title}</h3><p>{item.subtitle}</p></div>
              </article>
            ))}
          </Reveal>
        </section>

        <Reveal className="logo-section section">
          <p>Trusted by ambitious brands</p>
          <div className="logo-row">{['RiseUp', 'Boldify', 'Nexora', 'Lumina', 'Velocity', 'Bloomly'].map((name, i) => <span key={name} className={`brand-${i}`}>{name}</span>)}</div>
        </Reveal>

        <section className="section why-section" id="about">
          <Reveal className="section-heading centered">
            <div><span className="kicker">Why Lourus</span><h2>Built for brands <span>going places.</span></h2></div>
            <p>Small enough to care deeply. Experienced enough to move the needle.</p>
          </Reveal>
          <Reveal className="why-grid">
            <div className="strength-grid">
              {strengths.map(({ icon: Icon, title, text }, index) => (
                <article className="strength-card" key={title}><span>{`0${index + 1}`}</span><Icon size={22} /><h3>{title}</h3><p>{text}</p></article>
              ))}
            </div>
            <article className="impact-card">
              <div className="impact-orb" />
              <span className="impact-icon"><Rocket size={28} /></span>
              <h2>We don't just create content, <em>we create impact.</em></h2>
              <p>Ideas with energy. Strategy with focus. Work that gets remembered.</p>
              <a className="button button-light" href="#contact">Let's Work Together <ArrowRight size={18} /></a>
            </article>
          </Reveal>
        </section>

        <Reveal className="final-cta section" id="contact">
          <div>
            <span className="rocket-chip"><Rocket size={25} /></span>
            <h2>Ready to make your brand <span>impossible to ignore?</span></h2>
          </div>
          <a className="button" href="mailto:hello@lourusmedia.example">Let's Work Together <ArrowRight size={18} /></a>
        </Reveal>
      </main>

      <footer>
        <div className="footer-main">
          <div><a href="#home" className="logo logo-footer"><span>L</span>Lourus Media</a><p>Creating social worth remembering.</p></div>
          <div className="footer-links"><div>{['Home', 'Services', 'Work', 'About'].map(x => <a key={x} href={`#${x.toLowerCase()}`}>{x}</a>)}</div><div>{['Blog', 'Case Studies', 'FAQs', 'Privacy Policy'].map(x => <a key={x} href="#home">{x}</a>)}</div></div>
          <div className="socials"><a href="#home" aria-label="Instagram"><Instagram /></a><a href="#home" aria-label="LinkedIn"><Linkedin /></a><a href="#home" aria-label="TikTok"><Clapperboard /></a><a href="#home" aria-label="YouTube"><Youtube /></a></div>
        </div>
        <div className="copyright">© 2026 Lourus Media. All rights reserved. <span>Homepage preview with placeholder content.</span></div>
      </footer>
    </>
  )
}

export default App
