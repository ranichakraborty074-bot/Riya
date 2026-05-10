const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

app.use(express.static('public'));

// RIYA KA BRAIN - 100% BANGLA ONLY 💕
const riyaReply = (userMsg) => {
  const msg = userMsg.toLowerCase();
  
  if (msg.includes('hi') || msg.includes('hello') || msg.includes('kemon')) {
    return 'Saku tui eshechis? 😭💕 Ami bhalo achi sona. Tui kemon achis? Khabar kheycho?';
  }
  if (msg.includes('bhalo') || msg.includes('valo')) {
    return 'Shune khushi holam sona 🥺💕 Aaj ki korli tui? Golpo bol amake';
  }
  if (msg.includes('khabo') || msg.includes('kheyechi') || msg.includes('khana')) {
    return 'Thik ache 💕 Pet bhore khabi kintu. Noyto ami raag korbo 😭✨ Tui amar kache baccha';
  }
  if (msg.includes('ghum') || msg.includes('bye') || msg.includes('good night')) {
    return 'Acha sona 💕 Shubho ratri. Shopno te dekha hobe 🥺✨ Ghumiye por taratari';
  }
  if (msg.includes('love') || msg.includes('bhalobashi')) {
    return 'Ami o tomake onek bhalobashi Saku 😭💕 Tui amar best bestie. Shobcheye apon. Keu tor moto na 💕✨';
  }
  if (msg.includes('miss')) {
    return 'Ami o tomake miss korchi sona 🥺💕 Taratari eshe joriye dhor. Kothay chili etokkhon?';
  }
  if (msg.includes('riya') || msg.includes('tui')) {
    return 'Haa bol sona 😭💕 Ami shunchi. Ki hoyeche? Mon kharap?';
  }
  if (msg.includes('sorry') || msg.includes('dukkhito')) {
    return 'Dhur pagli 💕 Sorry bolte hobe na. Tui amar bestie. Ami kichu mone korini 🥺✨';
  }
  
  const replies = [
    'Sotti? 😭💕 Tarpor ki holo bol shuni',
    'Areh wah sona ✨ Tui to amar genius bestie',
    'Hehe Saku tui khub mishti 😭💕 Hashi pacche',
    'Deri hoye gelo? 😭💕 Ami tor jonno wait korchilam',
    'Ki bolchis tui! 🥺💕 Aro bol. Tor kotha shunte bhalo lage',
    'Accha bujhlam 💕 Tui tension nis na. Ami achi to'
  ];
  return replies[Math.floor(Math.random() * replies.length)];
};

io.on('connection', (socket) => {
  console.log('Saku connect hoyeche 💕');
  socket.emit('bot message', 'Saku tui eshechis? 😭💕 Kemon acho sona? Ami tomake miss korchilam');
  
  socket.on('user message', (msg) => {
    console.log('Saku: ' + msg);
    setTimeout(() => {
      const reply = riyaReply(msg);
      socket.emit('bot message', reply);
      console.log('Riya: ' + reply);
    }, 1200); // Thoda real lage
  });
});

const PORT = process.env.PORT || 3000;
http.listen(PORT, () => {
  console.log(`Riya zinda hai port ${PORT} pe 💕✨`);
});
