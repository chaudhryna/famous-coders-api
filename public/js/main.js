const deleteText = document.querySelectorAll('.fa-trash-can')
const heartText = document.querySelectorAll('.fa-heart')

Array.from(deleteText).forEach((element)=>{
    element.addEventListener('click', deleteCoder)
})

Array.from(heartText).forEach((element)=>{
    element.addEventListener('click', addLike)
})

async function deleteCoder(){
    const fName = this.parentNode.childNodes[1].innerText
    const lName = this.parentNode.childNodes[3].innerText
    try{
        const response = await fetch('deleteCoder', {
            method: 'delete',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
              'firstNameS': fName,
              'lastNameS': lName
            })
          })
        const data = await response.json()
        console.log(data)
        location.reload()

    }catch(err){
        console.log(err)
    }
}

async function addLike(){
    const fName = this.parentNode.childNodes[1].innerText
    const tLikes = Number(this.parentNode.childNodes[5].innerText)
    try{
        console.log(fName, lName, tLikes)
        console.log(coderId)
        // const response = await fetch('addOneLike', {
        //     method: 'put',
        //     headers: {'Content-Type': 'application/json'},
        //     body: JSON.stringify({
        //       'firstNameS': fName,
        //       'lastNameS': lName,
        //       'likesS': tLikes
        //     })
        //   })
        // const data = await response.json()
        // console.log(data)
        // location.reload()

    }catch(err){
        console.log(err)
    }
}