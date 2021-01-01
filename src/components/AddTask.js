import React, {Component} from 'react' 
import './AddTask.css'
class AddTask extends Component {
    state = {
        text: '',
        checked: false,
        date: "2021-01-01"

      }
    render() { 
        return ( 
            <>
            <div className='form'>
                <input type="text" placeholder='dodaj zadanie' value={this.state.text}/>
                <input type="checkbox" checked={this.state.checked} name="" id="important"/>
                <label htmlFor="important">Priorytet</label>
                <br/>
                <label htmlFor="date">Do kiedy zrobic</label>
                <input type="date" value={this.state.date} min="2021-01-01" max="2021-12-31"/>
                <br/>
                <button>Dodaj</button>
            </div>
            <hr/>
            </>
         );
    }
}
 
export default AddTask;