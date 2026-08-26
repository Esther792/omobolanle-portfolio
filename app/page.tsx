import Image from 'next/image';
import { siteProfile } from './site-data';
import { JsonLd } from './json-ld';
import { siteDescription, siteName, siteTitle, siteUrl } from './site-config';

const impacts = [['7+', 'Years of public health experience'],['5,000+', 'Health personnel reached through capacity strengthening'],['713+', 'Health facilities covered through surveillance data work'],['1,068', 'Measles-Rubella vaccination team members trained and supervised'],['WHO + NCDC', 'Major public health institutions worked with']];
const cases = [
  { slug:'idsr-outbreak-preparedness-bayelsa', n:'01', title:'Strengthening IDSR & Outbreak Preparedness in Bayelsa', text:'Supporting integrated surveillance, emergency preparedness, vaccine-preventable disease surveillance and workforce capacity across Bayelsa State.', tags:['IDSR','Outbreak response','DHIS2'], metric:'5,000+ personnel reached' },
  { slug:'measles-rubella-lagos', n:'02', title:'Measles-Rubella Vaccine Introduction, Lagos', text:'Technical support for campaign planning, microplanning, implementation, field monitoring and supportive supervision.', tags:['Immunization','Microplanning','Field monitoring'], metric:'1,068 team members trained & supervised' },
  { slug:'avadar-afp-kwara', n:'03', title:'AVADAR & AFP Surveillance, Kwara', text:'Surveillance data management, data quality review and performance monitoring for acute flaccid paralysis surveillance.', tags:['AFP surveillance','Data quality','Digital health'], metric:'713+ health facilities' },
];
const analytics = [
  { slug:'public-health-surveillance', image:'/images/analytics/public-health-surveillance.jpg', title:'Public Health Surveillance Analytics Dashboard', tool:'Power BI', text:'Epidemiological KPIs, disease trends and state-level monitoring.', tags:['CFR','KPI design','Filtering'], disclaimer:true },
  { slug:'hospital-admissions', image:'/images/analytics/hospital-admissions.jpg', title:'Hospital Admissions Analytics Dashboard', tool:'Power BI', text:'Admission trends, demographics and diagnosis analysis.', tags:['Healthcare analytics','Trends','Reporting'] },
  { slug:'breast-cancer-tableau', image:'/images/analytics/breast-cancer-tableau.jpg', title:'Breast Cancer Analytics Dashboard', tool:'Tableau', text:'Cancer stage, surgery, patient status and mortality indicators.', tags:['Tableau','Health analytics','KPIs'] },
  { slug:'emerald-properties-conversion', image:'/images/analytics/emerald-properties-conversion.jpg', title:'Emerald Properties Conversion Analysis', tool:'Microsoft Excel', text:'Lead conversion, sales performance and branch comparison.', tags:['Excel','Conversion','Business analytics'] },
];
const expertise = [
  ['Surveillance & Health Security','IDSR · Disease Surveillance · Outbreak Preparedness & Response · AFP & AEFI Surveillance · Emergency Response Coordination'],
  ['Immunization','Routine Immunization · Vaccine Campaign Implementation · Measles-Rubella Introduction · Polio Programme Support · Microplanning · Field Monitoring'],
  ['Data & Digital Health','DHIS2 · Power BI · Tableau · QGIS · MySQL · Microsoft Excel · Kobo / ODK · Data Quality · Surveillance Analytics'],
  ['Programme Strengthening','Monitoring & Evaluation · Health Systems Strengthening · Workforce Capacity Building · Supportive Supervision · Stakeholder Coordination'],
];
const experience = [
  ['2026','World Health Organization','Technical Officer, Measles-Rubella Vaccine Introduction','Lagos · Jan 2026 – Apr 2026'],
  ['2024–25','World Health Organization','Sub-National Technical Assistant, IDSR / Emergency Preparedness & Response','Bayelsa · Jan 2024 – Oct 2025'],
  ['2022–23','World Health Organization','State Data Assistant, AVADAR Project','Kwara · Jan 2022 – Dec 2023'],
  ['2020–21','Nigeria Centre for Disease Control','COVID-19 Surveillance Officer','Lagos · Jan 2020 – Dec 2021','https://www.afro.who.int/countries/nigeria/photo-story/bolstering-covid-19-surveillance-lagos'],
  ['2019–21','World Health Organization','LGA Immunization Project Coordinator','Oyo · Oct 2019 – Dec 2021'],
];
const credentials = [
  { featured:true, title:"Mid-Level Managers' Training Master Certification", issuer:'World Health Organization, Africa', type:'Master Certification', year:'', context:'Expanded Programme on Immunization / Immunization Programme Management', description:'Advanced immunization programme management training covering EPI leadership, planning, vaccine management, cold chain, VPD surveillance, supportive supervision and new vaccine introduction.', href:'/files/credentials/Adelekun-Mid-Level-Managers-Training-Master-Certification.pdf' },
  { title:'Advancing National Civil-Military Collaboration to Strengthen Health Emergency Preparedness', issuer:'World Health Organization / OpenWHO', type:'Certificate of Achievement', year:'2024', context:'Course developed by WHO Regional Office for South-East Asia', description:'Successfully completed with a passing grade; focused on civil-military collaboration for stronger health-emergency preparedness.', href:'/files/credentials/Adelekun-WHO-Civil-Military-Emergency-Preparedness-2024.pdf' },
  { title:'Pandemic Planning: Getting “PRET” for the Next Pandemic', issuer:'WHO Health Emergencies Programme / OpenWHO', type:'Certificate of Participation', year:'2024', context:'100% of materials completed without a formal assessment', description:'Participation in pandemic planning learning focused on preparedness for future respiratory-pathogen threats.', href:'/files/credentials/Adelekun-WHO-PRET-Pandemic-Planning-2024.pdf' },
];

const homepageSchema = [
  {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `${siteUrl}/#person`,
    name: siteName,
    url: siteUrl,
    jobTitle: ['Public Health Specialist', 'Field Epidemiologist'],
    description: 'Public health specialist and field epidemiologist with experience in immunization, disease surveillance, outbreak preparedness and response, health security, and public health analytics in Nigeria.',
    sameAs: [siteProfile.linkedinUrl],
    knowsAbout: ['Public health', 'Field epidemiology', 'Immunization', 'Disease surveillance', 'Vaccine-preventable diseases', 'Outbreak preparedness and response', 'Global health security', 'Public health analytics', 'Health systems strengthening'],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${siteUrl}/#website`,
    url: siteUrl,
    name: siteName,
    description: siteDescription,
    inLanguage: 'en',
    publisher: { '@id': `${siteUrl}/#person` },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    '@id': `${siteUrl}/#profile-page`,
    url: siteUrl,
    name: siteTitle,
    description: siteDescription,
    inLanguage: 'en',
    isPartOf: { '@id': `${siteUrl}/#website` },
    mainEntity: { '@id': `${siteUrl}/#person` },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'ScholarlyArticle',
    headline: 'Childhood Vaccination Uptake and Public Perception Post-COVID-19 in Bayelsa State, Nigeria',
    author: { '@type': 'Person', name: siteName, '@id': `${siteUrl}/#person` },
    datePublished: '2025-09-29',
    isPartOf: { '@type': 'Periodical', name: 'International Journal of Novel Research in Healthcare and Nursing' },
    pagination: '29-37',
    volumeNumber: '12',
    issueNumber: '3',
    identifier: 'https://doi.org/10.5281/zenodo.17224514',
    sameAs: 'https://zenodo.org/records/17224514',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'ScholarlyArticle',
    headline: 'Predictors of Hesitancy in Childhood Vaccination Uptake Post-Covid-19 in Bayelsa State, Nigeria',
    author: [
      { '@type': 'Person', name: siteName, '@id': `${siteUrl}/#person` },
      { '@type': 'Person', name: 'Abiodun Olaiya Paul' },
      { '@type': 'Person', name: 'Moyosola Abiodun Bamide' },
    ],
    datePublished: '2025-12-24',
    isPartOf: { '@type': 'Periodical', name: 'Texila International Journal of Public Health', issn: '2520-3134' },
    volumeNumber: '13',
    issueNumber: '4',
    identifier: 'https://doi.org/10.21522/TIJPH.2013.13.04.Art033',
    sameAs: 'https://www.texilajournal.com/public-health/article/3481-predictors-of-hesitancy',
  },
];

export default function Home(){return <>
  <JsonLd data={homepageSchema} />
  <a className="skip" href="#main">Skip to main content</a>
  <header className="nav"><a className="brand" href="#home" aria-label="Omobolanle Adelekun, home"><span>OA</span><b>Omobolanle Adelekun</b></a><nav aria-label="Primary navigation"><a href="#impact">Impact</a><a href="#work">Work</a><a href="#analytics">Analytics</a><a href="#experience">Experience</a><a href="#research">Research</a><a href="#about">About</a><a href="#contact">Contact</a></nav><details className="mobileNav"><summary>Menu</summary><nav aria-label="Mobile navigation"><a href="#impact">Impact</a><a href="#work">Work</a><a href="#analytics">Analytics</a><a href="#experience">Experience</a><a href="#research">Research</a><a href="#about">About</a><a href="#contact">Contact</a></nav></details><a className="navCta" href="/files/Omobolanle-Adelekun-CV.pdf" download aria-label="Download Omobolanle Adelekun's CV as a PDF">Download CV</a></header>
  <main id="main">
    <section className="hero" id="home"><div className="heroCopy"><p className="eyebrow">Public health · Nigeria</p><h1>Omobolanle<br/>Esther Adelekun</h1><p className="descriptor">Field Epidemiology <i>•</i> Public Health <i>•</i> Global Health Security <i>•</i> Immunization</p><p className="lead">Field epidemiologist and public health specialist with 7+ years of experience across disease surveillance, outbreak response, immunization and health systems in Nigeria.</p><p className="proof">WHO & NCDC experience · 5,000+ health personnel reached · 713+ health facilities supported · 1,068 MR vaccination team members trained and supervised</p><div className="actions"><a className="button" href="#work">View my work <span>↘</span></a><a className="textLink" href="/files/Omobolanle-Adelekun-CV.pdf" download>Download CV</a><a className="textLink" href="#contact">Contact me</a></div></div><div className="portrait"><div className="portraitLabel">Field epidemiology<br/>Global health security</div><Image src="/images/profile/omobolanle-headshot.jpg" alt="Professional portrait of Omobolanle Esther Adelekun" fill priority sizes="(max-width: 800px) 100vw, 42vw" /></div></section>
    <section className="impact section" id="impact"><div className="sectionHead"><p className="eyebrow">Evidence, at a glance</p><h2>Work measured in systems strengthened and people equipped.</h2></div><div className="impactGrid">{impacts.map(([n,l])=><div className="metric" key={n}><strong>{n}</strong><p>{l}</p></div>)}</div></section>
    <section className="section work" id="work"><div className="sectionHead split"><div><p className="eyebrow">Selected public health work</p><h2>Field practice with national programme relevance.</h2></div><p>Assignments spanning surveillance, immunization, emergency preparedness and health information systems.</p></div><div className="caseList">{cases.map(c=><article className="case" key={c.slug}><span className="caseNo">{c.n}</span><div><p className="caseMetric">{c.metric}</p><h3>{c.title}</h3><p>{c.text}</p><div className="tags">{c.tags.map(t=><span key={t}>{t}</span>)}</div></div><a className="roundLink" href={`/case-studies/${c.slug}`} aria-label={`Read case study: ${c.title}`}>↗</a></article>)}</div><aside className="whoFeature" aria-labelledby="who-feature-title"><div><p className="eyebrow">Featured by WHO</p><p className="whoSource">WHO Regional Office for Africa <span>•</span> August 2020</p></div><div><h3 id="who-feature-title">Bolstering COVID-19 Surveillance in Lagos</h3><p>Featured in a WHO Africa photo story documenting frontline COVID-19 active surveillance in Lagos. The story follows my work reviewing health-facility records, identifying and monitoring suspected and confirmed cases, and supporting surveillance reporting and case follow-up during the pandemic response.</p><a className="textLink" href="https://www.afro.who.int/countries/nigeria/photo-story/bolstering-covid-19-surveillance-lagos" target="_blank" rel="noopener noreferrer" aria-label="Read the WHO Africa photo story, Bolstering COVID-19 Surveillance in Lagos, in a new tab">Read the WHO Photo Story →</a></div></aside><figure className="fieldFeature"><div className="fieldImage"><Image src="/images/fieldwork/community-fieldwork.jpg" fill sizes="(max-width: 800px) 100vw, 52vw" alt="Omobolanle during community fieldwork with a group of children" /></div><figcaption><p className="eyebrow">My approach</p><blockquote>“Good public-health decisions begin with evidence, but they become meaningful through the people and systems that carry them into communities.”</blockquote><p>Field experience informs how I approach surveillance, immunization and capacity strengthening: with attention to context, implementation and trust.</p></figcaption></figure></section>
    <section className="section analytics" id="analytics"><div className="sectionHead split"><div><p className="eyebrow">Selected analytics work</p><h2>Data made useful for decisions.</h2></div><p>Independent projects demonstrating analytical thinking and visual communication. These are separate from WHO and NCDC assignments.</p></div><div className="analyticsGrid">{analytics.map(a=><article className="analyticsCard" key={a.title}><div className="dash"><Image src={a.image} fill sizes="(max-width: 800px) 100vw, 46vw" alt={`Screenshot of ${a.title}`} /></div><div className="analyticsBody"><div className="projectMeta"><span>Independent Data Analytics Project</span><b>{a.tool}</b></div><h3>{a.title}</h3><p>{a.text}</p><div className="tags">{a.tags.map(t=><span key={t}>{t}</span>)}</div>{a.disclaimer&&<small>Developed using publicly available open-source data for analytical and visualization purposes. This is not an official national surveillance report and is not affiliated with any government agency or public-health institution.</small>}<a className="textLink" href={`/analytics/${a.slug}`} aria-label={`View project details for ${a.title}`}>View project →</a></div></article>)}</div></section>
    <section className="section expertise" id="expertise"><div className="sectionHead"><p className="eyebrow">Areas of expertise</p><h2>Technical depth across the public-health delivery chain.</h2></div><div className="expertiseGrid">{expertise.map(([h,p],i)=><article key={h}><span>0{i+1}</span><h3>{h}</h3><p>{p}</p></article>)}</div><div className="productivity"><h3>Professional Productivity & Reporting</h3><p>Microsoft PowerPoint · Microsoft Word · Technical Reporting · Presentation Development</p></div></section>
    <section className="section experience" id="experience"><div className="sectionHead split"><div><p className="eyebrow">Professional experience</p><h2>Seven years across field epidemiology and health systems.</h2></div><p>A condensed view. Case studies provide selected assignment depth; the CV contains the complete record.</p></div><div className="timeline">{experience.map(([year,org,role,place,feature])=><article key={role}><time>{year}</time><div><h3>{role}</h3><p>{org}</p>{feature&&<a className="timelineFeature" href={feature} target="_blank" rel="noopener noreferrer" aria-label="Read the WHO Africa feature about COVID-19 surveillance work in a new tab">WHO Africa Feature →</a>}</div><p>{place}</p></article>)}</div></section>
    <section className="section research" id="research"><div className="researchIntro"><p className="eyebrow">Research & publications</p><h2>Evidence on vaccination behaviour.</h2><p>Research interests include childhood immunization uptake, vaccine hesitancy, parental perceptions of vaccination, and the effects of the post-COVID-19 information environment on vaccination behaviour.</p></div><div className="publications"><article><p className="pubMeta">2025 · International Journal of Novel Research in Healthcare and Nursing · Vol. 12(3), 29–37</p><h3>Childhood Vaccination Uptake and Public Perception Post-COVID-19 in Bayelsa State, Nigeria</h3><p className="authors">Omobolanle Esther Adelekun</p><p>Examines childhood vaccination perceptions and uptake in Bayelsa State following the COVID-19 pandemic, including how demographic factors and vaccine perceptions relate to incomplete vaccination.</p><div><a href="https://zenodo.org/records/17224514" target="_blank" rel="noopener noreferrer" aria-label="View Childhood Vaccination Uptake publication on Zenodo in a new tab">View publication →</a><span>DOI 10.5281/zenodo.17224514</span></div></article><article><p className="pubMeta">2025 · Texila International Journal of Public Health · Vol. 13(4) · ISSN 2520-3134</p><h3>Predictors of Hesitancy in Childhood Vaccination Uptake Post-Covid-19 in Bayelsa State, Nigeria</h3><p className="authors">Adelekun, Omobolanle Esther · Abiodun Olaiya Paul · Moyosola Abiodun Bamide</p><p>Identifies demographic, behavioural and community factors associated with childhood vaccine hesitancy and uptake among parents and caregivers in Bayelsa State.</p><p className="pubDates">Received 15 August 2025 · Accepted 14 November 2025 · Published 24 December 2025</p><div><span className="pubActions"><a href="https://www.texilajournal.com/public-health/article/3481-predictors-of-hesitancy" target="_blank" rel="noopener noreferrer" aria-label="View the Predictors of Hesitancy article on the official Texila Journal website in a new tab">View publication →</a><a href="/files/publications/Adelekun-Predictors-Vaccine-Hesitancy-Texila-2025.pdf" target="_blank" rel="noopener noreferrer" aria-label="View a locally hosted PDF of Predictors of Hesitancy in a new tab">View PDF →</a></span><span>DOI 10.21522/TIJPH.2013.13.04.Art033</span></div><small className="linkNote">Official journal link may be temporarily unavailable.</small></article></div></section>
    <section className="section credentials" id="credentials" aria-labelledby="credentials-title"><div className="sectionHead split"><div><p className="eyebrow">Selected training & credentials</p><h2 id="credentials-title">Continuing development for practical public-health leadership.</h2></div><p>Selected verified training that supports established practice in immunization management and health-emergency preparedness.</p></div><div className="credentialGrid">{credentials.map(c=><article className={c.featured?'credential featuredCredential':'credential'} key={c.title}><div className="credentialMeta"><span>{c.type}</span>{c.year&&<time>{c.year}</time>}</div><h3>{c.title}</h3><p className="credentialIssuer">{c.issuer}</p><p className="credentialContext">{c.context}</p><p>{c.description}</p><a className="textLink" href={c.href} target="_blank" rel="noopener noreferrer" aria-label={`View credential for ${c.title} in a new tab`}>View credential →</a></article>)}</div></section>
    <section className="section about" id="about"><figure className="aboutImage"><a href="https://www.afro.who.int/countries/nigeria/photo-story/bolstering-covid-19-surveillance-lagos" target="_blank" rel="noopener noreferrer" aria-label="View the original WHO Africa photo story in a new tab"><Image src="/images/fieldwork/who-surveillance.jpg" fill sizes="(max-width: 800px) 100vw, 43vw" alt="Omobolanle during frontline COVID-19 surveillance work in Lagos" /></a><figcaption>Photo: © WHO/Shola Lawal</figcaption></figure><div><p className="eyebrow">About</p><h2>Public-health practice grounded in field realities.</h2><p>I work at the intersection of epidemiology, disease surveillance, immunization, public-health data and emergency preparedness. My experience spans frontline implementation, programme support and the careful translation of surveillance evidence into practical action.</p><p>Across assignments with WHO and NCDC, I have supported teams, facilities and public-health systems in varied operating contexts. I bring the same discipline to data and digital health: make the evidence clear, make it usable and keep the people behind it in view.</p><div className="education"><h3>Education</h3><p><b>PhD Public Health</b> · Texila American University <em>Final stage / awaiting completion</em></p><p><b>Master of Public Health</b> · Maryam Abacha American University of Niger</p><p><b>B.Sc. Microbiology</b> · Joseph Ayo Babalola University</p></div></div></section>
    <section className="contact" id="contact"><p className="eyebrow">Contact</p><h2>Let’s strengthen the systems behind better health.</h2><p>Available for consulting and technical assignments across public health, field epidemiology, immunization, disease surveillance and data-informed programme work.</p><div className="contactActions"><a className="button light" href="mailto:estheradelekun102@gmail.com?subject=Professional%20Enquiry">Email me →</a><a href="/files/Omobolanle-Adelekun-CV.pdf" download aria-label="Download Omobolanle Adelekun's CV as a PDF">Download CV ↓</a><a href={siteProfile.linkedinUrl} target="_blank" rel="noopener noreferrer" aria-label="Visit Omobolanle Adelekun's verified public LinkedIn profile in a new tab">LinkedIn →</a></div><a className="email" href="mailto:estheradelekun102@gmail.com?subject=Professional%20Enquiry">estheradelekun102@gmail.com</a></section>
  </main><footer><a className="brand" href="#home"><span>OA</span><b>Omobolanle Adelekun</b></a><p>Public Health · Field Epidemiology · Global Health Security</p><p>© 2026 Omobolanle Esther Adelekun</p></footer>
</>}
