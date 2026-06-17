export type Service = {
  code: string;
  slug: string;
  title: string;
  summary: string;
  deliverables: string[];
  bestFor: string[];
};

export const services: Service[] = [
  {
    code: "01",
    slug: "virtual-cfo",
    title: "Virtual CFO",
    summary: "Strategic finance support with reporting, cash flow visibility, budgeting discipline and founder-level decision support.",
    deliverables: ["Monthly MIS packs", "Cash flow tracking", "Budgeting support", "Review cadence"],
    bestFor: ["Growing businesses", "Founders", "Finance teams"]
  },
  {
    code: "02",
    slug: "zoho-consulting-implementation",
    title: "Zoho Consulting and Implementation",
    summary: "Workflow design and implementation for Zoho Finance systems with access controls, automation and clean operating processes.",
    deliverables: ["Workflow design", "Access controls", "Automation setup", "SOP support"],
    bestFor: ["Zoho users", "Cloud finance teams", "Business owners"]
  },
  {
    code: "03",
    slug: "zoho-training",
    title: "Zoho Training",
    summary: "Practical Zoho Finance training for owners, finance teams and CA firms using real-world process examples.",
    deliverables: ["Role-based sessions", "Process walkthroughs", "Use-case examples", "Adoption support"],
    bestFor: ["Owners", "Finance teams", "CA firms"]
  },
  {
    code: "04",
    slug: "outsourced-accounting",
    title: "Outsourced Accounting",
    summary: "Bookkeeping, reconciliation and management reporting support across modern accounting tools.",
    deliverables: ["Bookkeeping", "Reconciliations", "Receivables tracking", "Monthly reporting"],
    bestFor: ["Lean teams", "SMEs", "Founders"]
  },
  {
    code: "05",
    slug: "tally-to-zoho-migration",
    title: "Tally to Zoho Migration",
    summary: "Controlled migration from Tally to Zoho with mapping, cleanup, continuity checks and validation support.",
    deliverables: ["Migration planning", "Ledger mapping", "Data cleanup", "Validation support"],
    bestFor: ["Tally users", "Cloud migration teams", "Owners"]
  },
  {
    code: "06",
    slug: "gst-income-tax-compliance",
    title: "GST and Income Tax Compliance",
    summary: "Compliance support covering GST, TDS, advance tax, review routines and filing discipline.",
    deliverables: ["GST review", "TDS support", "Advance tax support", "Compliance calendar"],
    bestFor: ["SMEs", "Business owners", "Finance teams"]
  }
];
