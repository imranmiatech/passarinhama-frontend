interface TopbarProps {
  onSearch?: (q: string) => void;
}

export function Topbar({ onSearch }: TopbarProps) {
  return (
    <header className="h-12 bg-white border-b border-gray-200 px-4 sm:px-6 flex items-center justify-between gap-4 shrink-0">
      <h1 className="text-sm font-bold text-gray-900 whitespace-nowrap">Modération &amp; Validation</h1>

      <div className="flex items-center gap-3 ml-auto">
        {/* Search */}
        <div className="relative hidden sm:block">
          <svg
            className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" />
          </svg>
          <input
            type="text"
            placeholder="Rechercher un contenu..."
            onChange={(e) => onSearch?.(e.target.value)}
            className="pl-8 pr-3 py-1.5 text-xs border border-gray-200 rounded-lg bg-gray-50 focus:outline-none focus:ring-1 focus:ring-gray-400 w-48"
          />
        </div>

        {/* Bell */}
        <button className="relative p-1.5 text-gray-400 hover:text-gray-700 transition-colors">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
          </svg>
        </button>

        {/* Règles */}
        <button className="hidden sm:flex items-center gap-1 text-xs text-gray-500 hover:text-gray-800 border border-gray-200 rounded px-2.5 py-1.5 transition-colors">
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
          </svg>
          Règles
        </button>

        {/* Approve all */}
        <button className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-green-500 text-white text-xs font-semibold hover:bg-green-600 transition-colors">
          ✓ Tout approuver
        </button>
      </div>
    </header>
  );
}
