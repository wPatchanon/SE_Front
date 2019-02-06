import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
import GridHorizon from './gridHoriz';
import axios from 'axios'

function Feed(props) {
    const [popular, setPopular] = useState([]);
    const [newest, setNewest] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:5000/item/get_popular_items')
            .then(res => res.data.slice(0, 20))
            .then(resdata => setPopular(resdata));

        axios.get('http://localhost:5000/item/get_new_items')
            .then(res => res.data.slice(0, 20))
            .then(resdata => setNewest(resdata));
    }, [])

    return (
        <div style={{ marginTop: '60px' }}>
            <GridHorizon title='Popular' store={popular} />
            <GridHorizon title='New Release' store={newest} />
        </div>
    );

}

export default Feed;