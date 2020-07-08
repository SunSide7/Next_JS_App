import { useRouter } from 'next/router';
import Link from "next/link";

export default function Post() {
    const router = useRouter();
    const id = router.query.id;

    console.log(router);
    
    return <>
        <p><Link href="../index">back</Link></p>
        <h1>Post { id }</h1>
    </>
}