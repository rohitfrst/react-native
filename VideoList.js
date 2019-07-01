import React from "react";
import { Text, View,ScrollView } from "react-native";
import Axios from "axios";
import AlbumDetail from "./AlbumDetail";


export default class VideoList extends React.Component {
  state = {
    albums: []
  };
  componentWillMount() {
    Axios.get("https://rallycoding.herokuapp.com/api/music_albums").then(
      response => this.setState({albums:response.data})
    );
  }

  renderList()
  {
    return this.state.albums.map(album=>
    <AlbumDetail key={album.title} album={album}/>)
  }

  render() {
      console.log(this.state.albums)
    return (
      <ScrollView>
        {this.renderList()}
      </ScrollView>
    );
  }
}


