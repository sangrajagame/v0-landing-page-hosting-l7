import PatternBackground from "@/components/pattern-background"

export default function Loading() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-neutral-950 text-white">
      {/* Patterned background */}
      <PatternBackground />

      <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-neutral-950/60 backdrop-blur">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-md bg-white/10 ring-1 ring-inset ring-white/20" />
            <div className="h-4 w-28 rounded bg-white/10" />
          </div>
          <div className="hidden gap-4 md:flex">
            <div className="h-4 w-12 rounded bg-white/10" />
            <div className="h-4 w-12 rounded bg-white/10" />
            <div className="h-4 w-16 rounded bg-white/10" />
            <div className="h-4 w-10 rounded bg-white/10" />
          </div>
          <div className="flex items-center gap-2">
            <div className="h-9 w-20 rounded-md bg-white/10" />
            <div className="h-9 w-28 rounded-md bg-emerald-500/40" />
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-16">
        {/* Hero skeleton */}
        <div className="grid gap-10 md:grid-cols-2 md:gap-12">
          <div className="space-y-4">
            <div className="inline-flex h-6 items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 backdrop-blur">
              <div className="h-3 w-3 rounded-full bg-amber-300/50" />
              <div className="h-3 w-40 rounded bg-white/10" />
            </div>
            <div className="h-10 w-3/4 rounded bg-white/10" />
            <div className="h-10 w-1/2 rounded bg-white/10" />
            <div className="h-4 w-5/6 rounded bg-white/10" />
            <div className="h-4 w-2/3 rounded bg-white/10" />

            <div className="mt-6 rounded-xl border border-white/10 bg-white/5 p-3 backdrop-blur">
              <div className="flex items-center gap-2">
                <div className="hidden h-9 w-20 rounded-lg border border-white/10 bg-white/5 sm:block" />
                <div className="h-9 w-full rounded bg-white/10" />
                <div className="hidden h-9 w-14 rounded-lg border border-white/10 bg-white/5 sm:block" />
                <div className="h-9 w-28 rounded bg-emerald-500/40" />
              </div>
            </div>

            <div className="mt-4 grid grid-cols-3 gap-3">
              <div className="h-5 rounded bg-white/10" />
              <div className="h-5 rounded bg-white/10" />
              <div className="h-5 rounded bg-white/10" />
            </div>
          </div>

          <div className="relative rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-lg bg-white/10 ring-1 ring-inset ring-white/20" />
              <div className="space-y-2">
                <div className="h-3.5 w-24 rounded bg-white/10" />
                <div className="h-4 w-40 rounded bg-white/10" />
              </div>
            </div>
            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="h-20 rounded-xl border border-white/10 bg-white/5" />
              <div className="h-20 rounded-xl border border-white/10 bg-white/5" />
              <div className="h-20 rounded-xl border border-white/10 bg-white/5" />
              <div className="h-20 rounded-xl border border-white/10 bg-white/5" />
            </div>
            <div className="mt-6 flex items-center justify-between rounded-xl border border-white/10 bg-white/5 p-4">
              <div className="space-y-2">
                <div className="h-3 w-20 rounded bg-white/10" />
                <div className="h-4 w-28 rounded bg-white/10" />
              </div>
              <div className="h-9 w-28 rounded bg-emerald-500/40" />
            </div>
          </div>
        </div>

        {/* Sections skeleton */}
        <div className="mt-12 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
            <div className="h-10 rounded bg-white/10" />
            <div className="h-10 rounded bg-white/10" />
            <div className="h-10 rounded bg-white/10" />
            <div className="h-10 rounded bg-white/10" />
          </div>
        </div>

        <div className="py-12 sm:py-16">
          <div className="mx-auto max-w-2xl text-center space-y-3">
            <div className="mx-auto h-7 w-64 rounded bg-white/10" />
            <div className="mx-auto h-4 w-80 rounded bg-white/10" />
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <div className="h-40 rounded-2xl border border-white/10 bg-white/5" />
            <div className="h-40 rounded-2xl border border-white/10 bg-white/5" />
            <div className="h-40 rounded-2xl border border-white/10 bg-white/5" />
          </div>
        </div>
      </main>

      <div className="sr-only" role="status" aria-live="polite">
        Loading…
      </div>
    </div>
  )
}
