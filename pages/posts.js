import Link from "next/link";
import Head from 'next/head'

export default function Posts() {
    
    return (
        <>
            <Head>
                <title>Next JS Posts</title>
            </Head>
            <p><Link href="../index">back</Link></p>
            <h1>Posts Page</h1>
        </>
    )
}


// /posts
// /post/42