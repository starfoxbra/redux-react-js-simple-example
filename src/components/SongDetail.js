import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectSongs } from '../actions';

class SongDetail extends Component {
    render() {
        if (!this.props.song) {
            return <div> no select song</div>
        } else {
            return (
            <div> SongDetail :
                Autor : {this.props.song.title} 
                Duration : {this.props.song.duration}
            </div>
            )
        }
    }

}
const mapStateToProps = (state) => {

    return { song: state.selectedSong }
}

export default connect(mapStateToProps)(SongDetail);