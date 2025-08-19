export default function Header({ children, size = "text-2xl" }) {
  return (
    <div className="mb-4 border-b">
      <h1 className={`${size} font-bold uppercase`}>{children}</h1>
    </div>
  );
}
