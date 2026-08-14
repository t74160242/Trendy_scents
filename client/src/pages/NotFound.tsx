/* Sunlit Atelier style: lost-page state in the same ivory/blush/plum fragrance world, serif-led, warm, and human. */
import { ArrowUpRight, Home, Sparkles } from "lucide-react";

const logo = "/manus-storage/logo_4bccf758.png";
const brandSymbol = "/manus-storage/brand-symbol_f36fa801.png";

export default function NotFound() {
  return (
    <main className="not-found-page">
      <div className="not-found-card">
        <div className="not-found-top"><img src={logo} alt="Trendy Scents Perfumes" /><span>TS <Sparkles size={13} /></span></div>
        <div className="not-found-main"><img className="not-found-symbol" src={brandSymbol} alt="" /><p className="eyebrow"><span className="eyebrow-line" />A little off the scent</p><h1>That page<br /><em>has evaporated.</em></h1><p className="not-found-copy">The link you followed has drifted away. Let’s get you back to the fragrance edit.</p><a className="button plum-button" href="/">Return to the atelier <Home size={15} /><ArrowUpRight size={15} /></a></div>
        <div className="not-found-bottom"><span>404 / Scent not found</span><span>Trendy Scents Perfumes · Nairobi</span></div>
      </div>
    </main>
  );
}
