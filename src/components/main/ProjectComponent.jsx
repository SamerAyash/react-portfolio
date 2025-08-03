import { FaLink,FaGithub,FaArrowRightLong } from "react-icons/fa6";
export default function ProjectComponent({title}){
    return (
        <article className="article-card">
            <img width={260} src="./images/projects/1.jpg" alt="project"/>
            <div style={{width: "260px"}} className="card-body">
                <h2 className="title">{title}</h2>
                <p className="subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
                    auctor
                    eros massa, eu egestas lorem congue a. Donec sit amet venenatis tellus.</p>
                <div className="links">
                    <div className="icons">
                        <a href="#"><FaLink/></a>
                        <a href="#"><FaGithub/></a>
                    </div>
                    <a className="more-link" href="#">
                        <div>more</div>
                        < FaArrowRightLong/></a>
                </div>
            </div>
        </article>
    )
}