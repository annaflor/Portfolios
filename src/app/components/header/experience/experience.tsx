import { SectionTitle } from "../sectionTitle/section-title"
import "./experience.scss"
import Image from "next/image"

export function Experience(){
    return (
        <div className="experience">
            <SectionTitle text="Experience" />
      <p> 1 year working in personal projects with:</p>
         <div className="experience-time"> 
        <div className="experience-language">
            <Image 
             src="/react.png"
            alt="React logo"
            width={40}
            height={40}
            priority
    />
    <div className="experience-unit">
        <div className="experience-measure"></div>
    </div>
    </div>
    <div className="experience-language">
     <Image
             src="/js.png"
            alt="Javascript logo"
            width={40}
            height={40}
            priority
    />
    <div className="experience-unit">
        <div className="experience-measure"></div>
    </div>
    </div>
    <div className="experience-language">
     <Image
             src="/next.png"
            alt="Next logo"
            width={40}
            height={40}
            priority
    /><div className="experience-unit">
    <div className="experience-measure"></div>
</div>
    </div>
    <div className="experience-language">
     <Image
             src="/ts.png"
            alt="Typescript logo"
            width={40}
            height={40}
            priority
    />
    <div className="experience-unit">
        <div className="experience-measure"></div>
    </div>
        </div>
        </div>
        </div> 
    )
}