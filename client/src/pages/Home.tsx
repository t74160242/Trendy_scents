/* Sunlit Atelier style: warm editorial luxury, deep plum #510D41, ivory space, asymmetrical magazine layout, tactile motion. */
import { useMemo, useState } from "react";
import { ArrowUpRight, ChevronDown, Instagram, Menu, Phone, Search, Sparkles, X } from "lucide-react";

const logo = "/manus-storage/logo_4bccf758.png";
const heroBottle = "/manus-storage/hero-bottle_294bc794.png";
const atelierTexture = "/manus-storage/atelier-texture_fff16b18.jpg";
const sweetStillLife = "/manus-storage/sweet-still-life_a0900796.jpg";
const freshStillLife = "/manus-storage/fresh-still-life_99d57e74.jpg";
const brandSymbol = "/manus-storage/brand-symbol_f36fa801.png";

type ScentFamily = "All" | "Sweet" | "Elegant" | "Fresh" | "Bold & Sweet";

const products = [
  { name: "Mango Temptation", family: "Sweet", note: "Fruity · Playful · Warm", price: "KSH 1,200", tone: "blush" },
  { name: "Valentino Born in Roma", family: "Elegant", note: "Floral · Refined · Modern", price: "KSH 1,200", tone: "cream" },
  { name: "Blue Ferrari", family: "Fresh", note: "Crisp · Aquatic · Clean", price: "KSH 850", tone: "aqua" },
  { name: "Black Opium", family: "Bold & Sweet", note: "Dark floral · Addictive", price: "KSH 1,850", tone: "plum" },
  { name: "Gucci Flora", family: "Elegant", note: "Soft floral · Timeless", price: "KSH 1,200", tone: "lavender" },
  { name: "Sauvage Dior", family: "Fresh", note: "Citrus · Airy · Confident", price: "KSH 1,850", tone: "aqua" },
];

const families: { label: ScentFamily; description: string; accent: string }[] = [
  { label: "Sweet", description: "Soft, romantic, and made for a little extra glow.", accent: "pink" },
  { label: "Elegant", description: "Refined florals and timeless signatures.", accent: "gold" },
  { label: "Fresh", description: "Clean, crisp, and ready for the day ahead.", accent: "aqua" },
  { label: "Bold & Sweet", description: "Daring depth for nights that linger.", accent: "plum" },
];

export default function Home() {
  const [activeFamily, setActiveFamily] = useState<ScentFamily>("All");
  const [menuOpen, setMenuOpen] = useState(false);
  const visibleProducts = useMemo(() => activeFamily === "All" ? products : products.filter((product) => product.family === activeFamily), [activeFamily]);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <main className="site-shell">
      <div className="announcement">Designer-inspired oil perfumes · Nairobi & beyond <span>✦</span> Personal scent guidance available</div>
      <header className="site-header">
        <a className="brand-lockup" href="#top" aria-label="Trendy Scents Perfumes home">
          <img src={logo} alt="Trendy Scents Perfumes" />
        </a>
        <nav className={menuOpen ? "main-nav is-open" : "main-nav"} aria-label="Primary navigation">
          <button onClick={() => scrollTo("discover")}>Discover</button>
          <button onClick={() => scrollTo("edit")}>The edit</button>
          <button onClick={() => scrollTo("prices")}>Pricing</button>
          <a href="https://www.instagram.com/trendy.scents.perfumes" target="_blank" rel="noreferrer">Instagram <ArrowUpRight size={14} /></a>
        </nav>
        <div className="header-actions">
          <button className="icon-button" aria-label="Search" onClick={() => scrollTo("edit")}><Search size={18} /></button>
          <a className="header-contact" href="tel:0788545836">Enquire <ArrowUpRight size={16} /></a>
          <button className="menu-toggle" aria-label={menuOpen ? "Close navigation" : "Open navigation"} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X size={22} /> : <Menu size={22} />}</button>
        </div>
      </header>

      <section id="top" className="hero-section">
        <div className="hero-copy">
          <p className="eyebrow"><span className="eyebrow-line" />Find your scent personality</p>
          <h1>Wear it.<br /><em>Own the room.</em></h1>
          <p className="hero-intro">A considered collection of designer-inspired oil perfumes, blended for the moments you want to remember.</p>
          <div className="hero-ctas">
            <button className="button plum-button" onClick={() => scrollTo("discover")}>Explore the scents <ArrowUpRight size={17} /></button>
            <a className="text-link" href="https://wa.me/254788545836" target="_blank" rel="noreferrer">Talk to a scent guide <ArrowUpRight size={15} /></a>
          </div>
          <div className="hero-meta"><span>01 / 04</span><span className="meta-rule" /><span>Trendy Scents, Nairobi</span></div>
        </div>
        <div className="hero-visual">
          <div className="hero-image-wrap"><img src={heroBottle} alt="Escada Taj Sunset perfume bottle on soft silk" /></div>
          <div className="hero-caption"><span>Featured note</span><strong>Escada Taj Sunset</strong><small>Female · 30 ml</small></div>
          <div className="hero-stamp"><img src={brandSymbol} alt="" /><span>Find<br />your<br />signature</span></div>
        </div>
      </section>

      <section id="discover" className="discover-section">
        <div className="section-heading"><p className="eyebrow">A scent for every self</p><h2>Which way<br /><em>will you feel?</em></h2><p className="section-note">From sun-warmed fruit to dark florals, follow the feeling. Our scent families make finding your next signature effortless.</p></div>
        <div className="family-grid">
          {families.map((family, index) => <button key={family.label} className={`family-card ${family.accent}`} onClick={() => { setActiveFamily(family.label); scrollTo("edit"); }}>
            <span className="family-number">0{index + 1}</span><span className="family-arrow"><ArrowUpRight size={19} /></span><h3>{family.label}</h3><p>{family.description}</p><span className="family-link">Explore family</span>
          </button>)}
        </div>
      </section>

      <section className="atelier-strip" style={{ backgroundImage: `url(${atelierTexture})` }}><div className="atelier-overlay" /><div className="atelier-content"><p className="eyebrow light">The Trendy Scents ritual</p><h2>One small bottle.<br /><em>A whole new mood.</em></h2><p>Made to move with you — easy to carry, generous on the skin, and personal enough to become yours.</p><button className="button cream-button" onClick={() => scrollTo("prices")}>See the sizes <ArrowUpRight size={17} /></button></div><div className="atelier-mark">TS<span>✦</span></div></section>

      <section id="edit" className="edit-section">
        <div className="edit-intro"><div><p className="eyebrow">The scent edit</p><h2>Meet your<br /><em>next signature.</em></h2></div><p className="section-note">Small-batch energy, thoughtful selection. Browse by personality, then message us for a personal recommendation.</p></div>
        <div className="filter-row" role="tablist" aria-label="Filter by scent family">{(["All", ...families.map((family) => family.label)] as ScentFamily[]).map((family) => <button key={family} className={activeFamily === family ? "filter active" : "filter"} onClick={() => setActiveFamily(family)}>{family}</button>)}</div>
        <div className="product-layout"><div className="product-feature"><img src={activeFamily === "Fresh" ? freshStillLife : sweetStillLife} alt="Curated perfume bottles and scent accents" /><div className="feature-label"><span>Editor’s note</span><strong>{activeFamily === "All" ? "Soft things, strong presence." : `${activeFamily}, your way.`}</strong></div></div><div className="product-list">{visibleProducts.map((product, index) => <article className="product-row" key={product.name}><span className="product-index">0{index + 1}</span><div className={`product-dot ${product.tone}`} /><div className="product-info"><h3>{product.name}</h3><p>{product.note}</p></div><strong className="product-price">{product.price}</strong><a className="round-arrow" href="https://wa.me/254788545836" target="_blank" rel="noreferrer" aria-label={`Enquire about ${product.name}`}><ArrowUpRight size={16} /></a></article>)}</div></div>
      </section>

      <section id="prices" className="price-section"><div className="price-copy"><p className="eyebrow light">The little luxury</p><h2>Find your<br /><em>right size.</em></h2><p>Keep one in your bag, one by your bedside, and one for the plans you haven’t made yet.</p><div className="price-contact"><Phone size={16} /><a href="tel:0788545836">0788 545 836</a></div></div><div className="price-table"><div className="price-head"><span>Size</span><span>Good for</span><span>Price</span></div><div className="price-line"><strong>20ML</strong><span>Try a new mood</span><b>KSH 850</b></div><div className="price-line featured"><strong>30ML</strong><span>Your everyday signature</span><b>KSH 1,200</b></div><div className="price-line"><strong>50ML</strong><span>Keep the feeling close</span><b>KSH 1,850</b></div><a className="price-cta" href="https://wa.me/254788545836" target="_blank" rel="noreferrer">Order or ask for a recommendation <ArrowUpRight size={17} /></a></div></section>

      <footer className="site-footer"><div className="footer-brand"><img src={logo} alt="Trendy Scents Perfumes" /><p>Designer-inspired oil perfumes<br />for every version of you.</p></div><div className="footer-links"><span>Follow the feeling</span><a href="https://www.instagram.com/trendy.scents.perfumes" target="_blank" rel="noreferrer"><Instagram size={15} /> @trendy.scents.perfumes</a><a href="tel:0788545836"><Phone size={15} /> 0788 545 836</a></div><div className="footer-note">© {new Date().getFullYear()} Trendy Scents Perfumes<br />Made in Kenya <Sparkles size={13} /></div></footer>
    </main>
  );
}
