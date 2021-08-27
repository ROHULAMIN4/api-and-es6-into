const randomuser=() =>{
    fetch('https://randomuser.me/api/?results=5')
    .then(res => res.json())
    .then(data => ramdomDisplay(data))
}
randomuser()
const ramdomDisplay=data1 =>{
    const buddies=data1.results
   
    for(const buddy of buddies){
       
        console.log(` firstName: ${buddy.name.first} lastName:${buddy.name.last} email:${buddy.email}`)
    }
   
   
}