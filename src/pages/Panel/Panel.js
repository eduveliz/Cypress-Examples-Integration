import {Card, CardActionArea, CardActions, CardContent, CardMedia} from "@mui/material";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

function Panel() {

    return (
        <div style={{padding: '3%', height: '100vh', backgroundColor: '#005151'}}>
            <h1 style={{color: '#ff3024'}}>
                Cypress Test Option
            </h1>
            <div style={{padding: '3%', display: 'flex', gap: '3%'}}>
                <Card sx={{minWidth: 300}}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="140"
                            image={require('../../assets/images/chuck.jpg')}
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Chuck Norris API
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Basic use cypress interceptors
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary">
                            Review
                        </Button>
                    </CardActions>
                </Card>

                <Card sx={{minWidth: 300}}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="140"
                            image={require('../../assets/images/soon.png')}
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                FORMS
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Complete forms and expect results
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary">
                            Review
                        </Button>
                    </CardActions>
                </Card>

                <Card sx={{minWidth: 300}}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="140"
                            image={require('../../assets/images/soon.png')}
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                CSS/CLASS
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Change css class and render DOM
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary">
                            Review
                        </Button>
                    </CardActions>
                </Card>

                <Card sx={{minWidth: 300}}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="140"
                            image={require('../../assets/images/soon.png')}
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Keys
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Press keys and detect
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary">
                            Review
                        </Button>
                    </CardActions>
                </Card>


            </div>
        </div>

    );
}

export default Panel;
