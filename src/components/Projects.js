import websiteImg1 from '../assets/home.jpg';
import websiteImg2 from '../assets/kani-tamil-mandram.jpg';
import websiteImg3 from '../assets/landing page.jpg';

export default function Projects() {

    const config = {
        projects : [
            {
                image: websiteImg1,
                description: 'A cloud based  Doctor appointment booking website ',
                link: 'https://github.com/smartinternz02/SBSPS-Challenge-10311-HealthConnect-Streamlined-Doctors-Appointment-and-Health-Record-Management/tree/main'
            },
            {
                image: websiteImg2,
                description: 'Official website for our college Tamil club', 
                link: 'https://vinithagowri.github.io/kanitamilmandram/'
            },
            {
                image: websiteImg3,
                description: 'A responsive landing page for a hotal built with bootstrap',
                link: 'https://vinithagowri.github.io/Landing-page_Bezz/'
            }
        ]
    }

    return <section id='projects' className="flex  flex-col py-20 px-5 justify-center bg-primary text-white">
        <div className="w-full">
            <div className="flex flex-col px-10 py-5">
                <h1 className="text-4xl border-b-4 border-secondary mb-5 w-[150px] font-bold">Projects</h1>
                <p>These are some of my best projects. I have built these with React, MERN and vanilla CSS. Check them out.</p>
            </div>
        </div>
        <div className="w-full">
            <div className='flex flex-col md:flex-row px-10 gap-5'>
                {config.projects.map((project) => (
                     <div className='relative'>
                        <img className='h-[200px] w-[500px]' src={project.image} alt='project'/>
                        <div className='project-desc'>
                            <p className='text-center px-5 py-5'>{project.description}</p>
                            <div className='flex justify-center'>
                                <a className='btn' target='_blank' rel='noreferrer' href={project.link}>View Project</a>
                            </div>
                        </div>
                    </div>
                ))}
               
               
            </div>
        </div>
    </section>
}