import Link from "next/link";
import Head from 'next/head'
import { MainLayout } from "../components/MainLayout";

export default function Posts() {
    
    return (
        <MainLayout title="Posts Page">
            <p><Link href="../index">back</Link></p>
            <h1>Posts Page</h1>
        </MainLayout>
    )
}


// /posts
// /post/42