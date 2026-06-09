import { useEffect, useRef, useState } from 'react'
import {
  ArrowRight, BarChart3, BriefcaseBusiness, Clapperboard, Instagram,
  Layers3, Linkedin, Menu, MessageSquare, Palette, Play, Rocket,
  Sparkles, Target, TrendingUp, Users, Video, X, Youtube, Zap,
} from 'lucide-react'
import heroPortrait from './assets/hero-portrait.png'
import beverageImage from './assets/work-beverage.png'
import fashionImage from './assets/work-fashion.png'
import beautyImage from './assets/work-beauty.png'
import techImage from './assets/work-tech.png'

const services = [
  { icon: MessageSquare, title: 'Social Media Management', text: 'We handle your social media, so you can focus on your business.', tone: 'purple' },
  { icon: Sparkles, title: 'Content Creation', text: 'Scroll-stopping content that connects, engages, and converts.', tone: 'blue' },
  { icon: Video, title: 'Video Production', text: 'High-quality videos that bring your brand story to life.', tone: 'cyan' },
  { icon: Target, title: 'Brand Strategy', text: 'Smart strategy that builds strong brands that stand out.', tone: 'green' },
  { icon: MegaphoneIcon, title: 'Paid Advertising', text: 'Targeted ads that reach the right people and drive real results.', tone: 'pink' },
  { icon: Palette, title: 'Graphic Design', text: 'Eye-catching designs that communicate your brand message.', tone: 'orange' },
]

function MegaphoneIcon(props) {
  return <BarChart3 {...props} />
}

const work = [
  { title: 'Fizzy Bubbles', category: 'Beverage', subtitle: 'Campaign Video', image: beverageImage },
  { title: 'Urban Steps', category: 'Fashion', subtitle: 'Reel Campaign', image: fashionImage },
  { title: 'Glow Naturally', category: 'Beauty', subtitle: 'Product Reel', image: beautyImage },
  { title: 'SoundMax', category: 'Tech', subtitle: 'Launch Campaign', image: techImage },
]

const strengths = [
  { icon: MessageSquare, title: 'Strategy First', text: 'We start with strategy, so every piece of content has a purpose and a plan.', tone: 'purple' },
  { icon: Users, title: 'Fast Creative Execution', text: 'We move fast without compromising on quality. Ideas into content, quickly.', tone: 'blue' },
  { icon: Layers3, title: 'Platform-Specific Content', text: 'We create content tailored for each platform and audience.', tone: 'green' },
  { icon: TrendingUp, title: 'Measurable Growth', text: 'We track, test, and optimize for results that actually grow your brand.', tone: 'orange' },
]

const links = ['Home', 'Services', 'Work', 'About']

function Reveal({ children, className = '', as: Tag = 'div', ...props }) {
  return <Tag className={`reveal ${className}`} {...props}>{children}</Tag>
}

function Logo() {
  return <a href="#home" className="logo" aria-label="Lourus Media home">Lourus <span>Media</span></a>
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const heroVisualRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
          observer.unobserve(entry.target)
        }
      }),
      { threshold: 0.08 },
    )
    document.querySelectorAll('.reveal, .reveal-item').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const handleHeroPointerMove = event => {
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return
    const bounds = event.currentTarget.getBoundingClientRect()
    const x = ((event.clientX - bounds.left) / bounds.width - 0.5) * 2
    const y = ((event.clientY - bounds.top) / bounds.height - 0.5) * 2
    event.currentTarget.style.setProperty('--parallax-x', `${x * 7}px`)
    event.currentTarget.style.setProperty('--parallax-y', `${y * 5}px`)
    event.currentTarget.style.setProperty('--portrait-x', `${x * 2.5}px`)
    event.currentTarget.style.setProperty('--portrait-y', `${y * 1.8}px`)
    event.currentTarget.style.setProperty('--orbit-x', `${x * -2}px`)
    event.currentTarget.style.setProperty('--orbit-y', `${y * -1.5}px`)
  }

  const resetHeroParallax = event => {
    event.currentTarget.style.setProperty('--parallax-x', '0px')
    event.currentTarget.style.setProperty('--parallax-y', '0px')
    event.currentTarget.style.setProperty('--portrait-x', '0px')
    event.currentTarget.style.setProperty('--portrait-y', '0px')
    event.currentTarget.style.setProperty('--orbit-x', '0px')
    event.currentTarget.style.setProperty('--orbit-y', '0px')
  }

  return (
    <>
      <header className="nav-wrap">
        <nav className="navbar">
          <Logo />
          <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
            {links.map(item => <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMenuOpen(false)}>{item}</a>)}
          </div>
          <div className="nav-actions">
            <a href="#contact" className="button button-small">Let's Talk</a>
            <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">
              {menuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </nav>
      </header>

      <main>
        <section className="hero section" id="home">
          <div className="hero-copy hero-enter">
            <div className="eyebrow"><i /> Creative Social Media Agency</div>
            <h1>We turn brands into digital experiences <span>people remember.</span></h1>
            <p className="hero-text">We help ambitious brands grow with smart strategy, scroll-stopping content, and data-driven social media campaigns that deliver real results.</p>
            <div className="hero-actions">
              <a className="button" href="#contact">Start a Project <ArrowRight size={16} /></a>
              <a className="button button-ghost" href="#work">View Our Work <Play size={14} fill="currentColor" /></a>
            </div>
            <div className="stats">
              {[
                [BriefcaseBusiness, '50+', 'Projects', 'purple'],
                [Users, '20+', 'Brands', 'blue'],
                [TrendingUp, '1M+', 'Reach', 'green'],
                [Sparkles, '8+', 'Markets', 'orange'],
              ].map(([Icon, num, label, tone]) => (
                <div className="stat" key={label}><span className={`stat-icon ${tone}`}><Icon size={18} /></span><div><strong>{num}</strong><small>{label}</small></div></div>
              ))}
            </div>
          </div>

          <div
            className="hero-visual hero-enter"
            ref={heroVisualRef}
            onPointerMove={handleHeroPointerMove}
            onPointerLeave={resetHeroParallax}
          >
            <div className="hero-glow" />
            <div className="decorative-dots" aria-hidden="true"><i /><i /><i /><i /></div>
            <svg className="orbit-layer orbit-back" viewBox="0 0 560 460" aria-hidden="true">
              <g className="ring-group ring-blue">
                <ellipse cx="280" cy="230" rx="252" ry="112" transform="rotate(-25 280 230)" />
                <circle className="orbit-dot dot-blue" cx="55" cy="147" r="6" />
              </g>
              <g className="ring-group ring-purple">
                <ellipse cx="280" cy="230" rx="245" ry="142" transform="rotate(-7 280 230)" />
                <circle className="orbit-dot dot-purple" cx="405" cy="101" r="6" />
              </g>
              <g className="ring-group ring-pink">
                <ellipse cx="280" cy="230" rx="248" ry="116" transform="rotate(19 280 230)" />
                <circle className="orbit-dot dot-pink" cx="506" cy="305" r="6" />
              </g>
            </svg>
            <div className="portrait-card"><img src={heroPortrait} alt="Placeholder portrait for Lourus Media" /></div>
            <svg className="orbit-layer orbit-front" viewBox="0 0 560 460" aria-hidden="true">
              <g className="ring-group ring-blue front-ring">
                <ellipse cx="280" cy="230" rx="252" ry="112" transform="rotate(-25 280 230)" />
              </g>
              <g className="ring-group ring-purple front-ring front-purple">
                <ellipse cx="280" cy="230" rx="245" ry="142" transform="rotate(-7 280 230)" />
              </g>
              <g className="ring-group ring-pink front-ring front-pink">
                <ellipse cx="280" cy="230" rx="248" ry="116" transform="rotate(19 280 230)" />
              </g>
            </svg>
            <div className="float-card card-engagement"><span className="float-symbol green"><TrendingUp size={18} /></span><div><strong>+142%</strong><small>Engagement</small></div></div>
            <div className="float-card card-strategy"><span className="float-symbol purple"><Sparkles size={17} /></span><div><strong>Creative</strong><small>Strategy</small></div></div>
            <div className="float-card card-views"><span className="float-symbol pink"><Play size={16} fill="currentColor" /></span><div><strong>1M+</strong><small>Views</small></div></div>
          </div>
        </section>

        <Reveal className="content-shell section" as="section">
          <div className="inner-section" id="services">
            <div className="section-heading">
              <div><span className="kicker">Services</span><h2>Everything your brand needs to stand out.</h2></div>
              <a href="#services" className="text-link">View All Services <ArrowRight size={14} /></a>
            </div>
            <div className="service-grid">
              {services.map(({ icon: Icon, title, text, tone }, index) => (
                <article className="service-card reveal-item" style={{ '--stagger': `${index * 55}ms` }} key={title}>
                  <span className={`service-icon ${tone}`}><Icon size={21} /></span>
                  <h3>{title}</h3><p>{text}</p><ArrowRight className="service-arrow" size={15} />
                </article>
              ))}
            </div>
          </div>

          <div className="inner-section" id="work">
            <div className="section-heading">
              <div><span className="kicker">Selected Work</span><h2>Work that stops the scroll.</h2></div>
              <a href="#work" className="text-link">View All Work <ArrowRight size={14} /></a>
            </div>
            <div className="work-grid">
              {work.map((item, index) => (
                <article className="work-card reveal-item" style={{ '--stagger': `${index * 65}ms` }} key={item.title}>
                  <img src={item.image} alt={`${item.category} campaign placeholder`} />
                  <div className="work-overlay">
                    <button className="play-button" aria-label={`Play ${item.title}`}><Play size={15} fill="currentColor" /></button>
                    <div><span>{item.category}</span><h3>{item.title}</h3><p>{item.subtitle}</p></div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="inner-section logo-section">
            <span className="kicker">Trusted by ambitious brands</span>
            <div className="logo-row">{['RiseUp', 'Boldify', 'Nexora', 'Lumina', 'Velocity', 'Bloomly'].map((name, i) => <span key={name} className={`brand-${i}`}>{name}</span>)}</div>
          </div>

          <div className="inner-section" id="about">
            <span className="kicker">Why choose us</span>
            <div className="why-grid">
              <div className="strength-grid">
                {strengths.map(({ icon: Icon, title, text, tone }, index) => (
                  <article className="strength-card reveal-item" style={{ '--stagger': `${index * 55}ms` }} key={title}><span className={`strength-icon ${tone}`}><Icon size={20} /></span><div><h3>{title}</h3><p>{text}</p></div></article>
                ))}
              </div>
              <article className="impact-card">
                <span className="impact-icon"><BarChart3 size={29} /></span>
                <div><h2>We don't just create content, we create impact.</h2><p>Data-driven strategies, creative content, and consistent execution that grows your brand every day.</p><a className="button button-light" href="#contact">Let's Work Together <ArrowRight size={15} /></a></div>
              </article>
            </div>
          </div>

          <div className="final-cta" id="contact">
            <i className="confetti c1" /><i className="confetti c2" /><i className="confetti c3" /><i className="confetti c4" />
            <span className="rocket-chip"><Rocket size={31} /></span>
            <div><h2>Ready to make your brand<br />impossible to ignore?</h2><p>Let's create something amazing together.</p></div>
            <a className="button" href="mailto:hello@lourusmedia.example">Let's Work Together <ArrowRight size={15} /></a>
          </div>

          <footer>
            <div><Logo /><p>© 2026 Lourus Media. All rights reserved.</p></div>
            <div className="footer-column"><b>Company</b>{links.map(x => <a key={x} href={`#${x.toLowerCase()}`}>{x}</a>)}</div>
            <div className="footer-column"><b>Resources</b>{['Blog', 'Case Studies', 'FAQs', 'Privacy Policy'].map(x => <a key={x} href="#home">{x}</a>)}</div>
            <div className="follow"><b>Follow Us</b><div className="socials"><a href="#home" aria-label="Instagram"><Instagram /></a><a href="#home" aria-label="LinkedIn"><Linkedin /></a><a href="#home" aria-label="TikTok"><Clapperboard /></a><a href="#home" aria-label="YouTube"><Youtube /></a></div></div>
          </footer>
        </Reveal>
      </main>
    </>
  )
}

export default App
