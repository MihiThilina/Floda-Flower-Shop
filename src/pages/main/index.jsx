
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
import birthdayFlower from '../../assest/images/Birthdayflower1.jpg';
import birthdayFlower2 from '../../assest/images/Birthdayflower2.jpg';
import birthdayFlower3 from '../../assest/images/Birthdayflower3.jpg';
import birthdayFlower4 from '../../assest/images/Birthdayflower4.jpg';
import birthdayFlower5 from '../../assest/images/Birthdayflower5.jpg';
import birthdayFlower6 from '../../assest/images/Birthdayflower6.jpg';
import leafpng from '../../assest/images/leaves.png';



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
                            <AppBar position="static" style={{ backgroundColor: "rgba(255,241,241,255)" }}>
                                <Toolbar>
                                    <Typography style={{ color: 'black' }} variant="h5" component="div" sx={{ flexGrow: 1 }}>
                                        <b>Flower</b><span style={{ color: 'red' }}>SHOP</span>
                                    </Typography>
                                    <ul class="nav-link">
                                        <li><a href="#Home">Home</a></li>
                                        <li><a href="#About">About</a></li>
                                        <li><a href="#Service">Service</a></li>
                                        <li><a href="#Gallery">Gallery</a></li>
                                        <li><a href="#Shop">Shop</a></li>
                                        <li><a href="#Countct Us">Countct Us</a></li>
                                    </ul>
                                </Toolbar>
                            </AppBar>
                        </Box>
                    </header>
                    <main>

                        {/* hero section */}
                        <section className='hero_section' >
                            <img src={mainImage} alt="" />
                            <h5>Welcome to Flower<span style={{ color: 'red' }}>shop</span></h5>
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
                                            <div className='leaf-box-art' style={{ textAlign: 'center' }}>
                                            <img src={leafpng} alt="" />
                                            </div>
                                            <CardContent>
                                                <Typography gutterBottom variant="h5" style={{ textAlign: 'center' }} component="div">
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
                                            <div className='leaf-box-art' style={{ textAlign: 'center' }}>
                                            <img src={leafpng} alt="" />
                                            </div>
                                            <CardContent>
                                                <Typography gutterBottom variant="h5" style={{ textAlign: 'center' }} component="div">
                                                    Winter Bloom
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
                                            <div className='leaf-box-art' style={{ textAlign: 'center' }}>
                                            <img src={leafpng} alt="" />
                                            </div>
                                            <CardContent>
                                                <Typography gutterBottom variant="h5" style={{ textAlign: 'center' }} component="div">
                                                    Birthday Flowers
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

                        {/* -------------------------------------------------------- */}

                        <section className='third-Section'>

                            <section id="Flowers-Section">
                                <div class="Flower-heading">
                                    <h3>Give Someone a nice <br /> <span className='secondTopic'>flower today.</span> </h3>
                                </div>

                                <ul class="flower-filter">
                                    <li class="list flower-filter-active" data-filter="all">Birthday Flowers</li>
                                    <li class="list" data-filter="app">Flower Bouquet</li>
                                    <li class="list" data-filter="desing">Winter Blood</li>
                                    <li class="list" data-filter="web">Summer Splash</li>
                                </ul>
                                {/* <!-- container --> */}
                                <div class="flower-container">


                                    <a href="" class="flower-box app">
                                        <img src={birthdayFlower} alt="" />

                                    </a>


                                    <a href="" class="flower-box web">
                                        <img src={birthdayFlower2} alt="" />

                                    </a>


                                    <a href="" class="flower-box ai">
                                        <img src={birthdayFlower3} alt="" />

                                    </a>


                                    <a href="" class="flower-box desing">
                                        <img src={birthdayFlower4} alt="" />

                                    </a>


                                    <a href="" class="flower-box desing">
                                        <img src={birthdayFlower5} alt="" />

                                    </a>

                                    {/* <!-- 6 --> */}
                                    <a href="" class="flower-box app">
                                        <img src={birthdayFlower6} alt="" />

                                    </a>


                                </div>

                            </section>

                        </section>

                    </main>
                </body>
                <script></script>
            </>



        )

    }

}


export default MainPage;