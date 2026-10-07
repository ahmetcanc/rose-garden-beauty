import { createFileRoute } from "@tanstack/react-router";
import {
  Sparkles,
  Phone,
  MapPin,
  Clock,
  Instagram,
  Star,
  Zap,
  Brush,
  Droplets,
  Eye,
  Scissors,
  Heart,
  Wand2,
} from "lucide-react";

import heroSalon from "@/assets/hero-salon.jpg";
import treatment from "@/assets/treatment.jpg";
import logo from "@/logo.jpeg";

const TITLE = "Rose Garden Beauty - Duzce Guzellik Merkezi";
const DESC =
  "Duzce'de lazer epilasyon, microblading, 17 asamali cilt bakimi, kalici makyaj ve kirpik lifting. Sadece kadinlara ozel hizmet. Randevu: 0542 656 60 34";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const PHONE = "0542 656 60 34";
const PHONE_HREF = "tel:+905426566034";
const WHATSAPP = "https://wa.me/905426566034";
const MAPS = "https://g.co/kgs/9FWpEkY";
const INSTAGRAM = "https://instagram.com/rosegarden.beauty";

const services = [
  {
    icon: Zap,
    name: "Lazer Epilasyon",
    desc: "Agrisiz, acisiz ve konforlu buz baslikli teknoloji ile kalici sonuclar.",
  },
  {
    icon: Brush,
    name: "Microblading",
    desc: "Yuz hatlariniza uyumlu, dogal gorunumlu kil teknigi kas tasarimi.",
  },
  {
    icon: Droplets,
    name: "17 Asamali Cilt Bakimi",
    desc: "Yapay zeka destekli cilt analizi ile kisiye ozel hydrafacial protokolu.",
  },
  {
    icon: Heart,
    name: "Bolgesel Incelme G8",
    desc: "G8 cihazi ile selulit gorunumunu azaltan bolgesel sikilastirma seanslari.",
  },
  {
    icon: Wand2,
    name: "Kalici Makyaj",
    desc: "Dudak renklendirme, eyeliner ve pudra kas ile her sabah hazir gorunum.",
  },
  {
    icon: Eye,
    name: "Kirpik Lifting",
    desc: "Kendi kirpiklerinize kalici kivrim ve hacim; rimel gerektirmeyen bakis.",
  },
  {
    icon: Sparkles,
    name: "Altin Oran Kas Alimi",
    desc: "Altin oran olcumuyle yuzunuze en uygun kas formunun belirlenmesi.",
  },
  {
    icon: Scissors,
    name: "Ben Alimi",
    desc: "Hijyenik ortamda, uzman eller ile guvenli ben ve leke uygulamalari.",
  },
];

const reviews = [
  {
    text: "Sena Hanim o kadar guler yuzlu ve ilgili ki, yaptigi isi asla bastan savma yapmiyor. Kirpik lifting de aldim, sonucu harika oldu. Gonul rahatligiyla tavsiye ederim.",
    name: "Esma Gul A.",
    source: "Google",
  },
  {
    text: "Lazerden cok memnun kaldim, neredeyse hic kalmadi. Kirpik liftingi de yaptirdim, rimel kullanmaya bile gerek kalmiyor. Cilt bakimiyla cildim isil isil oldu.",
    name: "Ebru A.",
    source: "Google",
  },
  {
    text: "Tereddutle gorusmeye gelmistim ama Sena Hanim'in ilgisi ve ozeniyle bu gecti. Salon oldukca temiz ve hijyenik; 2. seanstan itibaren gozle gorulur azaldi.",
    name: "Zeynep K.",
    source: "Google",
  },
  {
    text: "Lazer epilasyon icin gittim, cok memnun kaldim. Sena Hanim'in guler yuzu sayesinde cekinmeden islemlere girdim. Temiz ve hijyenik ortami icin tesekkurler.",
    name: "Mine Y.",
    source: "Google",
  },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Nav */}
      <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur">
        <div className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-4 sm:flex sm:justify-between">
          <a href="#top" className="min-w-0">
            <img
              src={logo}
              alt="Rose Garden Beauty"
              width={447}
              height={447}
              className="h-16 w-16 rounded-full object-cover sm:h-20 sm:w-20"
            />
          </a>
          <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
            <a href="#hizmetler" className="transition-colors hover:text-primary">
              Hizmetler
            </a>
            <a href="#hakkimizda" className="transition-colors hover:text-primary">
              Hakkimizda
            </a>
            <a href="#yorumlar" className="transition-colors hover:text-primary">
              Yorumlar
            </a>
            <a href="#iletisim" className="transition-colors hover:text-primary">
              Iletisim
            </a>
          </nav>
          <a
            href={PHONE_HREF}
            className="shrink-0 rounded-full bg-primary px-5 py-2.5 text-xs tracking-[0.15em] text-primary-foreground uppercase transition-opacity hover:opacity-90"
          >
            Randevu
          </a>
        </div>
      </header>

      {/* Hero */}
      <section id="top" className="relative overflow-hidden">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 md:grid-cols-2 md:py-24">
          <div>
            <span className="section-label">Sadece kadinlara ozel | 2016'dan beri</span>
            <h1 className="mt-5 text-5xl leading-[1.05] text-foreground md:text-6xl">
              Guzelliginiz,
              <br />
              <em className="not-italic text-primary">bir gul bahcesi</em>
              <br />
              inceliginde.
            </h1>
            <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground">
              Duzce Camikebir'de lazer epilasyondan kalici makyaja, cilt bakimindan kas tasarimina
              kadar tum uygulamalar uzman ellerde ve hijyenik bir ortamda.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-primary px-7 py-3.5 text-xs tracking-[0.18em] text-primary-foreground uppercase transition-opacity hover:opacity-90"
              >
                WhatsApp'tan Randevu
              </a>
              <a
                href={PHONE_HREF}
                className="rounded-full border border-gold/50 px-7 py-3.5 text-xs tracking-[0.18em] text-foreground uppercase transition-colors hover:bg-accent"
              >
                {PHONE}
              </a>
            </div>
            <div className="mt-10 flex items-center gap-3 text-sm text-muted-foreground">
              <span className="flex gap-0.5 text-gold">
                {[0, 1, 2, 3, 4].map((i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </span>
              <span>4,8/5 - Google'da 105 degerlendirme</span>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-3 rounded-[3rem] bg-rose-soft/50" aria-hidden />
            <img
              src={heroSalon}
              alt="Rose Garden Beauty guzellik merkezi bakim odasi"
              width={1600}
              height={1200}
              className="relative aspect-4/3 w-full rounded-[2.5rem] object-cover"
            />
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="hizmetler" className="border-y border-border/60 bg-cream/60 py-20">
        <div className="mx-auto max-w-6xl px-5">
          <div className="text-center">
            <span className="section-label">Uygulamalarimiz</span>
            <h2 className="mt-4 text-4xl text-foreground md:text-5xl">Hizmetlerimiz</h2>
            <div className="gold-rule mx-auto mt-5" />
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s) => (
              <article key={s.name} className="soft-card rounded-2xl p-7">
                <s.icon className="h-6 w-6 text-primary" strokeWidth={1.4} />
                <h3 className="mt-5 text-xl text-foreground">{s.name}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="hakkimizda" className="py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 md:grid-cols-[0.9fr_1.1fr]">
          <img
            src={treatment}
            alt="Rose Garden Beauty'de profesyonel cilt bakimi uygulamasi"
            width={1200}
            height={1408}
            loading="lazy"
            className="aspect-4/5 w-full rounded-[2.5rem] object-cover"
          />
          <div>
            <span className="section-label">Hakkimizda</span>
            <h2 className="mt-4 text-4xl text-foreground md:text-5xl">
              Teknoloji ve ozenin bulustugu bir alan
            </h2>
            <div className="gold-rule mt-5" />
            <p className="mt-6 leading-relaxed text-muted-foreground">
              Rose Garden Beauty olarak en guncel bilgileri ve son teknoloji cihazlari takip ediyor,
              her uygulamayi kisiye ozel planliyoruz. Yapay zeka destekli cilt analiziyle cildinizin
              gercek ihtiyacini belirliyor, seans planinizi buna gore olusturuyoruz.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Salonumuz yalnizca kadinlara hizmet vermektedir. Tum uygulamalar randevu ile, tek
              kullanimlik malzemeler ve hijyen standartlarina tam uyum icerisinde gerceklestirilir.
            </p>
            <dl className="mt-10 grid grid-cols-3 gap-6 border-t border-border pt-8">
              {[
                ["10.6B", "Instagram takipci"],
                ["105", "Google yorumu"],
                ["4,8", "Ortalama puan"],
              ].map(([v, l]) => (
                <div key={l}>
                  <dt className="font-display text-3xl text-primary">{v}</dt>
                  <dd className="mt-1 text-xs tracking-wider text-muted-foreground uppercase">
                    {l}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section id="yorumlar" className="border-y border-border/60 bg-cream/60 py-20">
        <div className="mx-auto max-w-6xl px-5">
          <div className="text-center">
            <span className="section-label">Danisan Yorumlari</span>
            <h2 className="mt-4 text-4xl text-foreground md:text-5xl">Ne soyluyorlar?</h2>
            <div className="gold-rule mx-auto mt-5" />
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {reviews.map((r) => (
              <figure key={r.name} className="soft-card rounded-2xl p-8">
                <span className="flex gap-0.5 text-gold">
                  {[0, 1, 2, 3, 4].map((i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-current" />
                  ))}
                </span>
                <blockquote className="mt-5 font-display text-lg leading-relaxed text-foreground">
                  "{r.text}"
                </blockquote>
                <figcaption className="mt-6 text-xs tracking-[0.18em] text-muted-foreground uppercase">
                  {r.name} | {r.source}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="iletisim" className="py-20">
        <div className="mx-auto max-w-6xl px-5">
          <div className="text-center">
            <span className="section-label">Randevu &amp; Iletisim</span>
            <h2 className="mt-4 text-4xl text-foreground md:text-5xl">Sizi bekliyoruz</h2>
            <div className="gold-rule mx-auto mt-5" />
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            <a
              href={PHONE_HREF}
              className="soft-card rounded-2xl p-8 transition-colors hover:bg-accent"
            >
              <Phone className="h-5 w-5 text-primary" strokeWidth={1.4} />
              <h3 className="mt-5 text-xl">Telefon</h3>
              <p className="mt-2 text-sm text-muted-foreground">{PHONE}</p>
            </a>
            <a
              href={MAPS}
              target="_blank"
              rel="noreferrer"
              className="soft-card rounded-2xl p-8 transition-colors hover:bg-accent"
            >
              <MapPin className="h-5 w-5 text-primary" strokeWidth={1.4} />
              <h3 className="mt-5 text-xl">Adres</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Camikebir Mah. Mehmet Gosterisli Sok. Ozkan Cakar Is Merkezi No:5 Daire:14, 81020
                Duzce
              </p>
            </a>
            <div className="soft-card rounded-2xl p-8">
              <Clock className="h-5 w-5 text-primary" strokeWidth={1.4} />
              <h3 className="mt-5 text-xl">Calisma Saatleri</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Her gun 10:00 - 20:00
                <br />
                Randevu ile hizmet verilmektedir.
              </p>
            </div>
          </div>

          <div className="mt-8 overflow-hidden rounded-2xl border border-border">
            <iframe
              title="Rose Garden Guzellik Merkezi konum haritasi"
              src="https://www.google.com/maps?q=Camikebir%20Mah.%20Mehmet%20G%C3%B6steri%C5%9Fli%20Sok.%20No:5%20D%C3%BCzce&output=embed"
              className="h-80 w-full"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <footer className="border-t border-border/60 bg-cream/60 py-12">
        <div className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-6 px-5 sm:flex sm:justify-between">
          <div className="min-w-0">
            <img
              src={logo}
              alt="Rose Garden Beauty"
              width={447}
              height={447}
              loading="lazy"
              className="h-24 w-24 rounded-full object-cover"
            />
            <p className="mt-1 text-xs text-muted-foreground">
              (c) {new Date().getFullYear()} | Duzce guzellik merkezi
            </p>
          </div>
          <a
            href={INSTAGRAM}
            target="_blank"
            rel="noreferrer"
            className="flex shrink-0 items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
          >
            <Instagram className="h-4 w-4" />
            @rosegarden.beauty
          </a>
        </div>
      </footer>
    </div>
  );
}
