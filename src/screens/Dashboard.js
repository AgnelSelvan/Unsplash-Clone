import React from 'react'
import Header from '../components/Header'
import Images from '../components/images'

export default function Dashboard() {
    return (
        <section className="" >
            <Header />
            <div className="flex justify-center">
                <div className="w-3/4" >
                    <div className="text-center" >
                        <Images />
                    </div>
                </div></div>
        </section>
    )
}
