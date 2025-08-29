import Link from "next/link";

const Pagination = ({
  page,
  totalPages,
  hrefBase,
  query,
}: {
  page: number;
  totalPages: number;
  hrefBase: string; // e.g. "/list/teachers"
  query?: Record<string, string | number | undefined>;
}) => {
  const prevPage = page > 1 ? page - 1 : 1;
  const nextPage = page < totalPages ? page + 1 : totalPages;

  // Render up to 5 numbered pages centered around current
  const pages: number[] = [];
  const start = Math.max(1, page - 2);
  const end = Math.min(totalPages, start + 4);
  for (let p = start; p <= end; p++) pages.push(p);

  const buildHref = (p: number) => {
    const params = new URLSearchParams();
    if (query) {
      Object.entries(query).forEach(([key, value]) => {
        if (value !== undefined && value !== "" && value !== null) params.set(key, String(value));
      });
    }
    params.set("page", String(p));
    const qs = params.toString();
    return qs ? `${hrefBase}?${qs}` : hrefBase;
  };

  return (
    <div className="p-4 flex items-center justify-between text-gray-500">
      <Link
        href={buildHref(prevPage)}
        className="py-2 px-4 rounded-md bg-slate-200 text-xs font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
        aria-disabled={page === 1}
      >
        Prev
      </Link>
      <div className="flex items-center gap-2 text-sm">
        {start > 1 && <span>...</span>}
        {pages.map((p) => (
          <Link
            key={p}
            href={buildHref(p)}
            className={`px-2 rounded-sm ${p === page ? "bg-lamaSky" : ""}`}
          >
            {p}
          </Link>
        ))}
        {end < totalPages && <span>...</span>}
      </div>
      <Link
        href={buildHref(nextPage)}
        className="py-2 px-4 rounded-md bg-slate-200 text-xs font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
        aria-disabled={page === totalPages}
      >
        Next
      </Link>
    </div>
  );
};

export default Pagination;
