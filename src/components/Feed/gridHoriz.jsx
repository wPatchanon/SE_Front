import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import ItemCard from '../SearchResult/itemCard';
import { Grid } from '@material-ui/core';
import ListSubheader from '@material-ui/core/ListSubheader';
import Typography from '@material-ui/core/Typography';
import 'typeface-roboto';

const styles = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        marginTop: '10px',
        //backgroundColor: theme.palette.background.paper,
    },
    grid: {
        width: '80%',
        margin: 'auto',
        minHeight: '342px'
    },
    gridList: {
        flexWrap: 'nowrap',
        // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
        transform: 'translateZ(0)',
        width: '100%',


    },
    gridListTile: {
        height: '100%',
        minHeight: '100%',
    },
    // title: {
    //     color: theme.palette.primary.light,
    // },

});

function GridHorizon(props) {
    const { classes, store, title } = props;

    return (
        <div className={`${title}List`}>
            <Grid container className={classes.grid}>
                <Typography variant="h6" className={classes.title}>
                    {title}
                </Typography>
                <div className={classes.root}>
                    <GridList className={classes.gridList} cellHeight={300} cols={window.innerWidth * 0.8 / 264} >
                        {store.map(itemValue => (
                            <GridListTile className={classes.gridListTile} key={itemValue.ItemID}>
                                <ItemCard item={itemValue} />
                            </GridListTile>
                        ))}
                    </GridList>
                </div>
            </Grid>
        </div>
    );
}

GridHorizon.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(GridHorizon);