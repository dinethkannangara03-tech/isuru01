import { useEffect, useState } from 'react'
import {
  ArrowRight, Camera, Check, CirclePlay, Clapperboard, Instagram, Linkedin,
  Menu, MessageCircle, MonitorPlay, Palette, Play, Quote, Sparkles, Video,
  WandSparkles, X, Youtube,
} from 'lucide-react'
import founderPortrait from './assets/founder-portrait.png'

// EDITABLE CLIENT CONFIG: replace these placeholder values when supplied.
const whatsappNumber = 'REPLACE_WITH_CLIENT_WHATSAPP_NUMBER'
const whatsappUrl = `https://wa.me/${whatsappNumber}`
const email = 'REPLACE_WITH_CLIENT_EMAIL'

const services = [
  { icon: Clapperboard, title: 'Video Editing', description: 'Polished edits shaped to hold attention and tell your story.', tone: 'purple' },
  { icon: Camera, title: 'Content Creation', description: 'Platform-ready creative content built around your brand.', tone: 'blue' },
  { icon: MonitorPlay, title: 'Social Media Videos', description: 'Short-form videos designed for feeds, reels, and stories.', tone: 'pink' },
  { icon: Palette, title: 'Colour Grading', description: 'A considered visual finish that gives every frame its mood.', tone: 'cyan' },
  { icon: WandSparkles, title: 'Motion Graphics', description: 'Clean, energetic motion that makes key messages land.', tone: 'orange' },
  { icon: CirclePlay, title: 'Brand Videos', description: 'Story-led videos that express your brand with clarity.', tone: 'green' },
]

const projectTones = ['purple', 'blue', 'pink', 'green', 'orange', 'cyan']
const projects = projectTones.map((tone, index) => ({
  category: 'Category placeholder',
  title: `Project title placeholder ${index + 1}`,
  description: 'Short project description will be added here.',
  duration: 'Duration',
  tone,
}))

const clients = Array.from({ length: 6 }, (_, index) => ({ id: index + 1, name: 'Client logo' }))

const testimonials = Array.from({ length: 3 }, (_, index) => ({
  id: index + 1,
  review: 'Client review will be added here.',
  name: 'Client name',
  company: 'Company name',
  image: 'Client image or logo',
}))

const founder = {
  name: 'Founder name',
  role: 'Founder role',
  bio: 'Founder bio will be added here. Share the story, creative approach, and what clients can expect when working with Lourus.Media.',
  skills: ['Video Editing', 'Content Creation', 'Creative Strategy'],
}

const socialLinks = [
  { icon: Instagram, label: 'Instagram placeholder', url: '#' },
  { icon: Youtube, label: 'YouTube placeholder', url: '#' },
  { icon: Linkedin, label: 'LinkedIn placeholder', url: '#' },
]

const navLinks = [
  ['Home', 'home'], ['Services', 'services'], ['Work', 'work'],
  ['About', 'about'], ['Clients', 'clients'], ['Contact', 'contact'],
]

function WhatsAppIcon({ size = 18 }) {
  return <MessageCircle size={size} strokeWidth={2.4} aria-hidden="true" />
}

function WhatsAppLink({ children, className = '', label }) {
  return (
    <a
      className={className}
      href={whatsappUrl}
      target="_blank"
      rel="noreferrer"
      aria-label={label || children}
    >
      <WhatsAppIcon />{children}
    </a>
  )
}

function Reveal({ children, className = '', as: Tag = 'div', ...props }) {
  return <Tag className={`reveal ${className}`} {...props}>{children}</Tag>
}

function Logo() {
  return <a href="#home" className="logo" aria-label="Lourus Media home">Lourus.<span>Media</span></a>
}

function OrbitVisual({ compact = false }) {
  return (
    <div className={`orbit-visual ${compact ? 'orbit-visual-compact' : ''}`}>
      <div className="portrait-glow" />
      <svg className="orbit orbit-back" viewBox="0 0 600 520" aria-hidden="true">
        <g className="orbit-spin orbit-a"><ellipse cx="300" cy="260" rx="274" ry="125" transform="rotate(-23 300 260)" /><circle cx="59" cy="167" r="7" /></g>
        <g className="orbit-spin orbit-b"><ellipse cx="300" cy="260" rx="264" ry="165" transform="rotate(-4 300 260)" /><circle cx="420" cy="112" r="6" /></g>
        <g className="orbit-spin orbit-c"><ellipse cx="300" cy="260" rx="270" ry="126" transform="rotate(23 300 260)" /><circle cx="539" cy="346" r="6" /></g>
      </svg>
      <div className="founder-cutout"><img src={founderPortrait} alt="Founder image placeholder" /></div>
      <svg className="orbit orbit-front" viewBox="0 0 600 520" aria-hidden="true">
        <ellipse className="front-a" cx="300" cy="260" rx="274" ry="125" transform="rotate(-23 300 260)" />
        <ellipse className="front-b" cx="300" cy="260" rx="264" ry="165" transform="rotate(-4 300 260)" />
        <ellipse className="front-c" cx="300" cy="260" rx="270" ry="126" transform="rotate(23 300 260)" />
      </svg>
      <span className="orbit-badge badge-play"><Play size={18} fill="currentColor" /></span>
      <span className="orbit-badge badge-video"><Video size={19} /></span>
      <span className="orbit-badge badge-spark"><Sparkles size={18} /></span>
      <span className="glow-dot dot-one" /><span className="glow-dot dot-two" /><span className="glow-dot dot-three" />
    </div>
  )
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.08 })
    document.querySelectorAll('.reveal, .reveal-item').forEach(element => observer.observe(element))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <header className="nav-wrap">
        <nav className="navbar">
          <Logo />
          <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
            {navLinks.map(([label, id]) => <a href={`#${id}`} key={id} onClick={() => setMenuOpen(false)}>{label}</a>)}
          </div>
          <div className="nav-actions">
            <WhatsAppLink className="button whatsapp nav-whatsapp">Let's Talk on WhatsApp</WhatsAppLink>
            <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation menu">
              {menuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </nav>
      </header>

      <main>
        <section className="hero page-width" id="home">
          <div className="hero-copy intro-animation">
            <span className="eyebrow">Video Editing &amp; Content Creation</span>
            <h1>We turn ideas into <span>scroll-stopping</span> content.</h1>
            <p>Creative videos and social content designed to connect with people and help modern brands show up with confidence.</p>
            <div className="hero-actions">
              <a href="#work" className="button primary">View Our Work <ArrowRight size={17} /></a>
              <WhatsAppLink className="button outline-whatsapp">Let's Talk on WhatsApp</WhatsAppLink>
            </div>
            <div className="feature-strip" aria-label="Core services">
              {['Video Editing', 'Content Creation', 'Social Media Content', 'Creative Strategy'].map((feature, index) => (
                <div key={feature}><span className={`feature-icon ${projectTones[index]}`}><Check size={15} /></span><b>{feature}</b></div>
              ))}
            </div>
          </div>
          <div className="intro-animation hero-art"><OrbitVisual /></div>
        </section>

        <Reveal as="section" className="section page-width" id="services">
          <div className="section-title">
            <div><span className="kicker">What we do</span><h2>Creative solutions for <span>modern brands.</span></h2></div>
            <p>Thoughtful creative services for brands that want to look sharp, sound clear, and stay memorable.</p>
          </div>
          <div className="service-grid">
            {services.map(({ icon: Icon, title, description, tone }, index) => (
              <article className="card service-card reveal-item" style={{ '--delay': `${index * 55}ms` }} key={title}>
                <span className={`service-icon ${tone}`}><Icon /></span>
                <h3>{title}</h3><p>{description}</p><ArrowRight className="card-arrow" size={18} />
              </article>
            ))}
          </div>
        </Reveal>

        <Reveal as="section" className="section page-width" id="work">
          <div className="section-title">
            <div><span className="kicker">Our work</span><h2>Real projects. Real results.</h2></div>
            <p>Project details and final thumbnails will be added when approved client content is supplied.</p>
          </div>
          <div className="project-grid">
            {projects.map((project, index) => (
              <article className="card project-card reveal-item" style={{ '--delay': `${index * 55}ms` }} key={project.title}>
                <div className={`project-image project-${project.tone}`}>
                  <span>Thumbnail placeholder</span>
                  <button aria-label={`Play ${project.title}`}><Play fill="currentColor" /></button>
                  <small>{project.duration}</small>
                </div>
                <div className="project-body">
                  <span className={`tag ${project.tone}`}>{project.category}</span>
                  <h3>{project.title}</h3><p>{project.description}</p>
                </div>
              </article>
            ))}
          </div>
        </Reveal>

        <Reveal as="section" className="section page-width" id="clients">
          <div className="section-title compact-title"><div><span className="kicker">Clients</span><h2>Trusted by</h2></div></div>
          <div className="client-grid">
            {clients.map(client => <div className="client-placeholder" key={client.id}><Sparkles size={17} /><span>{client.name}</span></div>)}
          </div>
        </Reveal>

        <Reveal as="section" className="section page-width">
          <div className="section-title compact-title"><div><span className="kicker">Client reviews</span><h2>What our clients say</h2></div></div>
          <div className="testimonial-grid">
            {testimonials.map((testimonial, index) => (
              <article className="card testimonial-card reveal-item" style={{ '--delay': `${index * 70}ms` }} key={testimonial.id}>
                <Quote className="quote-icon" size={28} fill="currentColor" />
                <p>{testimonial.review}</p>
                <div className="reviewer"><span>{testimonial.image}</span><div><b>{testimonial.name}</b><small>{testimonial.company}</small></div></div>
              </article>
            ))}
          </div>
        </Reveal>

        <Reveal as="section" className="section page-width founder-section" id="about">
          <div className="founder-photo"><img src={founderPortrait} alt="Founder image placeholder" /><span>Founder image placeholder</span></div>
          <div className="founder-copy">
            <span className="kicker">About the founder</span>
            <h2>Built on <span>creativity.</span><br />Driven by <em>results.</em></h2>
            <h3>{founder.name}</h3><small>{founder.role}</small><p>{founder.bio}</p>
            <div className="skill-tags">{founder.skills.map(skill => <span key={skill}>{skill}</span>)}</div>
            <WhatsAppLink className="button whatsapp founder-button">Start a conversation</WhatsAppLink>
          </div>
        </Reveal>

        <Reveal as="section" className="cta page-width" id="contact">
          <span className="cta-icon"><WhatsAppIcon size={34} /></span>
          <div><h2>Let's create content that connects.</h2><p>Start your project on WhatsApp.</p></div>
          <span className="cta-arrow">→</span>
          <WhatsAppLink className="button whatsapp cta-button">Chat on WhatsApp</WhatsAppLink>
        </Reveal>
      </main>

      <footer className="footer page-width">
        <div className="footer-brand"><Logo /><p>A creative social-media agency helping brands connect through thoughtful video and content.</p></div>
        <div><b>Quick links</b>{navLinks.map(([label, id]) => <a href={`#${id}`} key={id}>{label}</a>)}</div>
        <div><b>Services</b>{services.map(service => <a href="#services" key={service.title}>{service.title}</a>)}</div>
        <div><b>Contact</b><WhatsAppLink>WhatsApp</WhatsAppLink><a href={`mailto:${email}`}>{email}</a><span className="socials">{socialLinks.map(({ icon: Icon, label, url }) => <a href={url} key={label} aria-label={label}><Icon size={16} /></a>)}</span></div>
      </footer>

      <WhatsAppLink className="floating-whatsapp" label="Chat with us on WhatsApp">
        <span className="tooltip">Chat with us on WhatsApp</span>
      </WhatsAppLink>
    </>
  )
}

export default App
