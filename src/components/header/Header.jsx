import {useContext, useState} from 'react'
import './header.css'
import { MdClose,MdMenu } from "react-icons/md"
import { AiOutlineMoon } from "react-icons/ai";
import { LuSunMedium } from "react-icons/lu";
import { ThemeContext } from '../../context/ThemeContext';

const links_array= [
    {"name": "About","route": "#"},
    {"name": "Articles","route": "#"},
    {"name": "Project","route": "#"},
    {"name": "Speaking","route": "#"},
    {"name": "Contact","route": "#"},
];
export default function Header() {
    const { theme, toggleTheme } = useContext(ThemeContext);
    const[showModal, setShowModal]= useState(false)
  return (
    <header>
        <button className='menu' onClick={()=>{setShowModal(true)}}>
            <MdMenu size={20}/>
        </button>
      <div/>
      <nav>
        <ul>
            {links_array.map((e,index)=> {return (<li key={index}><a href={e.route}>{e.name}</a></li>)})}
        </ul>
      </nav>
      <button className="modeIcon" onClick={toggleTheme}>
          {theme == "light"? <LuSunMedium/> : <AiOutlineMoon/>}
      </button>

        {
            showModal &&
            (
                <div className="popup">

                    <ul className="modal">
                        <li onClick={()=>{setShowModal(false)}} className="closeModal">
                            <button className="closeIcon">
                                <MdClose/>
                            </button>
                        </li>
                        {links_array.map((e,index)=> {return (<li key={index}><a href={e.route}>{e.name}</a></li>)})}
                    </ul>
                </div>
            )
        }
    </header>
  )
}
