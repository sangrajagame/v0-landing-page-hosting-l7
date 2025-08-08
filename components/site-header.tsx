"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Zap, Menu, ArrowRight } from 'lucide-react'

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-neutral-950/60 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/50">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Brand */}
        <Link href="#" className="group inline-flex items-center gap-2" aria-label="HostingKilat beranda">
          <div className="relative overflow-hidden rounded-md bg-white/10 p-2 ring-1 ring-inset ring-white/20 backdrop-blur">
            <span className="pointer-events-none absolute inset-0 rounded-md opacity-0 transition-opacity group-hover:opacity-100" />
            <Zap className="h-5 w-5 text-emerald-400 transition-transform motion-safe:animate-pulse group-hover:rotate-12" />
          </div>
          <span className="text-lg font-semibold tracking-tight">HostingKilat</span>
        </Link>

        {/* Desktop nav */}
        <nav aria-label="Navigasi utama" className="hidden items-center gap-6 md:flex">
          <a className="text-sm text-white/80 transition-colors hover:text-white" href="#features">Fitur</a>
          <a className="text-sm text-white/80 transition-colors hover:text-white" href="#pricing">Harga</a>
          <a className="text-sm text-white/80 transition-colors hover:text-white" href="#testimonials">Testimoni</a>
          <a className="text-sm text-white/80 transition-colors hover:text-white" href="#faq">FAQ</a>
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden items-center gap-2 md:flex">
          <Button variant="ghost" className="text-white/80 hover:bg-white/10 hover:text-white">
            Masuk
          </Button>
          <Button className="bg-emerald-500 text-neutral-950 hover:bg-emerald-400">
            Mulai Gratis
          </Button>
        </div>

        {/* Mobile menu */}
        <MobileMenu />
      </div>
    </header>
  )
}

function MobileMenu() {
  return (
    <div className="md:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className="text-white hover:bg-white/10"
            aria-label="Buka menu navigasi"
          >
            <Menu className="h-5 w-5" />
            <span className="sr-only">Buka menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="w-80 border-white/10 bg-neutral-950 text-white">
          <SheetHeader>
            <SheetTitle className="flex items-center gap-2">
              <div className="rounded-md bg-white/10 p-2 ring-1 ring-inset ring-white/20">
                <Zap className="h-4 w-4 text-emerald-400 motion-safe:animate-pulse" />
              </div>
              <span>HostingKilat</span>
            </SheetTitle>
          </SheetHeader>

          <nav className="mt-6 flex flex-col gap-2" aria-label="Navigasi seluler">
            <a className="rounded-md px-3 py-2 text-sm text-white/90 hover:bg-white/10" href="#features">Fitur</a>
            <a className="rounded-md px-3 py-2 text-sm text-white/90 hover:bg-white/10" href="#pricing">Harga</a>
            <a className="rounded-md px-3 py-2 text-sm text-white/90 hover:bg-white/10" href="#testimonials">Testimoni</a>
            <a className="rounded-md px-3 py-2 text-sm text-white/90 hover:bg-white/10" href="#faq">FAQ</a>
          </nav>

          <div className="mt-6 flex flex-col gap-2">
            <Button variant="ghost" className="w-full justify-start text-white hover:bg-white/10">
              Masuk
            </Button>
            <Button className="w-full bg-emerald-500 text-neutral-950 hover:bg-emerald-400">
              Mulai Gratis
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          <div className="mt-8 border-t border-white/10 pt-4 text-xs text-white/50">
            © {new Date().getFullYear()} HostingKilat
          </div>
        </SheetContent>
      </Sheet>
    </div>
  )
}
