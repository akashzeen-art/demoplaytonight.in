import './Policy.css'
import Navbar from '../components/Navbar'

export default function Privacy({ showPage }) {
  const nav = (p) => (e) => { e.preventDefault(); showPage(p) }
  return (
    <div>
      <Navbar showPage={showPage} />
      <div className="policy-header">
        <button className="policy-back" onClick={nav('home')}>← Back</button>
        <h1>Privacy Policy</h1>
        <p>PLAY TONIGHT</p>
      </div>
      <div className="policy-body">
        <div className="policy-intro">
          This Privacy Policy describes how <strong>Zeen Mediconnect OPC Pvt. Ltd.</strong> collects, uses, stores, and protects your personal information when you use <a href="https://playtonight.in/">https://playtonight.in/</a> (the "Website"). By accessing or using our Website, you agree to the terms of this Privacy Policy.<br /><br />
          We are committed to safeguarding your privacy and ensuring your personal data is handled responsibly and transparently.
        </div>

        <div className="policy-section">
          <h2>Information We Collect</h2>
          <ul>
            <li><strong>Personal Information:</strong> Name, email address, phone number, billing/shipping address, and payment details.</li>
            <li><strong>Non-Personal Information:</strong> Browser type, device details, IP address, cookies, and usage data.</li>
            <li><strong>Voluntary Submissions:</strong> Information you provide through forms, surveys, or direct communication.</li>
          </ul>
        </div>

        <div className="policy-section">
          <h2>How We Use Your Information</h2>
          <ul>
            <li>Processing and fulfilling your orders.</li>
            <li>Providing customer support and responding to inquiries.</li>
            <li>Sending updates, promotions, or service-related communications (if you opt-in).</li>
            <li>Improving our Website's functionality, user experience, and services.</li>
            <li>Legal and security purposes, such as fraud prevention and compliance with applicable laws.</li>
          </ul>
        </div>

        <div className="policy-section">
          <h2>Sharing of Information</h2>
          <ul>
            <li><strong>Service Providers:</strong> Trusted third parties (e.g., payment processors, delivery partners) who assist in running our services.</li>
            <li><strong>Legal Requirements:</strong> Authorities, if required by law, regulation, or legal process.</li>
            <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or restructuring, your data may be transferred to the new entity.</li>
          </ul>
        </div>

        <div className="policy-section">
          <h2>Cookies &amp; Tracking Technologies</h2>
          <ul>
            <li>Enhance user experience.</li>
            <li>Track website traffic and performance.</li>
            <li>Store user preferences.</li>
          </ul>
          <p style={{marginTop:'12px'}}>You can adjust your browser settings to decline cookies, but some features of the Website may not function properly.</p>
        </div>

        <div className="policy-section">
          <h2>Data Security</h2>
          <p>We implement appropriate technical and organizational measures to protect your personal information from unauthorized access, misuse, loss, or alteration. However, no method of online transmission or storage is 100% secure.</p>
        </div>

        <div className="policy-section">
          <h2>Data Retention</h2>
          <p>We retain your personal information only as long as necessary to provide services, comply with legal obligations, resolve disputes, and enforce agreements.</p>
        </div>

        <div className="policy-section">
          <h2>Your Rights</h2>
          <ul>
            <li>Access, update, or correct your personal information.</li>
            <li>Request deletion of your personal data.</li>
            <li>Withdraw consent for marketing communications.</li>
            <li>Restrict or object to certain data processing activities.</li>
          </ul>
          <p style={{marginTop:'12px'}}>To exercise these rights, contact us at <a href="mailto:bd@zeenmediconnect.com">bd@zeenmediconnect.com</a>.</p>
        </div>

        <div className="policy-section">
          <h2>Third-Party Links</h2>
          <p>Our Website may contain links to third-party websites. We are not responsible for the privacy practices or content of those external sites.</p>
        </div>

        <div className="policy-section">
          <h2>Children's Privacy</h2>
          <p>Our Website and services are not intended for children under 18 years of age. We do not knowingly collect personal information from minors.</p>
        </div>

        <div className="policy-section">
          <h2>Changes to this Privacy Policy</h2>
          <p>We may update this Privacy Policy from time to time. Any changes will be posted on this page with the updated effective date. Continued use of our Website after changes indicates your acceptance of the revised policy.</p>
        </div>

        <div className="policy-section">
          <h2>Contact Us</h2>
          <div className="contact-grid">
            <div className="contact-item">
              <h4>Email</h4>
              <a href="mailto:bd@zeenmediconnect.com">bd@zeenmediconnect.com</a>
            </div>
            <div className="contact-item">
              <h4>Phone</h4>
              <p>92175 28957</p>
            </div>
            <div className="contact-item">
              <h4>Address</h4>
              <p>Zeen Mediconnect OPC Pvt. Ltd.,<br />UNIT NO. 417, TOWER A1, TECH PARK, SOHNA ROAD, SEC 49,<br />GURGAON, SADAR BAZAR, Gurugram, Haryana-122001</p>
            </div>
          </div>
        </div>
      </div>

      <div className="policy-footer">
        <p>Zeen Mediconnect OPC Pvt Ltd. All Rights Reserved © 2026.</p>
        <p style={{marginTop:'8px'}}>
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
