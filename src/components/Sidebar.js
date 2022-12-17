
import Help from "./Help"

function Sidebar () {
    return (
        <div className="sidebar">
        <h5>Customize Search</h5>
        <ul>
            <li><label><input type='checkbox'/> Search title only</label></li>
            <li><label><input type='checkbox'/>has image</label></li>
            <li><label><input type='checkbox'/>posted today</label></li>
            <li><label><input type='checkbox'/>bundle duplabelcates</label></li>
            <li><label><input type='checkbox'/>include nearby areas</label></li>     
        </ul>
        <Help />
        </div>
        
    )
}

export default Sidebar

