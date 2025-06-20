import React from 'react';
import location from '../../../assets/location-merchant.png'

const BeMerchant = () => {
    return (
        <div data-aos="zoom-in-up" className="bg-[url('assets/be-a-merchant-bg.png')] bg-no-repeat bg-[#03373D] rounded-4xl p-4 md:p-6 lg:p-20 mb-10">
            <div className="hero-content flex-col md:flex-row-reverse">
                <img
                    src={location}
                    className=" rounded-lg w-full md:w-1/2 lg:w-full lg:scale-110"
                />
                <div>
                    <h1 className="text-2xl lg:text-3xl font-bold">Merchant and Customer Satisfaction is Our First Priority</h1>
                    <p className= "text-xs md:text-sm lg:text-base py-6">
                        We offer the lowest delivery charge with the highest value along with 100% safety of your product. Pathao courier delivers your parcels in every corner of Bangladesh right on time.
                    </p>
                   <div className='flex flex-col gap-3 md:flex-row'>
                     <button className="btn btn-primary text-black rounded-full">Become A Merchant</button>
                    <button className="btn btn-primary text-primary btn-outline  rounded-full">Become A Merchant</button>
                   </div>
                </div>
            </div>
        </div>
    );
};

export default BeMerchant;