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

let a = 'a'
let e = 'e'
let i = 'i'
let o = 'o'
let u = 'u'
let y = 'y'

let countA = msg.split(a).length - 1
let countE = msg.split(e).length - 1
let countI = msg.split(i).length - 1
let countO = msg.split(o).length - 1
let countU = msg.split(u).length - 1
let countY = msg.split(y).length - 1

console.log(countA + countE + countI + countO + countU + countY)
