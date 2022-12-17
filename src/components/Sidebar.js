
import Help from "./Help"

function Sidebar () {
    return (
        <div className="sidebar">
        <h5>Customize Search</h5>
        <div className="customize">
            <label><input type='checkbox'/> Search title only</label>
            <label><input type='checkbox'/> has image</label>
            <label><input type='checkbox'/> posted today</label>
            <label><input type='checkbox'/> include nearby areas</label>
        </div>
        <Help />
        </div>
        
    )
}

export default Sidebar

