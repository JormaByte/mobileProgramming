export function Settings(){
    console.log("works")

    return(
        <div>
            <h3>Settings</h3>

            <h4>Choose your measurement system here:</h4>

            <input type='radio' name='system' label='metric'/>
            <label for='metric'>Metric</label>

            <input type='radio' name='system' label='imperial'/>
            <label for='imperial'>Imperial</label>
        </div>
    )
}