// https://icanhazdadjoke.com/

// Api call using promises

const jokes = document.querySelector('#joke');
const jokebtn = document.querySelector('#jokebtn');

// const generatejokes = () => {

//     const setheader = {
//         headers: {
//             Accept : "application/json"
//         }
//     }

//     fetch('https://icanhazdadjoke.com', setheader)
//     .then((res) =>  res.json() )
//     .then((data) => {
//         jokes.innerHTML = data.joke;
//     }).catch((error) => {
//         console.log(error);
//     })
// }



// Api call using Asnc/await

const generatejokes = async () => {

    try{
    
        const setheader = {
            headers: {
                Accept : "application/json"
            }
        }
    
      const res = await fetch('https://icanhazdadjoke.com', setheader)
      const data = await res.json();
      jokes.innerHTML = data.joke;

    }catch(err){
        console.log(`The Error is ${err}`);
    }



}


jokebtn.addEventListener('click', generatejokes);
generatejokes();
