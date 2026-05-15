export default function Badge({ children }) {
  return (
    <span className="rounded-full border border-sky-200/10 bg-sky-300/10 px-3 py-1 text-xs font-medium text-sky-100">
      {children}
    </span>
  );
}
