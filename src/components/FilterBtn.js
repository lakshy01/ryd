import React from 'react';
import './style.css';

class FilterBtn extends React.Component {

    state = { screenWidth: '150px' }



    render() {
        return (
            <button onClick={() => { this.props.onSelectedFilter(this.props.text) }} className="ui primary button" style={{ margin: '10px', width: '150px', backgroundColor: 'rgb(5, 28, 51)' }} id="back3">
                {this.props.text}
            </button>
        )
    }
}

export default FilterBtn;