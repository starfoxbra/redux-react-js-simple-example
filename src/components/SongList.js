import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectSongs } from '../actions'
class SongList extends Component {
    returnList() {
        return this.props.songs.map((song) => {
            return (
                <li key={song.id}>
                    <div>
                        {song.title} <br></br>
                        <button onClick={() => this.props.selectSongs(song)} > SElecionar</button>
                    </div>
                </li>)
        })
    }
    render() {

        return (
            <div>
                <ul>
                    {this.returnList()}
                </ul>
            </div>

        )

    }
}
const mapStateToProps = (state) => {
    console.log(state);
    return { songs: state.songs, selectMusic: state.selectedSong };
}

export default connect(mapStateToProps, {
    selectSongs: selectSongs // usando es6 pode ser {selectSongs} somente
})(SongList);
// aqui eh chamado o dispatcher do redux