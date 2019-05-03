import React,{ Component } from 'react';
import {ScrollView} from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component{
    state = { albums:[]};


    componentWillMount(){
        console.log('Component will mount in album list');
        axios.get('http://rallycoding.herokuapp.com/api/music_albums')
        .then(response => this.setState({ albums: response.data }));
       // .then(response => console.log(response));
    }

    renderrerAlbums(){
      return this.state.albums.map(album =>
         <AlbumDetail key={album.title} album = {album}/>);
    }

    render(){
       console.log(this.state);
        return(
            <ScrollView>
            {this.renderrerAlbums()}
            </ScrollView>
        );
    }
}

export default AlbumList;