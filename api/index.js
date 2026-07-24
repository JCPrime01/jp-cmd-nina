export default async function handler(req, res) {
  const ua = (req.headers['user-agent'] || '').toLowerCase();
  const ip = (req.headers['x-forwarded-for'] || '').split(',')[0].trim();
  const botUAs = [
    'facebookexternalhit', 'facebot', 'facebookbot',
    'adsbot', 'googlebot', 'bingbot', 'twitterbot',
    'linkedinbot', 'slackbot', 'whatsapp', 'telegrambot',
    'crawler', 'spider', 'headless', 'phantom', 'python',
    'curl', 'wget', 'java/', 'apache-httpclient'
  ];
  const metaIPs = [
    '66.220.', '69.63.', '69.171.', '173.252.',
    '31.13.', '157.240.', '179.60.', '204.15.'
  ];
  const isBot = botUAs.some(b => ua.includes(b));
  const isMeta = metaIPs.some(r => ip.startsWith(r));
  if (isBot || isMeta) {
    res.writeHead(302, { Location: 'https://grupojogadorcaro.com.br/quem-e-jota' });
    res.end();
    return;
  }
  // ── Calendário de links por dia ──────────────────────────────
  const START_DATE = new Date('2026-05-19T00:00:00-03:00'); // Dia 1 = 19/05
  const linksPorDia = {
    1: [
      'https://chat.whatsapp.com/D35nCeQKRnY84op3WkSvEj', // CMD 101
      'https://chat.whatsapp.com/GRBtwpVjvLA6g22hjlzY5K', // CMD 102
      'https://chat.whatsapp.com/EoLhmmeiQpGAHQ1yU9CW7A', // CMD 104
      'https://chat.whatsapp.com/JhDM8UdeHQg8pxIm0ywl80', // CMD 105
    ],
    2: [
      'https://chat.whatsapp.com/EafpD39fayIIyRjOCC6Pfk', // CMD 106
      'https://chat.whatsapp.com/BaFz3FnnxTb3Dbd9c3r7Wm', // CMD 107
      'https://chat.whatsapp.com/HdxZGcDeTd0KKnLrvjLjHS', // CMD 109
      'https://chat.whatsapp.com/JQDDcywMnib23IM1j1fLeG', // CMD 110
      'https://chat.whatsapp.com/GqijcctD6qOF6N0zlun3CK', // CMD 111
    ],
    3: [
      'https://chat.whatsapp.com/Ft5yiEgZW74FS9fuhOBmKf', // CMD 115
      'https://chat.whatsapp.com/JlriMPNhjfLEsBoDh6CcWx', // CMD 118
      'https://chat.whatsapp.com/GOym7FDB1BFBQeX3Oor7uw', // CMD 119
      'https://chat.whatsapp.com/G9eJEmWYYn6DBLYmC1dXWp', // CMD 120
    ],
    4: [
      'https://chat.whatsapp.com/EzadtmN5alqFfcBHOgK8Ji', // CMD 121
      'https://chat.whatsapp.com/HkD7oRVzxcKCGD6MkSSDRs', // CMD 122
      'https://chat.whatsapp.com/B6Es7ZNDrMwDQlC0umX9r4', // CMD 123
      'https://chat.whatsapp.com/JBrIq1ugFTYAw2yerGpSej', // CMD 124
      'https://chat.whatsapp.com/FIP253VTKGW2Q76UIOL4wa', // CMD 125
    ],
  };
  // ─────────────────────────────────────────────────────────────
  const now = new Date();
  const diffMs = now - START_DATE;
  const diffDias = Math.floor(diffMs / (1000 * 60 * 60 * 24)) + 1;
  // Cicla entre dia 1, 2, 3, 4, 1, 2, 3, 4...
  const totalDias = Object.keys(linksPorDia).length;
  const diaAtual = ((diffDias - 1) % totalDias) + 1;
  const links = linksPorDia[diaAtual];
  const link = links[Math.floor(Math.random() * links.length)];
  res.writeHead(302, { Location: link });
  res.end();
}
