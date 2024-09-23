'use client'
import Layout from "@/layout/layout";
import Link from "next/link";
import { useEffect } from "react";

export default function PageTest2() {
    useEffect(() => {

        console.log('test2');

        return () => {

        }
    }, [])
    return (
        <Layout>
            <section style={{ height: '300vh', background: '#e5e5e5' }} data-scroll-section>
                <div>
                    component Test2
                </div>
                <div><Link href='/'>to main</Link></div>
                <div><Link href='/test2'>to test2</Link></div>
                <div><Link href='/testing'>to testing</Link></div>
            </section>
        </Layout>
    );
}
