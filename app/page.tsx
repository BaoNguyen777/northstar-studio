import Image from "next/image";
import { ArrowDown, ArrowRight, ArrowUpRight, Check, Layers3, MonitorSmartphone, Sparkles, Shapes } from "lucide-react";

const services = [
  { no: "01", icon: Shapes, title: "Brand identity", lead: "Give your business a look people recognise — and remember.", items: ["Brand strategy & positioning", "Logo suite and visual language", "Typography, colour and art direction", "Brand guideline and launch assets"], tag: "BUILD A DISTINCT BRAND" },
  { no: "02", icon: MonitorSmartphone, title: "Website design", lead: "Turn attention into enquiries with a website made around your offer.", items: ["Website structure & content direction", "Responsive UI/UX design", "Next.js website development", "Launch, optimisation & handover"], tag: "MAKE YOUR DIGITAL HOME" },
  { no: "03", icon: Layers3, title: "Campaign & content", lead: "Create a consistent visual world across every customer touchpoint.", items: ["Campaign concept & art direction", "Social media visual system", "Product and service presentation", "Digital launch materials"], tag: "MAKE THE MESSAGE LAND" },
];

const sectors = [
  { title: "Hospitality & stays", desc: "Hotels, resorts, homestays and destinations.", image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1200&q=88&fit=crop", no: "01" },
  { title: "Food & beverage", desc: "Restaurants, cafés, bars and emerging food brands.", image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=1200&q=88&fit=crop", no: "02" },
  { title: "Lifestyle & retail", desc: "Products, boutiques and modern consumer brands.", image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&q=88&fit=crop", no: "03" },
];

const deliverables = [
  { n: "01", title: "A brand people can recognise", text: "A clear position, memorable identity and consistent visual language." },
  { n: "02", title: "A website that does its job", text: "A considered customer journey that explains your offer and drives action." },
  { n: "03", title: "Marketing that feels connected", text: "Campaign visuals and content assets that make every channel feel like one brand." },
];

export default function NorthstarStudioPage() {
  return (
    <main id="top" className="min-h-screen overflow-hidden bg-[#f4f1e9] text-[#20251f] selection:bg-[#d7fa70] selection:text-[#20251f]">
      <header className="site-header sticky top-0 z-50 border-b border-black/10 bg-[#f4f1e9]/95 backdrop-blur-xl">
        <div className="mx-auto flex h-[72px] max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-14">
          <a href="#top" className="text-[13px] font-black tracking-[-.07em]">NORTHSTAR<span className="ml-1 text-[#91a84b]">®</span><span className="ml-2 hidden text-[8px] font-medium tracking-[.2em] text-[#7a8074] sm:inline">CREATIVE STUDIO</span></a>
          <nav className="hidden items-center gap-8 text-[9px] tracking-[.15em] md:flex"><a href="#services">SERVICES</a><a href="#sectors">WHO WE HELP</a><a href="#approach">OUR APPROACH</a></nav>
          <a href="#contact" className="inline-flex items-center gap-3 bg-[#d7fa70] px-4 py-3 text-[9px] font-semibold tracking-[.12em] transition hover:bg-[#c4e85b]">LET'S TALK <ArrowUpRight size={14}/></a>
        </div>
      </header>

      <section className="hero relative isolate min-h-[690px] overflow-hidden bg-[#25332b] text-white lg:min-h-[790px]">
        <Image src="https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=2600&q=92&fit=crop" alt="Creative brand identity layouts and colourful design materials" fill priority unoptimized sizes="100vw" className="hero-image object-cover"/>
        <div className="hero-overlay absolute inset-0"/>
        <div className="relative mx-auto flex min-h-[690px] max-w-[1440px] flex-col justify-between px-5 pb-10 pt-20 sm:px-8 lg:min-h-[790px] lg:px-14 lg:pb-14 lg:pt-28">
          <div className="flex items-center gap-3 text-[8px] tracking-[.2em] text-white/75"><span className="h-2 w-2 rounded-full bg-[#d7fa70]"/> BRANDING / WEB DESIGN / CREATIVE CAMPAIGNS</div>
          <div className="grid gap-10 lg:grid-cols-[1.2fr_.55fr] lg:items-end">
            <div><p className="mb-7 text-[9px] tracking-[.2em] text-[#d7fa70]">MAKE YOUR BUSINESS IMPOSSIBLE TO MISS</p><h1 className="max-w-[980px] text-[clamp(4.3rem,11vw,10.5rem)] font-semibold leading-[.78] tracking-[-.095em]">Build a brand.<br/>Grow your <span className="font-serif font-normal italic text-[#d7fa70]">business.</span></h1></div>
            <div className="max-w-sm pb-2 lg:justify-self-end"><p className="text-[14px] leading-7 text-white/80">We create brand identities, high-performing websites and campaign visuals for businesses ready to look sharper, communicate clearly and grow.</p><a href="#services" className="mt-8 inline-flex items-center gap-7 border-b border-white/70 pb-3 text-[9px] tracking-[.15em] hover:gap-10">EXPLORE OUR SERVICES <ArrowDown size={14}/></a></div>
          </div>
          <div className="flex flex-wrap items-end justify-between gap-5 border-t border-white/35 pt-5 text-[8px] tracking-[.16em] text-white/75"><span>INDEPENDENT CREATIVE STUDIO</span><span>STRATEGY WITH STYLE. DESIGN WITH PURPOSE.</span><span>AVAILABLE FOR SELECT PROJECTS ↗</span></div>
        </div>
        <div className="hero-stamp absolute right-8 top-28 hidden h-28 w-28 rotate-12 items-center justify-center rounded-full border border-white/60 text-center text-[8px] leading-4 tracking-[.17em] text-white lg:flex">THINK<br/>MAKE<br/>GROW<br/>✳</div>
      </section>

      <section className="mx-auto grid max-w-[1440px] gap-10 px-5 py-20 sm:px-8 lg:grid-cols-[.8fr_1.2fr] lg:px-14 lg:py-28">
        <div><p className="eyebrow">01 / WHAT WE DO</p><h2 className="editorial-heading mt-5 max-w-lg text-5xl leading-[.94] tracking-[-.06em] sm:text-7xl">Good design.<br/><em>Real business</em><br/>value.</h2></div>
        <div className="max-w-2xl lg:justify-self-end"><p className="text-xl leading-8 tracking-[-.025em] sm:text-2xl">Your brand is more than a logo. It is how people discover you, understand what you offer and decide to choose you.</p><p className="mt-6 max-w-xl text-[12px] leading-7 text-[#72766b]">Northstar brings strategy, design and development together — so your brand looks consistent, your website works smoothly and your marketing has a clear direction.</p></div>
      </section>

      <section id="services" className="bg-[#20251f] px-5 py-20 text-[#f4f1e9] sm:px-8 lg:px-14 lg:py-28">
        <div className="mx-auto max-w-[1312px]"><div className="flex flex-wrap items-end justify-between gap-7"><div><p className="eyebrow !text-[#d7fa70]">02 / SERVICES YOU CAN BOOK</p><h2 className="mt-5 text-5xl font-semibold leading-[.9] tracking-[-.07em] sm:text-7xl">What your business<br/><span className="font-serif font-normal italic text-[#d7fa70]">needs next.</span></h2></div><p className="max-w-xs text-[11px] leading-6 text-white/55">Start with one service or bring us in to shape the complete brand experience.</p></div>
          <div className="mt-14 grid gap-px bg-white/15 md:grid-cols-3">{services.map((s)=>{const Icon=s.icon;return <article key={s.no} className="flex min-h-[470px] flex-col bg-[#20251f] p-6 sm:p-8"><div className="flex items-center justify-between"><span className="text-[9px] tracking-[.17em] text-[#d7fa70]">{s.no} / OFFERING</span><Icon size={22} strokeWidth={1.2} className="text-[#d7fa70]"/></div><h3 className="editorial-heading mt-12 text-4xl leading-[.95]">{s.title}</h3><p className="mt-5 min-h-[60px] text-[12px] leading-6 text-white/60">{s.lead}</p><div className="my-8 border-t border-white/15 pt-5"><p className="text-[8px] tracking-[.18em] text-white/40">WHAT YOU GET</p><ul className="mt-4 space-y-3">{s.items.map(item=><li key={item} className="flex gap-2 text-[10px] leading-5 text-white/80"><Check size={13} className="mt-0.5 shrink-0 text-[#d7fa70]"/>{item}</li>)}</ul></div><a href="#contact" className="mt-auto inline-flex items-center justify-between border-t border-white/20 pt-5 text-[8px] tracking-[.15em] text-[#d7fa70]">{s.tag}<ArrowUpRight size={16}/></a></article>})}</div>
        </div>
      </section>

      <section id="sectors" className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 lg:px-14 lg:py-28">
        <div className="flex flex-wrap items-end justify-between gap-6"><div><p className="eyebrow">03 / INDUSTRIES WE UNDERSTAND</p><h2 className="editorial-heading mt-5 text-5xl leading-[.9] tracking-[-.06em] sm:text-7xl">Made for businesses<br/><em>with ambition.</em></h2></div><p className="max-w-xs text-[11px] leading-6 text-[#72766b]">We focus on customer-facing businesses where the experience, the story and the visual impression matter.</p></div>
        <div className="mt-12 grid gap-5 md:grid-cols-3">{sectors.map((s)=><article key={s.no} className="sector-card group"><div className="relative aspect-[.92/1] overflow-hidden bg-[#d9d9cf]"><Image src={s.image} alt={s.title} fill unoptimized sizes="(max-width: 768px) 100vw, 33vw" className="object-cover transition duration-700 group-hover:scale-105"/><span className="absolute left-4 top-4 bg-[#f4f1e9] px-3 py-2 text-[8px] tracking-[.15em]">{s.no} / SECTOR</span><span className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"/></div><div className="flex items-start justify-between gap-4 border-b border-[#c9cdc1] py-5"><div><h3 className="editorial-heading text-3xl">{s.title}</h3><p className="mt-2 text-[10px] leading-5 text-[#72766b]">{s.desc}</p></div><ArrowUpRight size={18} className="mt-1 shrink-0 transition group-hover:-translate-y-1 group-hover:translate-x-1"/></div></article>)}</div>
      </section>

      <section id="approach" className="bg-[#e5e8dd] px-5 py-20 sm:px-8 lg:px-14 lg:py-28"><div className="mx-auto grid max-w-[1312px] gap-12 lg:grid-cols-[.8fr_1.2fr]"><div><p className="eyebrow">04 / THE RESULT</p><h2 className="editorial-heading mt-5 text-5xl leading-[.92] tracking-[-.06em] sm:text-7xl">Not just<br/>something<br/><em>beautiful.</em></h2><p className="mt-7 max-w-sm text-[12px] leading-6 text-[#6e776b]">Every decision should make your business easier to recognise, easier to understand and easier to choose.</p></div><div className="grid sm:grid-cols-2">{deliverables.map(d=><article key={d.n} className="border-t border-[#c5cbbd] py-7 sm:px-5"><span className="text-[9px] tracking-[.17em] text-[#82934a]">{d.n} / OUTCOME</span><h3 className="editorial-heading mt-7 text-3xl leading-tight">{d.title}</h3><p className="mt-3 max-w-xs text-[11px] leading-6 text-[#6e776b]">{d.text}</p></article>)}</div></div></section>

      <section id="contact" className="contact-section relative overflow-hidden bg-[#d7fa70] px-5 py-20 sm:px-8 lg:px-14 lg:py-28"><div className="contact-orbit absolute -right-24 -top-40 h-[520px] w-[520px] rounded-full border border-[#20251f]/15"/><div className="relative mx-auto max-w-[1312px]"><p className="flex items-center gap-2 text-[8px] font-semibold tracking-[.2em]"><Sparkles size={15}/> READY TO MAKE YOUR NEXT MOVE?</p><div className="mt-9 grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end"><div><h2 className="max-w-5xl text-[clamp(4rem,10vw,9.5rem)] font-semibold leading-[.8] tracking-[-.095em]">Let's build<br/>what's <span className="font-serif font-normal italic">next.</span></h2><p className="mt-8 max-w-lg text-[12px] leading-6 text-[#465238]">Tell us about your business, the product you want to promote or the experience you want to create. We'll help you find the right direction.</p></div><a href="mailto:?subject=Project%20enquiry" className="inline-flex items-center gap-6 border-b border-[#20251f] pb-3 text-[9px] font-semibold tracking-[.15em] transition hover:gap-9">DISCUSS YOUR PROJECT <ArrowUpRight size={18}/></a></div></div></section>

      <footer className="bg-[#20251f] px-5 py-8 text-[8px] tracking-[.16em] text-white/50 sm:px-8 lg:px-14"><div className="mx-auto flex max-w-[1312px] flex-wrap items-center justify-between gap-5"><span className="text-[12px] font-black tracking-[-.05em] text-white">NORTHSTAR®</span><span>BRAND / DIGITAL / CAMPAIGN</span><div className="flex gap-5"><a href="#services" className="hover:text-white">SERVICES</a><a href="#sectors" className="hover:text-white">INDUSTRIES</a><a href="#contact" className="hover:text-white">CONTACT</a></div><span>© 2026 NORTHSTAR STUDIO</span></div></footer>
    </main>
  );
}
