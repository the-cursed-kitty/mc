const { createClient } = require('bedrock-protocol');

const client = createClient({
  host: 'Anqi.aternos.me', // Aternos Bedrock server IP
  port: 40868,                   // Aternos Bedrock port (not 19132)
  username: 'Bot Babblu',             // Bot's name
  offline: true                  // Aternos doesn't use Xbox auth
});

client.on('text', (packet) => {
  console.log(`[Chat] ${packet.source_name}: ${packet.message}`);

  if (packet.message === 'hi bot') {
    client.queue('text', {
      type: 'chat',
      needs_translation: false,
      source_name: client.options.username,
      xuid: '',
      platform_chat_id: '',
      message: 'hello!'
    });
  }
});
