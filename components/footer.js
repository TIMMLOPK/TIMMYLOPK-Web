

const Footer = () => {
   const year = new Date().getFullYear();
    return (
        <div className='flex justify-center items-center'>
            <span>All rights reserved {year}</span>
        </div>
    )
}

export default Footer