// Practice area service lists supplied by the lawyer (Word documents).
// Edit the wording here; the practice area pages read from this file.

export type ServiceItem = string | { lead: string; text: string };
export type ServiceCategory = { title: string; items: ServiceItem[] };
export type ServiceGroup = { title?: string; categories: ServiceCategory[] };

/** Keyed by practice area slug (see PRACTICE_AREAS in site.ts). */
export const SERVICES_CONTENT: Record<string, ServiceGroup[]> = {
  "corporate-law": [
    {
      categories: [
        {
          title: "Regulatory Governance, Secretarial Standards & Routine Statutory Filings",
          items: [
            { lead: "Entity Incorporation & Structuring", text: "Registering Private Limited Companies, Public Limited Companies, One Person Companies (OPCs), LLPs, and Section 8 (NGO) companies." },
            { lead: "Annual & Event-Based MCA Filings", text: "Filing mandatory annual returns (MGT-7), financial statements (AOC-4), and reporting changes in directors, registered office, or authorized share capital." },
            { lead: "Secretarial Audit & Compliance", text: "Conducting mandatory Secretarial Audits (Form MR-3) for listed and large public companies, and issuing Annual Compliance Certificates." },
            { lead: "Board & Shareholder Governance", text: "Drafting agendas, notices, and minutes for Board Meetings, Annual General Meetings (AGMs), and Extraordinary General Meetings (EGMs), as well as maintaining statutory registers" },
            { lead: "SEBI & Listing Compliances", text: "Managing quarterly/annual disclosures, insider trading regulations, and corporate governance norms for companies listed on stock exchanges (NSE/BSE)" },
            { lead: "FEMA & RBI Reporting", text: "Filing statutory forms (such as FC-GPR and FC-TRS) for Foreign Direct Investment (FDI) and overseas investments" },
            { lead: "Strike-Off & Closure", text: "Managing the voluntary strike-off (Form STK-2) of dormant companies or LLPs" },
          ],
        },
        {
          title: "Legal Risk Mitigation, Commercial Transactions & Litigation",
          items: [
            { lead: "Commercial Contract Drafting & Negotiation", text: "Drafting bespoke agreements including Master Service Agreements (MSAs), Vendor Contracts, Licensing Agreements, Non-Disclosure Agreements (NDAs), and Employment Contracts." },
            { lead: "Corporate Litigation & Dispute Resolution", text: "Representing companies before the High Courts, Supreme Court, Commercial Courts, and Arbitration Tribunals in breach-of-contract, recovery, or shareholder disputes." },
            { lead: "Intellectual Property (IP) Litigation & Strategy", text: "Enforcing trademarks, copyrights, and patents, sending cease-and-desist notices, and handling infringement suits." },
            { lead: "Employment & Labor Law Disputes", text: "Advising on complex terminations, trade union disputes, POSH (Prevention of Sexual Harassment) inquiries, and labor court litigation." },
            { lead: "Legal Opinions & Risk Advisory", text: "Issuing formal legal opinions on regulatory grey areas, liability exposure, and industry-specific laws (e.g., data privacy, fintech, healthcare)." },
            { lead: "White-Collar Crime & Regulatory Investigations", text: "Defending directors and companies in investigations by the Enforcement Directorate (ED), Serious Fraud Investigation Office (SFIO), or Economic Offences Wing (EOW)." },
          ],
        },
      ],
    },
    {
      title: "Transactional & Tribunal Services",
      categories: [
        {
          title: "Fundraising & Venture Capital",
          items: [
            "Drafting Term Sheets, Shareholders' Agreements (SHA), and Share Subscription Agreements (SSA).",
            "Issuing shares/debentures, conducting valuations compliance, and filing PAS-3/MGT-14 with the Registrar of Companies (RoC).",
          ],
        },
        {
          title: "Mergers & Acquisitions (M&A)",
          items: [
            "Conducting legal due diligence and drafting Business Transfer or Share Purchase Agreements.",
            "Managing corporate approvals, creditor/shareholder notices, and regulatory clearances.",
          ],
        },
        {
          title: "NCLT & Insolvency (IBC)",
          items: [
            "Representing clients in High Courts/Supreme Court and arguing complex insolvency or oppression/mismanagement cases.",
            "Authorized to appear before the National Company Law Tribunal (NCLT) and NCLAT for schemes of arrangement, compounding of offenses, and IBC matters.",
          ],
        },
        {
          title: "Corporate Restructuring",
          items: [
            "Structuring joint ventures, demergers, and slump sales to minimize legal liability.",
            "Executing capital reductions, buybacks, and conversions (e.g., LLP to Pvt Ltd).",
          ],
        },
      ],
    },
  ],
  "ip-law": [
    {
      categories: [
        {
          title: "Trademark Services",
          items: [
            "Trademark search and availability check",
            "Trademark registration (word marks, logos, slogans, device marks)",
            "Trademark application filing and prosecution",
            "Replying to examination reports",
            "Trademark opposition and rectification proceedings",
            "Trademark renewal and restoration",
            "Trademark assignment, transfer and licensing",
            "Trademark watch services",
            "Cease and desist notices for trademark infringement",
            "Trademark infringement and passing-off litigation",
            "International trademark filing (Madrid Protocol)",
          ],
        },
        {
          title: "Copyright Services",
          items: [
            "Copyright registration (literary, artistic, musical, cinematographic works, software)",
            "Copyright search and clearance",
            "Copyright assignment and licensing agreements",
            "Copyright infringement notices and litigation",
            "Copyright society and royalty advisory",
            "Takedown notices for online infringement",
          ],
        },
        {
          title: "Patent Services",
          items: [
            "Patent search and patentability assessment",
            "Provisional and complete patent filing",
            "Patent drafting and prosecution",
            "Response to First Examination Reports (FER)",
            "Patent opposition (pre-grant and post-grant)",
            "Patent licensing and technology transfer agreements",
            "Patent infringement advisory and litigation",
            "International patent filing (PCT)",
            "Patent renewal and maintenance",
          ],
        },
        {
          title: "Design Registration",
          items: [
            "Industrial design search and registration",
            "Design renewal and restoration",
            "Design infringement advisory and enforcement",
          ],
        },
        {
          title: "Other IP Rights",
          items: [
            "Geographical Indications (GI) registration",
            "Domain name disputes (UDRP / INDRP)",
            "Trade secret and confidential information protection",
            "Plant variety and farmers' rights advisory",
            "Semiconductor integrated circuit layout design protection",
          ],
        },
        {
          title: "IP Agreements and Documentation",
          items: [
            "Non-disclosure agreements (NDAs)",
            "IP assignment and licensing agreements",
            "Franchise and technology licensing agreements",
            "Employment IP clauses and invention assignment agreements",
            "Software development and SaaS agreements",
            "Brand collaboration and co-branding agreements",
          ],
        },
        {
          title: "IP Litigation and Enforcement",
          items: [
            "Infringement suits before District Courts and High Courts",
            "Interim injunctions and Anton Piller orders",
            "Appeals before High Courts and other appellate forums",
            "Customs recordal and border enforcement",
            "Anti-counterfeiting actions and raids",
            "Dispute resolution through mediation and arbitration",
          ],
        },
        {
          title: "Company Secretary Services (IP and Corporate)",
          items: [
            "IP due diligence for mergers, acquisitions and investments",
            "IP portfolio audit and management",
            "Valuation support for IP assets",
            "Compliance for startups (Startup India IP benefits, fast-track filing)",
            "Corporate structuring to hold and license IP",
            "Company, LLP and startup incorporation with brand protection",
            "ROC compliance and secretarial support for IP-driven companies",
            "Board and shareholder resolutions on IP transactions",
            "FEMA and RBI compliance for cross-border royalty and licensing payments",
          ],
        },
        {
          title: "Advisory and Consulting",
          items: [
            "IP strategy and portfolio planning",
            "Brand protection strategy",
            "Freedom-to-operate (FTO) opinions",
            "Legal opinions on IP ownership and infringement risk",
            "IP awareness workshops and training for businesses",
            "Startup and MSME IP advisory, including government subsidy schemes",
          ],
        },
      ],
    },
  ],
  "employment-labour-law": [
    {
      categories: [
        {
          title: "Employment Contracts & Documentation",
          items: [
            "Drafting and vetting of appointment letters, employment agreements and offer letters",
            "Drafting of confidentiality, non-disclosure, non-compete and non-solicitation clauses",
            "Drafting of consultancy, contractor and fixed-term employment agreements",
            "Preparation of HR policies, employee handbooks and codes of conduct",
            "Drafting of service rules, standing orders and leave, attendance and travel policies",
            "Preparation of separation, resignation, termination and full-and-final settlement documents",
          ],
        },
        {
          title: "Labour Law Compliance & Advisory",
          items: [
            "Applicability assessment of labour laws based on industry, size and location",
            "Advisory on the four Labour Codes: Code on Wages, Industrial Relations Code, Code on Social Security and OSH Code",
            "Compliance under the Shops and Establishments Act, Factories Act and Contract Labour (Regulation and Abolition) Act",
            "Registrations and licences: Shops & Establishments, Contract Labour, Inter-State Migrant Workmen and others",
            "Advisory on minimum wages, working hours, overtime, leave and weekly offs",
            "Advisory on Payment of Wages, Bonus and Gratuity, and Equal Remuneration",
            "Advisory on Maternity Benefit, Employees' Compensation and Child/Adolescent Labour laws",
            "Advisory on Professional Tax and Labour Welfare Fund",
          ],
        },
        {
          title: "Social Security Compliance (PF, ESI & Gratuity)",
          items: [
            "Establishment registration and employee enrolment under EPF and ESI",
            "Monthly, annual and periodic return filing and challan support",
            "Representation before EPFO and ESIC authorities, including inspections and assessments",
            "Handling of Section 7A, 14B and 7Q inquiries and damages proceedings",
            "Gratuity nomination, calculation and claim advisory",
          ],
        },
        {
          title: "Statutory Registers, Returns & Records",
          items: [
            "Maintenance of statutory registers and records as required under applicable labour laws",
            "Preparation and filing of annual and half-yearly returns",
            "Display of notices and abstracts as required by law",
            "Statutory compliance calendar and due-date tracking",
          ],
        },
        {
          title: "Labour Law Audit & Due Diligence",
          items: [
            "Periodic statutory compliance audits and gap analysis",
            "Risk assessment and corrective action plans",
            "Labour and employment due diligence for mergers, acquisitions and investments",
            "Mock inspections to prepare for labour department visits",
          ],
        },
        {
          title: "POSH Act Compliance (Prevention of Sexual Harassment)",
          items: [
            "Drafting of POSH policy and awareness material",
            "Assistance in constituting the Internal Committee (IC)",
            "Training and awareness programmes for employees and IC members",
            "Support for inquiry procedures and preparation of inquiry reports",
            "Annual report filing and compliance documentation",
          ],
        },
        {
          title: "Industrial Relations & Dispute Resolution",
          items: [
            "Advisory on retrenchment, lay-off, closure and transfer of undertaking",
            "Handling of strikes, lockouts and collective bargaining matters",
            "Settlements and negotiations with employees and trade unions",
            "Conciliation proceedings before the labour authorities",
            "Representation before Labour Courts, Industrial Tribunals and the Labour Commissioner",
          ],
        },
        {
          title: "Domestic Enquiry & Disciplinary Proceedings",
          items: [
            "Drafting of show-cause notices, charge sheets and suspension orders",
            "Conducting domestic enquiries or acting as enquiry officer / presenting officer",
            "Preparation of enquiry reports and punishment orders",
            "Advisory on misconduct, absenteeism, indiscipline and performance issues",
          ],
        },
        {
          title: "Litigation & Representation",
          items: [
            "Appearance before the High Court and Supreme Court in service and labour matters",
            "Appearance before Labour Courts, Industrial Tribunals and the Employees' Provident Fund Appellate Tribunal",
            "Representation in matters under the Payment of Gratuity, Minimum Wages and Payment of Wages Acts",
            "Drafting of replies to legal notices and labour department notices",
            "Representation of employers and employees in individual and collective disputes",
          ],
        },
        {
          title: "Company Secretarial Services Relating to Employment",
          items: [
            "Drafting and approval of ESOP, ESPP and employee incentive schemes",
            "Compliance for appointment and remuneration of Directors and Key Managerial Personnel",
            "Board and shareholder resolutions on employment and remuneration matters",
            "Compliance with Companies Act provisions on managerial remuneration",
            "Maintenance of statutory registers and secretarial records",
            "Secretarial audit and annual ROC filings",
          ],
        },
        {
          title: "Startup, SME & Business Support",
          items: [
            "Employment law structuring for new businesses and startups",
            "Contractor vs. employee classification advisory",
            "Gig and platform worker, and remote-work policy advisory",
            "Outsourcing and manpower supply arrangement advisory",
            "Compliance support for multi-state operations",
          ],
        },
        {
          title: "Employee Representation & Support",
          items: [
            "Legal advisory for employees on termination, wrongful dismissal and non-payment of dues",
            "Assistance in recovery of salary, gratuity, bonus and other dues",
            "Review of employment contracts, severance and exit terms",
            "Representation in individual employment disputes",
          ],
        },
        {
          title: "Training, Workshops & Retainership",
          items: [
            "Workshops on labour law compliance for HR and management",
            "Training on POSH, workplace conduct and disciplinary procedures",
            "Monthly or annual retainership for ongoing HR and legal support",
            "Regular legal updates and circulars on changes in labour law",
          ],
        },
      ],
    },
  ],
  "real-estate-property-land-law": [
    {
      title: "Legal Services (Advocate) – Real Estate, Property & Land Law",
      categories: [
        {
          title: "Title Verification & Due Diligence",
          items: [
            "Title search and investigation of property records (30-year / 13-year chain of title)",
            "Verification of sale deeds, gift deeds, partition deeds, release deeds, wills and settlement deeds",
            "Review of Encumbrance Certificate (EC), Khata, RTC/Pahani, Mutation Register and tax paid receipts",
            "Verification of survey sketches, village maps and land boundaries",
            "Legal due diligence for buyers, investors, banks and builders",
            "Legal Opinion / Title Report for bank loans and home loan approvals",
          ],
        },
        {
          title: "Property Documentation & Drafting",
          items: [
            "Drafting and vetting of Sale Deeds and Agreements to Sell",
            "Gift Deeds, Settlement Deeds, Release Deeds and Partition Deeds",
            "Lease Deeds, Rent / Leave & License Agreements, Lease-cum-Sale Agreements",
            "Power of Attorney (General / Special) and Affidavits",
            "Joint Development Agreements (JDA) and Development Agreements",
            "Builder–Buyer Agreements and Construction Agreements",
            "Mortgage Deeds, Loan Agreements and Deed of Reconveyance",
            "Will drafting, Codicils and Probate / Succession advice for property",
          ],
        },
        {
          title: "Registration, Stamp Duty & Mutation",
          items: [
            "Assistance with property registration before the Sub-Registrar",
            "Stamp duty and registration fee computation and advisory",
            "Mutation of Khata / Katha transfer and name change in revenue records",
            "Correction and rectification deeds",
            "Registration of Power of Attorney, Lease and Development Agreements",
          ],
        },
        {
          title: "Land Laws & Revenue Matters",
          items: [
            "Agricultural land purchase and eligibility advisory",
            "Land conversion (agricultural to non-agricultural) assistance",
            "Land use and zoning (Master Plan / CDP) verification",
            "Land survey, boundary disputes and demarcation matters",
            "Revenue court matters before Tahsildar, Assistant Commissioner and Deputy Commissioner",
            "Land acquisition, compensation and rehabilitation matters",
            "Government, Inam, Gomala, Revenue and Bhoodan land verification",
          ],
        },
        {
          title: "Property Disputes & Litigation",
          items: [
            "Civil suits for title declaration, possession, injunction and specific performance",
            "Partition suits and family property disputes",
            "Eviction, tenancy and rent control matters",
            "Encroachment and trespass remedies",
            "Cancellation of fraudulent or forged documents",
            "Cheating and fraud complaints relating to property",
            "Appearance before Civil Courts, High Court, Tribunals and Revenue Authorities",
            "Arbitration, mediation and out-of-court settlement",
          ],
        },
        {
          title: "RERA & Builder / Buyer Matters",
          items: [
            "RERA registration of real estate projects and agents",
            "RERA compliance, quarterly updates and annual audit filings",
            "Complaints before RERA / Appellate Tribunal for delay, defects and refund",
            "Review of builder agreements, allotment letters and project approvals",
            "Consumer Forum matters for deficiency of service by builders",
            "Advisory on Occupancy Certificate (OC) and Completion Certificate (CC)",
          ],
        },
        {
          title: "Landlord, Tenant & Commercial Property",
          items: [
            "Commercial lease and licence agreements for offices, shops and warehouses",
            "Lock-in, escalation and exit clause advisory",
            "Eviction notices and recovery of rent arrears",
            "Due diligence for commercial property acquisition and leasing",
            "Advisory on property transactions by NRIs and foreign nationals",
          ],
        },
        {
          title: "Housing Society, Apartment & Layout Matters",
          items: [
            "Apartment Owners' Association / Co-operative Housing Society formation and bye-laws",
            "Conveyance deed and deemed conveyance",
            "Layout approvals, BDA / BBMP / DTCP / local authority matters",
            "Society disputes, maintenance and common-area issues",
            "Property tax, betterment charges and utility-related issues",
          ],
        },
        {
          title: "Banking, Mortgage & Recovery",
          items: [
            "Legal scrutiny of property documents for banks and NBFCs",
            "Creation and release of mortgage; charge verification",
            "SARFAESI and DRT matters",
            "Defending borrowers against recovery proceedings",
          ],
        },
      ],
    },
    {
      title: "Company Secretary Services – Real Estate & Property Entities",
      categories: [
        {
          title: "Entity Incorporation & Structuring",
          items: [
            "Incorporation of Private Limited Companies, LLPs, OPCs and Partnership Firms for real estate",
            "Formation of Section 8 / Association structures for property-related activities",
            "Drafting of MOA, AOA, LLP Agreement and Partnership Deeds",
            "Advisory on the best structure for developers, land-owning families and investors",
            "Name approval, PAN, TAN, GST, MSME and Shop & Establishment registrations",
          ],
        },
        {
          title: "Statutory & ROC Compliance",
          items: [
            "Annual filings with the Registrar of Companies (AOC-4, MGT-7 / 7A, LLP Form 8 and 11)",
            "Conducting Board Meetings, AGMs and EGMs; drafting notices, agendas and minutes",
            "Maintenance of statutory registers and records",
            "Director KYC (DIR-3 KYC), DIN, appointment and resignation of directors",
            "Change in registered office, name, objects or share capital",
            "Compliance calendar and reminders for due dates",
          ],
        },
        {
          title: "Property-related Corporate Matters",
          items: [
            "Board and shareholder resolutions for buying, selling, leasing or mortgaging property",
            "Compliance with Section 180, 185, 186 and 188 of the Companies Act, 2013",
            "Related-party transaction documentation",
            "Registration, modification and satisfaction of charges (CHG-1, CHG-4, etc.)",
            "Issue and transfer of shares; valuation and share certificate compliance",
            "Joint venture and shareholders' agreements for real estate projects",
          ],
        },
        {
          title: "Real Estate Project Entity Compliance",
          items: [
            "SPV formation for individual real estate projects",
            "RERA-linked company secretarial compliance",
            "Certification of documents and compliance certificates",
            "Due diligence of developer and land-owning company records",
            "Secretarial audit and compliance health check",
          ],
        },
        {
          title: "FEMA & Foreign Investment Compliance",
          items: [
            "FEMA advisory on acquiring and transferring property in India by NRIs, OCIs and foreign entities",
            "FDI in real estate: reporting (FC-GPR, FC-TRS) and compliance",
            "RBI filings and annual FLA returns",
            "Repatriation of sale proceeds: advisory and documentation",
          ],
        },
        {
          title: "LLP, Partnership & Family Business Advisory",
          items: [
            "Conversion of firm to LLP / company",
            "Admission, retirement and reconstitution of partners",
            "Succession planning and family settlement for property holdings",
            "Winding up, striking off and closure of entities",
          ],
        },
        {
          title: "Registrations, Licences & Approvals",
          items: [
            "GST registration and advisory for real estate and construction",
            "Trade licence and professional tax registrations",
            "Project-level licences and approvals coordination",
            "Trademark and brand registration for developers and agents",
          ],
        },
      ],
    },
    {
      title: "Additional Services",
      categories: [
        {
          title: "Advisory & Support",
          items: [
            "Pre-purchase property consultation (one-time or retainer)",
            "Retainer-based legal and compliance support for builders, agents and investors",
            "Property portfolio review and risk assessment",
            "Legal notices: drafting, sending and replying",
            "Documentation checklists and step-by-step guidance for buyers and sellers",
            "Online / video consultation and document review",
          ],
        },
      ],
    },
  ],
  "cyber-digital-law": [
    {
      categories: [
        {
          title: "Data Protection & Privacy Law (DPDP Act, 2023)",
          items: [
            "DPDP Act compliance assessment and gap analysis",
            "Drafting privacy policies, notices and consent forms (website, app, offline)",
            "Consent manager and consent framework advisory",
            "Data Fiduciary / Significant Data Fiduciary obligations advisory",
            "Data Principal rights handling: access, correction, erasure, grievance redressal",
            "Data Protection Officer (DPO) advisory and outsourced DPO support",
            "Data Processing Agreements (DPAs) with vendors and processors",
            "Children's data and verifiable parental consent compliance",
            "Cross-border data transfer advisory",
            "Data retention and deletion policy drafting",
            "Data mapping and personal data inventory support",
          ],
        },
        {
          title: "Cyber Law & IT Act Advisory",
          items: [
            "Advisory under the Information Technology Act, 2000 and IT Rules",
            "Intermediary compliance: due diligence, grievance officer, takedown requests",
            "Legal opinions on cybercrimes, unauthorised access, data theft and identity theft",
            "Reasonable security practices and procedures (Section 43A / SPDI Rules) compliance",
            "Digital signature and electronic records legal advisory",
            "Cyber law compliance for startups, SMEs, fintech, e-commerce and SaaS companies",
          ],
        },
        {
          title: "Cyber Incident & Data Breach Response",
          items: [
            "Data breach legal response and incident management support",
            "Breach notification to CERT-In, Data Protection Board, regulators and affected individuals",
            "Compliance with CERT-In directions (6-hour incident reporting, log retention)",
            "Preparing incident response plans and breach response playbooks",
            "Legal coordination with forensic investigators and law enforcement",
            "Evidence preservation and digital evidence admissibility advice",
            "Ransomware, phishing and business email compromise legal guidance",
            "Regulatory inquiry and show-cause notice response",
          ],
        },
        {
          title: "Cyber Litigation & Dispute Resolution",
          items: [
            "Filing and defending cybercrime complaints (cyber cell / police)",
            "Online fraud, financial fraud and UPI/banking fraud recovery support",
            "Defamation, impersonation and online harassment remedies",
            "Content takedown and removal notices (social media, websites, search engines)",
            "Domain name disputes and cybersquatting (UDRP / INDRP)",
            "Adjudication proceedings under the IT Act",
            "Representation before courts, tribunals and appellate authorities",
            "Cease-and-desist notices and legal notices for digital misconduct",
          ],
        },
        {
          title: "Technology & Digital Contracts",
          items: [
            "Drafting and vetting SaaS, software licensing and IT service agreements",
            "Website Terms of Use, Privacy Policy, Cookie Policy and Refund Policy",
            "Non-Disclosure Agreements (NDAs) and confidentiality agreements",
            "Cloud hosting, outsourcing and managed service agreements with security clauses",
            "Vendor and third-party risk contracts and SLAs",
            "Employment agreements with IT security and data confidentiality clauses",
            "Source code escrow and technology transfer agreements",
          ],
        },
        {
          title: "Intellectual Property in the Digital Space",
          items: [
            "Trademark, copyright and trade secret protection for digital assets",
            "Software, app and database IP protection",
            "Anti-piracy and infringement action for online content",
            "Open-source licence compliance review",
            "Protection of confidential information and insider-leak legal remedies",
          ],
        },
        {
          title: "Corporate Governance for Cyber Risk (Company Secretary Services)",
          items: [
            "Board-level cyber risk governance framework and policy approval",
            "Drafting board resolutions on cyber security, data protection and IT policies",
            "Cyber risk disclosures in Board's Report and annual filings",
            "Secretarial audit with IT and data-compliance checks",
            "Internal controls and compliance calendar for cyber and data regulations",
            "Appointment advisory for CISO, DPO and compliance officers",
            "Whistle-blower and vigil mechanism policy for cyber incidents",
            "Related-party and vendor approval documentation for IT and cloud contracts",
            "Maintenance of statutory registers and records in electronic form",
          ],
        },
        {
          title: "Regulatory Compliance for Listed & Regulated Entities",
          items: [
            "SEBI LODR cyber security and disclosure requirements",
            "SEBI Cyber Security and Cyber Resilience Framework (CSCRF) advisory",
            "RBI guidelines on IT governance, outsourcing and digital lending",
            "IRDAI information and cyber security guidelines",
            "Payment aggregator / PCI-DSS related legal and compliance advisory",
            "Sector-specific compliance: fintech, healthtech, edtech, e-commerce, BPO/KPO",
            "Responding to regulatory audits, inspections and notices",
          ],
        },
        {
          title: "Information Security Policies & Certifications",
          items: [
            "Drafting Information Security Policy, Acceptable Use Policy and BYOD Policy",
            "Access control, password, remote-work and clean-desk policies",
            "Business continuity (BCP) and disaster recovery (DR) policy documentation",
            "Support for ISO 27001, ISO 27701, SOC 2 and GDPR readiness (documentation and legal side)",
            "Cyber insurance policy review and claim support",
            "Compliance audits and periodic compliance health checks",
          ],
        },
        {
          title: "International Data & Cross-Border Compliance",
          items: [
            "GDPR, UK GDPR, CCPA/CPRA and other global privacy law advisory",
            "Standard Contractual Clauses (SCCs) and international data transfer agreements",
            "EU / UK representative and cross-border compliance structuring",
            "Compliance for Indian companies serving foreign customers and vice versa",
          ],
        },
        {
          title: "Digital Business & E-Commerce Legal Services",
          items: [
            "E-commerce rules compliance (Consumer Protection E-Commerce Rules, 2020)",
            "Online payment, wallet and digital lending legal compliance",
            "Digital marketing, influencer and advertising law compliance",
            "Dark patterns and unfair trade practice review",
            "Crypto, virtual digital asset and blockchain legal advisory",
            "Artificial intelligence legal and ethical compliance advisory",
          ],
        },
        {
          title: "Training, Awareness & Audits",
          items: [
            "Employee cyber law and data protection awareness training",
            "Board and senior management cyber governance workshops",
            "Phishing and social engineering awareness programs (legal and policy aspects)",
            "Vendor and third-party compliance audits",
            "Privacy impact assessments (PIA) and data protection impact assessments (DPIA)",
            "Periodic compliance reports and dashboards for management",
          ],
        },
        {
          title: "Incorporation & Structuring for Tech Businesses",
          items: [
            "Company, LLP and startup incorporation for tech and cyber security firms",
            "Startup India recognition and compliance support",
            "Shareholders' agreements and investor due diligence (including data and IT due diligence)",
            "Mergers, acquisitions and restructuring with cyber and data due diligence",
            "ROC, MCA and annual compliance filings",
          ],
        },
      ],
    },
  ],
  "civil-law": [
    {
      categories: [
        {
          title: "Civil Litigation & Court Representation",
          items: [
            "Filing and defending civil suits in District Courts, High Courts and Tribunals",
            "Money recovery suits and summary suits (Order XXXVII CPC)",
            "Suits for specific performance of contracts",
            "Suits for declaration, permanent and temporary injunctions",
            "Suits for possession, eviction and recovery of rent",
            "Partition suits and property disputes among family members",
            "Defamation and damages / compensation claims",
            "Execution of decrees and orders",
            "Civil appeals, revisions, review petitions and miscellaneous applications",
            "Interim reliefs: stay orders, attachment before judgment, receiver appointment",
          ],
        },
        {
          title: "Property & Real Estate Law",
          items: [
            "Title verification and legal due diligence on land, flats and commercial property",
            "Encumbrance, khata, mutation and revenue record checks",
            "Drafting and registration of sale deeds, gift deeds, settlement deeds and release deeds",
            "Partition deeds and family settlement agreements",
            "Lease deeds, rent / leave-and-licence agreements",
            "Joint development agreements and builder-buyer agreements",
            "RERA complaints and advisory",
            "Property dispute resolution, encroachment and boundary disputes",
            "Power of attorney drafting and registration",
            "Legal opinion for bank loans and property purchase",
          ],
        },
        {
          title: "Contracts & Agreements",
          items: [
            "Drafting, vetting and negotiation of commercial contracts",
            "Service, vendor, supply and distribution agreements",
            "Franchise, licensing and joint venture agreements",
            "Non-disclosure, non-compete and employment agreements",
            "Memorandum of Understanding (MoU) and letters of intent",
            "Partnership deeds and LLP agreements",
            "Shareholders' and founders' agreements",
            "Contract review, risk assessment and breach advisory",
          ],
        },
        {
          title: "Legal Notices & Recovery",
          items: [
            "Drafting and sending legal notices",
            "Replying to legal notices",
            "Debt and dues recovery for individuals and businesses",
            "Cheque bounce cases (Section 138, Negotiable Instruments Act)",
            "Pre-litigation settlement and negotiation",
            "Recovery under the Insolvency and Bankruptcy Code (IBC) for creditors and debtors",
          ],
        },
        {
          title: "Succession, Wills & Estate Matters",
          items: [
            "Drafting and registration of Wills",
            "Probate and Letters of Administration",
            "Succession certificate",
            "Legal heir certificate and legal heir documentation",
            "Inheritance and estate disputes",
            "Family trusts and estate planning",
          ],
        },
        {
          title: "Consumer & Tenancy Matters",
          items: [
            "Consumer complaints before District, State and National Commissions",
            "Deficiency of service and defective product claims",
            "Builder and insurance claim disputes",
            "Landlord–tenant disputes, eviction and rent control matters",
            "Rental agreement drafting and registration",
          ],
        },
        {
          title: "Arbitration, Mediation & Alternative Dispute Resolution",
          items: [
            "Arbitration representation and appointment of arbitrators",
            "Drafting arbitration clauses and agreements",
            "Enforcement and challenge of arbitral awards",
            "Mediation and conciliation",
            "Lok Adalat and pre-litigation settlements",
          ],
        },
        {
          title: "Documentation, Notary & Advisory",
          items: [
            "Affidavits, declarations and indemnity bonds",
            "Notarisation and attestation of documents",
            "Name change, gap and address proof documentation",
            "Legal opinions on civil matters",
            "Retainer-based legal advisory for individuals, businesses and institutions",
            "Intellectual property: trademark, copyright and design registration support",
          ],
        },
      ],
    },
  ],
  "international-law": [
    {
      categories: [
        {
          title: "Cross-Border Corporate & Commercial Law",
          items: [
            "International commercial contracts – drafting, review and negotiation (supply, distribution, agency, franchise, licensing, joint venture)",
            "Joint venture and shareholders' agreements with foreign partners",
            "Mergers, acquisitions, share purchase and asset transfer involving foreign parties",
            "Cross-border restructuring, amalgamation and demerger",
            "Legal due diligence for international transactions",
            "Governing law, jurisdiction and dispute-resolution clause advisory",
            "Non-disclosure, technology transfer and service agreements for global operations",
          ],
        },
        {
          title: "Foreign Investment & Exchange Control (FEMA)",
          items: [
            "Foreign Direct Investment (FDI) advisory – entry routes, sectoral caps and conditions",
            "Inbound investment filings – FC-GPR, FC-TRS, FLA return and related RBI reporting",
            "Outbound investment / Overseas Direct Investment (ODI) structuring and filings",
            "External Commercial Borrowings (ECB) advisory and compliance",
            "Compounding of contraventions and regularisation with RBI",
            "Pricing guidelines, valuation and downstream investment compliance",
            "Remittance, repatriation of profits and royalty / fee payments advisory",
          ],
        },
        {
          title: "Setting Up a Business in India (for Foreign Companies & NRIs)",
          items: [
            "Advisory on choosing the right entity – subsidiary, LLP, branch, liaison or project office",
            "Company and LLP incorporation, including foreign-owned and NRI-owned entities",
            "Name approval, registration, PAN / TAN, GST and other statutory registrations",
            "Opening bank accounts and routing capital infusion through proper channels",
            "Drafting of constitutional documents (MOA, AOA, LLP Agreement)",
            "Nominee / resident director and registered office arrangements",
            "Foreign company registration under the Companies Act",
          ],
        },
        {
          title: "Expanding Indian Businesses Abroad",
          items: [
            "Setting up wholly-owned subsidiaries, JVs or branches overseas",
            "Overseas entity structuring – jurisdiction comparison (UAE, Singapore, UK, USA and others)",
            "Cross-border holding structure and group restructuring advisory",
            "Annual Performance Report (APR) and post-investment compliance",
            "Winding up, strike-off or exit from foreign entities",
          ],
        },
        {
          title: "Company Secretarial & Corporate Governance Services",
          items: [
            "Maintenance of statutory registers, minutes and records",
            "Board, committee and general meeting – notices, agendas, minutes and resolutions",
            "Annual ROC filings – AOC-4, MGT-7, ADT-1 and event-based forms",
            "Director appointment, resignation, KYC (DIR-3 KYC) and disclosures",
            "Share capital matters – allotment, transfer, transmission, buyback and issue of share certificates",
            "Compliance health check and secretarial audit",
            "Corporate governance advisory for listed and unlisted companies",
            "Compliance calendar, outsourced / virtual company secretary services",
            "Secretarial support for foreign parent companies of Indian subsidiaries",
          ],
        },
        {
          title: "International Arbitration & Dispute Resolution",
          items: [
            "Representation in international commercial arbitration (ICC, SIAC, LCIA, ICAD and others)",
            "Domestic and institutional arbitration and mediation",
            "Pre-arbitration notices, negotiation and settlement strategy",
            "Enforcement of foreign arbitral awards and foreign judgments",
            "Interim relief and injunctions in support of arbitration",
            "Cross-border debt recovery and insolvency-related advisory",
          ],
        },
        {
          title: "Intellectual Property & Technology Law",
          items: [
            "Trademark, copyright, patent and design – Indian and international filings (Madrid Protocol, PCT)",
            "IP licensing, assignment and technology transfer agreements",
            "Brand protection and anti-counterfeiting strategy",
            "Data protection and privacy compliance (DPDP Act, GDPR)",
            "Terms of use, privacy policies and e-commerce legal documentation",
            "IT, software and SaaS contracts",
          ],
        },
        {
          title: "International Taxation & Regulatory Advisory",
          items: [
            "Double Taxation Avoidance Agreement (DTAA) advisory",
            "Permanent establishment and withholding tax matters",
            "Transfer pricing documentation and intercompany agreements",
            "Coordination with tax consultants and chartered accountants on cross-border structuring",
            "Foreign Account / asset disclosure and compliance advisory for residents and NRIs",
          ],
        },
        {
          title: "Import–Export, Trade & Customs Law",
          items: [
            "Import Export Code (IEC) registration and trade compliance",
            "Export promotion schemes, FTAs and rules of origin advisory",
            "Anti-dumping, customs and DGFT-related matters",
            "International sale of goods, shipping and logistics contracts",
            "Sanctions, export control and anti-bribery compliance",
          ],
        },
        {
          title: "Immigration, Employment & Cross-Border Mobility",
          items: [
            "Employment agreements and expatriate / secondment arrangements",
            "Work permit, business visa and employment visa advisory",
            "Global employee stock option plans (ESOP) – cross-border compliance",
            "Labour law and POSH compliance for multinational operations",
          ],
        },
        {
          title: "Startup, Venture Capital & Private Equity",
          items: [
            "Term sheets, subscription and shareholders' agreements",
            "Foreign venture capital and angel investment structuring",
            "Flip / reverse-flip structuring and redomiciliation advisory",
            "ESOP design, valuation support and cap table management",
            "Investor reporting and compliance",
          ],
        },
        {
          title: "Other Specialised & Support Services",
          items: [
            "Notarisation, apostille and legalisation of documents for use abroad",
            "Legal opinions for banks, investors and foreign regulators",
            "Power of attorney and cross-border documentation",
            "Regulatory approvals and liaison with RBI, MCA, SEBI and other authorities",
            "Retainer-based legal and compliance support for international clients",
            "Training and compliance workshops for management and directors",
          ],
        },
      ],
    },
  ],
  "arbitration-mediation": [
    {
      categories: [
        {
          title: "Arbitration Services",
          items: [
            "Advising on arbitration agreements and drafting arbitration clauses for contracts",
            "Pre-arbitration legal advice and case assessment",
            "Issuing legal notices and invoking arbitration, including notice under Section 21 of the Arbitration and Conciliation Act, 1996",
            "Appointment of arbitrators, including applications under Section 11 before the High Court or Supreme Court",
            "Drafting and filing Statement of Claim, Statement of Defence and Counter-Claim",
            "Representation before sole arbitrators and arbitral tribunals (ad hoc and institutional)",
            "Institutional arbitration support (MCIA, DIAC, ICC, SIAC, LCIA and other institutions)",
            "Interim relief and urgent applications under Section 9 and Section 17",
            "Emergency arbitrator proceedings",
            "Examination and cross-examination of witnesses and expert witnesses",
            "Preparation of written submissions, rejoinders and oral arguments",
            "Challenge to arbitral awards under Section 34 and appeals under Section 37",
            "Enforcement and execution of domestic and foreign arbitral awards",
            "International commercial arbitration advisory",
            "Acting as arbitrator or presiding arbitrator in domestic disputes",
          ],
        },
        {
          title: "Mediation and Conciliation Services",
          items: [
            "Pre-litigation mediation and settlement negotiation",
            "Representation of parties in mediation and conciliation proceedings",
            "Acting as a neutral mediator or conciliator (subject to empanelment and qualification)",
            "Pre-institution mediation in commercial disputes under the Commercial Courts Act, 2015 (Section 12A)",
            "Court-annexed and court-referred mediation support",
            "Drafting mediation agreements and mediated settlement agreements",
            "Drafting settlement terms and enforcing settlement agreements",
            "Mediation strategy, confidential case briefs and negotiation preparation",
            "Family, community and workplace mediation (where applicable)",
            "Online dispute resolution (ODR) support",
          ],
        },
        {
          title: "Company Secretarial and Corporate Dispute Services",
          items: [
            "Shareholder and partner dispute resolution",
            "Boardroom and promoter disputes, including oppression and mismanagement matters",
            "Advisory on dispute resolution clauses in Shareholders' Agreements, Joint Venture Agreements and Articles of Association",
            "Co-founder and startup dispute resolution",
            "Matters before the National Company Law Tribunal (NCLT) and NCLAT",
            "Corporate governance advisory and compliance review to prevent disputes",
            "Maintenance of statutory registers, minutes and records required as evidence in disputes",
            "Secretarial audit and due diligence in disputed transactions",
            "Board and general meeting procedure advisory, including resolutions to authorise dispute proceedings",
            "ROC filings and compliance under the Companies Act, 2013",
            "Advisory on Limited Liability Partnership (LLP) disputes and exits",
            "Valuation-related and exit disputes advisory in coordination with valuers",
          ],
        },
        {
          title: "Commercial and Contract Dispute Services",
          items: [
            "Contract drafting, review and vetting with dispute-resolution clauses",
            "Breach of contract and recovery claims",
            "Construction, infrastructure and real estate disputes",
            "Partnership, joint venture and franchise disputes",
            "Supply, distribution and vendor disputes",
            "Banking, finance and loan recovery disputes",
            "Employment and service-related commercial disputes",
            "Insolvency-related matters and MSME dispute resolution (including MSME Facilitation Council)",
            "Intellectual property and technology contract disputes",
            "Cross-border trade and international contract disputes",
          ],
        },
        {
          title: "Litigation Support and Allied Services",
          items: [
            "Civil and commercial court litigation support",
            "Legal notices, replies and demand letters",
            "Legal opinions and risk assessment",
            "Document review, evidence compilation and case file preparation",
            "Liaison with arbitral institutions, courts and tribunals",
            "Coordination with experts, forensic accountants and valuers",
            "Retainer-based legal and compliance services for businesses",
            "Training, workshops and awareness sessions on arbitration, mediation and corporate compliance",
          ],
        },
      ],
    },
  ],
};
