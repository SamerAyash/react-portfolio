import "./hero.css"
import { MdVerified } from "react-icons/md";
import { FaSquareXTwitter,FaInstagram,FaGithub,FaLinkedin } from "react-icons/fa6";
import { motion } from "motion/react"

export default function Hero() {
  return (
    <section className="hero">
      <div className="left-section">
        <div className="parent-avatar">
          <motion.img 
          initial={{transform: "scale(0)"}}
          animate={{transform: "scale(1)"}}
          transition={{damping:6,type:"spring",stiffness:100}}
          src="./profile.png" alt="avatar" className="avatar"/>
          <div className="verifiedIcon"><MdVerified/></div>
        </div>
          <motion.h1 
          initial={{opacity:0}}
          animate={{opacity: 1}}
          transition={{ duration: 2, delay: 0.2 }}
          className="title">Software Engineering, Full Stack Developer</motion.h1>
          <p className="subtitle">I'm Samer Ayash, a Computer Engineering and Web Developer</p>
          <div className="icons-section">
              <div className="icon"><FaSquareXTwitter/></div>
              <div className="icon"><FaInstagram/></div>
              <div className="icon"><FaGithub/></div>
              <div className="icon"><FaLinkedin/></div>
          </div>
      </div>
      <div className="right-section animation"></div>
    </section>
  )
}
