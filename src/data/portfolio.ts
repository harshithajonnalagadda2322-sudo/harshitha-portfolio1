/** Portfolio content for Harshitha Jonnalagadda. Only user-provided facts are included. */
export type Palette = { from: string; via: string; to: string; accent: string };
const crimson: Palette = { from: '#24060b', via: '#6e0d1d', to: '#09070a', accent: '#ff3d5a' };
const amber: Palette = { from: '#1c1003', via: '#6b3c06', to: '#0a0806', accent: '#ffb547' };
const ocean: Palette = { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' };
const violet: Palette = { from: '#120822', via: '#3d1a6e', to: '#07060c', accent: '#b98bff' };
const jade: Palette = { from: '#03150f', via: '#0d5a40', to: '#050a08', accent: '#46e3a8' };

export const profile = {
  fullName: 'Harshitha Jonnalagadda', displayName: 'Harshitha Jonnalagadda', firstName: 'HARSHITHA',
  seriesTag: 'J O N N A L A G A D D A', originalLabel: 'A HARSHITHA ORIGINAL', role: 'B.Tech Student · IT',
  tagline: ['LEARN', 'BUILD', 'GROW'],
  intro: 'B.Tech Information Technology student at Vasireddy Venkatadri Institute of Technology, graduating in 2028. Interested in technology, creativity, marketing, and entrepreneurship.',
  about: 'My name is Harshitha Jonnalagadda. I am currently pursuing my B.Tech in Information Technology at Vasireddy Venkatadri Institute of Technology, and I plan to graduate in 2028. I am interested in technology, creativity, and entrepreneurship. I have been learning C, Java basics, Python, HTML, MySQL, and Data Structures and Algorithms. I have completed certifications in Programming using Java and Introduction to Python. Outside technology, I enjoy video editing using InShot and drawing. I am interested in marketing because I want to understand how ideas can become useful products or services. My long-term goal is to start my own business after completing my B.Tech. I want to combine technology, creativity, and marketing to build something valuable, while gaining practical experience and learning how businesses work.',
  location: '', email: 'harshithajonnalagadda2322@gmail.com',
  links: { linkedin: 'https://www.linkedin.com/in/jonnalagadda123/', github: 'https://github.com/harshithajonnalagadda2322-sudo', instagram: 'https://www.instagram.com/un_wxxted_/' },
  resumePdf: '/assets/Harshitha_Jonnalagadda_Resume.pdf',
  portrait: { src: '/assets/harshitha-portrait.png', srcSet: undefined as string | undefined, alt: 'Portrait of Harshitha Jonnalagadda with neon pink rim lighting' },
  interests: ['Entrepreneurship', 'Marketing', 'Video Editing · InShot', 'Drawing', 'Technology'],
};

export const education = [{ school: 'Vasireddy Venkatadri Institute of Technology', place: 'Andhra Pradesh', degree: 'B.Tech — Information Technology', period: 'Expected graduation: 2028', score: 'Expected graduation: 2028' }];
export const experience: { company: string; role: string; place: string; period: string; points: string[] }[] = [];
export type Metric = { value: string; label: string };
export type Project = { id: string; title: string; year: string; genre: string; logline: string; stack: string[]; build: string[]; features: string[]; metrics: Metric[]; github?: string; palette: Palette; motif: 'shield' | 'flow' | 'tenants' };
export const projects: Project[] = [
 { id:'lifi-vlc', title:'Li-Fi Based Visible Light Communication System', year:'Academic Project', genre:'Embedded Systems · Visible Light Communication', logline:'A low-cost prototype concept for transmitting information using visible light from an LED and detecting it with an LDR.', stack:['Arduino','LED','LDR','16×2 LCD'], build:['The presentation describes an Arduino-based transmitter and receiver using LED light variations to carry information.','The receiver uses an LDR to detect light changes and an Arduino to process the signal, with recovered information displayed on an LCD.'], features:['Visible-light data transmission','Arduino transmitter and receiver','LDR light detection','16×2 LCD output'], metrics:[], palette:crimson, motif:'flow' },
 { id:'water-leak', title:'Smart Water Leakage Detection', year:'Academic Project Concept', genre:'IoT · Vibration Sensing · Edge AI/VLSI', logline:'A proposed low-cost pipeline-monitoring system that senses vibration and provides local alerts for normal, small-leak, and major-leak conditions.', stack:['Piezoelectric Sensor','Arduino','LEDs','Buzzer','Edge AI/VLSI concept'], build:['The presentation outlines a vibration-sensing prototype using a piezoelectric sensor and Arduino-based threshold classification.','A future extension proposes feature extraction and a lightweight neural network for low-power VLSI implementation.'], features:['Pipe vibration sensing','Threshold-based prototype classification','LED and buzzer alerts','Future neural-network/VLSI direction'], metrics:[], palette:ocean, motif:'shield' },
 { id:'hospital-hygiene', title:'Smart Hospital Hygiene Monitoring System', year:'Project Concept', genre:'AI · IoT · Healthcare Monitoring', logline:'A proposed system to monitor hygiene activities and provide alerts using IoT sensors, staff tracking, analytics, and a dashboard.', stack:['IoT Sensors','AI Analytics','RFID/BLE','Dashboard'], build:['The presentation proposes monitoring sanitizer usage, cleaning activities, waste-bin status, and environmental conditions.','It describes real-time alerts and a centralized dashboard for hygiene status, compliance records, and high-risk areas.'], features:['Hygiene activity monitoring concept','RFID/BLE staff and cleaning tracking','AI-based detection and alerts','Centralized monitoring dashboard'], metrics:[], palette:violet, motif:'tenants' },
 { id:'flutter-calculator', title:'Flutter Calculator App', year:'Basic Flutter Project', genre:'Flutter · Mobile App Basics', logline:'A basic calculator project built while learning Flutter.', stack:['Flutter','Dart'], build:['A basic Flutter calculator project, as described by Harshitha.'], features:['Basic calculator functionality'], metrics:[], palette:amber, motif:'flow' },
];
export type Achievement = { id: string; title: string; org: string; detail: string; laurel: string; link?: string };
export const achievements: Achievement[] = [
 {id:'java-cert', title:'Programming Using Java', org:'Certification', detail:'Certification completed, as provided in the portfolio details.', laurel:'CERTIFICATION'},
 {id:'python-cert', title:'Introduction to Python', org:'Certification', detail:'Certification completed, as provided in the portfolio details.', laurel:'CERTIFICATION'},
 {id:'creative', title:'Creative Interests', org:'Personal Interests', detail:'Enjoys video editing using InShot and drawing.', laurel:'CREATIVITY'},
 {id:'entrepreneurship', title:'Entrepreneurship', org:'Long-Term Goal', detail:'Wants to combine technology, creativity, and marketing to build a business after completing B.Tech.', laurel:'FUTURE VISION'},
];
export type Certification = { issuer: string; name: string; link: string };
export const certifications: Certification[] = [
 { issuer:'Certification', name:'Programming using Java', link:'#about' },
 { issuer:'Certification', name:'Introduction to Python', link:'#about' },
];
export type Skill = { name: string; mono: string; note?: string };
export type SkillCategory = { id: string; title: string; subtitle: string; skills: Skill[] };
export const skillCategories: SkillCategory[] = [
 {id:'programming', title:'Programming', subtitle:'Foundational languages and concepts', skills:[{name:'C',mono:'C'},{name:'Java Basics',mono:'Jv'},{name:'Python',mono:'Py'},{name:'DSA',mono:'Ds'}]},
 {id:'web', title:'Web Development', subtitle:'Web fundamentals', skills:[{name:'HTML',mono:'Ht'}]},
 {id:'database', title:'Database', subtitle:'Relational database fundamentals', skills:[{name:'MySQL',mono:'My'}]},
 {id:'mobile', title:'Mobile Development', subtitle:'Learning and building with Flutter', skills:[{name:'Flutter Basics',mono:'Fl'}]},
 {id:'creative', title:'Creative Skills', subtitle:'Creative interests outside programming', skills:[{name:'Video Editing · InShot',mono:'Vi'},{name:'Drawing',mono:'Dr'},{name:'Marketing',mono:'Mk'}]},
];
export const skillEvidence: Record<string, string[]> = { C:['Listed among current learning skills'], 'Java Basics':['Programming using Java certification'], Python:['Introduction to Python certification'], DSA:['Listed among current learning skills'], HTML:['Listed among current learning skills'], MySQL:['Listed among current learning skills'], 'Flutter Basics':['Basic Flutter calculator project'], 'Video Editing · InShot':['Personal creative interest'], Drawing:['Personal creative interest'], Marketing:['Personal interest and entrepreneurship goal'] };
export type Episode = { code: string; title: string; description: string; tags: string[]; runtime: string; palette: Palette };
export type Season = { number: number; title: string; period: string; synopsis: string; episodes: Episode[] };
export const seasons: Season[] = [
 {number:1,title:'The Foundation',period:'B.Tech · Expected graduation 2028',synopsis:'Studying Information Technology at Vasireddy Venkatadri Institute of Technology.',episodes:[{code:'S01 E01',title:'Information Technology',description:'Pursuing a B.Tech in Information Technology with expected graduation in 2028.',tags:['B.Tech','Information Technology'],runtime:'Expected 2028',palette:crimson}]},
 {number:2,title:'Learning to Build',period:'Technical Skills',synopsis:'Developing programming, web, database, and mobile-app fundamentals.',episodes:[{code:'S02 E01',title:'Programming Foundations',description:'Learning C, Java basics, Python, and Data Structures and Algorithms.',tags:['C','Java Basics','Python','DSA'],runtime:'Learning journey',palette:ocean},{code:'S02 E02',title:'Web & Database Basics',description:'Learning HTML and MySQL.',tags:['HTML','MySQL'],runtime:'Learning journey',palette:violet},{code:'S02 E03',title:'Flutter Calculator',description:'Built a basic calculator project while learning Flutter.',tags:['Flutter','Calculator'],runtime:'Basic project',palette:amber}]},
 {number:3,title:'Creative Thinking',period:'Interests & Goals',synopsis:'Combining technology with creative interests and an entrepreneurial mindset.',episodes:[{code:'S03 E01',title:'Creative Side',description:'Enjoys video editing using InShot and drawing.',tags:['Video Editing','Drawing'],runtime:'Personal interests',palette:jade},{code:'S03 E02',title:'Future Entrepreneur',description:'Long-term goal is to start a business after completing B.Tech, combining technology, creativity, and marketing.',tags:['Technology','Creativity','Marketing'],runtime:'Long-term goal',palette:crimson}]},
];
export type TopPick = { label: string; title: string; detail: string; palette: Palette };
export const topPicks: TopPick[] = [
 {label:'Current degree',title:'B.Tech IT',detail:'Vasireddy Venkatadri Institute of Technology',palette:crimson},
 {label:'Graduation',title:'2028',detail:'Expected B.Tech graduation year',palette:ocean},
 {label:'Programming',title:'C · Java · Python',detail:'Learning programming foundations',palette:violet},
 {label:'Core concept',title:'DSA',detail:'Data Structures and Algorithms',palette:amber},
 {label:'Web',title:'HTML',detail:'Web fundamentals',palette:jade},
 {label:'Database',title:'MySQL',detail:'Database fundamentals',palette:ocean},
 {label:'Mobile',title:'Flutter',detail:'Basic calculator project',palette:violet},
 {label:'Certification',title:'Java',detail:'Programming using Java',palette:crimson},
 {label:'Creativity',title:'Video Editing',detail:'Uses InShot',palette:amber},
 {label:'Future Goal',title:'Entrepreneurship',detail:'Build something of her own',palette:jade},
];
export type IntroSlide = { kicker: string; title: string; lines: string[]; chips?: string[] };
export const introSlides: IntroSlide[] = [
 {kicker:'Education',title:'B.Tech · Information Technology',lines:['Vasireddy Venkatadri Institute of Technology','Expected graduation: 2028'],chips:['Information Technology']},
 {kicker:'Skills',title:'Learning to Build',lines:['C · Java basics · Python · DSA','HTML · MySQL · Flutter basics'],chips:['C','Java','Python','HTML','MySQL','Flutter']},
 {kicker:'Projects',title:'Projects & Concepts',lines:['Li-Fi Based Visible Light Communication System','Smart Water Leakage Detection','Smart Hospital Hygiene Monitoring System','Basic Flutter Calculator App']},
 {kicker:'Certifications',title:'Learning Milestones',lines:['Programming using Java','Introduction to Python']},
 {kicker:'Creative Interests',title:'Technology Meets Creativity',lines:['Video editing using InShot','Drawing · Marketing · Entrepreneurship']},
 {kicker:'Future Mission',title:'Build Something of My Own',lines:['Gain practical experience','Combine technology, creativity, and marketing']},
];
export type ProfileId = 'sushmita' | 'recruiter' | 'developer' | 'creative';
export type SectionId = 'about' | 'journey' | 'originals' | 'picks' | 'skills' | 'moments' | 'story';
export const viewerProfiles: {id:ProfileId;name:string;blurb:string;color:string;order:SectionId[]}[] = [{id:'sushmita',name:'Harshitha',blurb:'Explore my portfolio',color:'#ff3158',order:['about','journey','originals','picks','skills','moments','story']}];
export const sectionMeta: Record<SectionId,{nav:string;card:string;meta:string;palette:Palette}> = {
 about:{nav:'About',card:'About Me',meta:'Profile · Education & goals',palette:violet},
 journey:{nav:'Journey',card:'My Journey',meta:`${seasons.length} chapters · learning and goals`,palette:amber},
 originals:{nav:'Projects',card:'My Projects',meta:`${projects.length} projects and concepts`,palette:crimson},
 picks:{nav:'Highlights',card:'Highlights',meta:'Skills, interests and goals',palette:jade},
 skills:{nav:'Skills',card:'My Skills',meta:`${skillCategories.length} skill groups`,palette:ocean},
 moments:{nav:'Certifications',card:'Certifications & Interests',meta:`${achievements.length} highlights · ${certifications.length} certifications`,palette:crimson},
 story:{nav:'Resume',card:'Resume',meta:'Profile · View & download',palette:violet},
};
