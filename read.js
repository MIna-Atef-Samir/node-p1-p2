const fs = require('fs')

fs.readFile('./problem1.json', 'utf-8', (err, data)=>{
    if(err){
        console.log(err);
    }else{
        try{
            const parsedData = JSON.parse(data);
            parsedData.hight = 100;
            parsedData.weight = 50;
            parsedData.name = 'Fluffyy';
            parsedData.catFriends.furcolor = "black"
            let Totalweight = 0;
            let TotalActivities = []
            parsedData.catFriends.map(el => {
                if(el.furcolor){
                    el.furcolor = "black"
                }
                Totalweight += el.weight
                TotalActivities += [...el.activities]
                el.activities = [...el.activities , 'Eat', "Play Football"]
            });
            console.log(Totalweight);
            console.log(TotalActivities);

            fs.writeFile('./problem1.json', JSON.stringify(parsedData,null,2), err =>{
                if(err){
                    console.log(err);
                }
            })
            // console.log(parsedData);
        }catch(err){
            console.log(`error parsing JSON: ${err}`);
        }
    }
})


// Problem 2 instructions
const moment = require('moment');
let day = new Date();
let parsed = moment(day, "YYYY-MM-DD");
console.log(parsed);
fs.writeFile('./output2.json', JSON.stringify(parsed,null,2), err =>{
    if(err){
        console.log(err);
    }
})