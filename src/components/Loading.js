import React from 'react'
import LoadingIcon from './LoadingIcon'

export default function Loading() {
    return (
        <div className="flex h-screen">
            <p className="m-auto">
                <LoadingIcon />
            </p>
        </div>
    )
}
