'use client'
import { useRef, useEffect, useState } from 'react'
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'

export default function Layout({ children }) {
    const containerRef = useRef(null)
    const locationChange = scroll => scroll.scrollTo(0, { duration: 0, disableLerp: true })
    return (
        <LocomotiveScrollProvider
            options={{ smooth: true }}
            containerRef={containerRef}
            watch={[]}
            onLocationChange={locationChange}>
            <div data-scroll-container ref={containerRef}>
                {children}
            </div>
        </LocomotiveScrollProvider>
    )
}
