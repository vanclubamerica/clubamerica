import { Calendar, Tag } from 'lucide-react'

/**
 * AnnouncementCard — Reusable card for announcements page.
 *
 * Props:
 *  - title:       string
 *  - date:        string (ISO or human-readable)
 *  - description: string
 *  - category:    string (optional) — e.g. "Event", "News", "Fundraiser"
 *  - badge:       string (optional) — "New" | "Updated"
 *  - style:       object (optional) — inline style for animation delay
 */
export default function AnnouncementCard({
  title,
  date,
  description,
  category = 'Announcement',
  badge,
  style,
}) {
  const categoryColors = {
    Event:      'bg-blue-50   text-blue-700   border-blue-200',
    News:       'bg-green-50  text-green-700  border-green-200',
    Fundraiser: 'bg-amber-50  text-amber-700  border-amber-200',
    Reminder:   'bg-purple-50 text-purple-700 border-purple-200',
    Announcement:'bg-red-50   text-red-700    border-red-200',
  }
  const catClass = categoryColors[category] ?? categoryColors.Announcement

  return (
    <article
      className="announcement-card bg-white rounded-2xl border border-slate-100 p-6 sm:p-7 flex flex-col gap-4 animate-fade-up shadow-sm"
      style={style}
    >
      {/* ── Top row: category + badge ── */}
      <div className="flex items-center justify-between gap-3 flex-wrap">
        <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-heading font-semibold border ${catClass}`}>
          <Tag size={11} />
          {category}
        </span>
        {badge && (
          <span className="px-2 py-0.5 rounded-full text-xs font-heading font-bold bg-ca-red text-white animate-pulse">
            {badge}
          </span>
        )}
      </div>

      {/* ── Title ── */}
      <h3 className="font-heading font-bold text-ca-dark text-lg sm:text-xl leading-snug">
        {title}
      </h3>

      {/* ── Date ── */}
      <div className="flex items-center gap-2 text-ca-muted text-sm font-body">
        <Calendar size={14} className="text-ca-gold flex-shrink-0" />
        <span>{date}</span>
      </div>

      {/* ── Description ── */}
      <p className="font-body text-slate-600 text-sm sm:text-base leading-relaxed flex-1">
        {description}
      </p>

      {/* ── Bottom accent bar ── */}
      <div className="h-0.5 w-12 bg-gradient-to-r from-ca-red to-ca-gold rounded-full mt-1" />
    </article>
  )
}
