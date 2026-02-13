export const Footer = () => {
    const copyright = `© ${new Date().getFullYear()} GDG SJEC. All rights reserved.`;
    return (
<footer className='mt-8 w-full bg-red-600'>
    <p className="text-sm text-gray-900 dark:text-white text-center">{copyright}</p>
</footer>
    );
};