import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import axios from 'axios'
import ItemCard from './itemCard'
import Grid from '@material-ui/core/Grid';
import { red } from '@material-ui/core/colors';
import { withStyles, createStyles } from "@material-ui/core/styles";
import { Typography } from '@material-ui/core';


const styles = theme => ({
  root: {
    flexGrow: 1,
    margin: 'auto',
    maxWidth: '100%'
    //margin: '10px 2% auto 2%'

  },

  control: {
    padding: theme.spacing.unit * 2,
  },
});


function SearchResult(props) {
  const { searchKey, searchResult, setResult } = props;
  const { classes } = props;
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const word = {
      text: searchKey,
    }
    axios.post('http://localhost:5000/item/search_items', word)
      .then(res => {
        setResult(res.data);
        setLoading(false);
      })
  }, [searchKey]);

  const result = searchResult.map(itemValue => (
    <Grid key={itemValue.ItemID} item>
      <ItemCard item={itemValue} />
    </Grid>));

  let showRes = (
    <Grid container className={classes.root} spacing={8} justify='center' >
      {result}
    </Grid>);

  if (result.length == 0)
    showRes = <Typography variant='h4'>Sorry, cannot found.</Typography>;

  return (
    !isLoading ?
      <div className="search_Grid" style={{ marginTop: '60px' }}>
        {showRes}
      </div> : null

  );

  SearchResult.propTypes = {
    classes: PropTypes.object.isRequired,
  };

}

const mapStateToProps = state => ({
  searchKey: state.search.searchKey,
  searchResult: state.search.searchResult,
});

const mapDispatchToProps = dispatch => ({
  setResult: res => dispatch({ type: 'SET_SEARCH_RESULT', searchResult: res })
});

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(SearchResult));