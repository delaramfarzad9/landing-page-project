function StatsBar({ stats,font }) {
  return (
    <div className="grid grid-cols-3 gap-2 rounded-lg bg-linear-to-tr from-blue-900 via-teal-500 to-blue-700 p-2 shadow-md">
      {stats.map((stat) => (
        <div
          key={stat.id}
          className="group flex min-w-0 flex-col items-center justify-center gap-1 p-2 sm:p-4"
        >
          <p className={`text-2xl font-bold text-white
  transition-transform duration-300
  motion-safe:group-hover:-translate-y-1
  motion-safe:group-active:-translate-y-1
  ${font}`}>
            {stat.value}
          </p>
          <p className="text-center text-xs text-white sm:text-sm">
            {stat.title}
          </p>
        </div>
      ))}
    </div>
  );
}

export default StatsBar;