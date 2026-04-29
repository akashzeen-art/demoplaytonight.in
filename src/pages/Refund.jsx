import './Policy.css'
import Navbar from '../components/Navbar'

export default function Refund({ showPage }) {
  const nav = (p) => (e) => { e.preventDefault(); showPage(p) }
  return (
    <div>
      <Navbar showPage={showPage} />
      <div className="policy-header">
        <button className="policy-back" onClick={nav('home')}>← Back</button>
        <h1>Refund &amp; Cancellation Policy</h1>
        <p><a href="https://playtonight.in/">https://playtonight.in/</a></p>
      </div>
      <div className="policy-body">
        <div className="policy-intro">
          This Refund &amp; Cancellation Policy applies to all purchases made through <a href="https://playtonight.in/">https://playtonight.in/</a>, managed by <strong>Zeen Mediconnect OPC Pvt. Ltd.</strong> Please read it carefully before placing an order.
        </div>
        <div className="policy-section"><h2>Order Cancellation</h2><ul><li>Orders can be cancelled within <strong>24 hours</strong> of placing the order, provided the order has not been processed or shipped.</li><li>Contact us at <a href="mailto:bd@zeenmediconnect.com">bd@zeenmediconnect.com</a> / <strong>+91 92175 28957</strong> with your order details.</li><li>Once an order is shipped, it <strong>cannot be cancelled</strong>.</li></ul></div>
        <div className="policy-section">
          <h2>Refund Eligibility</h2>
          <p>Refunds are applicable only under the following conditions:</p>
          <ul><li>You received a wrong product that does not match your order.</li><li>The product was damaged during delivery (requires proof such as photos).</li><li>The product is expired or defective upon arrival.</li></ul>
          <div className="note-box"><strong>Note:</strong> Refunds are not applicable for opened, used, or partially consumed products due to the nature of herbal and Ayurvedic consumables.</div>
        </div>
        <div className="policy-section"><h2>Refund Process</h2><ul><li>Notify us within <strong>2 days</strong> of receiving the product.</li><li>Refunds will be processed within <strong>7–10 working days</strong> to your original payment method.</li><li>You may be asked to return the product (unused and in original packaging) before a refund is issued.</li></ul></div>
        <div className="policy-section"><h2>Non-Refundable Items</h2><p>We do not accept returns or issue refunds for:</p><ul><li>Opened or partially used herbal/ayurvedic products.</li><li>Products purchased during promotional sales or discounts.</li><li>Digital or downloadable content (if applicable).</li></ul></div>
        <div className="policy-section"><h2>Shipping &amp; Return Costs</h2><ul><li>If the return is due to <strong>our error</strong> (wrong, damaged, or expired product), we will bear the return shipping charges.</li><li>If the return is due to <strong>customer reasons</strong> (e.g., order placed by mistake, change of mind), the customer must bear the return shipping cost.</li></ul></div>
        <div className="policy-section">
          <h2>Contact Us</h2>
          <div className="contact-grid">
            <div className="contact-item">
              <h4>Email</h4>
              <a href="mailto:bd@zeenmediconnect.com">bd@zeenmediconnect.com</a>
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
        <p style={{marginTop:'8px'}}><a href="#" onClick={nav('about')}>About Us</a> &nbsp;|&nbsp; <a href="#" onClick={nav('contact')}>Contact Us</a> &nbsp;|&nbsp; <a href="#" onClick={nav('disclaimer')}>Disclaimer</a> &nbsp;|&nbsp; <a href="#" onClick={nav('terms')}>Terms &amp; Conditions</a> &nbsp;|&nbsp; <a href="#" onClick={nav('privacy')}>Privacy Policy</a> &nbsp;|&nbsp; <a href="#" onClick={nav('refund')}>Refund &amp; Cancellation Policy</a></p>
      </div>
    </div>
  )
}
