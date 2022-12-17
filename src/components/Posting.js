function Posting (props) {
    return (
        <div className="posting">
            
            <h1>{props.posting.title}</h1>
            <img src={props.posting.imageURL} alt={props.posting.title} />
            <p>{props.posting.description}</p>
        </div>
    )
}

export default Posting
