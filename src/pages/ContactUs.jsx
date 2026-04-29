import './Policy.css'
import Navbar from '../components/Navbar'

export default function ContactUs({ showPage }) {
  const nav = (p) => (e) => { e.preventDefault(); showPage(p) }

  return (
    <div>
      <Navbar showPage={showPage} />
      <div className="policy-header">
        <button className="policy-back" onClick={nav('home')}>← Back</button>
        <h1>Contact Us</h1>
        <p>Play Tonight – We're here to help</p>
      </div>

      <div className="policy-body">
        <div className="policy-intro">
          Have a question, concern, or just want to get in touch? Reach out to us through any of the
          channels below and our team will get back to you as soon as possible.
        </div>

        <div className="policy-section">
          <h2>Get In Touch</h2>
          <div className="contact-grid">
            <div className="contact-item">
              <h4>📞 Phone</h4>
              <p><a href="tel:+919217528957">+91 92175 28957</a></p>
            </div>
            <div className="contact-item">
              <h4>✉️ Email</h4>
              <a href="mailto:bd@zeenmediconnect.com">bd@zeenmediconnect.com</a>
            </div>
            <div className="contact-item">
              <h4>🏢 Address</h4>
              <p>Zeen Mediconnect OPC Pvt. Ltd.,<br />UNIT NO. 417, TOWER A1, TECH PARK,<br />SOHNA ROAD, SEC 49, GURGAON,<br />Gurugram, Haryana – 122001</p>
            </div>
          </div>
        </div>

        <div className="policy-section">
          <h2>Business Hours</h2>
          <p>Monday – Saturday: 10:00 AM – 6:00 PM (IST)</p>
          <p>Sunday: Closed</p>
        </div>
      </div>

      <div className="policy-footer">
        <p>© 2026, Zeen Mediconnect OPC Pvt Ltd. All Rights Reserved.</p>
        <p style={{ marginTop: '8px' }}>
          <a href="#" onClick={nav('about')}>About Us</a> &nbsp;|&nbsp;
          <a href="#" onClick={nav('contact')}>Contact Us</a> &nbsp;|&nbsp;
          <a href="#" onClick={nav('disclaimer')}>Disclaimer</a> &nbsp;|&nbsp;
          <a href="#" onClick={nav('terms')}>Terms &amp; Conditions</a> &nbsp;|&nbsp;
          <a href="#" onClick={nav('privacy')}>Privacy Policy</a> &nbsp;|&nbsp;
          <a href="#" onClick={nav('refund')}>Refund &amp; Cancellation Policy</a>
        </p>
      </div>
    </div>
  )
}
