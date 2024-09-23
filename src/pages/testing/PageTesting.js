'use client'
import Layout from "@/layout/layout";
import Link from "next/link";
import { useEffect } from "react";

export default function PageTesting() {
    useEffect(() => {

        console.log('PageTesting');

        return () => {

        }
    }, [])
    return (
        <Layout>
            <section style={{ height: '500vh', background: '#e2e2e2' }} data-scroll-section>
                <div style={{ paddingTop: '400px' }}>
                    component PageTesting
                </div>
                <div><Link href='/'>to main</Link></div>
                <div><Link href='/test2'>to test2</Link></div>
                <div><Link href='/testing'>to testing</Link></div>
            </section>
        </Layout>
    );
}
