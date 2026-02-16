export const Footer = () => {
    const copyright = `© ${new Date().getFullYear()} GDG SJEC. All rights reserved.`;
    return (
        <footer className='animate-fade-in-delay-1 mt-8 w-full  py-4 relative z-50'>
            <p className="text-sm  text-center">{copyright}</p>
        </footer>
    );
 }; 