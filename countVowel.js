let msg = `Je suis le ténébreux, - le veuf, - l'inconsolé,
Le prince d'Aquitaine à la tour abolie :
Ma seule étoile est morte, - et mon luth constellé
Porte le soleil noir de la Mélancolie.

Dans la nuit du tombeau, toi qui m'as consolé,
Rends - moi le Pausilippe et la mer d'Italie,
La fleur qui plaisait tant à mon cœur désolé,
Et la treille où le pampre à la rose s'allie.

Suis - je Amour ou Phébus ? ...Lusignan ou Biron ?
Mon front est rouge encor du baiser de la reine;
J'ai rêvé dans la grotte où nage la sirène...

Et j'ai deux fois vainqueur traversé l'Achéron;
Modulant tour à tour sur la lyre d'Orphée
Les soupirs de la sainte et les cris de la fée.'`

msg = msg.toLowerCase()

let a = 'a'
let e = 'e'
let i = 'i'
let o = 'o'
let u = 'u'
let y = 'y'

let countA = 0;
let countE = 0;
let countI = 0;
let countO = 0;
let countU = 0;
let countY = 0;

for (let i = 0; i < msg.length; i++) {
  if (msg[i] === 'e' || msg[i] === 'é' || msg[i] === 'è' || msg[i] === 'ê') {
    countE++
  }
  if (msg[i] === a) {
    countA++
  }
  if (msg[i] === i) {
    countI++
  }
  if (msg[i] === o) {
    countO++
  }
  if (msg[i] === u) {
    countU++
  }
  if (msg[i] === y) {
    countY++
  }
}
console.log(`le texte contient ${countE} e`)
console.log(`le texte contient ${countA} a`)
console.log(`le texte contient ${countI} i`)
console.log(`le texte contient ${countO} o`)
console.log(`le texte contient ${countU} u`)
console.log(`le texte contient ${countY} y`)