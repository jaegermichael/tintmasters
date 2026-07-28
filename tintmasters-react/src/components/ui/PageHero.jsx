export default function PageHero({ kicker, title, copy, children }) {
  return (
    <section className="page-hero">
      <div className="shell reveal">
        <p className="eyebrow">{kicker}</p>
        <h1>{title}</h1>
        <p>{copy}</p>
        {children}
      </div>
    </section>
  );
}