import fs from 'fs';
import path from 'path';
import PDFDocument from 'pdfkit';

function generateResume() {
  // Ultra-clean single page layout with 30pt top/bottom margins, 45pt left/right
  const doc = new PDFDocument({
    size: 'A4',
    margins: { top: 35, bottom: 35, left: 45, right: 45 }
  });

  const publicDir = path.join(process.cwd(), 'public');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  const outputFiles = [
    path.join(publicDir, 'Veenila_Resume.pdf'),
    path.join(publicDir, 'Tadi_Veenila_Satya_Resume.pdf')
  ];

  // We write to Veenila_Resume.pdf first, then copy to Tadi_Veenila_Satya_Resume.pdf
  const stream = fs.createWriteStream(outputFiles[0]);
  doc.pipe(stream);

  // --- COLOR PALETTE ---
  const primaryColor = '#111827'; // Dark Slate 900
  const secondaryColor = '#374151'; // Charcoal Gray 700 for text
  const accentColor = '#000000'; // Pure neutral black for highlights
  const lineGrey = '#9CA3AF'; // Slate 400 for structural lines

  // --- TOP ROW WITH PROFILE PHOTO AND CONTACT INFO ---
  const photoW = 82;
  const photoH = 100;
  const photoX = 595.28 - 45 - photoW; // Right side
  const photoY = 35;

  const photoPath = path.join(process.cwd(), 'src', 'assets', 'images', 'image.jpeg');
  if (fs.existsSync(photoPath)) {
    // Elegant slate grey frame border around the photo
    doc.rect(photoX - 0.5, photoY - 0.5, photoW + 1, photoH + 1)
       .strokeColor('#D1D5DB')
       .lineWidth(1)
       .stroke();
    // Render photo
    doc.image(photoPath, photoX, photoY, { width: photoW, height: photoH });
  }

  // Left side typography: TADI VEENILA SATYA
  doc.fillColor(primaryColor);
  doc.font('Helvetica-Bold').fontSize(21).text('TADI VEENILA SATYA', 45, 38);
  doc.moveDown(0.2);

  // Contact Info list
  doc.font('Helvetica').fontSize(9).fillColor(primaryColor).lineGap(2.5);
  doc.text('Email: vineelareddytadi3399@gmail.com');
  doc.text('LinkedIn: linkedin.com/in/vineela-tadi-898576320');
  doc.text('GitHub: github.com/vineela-tadi');
  doc.text('Phone: 9392955167');
  doc.text('Visakhapatnam, Andhra Pradesh, India');

  // Push pointer past the header elements
  doc.y = Math.max(doc.y, photoY + photoH) + 14;

  // --- HELPER FOR SECTION HEADERS ---
  function addSectionHeader(title) {
    doc.moveDown(0.45);
    doc.fillColor(primaryColor);
    doc.font('Helvetica-Bold').fontSize(10).text(title.toUpperCase(), { characterSpacing: 0.5 });
    
    const lineY = doc.y + 2;
    doc.strokeColor(lineGrey)
       .lineWidth(0.8)
       .moveTo(45, lineY)
       .lineTo(595.28 - 45, lineY)
       .stroke();
    doc.y = lineY + 5;
  }

  // --- CAREER OBJECTIVE ---
  addSectionHeader('CAREER OBJECTIVE');
  doc.font('Helvetica').fontSize(8.5).fillColor(secondaryColor).lineGap(3)
     .text('Aspiring Software Developer and Computer Science student specializing in Artificial Intelligence with strong foundations in Python, Java and Full Stack Web Development. Seeking an opportunity to apply technical and problem-solving skills in software development while contributing to innovative projects and gaining industry experience.');

  // --- TECHNICAL SKILLS ---
  addSectionHeader('TECHNICAL SKILLS');
  const skills = [
    { label: 'Languages', value: 'Python, Java' },
    { label: 'Frontend', value: 'HTML, CSS, JavaScript' },
    { label: 'Backend', value: 'Flask, REST API Development' },
    { label: 'Databases', value: 'MySQL, SQL' },
    { label: 'Tools', value: 'Git, GitHub, VS Code' },
    { label: 'Core Concepts', value: 'Data Structures, Full Stack Web Development, Debugging, Problem-Solving Skills' }
  ];

  skills.forEach(skill => {
    doc.font('Helvetica-Bold').fontSize(8.5).fillColor(primaryColor).text(`${skill.label}: `, { continued: true })
       .font('Helvetica').fillColor(secondaryColor).text(skill.value);
    doc.y += 1.8;
  });

  // --- INTERNSHIP EXPERIENCE ---
  addSectionHeader('INTERNSHIP EXPERIENCE');
  
  const internY = doc.y;
  doc.font('Helvetica-Bold').fontSize(9).fillColor(primaryColor).text('AI & Machine Learning Intern – Data Valley India Pvt Ltd', 45, internY);
  doc.font('Helvetica').fontSize(8.5).fillColor(secondaryColor).text('May 2025', 100, internY, { align: 'right' });
  doc.moveDown(0.2);

  const expBullets = [
    'Analyzed datasets using Python for machine learning applications.',
    'Developed backend scripts for automation and data processing.',
    'Performed preprocessing and feature engineering to improve model performance.',
    'Collaborated with teams to integrate analytical outputs into applications.'
  ];

  expBullets.forEach(bullet => {
    doc.font('Helvetica').fontSize(8.5).fillColor(secondaryColor).text('•  ', 52, doc.y, { continued: true })
       .text(bullet, { paragraphGap: 1 });
  });

  // --- PROJECTS ---
  addSectionHeader('PROJECTS');

  // Project 1
  const proj1Y = doc.y;
  doc.font('Helvetica-Bold').fontSize(9).fillColor(primaryColor).text('Voice and Text Based To-Do List Application', 45, proj1Y);
  doc.font('Helvetica-Oblique').fontSize(8).fillColor(secondaryColor).text('Technologies: HTML, CSS, JavaScript, Web Speech API');
  doc.moveDown(0.2);

  const proj1Bullets = [
    'Developed a responsive web app supporting voice and text task management.',
    'Integrated Web Speech API for hands-free task creation.',
    'Implemented task creation, editing, completion tracking, and deletion.'
  ];

  proj1Bullets.forEach(bullet => {
    doc.font('Helvetica').fontSize(8.5).fillColor(secondaryColor).text('•  ', 52, doc.y, { continued: true })
       .text(bullet, { paragraphGap: 1 });
  });
  doc.moveDown(0.35);

  // Project 2
  const proj2Y = doc.y;
  doc.font('Helvetica-Bold').fontSize(9).fillColor(primaryColor).text('Green Plantation Web Application for Pollution Reduction', 45, proj2Y);
  doc.font('Helvetica-Oblique').fontSize(8).fillColor(secondaryColor).text('Technologies: HTML, CSS, JavaScript, Flask, SQLite');
  doc.moveDown(0.2);

  const proj2Bullets = [
    'Developed a full stack environmental awareness platform using Flask.',
    'Built REST APIs for volunteer registration and plantation tracking.',
    'Designed responsive frontend with image upload functionality.'
  ];

  proj2Bullets.forEach(bullet => {
    doc.font('Helvetica').fontSize(8.5).fillColor(secondaryColor).text('•  ', 52, doc.y, { continued: true })
       .text(bullet, { paragraphGap: 1 });
  });

  // --- EDUCATION ---
  addSectionHeader('EDUCATION');

  const eduItems = [
    {
      degree: 'B.Tech – CSE (Artificial Intelligence)',
      period: '2023–2027',
      institution: 'Vignan’s Institute of Engineering for Women, Visakhapatnam, India',
      gpa: 'CGPA: 8.36'
    },
    {
      degree: 'Intermediate (MPC)',
      period: '2021–2023',
      institution: 'G.B.R Junior College, Anaparthi, India',
      gpa: '92.30%'
    },
    {
      degree: 'Secondary Education',
      period: '2020–2021',
      institution: 'Paleti English Medium High School, Bhimadole, India',
      gpa: '99.00%'
    }
  ];

  eduItems.forEach(edu => {
    const dY = doc.y;
    doc.font('Helvetica-Bold').fontSize(9).fillColor(primaryColor).text(edu.degree, 45, dY);
    doc.font('Helvetica').fontSize(8.5).fillColor(secondaryColor).text(edu.period, 100, dY, { align: 'right' });
    
    const iY = doc.y;
    doc.font('Helvetica').fontSize(8.5).fillColor(secondaryColor).text(edu.institution, 45, iY);
    doc.font('Helvetica-Bold').fontSize(8.5).fillColor(primaryColor).text(edu.gpa, 100, iY, { align: 'right' });
    doc.moveDown(0.45);
  });

  // --- CERTIFICATIONS ---
  addSectionHeader('CERTIFICATIONS');
  const certifications = [
    'Full Stack Development – Infosys Springboard',
    'Python Data Visualization – Rice University, Coursera',
    'OCI 2025 Certified AI Foundations Associate – Oracle University',
    'Database Management Systems – NPTEL',
    'Software Engineering – NPTEL'
  ];

  certifications.forEach(cert => {
    doc.font('Helvetica').fontSize(8.5).fillColor(secondaryColor).text('•  ', 52, doc.y, { continued: true })
       .text(cert, { paragraphGap: 1 });
  });

  // --- ACHIEVEMENTS ---
  addSectionHeader('ACHIEVEMENTS');
  const achievements = [
    'Participated in Research Conclave 2026 at Vignan’s Institute of Engineering for Women.',
    'Participated in multiple hackathons and technical competitions.',
    'Active member of Coding Ninjas Club practicing DSA and coding problems.'
  ];

  achievements.forEach(ach => {
    doc.font('Helvetica').fontSize(8.5).fillColor(secondaryColor).text('•  ', 52, doc.y, { continued: true })
       .text(ach, { paragraphGap: 1 });
  });

  // End Document
  doc.end();

  // Wait for writing to finish, then copy to second file path
  stream.on('finish', () => {
    fs.copyFileSync(outputFiles[0], outputFiles[1]);
    console.log('PDF Resume generated successfully with profile photo on a single page matching original layout!');
  });
}

generateResume();
