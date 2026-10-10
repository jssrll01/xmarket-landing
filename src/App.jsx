import React, { useEffect, useState } from 'react';
import {
  ArrowRight, Zap, Wallet, ShieldCheck, Truck, Gift, Headphones,
  CheckCircle2, Star, ChevronDown,
} from 'lucide-react';

const APP_URL = 'https://xmarket-app.onrender.com';

const FEATURES = [
  { icon: Zap,        color: '#2563EB', title: 'Instant checkout',      desc: 'One-tap purchases with saved addresses and preferred payment methods.' },
  { icon: Wallet,     color: '#10B981', title: 'Xwallet built-in',      desc: 'Top-up once, spend anywhere. No need for a bank card every time.' },
  { icon: ShieldCheck, color: '#7C3AED', title: 'Verified sellers',     desc: 'Only KYC-approved sellers with real identities can list products.' },
  { icon: Truck,      color: '#F59E0B', title: 'Fast delivery',         desc: 'Same-day and next-day delivery for selected areas via Lalamove.' },
  { icon: Gift,       color: '#EC4899', title: 'Loyalty rewards',       desc: 'Earn points on every order and unlock Silver, Gold, and Platinum tiers.' },
  { icon: Headphones, color: '#0EA5E9', title: '24/7 support',          desc: 'Real humans, not bots. Reach us anytime in the app or via Telegram.' },
];

const FAQ = [
  { q: 'What is XMARKET?',           a: 'XMARKET is a modern online marketplace where verified sellers list products and buyers shop with confidence. Everything runs through the Xwallet — one balance, one app.' },
  { q: 'How do I create an account?', a: 'Tap the button at the top, download or install the app, and sign up with your email. Verification takes under a minute.' },
  { q: 'What payment methods work?',  a: 'You can top up Xwallet via GCash, Maya, or bank transfer. All purchases are paid instantly from your wallet.' },
  { q: 'Is my money safe?',           a: 'Yes. Xwallet is protected, transactions are logged, and every seller is identity-verified before they can list products.' },
  { q: 'What if I receive a bad item?', a: 'Open a report from the app in under a minute. Our support team responds within hours and issues refunds directly to Xwallet.' },
];

function useLiveStats() {
  const [stats, setStats] = useState({ products: '—', sellers: '—', orders: '—', users: '—' });
  useEffect(() => {
    // Lazy-load Supabase so the landing page can boot even if the CDN blocks it
    const SUPABASE_URL = 'https://dmdjytkuwfudkqepkxkl.supabase.co';
    const SUPABASE_KEY = 'sb_publishable_1NOK3tZHHDzr8YBlBVmCuw_VvsKOFI7';
    (async () => {
      try {
        const [p, u, o] = await Promise.all([
          fetch(`${SUPABASE_URL}/rest/v1/products?select=id&limit=1`, {
            headers: { apikey: SUPABASE_KEY, Authorization: `Bearer ${SUPABASE_KEY}`, Prefer: 'count=exact' },
          }),
          fetch(`${SUPABASE_URL}/rest/v1/profiles?select=id&limit=1`, {
            headers: { apikey: SUPABASE_KEY, Authorization: `Bearer ${SUPABASE_KEY}`, Prefer: 'count=exact' },
          }),
          fetch(`${SUPABASE_URL}/rest/v1/orders?select=id&limit=1`, {
            headers: { apikey: SUPABASE_KEY, Authorization: `Bearer ${SUPABASE_KEY}`, Prefer: 'count=exact' },
          }),
        ]);
        const getCount = (res) => {
          const cr = res.headers.get('content-range');
          return cr ? cr.split('/')[1] : '—';
        };
        setStats({
          products: getCount(p) || '—',
          users: getCount(u) || '—',
          orders: getCount(o) || '—',
          sellers: '—',
        });
      } catch {
        // leave placeholders
      }
    })();
  }, []);
  return stats;
}

export default function App() {
  const stats = useLiveStats();
  const [openFaq, setOpenFaq] = useState(0);

  const goApp = (e) => {
    // Allow middle-click / Cmd-click / Ctrl-click to open in new tab (default anchor behavior)
    if (e && (e.metaKey || e.ctrlKey || e.shiftKey)) return;
    // Same-tab navigation for a clean app launch
  };

  return (
    <>
      {/* ---------- NAV ---------- */}
      <nav className="nav">
        <div className="nav-inner">
          <a href="#top" className="logo">
            <div className="logo-mark">X</div>
            <span>XMARKET</span>
          </a>
          <div className="nav-links">
            <a href="#features">Features</a>
            <a href="#screens">Preview</a>
            <a href="#faq">FAQ</a>
            <a
              href={APP_URL}
              onClick={goApp}
              className="btn btn-primary btn-cta"
              style={{ padding: '10px 18px', fontSize: 14 }}
            >
              Open App <ArrowRight size={15} />
            </a>
          </div>
        </div>
      </nav>

      {/* ---------- HERO ---------- */}
      <section className="hero" id="top">
        <div className="container">
          <div className="hero-badge">
            <Star size={13} fill="currentColor" /> #1 Marketplace in the Philippines
          </div>
          <h1>
            Your world of<br />
            <span className="accent">great deals.</span>
          </h1>
          <p className="hero-sub">
            Buy from verified sellers, pay with Xwallet, and get same-day
            delivery. All in one modern, easy-to-use app.
          </p>
          <div className="hero-cta">
            <a
              href={APP_URL}
              onClick={goApp}
              className="btn btn-primary btn-lg"
            >
              Open XMARKET App <ArrowRight size={18} />
            </a>
          </div>
          <div className="hero-note">Free to use · No credit card required</div>

          {/* Stats */}
          <div className="stats">
            <div className="stat">
              <div className="stat-val">{stats.products}</div>
              <div className="stat-lbl">Products listed</div>
            </div>
            <div className="stat">
              <div className="stat-val">{stats.users}</div>
              <div className="stat-lbl">Happy users</div>
            </div>
            <div className="stat">
              <div className="stat-val">{stats.orders}</div>
              <div className="stat-lbl">Orders placed</div>
            </div>
            <div className="stat">
              <div className="stat-val">24/7</div>
              <div className="stat-lbl">Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- FEATURES ---------- */}
      <section className="features" id="features">
        <div className="container">
          <div className="section-head">
            <h2>Everything you need to buy and sell.</h2>
            <p>Built for speed, safety, and simplicity. No clutter, no gimmicks.</p>
          </div>
          <div className="features-grid">
            {FEATURES.map((f) => {
              const Icon = f.icon;
              return (
                <div key={f.title} className="feature">
                  <div className="feature-icon" style={{ background: f.color }}>
                    <Icon size={22} />
                  </div>
                  <h3>{f.title}</h3>
                  <p>{f.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ---------- SCREENSHOTS ---------- */}
      <section className="screens" id="screens">
        <div className="container">
          <div className="section-head">
            <h2>A shopping experience that feels native.</h2>
            <p>Fast, fluid, and beautifully designed. Install it as an app on any device.</p>
          </div>
          <div className="screens-grid">
            <div className="screen-mock">
              <div className="screen-inner">Home feed<br />with trending products</div>
            </div>
            <div className="screen-mock">
              <div className="screen-inner">Product details<br />with variants & images</div>
            </div>
            <div className="screen-mock">
              <div className="screen-inner">Xwallet<br />balance & top-ups</div>
            </div>
            <div className="screen-mock">
              <div className="screen-inner">Checkout<br />in under 10 seconds</div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- TRUST ---------- */}
      <section>
        <div className="container">
          <div className="section-head">
            <h2>Trusted by buyers. Loved by sellers.</h2>
            <p>Every transaction is protected from start to finish.</p>
          </div>
          <div className="trust">
            <div className="trust-item">
              <div className="icon"><ShieldCheck size={20} /></div>
              <div>
                <h4>Verified sellers</h4>
                <p>Identity-checked before listing</p>
              </div>
            </div>
            <div className="trust-item">
              <div className="icon"><Wallet size={20} /></div>
              <div>
                <h4>Secure payments</h4>
                <p>Instant Xwallet transactions</p>
              </div>
            </div>
            <div className="trust-item">
              <div className="icon"><CheckCircle2 size={20} /></div>
              <div>
                <h4>Buyer protection</h4>
                <p>Refunds if items aren't as described</p>
              </div>
            </div>
            <div className="trust-item">
              <div className="icon"><Headphones size={20} /></div>
              <div>
                <h4>Real support</h4>
                <p>Humans, not bots, 24/7</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- FAQ ---------- */}
      <section id="faq">
        <div className="container">
          <div className="section-head">
            <h2>Frequently asked questions</h2>
            <p>Everything you need to know about XMARKET.</p>
          </div>
          <div className="faq-list">
            {FAQ.map((item, i) => (
              <div key={item.q} className="faq-item">
                <button className="faq-q" onClick={() => setOpenFaq(openFaq === i ? -1 : i)}>
                  <span>{item.q}</span>
                  <ChevronDown
                    size={18}
                    style={{
                      transform: openFaq === i ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 0.2s',
                      flexShrink: 0,
                    }}
                  />
                </button>
                {openFaq === i && <div className="faq-a">{item.a}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- BIG CTA ---------- */}
      <section style={{ padding: '40px 0 80px' }}>
        <div className="big-cta">
          <h2>Ready to start shopping?</h2>
          <p>Join thousands of buyers and sellers already using XMARKET every day.</p>
          <a href={APP_URL} onClick={goApp} className="btn btn-primary btn-lg">
            Open XMARKET App <ArrowRight size={18} />
          </a>
        </div>
      </section>

      {/* ---------- FOOTER ---------- */}
      <footer>
        <div className="container">
          <div className="footer-inner">
            <div>
              <div className="logo" style={{ marginBottom: 12 }}>
                <div className="logo-mark">X</div>
                <span>XMARKET</span>
              </div>
              <p style={{ maxWidth: 260, fontSize: 13 }}>
                Your world of great deals. Shop from verified sellers, pay with Xwallet, get it fast.
              </p>
            </div>
            <div className="footer-col">
              <h5>Product</h5>
              <a href="#features">Features</a>
              <a href="#screens">Preview</a>
              <a href={APP_URL} onClick={goApp}>Open App</a>
            </div>
            <div className="footer-col">
              <h5>Support</h5>
              <a href="#faq">FAQ</a>
              <a href={APP_URL} onClick={goApp}>Contact</a>
            </div>
            <div className="footer-col">
              <h5>Legal</h5>
              <a href="#">Privacy</a>
              <a href="#">Terms</a>
            </div>
          </div>
          <div className="footer-bottom">
            © {new Date().getFullYear()} XMARKET. All rights reserved.
          </div>
        </div>
      </footer>
    </>
  );
}
