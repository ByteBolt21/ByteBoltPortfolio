import React from 'react';

const Testimonial = () => {
    return (
        <div className="p-6 rounded shadow-md dark:bg-gray-900 
        
        border-2 border-customSlate  
        w-96 h-64">
            <p className="text-white dark:text-gray-200">
                An audire commodo habemus cum. Ne sed corrumpit repudiandae. Tota aliquip democritum pro in, nec democritum intellegam ne.
                Propriae volutpat dissentiet nehendunt.
            </p>
            <div className="flex items-center justify-center mt-4 space-x-4">
                <img
                    src="https://source.unsplash.com/50x50/?portrait?1"
                    alt="testimonial"
                    className="w-12 h-12 bg-center bg-cover rounded-full"
                />
                <div className='text-start'>
                    <p className="text-lg font-semibold text-customhoverPink ">Leroy Jenkins</p>
                    <p className="text-sm text-white">CTO of Company Co.</p>
                </div>
            </div>
        </div>
    );
}

export default Testimonial;
