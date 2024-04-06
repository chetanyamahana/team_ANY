import React, { useState, useEffect } from 'react';
import Lottie from 'lottie-react';
import LocationAnimation from '../components/Authentication/assets/location-animation.json'; // Adjust the path to your animation JSON file if needed
import Header from './heady';
import bgimage from '../components/Authentication/images/userlgbg.png';
import { useNavigate } from "react-router-dom";
import user1 from '../components/Authentication/images/user-1.jpg';
import user2 from '../components/Authentication/images/user-2.png';
import user3 from './../components/Authentication/images/user-3.png';
import user4 from '../components/Authentication/images/user-4.jpg';
const UserHomePage = () => {
    const [displayAnimation, setDisplayAnimation] = useState(true);
    const [lat, setlat] = useState("");
    const [lon, setlon] = useState("");
    const navigate = useNavigate();


    useEffect(() => {
        const timer = setTimeout(() => {
            setDisplayAnimation(false);
        }, 3000); // Display animation for 5 seconds
        if ("geolocation" in navigator) {
            // Get the user's current location
            navigator.geolocation.getCurrentPosition(function (position) {
                // The user's latitude and longitude are in position.coords.latitude and position.coords.longitude
                let latitude = position.coords.latitude;
                let longitude = position.coords.longitude;
                latitude = (Math.round(latitude * 10000)) / 10000;
                longitude = (Math.round(longitude * 10000)) / 10000;
                setlat(latitude);
                setlon(longitude);
                // alert(`Latitude: ${latitude}, Longitude: ${longitude}`);
                console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
            }, function (error) {
                // Handle errors, if any
                switch (error.code) {
                    case error.PERMISSION_DENIED:
                        console.error("User denied the request for geolocation.");
                        break;
                    case error.POSITION_UNAVAILABLE:
                        console.error("Location information is unavailable.");
                        break;
                    case error.TIMEOUT:
                        console.error("The request to get user location timed out.");
                        break;
                    case error.UNKNOWN_ERROR:
                        console.error("An unknown error occurred.");
                        break;
                }
            });
        } else {
            console.error("Geolocation is not available in this browser.");
        }
        return () => clearTimeout(timer);
    }, []);



    return (
        <div className>
            {displayAnimation && (
                <div className="w-full h-full flex  flex-col justify-center items-center relative ">
                    <Lottie animationData={LocationAnimation} className="w-1/2 h-1/3" />
                    <div className='absolute bottom-20'>
                        <h1 className='font-monteserrat text-2xl'>Loading ....</h1>
                    </div>
                </div>
            )}
            {!displayAnimation && (
                <>
                    <div >
                        <Header />
                    </div>
                    <div class="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                        <div class="h-96 w-full">
                            <img class="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src={bgimage} alt="" />
                        </div>
                        <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/10 group-hover:via-black/10 group-hover:to-black/10"></div>
                        <div class="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                            <h1 class="font-dmserif text-3xl font-bold text-white"></h1>
                            <p class=" font-monteserrat mb-3 text-3xl font-bold italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">Revolutionizing Auto Repair: Anytime, Anywhere, Your Way!</p>

                        </div>
                    </div>
                    <>{lat ? <><div class="font-bond text-xl flex justify-center">Your Latitude is {lat} and Longitude is {lon}</div></> : <></>}
                    </>
                    <div class="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 mb-16 relative h-auto">
                        <div class="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 border-2 mb-11">
                            <div class="h-96 w-72">
                                <img class="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125 mx-28" src={user1} alt="" />
                            </div>
                            <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white group-hover:from-black/10 group-hover:via-black/10 group-hover:to-black/10"></div>
                            <div class="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                                <h1 class="font-dmserif text-3xl font-bold text-black">Anubhav</h1>
                                <p class="mb-3 text-lg italic text-black opacity-0 transition-opacity duration-300 group-hover:opacity-100">Mobile : 8264806993 <br /> Location : Nayagaon, Punjab</p>
                                <button onClick={() => {
                                    navigate("/chats");
                                }} class="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">Chat Now !</button>
                            </div>
                        </div>
                        <div class="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 border-2 mb-11">
                            <div class="h-96 w-72">
                                <img class="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125 mx-28" src={user2} alt="" />
                            </div>
                            <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white group-hover:from-black/10 group-hover:via-black/10 group-hover:to-black/10"></div>
                            <div class="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                                <h1 class="font-dmserif text-3xl font-bold text-black">Ramesh Yadav</h1>
                                <p class="mb-3 text-lg italic text-black opacity-0 transition-opacity duration-300 group-hover:opacity-100">Mobile : 826XXXXXX3 <br /> Location : Sector 42, chandigarh</p>
                                <button onClick={() => {
                                    navigate("/chats");
                                }} class="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">Chat Now !</button>
                            </div>
                        </div>
                        <div class="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 border-2 mb-11 ">
                            <div class="h-96 w-72">
                                <img class="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125 mx-28" src={user3} alt="" />
                            </div>
                            <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white group-hover:from-black/10 group-hover:via-black/10 group-hover:to-black/10"></div>
                            <div class="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                                <h1 class="font-dmserif text-3xl font-bold text-black">Chintu Kumar</h1>
                                <p class="mb-3 text-lg italic text-black opacity-0 transition-opacity duration-300 group-hover:opacity-100">Mobile : 9815222042 <br /> Location : Sector 2, Panchkula</p>
                                <button onClick={() => {
                                    navigate("/chats");
                                }} class="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">Chat Now !</button>
                            </div>
                        </div>
                        <footer class="bg-[#0C1E44] w-full absolute -bottom-24">
                            <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between sm:display:none">
                                <span class="text-sm text-white sm:text-center dark:text-white ">
                                    © 2023{" "}
                                    <a href="https://flowbite.com/" class="hover:underline">
                                        MechConnect™
                                    </a>
                                    . All Rights Reserved.
                                </span>
                                <ul class="flex flex-wrap items-center mt-3 text-s font-medium text-white dark:text-white sm:mt-0">
                                    <li>
                                        <a href="#" class="hover:underline me-4 md:me-6">
                                            About
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" class="hover:underline me-4 md:me-6">
                                            Privacy Policy
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" class="hover:underline me-4 md:me-6">
                                            Licensing
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" class="hover:underline">
                                            Contact
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </footer>
                    </div>




                </>


            )}

        </div>

    );
};

export default UserHomePage;
