export default function Loading() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-neutral-950 text-white">
      {/* Background gradients / blobs (match page for seamless transition) */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-32 -left-24 h-96 w-96 rounded-full bg-emerald-500/20 blur-3xl" />
        <div className="absolute top-1/3 -right-20 h-[28rem] w-[28rem] rounded-full bg-fuchsia-500/20 blur-3xl" />
        <div className="absolute bottom-0 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-amber-400/10 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(60rem_60rem_at_120%_-10%,rgba(255,255,255,0.06),rgba(255,255,255,0))]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05),rgba(255,255,255,0.02))]" />
      </div>

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
