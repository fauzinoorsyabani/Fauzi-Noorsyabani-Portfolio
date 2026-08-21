/**
 * Quiet Systems design system: Swiss-editorial AI engineer portfolio with asymmetry,
 * graphite monochrome materiality, evidence-led content, and restrained accessible motion.
 */
import {
  ArrowDownRight,
  ArrowUpRight,
  Download,
  Linkedin,
  Mail,
} from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const projectData = [
  {
    id: "01",
    title: "PolaStok",
    category: "AI inventory forecasting platform",
    role: "Team Lead · 2026",
    stack: "Python · ML · Generative AI · Full-stack",
    statement:
      "Demand prediction, anomaly detection, and AI-generated reorder recommendations for Indonesian SMEs.",
    evidence:
      "Led a five-person cross-functional team through more than 900 hours of structured product development.",
    flow: ["FORECAST", "ANOMALY", "REORDER"],
    image: "/manus-storage/fauzi-system-grid_a6d0fb6b.png",
    imageAlt: "Abstract modular system grid representing the PolaStok platform",
  },
  {
    id: "02",
    title: "ClinicalNote AI",
    category: "LLM-powered clinical documentation",
    role: "Solo Developer · 2025",
    stack: "FastAPI · OpenAI API · React · Docker",
    statement:
      "A modular documentation workflow combining real-time transcription, summarization, ICD-10 suggestions, and medication extraction.",
    evidence:
      "Integrated Whisper and GPT-4 through a FastAPI backend, then containerized and deployed it on AWS EC2.",
    flow: ["AUDIO", "EXTRACT", "DOCUMENT"],
    image: "/manus-storage/fauzi-data-geometry_c0cf30f1.png",
    imageAlt: "Abstract translucent data pipeline geometry representing ClinicalNote AI",
  },
  {
    id: "03",
    title: "AI Study Assistant",
    category: "RAG-based knowledge Q&A",
    role: "Solo Developer · 2025",
    stack: "LangChain · ChromaDB · FastAPI · Streamlit",
    statement:
      "Semantic retrieval over more than 500 pages of lecture notes, designed to return answers with source citation.",
    evidence:
      "Built as a FastAPI streaming microservice with a Streamlit chat interface and conversation memory.",
    flow: ["RETRIEVE", "CITE", "RESPOND"],
    image: "/manus-storage/fauzi-cloud-lattice_483a3832.png",
    imageAlt: "Abstract woven cloud topology representing the AI Study Assistant",
  },
  {
    id: "04",
    title: "HR Analytics Pipeline",
    category: "LLM-powered data pipeline",
    role: "Developer & Analyst · 2025",
    stack: "IBM Granite · Python · Data Analytics",
    statement:
      "A multi-step processing pipeline from cleaning to classification, auto-summarization, and executive recommendation.",
    evidence:
      "Processed 838,566 employee reviews during the IBM SkillsBuild × Hacktiv8 capstone.",
    flow: ["CLEAN", "CLASSIFY", "SUMMARIZE"],
    image: "/manus-storage/fauzi-system-grid_a6d0fb6b.png",
    imageAlt: "Abstract modular system grid representing an analytics processing pipeline",
  },
];

const experienceData = [
  {
    period: "2026",
    role: "AI Engineer",
    company: "Pijak × IBM SkillsBuild",
    note: "AI product capstone · PolaStok · Team delivery from data preparation to MVP deployment.",
  },
  {
    period: "2025",
    role: "Campus Lead",
    company: "Google Student Ambassador Program",
    note: "Technology outreach, workshops, campaigns, and hands-on demos reaching 1,000+ students.",
  },
  {
    period: "2025",
    role: "Data Science Intern",
    company: "VINIX Seven Aurum · MSIB",
    note: "Regression modelling and interactive analytics across 97 academic programs at 11 universities.",
  },
  {
    period: "2024",
    role: "Full Stack Web Developer",
    company: "RA Al-Fathunnisa & CV. Putra AR",
    note: "Production applications for education and F&B clients, including CI/CD and workflow automation.",
  },
];

const skills = [
  "LLM Integration",
  "RAG Pipelines",
  "FastAPI",
  "Laravel",
  "PostgreSQL",
  "AWS",
  "Docker",
  "Data Warehousing",
  "CI/CD",
  "Prompt Engineering",
];

const recognitionGallery = [
  {
    id: "01",
    type: "EVENT EVIDENCE",
    title: "Dicoding Developer Conference",
    date: "2026",
    description:
      "In-person event evidence, paired with 1st Place recognition in the Life After DDC Challenge.",
    image: "/manus-storage/Fauzi_Dicoding_Developer_Conference_43657e4b.webp",
    imageAlt: "Fauzi Noorsyabani di Dicoding Developer Conference",
    documentHref: undefined,
  },
  {
    id: "02",
    type: "APPLIED GENAI",
    title: "IBM Granite: Data Classification & Summarization",
    date: "15 JUL 2025",
    description:
      "IBM SkillsBuild completion certificate for an applied data-classification and summarization workflow using IBM Granite.",
    image: "/manus-storage/ibm-granite-certificate_fe95adc9.png",
    imageAlt: "Sertifikat IBM SkillsBuild Data Classification and Summarization Using IBM Granite milik Fauzi Noorsyabani",
    documentHref:
      "/manus-storage/CompletionCertificate_SkillsBuild_DataClassificationandSummarizationUsingIBMGranite_8de5b6a9.pdf",
  },
  {
    id: "03",
    type: "CLOUD FOUNDATIONS",
    title: "AWS Cloud Practitioner Essentials",
    date: "15 APR 2024",
    description:
      "A 13-hour AWS-aligned cloud course covering EC2, S3, IAM, CloudWatch, pricing, and Well-Architected fundamentals.",
    image: "/manus-storage/aws-cloud-certificate_5f323f27.png",
    imageAlt: "Sertifikat Cloud Practitioner Essentials atau Belajar Dasar AWS Cloud milik Fauzi Noorsyabani",
    documentHref: "/manus-storage/CloudPractitionerEssentials_BelajarDasarAWSCloud_a5640405.pdf",
  },
  {
    id: "04",
    type: "DATA OPERATIONS",
    title: "Microsoft Office Specialist: Excel Associate",
    date: "30 DEC 2024",
    description:
      "Microsoft credential for Excel Associate in Microsoft 365 Apps, supporting reliable data and reporting workflows.",
    image: "/manus-storage/microsoft-excel-certificate_4c7aa07a.png",
    imageAlt: "Sertifikat Microsoft Office Specialist Excel Associate milik Fauzi Noorsyabani",
    documentHref: "/manus-storage/MicrosoftExcelAssociate_80e367c4.pdf",
  },
];

function SideMarquee({ side }: { side: "left" | "right" }) {
  const content = ["AI ENGINEER", "SYSTEMS", "RAG", "DATA", "CLOUD", "BUILD →"];
  const items = [...content, ...content];

  return (
    <aside className={`side-marquee side-marquee--${side}`} aria-hidden="true">
      <div className="side-marquee__track">
        {items.map((item, index) => (
          <span key={`${side}-${item}-${index}`}>
            {item} <i>✦</i>
          </span>
        ))}
      </div>
    </aside>
  );
}

function SectionStamp({ index, children }: { index: string; children: React.ReactNode }) {
  return (
    <div className="section-stamp">
      <span>{index}</span>
      <span>{children}</span>
    </div>
  );
}

function RecognitionGallery() {
  return (
    <div className="recognition-gallery reveal-up delay-2">
      <div className="gallery-header">
        <div>
          <p className="gallery-kicker">CURATED EVIDENCE / 04</p>
          <p className="gallery-note">
            A selective record for AI, cloud, and data-oriented work. Drag or use the controls to explore.
          </p>
        </div>
        <div className="gallery-instruction">OPEN CARD FOR DETAIL</div>
      </div>

      <Carousel opts={{ align: "start", loop: false }} className="cert-gallery">
        <CarouselContent className="cert-gallery__content">
          {recognitionGallery.map((item) => (
            <CarouselItem className="cert-gallery__item" key={item.id}>
              <Dialog>
                <DialogTrigger asChild>
                  <button className="evidence-card" type="button" aria-label={`Buka detail ${item.title}`}>
                    <div className="evidence-card__image-wrap">
                      <img src={item.image} alt={item.imageAlt} />
                      <span className="evidence-card__number">{item.id}</span>
                      <span className="evidence-card__view">VIEW DETAIL ↗</span>
                    </div>
                    <div className="evidence-card__copy">
                      <div className="evidence-card__meta">
                        <span>{item.type}</span>
                        <span>{item.date}</span>
                      </div>
                      <h3>{item.title}</h3>
                      <p>{item.description}</p>
                    </div>
                  </button>
                </DialogTrigger>
                <DialogContent className="certificate-dialog">
                  <DialogHeader>
                    <DialogTitle>{item.title}</DialogTitle>
                    <DialogDescription>{item.description}</DialogDescription>
                  </DialogHeader>
                  <div className="certificate-dialog__preview">
                    <img src={item.image} alt={item.imageAlt} />
                  </div>
                  {item.documentHref && (
                    <DialogFooter>
                      <a href={item.documentHref} target="_blank" rel="noreferrer" className="certificate-source-link">
                        OPEN ORIGINAL CERTIFICATE ↗
                      </a>
                    </DialogFooter>
                  )}
                </DialogContent>
              </Dialog>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="cert-gallery__controls">
          <CarouselPrevious className="cert-gallery__previous" />
          <CarouselNext className="cert-gallery__next" />
        </div>
      </Carousel>
    </div>
  );
}

export default function Home() {
  return (
    <div className="site-shell">
      <div className="paper-grain" aria-hidden="true" />
      <SideMarquee side="left" />
      <SideMarquee side="right" />

      <header className="topbar">
        <a className="brand-lockup" href="#top" aria-label="Fauzi Noorsyabani — kembali ke atas">
          <img src="/manus-storage/fauzi-n-logo_36c3f3ee.png" alt="" />
          <span>
            FAUZI <b>/</b> NOORSYABANI
          </span>
        </a>
        <nav className="desktop-nav" aria-label="Navigasi utama">
          <a href="#work">Selected work</a>
          <a href="#experience">Experience</a>
          <a href="#profile">Profile</a>
        </nav>
        <a className="contact-link" href="#contact">
          Let&apos;s talk <ArrowUpRight size={15} strokeWidth={1.8} />
        </a>
      </header>

      <main id="top">
        <section className="hero-section">
          <div className="hero-rail" aria-hidden="true">
            <span>INDONESIA</span>
            <span className="rail-line" />
            <span>2026</span>
          </div>
          <div className="hero-copy reveal-up">
            <p className="eyebrow">AI ENGINEER / INFORMATION SYSTEMS</p>
            <h1>
              Turning <span className="accent-word">data</span> and
              <br />
              models into systems
              <br />
              people can <span className="accent-word">use.</span>
            </h1>
          </div>
          <div className="hero-portrait reveal-up delay-1">
            <div className="portrait-stamp">
              <span>FN</span>
              <span>01</span>
            </div>
            <img
              src="/manus-storage/FauziNoorsyabani_Office_61ca17cb.jpg"
              alt="Fauzi Noorsyabani mengenakan blazer hitam di ruang kerja modern"
            />
            <div className="portrait-caption">AI / DATA / CLOUD</div>
          </div>
          <aside className="hero-note reveal-up delay-2">
            <div className="note-number">PROFILE / 01</div>
            <div className="note-brand-mark" aria-hidden="true">
              <img src="/manus-storage/fauzi-n-logo_36c3f3ee.png" alt="" />
              <span>THREE RAILS / ONE SYSTEM</span>
            </div>
            <p>
              Final-year Information Systems graduate and AI Engineer building applied LLM products,
              data foundations, and deployable MVPs.
            </p>
            <a href="#work" className="round-arrow" aria-label="Lihat selected work">
              <ArrowDownRight size={22} strokeWidth={1.5} />
            </a>
          </aside>
          <div className="hero-footer reveal-up delay-3">
            <span>AVAILABLE FOR</span>
            <span>AI ENGINEERING · PRODUCT SYSTEMS · DATA WORKFLOWS</span>
          </div>
        </section>

        <section className="intro-section" id="profile">
          <SectionStamp index="01">PROFILE</SectionStamp>
          <div className="intro-layout">
            <div className="intro-lead reveal-up">
              <p>
                I build AI-powered products from the first dataset to a deployed MVP—combining
                practical LLM orchestration with a grounded backend and data foundation.
              </p>
            </div>
            <div className="intro-details reveal-up delay-1">
              <p>
                My work sits at the intersection of retrieval, prompt design, reliable APIs, and
                business workflows. I care about making technical systems clear, useful, and ready
                to operate beyond a demo.
              </p>
              <div className="credential-row">
                <span>AWS Certified Cloud Practitioner</span>
                <span>BNSP-certified ICT Project Manager</span>
              </div>
            </div>
          </div>
          <div className="stat-strip reveal-up delay-2">
            <div>
              <strong>3.87</strong>
              <span>GPA / 4.00 · Cum laude</span>
            </div>
            <div>
              <strong>900+</strong>
              <span>hours of AI product development</span>
            </div>
            <div>
              <strong>5</strong>
              <span>featured systems & case studies</span>
            </div>
          </div>
        </section>

        <section className="work-section" id="work">
          <div className="work-heading">
            <SectionStamp index="02">SELECTED WORK</SectionStamp>
            <p>Systems selected for their scope, technical decisions, and applied AI focus.</p>
          </div>

          <div className="project-list">
            {projectData.map((project, index) => (
              <article className="project-card reveal-up" style={{ animationDelay: `${index * 70}ms` }} key={project.id}>
                <div className="project-visual">
                  <img src={project.image} alt={project.imageAlt} />
                  <div className="technical-proof" aria-hidden="true">
                    <span>{project.flow[0]}</span>
                    <i />
                    <span>{project.flow[1]}</span>
                    <i />
                    <span>{project.flow[2]}</span>
                  </div>
                  <span className="visual-index">{project.id}</span>
                </div>
                <div className="project-content">
                  <div className="project-meta">
                    <span>{project.category}</span>
                    <span>{project.role}</span>
                  </div>
                  <h2>{project.title}</h2>
                  <p className="project-statement">{project.statement}</p>
                  <p className="project-evidence">
                    <b>Scope / </b>
                    {project.evidence}
                  </p>
                  <div className="project-stack">{project.stack}</div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="experience-section" id="experience">
          <div className="experience-intro reveal-up">
            <SectionStamp index="03">EXPERIENCE</SectionStamp>
            <h2>Role history from software delivery to applied AI.</h2>
            <p>
              From data-intensive analysis to client delivery and cross-functional AI product work,
              each role strengthened the same practice: define the workflow, make the decision clear,
              and ship the system.
            </p>
          </div>
          <div className="experience-list">
            {experienceData.map((item, index) => (
              <article className="experience-row reveal-up" style={{ animationDelay: `${index * 60}ms` }} key={`${item.company}-${item.period}`}>
                <span className="experience-period">{item.period}</span>
                <div>
                  <h3>{item.role}</h3>
                  <p className="experience-company">{item.company}</p>
                </div>
                <p className="experience-note">{item.note}</p>
                <ArrowUpRight className="row-arrow" size={19} strokeWidth={1.4} />
              </article>
            ))}
          </div>
        </section>

        <section className="systems-section">
          <div className="systems-art reveal-up">
            <img
              src="/manus-storage/fauzi-data-geometry_c0cf30f1.png"
              alt="Komposisi abstrak modul data berlapis"
            />
            <span>BUILT TO CONNECT</span>
          </div>
          <div className="systems-copy reveal-up delay-1">
            <SectionStamp index="04">SYSTEMS / STACK</SectionStamp>
            <h2>A practical stack for intelligent, deployable work.</h2>
            <div className="skill-cloud">
              {skills.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
            <p className="systems-footnote">
              Also working with OpenAI API, IBM Granite, Gemini API, LangGraph, Laravel, MySQL,
              ChromaDB, Redis, React, Power BI, Looker Studio, GitHub Actions, and Nginx.
            </p>
          </div>
        </section>

        <section className="achievement-section">
          <SectionStamp index="05">RECOGNITION</SectionStamp>
          <div className="achievement-grid">
            <div className="achievement-lead reveal-up">
              <h2>Recognition earned through <span className="accent-word">applied practice.</span></h2>
            </div>
            <div className="achievement-list reveal-up delay-1">
              <p>
                <span>2026</span> 1st Place — Life After DDC Challenge, Dicoding Developer Conference
              </p>
              <p>
                <span>2025</span> 1st Place — MyBDDInsight Challenge, Badan Ekraf Developer Day
              </p>
              <p>
                <span>2024</span> Gold Medalist — Mathematics, KSPI
              </p>
              <p>
                <span>2024</span> Microsoft Office Specialist: Excel Associate
              </p>
            </div>
          </div>
          <RecognitionGallery />
        </section>

        <section className="contact-section" id="contact">
          <div className="contact-grid">
            <div className="contact-heading reveal-up">
              <SectionStamp index="06">CONTACT</SectionStamp>
              <h2>
                Discuss an
                <br />
                <span className="accent-word">AI system.</span>
              </h2>
            </div>
            <div className="contact-actions reveal-up delay-1">
              <a className="contact-email" href="mailto:fauzinoorsyabani05@gmail.com">
                <span>EMAIL ME</span>
                <strong>fauzinoorsyabani05@gmail.com</strong>
                <ArrowUpRight size={20} strokeWidth={1.5} />
              </a>
              <div className="contact-buttons">
                <a href="https://www.linkedin.com/in/fauzinoorsyabani/" target="_blank" rel="noreferrer">
                  <Linkedin size={16} /> LinkedIn
                </a>
                <a href="/manus-storage/FauziNoorsyabani_CV_e5215f41.pdf" target="_blank" rel="noreferrer">
                  <Download size={16} /> Download CV
                </a>
                <a href="mailto:fauzinoorsyabani05@gmail.com">
                  <Mail size={16} /> Email
                </a>
              </div>
            </div>
          </div>
          <footer>
            <span>© 2026 FAUZI NOORSYABANI</span>
            <span>AI ENGINEER / INDONESIA</span>
            <a href="#top">BACK TO TOP ↑</a>
          </footer>
        </section>
      </main>
    </div>
  );
}
