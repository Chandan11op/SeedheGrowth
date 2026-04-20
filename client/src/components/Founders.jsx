import { useState } from 'react'

const foundersData = [
  {
    id: 'jeet',
    name: 'Jeet Chaugule',
    role: 'CEO & Client Success Lead',
    fullRole: 'Chief Executive Officer (CEO) & Client Success Lead',
    bio: 'The face of the business. Owns client relationships, business development, deal closures, and day-to-day operations. Every client starts and ends with Jeet.',
    resp: 'client onboarding, revenue targets, team coordination, vendor negotiations, legal/contracts, and final decision making.',
    image: '/Founders-image/Jeet.png',
    phone: '9175903084',
    email: 'jeetchaugule8@gmail.com',
    linkedin: 'https://www.linkedin.com/in/jeet-chaugule',
    instagram: 'https://www.instagram.com/jeetchaugule_/'
  },
  {
    id: 'chandan',
    name: 'Chandan Tiwari',
    role: 'CTO & Head of Web',
    fullRole: 'Chief Technology Officer (CTO) & Head of Web',
    bio: 'The builder. Owns everything technical — websites, tools, automations, tech stack, and digital infrastructure for both Seedhe Growth and client businesses.',
    resp: 'website development, tech audits for clients, automation setups, hosting, performance, and anything that runs on code.',
    image: '/Founders-image/chandan.png',
    phone: '8879753917',
    email: 'Chandan110906@gmail.com',
    linkedin: 'https://www.linkedin.com/in/chandan-tiwadi',
    instagram: 'https://www.instagram.com/chandan_tiwadi/'
  },
  {
    id: 'ananya',
    name: 'Ananya Thorat',
    role: 'CMO & Head of Social',
    fullRole: 'Chief Marketing Officer (CMO) & Head of Social',
    bio: "The voice. Owns Seedhe Growth's own brand presence AND manages social media strategy and execution for client businesses.",
    resp: 'content strategy, social media management, brand tone, reels/posts, community building, analytics, and influencer coordination.',
    image: '/Founders-image/Ananya.png',
    phone: '9359375260',
    email: 'ananyathorat26@gmail.com',
    linkedin: 'https://www.linkedin.com/in/ananya-thorat/',
    instagram: 'https://www.instagram.com/ananyathorat__/'
  },
  {
    id: 'harsh',
    name: 'Harsh Saini',
    role: 'CSO & Head of Growth',
    fullRole: 'Chief Strategy Officer (CSO) & Head of Growth Marketing',
    bio: 'The brain. Owns marketing strategy — paid campaigns, growth plans, performance marketing, and business recommendations delivered to clients.',
    resp: 'marketing strategy decks, paid ads (Meta/Google), campaign planning, ROI analysis, competitor research, and client growth roadmaps.',
    image: '/Founders-image/harsh.png',
    phone: '8890985504',
    email: 'harshkumarsaini2007@gmail.com',
    linkedin: 'https://www.linkedin.com/in/harsh-kumar-saini-53a834332/',
    instagram: 'https://www.instagram.com/harsh_222007/'
  }
]

export default function Founders() {
  const [activeFounder, setActiveFounder] = useState(null)

  const handleCardClick = (id) => {
    setActiveFounder(foundersData.find(f => f.id === id))
  }

  const closeDetails = (e) => {
    e.stopPropagation()
    setActiveFounder(null)
  }

  return (
    <section className="founders reveal" id="founders">
      <div className="section-header">
        <div className="header-text">
          <p className="section-eyebrow">Our Core Team</p>
          <h2 className="section-title">The Minds Behind <em>Growth</em></h2>
        </div>
      </div>

      <div className={`founders-container ${activeFounder ? 'has-active' : ''}`}>
        {activeFounder ? (
          <>
            <div className="founder-card active">
              <div className="founder-image-box">
                <img src={activeFounder.image} alt={activeFounder.name} />
              </div>
            </div>
            
            <div className="founder-details-scroll">
              <button className="close-details" onClick={closeDetails} aria-label="Close details">
                ×
              </button>
              <h3>{activeFounder.name}</h3>
              <span className="founder-full-role">{activeFounder.fullRole}</span>
              
              <p className="founder-bio">{activeFounder.bio}</p>
              
              <span className="founder-resp-title">Responsibilities</span>
              <p className="founder-bio">{activeFounder.resp}</p>

              <div className="founder-contact-info">
                <div className="founder-contact-item">
                  <span>Phone</span>
                  <a href={`tel:${activeFounder.phone}`} className="footer-social-link">{activeFounder.phone}</a>
                </div>
                <div className="founder-contact-item">
                  <span>Email</span>
                  <a href={`mailto:${activeFounder.email}`} className="footer-social-link">{activeFounder.email}</a>
                </div>
                <div className="founder-contact-item">
                  <span>Socials</span>
                  <div className="footer-socials">
                    <a href={activeFounder.linkedin} target="_blank" rel="noopener noreferrer" className="footer-social-link">LinkedIn</a>
                    <a href={activeFounder.instagram} target="_blank" rel="noopener noreferrer" className="footer-social-link">Instagram</a>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : (
          foundersData.map((founder) => (
            <div 
              key={founder.id} 
              className="founder-card"
              onClick={() => handleCardClick(founder.id)}
            >
              <div className="founder-image-box">
                <img src={founder.image} alt={founder.name} />
              </div>
              <div className="founder-overlay">
                <h3 className="founder-name">{founder.name}</h3>
                <span className="founder-role">{founder.role}</span>
              </div>
            </div>
          ))
        )}
      </div>
    </section>
  )
}
