import { Link } from 'react-router-dom'
import { Mail, MapPin, Instagram, Twitter, Facebook } from 'lucide-react'

const LINKS = [
  { to: '/',               label: 'Home' },
  { to: '/about',          label: 'About' },
  { to: '/announcements',  label: 'Announcements' },
  { to: '/calendar',       label: 'Calendar' },
]

/**
 * Footer — Three-column layout with branding, links, and contact info.
 */
export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-ca-dark text-white/80">
      {/* ── Gold accent line ── */}
      <div className="h-1 bg-gradient-to-r from-ca-red via-ca-gold to-ca-red" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">

          {/* ── Brand column ── */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="relative flex-shrink-0">
                <div className="w-9 h-9 rounded-lg bg-ca-red flex items-center justify-center">
                  <span className="font-display font-black text-ca-gold-l text-lg leading-none select-none">A</span>
                </div>
                <div className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-sm bg-ca-gold"></div>
              </div>
              <div>
                <div className="font-display font-bold text-white text-base tracking-wide">Club América</div>
                <div className="font-body text-white/40 text-xs tracking-widest uppercase">Van High School</div>
              </div>
            </div>
            <p className="font-body text-sm text-white/50 leading-relaxed max-w-xs">
              A student community committed to civic engagement, free thought, and making Van High School a better place for everyone.
            </p>
            {/* Social */}
            <div className="flex gap-3 mt-5">
              {[
                { Icon: Instagram, label: 'Instagram', href: '#' },
                { Icon: Twitter,   label: 'Twitter',   href: '#' },
                { Icon: Facebook,  label: 'Facebook',  href: '#' },
              ].map(({ Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-8 h-8 rounded-lg bg-white/8 hover:bg-ca-red flex items-center justify-center transition-colors duration-200"
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* ── Navigation column ── */}
          <div>
            <h4 className="font-heading font-semibold text-white text-sm uppercase tracking-widest mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {LINKS.map(({ to, label }) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="font-body text-sm text-white/55 hover:text-ca-gold-l transition-colors duration-200"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Contact column ── */}
          <div>
            <h4 className="font-heading font-semibold text-white text-sm uppercase tracking-widest mb-4">
              Find Us
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5">
                <MapPin size={15} className="text-ca-gold mt-0.5 flex-shrink-0" />
                <span className="font-body text-sm text-white/55">
                  985 N Maple St<br />Van, TX 75790<br />
                  <span className="text-white/40">Career Center A — Win Time Fridays</span>
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail size={15} className="text-ca-gold flex-shrink-0" />
                <a
                  href="mailto:contact@tpvan.com"
                  className="font-body text-sm text-white/55 hover:text-ca-gold-l transition-colors duration-200"
                >
                  contact@tpvan.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-white/30">
          <span>© {year} Club América — Van High School. All rights reserved.</span>
          <span>Van, Texas</span>
        </div>
      </div>
    </footer>
  )
}
