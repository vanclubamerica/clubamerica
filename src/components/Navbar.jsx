import { useState } from 'react'
import { ExternalLink } from 'lucide-react'

const CALENDAR_SRC =
  'https://calendar.google.com/calendar/embed?src=d2827c50efa645a951222bb4cc6d6c2ef61e0941b845576ab323123e084c4073%40group.calendar.google.com&ctz=America%2FChicago&mode=MONTH&showTitle=0&showNav=1&showDate=1&showPrint=0&showTabs=0&showCalendars=0&color=%23B91C1C'

const CALENDAR_LINK =
  'https://calendar.google.com/calendar/embed?src=d2827c50efa645a951222bb4cc6d6c2ef61e0941b845576ab323123e084c4073%40group.calendar.google.com&ctz=America%2FChicago'

/**
 * CalendarEmbed — Responsive Google Calendar iframe with loading state.
 */
export default function CalendarEmbed() {
  const [loaded, setLoaded] = useState(false)

  return (
    <div className="relative">
      {/* ── Header row ── */}
      <div className="flex items-center justify-between mb-4 gap-3 flex-wrap">
        <div>
          <h2 className="font-display font-bold text-ca-dark text-2xl sm:text-3xl tracking-wide">
            Club Calendar
          </h2>
          <p className="font-body text-ca-muted text-sm mt-1">
            All meeting times displayed in Central Time (CT)
          </p>
        </div>
        <a
          href={CALENDAR_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 font-heading font-semibold text-sm text-ca-red hover:text-ca-red-d border border-ca-red/30 hover:border-ca-red px-4 py-2 rounded-lg transition-colors duration-200"
        >
          Open in Google Calendar
          <ExternalLink size={14} />
        </a>
      </div>

      {/* ── Loading placeholder ── */}
      {!loaded && (
        <div className="absolute inset-0 top-16 flex items-center justify-center bg-slate-50 rounded-2xl border border-slate-200 z-10">
          <div className="text-center">
            <div className="w-10 h-10 border-4 border-ca-red/20 border-t-ca-red rounded-full animate-spin mx-auto mb-3" />
            <p className="font-body text-ca-muted text-sm">Loading calendar…</p>
          </div>
        </div>
      )}

      {/* ── Calendar iframe ── */}
      <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-lg shadow-slate-100">
        <div className="relative w-full" style={{ paddingTop: 'min(75%, 600px)' }}>
          <iframe
            src={CALENDAR_SRC}
            title="Club América Van High School — Google Calendar"
            frameBorder="0"
            scrolling="no"
            onLoad={() => setLoaded(true)}
            className="absolute inset-0 w-full h-full"
            style={{ minHeight: 400 }}
          />
        </div>
      </div>

      {/* ── Footer note ── */}
      <p className="font-body text-ca-muted text-xs mt-3 text-center">
        Can't see the calendar? Make sure your browser isn't blocking third-party cookies.{' '}
        <a
          href={CALENDAR_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="text-ca-red hover:underline"
        >
          View directly →
        </a>
      </p>
    </div>
  )
}
