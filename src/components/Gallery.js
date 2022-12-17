import Posting from "./Posting"

function Gallery (props) {
    return (
        <div className="gallery">
            <h1> Gallery of items</h1>
            {props.postings.map ( (p) => {
                return (
                    <Posting posting={p}/>
                )
            }
            )}
        </div>
    )
}

export default Gallery

