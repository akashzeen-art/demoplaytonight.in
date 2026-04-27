import './Policy.css'

export default function Terms({ showPage }) {
  const nav = (p) => (e) => { e.preventDefault(); showPage(p) }
  return (
    <div>
      <div className="policy-header">
        <button className="policy-back" onClick={nav('home')}>← Back</button>
        <h1>Terms &amp; Conditions</h1>
        <p><a href="https://playtonight.in/">https://playtonight.in/</a></p>
      </div>
      <div className="policy-body">
        <div className="policy-intro">
          Welcome to <a href="https://playtonight.in/">https://playtonight.in/</a>, a website created and managed by <strong>Zeen Mediconnect OPC Pvt. Ltd.</strong> By accessing or using this website, you agree to the following Terms &amp; Conditions.<br /><br />
          Zeen Mediconnect OPC Pvt. Ltd. reserves the right to revise, modify, or update these Terms &amp; Conditions at any time without prior notice.
        </div>
        <div className="policy-section"><h2>Medical Disclaimer</h2><p>The content on this website is for general informational and educational purposes only. The Company does not provide medical advice, diagnosis, or treatment. Always consult a qualified healthcare professional before starting any herbal, Ayurvedic, or medical treatment.</p></div>
        <div className="policy-section"><h2>Personal Information</h2><p>We may collect personal information voluntarily for registration, order delivery, shipment tracking, and updates via call, SMS, or email. By providing this data, you consent to its collection and use in accordance with our Privacy Policy.</p></div>
        <div className="policy-section"><h2>Intellectual Property / Copyright</h2><ul><li>All content—including text, graphics, images, videos, logos, and designs—is the property of Zeen Mediconnect OPC Pvt. Ltd.</li><li>Content may only be downloaded if explicitly marked and solely for personal, non-commercial use.</li><li>Reproduction, distribution, or exploitation without prior written consent is prohibited.</li></ul></div>
        <div className="policy-section"><h2>No Warranty &amp; Limitation of Liability</h2><p>This website is provided "AS IS" without warranties of any kind. The Company shall not be liable for any direct, indirect, or consequential damages arising from the use of this website.</p></div>
        <div className="policy-section"><h2>General Terms</h2><ul><li>The website is operated from India. Access outside India is at your own responsibility.</li><li>Users are responsible for compliance with their local laws when accessing this website.</li><li>Certain provisions (indemnity, liability, jurisdiction) survive termination of these Terms &amp; Conditions.</li></ul></div>
        <div className="policy-section"><h2>Jurisdiction</h2><p>All disputes shall be subject to the exclusive jurisdiction of the courts of Gurugram, Haryana, India.</p></div>
        <div className="policy-section"><h2>Severability</h2><p>If any provision is found invalid or unenforceable, the remaining provisions remain in full force and effect.</p></div>
        <div className="policy-section"><h2>User Responsibilities</h2><ul><li>Do not misuse or attempt unauthorized access to the website.</li><li>Do not use the website for unlawful or fraudulent purposes.</li><li>Comply with all applicable laws while using the website.</li></ul></div>
        <div className="policy-section"><h2>Third-Party Links</h2><p>This website may contain links to third-party sites. We are not responsible for their content, policies, or practices.</p></div>
        <div className="policy-section"><h2>Entire Agreement</h2><p>These Terms &amp; Conditions, along with our Privacy Policy, constitute the complete agreement between you and Zeen Mediconnect OPC Pvt. Ltd.</p></div>
      </div>
      <div className="policy-footer">
        <p>© 2026, Zeen Mediconnect OPC Pvt Ltd. All Rights Reserved.</p>
        <p style={{marginTop:'8px'}}><a href="#" onClick={nav('disclaimer')}>Disclaimer</a> &nbsp;|&nbsp; <a href="#" onClick={nav('terms')}>Terms &amp; Conditions</a> &nbsp;|&nbsp; <a href="#" onClick={nav('privacy')}>Privacy Policy</a> &nbsp;|&nbsp; <a href="#" onClick={nav('refund')}>Refund &amp; Cancellation Policy</a></p>
      </div>
    </div>
  )
}
