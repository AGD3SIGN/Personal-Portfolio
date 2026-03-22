import { useState } from 'react'
import { X, Music } from 'lucide-react'
import { SPOTIFY_TRACK_ID } from '@/lib/spotify'

export function SpotifyPlayer() {
  const [dismissed, setDismissed] = useState(false)

  if (!SPOTIFY_TRACK_ID || dismissed) return null

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-1">
      <div className="flex items-center justify-between px-1">
        <div className="flex items-center gap-1.5">
          <Music className="h-3 w-3 text-primary" />
          <p className="text-xs font-bold uppercase tracking-widest text-primary">Now Playing</p>
        </div>
        <button
          onClick={() => setDismissed(true)}
          aria-label="Dismiss player"
          className="text-muted-foreground transition-colors hover:text-foreground"
        >
          <X className="h-3.5 w-3.5" />
        </button>
      </div>
      <div className="overflow-hidden rounded-2xl border border-border shadow-lg shadow-black/40">
        <iframe
          src={`https://open.spotify.com/embed/track/${SPOTIFY_TRACK_ID}?utm_source=generator&theme=0`}
          width="300"
          height="80"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          title="Now Playing"
        />
      </div>
    </div>
  )
}
