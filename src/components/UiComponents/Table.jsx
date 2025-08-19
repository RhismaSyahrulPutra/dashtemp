function Table({ children, className = "", ...props }) {
  return (
    <div
      className={`overflow-x-auto rounded-box border border-base-content/5 bg-base-100 ${className}`}
      {...props}
    >
      <table className="table w-full">{children}</table>
    </div>
  );
}

function TableHead({ children }) {
  return <thead className="text-center">{children}</thead>;
}

function TableBody({ children }) {
  return <tbody className="text-center">{children}</tbody>;
}

function TableFoot({ children }) {
  return <tfoot className="text-center">{children}</tfoot>;
}

function TableRow({ children, className = "", ...props }) {
  return (
    <tr className={className} {...props}>
      {children}
    </tr>
  );
}

function TableCell({ children, head = false, className = "", ...props }) {
  const Tag = head ? "th" : "td";
  return (
    <Tag className={className} {...props}>
      {children}
    </Tag>
  );
}

export { Table, TableHead, TableBody, TableFoot, TableRow, TableCell };
