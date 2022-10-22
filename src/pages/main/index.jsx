
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
import birthdayFlower7 from '../../assest/images/Birthdayflower7.jpg';
import birthdayFlower8 from '../../assest/images/Birthdayflower8.jpg';
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
                                    <Card sx={{ maxWidth: 345 }} className='card'>
                                        <CardActionArea>
                                            <div className='leaf-box-art' style={{ textAlign: 'center' }}>
                                                <img src={leafpng} alt="" />
                                            </div>
                                            <CardContent>
                                                <Typography className='contentheder' gutterBottom variant="h5" style={{ textAlign: 'center' }} component="div">
                                                    <b className='contentheder'>Summer Splash</b>
                                                </Typography>
                                                <Typography className='content' style={{ textAlign: 'center' }} variant="body2" color="text.secondary">
                                                   <p className='content' >
                                                    Lizards are a widespread group of squamate reptiles, with over 6,000
                                                    species, ranging across all continents except Antarctica
                                                    </p> 
                                                </Typography>
                                            </CardContent>
                                        </CardActionArea>
                                    </Card>
                                </div>
                                <div className='cards'>
                                    <Card sx={{ maxWidth: 345 }} className='card'>
                                        <CardActionArea>
                                            <div className='leaf-box-art' style={{ textAlign: 'center' }}>
                                                <img src={leafpng} alt="" />
                                            </div>
                                            <CardContent>
                                                <Typography className='contentheder' gutterBottom variant="h5" style={{ textAlign: 'center' }} component="div">
                                                    <b className='contentheder'>Winter Bloom</b>
                                                </Typography>
                                                <Typography className='content'  style={{ textAlign: 'center' }} variant="body2" color="text.secondary">
                                                <p className='content' >
                                                    Lizards are a widespread group of squamate reptiles, with over 6,000
                                                    species, ranging across all continents except Antarctica
                                                    </p> 
                                                </Typography>
                                            </CardContent>
                                        </CardActionArea>
                                    </Card>
                                </div>
                                <div className='cards card3'>
                                    <Card sx={{ maxWidth: 345 }} className='card'>
                                        <CardActionArea>
                                            <div className='leaf-box-art' style={{ textAlign: 'center' }}>
                                                <img src={leafpng} alt="" />
                                            </div>
                                            <CardContent>
                                                <Typography className='contentheder' gutterBottom variant="h5" style={{ textAlign: 'center' }} component="div">
                                                    <b className='contentheder'>Birthday Flowers</b>
                                                </Typography>
                                                <Typography  style={{ textAlign: 'center' }} variant="body2" color="text.secondary">
                                                <p className='content' >
                                                    Lizards are a widespread group of squamate reptiles, with over 6,000
                                                    species, ranging across all continents except Antarctica
                                                    </p> 
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
                                    {/* <!-- 6 --> */}
                                    <a href="" class="flower-box app">
                                        <img src={birthdayFlower7} alt="" />

                                    </a>
                                    {/* <!-- 6 --> */}
                                    <a href="" class="flower-box app">
                                        <img src={birthdayFlower8} alt="" />

                                    </a>


                                </div>

                            </section>

                        </section>

                        {/* ------------------Service------------------------------- */}


                        <section className='service-section'>

                            <div className='services'>
                                <div>
                                    <section className='image-services'>
                                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABmJLR0QA/wD/AP+gvaeTAAAE8klEQVR4nO2Za6hUVRTHf/9z75x9QG8a9n58iIgQpFsIdYMkrT4E0UuzDHpQYUZQVPQpiB7Uh0pIgiL60Icisag0kIoIiQgNU3tdSwLtRdC1BNN7m7PnNGf1YR6dOzozd/ROo+P5wXBnr7X2Wv9Z7L3PuedATk5OTk5OTk5OTk5OTk5OTk5OTk7OsYNaOQ0GcG4V0sX/l6DmYmwj3j8AGM49i7SQRv1pWkIaw2wz0jvy/od2aVs3IIoWYbbhsIRPJ9IiyuVxguCLKUQbsJYgeFDF4i/NgoLWKWxmhxK7i9kQAwNT1SRgMeXyNouiBc2CBjsovwFpeQfx00Oarka6qIl3FOlazOYB71VtP2O2AelmIEKag9l6C8NLVCp925igkwZMKI53dSj/sDHnik2dklcc77JC4XiCoGb7U97faWG4Euld4FzgOKTXDeYLytkUrbfAUYxKpe+QrsRsT9U0TBje2BjXtw0AUBz/hPR0xnR/Y0xfNwAA718B9gEgjVihcEHW3fcNEEwAq+uGILgr6+/7BgCQpi9nRrcYzKgN+q8BZqdYGC6xoaETaiYlyddIW6rDWUTRspqvXxqQvbSdjvQ2pdJuc+5bc+4FC8MlpOnaTMzdtS+d3AccuSTJDpz7HpibsQqYB8xDum9SvNmFViicryT5qi9WgCDG+/MIggWYPQp8DPzdclIQ3A39sgIAwT8Ui58BnwFPGQxSKAwjXYF0CbAAmJWZMhf65ww4AME/SpKtKpWekfdX4/2JSLc2xvVtAxoRJJTL3zfaj5kGNCNvQK8F9JqpXwWk0ywMl3ZRSzNO6mbyqTfAbD7SW13U0hOO+S2QN6DXAnpN3oBeC+g1R9c/Q0GwB7MwazIQUXQpZsNIc4Bfkd5XsfjbVFJ20oA/kD6ZZDEbAc5sEp8C65F8BzWak6ZbVSxutChamKl/Bs59U30xAmY1e9mcexXvHxKMt0rbSQO2K47rz9Utim4DlrSID4AZxPFSQamDOp1wcvXTyACwnCgatjhepBbPBjppwIg5t7M+MjuD/86QHZi9QRCMAQsxW1b1XY5zoybt66BOa8yGDmIdxWwNlTpXANdUYy/EuV1WeTIM4Bontn477NxVwPo2kj7C++sE9VdYFoY3IL3J/3PIrsP7m7KrzJy7F3ixzbwN8v7y1gIHB7cAf7SMke7J/ngAlUpvA2ubzJhOUgqFFY1bTN6/hNnnbea+D222gCYmxgzOplA4h9pqGRwMSdON1ZAxxfGPTaZvonZGSE8Ar7URNDXSNESqPdjYpfHx3QcXr03ASHW0kjRdU/cFwV55vxOmcAYI9pMk2+qGJMGc+4vK87XZBmGTQ+7UjOjtKpWm7c2yObcXmA2cYBCocsVpCLLZqLrDpVElydaD5TrUPfpN9a+jst8m1x4amgPcXhsifXmIdZpRyzebKLrjgPozZpyMdH3dkKabp7W6heEyc86qn8TC8BGD4w1kUbTQnNue8X84rcUr9Rdn8ntz7iGDWQYDFkWXmXM7Mv5PW+USgEXRk5itQHpZcfxYvVAUnYXZOqTJNztmAZMfMR8plKncA9SYwGxEpdJoswmVBji3H5gJjMv7+nXWnHsYeK5LYrvNbqSliuOWK6ByBkirgAmk5yd5zT4Afu+Wwi7ggW2YPY73c9v9eGhzIwRglSYdicv9YIwLkl6LOKr4F+kRrd9r2vofAAAAAElFTkSuQmCC" />
                                    </section>
                                    <h2 className='maintopic'>Free Shipping</h2>
                                    <p className='drescription'>Enjoy our fast & free delivery</p>
                                </div>
                                <div>
                                    <section className='image-services'>
                                        <img style={{ position: 'relative', top: '-3px', left: '26px' }} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAAD10lEQVRoge2YS28cRRSFv2rTfasDDSEgBAojk4AUHhKGKAIikQULJFhE/ABALNmgLLJmEf4ASCyDQIEFQuKxDBECAU4Iz0VYERMTAQaUIAiJnWjSdjyHxVSbtpmnPdNjkM+meqpu3XPudHXVvQUbGC3cIJwIxkjTXSwuPopzE8BdSDfjXNYcZg44A5xE+hbpAxYWvnHQWCv3mgKQ2e3As8AzwE19Tj+Lc4eQXnF5/sNqNawqAHk/TqNxAOeeBsZC9yngCNLnSN/h/Qxzc3MAZFnG5cs1nLsb53YDjwF3hHlXkN5gbOwFV6//vNpAehMOkcz2yeySzCSzXEnyquJ4V9++4vgBJclrMsuDr4sye04QDUM7gutldiSQSd6/Ke+3rdmv99vl/VtLfs0OCzYPQnOZZJvMvg8EZ2S2d6AEgJLkCZmdDRxT8v62wTj2flxmp4PjE/J+fCCOW3Gl6VZ5/3Xg+ilsEmtwmGU3ymw6OJwUXDMgre05IZPZscA5rSy7YbWOYpl9Gtb7l1WIL3Fn8v6rEMTHgqv6d+L9geDgV6Xp1iHo7My/adMtMpuRmZQkz/c3OY7vl9m8zBbl/Z4haeyuw/tHZLYos3klyb29TzT7JPz7Lw5RX69aXg5aPup1wt4w4XfBtUPW110PbFaS/BE0Pd59gtlkMN5Xgb6eILP9xQfd2TCOdwbDv6rcdbohbK3nZSbF8X3lseV5RxQ9FZ4OObhYlcBucM10/HUAoujJlkYCt7RtpemDFerrCUrT3WF1/KhWWbSS5J5gMNPSYMQIf/Bv4Vy4s+j/Zwk5tye0k65ZRa0rOBDOHQUgih4u+svfwE4ApC8qVdYPpOOhXao/ygEUFdLJCiX1i6nQLmWp5QCK4uR0ZXL6x3Rotxcd5QCaVVCe/1mhoP6Q5+cAkK4rusoBXB3aSxVK6hfNs6l5XQMsDyAGcLBQdChNazJ7R2azpZpVMjs6aGVKks9WcMzK7D2Z7ShsHMyHx6TUFxyYCcDluSvEI51A2tKKsLAbWACB/99E7hzOTbh6/ZdWOttfYTQaLwXxh4mimstzN2jRLfUWPFFUA95H2oLUPa0vXl3p92xIK27tZDcotPIblrBkdqGdXadLpAygeHWjgKvXZ8Jj27pkOLdgFWIjgFFjI4BRo3zjdYx1WAe0QG862+33VZ4DvfD955fQRgCjxv86gDmAlclclVCa1sLjhXY2nQL4EIBG42DJUWVQmtZoNA4u09ICbfN7me3AueProqCRHnJ5fqrVcNs34PJ8CucmcO5tYHbF8MBLSpoHVBmzwLudxG9gPeBvIoTBu0MXsfAAAAAASUVORK5CYII=" />
                                    </section>
                                    <img src="" alt="" />
                                    <h2 className='maintopic2'>Customer Care</h2>
                                    <p className='drescription2'>Always ready to help you</p>
                                </div>
                                <div>
                                    <section className='image-services'>
                                        <img style={{ position: 'relative', top: '-8px', left: '26px' }} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAAEgklEQVRoge1ZS2xUVRj+btt7vnNnBmpJiIpUFmIaFCNQNb6iC9OwQcAIUTbGhcFgNO5gqQZN2GrwGTFRSdzwaOJCEDVxY3yEaDRU40KFookRysvSB9N+Lua/t5e0nbkznd66mC+ZzMy5//n+75vzyDn/AC200EILLSwAgqyBInsgbUYQ9AG4AUA3gA4AQwBOQPoSwIFgfPyXTHzOrQKwBUHwAIBbASwBUAYwCOA0pGMIgv5gbOzX+izNljAM7xD5uUhleE2KPKIwXFOFb63IIxabhfMzhWFv4waAUOTeJKH3Z0W+K3KjyB4BRQFeUdQt8mGRb8r7IUtelvcvCWhP8bXL+5dFllN8b4jcoCjqFuAFFEX2yLlNcm6fxcQ/0GuqzIC6THSJ/MJIhuX9bgGLM/RbJO9fFDkqUnLuAwHtAtrl3H7jG5VzLwhYlIFvsZm/nIwOcE1WE2HKxCmF4dpMHdMcYbhG5Ekzsz9l4g+F4e0N8PWKHEyZqT0yNp0qJgqFZfUmTXi8XyHyVGqun1QU3dgwX6GwLGXm1erBlYU9KXK4kZGYga/XptmownBdE/jW2TSbqMqX7E7e755r0oTTuZ1ybmfT+Lx/xUbl2MwBZE+ym2RY2JkT22JvIl9nane8OW5vm4rQI/Z+OAAuNitxAEwEwEQT+S5gcrLfvm6O26eMBMFDAADp42YlnUfEGvvihrbUwxUAgCA4kaOgxhAEA/Zp+i4o8pJICSjlq6p+CCjZGrkUt6VHJF6Q5XxlNYRJe0/0p42cAwAUCktyFNQYoijWOBQ3pY2cAQBcuXJ9jpIaQ7kcazwbN6W33x8rLW135iqqEbS13QUAkH5ImpKHQfCNPbwnZ1n1Q7obABAE305/5twq2wnOCfB5a8sKAZHIC6a1Z+Yg8rgdvbfmrC8z5NzjdpSaPhpJEPmcOT2uOu7zeUFAIPJ707ijWmAk8i8blUdz1JgJcm6LmThdc/qLfNaCBwV05qSxJgR0ijxt2p7J0qFD3n9no/JeDhozQc69b5q+znwtkHO3JQUE8ul51lhbD7nDtIzIuVvq6+z9U9Z5TGRf7R7zA5HrTYPk/ZONksSFiH8VRfc2WWPt/FF0v8jhTAWHqkSVotpHiZkcR0bePyjyouU+MOfrstW5+lNzdFuTtM6e07ltIkcs50EBYXOIK5XCfaka1dt1ly+z5vF+T1Kmde7DpucREFg5dMLMfCKgq4n8XSKPGveElVXn73RhBevzlvA3RdGcT8uKovtE/p4cWskNzdBaOzG5UuRPmqq872lkHgvokHO7RI4b18/2v0l+sALAO8m6ce4rkTdl7k+utD7x3wZvCSjOp+ZagtaL/NMEXZZzu3T1Ffrq+Mpa255Ubci/RW7MU/OsUKm0VOSh1K52VFG0fFpcFC0X+Wkq7qBKpaULobkq5NxWkf+YyPNy7rHUs01y7kyyoL3fvpBaa0LF4nUiD6d+9b0iX099P6Ri8dqF1pkZ8v4JO9bEBkZEPr/QuhqCnFstckDkgJxbvdB65gQBnf+nm2YLeeE/FaGRSOWbljMAAAAASUVORK5CYII=" />
                                    </section>
                                    <img src="" alt="" />
                                    <h2 className='maintopic3'>Unique Bouquets</h2>
                                    <p className='drescription3'>All our bouquets are special</p>
                                </div>
                            </div>

                        </section>


                        {/* -----------------------------Contact Us------------------*/}

                        <section className='Contact-Us-Section'>

                            <div className='contect'>
                                <div className='cireles'>

                                </div>
                                <h2 style={{ textAlign: 'center' }}>Kathee</h2>
                                <h5 style={{ textAlign: 'center' }}>Cutomer</h5>
                                <p style={{ textAlign: 'center' }}>
                                    Lizards are a widespread group of squamate reptiles, <br />   with over 6,000
                                    species, ranging across all continents except Antarctica
                                </p>
                            </div>

                        </section>

                        <footer>

                            <div>

                            </div>

                        </footer>


                    </main>
                </body>
                <script></script>
            </>



        )

    }

}


export default MainPage;