// main.js — simple site interactivity and calendar
(() => {
  // Basic DOM helpers
  const $ = sel => document.querySelector(sel);
  const $$ = sel => Array.from(document.querySelectorAll(sel));

  // Set footer years
  const yrs = ['#year','#year2','#year3','#year4'];
  yrs.forEach(id=>{
    const el = document.querySelector(id);
    if(el) el.textContent = new Date().getFullYear();
  });

  // Mobile nav toggle (works across pages)
  const navToggles = $$('.nav-toggle');
  navToggles.forEach(btn=>{
    btn.addEventListener('click', e=>{
      const nav = document.getElementById(btn.getAttribute('aria-controls'));
      if(!nav) return;
      const expanded = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', String(!expanded));
      nav.style.display = expanded ? '' : 'block';
    });
  });

  // Simple "next meeting" & events demo data
  const sampleEvents = [
    { id:1, title:'Weekly Chapter Meeting', date:'2026-04-24', time:'10:20 AM', venue:'College Career Center A' },
    { id:2, title:'Pancake Fundraiser', date:'2026-05-01', time:'10:20 AM', venue:'College Career Center A' },
    { id:3, title:'Weekly Chapter Meeting', date:'2028-05-08', time:'10:20 AM', venue:'College Career Center A' }
  ];

  function parseYMD(s){ const [y,m,d]=s.split('-').map(Number); return new Date(y,m-1,d); }

  // Inject upcoming events (home page)
  const upcomingEl = document.getElementById('upcomingEvents');
  if (upcomingEl) {
    sampleEvents.slice(0,4).forEach(ev=>{
      const card = document.createElement('article');
      card.className = 'card';
      card.innerHTML = `
        <h4>${ev.title}</h4>
        <div class="muted">${new Date(ev.date).toLocaleDateString(undefined,{month:'short',day:'numeric',year:'numeric'})} - ${ev.time}</div>
        <p style="margin-top:.5rem"><strong>Location:</strong> ${ev.venue}</p>
        <a class="btn" href="forms.html#join">Sign up</a>
      `;
      upcomingEl.appendChild(card);
    });
  }

  // Next meeting on hero
  const nextMeetingEl = document.getElementById('nextMeeting');
  if (nextMeetingEl) {
    const today = new Date();
    const next = sampleEvents.find(e => parseYMD(e.date) >= today) || sampleEvents[0];
    const pretty = `${new Date(next.date).toLocaleDateString(undefined,{weekday:'short',month:'short',day:'numeric'})} - ${next.time}`;
    nextMeetingEl.innerHTML = `${pretty}<br><span class="muted">${next.venue}</span>`;
  }

  // small news list injection
  const newsList = document.getElementById('newsList');
  if (newsList) {
    // add a sample news line
    const li = document.createElement('li');
    li.textContent = 'Fundraiser May 1st';
    newsList.insertBefore(li, newsList.firstChild);
  }

  // Calendar UI (simple month grid)
  function buildCalendar(rootId='calendar') {
    const root = document.getElementById(rootId);
    if(!root) return;

    // minimal calendar state
    const state = { date: new Date() };

    function render() {
      root.innerHTML = '';
      const year = state.date.getFullYear();
      const month = state.date.getMonth();
      const first = new Date(year, month, 1);
      const startDay = first.getDay(); // 0..6
      const daysInMonth = new Date(year, month+1, 0).getDate();

      // header
      const header = $('#calendarMonth');
      if(header) header.textContent = state.date.toLocaleString(undefined, { month: 'long', year: 'numeric' });

      // render weekday headers
      const weekdays = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
      weekdays.forEach(w=>{
        const h = document.createElement('div');
        h.className = 'day';
        h.style.fontWeight = '700';
        h.style.background = 'transparent';
        h.style.boxShadow = 'none';
        h.textContent = w;
        root.appendChild(h);
      });

      // pad empty cells
      for(let i=0;i<startDay;i++){
        const empty = document.createElement('div');
        empty.className = 'day';
        empty.style.opacity = '0.35';
        root.appendChild(empty);
      }

      // day cells
      for(let d=1; d<=daysInMonth; d++){
        const iso = `${year}-${String(month+1).padStart(2,'0')}-${String(d).padStart(2,'0')}`;
        const dayEl = document.createElement('div');
        dayEl.className = 'day';
        dayEl.innerHTML = `<div class="date">${d}</div>`;
        // attach events if any
        const dayEvents = sampleEvents.filter(ev=>ev.date === iso);
        dayEvents.forEach(ev=>{
          const a = document.createElement('a');
          a.className = 'event-pill small';
          a.href = `forms.html#join`;
          a.textContent = ev.title + (ev.time ? ` • ${ev.time}` : '');
          dayEl.appendChild(a);
        });
        root.appendChild(dayEl);
      }
    }

    // controls
    const prev = document.getElementById('prevMonth');
    const next = document.getElementById('nextMonth');
   // if(prev) prev.addEventListener('click', () => { state.date.setMonth(state.date.getMonth()-1); render(); });
    if(next) next.addEventListener('click', () => { state.date.setMonth(state.date.getMonth()+7); render(); });

    render();
  }

  // init calendar
  document.addEventListener('DOMContentLoaded', () => {
    buildCalendar();
  });

  // highlight active nav link
  (function highlightNav(){
    const path = location.pathname.split('/').pop() || 'index.html';
    $$('nav a').forEach(a=>{
      const href = a.getAttribute('href') || '';
      if(href.endsWith(path)) {
        a.classList.add('active');
      }
    });
  })();

  // Expose sampleEvents in console for quick edits (dev only)
  window.VAN_TP_EVENTS = sampleEvents;

})();
