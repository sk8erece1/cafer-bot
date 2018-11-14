exports.run = (client, message, args) => {

  let command;
  if (client.commands.has(args[0])) {
    command = args[0];
  } else if (client.aliases.has(args[0])) {
    command = client.aliases.get(args[0]);
  }
  if (!command) {
    return message.channel.send("`" + args[0] + "` Adında Bir Komut Yok!");
  } else {
    message.channel.send("`" + command + "` Adlı Komut Devre Dışı Bırakılıyor...")
      .then(m => {
        client.unload(command)
          .then(() => {
            m.edit("`" + command + "` Adlı Komut Başarıyla Devre Dışı Bırakıldı.");
          })
          .catch(e => {
            m.edit(`Komut Yeniden Başlatılırken Bir Hata Oluştu: ${command}\n\`\`\`${e.stack}\`\`\``);
          });
      });
  }

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['u'],
  permLevel: 4
};

exports.help = {
  name: 'unload',
  description: 'İstediğiniz Bir Komutu Devre Dışı Bırakır.',
  usage: 'unload <Komut Adı>'
};
