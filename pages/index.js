import Link from 'next/link'
import Head from 'next/head'
import { MainLayout } from '../components/MainLayout'

export default function Index() {
    return (
        <MainLayout>
            <Head>
                <meta name="keywords"  content="next,javascript,react"/>
                <meta name="description"  content="this is tutorial for NextJS"/>
            </Head>
            <p><Link href={'/about'}>about</Link></p>
            <p><Link href={'/posts'}>posts</Link></p>
            <h1>You are the best!</h1>
            <p>You can do everything you want with your life!</p>
        </MainLayout> 
    )
}