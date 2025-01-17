//if you go to this url it shows the json
let api_base_url = "https://60d23844858b410017b2d60b.mockapi.io/tacos"

//using fetch go print the tacos by id and by all
async function getAllTacos(){
    //not returning data only console.log it
    let answer = await fetch(api_base_url)
    console.log(answer)

    let products = await answer.json()
    console.log("products", products)
}

async function getTacosById(tacoId){
//not returning data only console.log it
let responses = await fetch(api_base_url +"/"+ tacoId)
console.log(responses)

let products = await responses.json()
console.log("products", products)
}

//use get all, to print all tacos
getAllTacos()

//use get by id to print taco 3
getTacosById(3)
//use get by id to print taco 3789
getTacosById(3789)