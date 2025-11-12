export default function ProjectsSkeleton() {
  return (
    <div>
      <div className="grid md:grid-cols-2 gap-6 mb-16">
        {[1,2].map(i => (
          <div key={i} className="p-6 rounded-xl bg-gray-100 dark:bg-gray-800 animate-pulse" style={{ minHeight: 120 }} />
        ))}
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1,2,3].map(i => (
          <div key={i} className="p-5 rounded-xl bg-gray-100 dark:bg-gray-800 animate-pulse" style={{ minHeight: 100 }} />
        ))}
      </div>
    </div>
  );
}

