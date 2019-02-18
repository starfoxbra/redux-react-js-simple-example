import { combineReducers } from 'redux';

const songsReducer = () => {
    return ([
        { id: 1, title: 'Smells like teen sprint', duration: '4:05' },
        { id: 2, title: 'BackStreet Boys', duration: '2:05' },
        { id: 3, title: 'Beatles - i want it that way', duration: '41:05' },
    ])
}

const selectedSongReducer = (selectSong =null, action) => {
    if (action.type === "SONG_SELECTED") {
        return action.payload
    }
    return selectSong;
}
export default combineReducers({ songs: songsReducer, selectedSong: selectedSongReducer });

