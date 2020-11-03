import React, { useEffect } from 'react'
import Images from '../../components/images'
import Loading from '../../components/Loading'
import useFetchOneImage from '../../utils/hooks/useFetchOneImage'

export default function Editorial() {
    const [oneImage, isLoading, errors] = useFetchOneImage()
    useEffect(() => {
        console.log(oneImage)
    }, [])
    return (
        <div>
            <div className="relative text-gray-300 " style={{width: "100vw", height: "70vh"}}>
                <div className="absolute w-screen flex justify-center" style={{height: "90%"}}>
                    <div className="absolute flex center justify-center items-start h-full flex-col w-1/2">
                            <h1 className="font-extrabold text-5xl">Unsplash</h1>
                            <h1 className="text-xl">The internet’s source of freely-usable images.</h1>
                            <h1> Powered by creators everywhere.</h1>
                            <div className="mt-1 w-full relative shadow-sm">
                                <div className="absolute inset-y-0 left-0 pl-3 pt-1 flex items-center pointer-events-none">
                                    <span class="text-gray-500 sm:text-sm sm:leading-5">
                                        <i className="fas fa-search"></i>
                                    </span>
                                </div>
                                <div className="absolute inset-y-0 right-0 pr-4 pt-1 flex items-center pointer-events-none">
                                    <span class="text-gray-500 sm:text-sm sm:leading-5">
                                        <button ><i className="fas fa-times"></i></button>
                                    </span>
                                </div>
                                <input type="text" className="w-full py-2 px-10 border rounded-sm shadow focus:outline-none h-12" placeholder="Search free high-resolution photos" />
                            </div>
                    </div>
                </div>
                <div className="absolute w-screen flex align-bottom justify-between items-end" style={{height: "100%"}}>
                        <h1 className="text-gray-300 text-base p-5 ">Photo of the day by John</h1>
                        <h1 className="text-gray-800 text-base p-5 ">Read more about the Unsplash License</h1>
                        <h1 className="text-gray-300 text-base p-5">All you need to create a website.</h1>
                </div>
                <img src={oneImage}  style={{ width: "100vw", height: "100%", objectFit: "cover"}} />
            </div>
            <div className="flex justify-center">
                <div className="w-3/4" >
                    <div className="text-center" >
                        <Images />
                    </div>
                </div></div>
            {
                isLoading && <Loading />
            }
        </div>
    )
}
