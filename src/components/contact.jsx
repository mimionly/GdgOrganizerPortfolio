import React, { useState } from 'react';
import { 
    Github,
    Instagram,
    Linkedin, 
    Twitter ,
    Send,
    Mail,
    MapPin,
    Phone
} from "lucide-react";
import contact from '../assets/contact.png';

export const Contact = () => {
     const copyright = `© ${new Date().getFullYear()} GDG SJEC. All rights reserved.`;
    // State to handle submission status 
    const [status, setStatus] = useState('idle'); // 'idle', 'sending', 'sent'

    const handleSubmit = (e) => {
        e.preventDefault();

        // Gather data from the form using event target
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData);

        console.log('Form Data Captured:', data);

        // Simulate sending state 
        setStatus('sending'); 
        
        // Simulate API call delay 
        setTimeout(() => {
            alert(`Thanks ${data.name}! We have Received Your Message.`);
            e.target.reset(); // Clear Form 
            setStatus('sent');

            // Reset Button after 2 seconds 
            setTimeout(() => setStatus('idle'), 2000);
        }, 1000);
    };

    return ( 
        <div className='min-h-screen flex items-center justify-center p-4 md:p-8'>
            <div className='w-full grid grid-cols-1 md:grid-cols-2 gap-4 justify-center items-center'>
                
                {/* Left column: Image only */}  
                    <img
                        src={contact} 
                        alt="Contact" 
                        className='w-full h-auto object-cover shadow-sm'
                    />
               

                {/* Right Column: Heading + Contact Form Box */}
                <div className='w-full'>
                    {/* Heading now stays above the form box */}
                    <h2  className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    {" "} 
                 Contact 
            <span className="text-primary "> Info</span>
            </h2>
                    <div className='border-2 border-gray-400 p-6 md:p-10 grid grid-cols-1 lg:grid-cols-2 gap-10'>
                        
                        {/* Form Section */}
                        <form onSubmit={handleSubmit} className='space-y-8'>
                            <div>
                                <label htmlFor="name" className='block text-sm font-medium text-primary mb-1'>Full Name</label>
                                <input 
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    className='w-full bg-transparent border-b-2  py-2 text-base outline-none placeholder-amber-50 focus:border-gray-500 transition-colors'
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className='block text-sm font-medium text-primary mb-1'>E-mail</label>
                                <input 
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    className='w-full bg-transparent border-b-2  py-2 text-base outline-none placeholder-amber-50 focus:border-gray-500 transition-colors'
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className='block text-sm font-medium text-primary  mb-1'>Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows='1' 
                                    required
                                    className='w-full bg-transparent border-b-2  dark:border-white py-2 text-base outline-none resize-none placeholder-amber-50 focus:border-gray-500 transition-colors'
                                />
                            </div>

                            <button
                                type='submit'
                                disabled={status === 'sending'}
                                className={`place-items-center items-center  gap-8 px-24 py-2 rounded-3xl text-sm font-small font-extralight transition-all duration-300 mt-4 
                                    ${status === 'sent' ? 'bg-gray-700 text-white' : 'bg-primary text-white hover:opacity-80'}
                                    ${status === 'sending' ? 'opacity-50 cursor-not-allowed' : ''}`}
                            >
                                <Send className='w-4 h-4'/>
                                {status === 'idle' && 'Send Message'}
                                {status === 'sending' && "Sending ..."}
                                {status === 'sent' && 'Sent!'} 
                                
                            </button>
                        </form>

                        {/* Info Section */}
                        <div className='flex flex-col space-y-6 '>
                            <div className='flex items-start gap-4'>
                                    <Mail className='text-xl w-5 h-5 mt-1  mb-1 text-primary' />
                                    <p className='text-gray-600 text-sm'>ashleypinto@gmail.com </p>
                                    </div>
                                     <div className='flex items-start gap-4'>
                                     <MapPin className='text-xl w-5 h-5 mt-1  mb-1 text-primary' />
                                    <p className='text-gray-600 text-sm'>Bejai , Mangalore</p>
                                    </div>
                                     <div className='flex items-start gap-4'>
                                     <Phone className='text-xl w-5 h-5 mt-1  mb-1 text-primary' />
                                    <p className='text-gray-600 text-sm'>+91 9731081607 </p>
                                </div>
                            </div>

                            {/* Social Icons */}
                            <div className='flex justify-center items-center  space-x-6 text-lg text-primary'>
                                <a href="https://www.linkedin.com/in/ashley-rose-2003" target="_blank" rel="noopener noreferrer">
                                    <Linkedin className="h-5 w-5 dark: opacity-70" />
                                </a>
                                <a href="https://www.instagram.com/ashley_rose_2003" target="_blank" rel="noopener noreferrer"> 
                                    <Instagram className="h-5 w-5 opacity-70 " />
                                </a>
                                <a href="https://github.com/ashley_rose_2003" target="_blank" rel="noopener noreferrer"> 
                                    <Github className="h-5 w-5 opacity-70 " />
                                </a>
                                <a href="https://twitter.com/ashley_rose_2003" target="_blank" rel="noopener noreferrer"> 
                                    <Twitter className="h-5 w-5 opacity-70 " />
                                </a>
                            </div>
                  
                        </div>
                        
                    </div>
                    <footer className='w-screen'>
                    <div className=" flex justify-center px-4 ">
                 <p className="text-sm  opacity-60 text-center" >{copyright}</p>
                </div>
            </footer>
        </div>
    </div>   
  );
};