"use strict";

Object.defineProperty(exports, "__esModule", { value: true });

const { zokou } = require("../framework/nteej");

zokou({ nomCom: "test", reaction: "😌", nomFichier: __filename }, async (dest, zk, commandeOptions) => {

    console.log("Commande saisie !!!s");

    let z = 'Hello my name is  *⬡NTEEJ⬡* \n\n ' + "i'm a whatsapp bot multi-device";

    let d = ' by *NTEEJ TECH*';

    let varmess = z + d;

    var img = 'https://i.postimg.cc/tgg4fv86/nteej.jpg';

    await zk.sendMessage(dest, { image: { url: img }, caption: varmess });

    //console.log("montest")

});

console.log("mon test");

/*module.exports.commande = () => {

  var nomCom = ["test","t"]

  var reaction="☺️"

  return { nomCom, execute,reaction }

};



async function  execute  (origineMessage,zok) {

  console.log("Commande saisie !!!s")

   let z ='Salut je m\'appelle *Zokou* \n\n '+'je suis un bot Whatsapp Multi-appareil '

      let d =' developpé par *Djalega++*'

      let varmess=z+d

      var img='https://telegra.ph/file/626e7105422c8908f723d.jpg'

await  zok.sendMessage(origineMessage,  { image:{url:img},caption:varmess});

}  */ 
