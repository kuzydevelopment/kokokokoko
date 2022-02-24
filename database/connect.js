const db = require("mongoose")
const ayarlar = require("../ayarlar.json")
db.connect(process.env.mongodb).then(() => {
    console.log(" ");
    console.log("[MongoDB] » MongoDB'ye başarıyla bağlanıldı");
}).catch(err =>  console.log(`[MongoDB] » MongoDB'ye bağlanılırken bir sorun oluştu Hata: ${err}`));
