import { useState } from 'react'
import { Search } from 'lucide-react'
import AnnouncementCard from '../components/AnnouncementCard'

/* ─── Announcements data ───────────────────────────────── */
const ANNOUNCEMENTS = [
  {
    id: 1,
    title: 'Pancake Fundraiser — May 1st',
    date: 'May 1, 2026',
    category: 'Fundraiser',
    badge: 'New',
    description:
      'Join us for our Pancake Fundraiser on May 1st during Win Time (10:20 AM) in Career Center A. Affordable pancakes, great company, and funds that go directly back into club activities. Come hungry!',
  },
  {
    id: 2,
    title: 'Float Day is Every Friday!',
    date: 'Every Friday',
    category: 'Event',
    description:
      'Free milkshakes and floats every Friday for Club América members. Stop by Career Center A during Win Time to grab yours. It\'s our way of celebrating the end of the week with the community.',
  },
  {
    id: 3,
    title: 'School Year Is Almost Over',
    date: 'April 22, 2026',
    category: 'News',
    description:
      'The school year is winding down! We have a few more meetings and events before summer. Make sure you\'re following along so you don\'t miss our year-end celebration plans.',
  },
  {
    id: 4,
    title: 'Weekly Meeting — Every Friday',
    date: 'Recurring',
    category: 'Reminder',
    description:
      'Don\'t forget: our weekly chapter meetings happen every Friday during Win Time at 10:20 AM in Career Center A. All Van High School students are welcome. No sign-up required — just show up!',
  },
  {
    id: 5,
    title: 'Welcome to Club América, Van High!',
    date: 'August 2024',
    category: 'News',
    description:
      'Club América officially launched at Van High School with the mission to create a student community centered around civic engagement, free speech, and open discussion. We\'re excited to grow this chapter into something meaningful for every student at VHS.',
  },
]

const CATEGORIES = ['All', 'News', 'Event', 'Fundraiser', 'Reminder', 'Announcement']

export default function Announcements() {
  const [search,   setSearch]   = useState('')
  const [category, setCategory] = useState('All')

  const filtered = ANNOUNCEMENTS.filter(a => {
    const matchesCat   = category === 'All' || a.category === category
    const matchesSearch = a.title.toLowerCase().includes(search.toLowerCase()) ||
                          a.description.toLowerCase().includes(search.toLowerCase())
    return matchesCat && matchesSearch
  })

  return (
    <>
      {/* ════════════════════════════════════════════════════
          PAGE HERO
      ════════════════════════════════════════════════════ */}
      <section className="bg-ca-gradient relative overflow-hidden pt-32 pb-20 noise">
        <div className="absolute inset-0 hero-stars opacity-40 pointer-events-none" />
        <div
          className="absolute -right-24 top-1/4 w-80 h-80 rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(217,119,6,0.2) 0%, transparent 70%)' }}
        />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="font-display font-black text-white text-6xl sm:text-7xl lg:text-8xl uppercase tracking-tight leading-none animate-fade-up">
            Announce<wbr />ments
          </h1>
          <p className="font-body text-white/60 text-lg sm:text-xl max-w-xl mx-auto mt-6 leading-relaxed animate-fade-up delay-100">
            Stay up to date with the latest Club América news, events, and reminders.
          </p>
        </div>
        {/* Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 60L1440 60L1440 20C1200 55 900 5 720 30C540 55 240 5 0 20L0 60Z" fill="#FDFCF8" />
          </svg>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          FILTERS + CARDS
      ════════════════════════════════════════════════════ */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16">

        {/* ── Controls row ── */}
        <div className="flex flex-col sm:flex-row gap-4 mb-10">
          {/* Search */}
          <div className="relative flex-1">
            <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-ca-muted pointer-events-none" />
            <input
              type="text"
              placeholder="Search announcements…"
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 bg-white font-body text-sm text-ca-dark placeholder-ca-muted focus:outline-none focus:ring-2 focus:ring-ca-red/30 focus:border-ca-red transition-colors duration-200"
            />
          </div>

          {/* Category pills */}
          <div className="flex gap-2 flex-wrap">
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={`font-heading font-semibold text-xs uppercase tracking-wide px-4 py-3 rounded-xl border transition-colors duration-200 ${
                  category === cat
                    ? 'bg-ca-red text-white border-ca-red'
                    : 'bg-white text-ca-muted border-slate-200 hover:border-ca-red hover:text-ca-red'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* ── Results count ── */}
        <p className="font-body text-ca-muted text-sm mb-6">
          Showing {filtered.length} announcement{filtered.length !== 1 ? 's' : ''}
          {category !== 'All' ? ` in "${category}"` : ''}
          {search ? ` matching "${search}"` : ''}
        </p>

        {/* ── Cards grid ── */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {filtered.map((a, i) => (
              <AnnouncementCard
                key={a.id}
                title={a.title}
                date={a.date}
                description={a.description}
                category={a.category}
                badge={a.badge}
                style={{ animationDelay: `${i * 80}ms` }}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="text-5xl mb-4">📭</div>
            <h3 className="font-heading font-bold text-ca-dark text-xl mb-2">No announcements found</h3>
            <p className="font-body text-ca-muted text-sm">
              Try adjusting your search or filter to find what you're looking for.
            </p>
            <button
              onClick={() => { setSearch(''); setCategory('All') }}
              className="mt-5 font-heading font-semibold text-sm text-ca-red hover:underline"
            >
              Clear filters
            </button>
          </div>
        )}
      </section>

      {/* ════════════════════════════════════════════════════
          SUBMIT AN ANNOUNCEMENT (CTA)
      ════════════════════════════════════════════════════ */}
      <section className="bg-slate-50 py-14">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
          <h3 className="font-display font-bold text-ca-dark text-3xl uppercase tracking-tight mb-3">
            Have an Update?
          </h3>
          <p className="font-body text-ca-muted text-base mb-6">
            Club officers can submit new announcements by emailing us directly.
            We aim to post updates within 24 hours.
          </p>
          <a
            href="mailto:contact@tpvan.com?subject=Club América Announcement"
            className="btn-primary inline-flex items-center justify-center gap-2 font-heading font-bold text-white bg-ca-red hover:bg-ca-red-d px-7 py-3.5 rounded-xl transition-colors duration-200 shadow-lg shadow-red-900/20"
          >
            Submit via Email
          </a>
        </div>
      </section>
    </>
  )
}
