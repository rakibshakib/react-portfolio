import React from 'react'
import Particles from 'react-particles-js';


import './Home.css'
const Home = () => {
    return (
        <>
            <div className="home-area">

                <div className="home-particle">
                    <Particles
                        params={{
                            particles: {
                                "number": {
                                    "value": 150,
                                    "density": {
                                        "enable": true,
                                        "value_area": 800
                                    }
                                },
                                "color": {
                                    "value": "#ffffff"
                                },
                                "shape": {
                                    "type": "circle",
                                    "stroke": {
                                        "width": 0,
                                        "color": "#000000"
                                    },
                                    "polygon": {
                                        "nb_sides": 5
                                    },
                                    "image": {
                                        "src": "img/github.svg",
                                        "width": 100,
                                        "height": 100
                                    }
                                },
                                "opacity": {
                                    "value": 0.15,
                                    "random": false,
                                    "anim": {
                                        "enable": false,
                                        "speed": 1,
                                        "opacity_min": 0.1,
                                        "sync": false
                                    }
                                },
                                "size": {
                                    "value": 9,
                                    "random": true,
                                    "anim": {
                                        "enable": false,
                                        "speed": 80,
                                        "size_min": 0.1,
                                        "sync": false
                                    }
                                },
                                "line_linked": {
                                    "enable": false,
                                    "distance": 300,
                                    "color": "#ffffff",
                                    "opacity": 0.4,
                                    "width": 2
                                },
                                "move": {
                                    "enable": true,
                                    "speed": 2,
                                    "direction": "top",
                                    "random": false,
                                    "straight": false,
                                    "out_mode": "out",
                                    "bounce": false,
                                    "attract": {
                                        "enable": false,
                                        "rotateX": 600,
                                        "rotateY": 1200
                                    }
                                }
                            },
                            "interactivity": {
                                "detect_on": "canvas",
                                "events": {
                                    "onhover": {
                                        "enable": false,
                                        "mode": "repulse"
                                    },
                                    "onclick": {
                                        "enable": true,
                                        "mode": "push"
                                    },
                                    "resize": true
                                },
                                "modes": {
                                    "grab": {
                                        "distance": 800,
                                        "line_linked": {
                                            "opacity": 1
                                        }
                                    },
                                    "bubble": {
                                        "distance": 800,
                                        "size": 80,
                                        "duration": 2,
                                        "opacity": 0.8,
                                        "speed": 3
                                    },
                                    "repulse": {
                                        "distance": 400,
                                        "duration": 0.4
                                    },
                                    "push": {
                                        "particles_nb": 4
                                    },
                                    "remove": {
                                        "particles_nb": 2
                                    }
                                }
                            },
                            "retina_detect": true
                        }}
                        style={{
                            width: '100%',
                            height: '100%'
                        }}
                    />
                </div>
                <div className="container-fluid">
                    <div className="row justify-content-center">
                        <div className="col-lg-12 col-12">
                            <div className="home-content">
                                <h1>Hi, I am <span className="name-style">Sujon Hossain</span> </h1>
                                <p>I am a frontend web developer. I can provide clean code and pixel perfect design. I also make website more & more interactive with web animations.</p>
                                <div className="icons">
                                  <ul>
                                      <li><a className="facebook" href=""><i className="fab fa-facebook-f"></i></a></li>
                                      <li><a className="github" href=""><i className="fab fa-github"></i></a></li>
                                      <li><a className="linked-in" href=""><i className="fab fa-linkedin-in"></i></a></li>
                                     
                                  </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>


    );
};



export default Home;