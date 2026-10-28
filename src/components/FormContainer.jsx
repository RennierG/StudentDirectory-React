const FormContainer = () => {

    return(
        <>
        <section id = "formContainer">
        <form id="studentForm">

            <div className = "input-field">
                <label htmlFor="name">Name:</label>
                <input type="text" name="name" id="name"/>           
            </div>

            <div className="input-field">
                <label htmlFor="program">Program:</label>
                <input type="text" name="program" id="program"/>
            </div>

            <div>
                <button>ADD STUDENT</button>
            </div>
        </form>
 
    </section>
        </>
    )

}

export default FormContainer