import React from 'react';

const FindDonar = () => {
    return (
        <div>
            <div className="container mx-auto py-14">
                <div className="grid grid-cols-6">
                    <div className="col-start-2 col-span-4">
                        <div className="donar-search-box">
                            <input className='border-2 border-red-300 rounded-full focus:outline-none w-3/4 h-12 pl-5' type="text" placeholder='Search donar' />
                            <button><i class="fas fa-search"></i> Search</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FindDonar;