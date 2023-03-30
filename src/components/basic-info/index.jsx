import './style.scss';
import Avatar from './../avatar/index';
import ContentContainer from '../content-container';

const Mail =(
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
    </svg>
)
const Phone = (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
    </svg>
)
const Age = (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
)
const Linkedin = (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
)
function BasicInfo() {
    
    return (
        <>
            <div data-aos="fade-up" className="content-container">
                <div className='basic-info'>
                    <Avatar/>
                    <div className='name-container'>
                        <h1 className='my-name'>Nguyen Hoang Hung</h1>
                        <p className='job-title font-bold'>Frontend Developer</p>
                        <div className='text-center lg:text-left mt-3'>
                            <a
                                className='rounded-2xl bg-green-500 text-white py-1 px-4 mt-3 w-fit font-bold'
                                href='https://www.topcv.vn/xem-cv/AQgBCARfUgUKVgFSBlVVBlFTDQBTUgsMBQFTDQ9928'
                                target='_blank'
                                rel="noreferrer"
                            >
                                View my Topcv
                            </a>
                        </div>
                    </div>
                    <div className='info-container'>
                            <p className='info-item'>
                                <span className='mr-1'>{Age}</span>
                                <span>Age: 23</span>
                            </p>
                            <a href="mailto:hoanghung241120@gmail.com" className='info-item'>
                                <span className='mr-1'>{Mail}</span>
                                <span>hoanghung241120@gmail.com</span>
                            </a>
                            <a href="tel:0985175360" className='info-item'>
                                <span className='mr-1'>{Phone}</span>
                                <span>0985175360</span>
                            </a>
                            <a 
                                href='https://www.linkedin.com/in/hung-hoang-604073242/' 
                                className='info-item'
                                target="_blank"
                                rel='noreferrer'
                            >
                                <span className='mr-1'>{Linkedin}</span>
                                <span>linkedin.com/in/hung-hoang-604073242</span>
                            </a>
                    </div>
                </div>
                <div className='body-container'>
                    <ContentContainer/>
                </div>

            </div>
        </>
    );
}

export default BasicInfo;