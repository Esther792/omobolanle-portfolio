/* eslint-disable @next/next/no-html-link-for-pages -- Native anchors preserve reliable Vinext navigation. */
import type { Metadata } from 'next';
import { JsonLd } from '../json-ld';
import { absoluteUrl, siteName, sitePositioning, siteUrl } from '../site-config';
import './consulting.css';

const path = '/public-health-consultant-nigeria';
const title = 'Public Health Consultant in Nigeria | Omobolanle Esther Adelekun';
const description = 'Public health consulting in Nigeria: programme implementation, epidemiology, monitoring and evaluation, capacity building, research and technical support.';
export const metadata: Metadata = {
  title: { absolute: title }, description,
  alternates: { canonical: path },
  openGraph: { title, description, url: path, type: 'website', siteName, images: [{ url: '/og.png', width: 1730, height: 909, alt: 'Omobolanle Esther Adelekun, public health specialist and field epidemiologist' }] },
  twitter: { title, description, card: 'summary_large_image', images: ['/og.png'] },
};

const capabilities = [
  { title: 'Programme Implementation & Technical Support', text: 'Planning, implementation support, programme monitoring, field coordination and technical assistance across public health programmes and interventions.', label: 'Programme implementation', tone: 'teal' },
  { title: 'Epidemiology, Surveillance & Preparedness', text: 'Epidemiological and surveillance support, surveillance-system strengthening, preparedness, disease-control activities and outbreak-response support.', label: 'Epidemiology & surveillance', tone: 'clay' },
  { title: 'Monitoring, Evaluation, Data & Evidence', text: 'Programme monitoring, indicator review, data-quality assessment, analysis, visualization and evidence to support programme decisions.', label: 'Monitoring, evaluation & data', tone: 'ochre' },
  { title: 'Training & Capacity Building', text: 'Training design and delivery, facilitation, supportive supervision, mentoring and practical capacity strengthening for programme and field teams.', label: 'Training & capacity building', tone: 'teal' },
  { title: 'Research & Evidence Generation', text: 'Public health research, assessments, evidence synthesis, quantitative analysis and research collaboration to support programme learning and decision-making.', label: 'Research & evidence', tone: 'clay' },
  { title: 'Technical Reporting & Documentation', text: 'Technical and programme reports, briefs, presentations, evidence summaries and documentation for public health programmes and projects.', label: 'Technical reporting', tone: 'ochre' },
];
const programmes = ['Immunization', 'Malaria', 'HIV/TB', 'Disease Surveillance & Control', 'Community Health', 'Emergency Preparedness & Response', 'Broader Public Health Programmes', 'Outbreak Response'];
const stages = [
  ['Understand the Need', 'Programme challenge, objective and context.'],
  ['Define the Scope', 'Technical requirements, deliverables and timeline.'],
  ['Deliver Technical Support', 'Implementation, analysis, training, research or programme support.'],
  ['Evidence & Deliverables', 'Reporting, recommendations, outputs and next steps.'],
];
const assignments = [
  ['Short-term Technical Assistance', 'Defined programme, surveillance, M&E, research or implementation assignments.'],
  ['Programme Review & Technical Support', 'Programme monitoring, data review, reporting, documentation and technical input.'],
  ['Training & Capacity Building', 'Training, facilitation, supportive supervision and workforce capacity-strengthening assignments.'],
  ['Research & Evidence Support', 'Research collaboration, assessments, evidence synthesis, analysis and technical research support.'],
];
const navigation = [
  ['Impact', '/#impact'], ['Work', '/#work'], ['Analytics', '/#analytics'], ['Consulting', path], ['Research', '/#research'], ['About', '/#about'], ['Contact', '#consulting-contact'],
];
const schema = [
  { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
    { '@type': 'ListItem', position: 2, name: 'Public Health Consulting', item: absoluteUrl(path) },
  ] },
  { '@context': 'https://schema.org', '@type': 'Service', '@id': absoluteUrl(`${path}#service`), name: 'Public Health Consulting & Technical Support', url: absoluteUrl(path), description,
    provider: { '@type': 'Person', '@id': `${siteUrl}/#person`, name: siteName, url: siteUrl },
    areaServed: { '@type': 'Country', name: 'Nigeria' },
    serviceType: capabilities.map(item => item.title),
  },
];

export default function ConsultingPage() {
  return <>
    <JsonLd data={schema}/>
    <a className="skip" href="#consulting-main">Skip to main content</a>
    <header className="nav"><a className="brand" href="/" aria-label="Omobolanle Adelekun, home"><span>OA</span><b>Omobolanle Adelekun</b></a><nav aria-label="Primary navigation">{navigation.map(([label, href]) => <a key={label} href={href} aria-current={label === 'Consulting' ? 'page' : undefined}>{label}</a>)}</nav><details className="mobileNav"><summary>Menu</summary><nav aria-label="Mobile navigation">{navigation.map(([label, href]) => <a key={label} href={href} aria-current={label === 'Consulting' ? 'page' : undefined}>{label}</a>)}</nav></details><a className="navCta" href="/files/Omobolanle-Adelekun-CV.pdf" download aria-label="Download Omobolanle Adelekun's CV as a PDF">Download CV</a></header>
    <main id="consulting-main" className="consultingPage">
      <section className="consultingHero">
        <nav className="consultingBreadcrumb" aria-label="Breadcrumb"><a href="/">Portfolio</a><span aria-hidden="true">/</span><span>Consulting</span></nav>
        <p className="eyebrow">Public health consulting &amp; technical support</p>
        <h1>Public Health Consultant <span>&amp; Epidemiologist</span></h1>
        <div className="consultingHeroFoot"><div><p>Programme implementation, epidemiology, immunisation, surveillance, data and evidence support for public health programmes.</p><p className="consultingCredibility"><span>8+ years experience</span>{' · '}<span>5,000+ health workers trained</span>{' · '}<span>WHO field experience</span>{' · '}<span>Research &amp; analytics</span></p></div><a className="button" href="#consulting-contact">Discuss a Consulting Assignment <span aria-hidden="true">↗</span></a></div>
      </section>

      <section className="consultingSection" id="capabilities" aria-labelledby="capabilities-title">
        <div className="consultingSectionHead"><div><p className="eyebrow">Core consulting capabilities</p><h2 id="capabilities-title">Capabilities that work together.</h2></div><p>A connected set of capabilities, shaped around the assignment—not a fixed sequence.</p></div>
        <div className="capabilitySystem">
          <div className="capabilityHub"><span>Public health</span><strong>Technical <br/>support</strong><p>Programme needs. <br/>People. Evidence.</p></div>
          {capabilities.map((item, index) => <article key={item.title} className={`capabilityNode capability-${item.tone} capabilityNode-${index}`}><span className="capabilityMark" aria-hidden="true"/><h3>{item.title}</h3><p>{item.text}</p></article>)}
        </div>
        <div className="consultingEvidence"><span>Explore the work behind these capabilities</span><a href="/#work">Selected case studies <span aria-hidden="true">↗</span></a><a href="/#analytics">Analytics work <span aria-hidden="true">↗</span></a><a href="/#research">Research <span aria-hidden="true">↗</span></a></div>
      </section>

      <section className="consultingProgrammes" aria-labelledby="programmes-title"><div><p className="eyebrow">Programme experience</p><h2 id="programmes-title">Across programme settings.</h2></div><div><p>Programme experience spans immunization, malaria, HIV/TB, disease surveillance and control, community health, emergency preparedness and response, alongside broader public health programme implementation.</p><ul>{programmes.map(name => <li key={name}>{name}</li>)}</ul><a className="textLink" href="/#work">View related work <span aria-hidden="true">→</span></a></div></section>

      <section className="consultingSection" aria-labelledby="assignment-path-title"><div className="consultingSectionHead"><div><p className="eyebrow">How an assignment works</p><h2 id="assignment-path-title">From the need to the next step.</h2></div></div><ol className="consultingPath">{stages.map(([heading, body], index) => <li key={heading}><span className="consultingStep" aria-hidden="true">0{index + 1}</span><h3>{heading}</h3><p>{body}</p></li>)}</ol></section>

      <section className="consultingAssignments consultingSection" aria-labelledby="assignment-types-title"><div className="consultingSectionHead"><div><p className="eyebrow">Types of assignments</p><h2 id="assignment-types-title">A defined task. A useful contribution.</h2></div></div><dl>{assignments.map(([heading, body]) => <div key={heading}><dt>{heading}</dt><dd>{body}</dd></div>)}</dl><p className="consultingFlexible">Have a different public health assignment in mind? <a href="#consulting-contact">Get in touch to discuss the scope <span aria-hidden="true">→</span></a></p></section>

      <aside className="consultingAvailability" aria-label="Availability"><span>Availability</span><p>Based in Nigeria. Available for in-country, regional, international and remote technical assignments.</p></aside>

      <section className="consultingContact" id="consulting-contact" aria-labelledby="consulting-contact-title"><div><p className="eyebrow">Let’s connect</p><h2 id="consulting-contact-title">Let’s discuss your assignment.</h2><p>For consulting assignments, professional opportunities, research collaborations, training and other public health enquiries.</p><a className="consultingEmail" href="mailto:estheradelekun102@gmail.com?subject=Professional%20Enquiry">estheradelekun102@gmail.com <span aria-hidden="true">↗</span></a></div></section>
    </main>
    <footer><a className="brand" href="/"><span>OA</span><b>Omobolanle Adelekun</b></a><p style={{textWrap:'balance'}}>{sitePositioning}</p><p>© 2026 Omobolanle Esther Adelekun</p></footer>
  </>;
}
