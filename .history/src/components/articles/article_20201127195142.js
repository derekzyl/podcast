import React from 'react'

import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import Pagination from '@material-ui/lab/Pagination';
import './article.css'
import article1 from '../../images/article1.jpg';
import article2 from '../../images/article2.jpg';
import useStyles from './style'

function Article() {
    const classes = useStyles();
    return (
        <Container maxWidth="lg" className={classes.blogsContainer}>
            <Typography variant="h4" className={classes.blogTitle}>
                Articles
        </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6} md={4}>
                    <Card className={classes.card}>
                        <CardActionArea>
                            <CardMedia
                                className={classes.media}
                                image={article1}
                                title="Contemplative Reptile"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    US Presidential Election Aftermath
                  </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Despite supposed victory of Joe Biden, dispute about the election is still on
                  </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions className={classes.cardActions}>
                            <Box className={classes.author}>
                                <Avatar src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
                                <Box ml={2}>
                                    <Typography variant="subtitle2" component="p">
                                        Guy Clemons
                    </Typography>
                                    <Typography variant="subtitle2" color="textSecondary" component="p">
                                        May 14, 2020
                    </Typography>
                                </Box>
                            </Box>
                            <Box>
                                <BookmarkBorderIcon />
                            </Box>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Card className={classes.card}>
                        <CardActionArea>
                            <CardMedia
                                className={classes.media}
                                image={article2}
                                title="Contemplative Reptile"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    COVID 19 Aftermath
                  </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    COVID 19 has altered the way of life of the entire wolrd in ways we are still trying to understand
                  </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions className={classes.cardActions}>
                            <Box className={classes.author}>
                                <Avatar src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2734&q=80" />
                                <Box ml={2}>
                                    <Typography variant="subtitle2" component="p">
                                        Josh Simmons
                    </Typography>
                                    <Typography variant="subtitle2" color="textSecondary" component="p">
                                        May 14, 2020
                    </Typography>
                                </Box>
                            </Box>
                            <Box>
                                <BookmarkBorderIcon />
                            </Box>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Card className={classes.card}>
                        <CardActionArea>
                            <CardMedia
                                className={classes.media}
                                image="https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                                title="Contemplative Reptile"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    React useContext
                  </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                    across all continents except Antarctica
                  </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions className={classes.cardActions}>
                            <Box className={classes.author}>
                                <Avatar src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
                                <Box ml={2}>
                                    <Typography variant="subtitle2" component="p">
                                        Guy Clemons
                    </Typography>
                                    <Typography variant="subtitle2" color="textSecondary" component="p">
                                        May 14, 2020
                    </Typography>
                                </Box>
                            </Box>
                            <Box>
                                <BookmarkBorderIcon />
                            </Box>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Card className={classes.card}>
                        <CardActionArea>
                            <CardMedia
                                className={classes.media}
                                image="https://images.pexels.com/photos/325111/pexels-photo-325111.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                                title="Contemplative Reptile"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    React useContext
                  </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                    across all continents except Antarctica
                  </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions className={classes.cardActions}>
                            <Box className={classes.author}>
                                <Avatar src="https://images.unsplash.com/photo-1584999734482-0361aecad844?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1100&q=80" />
                                <Box ml={2}>
                                    <Typography variant="subtitle2" component="p">
                                        Guy Clemons
                    </Typography>
                                    <Typography variant="subtitle2" color="textSecondary" component="p">
                                        May 14, 2020
                    </Typography>
                                </Box>
                            </Box>
                            <Box>
                                <BookmarkBorderIcon />
                            </Box>
                        </CardActions>
                    </Card>
                </Grid>
            </Grid>
            <Box my={4} className={classes.paginationContainer}>
                <Pagination count={10} />
            </Box>
        </Container>
    )

}

export default Article
