import { useEffect, useState } from "react";
import {
  Search, ShoppingBag, Wallet, ShieldCheck, Truck, BadgeCheck, Zap, Store,
  Smartphone, Shirt, Gamepad2, Home, Sparkles, Headphones, Gift, ChevronDown,
  Menu, X, ArrowRight, Download, Tag, Percent, Package, Laptop, Baby, Utensils,
  Heart, Coins,
} from "lucide-react";
import { useParallax } from "./useParallax.js";

// EDIT THIS: the URL of your main XMARKET app
const APP_URL = "https://xmarket.onrender.com";

const categories = [
  { icon: Smartphone, name: "Mobile & Load" },
  { icon: Laptop, name: "Gadgets" },
  { icon: Shirt, name: "Fashion" },
  { icon: Gamepad2, name: "Gaming" },
  { icon: Home, name: "Home & Living" },
  { icon: Sparkles, name: "Beauty" },
  { icon: Headphones, name: "Audio" },
  { icon: Utensils, name: "Food" },
  { icon: Baby, name: "Kids" },
  { icon: Gift, name: "Gifts" },
  { icon: Heart, name: "Health" },
  { icon: Package, name: "Bundles" },
];

const hot = [
  { icon: Zap, tag: "Instant", title: "Top-ups & load", text: "Recharge in seconds with Xwallet." },
  { icon: Gamepad2, tag: "Hot", title: "Game credits", text: "Digital goods delivered right away." },
  { icon: Percent, tag: "Promo", title: "Seasonal promos", text: "Vouchers and bundle discounts." },
  { icon: Tag, tag: "New", title: "Fresh arrivals", text: "New products from verified sellers." },
];

const trust = [
  { icon: ShieldCheck, title: "Buyer protection", text: "Refund support if something goes wrong." },
  { icon: Wallet, title: "Secure Xwallet", text: "Pay and top up in one safe wallet." },
  { icon: BadgeCheck, title: "Verified sellers", text: "Every store is checked before it sells." },
  { icon: Truck, title: "Fast delivery", text: "Instant digital and quick shipped orders." },
];

const steps = [
  { n: "1", title: "Create your store", text: "Sign up and set up your shop in minutes." },
  { n: "2", title: "List your products", text: "Add products, bundles and promos easily." },
  { n: "3", title: "Get paid", text: "Receive orders and earnings in your Xwallet." },
];

const faqs = [
  ["What is XMARKET?", "XMARKET is an online marketplace where you can shop from verified sellers and pay with Xwallet."],
  ["What is Xwallet?", "Xwallet is the built-in wallet for paying, topping up and receiving earnings on XMARKET."],
  ["How do I start selling?", "Tap Start selling, create your store, add your products and you are ready to take orders."],
  ["Is it safe to buy?", "Sellers are verified and refund support is available if an order has a problem."],
  ["Can I install it on my phone?", "Yes. Use the Install app button to add XMARKET to your home screen."],
];

function Header() {
  const [open, setOpen] = useState(false);
  const go = () => setOpen(false);
  return (
    <header className="header">
      <div className="wrap header-in">
        <a className="logo" href="#top">
          <span className="logo-mark"><ShoppingBag size={20} /></span>
          <b>XMARKET</b>
        </a>
        <form className="search neu-in" action={APP_URL} method="get">
          <Search size={18} />
          <input name="q" placeholder="Search products, stores, top-ups" aria-label="Search" />
        </form>
        <nav className={"nav" + (open ? " open" : "")}>
          <a href="#categories" onClick={go}>Categories</a>
          <a href="#wallet" onClick={go}>Xwallet</a>
          <a href="#sell" onClick={go}>Sell</a>
          <a href="#faq" onClick={go}>Help</a>
          <a className="btn btn-primary btn-sm" href={APP_URL} onClick={go}>Log in</a>
        </nav>
        <button className="menu neu-btn" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="float neu f1" data-speed="-0.12"><Wallet size={30} /></div>
      <div className="float neu f2" data-speed="0.10"><ShoppingBag size={26} /></div>
      <div className="float neu f3" data-speed="-0.2"><Coins size={28} /></div>
      <div className="float neu f4" data-speed="0.16"><Gift size={24} /></div>
      <div className="wrap hero-in">
        <span className="pill neu-in"><Zap size={14} /> Shop smart. Pay with Xwallet.</span>
        <h1>Your world of <span className="accent">great deals</span></h1>
        <p className="lead">
          Shop from verified sellers, pay with Xwallet and get instant delivery.
          Or open your own store and start earning.
        </p>
        <div className="cta">
          <a className="btn btn-primary" href={APP_URL}>Shop now <ArrowRight size={18} /></a>
          <a className="btn btn-neu" href="#sell"><Store size={18} /> Start selling</a>
        </div>
      </div>
    </section>
  );
}

function Trust() {
  return (
    <section className="wrap trust">
      {trust.map((t) => (
        <div className="neu card trust-card" key={t.title}>
          <span className="ico neu-in"><t.icon size={22} /></span>
          <div><h3>{t.title}</h3><p>{t.text}</p></div>
        </div>
      ))}
    </section>
  );
}

function Categories() {
  return (
    <section className="wrap section" id="categories">
      <div className="sec-head"><h2>Shop by category</h2><a href={APP_URL}>See all <ArrowRight size={16} /></a></div>
      <div className="cat-grid">
        {categories.map((c) => (
          <a className="neu cat" href={APP_URL} key={c.name}>
            <span className="ico neu-in"><c.icon size={22} /></span>
            <span>{c.name}</span>
          </a>
        ))}
      </div>
    </section>
  );
}

function Hot() {
  return (
    <section className="wrap section">
      <div className="sec-head"><h2>Hot right now</h2><a href={APP_URL}>Browse <ArrowRight size={16} /></a></div>
      <div className="hot-grid">
        {hot.map((h) => (
          <a className="neu card hot" href={APP_URL} key={h.title}>
            <span className="badge">{h.tag}</span>
            <span className="ico neu-in"><h.icon size={24} /></span>
            <h3>{h.title}</h3>
            <p>{h.text}</p>
          </a>
        ))}
      </div>
    </section>
  );
}

function WalletSection() {
  return (
    <section className="wrap section wallet" id="wallet">
      <div className="float neu f5" data-speed="-0.1"><Coins size={26} /></div>
      <div className="wallet-text">
        <h2>Meet Xwallet</h2>
        <p>One wallet for everything on XMARKET. Top up, pay at checkout, claim promos and receive your seller earnings.</p>
        <ul className="checks">
          <li><BadgeCheck size={18} /> Fast top-ups</li>
          <li><BadgeCheck size={18} /> One-tap checkout</li>
          <li><BadgeCheck size={18} /> Promos and vouchers</li>
        </ul>
        <a className="btn btn-primary" href={APP_URL}>Open Xwallet <ArrowRight size={18} /></a>
      </div>
      <div className="neu wallet-card">
        <div className="wc-top"><Wallet size={22} /><b>Xwallet</b></div>
        <div className="wc-bal">Balance</div>
        <div className="wc-amt">₱ ••••••</div>
        <div className="wc-row"><span className="chip">Top up</span><span className="chip">Pay</span><span className="chip">Send</span></div>
      </div>
    </section>
  );
}

function Sell() {
  return (
    <section className="wrap section" id="sell">
      <div className="neu sell">
        <div className="float neu f6" data-speed="0.12"><Store size={26} /></div>
        <h2>Sell on XMARKET</h2>
        <p className="lead">Open your store, reach buyers and get paid straight to your Xwallet.</p>
        <div className="steps">
          {steps.map((s) => (
            <div className="neu-in step" key={s.n}>
              <span className="num">{s.n}</span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </div>
          ))}
        </div>
        <a className="btn btn-primary" href={APP_URL}>Open your store <ArrowRight size={18} /></a>
      </div>
    </section>
  );
}

function Install() {
  const [evt, setEvt] = useState(null);
  const [done, setDone] = useState(false);
  useEffect(() => {
    const h = (e) => { e.preventDefault(); setEvt(e); };
    window.addEventListener("beforeinstallprompt", h);
    window.addEventListener("appinstalled", () => setDone(true));
    return () => window.removeEventListener("beforeinstallprompt", h);
  }, []);
  const install = async () => {
    if (!evt) return;
    evt.prompt();
    await evt.userChoice;
    setEvt(null);
  };
  return (
    <section className="wrap section">
      <div className="neu install">
        <span className="ico neu-in big"><Smartphone size={30} /></span>
        <div className="install-text">
          <h2>Get the XMARKET app</h2>
          <p>{done ? "Installed. Find XMARKET on your home screen." : "Install it free on your phone for faster shopping. No app store needed."}</p>
        </div>
        {evt && !done ? (
          <button className="btn btn-primary" onClick={install}><Download size={18} /> Install app</button>
        ) : (
          <a className="btn btn-neu" href={APP_URL}>Open web app</a>
        )}
      </div>
    </section>
  );
}

function Faq() {
  return (
    <section className="wrap section narrow" id="faq">
      <h2 className="center">Frequently asked questions</h2>
      {faqs.map(([q, a]) => (
        <details className="neu faq" key={q}>
          <summary>{q}<ChevronDown size={18} /></summary>
          <p>{a}</p>
        </details>
      ))}
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="wrap foot-in">
        <div>
          <a className="logo" href="#top"><span className="logo-mark"><ShoppingBag size={18} /></span><b>XMARKET</b></a>
          <p className="muted">Your world of great deals.</p>
        </div>
        <div className="foot-links">
          <a href="#categories">Categories</a>
          <a href="#wallet">Xwallet</a>
          <a href="#sell">Sell</a>
          <a href="#faq">Help</a>
          <a href={APP_URL}>Open app</a>
        </div>
      </div>
      <div className="wrap copy">© {new Date().getFullYear()} XMARKET. All rights reserved.</div>
    </footer>
  );
}

export default function App() {
  useParallax();
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Trust />
        <Categories />
        <Hot />
        <WalletSection />
        <Sell />
        <Install />
        <Faq />
      </main>
      <Footer />
    </>
  );
}
