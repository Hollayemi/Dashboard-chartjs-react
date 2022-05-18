import React from 'react';
import Header from './header';
import Sidebar from './sidebar';

const DashboardWrapper = ({ children }) => {
    return (
        <section>
            <div className="shadow fixed w-full top-0 left-0 z-50 bg-white shadow-md h-12 flex items-center">
                <Header />
            </div>
            <section className="mt-10">
                <div className="w-[230px] fixed left-0 pt-10 top-0 h-full shadow-md">
                    <Sidebar />
                </div>
                {children}
            </section>
        </section>
    );
};

export default DashboardWrapper;
