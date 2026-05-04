import { Link } from 'react-router-dom'
import {
  Megaphone, CalendarDays, Users, ArrowRight,
  Star, MapPin, Clock, ChevronRight,
} from 'lucide-react'

/* ─── Upcoming events data ─────────────────────────────── */
const UPCOMING_EVENTS = [
  {
    id: 1,
    title: 'Weekly Chapter Meeting',
    date: 'Every Friday',
    time: '10:20 AM',
    location: 'Career Center A',
    type: 'Meeting',
  },
  {
    id: 2,
    title: 'Pancake Fundraiser',
    date: 'May 1, 2026',
    time: '10:20 AM',
    location: 'Career Center A',
    type: 'Fundraiser',
  },
  {
    id: 3,
    title: 'Float Day',
    date: 'Every Friday',
    time: 'During Win Time',
    location: 'Van High School',
    type: 'Social',
  },
]

/* ─── Quick nav cards data ─────────────────────────────── */
const QUICK_CARDS = [
  {
    to: '/announcements',
    Icon: Megaphone,
    title: 'Announcements',
    desc: 'Latest club news, event updates, and important reminders.',
    color: 'from-red-500/10 to-red-500/5',
    border: 'hover:border-ca-red/30',
    iconBg: 'bg-red-50 text-ca-red',
  },
  {
    to: '/calendar',
    Icon: CalendarDays,
    title: 'Calendar',
    desc: 'View all upcoming meetings, events, and school activities.',
    color: 'from-amber-500/10 to-amber-500/5',
    border: 'hover:border-ca-gold/30',
    iconBg: 'bg-amber-50 text-ca-gold',
  },
  {
    to: '/about',
    Icon: Users,
    title: 'About the Club',
    desc: 'Learn who we are, our mission, officers, and how to join.',
    color: 'from-slate-500/10 to-slate-500/5',
    border: 'hover:border-slate-300',
    iconBg: 'bg-slate-100 text-slate-600',
  },
]

/* ─── Stats ────────────────────────────────────────────── */
const STATS = [
  { value: '2024', label: 'Founded' },
  { value: 'Fridays', label: 'Weekly Meetings' },
  { value: 'Free', label: 'Membership' },
  { value: 'VHS', label: 'Van High School' },
]

/* ─── Component ────────────────────────────────────────── */
export default function Home() {
  return (
    <>
      {/* ════════════════════════════════════════════════════
          HERO SECTION
      ════════════════════════════════════════════════════ */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-ca-gradient noise">
        {/* Star-field bg */}
        <div className="absolute inset-0 hero-stars opacity-60 pointer-events-none" />

        {/* Red glow blob left */}
        <div
          className="absolute -left-40 top-1/3 w-96 h-96 rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(185,28,28,0.35) 0%, transparent 70%)' }}
        />
        {/* Gold glow blob right */}
        <div
          className="absolute -right-32 bottom-1/4 w-80 h-80 rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(217,119,6,0.2) 0%, transparent 70%)' }}
        />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 pt-32 pb-24 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            {/* ── Left: Copy ── */}
            <div>
              {/* Eyebrow tag */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/8 border border-white/12 mb-6 animate-fade-up">
                <Star size={12} className="text-ca-gold-l fill-ca-gold-l" />
                <span className="font-heading font-semibold text-white/70 text-xs uppercase tracking-widest">
                  Van High School · Est. 2024
                </span>
              </div>

              {/* Headline */}
              <h1 className="font-display font-black text-white text-6xl sm:text-7xl lg:text-8xl uppercase leading-none tracking-tight animate-fade-up delay-100">
                Club<br />
                <span className="text-gold-gradient">América</span>
              </h1>

              {/* Subhead */}
              <p className="font-body text-white/65 text-lg sm:text-xl leading-relaxed mt-6 max-w-lg animate-fade-up delay-200">
                The one place where every student belongs and every voice is heard.
                Join us for weekly meetings, community events, and real civic engagement at Van High School.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-3 mt-8 animate-fade-up delay-300">
                <a
                  href="mailto:contact@tpvan.com?subject=Joining Club América"
                  className="btn-primary inline-flex items-center justify-center gap-2 font-heading font-bold text-ca-dark bg-ca-gold hover:bg-ca-gold-l px-6 py-3.5 rounded-xl transition-colors duration-200 shadow-lg shadow-amber-900/30 text-base"
                >
                  Join the Club
                  <ArrowRight size={18} />
                </a>
                <Link
                  to="/calendar"
                  className="inline-flex items-center justify-center gap-2 font-heading font-semibold text-white/80 hover:text-white bg-white/8 hover:bg-white/14 border border-white/12 px-6 py-3.5 rounded-xl transition-all duration-200 text-base"
                >
                  <CalendarDays size={18} />
                  See Schedule
                </Link>
              </div>
            </div>

            {/* ── Right: Info card stack ── */}
            <div className="flex flex-col gap-4 animate-fade-up delay-400">
              {/* Next meeting card */}
              <div className="glass rounded-2xl p-5 sm:p-6">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="font-heading font-semibold text-white/60 text-xs uppercase tracking-widest">
                    Next Meeting
                  </span>
                </div>
                <p className="font-display font-bold text-white text-2xl">Every Friday</p>
                <div className="flex flex-col gap-1.5 mt-3">
                  <div className="flex items-center gap-2 text-white/55 text-sm font-body">
                    <Clock size={13} className="text-ca-gold" />
                    10:20 AM — Win Time
                  </div>
                  <div className="flex items-center gap-2 text-white/55 text-sm font-body">
                    <MapPin size={13} className="text-ca-gold" />
                    Career Center A · 985 N Maple St, Van TX
                  </div>
                </div>
              </div>

              {/* Latest news card */}
              <div className="glass rounded-2xl p-5 sm:p-6">
                <p className="font-heading font-semibold text-white/60 text-xs uppercase tracking-widest mb-3">
                  Latest News
                </p>
                <ul className="space-y-2.5">
                  {[
                    'Pancake Fundraiser — May 1st, 2026',
                    'Float Day every Friday!',
                    'School year almost over — year-end celebration coming.',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm font-body text-white/70">
                      <ChevronRight size={14} className="text-ca-gold mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/announcements"
                  className="inline-flex items-center gap-1.5 font-heading font-semibold text-ca-gold-l text-sm mt-4 hover:gap-2.5 transition-all duration-200"
                >
                  View all announcements <ArrowRight size={13} />
                </Link>
              </div>
            </div>
          </div>

          {/* ── Stats bar ── */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-16 animate-fade-up delay-500">
            {STATS.map(({ value, label }) => (
              <div key={label} className="text-center glass rounded-xl px-4 py-4">
                <div className="font-display font-black text-white text-2xl sm:text-3xl">{value}</div>
                <div className="font-body text-white/45 text-xs mt-1 tracking-wide">{label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 80L1440 80L1440 30C1200 70 900 10 720 40C540 70 240 10 0 30L0 80Z" fill="#FDFCF8" />
          </svg>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          QUICK NAVIGATION CARDS
      ════════════════════════════════════════════════════ */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-20">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="font-display font-bold text-ca-dark text-4xl sm:text-5xl uppercase tracking-tight">
            Explore the Club
          </h2>
          <p className="font-body text-ca-muted text-base sm:text-lg mt-3 max-w-xl mx-auto">
            Everything you need to stay connected with Club América at Van High School.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {QUICK_CARDS.map(({ to, Icon, title, desc, iconBg, border }, i) => (
            <Link
              key={to}
              to={to}
              className={`quick-card group block bg-white rounded-2xl border border-slate-100 ${border} p-7 shadow-sm animate-fade-up`}
              style={{ animationDelay: `${i * 120}ms` }}
            >
              {/* Icon */}
              <div className={`icon-ring w-14 h-14 rounded-2xl flex items-center justify-center mb-5 ${iconBg}`}>
                <Icon size={24} />
              </div>
              {/* Title */}
              <h3 className="font-heading font-bold text-ca-dark text-xl mb-2 group-hover:text-ca-red transition-colors duration-200">
                {title}
              </h3>
              {/* Desc */}
              <p className="font-body text-ca-muted text-sm leading-relaxed">
                {desc}
              </p>
              {/* Arrow */}
              <div className="flex items-center gap-1.5 font-heading font-semibold text-ca-red text-sm mt-5 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                Explore <ArrowRight size={13} />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          UPCOMING EVENTS
      ════════════════════════════════════════════════════ */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex items-end justify-between mb-10 gap-4 flex-wrap">
            <div>
              <p className="font-heading font-semibold text-ca-red text-sm uppercase tracking-widest mb-2">What's Coming Up</p>
              <h2 className="font-display font-bold text-ca-dark text-4xl sm:text-5xl uppercase tracking-tight">
                Upcoming Events
              </h2>
            </div>
            <Link
              to="/calendar"
              className="inline-flex items-center gap-2 font-heading font-semibold text-sm text-ca-dark border border-slate-200 hover:border-ca-red hover:text-ca-red px-4 py-2.5 rounded-xl transition-colors duration-200"
            >
              Full Calendar <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {UPCOMING_EVENTS.map((event, i) => (
              <div
                key={event.id}
                className="bg-white rounded-2xl border border-slate-100 p-6 shadow-sm hover:shadow-md hover:border-ca-red/20 transition-all duration-200 animate-fade-up"
                style={{ animationDelay: `${i * 120}ms` }}
              >
                {/* Type badge */}
                <span className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-heading font-bold mb-4 ${
                  event.type === 'Fundraiser' ? 'bg-amber-50 text-amber-700' :
                  event.type === 'Social'     ? 'bg-blue-50 text-blue-700' :
                                                'bg-red-50 text-ca-red'
                }`}>
                  {event.type}
                </span>
                <h3 className="font-heading font-bold text-ca-dark text-lg mb-3">{event.title}</h3>
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2 text-ca-muted text-sm font-body">
                    <CalendarDays size={13} className="text-ca-gold" />
                    {event.date}
                  </div>
                  <div className="flex items-center gap-2 text-ca-muted text-sm font-body">
                    <Clock size={13} className="text-ca-gold" />
                    {event.time}
                  </div>
                  <div className="flex items-center gap-2 text-ca-muted text-sm font-body">
                    <MapPin size={13} className="text-ca-gold" />
                    {event.location}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          WHAT WE DO
      ════════════════════════════════════════════════════ */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text */}
          <div>
            <p className="font-heading font-semibold text-ca-red text-sm uppercase tracking-widest mb-3">Who We Are</p>
            <h2 className="font-display font-bold text-ca-dark text-4xl sm:text-5xl uppercase tracking-tight leading-none mb-6">
              More Than<br />a Club
            </h2>
            <p className="font-body text-slate-600 text-base sm:text-lg leading-relaxed mb-6">
              Club América is a student-led community at Van High School dedicated to civic engagement,
              free thought, and creating a space where every student's voice matters.
            </p>
            <p className="font-body text-slate-600 text-base leading-relaxed mb-8">
              From cheap pancakes in the morning to free milkshakes on Float Day Fridays,
              we believe in community, respect, and giving students real experiences that matter.
            </p>
            <Link
              to="/about"
              className="btn-primary inline-flex items-center gap-2 font-heading font-bold text-white bg-ca-red hover:bg-ca-red-d px-6 py-3.5 rounded-xl transition-colors duration-200 shadow-lg shadow-red-900/20"
            >
              Learn More About Us
              <ArrowRight size={18} />
            </Link>
          </div>

          {/* Feature list */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { emoji: '🗳️', title: 'Civic Engagement',   desc: 'Learn about government, economics, and your rights as a citizen.' },
              { emoji: '🤝', title: 'Community',          desc: 'A welcoming space where every student belongs and matters.' },
              { emoji: '💬', title: 'Open Debate',        desc: 'We encourage respectful conversation and different viewpoints.' },
              { emoji: '🎉', title: 'Fun Events',         desc: 'Pancake fundraisers, Float Day milkshakes, and more.' },
            ].map(({ emoji, title, desc }, i) => (
              <div
                key={title}
                className="bg-white rounded-2xl border border-slate-100 p-5 shadow-sm hover:border-ca-red/20 hover:shadow-md transition-all duration-200 animate-fade-up"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="text-2xl mb-3">{emoji}</div>
                <h4 className="font-heading font-bold text-ca-dark text-base mb-1.5">{title}</h4>
                <p className="font-body text-ca-muted text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          JOIN CTA BANNER
      ════════════════════════════════════════════════════ */}
      <section className="bg-ca-gradient noise py-16 sm:py-20 relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none hero-stars opacity-30"
        />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-display font-black text-white text-5xl sm:text-6xl uppercase tracking-tight mb-4">
            Ready to Join?
          </h2>
          <p className="font-body text-white/65 text-lg mb-8">
            Show up to Career Center A any Friday during Win Time — no sign-up required.
            Or reach out to us directly and we'll get you connected.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="mailto:contact@tpvan.com?subject=Joining Club América"
              className="btn-primary inline-flex items-center justify-center gap-2 font-heading font-bold text-ca-dark bg-ca-gold hover:bg-ca-gold-l px-7 py-4 rounded-xl transition-colors duration-200 shadow-xl shadow-amber-900/30 text-base"
            >
              Email Us to Join
              <ArrowRight size={18} />
            </a>
            <Link
              to="/about"
              className="inline-flex items-center justify-center gap-2 font-heading font-semibold text-white/80 hover:text-white bg-white/8 hover:bg-white/14 border border-white/15 px-7 py-4 rounded-xl transition-all duration-200 text-base"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
