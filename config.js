import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk' 
import { fileURLToPath } from 'url' 

global.owner = [
  ['525525762927', 'ARM-VS', true],
  ['50231458537']
] //Numeros de owner 

global.mods = [''] 
global.prems = ['50489079501', '573143917092']
global.APIs = { // API Prefix
  // name: 'https://website' 
  nrtm: 'https://fg-nrtm.ddns.net',
  fgmods: 'https://api.fgmods.xyz'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.fgmods.xyz': 'm2XBbNvz' //-- 100 de límite diario --- Regístrese en https://api.fgmods.xyz/
}

// Sticker WM
global.packname = '𝑨𝑹𝑴𝑨-𝑩𝑶𝑻' 
global.author = '@𝘈𝘙𝘔-𝘝𝘚' 

//--info FG
global.botName = '𝗔𝗥𝗠𝗔-𝗕𝗢𝗧'
global.fgig = 'https://instagram.com/arm-vs' 
global.fgsc = 'https://github.com/FG98F/Bot' 
global.fgyt = 'https://youtube.com/unified'
global.fgpyp = 'https://paypal.me/unified'
global.fglog = 'https://qu.ax/vvMUw.jpg' 

//--- Grupos WA
global.id_canal = '120363312092804854@newsletter' //-ID de canal de WhatsApp
global.fgcanal = 'https://whatsapp.com/channel/0029VaCeuZd6mYPQiWqxXj1F'
global.bgp = 'https://chat.whatsapp.com/BESBo5xjvIZE4YVvth6Yzr'
global.bgp2 = 'https://chat.whatsapp.com/I7bvd8XCAOUHjgkHteqFC7'
global.bgp3 = 'https://chat.whatsapp.com/F0JTTyZ3hsoL7OlU8TEpuH' //--GP NSFW

global.wait = '⌛ _Cargando..._\n*▬▬▬▭*'
global.rwait = '⌛'
global.dmoji = '🤭'
global.done = '✅'
global.error = '❌' 
global.xmoji = '🔥' 

global.multiplier = 69 
global.maxwarn = '2' // máxima advertencias

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
