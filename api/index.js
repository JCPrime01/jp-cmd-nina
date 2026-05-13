export default async function handler(req, res) {
  const ua = (req.headers["user-agent"] || "").toLowerCase();
  const ip = (req.headers["x-forwarded-for"] || "").split(",")[0].trim();
  const botUAs = ["facebookexternalhit","facebot","facebookbot","adsbot","googlebot","bingbot","twitterbot","linkedinbot","slackbot","whatsapp","telegrambot","crawler","spider","headless","phantom","python","curl","wget","java/","apache-httpclient"];
  const metaIPs = ["66.220.","69.63.","69.171.","173.252.","31.13.","157.240.","179.60.","204.15."];
  const isBot = botUAs.some(b => ua.includes(b));
  const isMeta = metaIPs.some(r => ip.startsWith(r));
  if (isBot || isMeta) {
    res.writeHead(302, { Location: "https://grupojogadorcaro.com.br/quem-e-jota" });
    res.end();
    return;
  }
  const links = [
    "https://chat.whatsapp.com/EoLhmmeiQpGAHQ1yU9CW7A",
    "https://chat.whatsapp.com/JhDM8UdeHQg8pxIm0ywl80",
    "https://chat.whatsapp.com/EafpD39fayIIyRjOCC6Pfk",
    "https://chat.whatsapp.com/BaFz3FnnxTb3Dbd9c3r7Wm",
    "https://chat.whatsapp.com/IZNGcTD7uuq2M1cfB7FLlR",
    "https://chat.whatsapp.com/HdxZGcDeTd0KKnLrvjLjHS",
  ];
  const link = links[Math.floor(Math.random() * links.length)];
  res.writeHead(302, { Location: link });
  res.end();
}
