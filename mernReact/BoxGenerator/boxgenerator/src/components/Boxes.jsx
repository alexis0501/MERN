import '../App.css';

const Boxes = (props) =>{
    const {colored} = props;

    return(
        <div className="d-flex">
            {colored.map((col) => <div className="Box" style={{background: col}} ></div>)}
        </div>
    )
}

export default Boxes;