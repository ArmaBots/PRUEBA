
let handler = async(m, { conn, usedPrefix, command }) => {

    let don = `
≡ ${mssg.donate}

▢ *Mercado Pago Arg*
• *Alias :* ARM-VS

▢ *Naranja X Arg*
• *Alias :* ARM-VS
`
let img = 'https://qu.ax/vvMUw.jpg'
conn.sendFile(m.chat, img, 'img.jpg', don, m, null, rpyp)
//conn.sendPayment(m.chat, '2000', 'USD', don, m.sender, m)
}

handler.help = ['donate']
handler.tags = ['main']
handler.command = ['apoyar', 'donate', 'donar'] 

export default handler

