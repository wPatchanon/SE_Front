import React from 'react';
import { makeStyles } from '@material-ui/styles';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import 'typeface-roboto';
import { CardActionArea } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    card: {
        minWidth: 250,
        minHeight: 280,
        maxWidth: 250,
        maxHeight: 280,

    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },

}));

function ItemCard(props) {
    const classes = useStyles();

    function handleExpandClick() {
        setExpanded(!expanded);
    }

    const imgUrl = `http://localhost:5000/images/${props.item.ItemImage}`;

    return (
        <Card className={classes.card}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={imgUrl}

                />
                <CardContent >
                    <Typography variant='subtitle1' style={{ height: '3.5em' }}>
                        {props.item.ItemDesc}
                    </Typography>
                    <Typography variant='subtitle2'>
                        Lowest Ask
                </Typography>
                    <Typography variant='subtitle1'>
                        9999.99
                </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}

export default ItemCard;