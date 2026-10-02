import React from "react";
import "./styles.css";

export default function App() {
  const skills = {
    "Document Control": ["Technical Documentation","Document Tracking","Drawing & Revision","WIR / MIR / RFI","NCR / SOR","Test Reports","Correspondence","Filing & Registers"],
    "Computer & Software": ["MS Word","MS Excel","PowerPoint","Asite","Basic AutoCAD / CAD","Basic Power BI","AI Tools"],
    "Professional": ["Problem Solving","Teamwork","Communication","Attention to Detail","Quick Learning","Tracking & Follow-up"]
  };

  return (
    <div className="app">
      <nav className="nav"><div className="container navin"><b>SUFIYAN <span>KHAN</span></b><div className="links">
        {["Home","About","Experience","Skills","Analytics","Projects","Excel","Contact"].map(x=><a key={x} href={"#"+x.toLowerCase()}>{x}</a>)}
      </div></div></nav>

      <header className="hero" id="home"><div className="container heroGrid">
        <div><div className="kicker">UAE • Construction • Document Control</div><h1>Sufiyan <span>Khan</span></h1><h2>QA/QC Document Controller</h2>
        <p>Document Control • Technical Documentation • Construction Projects</p>
        <p>Organized and detail-oriented professional with practical exposure to construction documentation, technical records, drawing handling, document tracking and Microsoft Office.</p>
        <div className="chips"><span>Fibrex Construction Group</span><span>Asite</span><span>Microsoft Excel</span></div>
        <div className="buttons"><a className="btn primary" href="#experience">View Experience</a><a className="btn secondary" href="/Sufiyan_Khan_UAE_CV.pdf" download>↓ Download CV</a></div></div>
        <div className="photoFrame"><img src="/27321.jpg" alt="Sufiyan Khan"/><b>🇦🇪 UAE BASED</b></div>
      </div></header>

      <section id="about"><div className="container"><div className="head"><small>PROFILE</small><h2>Professional Profile</h2></div><div className="grid2">
        <div className="card pad"><p>Organized and detail-oriented <b>QA/QC Document Controller</b> with experience in construction documentation, technical records, document tracking and Microsoft Office-based work.</p><p>Currently working as a <b>QA/QC Document Controller</b> with <b>Fibrex Construction Group, UAE</b> on <b>Mamsha Gardens, Abu Dhabi</b>, with practical exposure to technical drawings, inspection documentation, project correspondence, document submissions, tracking and document management systems.</p></div>
        <div className="card pad"><div className="details"><div><small>Current Project</small><b>Mamsha Gardens, Abu Dhabi</b></div><div><small>Nationality</small><b>Indian</b></div><div><small>Native Place</small><b>Nawada, Bihar</b></div><div><small>Qualification</small><b>Graduate + ADCA</b></div></div></div>
      </div></div></section>

      <section id="experience" className="light"><div className="container"><div className="head"><small>EXPERIENCE</small><h2>Professional Journey</h2></div><div className="card pad">
        <h3>QA/QC Document Controller</h3><p className="gold">Fibrex Construction Group — UAE • Current • Mamsha Gardens, Abu Dhabi</p>
        <ul><li>Technical drawings and revision records</li><li>WIR, MIR, RFI, NCR and SOR documentation</li><li>Test reports and inspection records</li><li>HSE documentation and project correspondence</li><li>Registers, numbering, filing, tracking and revision control</li><li>Asite document submission and coordination</li></ul>
        <hr/><h3>Documentation / Computer Experience</h3><p className="gold">CSP — Union Bank, India • 1 Year</p><ul><li>Computer-based documentation and record management</li><li>Microsoft Office, data entry and record updating</li><li>File organization, filing and document retrieval</li></ul>
      </div></div></section>

      <section id="skills"><div className="container"><div className="head"><small>SKILLS</small><h2>Focused Capabilities</h2></div><div className="skills">{Object.entries(skills).map(([k,v])=><div className="card skill" key={k}><h3>{k}</h3><div className="tags">{v.map(s=><span key={s}>{s}</span>)}</div></div>)}</div></div></section>

      <section id="analytics" className="analytics"><div className="container"><div className="head"><small>SAMPLE ANALYTICS</small><h2>Document Control Dashboard</h2><p>This is a demo dashboard. Replace sample figures with your own non-confidential data later.</p></div>
        <div className="metrics">{[["Documents Tracked","248"],["Approved","168"],["Returned","45"],["Under Review","35"]].map(x=><div className="metric" key={x[0]}><small>{x[0]}</small><strong>{x[1]}</strong><em>Demo KPI</em></div>)}</div>
        <div className="dash"><div className="dashCard"><h3>Status Analysis</h3><div className="bar"><span>Approved — 68%</span><i style={{width:"68%"}}/></div><div className="bar"><span>Returned — 18%</span><i style={{width:"18%"}}/></div><div className="bar"><span>Under Review — 14%</span><i style={{width:"14%"}}/></div></div><div className="dashCard"><div className="ring">Demo</div></div></div>
      </div></section>

      <section id="excel" className="light"><div className="container"><div className="head"><small>MICROSOFT EXCEL</small><h2>Excel & Digital Documentation</h2></div><div className="fileWindow"><div className="fileTop">📊 Excel Tracking / Dashboard Sample <span>🔒 Protected Preview</span></div><div className="sheetBlur">Document No. | Type | Submission | Return | Status | Remarks<br/><br/>DOC-101 | WIR | Sep | Sep | Approved | Sample<br/>DOC-102 | MIR | Sep | Sep | Comments | Sample<br/>DOC-103 | RFI | Sep | Sep | Under Review | Sample<div className="lockBox">🔐 CONFIDENTIAL PREVIEW</div></div></div></div></section>

      <section id="projects"><div className="container"><div className="head"><small>PROJECT SHOWCASE</small><h2>Mamsha Gardens — Abu Dhabi</h2><p><b>Current project:</b> QA/QC Document Control assignment with Fibrex Construction Group. Visuals are project/reference images for presentation.</p></div><div className="projects">
        <article className="card"><img src="https://ibragimovbrothers.group/media/img/e758c718ff3f59-800.webp" alt="Mamsha interior reference"/><div className="pad"><h3>Interior Design Reference</h3><p>Mamsha Al Saadiyat, Saadiyat Island, Abu Dhabi.</p></div></article>
        <article className="card"><img src="https://ibragimovbrothers.group/media/img/e792c9f699f4db-768.webp" alt="Mamsha interior reference"/><div className="pad"><h3>Interior Visualisation</h3><p>Residential interior reference.</p></div></article>
        <article className="card"><img src="https://images3.cmp.optimizely.com/assets/mamsha-gardens-mobile/Zz1hNTk5Nzk3YzVjZWExMWYwODZkZDNlNjkwN2Y1NTRmMg%3D%3D" alt="Mamsha Gardens exterior reference"/><div className="pad"><h3>Mamsha Gardens — Current Project</h3><p>Project reference visual for the current Abu Dhabi assignment.</p></div></article>
      </div></div></section>

      <section id="contact" className="light"><div className="container"><div className="head"><small>CONTACT</small><h2>Let's Connect</h2></div><div className="contact"><div className="card pad"><p>🇦🇪 +971 52 784 6115</p><p>🇮🇳 +91 9279579098</p><p>✉ sufiyankhan20003@gmail.com</p></div><div className="card pad"><h3>Career Objective</h3><p>To build a long-term career in Document Control and Technical Documentation within the construction industry.</p><a className="btn primary" href="/Sufiyan_Khan_UAE_CV.pdf" download>↓ Download UAE CV</a></div></div></div></section>
      <footer><div className="container">Sufiyan Khan • QA/QC Document Controller • UAE</div></footer>
    </div>
  );
}
