import { useState } from 'react'
import './Checkout.css'

const UNIT_PRICE = 999

export default function Checkout({ showPage }) {
  const [qty, setQty] = useState(1)
  const [shipping, setShipping] = useState('free')

  const shippingCost = shipping === 'express' ? 9 : 0
  const subtotal = UNIT_PRICE * qty
  const total = subtotal + shippingCost + 5

  const changeQty = (d) => setQty(q => Math.max(1, q + d))

  return (
    <div>
      <div className="co-header">
        <h1>Checkout</h1>
        <a href="#" onClick={() => showPage('home')}>← Back to Home</a>
      </div>
      <div className="co-body">
        <div>
          <div className="form-card">
            <div className="section-title">Shipping Address</div>
            <div className="form-group"><label>Phone Number *</label><input type="tel" placeholder="Enter your phone number" /></div>
            <div className="form-group"><label>Email *</label><input type="email" placeholder="Enter your email" /></div>
            <div className="form-row">
              <div className="form-group"><label>First Name *</label><input type="text" placeholder="First name" /></div>
              <div className="form-group"><label>Last Name *</label><input type="text" placeholder="Last name" /></div>
            </div>
            <div className="form-group"><label>House number and street name</label><input type="text" placeholder="House no. and street name" /></div>
            <div className="form-group"><label>Apartment, suite, unit, etc. (optional)</label><input type="text" placeholder="Apartment, suite, unit, etc." /></div>
            <div className="form-row">
              <div className="form-group"><label>City name *</label><input type="text" placeholder="City" /></div>
              <div className="form-group"><label>Postcode *</label><input type="text" placeholder="Postcode" /></div>
            </div>
            <div className="form-row">
              <div className="form-group"><label>State *</label><input type="text" placeholder="State" /></div>
              <div className="form-group">
                <label>Country *</label>
                <select>
                  <option value="">Select country</option>
                  <option value="IN" defaultValue>India</option>
                  <option value="US">United States</option>
                  <option value="GB">United Kingdom</option>
                  <option value="AU">Australia</option>
                </select>
              </div>
            </div>
          </div>
          <div className="form-card">
            <div className="section-title">Shipping Method</div>
            <div className="shipping-options">
              <label className={`shipping-option${shipping === 'free' ? ' active' : ''}`}>
                <input type="radio" name="shipping" value="free" checked={shipping === 'free'} onChange={() => setShipping('free')} />
                <div className="ship-info"><strong>Free Shipping</strong><span>7–20 Days</span></div>
                <span className="ship-price">₹0</span>
              </label>
              <label className={`shipping-option${shipping === 'express' ? ' active' : ''}`}>
                <input type="radio" name="shipping" value="express" checked={shipping === 'express'} onChange={() => setShipping('express')} />
                <div className="ship-info"><strong>Express Shipping</strong><span>1–3 Days</span></div>
                <span className="ship-price">₹9</span>
              </label>
            </div>
          </div>
        </div>
        <div className="summary-card">
          <div className="section-title">Your Cart</div>
          <div className="cart-item">
            <img src="/img/Capsules.png" alt="Play Tonight Capsules" />
            <div className="cart-item-info">
              <p>Play Tonight Super Vitality Capsules</p>
              <div className="qty-control">
                <button className="qty-btn" onClick={() => changeQty(-1)}>−</button>
                <span className="qty-num">{qty}</span>
                <button className="qty-btn" onClick={() => changeQty(1)}>+</button>
              </div>
            </div>
            <span className="cart-item-price">₹{subtotal.toFixed(2)}</span>
          </div>
          <div className="discount-row">
            <input type="text" placeholder="Discount code" />
            <button className="apply-btn">Apply</button>
          </div>
          <div className="totals">
            <div className="total-row"><span>Subtotal</span><span>₹{subtotal.toFixed(2)}</span></div>
            <div className="total-row"><span>Shipping</span><span>₹{shippingCost.toFixed(2)}</span></div>
            <div className="total-row"><span>Estimated taxes</span><span>₹5.00</span></div>
            <div className="total-row grand"><span>Total</span><span>₹{total.toFixed(2)}</span></div>
          </div>
          <div className="agree-row">
            <input type="checkbox" id="agree" />
            <label htmlFor="agree">I have read and agree to the <a href="#" onClick={() => showPage('terms')}>Terms &amp; Conditions</a> and <a href="#" onClick={() => showPage('privacy')}>Privacy Policy</a>.</label>
          </div>
          <button className="place-order-btn">Place Order</button>
        </div>
      </div>
      <div className="co-footer">
        <p>© 2026, Zeen Mediconnect OPC Pvt Ltd. All Rights Reserved. &nbsp;|&nbsp;
          <a href="#" onClick={() => showPage('disclaimer')}>Disclaimer</a> &nbsp;|&nbsp;
          <a href="#" onClick={() => showPage('terms')}>Terms &amp; Conditions</a> &nbsp;|&nbsp;
          <a href="#" onClick={() => showPage('privacy')}>Privacy Policy</a> &nbsp;|&nbsp;
          <a href="#" onClick={() => showPage('refund')}>Refund &amp; Cancellation Policy</a>
        </p>
      </div>
    </div>
  )
}
