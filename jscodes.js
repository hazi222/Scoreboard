

let duru = [[],[]];
let hasret = [[],[]];
let okan = [[],[]];
let yekta = [[],[]];
let arinc = [[],[]];
let gameNumber= 54;

let form1= 'W'
let form2= 'D'
let form3= 'L'



let form1Result = form1.fontcolor('green')
let form2Result = form2.fontcolor('white')
let form3Result = form3.fontcolor('red')




let duruForm = [form1,form1,form1,form1,form1];
let hasretForm = [form1,form1,form1,form1,form1];
let okanForm = [form1,form1,form1,form1,form1];
let yektaForm = [form1,form1,form1,form1,form1];
let arincForm = [form1,form1,form1,form1,form1];



// WIN
function hasretResult (win) {
    if (win) {
        hasret[0].push(form1Result)
        hasretForm.shift()
        hasretForm.push(form1Result)
    } else if(win === false) {
        hasret[1].push(form2Result)
        hasretForm.shift()
        hasretForm.push(form2Result)
    } else {
        hasretForm.shift()
        hasretForm.push(form3Result)
    }
}

function arincResult (win) {
    if (win) {
        arinc[0].push(form1Result)
        arincForm.shift()
        arincForm.push(form1Result)
    } else if(win === false) {
    arinc[1].push(form2Result)
    arincForm.shift()
    arincForm.push(form2Result)
    } else {
        arincForm.shift()
    arincForm.push(form3Result)
    }
}

function okanResult (win) {
    if (win) {
        okan[0].push(form1Result)
        okanForm.shift()
        okanForm.push(form1Result)
    } else if(win === false) {
    okan[1].push(form2Result)
    okanForm.shift()
    okanForm.push(form2Result)
    } else {
        okanForm.shift()
    okanForm.push(form3Result)
    }
}

function yektaResult (win) {
    if (win) {
        yekta[0].push(form1Result)
        yektaForm.shift()
        yektaForm.push(form1Result)
    } else if(win === false) {
    yekta[1].push(form2Result)
    yektaForm.shift()
    yektaForm.push(form2Result)
    } else {
        yektaForm.shift()
    yektaForm.push(form3Result)
    }
}

function duruResult (win) {
    if (win) {
        duru[0].push(form1Result)
        duruForm.shift()
        duruForm.push(form1Result)
    } else if(win === false) {
    duru[1].push(form2Result)
    duruForm.shift()
    duruForm.push(form2Result)
    } else {
        duruForm.shift()
    duruForm.push(form3Result)
    }
}




// HASRET
hasretResult(true)
hasretResult(true)
hasretResult(true)
hasretResult(true)
hasretResult(true)
hasretResult(true)
hasretResult(true)
hasretResult(true)
hasretResult(true)
hasretResult(true)
hasretResult(true)
hasretResult(false)
hasretResult(false)
hasretResult(false)
hasretResult(false)
hasretResult(false)
hasretResult(false)
hasretResult(false)
hasretResult(true)
hasretResult()
hasretResult()
hasretResult(true)
hasretResult(false)
hasretResult(false)
hasretResult()
hasretResult(true)
hasretResult(true)
hasretResult(true)
hasretResult()
hasretResult(true)
hasretResult(true)
hasretResult()
hasretResult(true)
hasretResult(true)
hasretResult(true)
hasretResult()
hasretResult(false)
hasretResult()
hasretResult(true)
hasretResult(true)
hasretResult()
hasretResult()
hasretResult()
hasretResult(true)
hasretResult(true)
hasretResult()
hasretResult(true)
hasretResult(true)
hasretResult(true)


// YEKTA
yektaResult(true)
yektaResult(true)
yektaResult(true)
yektaResult(true)
yektaResult(true)
yektaResult(true)
yektaResult(true)
yektaResult(true)
yektaResult(true)
yektaResult(false)
yektaResult(false)
yektaResult(false)
yektaResult(false)
yektaResult(false)
yektaResult(false)
yektaResult(false)
yektaResult(false)
yektaResult(true)
yektaResult()
yektaResult(true)
yektaResult()
yektaResult()
yektaResult(false)
yektaResult()
yektaResult(true)
yektaResult(true)
yektaResult(true)
yektaResult(true)
yektaResult(true)
yektaResult(true)
yektaResult()
yektaResult()
yektaResult()
yektaResult()
yektaResult(true)
yektaResult(false)
yektaResult()
yektaResult(true)
yektaResult()
yektaResult()
yektaResult()
yektaResult(true)
yektaResult()
yektaResult(true)
yektaResult(true)
yektaResult(true)
yektaResult()
yektaResult(true)

// DURU
duruResult(true)
duruResult(true)
duruResult(true)
duruResult(true)
duruResult(true)
duruResult(true)
duruResult(true)
duruResult(false)
duruResult(false)
duruResult(false)
duruResult(true)
duruResult(true)
duruResult(true)
duruResult(true)
duruResult(false)
duruResult(false)
duruResult(false)
duruResult(false)
duruResult(true)
duruResult()
duruResult()
duruResult()
duruResult(false)
duruResult(false)
duruResult(true)
duruResult(true)
duruResult()
duruResult(true)
duruResult(true)
duruResult(true)
duruResult(true)
duruResult()
duruResult()
duruResult(true)
duruResult(true)
duruResult(true)
duruResult(false)
duruResult(true)
duruResult(true)
duruResult(true)
duruResult()
duruResult(true)
duruResult()
duruResult(true)
duruResult(true)
duruResult(true)
duruResult(true)
duruResult()
duruResult(true)

// OKAN
okanResult(true)
okanResult(true)
okanResult(true)
okanResult(true)
okanResult(true)
okanResult(true)
okanResult(true)
okanResult(true)
okanResult(true)
okanResult(true)
okanResult(false)
okanResult(false)
okanResult(false)
okanResult(false)
okanResult(false)
okanResult(false)
okanResult(false)
okanResult(false)
okanResult(true)
okanResult()
okanResult(true)
okanResult()
okanResult()
okanResult(false)
okanResult()
okanResult(true)
okanResult(true)
okanResult(true)
okanResult()
okanResult(true)
okanResult()
okanResult(true)
okanResult()
okanResult(true)
okanResult(true)
okanResult(true)
okanResult(false)
okanResult()
okanResult(true)
okanResult()
okanResult()
okanResult(true)
okanResult(true)
okanResult(true)
okanResult(true)
okanResult()
okanResult(true)
okanResult(true)
okanResult(true)


//ARINÇ
arincResult(true)
arincResult(true)
arincResult(true)
arincResult(true)
arincResult(true)
arincResult(true)
arincResult(true)
arincResult(true)
arincResult(false)
arincResult(false)
arincResult(false)
arincResult(false)
arincResult(false)
arincResult(false)
arincResult(false)
arincResult(false)
arincResult(false)
arincResult()
arincResult(true)
arincResult(true)
arincResult(true)
arincResult()
arincResult(true)
arincResult()
arincResult()
arincResult()
arincResult(true)
arincResult()
arincResult(true)
arincResult(true)
arincResult(true)
arincResult(true)
arincResult(false)
arincResult(false)
arincResult(true)
arincResult(false)
arincResult(true)
arincResult(true)
arincResult(true)
arincResult(true)
arincResult(false)
arincResult(true)




duruPoints = (duru[0].length * 3) + (duru[1].length * 1) ;
hasretPoints = (hasret[0].length * 3) +(hasret[1].length * 1) ;
okanPoints = (okan[0].length * 3) + (okan[1].length * 1) ;
yektaPoints = (yekta[0].length * 3)+  (yekta[1].length * 1) ;
arincPoints = (arinc[0].length * 3)+  (arinc[1].length * 1) ;


let winPercentageDuru =(Math.round((duru[0].length / gameNumber) *100))
let winPercentageHasret =(Math.round((hasret[0].length / gameNumber) *100))
let winPercentageOkan =(Math.round((okan[0].length / gameNumber) *100))
let winPercentageYekta =(Math.round((yekta[0].length / gameNumber) *100))
let winPercentageArinc =(Math.round((arinc[0].length / gameNumber) *100))

let drawPercentageDuru =(Math.round((duru[1].length / gameNumber) *100))
let drawPercentageHasret =(Math.round((hasret[1].length / gameNumber) *100))
let drawPercentageOkan =(Math.round((okan[1].length / gameNumber) *100))
let drawPercentageYekta =(Math.round((yekta[1].length / gameNumber) *100))
let drawPercentageArinc =(Math.round((arinc[1].length / gameNumber) *100))

let lossPercentageDuru =100-(winPercentageDuru+drawPercentageDuru)
let lossPercentageHasret =100-(winPercentageHasret+drawPercentageHasret)
let lossPercentageOkan =100-(winPercentageOkan+drawPercentageOkan)
let lossPercentageYekta =100-(winPercentageYekta+drawPercentageYekta)
let lossPercentageArinc =100-(winPercentageArinc+drawPercentageArinc)





document.getElementById("scoreboard-percantage-duru").innerHTML = '%' + winPercentageDuru + ' | ' +'%' + drawPercentageDuru + ' | '+ '%' + lossPercentageDuru ;
document.getElementById("scoreboard-percantage-hasret").innerHTML = '%' + winPercentageHasret + ' | ' +'%' + drawPercentageHasret + ' | '+ '%' + lossPercentageHasret ;
document.getElementById("scoreboard-percantage-yekta").innerHTML = '%' + winPercentageYekta + ' | ' +'%' + drawPercentageYekta + ' | '+ '%' + lossPercentageYekta ;
document.getElementById("scoreboard-percantage-okan").innerHTML = '%' + winPercentageOkan + ' | ' +'%' + drawPercentageOkan + ' | '+ '%' + lossPercentageOkan ;
document.getElementById("scoreboard-percantage-arinc").innerHTML = '%' + winPercentageArinc + ' | ' +'%' + drawPercentageArinc + ' | '+ '%' + lossPercentageArinc ;


document.getElementById("scoreboard-score-duru").innerHTML = duruPoints;
document.getElementById("scoreboard-score-hasret").innerHTML = hasretPoints;
document.getElementById("scoreboard-score-okan").innerHTML= okanPoints;
document.getElementById("scoreboard-score-yekta").innerHTML = yektaPoints;
document.getElementById("scoreboard-score-arinc").innerHTML = arincPoints;

document.getElementById("scoreboard-win-duru").innerHTML = duru[0].length;
document.getElementById("scoreboard-win-hasret").innerHTML = hasret[0].length;
document.getElementById("scoreboard-win-okan").innerHTML = okan[0].length;
document.getElementById("scoreboard-win-yekta").innerHTML = yekta[0].length;
document.getElementById("scoreboard-win-arinc").innerHTML = arinc[0].length;

document.getElementById("scoreboard-draw-duru").innerHTML = duru[1].length;
document.getElementById("scoreboard-draw-hasret").innerHTML = hasret[1].length;
document.getElementById("scoreboard-draw-okan").innerHTML = okan[1].length;
document.getElementById("scoreboard-draw-yekta").innerHTML = yekta[1].length;
document.getElementById("scoreboard-draw-arinc").innerHTML = arinc[1].length;

document.getElementById("scoreboard-lose-duru").innerHTML = gameNumber-(duru[0].length + duru[1].length);
document.getElementById("scoreboard-lose-hasret").innerHTML = gameNumber-(hasret[0].length + hasret[1].length);
document.getElementById("scoreboard-lose-okan").innerHTML = gameNumber-(okan[0].length + okan[1].length);
document.getElementById("scoreboard-lose-yekta").innerHTML = gameNumber-(yekta[0].length + yekta[1].length);
document.getElementById("scoreboard-lose-arinc").innerHTML = gameNumber-(arinc[0].length + arinc[1].length);


document.getElementById("arincResult").innerHTML = arincForm.join(' ');
document.getElementById("duruResult").innerHTML = duruForm.join(' ');
document.getElementById("hasretResult").innerHTML = hasretForm.join(' ');
document.getElementById("yektaResult").innerHTML = yektaForm.join(' ');
document.getElementById("okanResult").innerHTML = okanForm.join(' ');



document.addEventListener("DOMContentLoaded", function sortTable() {
    
  var table, rows, switching, i, x, y, shouldSwitch;
  table = document.getElementById("myTable");
  switching = true;
  while (switching) {
   
    switching = false;
    rows = table.rows;
    for (i = 1; i < (rows.length - 1); i++) {
      
      shouldSwitch = false;
      
      x = rows[i].getElementsByTagName("TD")[4];
      y = rows[i + 1].getElementsByTagName("TD")[4];
      
      if (Number(x.innerHTML) < Number(y.innerHTML)) {
        
        shouldSwitch = true;
        break;
      }
    }
    if (shouldSwitch) {
    
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
    }
  
}

});



