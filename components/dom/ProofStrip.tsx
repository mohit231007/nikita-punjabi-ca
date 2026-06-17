const proofItems = ["Virtual CFO", "Zoho Finance", "Cloud accounting", "GST and tax"];

export function ProofStrip() {
  return (
    <section className="proof-strip" aria-label="Core expertise">
      {proofItems.map((item) => <div className="proof-card" key={item}><strong>{item}</strong><span>Structured for business clarity</span></div>)}
    </section>
  );
}
