import React from 'react';
import SearchBar from './SearchBar';
import unsplash from '../api/unsplash';
import ImageList from './ImageList';
import FilterBtn from './FilterBtn';
import './style.css';

class App extends React.Component {

    state = { images: [], selectedFilter: [], show: false, btnTerm: '' };

    onSearchBar = async (term) => {
        const response = await unsplash.get('/search/photos', {
            params: {
                query: term
            }
        })

        this.setState({
            images: response.data.results,
            show: false,
            btnTerm: term
        });
    }

    onSelectedFilter = async (term) => {
        const response = await unsplash.get('/search/photos', {
            params: {
                query: term
            }
        })
        this.setState({
            selectedFilter: response.data.results,
            show: true,
            btnTerm: term
        })
    }

    componentDidMount() {
        this.onSelectedFilter("Mountain");
    }

    render() {

        if (this.state.show) {
            return (
                <div className="ui container" style={{ marginTop: '60px' }}>
                    <SearchBar onClick={this.onSearchBar} />
                    <br />
                    <br />
                    <div className="back4" style={{ marginLeft: '150px' }}>
                        <FilterBtn text="Mountain" onSelectedFilter={this.onSelectedFilter} />
                        <FilterBtn text="Beaches" onSelectedFilter={this.onSelectedFilter} />
                        <FilterBtn text="Birds" onSelectedFilter={this.onSelectedFilter} />
                        <FilterBtn text="Food" onSelectedFilter={this.onSelectedFilter} />
                        <br />
                        <br />
                    </div>
                    <div style={{ marginLeft: '380px' }} id="back5"><h1 className="head" style={{ color: 'rgb(5, 28, 51)', fontWeight: 'bolder' }}>{this.state.btnTerm} Pictures</h1></div>
                    <br />
                    <br />
                    <ImageList images={this.state.selectedFilter} />
                </div>
            )
        }

        return (
            <div className="ui container" style={{ marginTop: '60px' }}>
                <SearchBar onClick={this.onSearchBar} />
                <br />
                <br />
                <div className="back4" style={{ marginLeft: '150px' }}>
                    <FilterBtn text="Mountain" onSelectedFilter={this.onSelectedFilter} />
                    <FilterBtn text="Beaches" onSelectedFilter={this.onSelectedFilter} />
                    <FilterBtn text="Birds" onSelectedFilter={this.onSelectedFilter} />
                    <FilterBtn text="Food" onSelectedFilter={this.onSelectedFilter} />
                    <br />
                    <br />
                </div>
                <div style={{ marginLeft: '380px' }} id="back6"><h1 className="head" style={{ color: 'rgb(5, 28, 51)', fontWeight: 'bolder' }}>{this.state.btnTerm} Images</h1></div>
                <br />
                <br />
                <ImageList images={this.state.images} />
            </div>
        )


    }
}

export default App;