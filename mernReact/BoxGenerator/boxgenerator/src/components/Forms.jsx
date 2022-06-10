const Form = (props) =>{

    const SubmitForm = (e) =>{
        e.preventDefault();
        props.setColor(e.target.color.value)
        e.target.color.value='';
    }

    return(
        <form onSubmit={SubmitForm}>
            <label>Color:</label>
            <input type='text' id='color'></input>
            <button className="btn">submit</button>
        </form>
    );
}
export default Form;
