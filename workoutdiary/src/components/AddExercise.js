export function AddExercise(){

    console.log("works")


    return(
        <div class='add'>
            <h2>Tell us about your last exercise here:</h2>

            <input id="name"/>

            <input id="note"/> <br/>

            <input type="checkbox" id="check" name="check" value="important"/> Important <br/>



            <input type="button" id="checkbutton" name="" value="print" onclick="AddExercise()"/>

            <p id="p"></p>

            <button>Add Exercise</button>
        </div>
    )
    
}
