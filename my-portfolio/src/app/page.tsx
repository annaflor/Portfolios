import { Experience } from './components/header/experience/experience';
import { Header } from './components/header/header'
import { Info } from './components/header/information/information'
import { EmailIcon } from './icons/email-icon';
import { SocialBtns } from './social-btns/social-btns';
import "./styles/home.scss"

export default function Home() {
  return (
    <main className='container'> 
        <Header />
       <Experience />
        <Info />
        <div className="buttons">
        <SocialBtns />
          <a className='primary-btn' href='mailto:anacarolineav777@gmail.com'>
            Contact me
            <EmailIcon />
             </a>
          </div>
       
        </main>
);
}
