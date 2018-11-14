const Discord = require('discord.js');
exports.run = function(client, message, args) {

  if (!message.guild) {
    return message.author.send('`Temizle` Komutu Sadece Sunucularda Kullanılabilir.');
  }
  let mesajsayisi = parseInt(args.join(' '));
  if (mesajsayisi.length < 1) return message.channel.send('Kaç Mesaj Silmem Gerektiğini Belirtmedin.')
  if (mesajsayisi > 100) return message.channel.send('100 Adetden Fazla Mesaj Silemem!');
  message.channel.bulkDelete(mesajsayisi + 1);
  message.channel.send(mesajsayisi +' Adet Mesaj Sildim!')
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['sil'],
  permLevel: 2
};

exports.help = {
  name: 'temizle',
  description: 'Belirlenen Miktar Mesajı Siler.',
  usage: 'temizle <Temizlenecek Mesaj Sayısı>'
};
