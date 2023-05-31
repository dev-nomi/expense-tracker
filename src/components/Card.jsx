function Card({ className, children }) {
  const classes = `rounded-lg shadow-lg shadow-slate-400 ${className}`;

  return <div className={classes}>{children}</div>;
}

export default Card;
