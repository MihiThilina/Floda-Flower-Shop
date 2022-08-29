
import { Component } from 'react';
import './style.css';
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import mainImage from '../../assest/images/mainImage.png';


class MainPage extends Component {


    constructor(props) {
        super(props)
    }


    render() {
        return (

            <>

                <body>

                    <header>
                        <Box sx={{ flexGrow: 1 }}>
                            <AppBar position="static">
                                <Toolbar>
                                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                                        FloweSHOP
                                    </Typography>
                                    <h5>Home</h5>
                                    <h5>About</h5>
                                    <h5>Service</h5>
                                    <h5>Gallery</h5>
                                    <h5>Shop</h5>
                                    <h5>Countct Us</h5>
                                    <Button color="inherit">Login</Button>
                                </Toolbar>
                            </AppBar>
                        </Box>
                    </header>
                    <main>

                        {/* hero section */}
                        <section className='hero_section' >
                            <img src={mainImage} alt="" />
                            <h5>Welcome to Flower<span>shop</span></h5>
                            <h1>The Florist to fullfill <br />
                                your needs
                            </h1>
                            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary</p>
                            <button>See More</button>
                        </section>

                        {/* about section */}
                        <section className='about-section'>
                            <div className='card-section'>
                                <div className='cards'>
                                    <Card sx={{ maxWidth: 345 }}>
                                        <CardActionArea>
                                            <CardMedia

                                            />
                                            <CardContent>
                                                <Typography gutterBottom variant="h5" component="div">
                                                    Summer Splash
                                                </Typography>
                                                <Typography variant="body2" color="text.secondary">
                                                    Lizards are a widespread group of squamate reptiles, with over 6,000
                                                    species, ranging across all continents except Antarctica
                                                </Typography>
                                            </CardContent>
                                        </CardActionArea>
                                    </Card>
                                </div>
                                <div className='cards'>
                                    <Card sx={{ maxWidth: 345 }}>
                                        <CardActionArea>
                                            <CardMedia

                                            />
                                            <CardContent>
                                                <Typography gutterBottom variant="h5" component="div">
                                                    
                                                </Typography>
                                                <Typography variant="body2" color="text.secondary">
                                                    Lizards are a widespread group of squamate reptiles, with over 6,000
                                                    species, ranging across all continents except Antarctica
                                                </Typography>
                                            </CardContent>
                                        </CardActionArea>
                                    </Card>
                                </div>
                                <div className='cards'>
                                    <Card sx={{ maxWidth: 345 }}>
                                        <CardActionArea>
                                            <CardMedia

                                            />
                                            <CardContent>
                                                <Typography gutterBottom variant="h5" component="div">
                                                    Lizard
                                                </Typography>
                                                <Typography variant="body2" color="text.secondary">
                                                    Lizards are a widespread group of squamate reptiles, with over 6,000
                                                    species, ranging across all continents except Antarctica
                                                </Typography>
                                            </CardContent>
                                        </CardActionArea>
                                    </Card>
                                </div>
                            </div>

                        </section>

                    </main>
                </body>

            </>

        )

    }

}


export default MainPage;