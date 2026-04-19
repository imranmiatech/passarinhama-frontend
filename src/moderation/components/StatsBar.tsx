interface StatsBarProps {
  onApproveAll?: () => void;
}

export function StatsBar({ onApproveAll }: StatsBarProps) {
  const stats = [
    { icon: "☐", value: 18, label: "En attente", color: "text-gray-700", iconColor: "text-gray-400" },
    { icon: "⊙", value: 4, label: "Urgents", color: "text-red-600", iconColor: "text-red-400" },
    { icon: "△", value: 6, label: "Signalés", color: "text-orange-500", iconColor: "text-orange-400" },
    { icon: "✓", value: 47, label: "Traités (7j)", color: "text-green-600", iconColor: "text-green-400" },
  ];

  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 px-4 sm:px-6 py-3 border-b border-gray-100 bg-white">
      <div className="flex gap-3 sm:gap-6 flex-wrap">
        {stats.map((s) => (
          <div key={s.label} className="flex items-center gap-2">
            <span className={`text-base leading-none ${s.iconColor}`}>{s.icon}</span>
            <div>
              <span className={`text-lg font-bold ${s.color}`}>{s.value}</span>
              <span className="ml-1.5 text-xs text-gray-400">{s.label}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center gap-3">
        <span className="text-sm text-gray-500">
          <span className="font-semibold text-gray-700">1h 24m</span> Temps moy.
        </span>
        <button
          onClick={onApproveAll}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-green-500 text-white text-xs font-semibold hover:bg-green-600 transition-colors"
        >
          ✓ Tout approuver
        </button>
      </div>
    </div>
  );
}
