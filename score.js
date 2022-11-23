let duru = [[],[]];
let hasret = [[],[]];
let okan = [[],[]];
let yekta = [[],[]];
let gameNumber= 12;




// WIN
function hasretResult (win) {
    if (win) {
        hasret[0].push('W')
    } else {
    hasret[1].push('D')
}
}

function duruResult (win) {
    if (win) {
        duru[0].push('W')
    } else {
    duru[1].push('D')
}
}

function okanResult (win) {
    if (win) {
        okan[0].push('W')
    } else {
    okan[1].push('D')
}
}

function yektaResult (win) {
    if (win) {
        yekta[0].push('W')
    } else {
    yekta[1].push('D')
}
}

// HASRET
hasretResult(true)
hasretResult(true)
hasretResult(true)
hasretResult(true)
hasretResult(true)
hasretResult()
hasretResult()
hasretResult()
hasretResult()

// YEKTA
yektaResult(true)
yektaResult(true)
yektaResult(true)
yektaResult(true)
yektaResult()
yektaResult()
yektaResult()
yektaResult()

// DURU
duruResult(true)
duruResult(true)
duruResult(true)
duruResult(true)
duruResult(true)
duruResult()
duruResult()
duruResult()
duruResult()

// OKAN
okanResult(true)
okanResult(true)
okanResult(true)
okanResult(true)
okanResult(true)
okanResult()
okanResult()
okanResult()
okanResult()

duruPoints = (duru[0].length * 3) + (duru[1].length * 1) ;
hasretPoints = (hasret[0].length * 3) +(hasret[1].length * 1) ;
okanPoints = (okan[0].length * 3) + (okan[1].length * 1) ;
yektaPoints = (yekta[0].length * 3)+  (yekta[1].length * 1) ;


let duruPointsDisplay = duruPoints;

document.getElementById("scoreboard-score-duru").innerHTML = duruPoints;









/*
console.log('Durunun puanı: ' + duruPoints)
console.log('Yektanın puanı: ' + yektaPoints)
console.log('Hasretin puanı: '+ hasretPoints)
console.log('Okanın puanı: '+ okanPoints)



console.log(`Duru'nun Galibiyet Sayısı ${duru[0].length}, beraberlik sayısı ${duru[1].length} ve mağlubiyet sayısı ${gameNumber-(duru[0].length + duru[1].length)}.`)
console.log(`Yekta'nın Galibiyet Sayısı ${yekta[0].length}, beraberlik sayısı ${yekta[1].length} ve mağlubiyet sayısı ${gameNumber-(yekta[0].length + yekta[1].length)}.`)
console.log(`Hasret'in Galibiyet Sayısı ${hasret[0].length}, beraberlik sayısı ${hasret[1].length} ve mağlubiyet sayısı ${gameNumber-(hasret[0].length + hasret[1].length)}.`)
console.log(`Okan'ın Galibiyet Sayısı ${okan[0].length}, beraberlik sayısı ${okan[1].length} ve mağlubiyet sayısı ${gameNumber-(okan[0].length + okan[1].length)}.`) */