import React, { useState } from 'react';
import { 
    Github,
    Instagram,
    Linkedin, 
    Twitter,
    Send,
    Mail,
    MapPin,
    Phone
} from "lucide-react";
import contact from '../assets/contact.png';

export const Contacts = () => {
    
    const [status, setStatus] = useState('idle');

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData);
        
        setStatus('sending'); 
        
        setTimeout(() => {
            alert(`Thanks ${data.name}! We have Received Your Message.`);
            e.target.reset();
            setStatus('sent');
            setTimeout(() => setStatus('idle'), 2000);
        }, 1000);
    };

    return ( 
    <div id="contact" className='py-16 '>
        <div className='animate-fade-in-delay-1 w-full max-w-6xl mx-auto px-4 md:px-8'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8 items-start mb-12'>
                
                {/* Left column: Image */}  
                <div className='block'>
                    <img
                        src={contact} 
                        alt="Contact" 
                        className='w-full h-auto object-cover opacity-50'
                    />
                </div>

                {/* Right Column: Heading + Contact Form */}
                <div className='relative w-full'>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">
                        Contact 
                        <span className="text-primary"> Info</span>
                    </h2>
                    
                    <div className='border-2 border-primary/50 rounded-xl p-6 md:p-8'>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                            
                            {/* Form Section */}
                            <form onSubmit={handleSubmit} className='space-y-6'>
                                <div>
                                    <label htmlFor="name" className='block text-sm font-medium mb-2'>
                                        Full Name
                                    </label>
                                    <input 
                                        type="text"
                                        id="name"
                                        name="name"
                                        required
                                        placeholder="Enter your name"
                                        className='w-full dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md px-4 py-3 text-base text-gray-900 dark:text-white outline-none placeholder-gray-400 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all'
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2'>
                                        E-mail
                                    </label>
                                    <input 
                                        type="email"
                                        id="email"
                                        name="email"
                                        required
                                        placeholder="Enter your email"
                                        className='w-full dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md px-4 py-3 text-base text-gray-900 dark:text-white outline-none placeholder-gray-400 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all'
                                    />
                                </div>

                                <div>
                                    <label htmlFor="message" className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2'>
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows='4'
                                        required
                                        placeholder="Type your message..."
                                        className='w-full dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md px-4 py-3 text-base text-gray-900 dark:text-white outline-none resize-none placeholder-gray-400 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all'
                                    />
                                </div>

                                <button
                                    type='submit'
                                    disabled={status === 'sending'}
                                    className={`flex items-center justify-center gap-2 w-full px-6 py-3 rounded-lg text-sm font-semibold transition-all duration-300
                                        ${status === 'sent' ? 'bg-green-600 text-white' : 'bg-primary text-white hover:bg-primary/90'}
                                        ${status === 'sending' ? 'opacity-70 cursor-not-allowed' : ''}`}
                                >
                                    <Send className='w-4 h-4'/>
                                    {status === 'idle' && 'Send Message'}
                                    {status === 'sending' && "Sending..."}
                                    {status === 'sent' && 'Sent!'} 
                                </button>
                            </form>

                            {/* Info Section */}
                            <div className='flex flex-col justify-between'>
                                <div className='space-y-4'>
                                    <div className='flex items-start gap-3'>
                                        <Mail className='w-5 h-5 mt-0.5 text-primary shrink-0' />
                                        <p className='text-sm'>ashleypinto@gmail.com</p>
                                    </div>
                                    
                                    <div className='flex items-start gap-3'>
                                        <MapPin className='w-5 h-5 mt-0.5 text-primary shrink-0' />
                                        <p className='text-sm'>Bejai, Mangalore</p>
                                    </div>
                                    
                                    <div className='flex items-start gap-3'>
                                        <Phone className='w-5 h-5 mt-0.5 text-primary shrink-0' />
                                        <p className='text-sm'>+91 9731081607</p>
                                    </div>
                                </div>

                                {/* Social Icons */}
                                <div className='flex gap-4 mt-6 lg:mt-0 justify-end'>
                                    <a href="https://www.linkedin.com/in/ashley-rose-2003" target="_blank" rel="noopener noreferrer" className='text-primary/50'>
                                        <Linkedin className="h-5 w-5" />
                                    </a>
                                    <a href="https://www.instagram.com/ashley_rose_2003" target="_blank" rel="noopener noreferrer" className='text-primary/50'> 
                                        <Instagram className="h-5 w-5" />
                                    </a>
                                    <a href="https://github.com/ashley_rose_2003" target="_blank" rel="noopener noreferrer" className='text-primary/50'> 
                                        <Github className="h-5 w-5" />
                                    </a>
                                    <a href="https://twitter.com/ashley_rose_2003" target="_blank" rel="noopener noreferrer" className='text-primary/50'> 
                                        <Twitter className="h-5 w-5" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            
          
        </div>  {/* Closes max-w-6xl wrapper */}
    </div> 
    );
};