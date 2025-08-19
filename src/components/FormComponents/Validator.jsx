export default function InputValidate({ validate, children }) {
  return (
    <div className="input-validate">
      {children}
      {validate && <p className="validator-hint">{validate}</p>}
    </div>
  );
}
