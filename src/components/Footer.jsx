import './Footer.css'

export default function Footer({ showPage }) {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-contact">
          <span><img src="/img/call2.png" alt="" />Customer Care: +91 92175 28957</span>
          <span className="sep">|</span>
          <span><img src="/img/email.png" alt="" />enquiry@zeenmediconnect.com</span>
        </div>
        <p>
          <a href="#" onClick={() => showPage('disclaimer')}>Disclaimer</a> |{' '}
          <a href="#" onClick={() => showPage('terms')}>Terms &amp; Conditions</a> |{' '}
          <a href="#" onClick={() => showPage('privacy')}>Privacy Policy</a> |{' '}
          <a href="#" onClick={() => showPage('refund')}>Refund &amp; Cancellation Policy</a>
        </p>
        <p>© 2026, Zeen Mediconnect OPC Pvt Ltd. All Rights Reserved.</p>
      </div>
    </footer>
  )
}
