const Discord = require('discord.js');

exports.run = (client, message, args) => {
  let mesaj = args.slice(0).join(' ');
if (mesaj.length < 1) return message.reply('63 STAYLA SENİN ANANI BACINI KARINI KIZINI HALANI DAYINI KUNDAKTAKİ BEBENİ MSN ARKADAŞINI HÜRRİYETİNİ CÜRRİYETİNİ BİLLETİNİ S*KSİN SENİN.');
if (mesaj.length < 2) return message.reply('ananızı averadınızı sikim orrrrrrrrrspu çocukları ananızın amından hortumla kan alım orrrrrrrrrsp cocukları ananızı gotten sıkım');
  message.delete();
  message.channel.send(mesaj);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['söv', 'söyle'],
  permLevel: 0
};

exports.help = {
  name: 'yaz',
  description: 'İstediğiniz şeyi bota yazdırır.',
  usage: 'yaz [yazdırmak istediğiniz şey]'
};
