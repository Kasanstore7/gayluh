let handler =  m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • Indosat Ooredoo [085641142178]
│ • Telkomsel [08XXXXXX]
╰────

╭─「 Donasi • Non Pulsa 」
│ • https://saweria.co/BochilGaming
│ • Gopay [082110711736]
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

export default handler
