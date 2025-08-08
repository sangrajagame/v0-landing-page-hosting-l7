import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Server, Globe, Shield, Zap, Database, Lock, Check, ArrowRight, Star, Clock, PhoneCall, DollarSign } from 'lucide-react'
import DomainSearch from "@/components/domain-search"
import PatternBackground from "@/components/pattern-background"

export default function Page() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-neutral-950 text-white">
      <PatternBackground />

      <Header />

      <main className="relative">
        <Hero />

        <section id="metrics" aria-label="Statistik layanan" className="container mx-auto px-4">
          <Metrics />
        </section>

        <section id="features" aria-label="Fitur unggulan" className="container mx-auto px-4">
          <Features />
        </section>

        <section id="pricing" aria-label="Paket harga" className="container mx-auto px-4">
          <Pricing />
        </section>

        <section id="testimonials" aria-label="Testimoni pelanggan" className="container mx-auto px-4">
          <Testimonials />
        </section>

        <section id="faq" aria-label="Pertanyaan umum" className="container mx-auto px-4">
          <FAQ />
        </section>

        <section aria-label="Ajak bertindak" className="container mx-auto px-4">
          <CTA />
        </section>
      </main>

      <Footer />
    </div>
  )
}

function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-neutral-950/60 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/50">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="#" className="group inline-flex items-center gap-2" aria-label="HostingKilat beranda">
          <div className="relative overflow-hidden rounded-md bg-white/10 p-2 ring-1 ring-inset ring-white/20 backdrop-blur">
            <span className="pointer-events-none absolute inset-0 rounded-md bg-emerald-500/10 opacity-0 transition-opacity group-hover:opacity-100" />
            <Zap className="h-5 w-5 text-emerald-400 transition-transform motion-safe:animate-pulse group-hover:rotate-12" />
          </div>
          <span className="text-lg font-semibold tracking-tight">HostingKilat</span>
        </Link>

        <nav aria-label="Navigasi utama" className="hidden items-center gap-6 md:flex">
          <a className="text-sm text-white/80 transition-colors hover:text-white" href="#features">
            Fitur
          </a>
          <a className="text-sm text-white/80 transition-colors hover:text-white" href="#pricing">
            Harga
          </a>
          <a className="text-sm text-white/80 transition-colors hover:text-white" href="#testimonials">
            Testimoni
          </a>
          <a className="text-sm text-white/80 transition-colors hover:text-white" href="#faq">
            FAQ
          </a>
        </nav>

        <div className="flex items-center gap-2">
          <Button variant="ghost" className="hidden text-white/80 hover:bg-white/10 hover:text-white md:inline-flex">
            Masuk
          </Button>
          <Button className="bg-emerald-500 text-neutral-950 hover:bg-emerald-400">
            Mulai Gratis
          </Button>
        </div>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section className="relative isolate">
      <div className="container mx-auto grid gap-10 px-4 py-20 md:grid-cols-2 md:gap-12 md:py-28">
        <div className="relative">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur">
            <Star className="h-3.5 w-3.5 text-amber-300" />
            Terpercaya oleh 10.000+ developer
          </div>

          <h1 className="mt-5 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
            Hosting super cepat untuk{" "}
            <span className="bg-gradient-to-r from-emerald-300 via-emerald-200 to-amber-200 bg-clip-text text-transparent">
              aplikasi &amp; website Anda
            </span>
          </h1>
          <p className="mt-4 text-base text-white/70 sm:text-lg">
            Dapatkan performa optimal, keamanan tingkat lanjut, dan dukungan 24/7. Skalakan tanpa repot dengan infrastruktur modern kami.
          </p>

          <div className="mt-8">
            <DomainSearch />
            <p className="mt-3 text-xs text-white/60">Coba gratis 14 hari. Tanpa kartu kredit.</p>
          </div>

          <ul className="mt-8 grid grid-cols-2 gap-3 text-sm text-white/80 sm:grid-cols-3">
            {[
              { icon: <Shield className="h-4 w-4 text-emerald-300" />, label: "Perlindungan DDoS" },
              { icon: <Clock className="h-4 w-4 text-emerald-300" />, label: "Uptime 99.99%" },
              { icon: <PhoneCall className="h-4 w-4 text-emerald-300" />, label: "Support 24/7" },
            ].map((item, idx) => (
              <li key={idx} className="flex items-center gap-2">
                <span className="inline-flex items-center justify-center rounded-md bg-white/5 p-1.5 ring-1 ring-inset ring-white/10 backdrop-blur">
                  {item.icon}
                </span>
                {item.label}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative">
          {/* Glass preview card */}
          <div className="relative rounded-2xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-xl">
            <div className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-br from-emerald-400/10 via-fuchsia-400/10 to-amber-400/10" />
            <div className="flex items-center gap-3">
              <div className="rounded-lg bg-white/10 p-3 ring-1 ring-inset ring-white/20">
                <Server className="h-6 w-6 text-emerald-300" />
              </div>
              <div>
                <p className="text-sm text-white/70">Cluster</p>
                <p className="font-medium">Premium NVMe Compute</p>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-4">
              {[
                { icon: <Zap className="h-4 w-4" />, label: "CPU", value: "8 vCPU" },
                { icon: <Database className="h-4 w-4" />, label: "Storage", value: "200 GB NVMe" },
                { icon: <Globe className="h-4 w-4" />, label: "Bandwidth", value: "Unmetered" },
                { icon: <Lock className="h-4 w-4" />, label: "TLS", value: "Free SSL" },
              ].map((s, idx) => (
                <div key={idx} className="rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-lg">
                  <div className="flex items-center gap-2 text-white/80">
                    <span className="text-emerald-300">{s.icon}</span>
                    <span className="text-sm">{s.label}</span>
                  </div>
                  <div className="mt-2 text-lg font-semibold">{s.value}</div>
                </div>
              ))}
            </div>

            <div className="mt-6 flex items-center justify-between rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-lg">
              <div>
                <p className="text-sm text-white/70">Performa</p>
                <p className="text-lg font-semibold">
                  {"< 200ms"} TTFB
                </p>
              </div>
              <Button className="bg-emerald-500 text-neutral-950 hover:bg-emerald-400">
                Benchmark
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Metrics() {
  const items = [
    { label: "Uptime SLA", value: "99.99%" },
    { label: "TTFB Global", value: "< 200ms" },
    { label: "Dukungan", value: "24/7" },
    { label: "Garansi", value: "30 Hari" },
  ]
  return (
    <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
      <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
        {items.map((m, i) => (
          <div key={i} className="text-center">
            <div className="text-2xl font-semibold">{m.value}</div>
            <div className="mt-1 text-xs uppercase tracking-wide text-white/60">{m.label}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

function Features() {
  const features = [
    {
      icon: <Zap className="h-5 w-5 text-emerald-300" />,
      title: "Performa Maksimal",
      desc: "Server NVMe dan optimasi jaringan untuk waktu muat ultra cepat.",
    },
    {
      icon: <Shield className="h-5 w-5 text-emerald-300" />,
      title: "Keamanan Berlapis",
      desc: "Firewall, TLS gratis, dan perlindungan DDoS terintegrasi.",
    },
    {
      icon: <Database className="h-5 w-5 text-emerald-300" />,
      title: "Backup Otomatis",
      desc: "Snapshot harian dan pemulihan instan kapan saja.",
    },
    {
      icon: <Globe className="h-5 w-5 text-emerald-300" />,
      title: "CDN Global",
      desc: "Edge caching di ratusan lokasi untuk jangkauan global.",
    },
    {
      icon: <Server className="h-5 w-5 text-emerald-300" />,
      title: "Skalabilitas Mudah",
      desc: "Naik-turun sumber daya tanpa downtime.",
    },
    {
      icon: <Lock className="h-5 w-5 text-emerald-300" />,
      title: "Privasi Terjaga",
      desc: "Isolasi kontainer dan enkripsi data end-to-end.",
    },
  ]
  return (
    <div className="py-16 sm:py-20">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Fitur unggulan</h2>
        <p className="mt-3 text-white/70">Segala yang Anda butuhkan untuk meluncurkan dan menskalakan proyek.</p>
      </div>
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((f, i) => (
          <div
            key={i}
            className="rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:border-white/20 hover:bg-white/10 hover:shadow-xl hover:shadow-emerald-500/10 backdrop-blur"
          >
            <div className="flex items-center gap-3">
              <div className="rounded-md bg-white/10 p-2 ring-1 ring-inset ring-white/20">{f.icon}</div>
              <h3 className="font-medium">{f.title}</h3>
            </div>
            <p className="mt-3 text-sm text-white/70">{f.desc}</p>
            <div className="mt-4 inline-flex items-center gap-1 text-sm text-emerald-300">
              Pelajari lebih lanjut
              <ArrowRight className="h-4 w-4" />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function Pricing() {
  const tiers = [
    {
      name: "Starter",
      price: "Rp 35.000/bln",
      highlight: false,
      features: ["1 Website", "10 GB NVMe", "Bandwidth Unmetered", "SSL Gratis", "Backup Mingguan"],
    },
    {
      name: "Pro",
      price: "Rp 95.000/bln",
      highlight: true,
      features: [
        "5 Website",
        "50 GB NVMe",
        "CDN Global",
        "Isolasi Kontainer",
        "Backup Harian",
        "Support Prioritas",
      ],
    },
    {
      name: "Business",
      price: "Rp 220.000/bln",
      highlight: false,
      features: [
        "Tak terbatas Website",
        "200 GB NVMe",
        "CDN + WAF",
        "Auto-Scaling",
        "Snapshot On-demand",
        "SLA 99.99%",
      ],
    },
  ]
  return (
    <div className="py-16 sm:py-20">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Paket harga fleksibel</h2>
        <p className="mt-3 text-white/70">Mulai kecil, tumbuh cepat — bayar sesuai kebutuhan Anda.</p>
      </div>

      <div className="mt-10 grid gap-4 md:grid-cols-3">
        {tiers.map((tier, idx) => (
          <Card
            key={idx}
            className={`relative border-white/10 bg-white/5 text-white backdrop-blur ${
              tier.highlight ? "ring-1 ring-emerald-400/30" : ""
            }`}
          >
            {tier.highlight && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full border border-white/20 bg-emerald-500 px-3 py-1 text-xs font-medium text-neutral-900 shadow">
                Populer
              </div>
            )}
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>{tier.name}</span>
                <DollarSign className="h-4 w-4 text-emerald-300" />
              </CardTitle>
              <div className="mt-2 text-2xl font-semibold">{tier.price}</div>
              <p className="text-sm text-white/60">Tagihan bulanan, bisa upgrade kapan saja.</p>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {tier.features.map((f, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="mt-1 rounded-md bg-white/10 p-1 ring-1 ring-inset ring-white/20">
                      <Check className="h-3.5 w-3.5 text-emerald-300" />
                    </span>
                    <span className="text-sm text-white/80">{f}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button
                className={`w-full ${
                  tier.highlight
                    ? "bg-emerald-500 text-neutral-950 hover:bg-emerald-400"
                    : "bg-white/10 text-white hover:bg-white/15"
                }`}
              >
                Pilih Paket
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

function Testimonials() {
  const items = [
    {
      name: "Raka Pratama",
      role: "Founder, DevLabs",
      quote: "Migrasi paling mulus yang pernah kami lakukan. Performa melonjak, biaya malah turun.",
      avatar: "/developer-customer-headshot.png",
    },
    {
      name: "Sinta Lestari",
      role: "CTO, Shoply",
      quote: "Dukungan 24/7 mereka kelas dunia. Respon cepat, solusi tepat — kapan pun dibutuhkan.",
      avatar: "/woman-cto-customer-headshot.png",
    },
    {
      name: "Bima Nugraha",
      role: "Indie Hacker",
      quote: "Time to first byte konsisten < 200ms. Sangat terasa di konversi landing page saya.",
      avatar: "/indie-hacker-customer-headshot.png",
    },
  ]
  return (
    <div className="py-16 sm:py-20">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Dicintai pelanggan</h2>
        <p className="mt-3 text-white/70">Dengarkan cerita mereka yang sudah beralih ke HostingKilat.</p>
      </div>
      <div className="mt-10 grid gap-4 md:grid-cols-3">
        {items.map((t, i) => (
          <div
            key={i}
            className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:border-white/20 hover:bg-white/10"
          >
            <div className="flex items-center gap-3">
              <Avatar className="h-10 w-10 ring-1 ring-white/20">
                <AvatarImage src={t.avatar || "/placeholder.svg"} alt={`Foto ${t.name}`} />
                <AvatarFallback>{t.name.slice(0, 2).toUpperCase()}</AvatarFallback>
              </Avatar>
              <div>
                <div className="font-medium">{t.name}</div>
                <div className="text-xs text-white/60">{t.role}</div>
              </div>
            </div>
            <p className="mt-4 text-sm text-white/80">{t.quote}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

function FAQ() {
  return (
    <div className="py-16 sm:py-20">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Pertanyaan umum</h2>
        <p className="mt-3 text-white/70">Semua yang sering ditanyakan, terjawab di sini.</p>
      </div>
      <div className="mx-auto mt-8 max-w-3xl">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-2 backdrop-blur">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1" className="border-white/10">
              <AccordionTrigger className="text-left text-white hover:no-underline">
                Apakah ada garansi uang kembali?
              </AccordionTrigger>
              <AccordionContent className="text-white/80">
                Ya, kami menyediakan garansi uang kembali 30 hari tanpa syarat. Cukup hubungi tim dukungan kami.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" className="border-white/10">
              <AccordionTrigger className="text-left text-white hover:no-underline">
                Bisakah upgrade paket kapan saja?
              </AccordionTrigger>
              <AccordionContent className="text-white/80">
                Tentu. Anda dapat upgrade atau downgrade paket kapan saja tanpa downtime.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3" className="border-white/10">
              <AccordionTrigger className="text-left text-white hover:no-underline">
                Apakah migrasi dari host lain gratis?
              </AccordionTrigger>
              <AccordionContent className="text-white/80">
                Ya, tim kami akan membantu migrasi penuh secara gratis untuk semua paket berbayar.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4" className="border-white/10">
              <AccordionTrigger className="text-left text-white hover:no-underline">
                Di mana lokasi server?
              </AccordionTrigger>
              <AccordionContent className="text-white/80">
                Kami memiliki beberapa lokasi di Asia, Eropa, dan Amerika untuk latensi rendah secara global.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  )
}

function CTA() {
  return (
    <div className="py-12">
      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur">
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-emerald-400/10 via-fuchsia-400/10 to-amber-400/10" />
        <h3 className="text-2xl font-semibold tracking-tight">Siap meluncur lebih cepat?</h3>
        <p className="mx-auto mt-3 max-w-2xl text-white/70">
          Deploy website dan aplikasi Anda dalam hitungan menit. Coba gratis sekarang.
        </p>
        <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button className="bg-emerald-500 text-neutral-950 hover:bg-emerald-400">
            Mulai Gratis
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button variant="ghost" className="text-white hover:bg-white/10">
            Lihat Demo
          </Button>
        </div>
      </div>
    </div>
  )
}

function Footer() {
  return (
    <footer className="mt-10 border-t border-white/10 bg-neutral-950/60 py-10 backdrop-blur">
      <div className="container mx-auto flex flex-col items-center justify-between gap-6 px-4 sm:flex-row">
        <div className="flex items-center gap-2">
          <div className="rounded-md bg-white/10 p-2 ring-1 ring-inset ring-white/20 backdrop-blur">
            <Zap className="h-4 w-4 text-emerald-300 motion-safe:animate-pulse" />
          </div>
          <span className="text-sm text-white/80">© {new Date().getFullYear()} HostingKilat</span>
        </div>
        <div className="flex items-center gap-6 text-sm text-white/70">
          <Link href="#" className="hover:text-white">
            Kebijakan Privasi
          </Link>
          <Link href="#" className="hover:text-white">
            Syarat Layanan
          </Link>
          <Link href="#" className="hover:text-white">
            Kontak
          </Link>
        </div>
      </div>
    </footer>
  )
}
