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
      // João
      'https://chat.whatsapp.com/G0WiEKvY0V5JUUVYwNQybh', // 11
      'https://chat.whatsapp.com/FrZ2WDrA2xREEbM5jDkwqY', // 12
      // Adriano
      'https://chat.whatsapp.com/Bto8VAr36cvLgQPBgCHYX1', // 01
      'https://chat.whatsapp.com/Il6k8YO0J467BnSa14LhZO', // 02
    ],
    2: [
      // João
      'https://chat.whatsapp.com/JnbJMfDffrZDVUbNf4zNlu', // 14
      'https://chat.whatsapp.com/CUjo7cUlPT26U6rtuJDbwo', // 20
      // Adriano
      'https://chat.whatsapp.com/KTIV7fmxxsGFEHns5p3zTq', // 03
      'https://chat.whatsapp.com/Ho3DCgKIhztAi6902uqbCc', // 04
    ],
    3: [
      // João
      'https://chat.whatsapp.com/INddlJqtUvL4IXc2mpNIFn', // 15
      'https://chat.whatsapp.com/LZpweYFPnRXBpAs06JSccW', // 16
      // Adriano
      'https://chat.whatsapp.com/HHdJVe1vYRzBNGxCV3n376', // 05
      'https://chat.whatsapp.com/DZKrprJ2z4rL1TUnXqm1UM', // 06
    ],
  };
  // ─────────────────────────────────────────────────────────────
  const now = new Date();
  const diffMs = now - START_DATE;
  const diffDias = Math.floor(diffMs / (1000 * 60 * 60 * 24)) + 1;
  // Cicla entre dia 1, 2, 3, 1, 2, 3...
  const totalDias = Object.keys(linksPorDia).length;
  const diaAtual = ((diffDias - 1) % totalDias) + 1;
  const links = linksPorDia[diaAtual];
  const link = links[Math.floor(Math.random() * links.length)];
  res.writeHead(302, { Location: link });
  res.end();
}
