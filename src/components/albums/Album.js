import React, {Component} from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import {Link} from "react-router-dom";

class Album extends Component {
    state = {
        showAlbumInfo: false,
    };

     onDeleteClick = async (_id) => {
       await axios.delete(`https://musicapi2018-2019.herokuapp.com/api/albums/${_id}`);
        this.props.refreshPage();
    };

    render() {
        const {_id, title, artist, year, tracks} = this.props.album;
        const {showAlbumInfo} = this.state;

        return (
            <div className="card card-albums card-body mb-3">
                <h4 style={{fontWeight: 'bold'}}>{title}
                    <i onClick={() => this.onDeleteClick(_id)}
                       className="fas fa-trash-alt" style={{cursor: 'pointer', float: 'right'}}
                    />
                    <Link to={`/album/${_id}`}> <i className="fas fa-pen" style={{cursor: 'pointer', float: 'right', marginRight: '20px'}}/> </Link>
                    <i onClick={() => this.setState({showAlbumInfo: !this.state.showAlbumInfo})} className="far fa-eye" style={{cursor: 'pointer', float: 'right', marginRight: '20px'}}/>

                </h4>
                {showAlbumInfo ? (
                    <ul className="list-group">
                    <li className="list-group-item album-list">Artist: {artist}</li>
                    <li className="list-group-item album-list">Year: {year}</li>
                    <li className="list-group-item album-list">Tracks: {tracks}</li>
                </ul>
                ) : null}
            </div>
        )
    }
}

Album
    .propTypes = {
    album: PropTypes.object.isRequired
};

export default Album;
