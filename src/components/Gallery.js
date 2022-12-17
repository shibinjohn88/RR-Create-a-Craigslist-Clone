import Posting from "./Posting"

function Gallery (props) {
    return (
        <div className="gallery">
            <h1> Gallery of items</h1>
            {props.postings.map ( (p,i) => {
                return (
                    <Posting posting={p} key={i}/>
                )
            }
            )}
        </div>
    )
}

export default Gallery

