import React from 'react';
import { selectSongs } from '../actions'
import Songlist from './SongList';
import SongDetail from './SongDetail';
// preciso do curly braces porque estou importando uma funcao que nao eh default

const App = () => {

    return <div><Songlist></Songlist><div></div><SongDetail></SongDetail></div>

}
export default App;