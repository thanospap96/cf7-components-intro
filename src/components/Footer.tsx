const Footer = () => {
    const currentYear: number = new Date().getFullYear();
    return(
        <>
            <footer className="bg-gray-700">
               <div className="text-white text-center py-4">
                   Copyright C {currentYear}, Coding Factory 7. All rights reserved.
               </div>
            </footer>
        </>
    )
}

export default Footer;