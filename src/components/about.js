import React from 'react';

const CodeStyle = {
  backgroundColor: '#1e1e2e',
  color: '#cdd6f4',
  fontFamily: 'monospace',
  fontSize: '14px',
  padding: '20px',
  whiteSpace: 'pre',
  borderRadius: '8px',
  lineHeight: '1.6',
};

const colors = {
  keyword: '#cba6f7',     // class, constructor, return
  string: '#a6e3a1',      // strings
  comment: '#6c7086',     // comments
  property: '#f38ba8',    // this.name
  number: '#fab387',      // birth timestamp
  punctuation: '#cdd6f4', // punctuation default
};

const JanBaszczokCode = () => {
  return (
    <div style={CodeStyle}>
      <div>
        <span style={{ color: colors.keyword }}>class</span> <span style={{ color: '#ffffff' }}>Jan Baszczok</span> {'{'}
      </div>
      <div style={{ color: colors.comment }}>  // I can, because I did.</div>
      <div style={{ color: colors.comment }}>  // My vast variety of skills is continuously expanding.</div>

      <div>
        <span style={{ color: colors.punctuation }}>  </span>
        <span style={{ color: colors.keyword }}>constructor</span>() {'{'}
      </div>
      <div>
        <span style={{ color: colors.punctuation }}>    </span>
        <span style={{ color: colors.property }}>this.name</span> = <span style={{ color: colors.string }}>'Jan Baszczok'</span>
      </div>
      <div>
        <span style={{ color: colors.punctuation }}>    </span>
        <span style={{ color: colors.property }}>this.dayOfBirthTimestamp</span> = <span style={{ color: colors.number }}>602745592</span>
      </div>
      <div>
        <span style={{ color: colors.punctuation }}>    </span>
        <span style={{ color: colors.property }}>this.email</span> = <span style={{ color: colors.string }}>'baszczok@yasio.dev'</span>
      </div>
      <div>  {'}'}</div>

      <div>
        <span style={{ color: colors.punctuation }}>  </span>
        <span style={{ color: colors.keyword }}>workExperience</span>() {'{'}
      </div>
      <div>    <span style={{ color: colors.keyword }}>return</span> [</div>
      <div>      {'{'} '2020-now' : 'Full-stack Developer/Owner at Pixel Lab' {'}'},</div>
      <div>      {'{'} '2023-now' : 'Solutions Architect at Digitree Group S.A.' {'}'},</div>
      <div>      {'{'} '2017-2023' : 'Full-stack Developer at Digitree Group S.A.' {'}'},</div>
      <div>      {'{'} '2013-2017' : 'Full-Stack Designer at Digitree Group S.A.' {'}'},</div>
      <div>      {'{'} '2006-now' : 'Full-Stack Designer/developer at Yasio.dev' {'}'}</div>
      <div>    ]</div>
      <div>  {'}'}</div>

      <div>
        <span style={{ color: colors.punctuation }}>  </span>
        <span style={{ color: colors.keyword }}>education</span>() {'{'}
      </div>
      <div>    <span style={{ color: colors.keyword }}>return</span> [</div>
      <div>      {'{'} '2012-2014': 'Wyższa Szkoła Biznesu w Dąbrowie Górniczej - Master&apos;s Degree (mgr), Computer Science (IT)' {'}'},</div>
      <div>      {'{'} '2008-2012': 'Wyższa Szkoła Technologii Informatycznych w Katowicach - Bachelor of Engineering (inż.), Computer Science (IT)' {'}'}</div>
      <div>    ]</div>
      <div>  {'}'}</div>

      <div>
        <span style={{ color: colors.punctuation }}>  </span>
        <span style={{ color: colors.keyword }}>skills</span>() {'{'}
      </div>
      <div>    <span style={{ color: colors.keyword }}>return</span> [</div>
      <div style={{ whiteSpace: 'pre-wrap' }}>
        {'      '}
        'HTML/CSS/JS', 'Vue', 'Node.js', 'Redis/NATS/RabbitMQ', 'Bootstrap/Tailwind',<br />
        {'      '}
        'Webpack/Gulp/Vite', 'SCSS/Less', 'npm/yarn/pnpm', 'Docker/K8s', 'PWA', 'SSR', 'SPA', 'GIT/CVS', 'Cordova',<br />
        {'      '}
        'NativeScript', 'Electron', 'Web-extensions', 'Web Sockets', 'Firebase', 'RWD/W3C/ARIA/WCAG',<br />
        {'      '}
        'XSLT/Smarty/Twig', 'PHP', 'MySQL/MongoDB/ORM', 'Wordpress', 'Photoshop', 'Illustrator', 'After Effects',<br />
        {'      '}
        'Premiere', 'Motion design', 'UX/UI', 'DTP', 'AWS', 'GCP', 'C#', 'Unity', 'TypeScript', 'NestJS', 'Cypress'
      </div>
      <div>    ]</div>
      <div>  {'}'}</div>
      <div>{'}'}</div>
    </div>
  );
};

export default JanBaszczokCode;
