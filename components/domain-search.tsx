"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function DomainSearch() {
  return (
    <form
      aria-label="Cari dan cek domain"
      className="group relative"
      onSubmit={(e) => {
        e.preventDefault()
        const form = e.currentTarget as HTMLFormElement
        const input = form.querySelector("input[name='domain']") as HTMLInputElement | null
        if (input) {
          alert(`Mencari domain: ${input.value}`)
        }
      }}
    >
      <div className="relative rounded-xl border border-white/10 bg-white/5 p-2 backdrop-blur">
        <div className="flex items-center gap-2">
          <div className="hidden items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/70 sm:flex">
            https://
          </div>
          <Input
            name="domain"
            placeholder="namadomain Anda"
            className="flex-1 border-0 bg-transparent text-white placeholder:text-white/40 focus-visible:ring-0 focus-visible:ring-offset-0"
            defaultValue="contoh"
            aria-label="Nama domain"
          />
          <div className="hidden items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-2 py-2 text-sm text-white/80 sm:flex">
            .com
          </div>
          <Button type="submit" className="bg-emerald-500 text-neutral-950 hover:bg-emerald-400">
            Cek Domain
          </Button>
        </div>
      </div>
    </form>
  )
}
