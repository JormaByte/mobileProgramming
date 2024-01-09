export function AddExercise(){

    console.log("works")

    let tiedot = date + " " + nimi + " -> " + teksti ;
  
  
    const newDiv = document.createElement("div") ;


    newDiv.textContent = tiedot;

    document.getElementById("p").appendChild(newDiv) ;

    return(
        <div class='add'>
            <h2>Tell us about your last exercise here:</h2>


            <button>Add Exercise</button>
        </div>
    )
}
