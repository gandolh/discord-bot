
let odds_list = {"🍊":0.1 ,"🍋":0.1 ,"🍇":0.2 , "🍒":0.3 , "🍑":0.2, "🃏":10,"🍎":0.1}
let place_holder = ["🍊","🍋","🍇","🍒","🍑","🃏","🍎","🍊","🍋","🍇","🍒","🍑","🍊","🍋","🍇","🍒","🍑","🍊","🍋","🍇","🍒","🍑"]

function choose(choices) {
    var index = Math.floor(Math.random() * choices.length);
    return choices[index];
  }


const count_pacanea= (arr,elt)=>{
return arr.filter(x => x==elt).length;
}
function Pacanea(){
    let mula = 0.0
    let panel=[]

    for (let i=0;i<5;i++){
         let castig = [choose(place_holder),choose(place_holder),choose(place_holder),choose(place_holder),choose(place_holder)]
         panel.push(castig)
        if (i == 3){
            for (i of castig){
                let control =count_pacanea(castig,i)
                if (control >= 3)
                    mula += odds_list[i]
            }
        }
    }
    console.log(mula)
    return panel

}

const buildPanelPacanea = (matrix)=>{
    let resultPanel="";
    for(let i of matrix){
        for(let j of i)
            resultPanel+=j;
        resultPanel+='\n';
    }
    return resultPanel;
}

const roll_pacanea = (msg,args)=>{
    //  msg.channel.send(replies[++k % replies.length])
    // let x=place_holder[Math.floor(Math.random()*place_holder.length)];
    let panel=Pacanea()
    msg.channel.send(buildPanelPacanea(panel))
     
}
module.exports = roll_pacanea;