import { GitHubIcon } from "../icons/github-icon";
import { InstaIcon } from "../icons/insta-icon";
import { LinkedinIcon } from "../icons/linkedi-icon";
import "./social-btns.scss"

export function SocialBtns() {
    return(
        <div className="social">
            <a href="https://www.instagram.com/aflorenc3/"> 
            <InstaIcon />
            </a> 
            <a href="https://www.linkedin.com/in/ana-caroline-de-andrade-vieira-a609b1286/">
                <LinkedinIcon />
                </a> 
            <a href="https://github.com/annaflor">
                <GitHubIcon />
                </a> 
        </div>
    )
}