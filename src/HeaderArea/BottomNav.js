import React from "react";
import {MdHome, MdVideoLibrary} from 'react-icons/md';
import {BsFillCollectionPlayFill} from 'react-icons/bs';
import { AiOutlinePlusCircle } from "react-icons/ai";

function BottomNav() {
    return (
        <div className="d-flex d-lg-none d-md-none justify-content-between fixed-bottom" style={{backgroundColor:"black"}}>
                <a className="btn btn-default text-center" href="/"><MdHome color="lightblue" fontSize="1.5rem" /><br/><span style={{ fontSize:"0.8rem", color:"lightblue" }}>Home</span></a>
                <a className="btn btn-default text-center" href="/"><MdHome color="white" fontSize="1.5rem" /><br/><span style={{ fontSize:"0.8rem",color:"white" }}>Shorts</span></a>
                <a className="btn btn-default text-center mt-2" href="/"><AiOutlinePlusCircle color="white" fontSize="2rem" /><br/></a>
                <a className="btn btn-default text-center" href="/"><BsFillCollectionPlayFill color="white" fontSize="1.5rem" /><br/><span style={{ fontSize:"0.8rem",color:"white" }}>Subscriptions</span></a>
                <a className="btn btn-default text-center" href="/"><MdVideoLibrary color="white" fontSize="1.5rem" /> <br/><span style={{ fontSize:"0.8rem",color:"white" }}>Library</span></a>
        </div>
    );

}

export default BottomNav;


