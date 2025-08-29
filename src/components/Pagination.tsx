import Link from "next/link";

const Pagination = ({
  page,
  totalPages,
  hrefBase,
}: {
  page: number;
  totalPages: number;
  hrefBase: string; // e.g. "/list/teachers"
}) => {
  const prevPage = page > 1 ? page - 1 : 1;
  const nextPage = page < totalPages ? page + 1 : totalPages;

  // Render up to 5 numbered pages centered around current
  const pages: number[] = [];
  const start = Math.max(1, page - 2);
  const end = Math.min(totalPages, start + 4);
  for (let p = start; p <= end; p++) pages.push(p);

  return (
    <div className="p-4 flex items-center justify-between text-gray-500">
      <Link
        href={`${hrefBase}?page=${prevPage}`}
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
            href={`${hrefBase}?page=${p}`}
            className={`px-2 rounded-sm ${p === page ? "bg-lamaSky" : ""}`}
          >
            {p}
          </Link>
        ))}
        {end < totalPages && <span>...</span>}
      </div>
      <Link
        href={`${hrefBase}?page=${nextPage}`}
        className="py-2 px-4 rounded-md bg-slate-200 text-xs font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
        aria-disabled={page === totalPages}
      >
        Next
      </Link>
    </div>
  );
};

export default Pagination;
