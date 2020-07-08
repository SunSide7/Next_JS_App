import Link from "next/link";
import Router from "next/router";
import { MainLayout } from "../../components/MainLayout";

export default function About() {
    const onClickLinkHandler = () => {
        Router.push('/');
    }

    return (
      <MainLayout title="About Page">
        <h1>About Page</h1>
        <button onClick={onClickLinkHandler}>Go Back</button>
        <button onClick={() => Router.push('/posts')}>Go To Posts</button>
      </MainLayout>
    );
}