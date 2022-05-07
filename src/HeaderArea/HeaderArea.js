import React from "react";
import "./HeaderArea.css";
import {FaYoutube} from 'react-icons/fa';
import {MdSearch, MdVideoCall, MdViewComfy} from 'react-icons/md';
import {AiTwotoneBell} from 'react-icons/ai';
import { HiMicrophone } from "react-icons/hi";

function HeaderArea() {
    return (
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark" style={{backgroundColor:"black"}}>
        <button type="button" className="btn btn-default text-dark d-none d-lg-block d-md-block" id="sidebarToggle" onClick={handleSubmit}>
        <span className="navbar-toggler-icon"></span>
        </button>
        <a className="navbar-brand ml-2" href="/">
            <FaYoutube color="lightblue" fontSize="2rem" />
            <span>MeTube</span><sup>IN</sup>
        </a>
        <div className="d-flex justify-content-between d-lg-none d-md-none d-sm-block">
          <a className="nav-link text-dark" href="/"><AiTwotoneBell fontSize="2rem" color="white" /></a>
          <a className="nav-link text-dark" href="/"><MdSearch fontSize="2rem" color="white" /></a>
          <a className="nav-link text-dark" href="/"><img src="/my-tube-app/images/ankit.png" color="white" alt="DP" /></a>
        </div>
      
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <form className="form-inline my-2 my-lg-0">
                <div className="input-group">
                    <input type="text" className="form-control bg-transparent px-5" aria-label="Search" placeholder="Search" />
                    <div className="input-group-append">
                        <button type="button" className="input-group-text bg-transparent px-4">
                            <MdSearch fontSize="1.5rem" />
                        </button>
                    </div>
                </div>
                <button type="button" className="btn btn-search ml-3 border text-white">
                    <HiMicrophone fontSize="1.3rem" />
                </button>
            </form>
          </ul>
        </div>
        <div className="collapse navbar-collapse" id="navbarSupportedContent2">
          <ul className="navbar-nav ml-auto ">
            <li className="nav-item">
                <a className="nav-link text-white" href="/"><MdVideoCall fontSize="2rem" /></a>
            </li>
            <li className="nav-item">
                <a className="nav-link text-white" href="/"><MdViewComfy fontSize="2rem" /></a>
            </li>
            <li className="nav-item">
                <a className="nav-link text-white" href="/"><AiTwotoneBell fontSize="2rem" /></a>
            </li>
            <li className="nav-item">
                <a className="nav-link text-white" href="/"><img src="/my-tube-app/images/ankit.png" alt="DP" /></a>
            </li>
          </ul>
        </div>
      </nav>
    );

    function handleSubmit(e) {
        e.preventDefault();
        document.body.classList.toggle('sb-sidenav-toggled');
        localStorage.setItem('sb|sidebar-toggle', document.body.classList.contains('sb-sidenav-toggled'));
      }
}

export default HeaderArea;


