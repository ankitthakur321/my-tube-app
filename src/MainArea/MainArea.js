import React from "react";
import "./MainArea.css";
import {MdHome, MdVideoLibrary, MdHistory, MdWatchLater, MdPlaylistPlay, MdRssFeed} from "react-icons/md";
import {FaGripfire, FaFutbol, FaMusic, FaNewspaper} from 'react-icons/fa';
import {BsFillCollectionPlayFill} from 'react-icons/bs';
import {GiGamepad} from 'react-icons/gi';
import ReactPlayer from 'react-player';

function MainArea() {
    return (
        <div className="d-flex" id="wrapper">
            <div className="border-end" id="sidebar-wrapper">
                <div className="list-group list-group-flush">
                    <a className="list-group-item list-group-item-action list-group-item-light p-3 border-0 active" href="/"><MdHome color="lightblue" fontSize="1.5rem" /> <span style={{paddingTop:"20px",marginLeft:"10px", color:"lightblue"}}>Home</span></a>
                    <a className="list-group-item list-group-item-action list-group-item-light p-3 border-0" href="/"><FaGripfire color="white" fontSize="1.5rem" /> <span style={{paddingTop:"20px",marginLeft:"10px"}}>Trending</span></a>
                    <a className="list-group-item list-group-item-action list-group-item-light p-3 border-0" href="/"><BsFillCollectionPlayFill color="white" fontSize="1.5rem" /><span style={{paddingTop:"20px", marginLeft:"15px"}}>Subscriptions</span></a>
                    <a className="list-group-item list-group-item-action list-group-item-light p-3 border-0" href="/"><MdVideoLibrary color="white" fontSize="1.5rem" /> <span style={{paddingTop:"20px",marginLeft:"15px"}}>Video Library</span></a>
                    <a className="list-group-item list-group-item-action list-group-item-light p-3 border-0" href="/"><MdHistory color="white" fontSize="1.5rem" /> <span style={{paddingTop:"20px",marginLeft:"15px"}}>History</span></a>
                    <a className="list-group-item list-group-item-action list-group-item-light p-3 border-0" href="/"><MdWatchLater color="white" fontSize="1.5rem" /> <span style={{paddingTop:"20px",marginLeft:"15px"}}>Watch Later</span></a>
                    <a className="list-group-item list-group-item-action list-group-item-light p-3 border-0" href="/"><MdPlaylistPlay color="white" fontSize="1.5rem" /> <span style={{paddingTop:"20px",marginLeft:"15px"}}>My Playlist</span></a>
                    <a className="list-group-item list-group-item-action list-group-item-light p-3 border-0" href="/"><GiGamepad color="white" fontSize="1.5rem" /> <span style={{paddingTop:"20px",marginLeft:"15px"}}>Gaming</span></a>
                    <a className="list-group-item list-group-item-action list-group-item-light p-3 border-0" href="/"><MdRssFeed color="white" fontSize="1.5rem" /> <span style={{paddingTop:"20px",marginLeft:"15px"}}>Live</span></a>
                    <a className="list-group-item list-group-item-action list-group-item-light p-3 border-0" href="/"><FaFutbol color="white" fontSize="1.5rem" /> <span style={{paddingTop:"20px",marginLeft:"15px"}}>Sports</span></a>
                    <a className="list-group-item list-group-item-action list-group-item-light p-3 border-0" href="/"><FaMusic color="white" fontSize="1.5rem" /> <span style={{paddingTop:"20px",marginLeft:"15px"}}>Musics</span></a>
                    <a className="list-group-item list-group-item-action list-group-item-light p-3 border-0" href="/"><FaNewspaper color="white" fontSize="1.5rem" /> <span style={{paddingTop:"20px",marginLeft:"15px"}}>News</span></a>
                </div>
            </div>
            <div className="container-fluid mt-2">
                <div className="row d-flex justify-content-center">
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <div className="card border-0" style={{width: "18rem",backgroundColor:"black",color:"white" }}>
                            <ReactPlayer url="https://www.youtube.com/watch?v=hoNb6HuNmU0" height="170px" width="286px" className="card-img-top" controls />
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-2">
                                        <img src="/my-tube-app/images/tseries.jpg" alt="logo" style={{height:"35px", width:"35px", borderRadius:"50%" }} />
                                    </div>
                                    <div className="col-10">
                                    <p className="card-text">KHAIRIYAT | Chhichhore | Arijit Singh</p>
                                    <p style={{fontSize:"0.8rem"}}>T-Series</p>
                                    <p style={{fontSize:"0.8rem"}}>78,63,61,590 views • 26-Sept-2019</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <div className="card border-0" style={{width: "18rem",backgroundColor:"black",color:"white" }}>
                            <ReactPlayer url="https://www.youtube.com/watch?v=ZmcBC9-wAXM" height="170px" width="286px" className="card-img-top" controls />
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-2">
                                        <img src="/my-tube-app/images/zeemusic.jpg" alt="logo" style={{height:"35px", width:"35px", borderRadius:"50%" }} />
                                    </div>
                                    <div className="col-10">
                                    <p className="card-text">Qaafirana | Kedarnath | Arijit Singh & Nikhita</p>
                                    <p style={{fontSize:"0.8rem"}}>Zee Music Company</p>
                                    <p style={{fontSize:"0.8rem"}}>22,97,96,130 views • 02-Jan-2019</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <div className="card border-0" style={{width: "18rem",backgroundColor:"black",color:"white" }}>
                            <ReactPlayer url="https://www.youtube.com/watch?v=jWYsvvENTHw" height="170px" width="286px" className="card-img-top" controls />
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-2">
                                        <img src="/my-tube-app/images/sachet.jpg" alt="logo" style={{height:"35px", width:"35px", borderRadius:"50%" }} />
                                    </div>
                                    <div className="col-10">
                                    <p className="card-text">Maiyya Mainu - Jersey | Sachet-Parampara</p>
                                    <p style={{fontSize:"0.8rem"}}>Sachet Tandon</p>
                                    <p style={{fontSize:"0.8rem"}}>20,08,188 views • 24-Jan-2022</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <div className="card border-0" style={{width: "18rem",backgroundColor:"black",color:"white" }}>
                            <ReactPlayer url="https://www.youtube.com/watch?v=o-7b6ctrQX0" height="170px" width="286px" className="card-img-top" controls />
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-2">
                                        <img src="/my-tube-app/images/madhur.jpg" alt="logo" style={{height:"35px", width:"35px", borderRadius:"50%" }} />
                                    </div>
                                    <div className="col-10">
                                    <p className="card-text">Kali Kali Zulfon Ke - Madhur Sharma </p>
                                    <p style={{fontSize:"0.8rem"}}>Madhur Sharma </p>
                                    <p style={{fontSize:"0.8rem"}}>2,83,16,071 views • 13-Jun-2021</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <div className="card border-0" style={{width: "18rem",backgroundColor:"black",color:"white" }}>
                            <ReactPlayer url="https://www.youtube.com/watch?v=vX2cDW8LUWk" height="170px" width="286px" className="card-img-top" controls />
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-2">
                                        <img src="/my-tube-app/images/intense.jpg" alt="logo" style={{height:"35px", width:"35px", borderRadius:"50%" }} />
                                    </div>
                                    <div className="col-10">
                                    <p className="card-text">Excuses (Official Video) | AP Dhillon | Gurinder Gill </p>
                                    <p style={{fontSize:"0.8rem"}}>Intense</p>
                                    <p style={{fontSize:"0.8rem"}}>19,46,27,641 views • 24-Jul-2020</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <div className="card border-0" style={{width: "18rem",backgroundColor:"black",color:"white" }}>
                            <ReactPlayer url="https://www.youtube.com/watch?v=6piRLp7BV8o" height="170px" width="286px" className="card-img-top" controls />
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-2">
                                        <img src="/my-tube-app/images/runup.jpg" alt="logo" style={{height:"35px", width:"35px", borderRadius:"50%" }} />
                                    </div>
                                    <div className="col-10">
                                    <p className="card-text">Ma Belle - AP Dhillon | ft. Amari</p>
                                    <p style={{fontSize:"0.8rem"}}>RUN-UP RECORDS</p>
                                    <p style={{fontSize:"0.8rem"}}>4,51,62,662 views • 16-Jul-2021</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <div className="card border-0" style={{width: "18rem",backgroundColor:"black",color:"white" }}>
                            <ReactPlayer url="https://www.youtube.com/watch?v=3ONzh3tf884" height="170px" width="286px" className="card-img-top" controls />
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-2">
                                        <img src="/my-tube-app/images/runup.jpg" alt="logo" style={{height:"35px", width:"35px", borderRadius:"50%" }} />
                                    </div>
                                    <div className="col-10">
                                    <p className="card-text">DESIRES - AP DHILLON | GURINDER GILL</p>
                                    <p className="card-text">RUN-UP RECORDS</p>
                                    <p style={{fontSize:"0.8rem"}}>2,50,87,577 views • 21-Nov-2021</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <div className="card border-0" style={{width: "18rem",backgroundColor:"black",color:"white" }}>
                            <ReactPlayer url="https://www.youtube.com/watch?v=O9zBPcU5g60" height="170px" width="286px" className="card-img-top" controls />
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-2">
                                        <img src="/my-tube-app/images/zeemusic.jpg" alt="logo" style={{height:"35px", width:"35px", borderRadius:"50%" }} />
                                    </div>
                                    <div className="col-10">
                                    <p className="card-text">Akhiyaan Milavanga - Lyrical | Commando 3</p>
                                    <p style={{fontSize:"0.8rem"}}>Zee Music COmpany</p>
                                    <p style={{fontSize:"0.8rem"}}>2,70,51,142 views • 28-Nov-2019</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <hr style={{color:"black"}}/>
            </div>
        </div>
        );
}
export default MainArea;