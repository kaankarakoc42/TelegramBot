const TelegramApiBot = require("node-telegram-bot-api")
const getRandom = require("./req")
const TOKEN="your token"

const kaanbot=new TelegramApiBot(TOKEN,{polling:true})

kaanbot.onText(/\/start/,(msg,match)=>{
    var id=msg.chat.id
    kaanbot.sendMessage(id,"merhaba dostum ben kaan karakoç tarafından sana yardımcı olmak amacıyla yazılmış bir botum")
    kaanbot.sendMessage(id,`sana nasıl yardımcı olabilirim? \n(/options yazmalısın)`)
})

kaanbot.onText(/\/options/,(msg,match)=>{
    var id=msg.chat.id
    kaanbot.sendMessage(id,`pekala şuan bunları kullanabilirsin. \n\n/oner  film dizi öner`)
})

kaanbot.onText(/\/oner/,(msg,match)=>{
    var id=msg.chat.id
    getRandom(data=>{
        console.log(data)
        kaanbot.sendMessage(id,`${data.title}\n${data.date}\n${data.imdb}\n${data.type}`)
    })
    
})

kaanbot.onText(/\/echo (.+)/,(msg,match)=>{
       var id=msg.chat.id
       var text=match[1]
       console.log(text,match,msg.chat)
       kaanbot.sendMessage(id,text)
})

kaanbot.onText(/sa/,(msg,match)=>{
    var id=msg.chat.id
    var text=match[1]
    console.log(text,match,msg.chat)
    if(match.input.replace("sa","")=="")
       kaanbot.sendMessage(id,`${msg.chat.first_name} ve aleykümselam`)
})

kaanbot.onText(/Sa/,(msg,match)=>{
    var id=msg.chat.id
    var text=match[1]
    console.log(text,match,msg.chat)
    if(match.input.replace("Sa","")=="")
      kaanbot.sendMessage(id,`${msg.chat.first_name} ve aleykümselam`)
})