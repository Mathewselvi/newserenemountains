import React from 'react';
import { HiLocationMarker, HiPhone, HiMail } from 'react-icons/hi';
import { BiTimeFive } from 'react-icons/bi';

const Contact = () => {
    return (
        <div className="min-h-screen bg-slate-50 pt-24 pb-20">
            <div className="container max-w-7xl mx-auto px-4">

                <div className="text-center max-w-3xl mx-auto mb-16 animate-slide-up">
                    <span className="text-primary-600 font-semibold tracking-wider uppercase text-sm mb-4 block">
                        Get In Touch
                    </span>
                    <h1 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight mb-6">
                        Contact Us
                    </h1>
                    <p className="text-lg text-slate-600 leading-relaxed font-light">
                        We'd love to hear from you. Get in touch for bookings, inquiries, or special requests to make your stay perfect.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 animate-fade-in" style={{ animationDelay: '0.2s' }}>

                    {/* Contact Information Cards */}
                    <div className="lg:col-span-5 space-y-6">

                        <div className="bg-white p-8 rounded-3xl shadow-soft border border-slate-100 flex items-start gap-6 hover:shadow-premium transition-shadow duration-300 group">
                            <div className="w-14 h-14 rounded-2xl bg-primary-50 text-primary-600 flex items-center justify-center text-2xl flex-shrink-0 group-hover:bg-primary-600 group-hover:text-white transition-colors duration-300">
                                <HiLocationMarker />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2">Address</h3>
                                <p className="text-slate-600 leading-relaxed">
                                    Serene Mountains Munnar<br />
                                    Anachal, Munnar<br />
                                    Kerala 685565
                                </p>
                            </div>
                        </div>

                        <div className="bg-white p-8 rounded-3xl shadow-soft border border-slate-100 flex items-start gap-6 hover:shadow-premium transition-shadow duration-300 group">
                            <div className="w-14 h-14 rounded-2xl bg-primary-50 text-primary-600 flex items-center justify-center text-2xl flex-shrink-0 group-hover:bg-primary-600 group-hover:text-white transition-colors duration-300">
                                <HiPhone />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2">Phone</h3>
                                <p className="text-slate-600 leading-relaxed text-lg">
                                    +91 9446136155
                                </p>
                                <p className="text-sm text-slate-400 mt-1">Available 24/7 for booking inquiries</p>
                            </div>
                        </div>

                        <div className="bg-white p-8 rounded-3xl shadow-soft border border-slate-100 flex items-start gap-6 hover:shadow-premium transition-shadow duration-300 group">
                            <div className="w-14 h-14 rounded-2xl bg-primary-50 text-primary-600 flex items-center justify-center text-2xl flex-shrink-0 group-hover:bg-primary-600 group-hover:text-white transition-colors duration-300">
                                <HiMail />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2">Email</h3>
                                <p className="text-slate-600 leading-relaxed">
                                    josephvarghese1919@gmail.com
                                </p>
                            </div>
                        </div>

                        <div className="bg-white p-8 rounded-3xl shadow-soft border border-slate-100 flex items-start gap-6 hover:shadow-premium transition-shadow duration-300 group">
                            <div className="w-14 h-14 rounded-2xl bg-primary-50 text-primary-600 flex items-center justify-center text-2xl flex-shrink-0 group-hover:bg-primary-600 group-hover:text-white transition-colors duration-300">
                                <BiTimeFive />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2">Check-in / Check-out</h3>
                                <div className="grid grid-cols-2 gap-4 mt-3">
                                    <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
                                        <p className="text-xs text-slate-400 uppercase tracking-widest font-semibold mb-1">Check-in</p>
                                        <p className="text-slate-900 font-medium">1.00 PM</p>
                                    </div>
                                    <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
                                        <p className="text-xs text-slate-400 uppercase tracking-widest font-semibold mb-1">Check-out</p>
                                        <p className="text-slate-900 font-medium">11.00 AM</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* Map Container */}
                    <div className="lg:col-span-7 bg-white p-3 rounded-3xl shadow-soft border border-slate-100 h-[600px] lg:h-auto overflow-hidden">
                        <div className="w-full h-full rounded-2xl overflow-hidden bg-slate-200">
                            <iframe
                                title="Google Map Location"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9740.397539898819!2d77.02579414491245!3d10.025123010326169!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b07995921de00a5%3A0x3a2810c8c2c7f1e5!2sSerene%20Mountains%20Munnar!5e1!3m2!1sen!2sin!4v1772366121800!5m2!1sen!2sin"
                                className="w-full h-full border-0 filter grayscale-[20%] contrast-[1.1] opacity-90 hover:grayscale-0 hover:opacity-100 transition-all duration-700"
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade">
                            </iframe>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Contact;
