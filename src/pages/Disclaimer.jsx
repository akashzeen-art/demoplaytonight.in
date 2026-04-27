import './Policy.css'

export default function Disclaimer({ showPage }) {
  const nav = (p) => (e) => { e.preventDefault(); showPage(p) }
  return (
    <div>
      <div className="policy-header">
        <button className="policy-back" onClick={nav('home')}>← Back</button>
        <h1>Disclaimer</h1>
        <p><a href="https://playtonight.in/">https://playtonight.in/</a></p>
      </div>
      <div className="policy-body">
        <div className="policy-intro">
          The information below applies to <a href="https://playtonight.in/">https://playtonight.in/</a> and the Company — <strong>Zeen Mediconnect OPC Pvt. Ltd.</strong><br /><br />
          The information provided on this Website, operated by <strong>Zeen Mediconnect OPC Pvt. Ltd.</strong> ("Company", "we", "our", or "us"), is for general informational and educational purposes only. By using this Website, you acknowledge and agree to the following disclaimers:
        </div>
        <div className="policy-section"><h2>No Medical Advice</h2><ul><li>The content on this Website, including articles, product information, and resources, is not a substitute for professional medical advice, diagnosis, or treatment.</li><li>Always consult a qualified healthcare professional before starting any herbal, Ayurvedic, or dietary supplement regimen.</li><li>Never disregard or delay seeking medical advice because of something you read on this Website.</li></ul></div>
        <div className="policy-section"><h2>Product Disclaimer</h2><ul><li>Our products are based on traditional Ayurvedic and herbal practices. Results may vary from person to person.</li><li>The Company does not claim to diagnose, treat, cure, or prevent any disease.</li><li>Statements regarding our products have not been evaluated by medical authorities unless explicitly stated.</li></ul></div>
        <div className="policy-section"><h2>Accuracy of Information</h2><ul><li>While we strive to keep information on this Website accurate and up to date, we make no representations or warranties regarding completeness, accuracy, or reliability.</li><li>Any reliance you place on the information is strictly at your own risk.</li></ul></div>
        <div className="policy-section"><h2>External Links</h2><ul><li>This Website may include links to third-party websites for informational purposes.</li><li>We are not responsible for the content, accuracy, or practices of external sites and disclaim liability for any damages arising from their use.</li></ul></div>
        <div className="policy-section"><h2>Limitation of Liability</h2><p>To the fullest extent permitted by law, the Company shall not be held liable for any loss, injury, or damage arising from:</p><ul><li>Use of or reliance on Website content.</li><li>Use of our products.</li><li>Inability to access the Website.</li></ul></div>
        <div className="policy-section"><h2>User Responsibility</h2><ul><li>By using this Website, you acknowledge that you are solely responsible for your health decisions.</li><li>The Company shall not be held liable for your personal choices or outcomes resulting from use of our information or products.</li></ul></div>
        <div className="policy-section"><h2>Consent</h2><p>By accessing and using this Website, you consent to this Disclaimer and agree to all its terms.</p></div>
        <div className="policy-section">
          <h2>Contact Us</h2>
          <div className="contact-grid">
            <div className="contact-item">
              <h4>Email</h4>
              <a href="mailto:enquiry@zeenmediconnect.com">enquiry@zeenmediconnect.com</a>
            </div>
            <div className="contact-item">
              <h4>Phone</h4>
              <p>+91 92175 28957</p>
            </div>
            <div className="contact-item">
              <h4>Address</h4>
              <p>Zeen Mediconnect OPC Pvt. Ltd.,<br />UNIT NO. 417, TOWER A1, TECH PARK, SOHNA ROAD, SEC 49,<br />GURGAON, SADAR BAZAR, Gurugram, Haryana-122001</p>
            </div>
          </div>
        </div>
      </div>
      <div className="policy-footer">
        <p>© 2026, Zeen Mediconnect OPC Pvt Ltd. All Rights Reserved.</p>
        <p style={{marginTop:'8px'}}><a href="#" onClick={nav('disclaimer')}>Disclaimer</a> &nbsp;|&nbsp; <a href="#" onClick={nav('terms')}>Terms &amp; Conditions</a> &nbsp;|&nbsp; <a href="#" onClick={nav('privacy')}>Privacy Policy</a> &nbsp;|&nbsp; <a href="#" onClick={nav('refund')}>Refund &amp; Cancellation Policy</a></p>
      </div>
    </div>
  )
}
