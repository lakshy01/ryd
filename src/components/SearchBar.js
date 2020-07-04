import React from 'react';
import './style.css';

class SearchBar extends React.Component {

    state = { term: '', btnColor: 'rgb(250,250,250)' };

    onInputChange = (event) => {

        let color = 'rgb(5, 28, 51)';

        this.setState({ term: event.target.value });
        if (event.target.value !== '') {
            this.setState({ btnColor: color });
        } else {
            this.setState({ btnColor: 'rgb(250,250,250)' })
        }
    }

    onFormSubmit = (event) => {
        event.preventDefault();
    }

    onBtnClick = (event) => {
        this.props.onClick(this.state.term);
    }

    render() {
        return (
            <form onSubmit={this.onFormSubmit} className="ui form" style={{ marginTop: '30px' }}>
                <div className="field">
                    <label><h1 style={{ marginLeft: '400px', color: 'rgb(5, 28, 51)', fontSize: '40px' }} id="back1">Snap Shot</h1></label>
                    <br />
                    <div className="ui action input" style={{ width: '450px', marginLeft: '260px' }} id="back2">
                        <input type="text" value={this.state.term} placeholder="Search..." style={{ backgroundColor: 'rgb(237,239,240)', border: '2px solid rgb(215,219,223)' }} onChange={this.onInputChange} />
                        <button className="ui icon button" style={{ backgroundColor: this.state.btnColor, width: '50px' }} onClick={this.onBtnClick}>
                            <i className="search icon" style={{ color: 'white' }}></i>
                        </button>
                    </div>
                </div>
            </form>
        )
    }
}

export default SearchBar;