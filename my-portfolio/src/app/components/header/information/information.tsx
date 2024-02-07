import { SectionTitle } from "../sectionTitle/section-title"
import "./information.scss"

export function Info(){
    return(
        <div className="infos">
        <SectionTitle text="Languages" />
        <div className="languages-info">
          <span> En - Intermediary. </span>
          <span> PT-Br Native Speaker. </span>
        </div>
        <SectionTitle text="Education" />
          <div className="education-info">
        <span>
           Algorithms - CSS and HTML - Javascript - React.js - MYSQL and database. 
            UI/UX Design - fundamentals for interface.
             Systems analysis and development in Anhanguera College
        </span>
          </div>
    </div>
    )
}