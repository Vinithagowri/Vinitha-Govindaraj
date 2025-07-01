import HeroImg from '../assets/hero.png';
import { FaTelegramPlane } from "react-icons/fa"; 
import { AiOutlineGithub, AiOutlineLinkedin } from "react-icons/ai";

export default function Hero() {
    const config  = {
        subtitle: 'I\'m a Full-stack developer',
        social: {
            telegram: 'https://t.me/viveek01',
            GitHub : 'https://github.com/Vinithagowri/',
            linkedin: 'https://www.linkedin.com/in/vinitha-g-684a95265'
        }
    }

    return (
        <section className='flex flex-col md:flex-row px-5 py-32 bg-primary justify-center'>
            <div className='md:w-1/2 flex flex-col'>
                <h1 className='text-white text-6xl font-hero-font'>
                    Hi, <br /> I'm <span className='text-black'>Vinitha</span>
                    <p className='text-2xl'>{config.subtitle}</p>
                </h1>
                <div className='flex py-10'>
                    <a href={config.social.telegram} className='pr-5 hover:text-white'><FaTelegramPlane size={40} /></a>
                    <a href={config.social.GitHub} className='pr-5 hover:text-white'><AiOutlineGithub size={40} /></a>
                    <a href={config.social.linkedin} className='hover:text-white'><AiOutlineLinkedin size={40} /></a>
                </div>
            </div>
            <img className='md:w-1/3' src={HeroImg} alt="Hero-img" />
        </section>
    );
}
