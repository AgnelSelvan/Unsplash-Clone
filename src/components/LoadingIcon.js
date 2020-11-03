import React from 'react'

export default function LoadingIcon({color="text-gray-700"}) {
    return (
        <i className={`fas fa-circle-notch fa-spin fa-lg ${color}`}></i>
    )
}
