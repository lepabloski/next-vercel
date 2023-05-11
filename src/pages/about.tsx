import styles from "../components/layouts/MainLayout.module.css";
import Link from "next/link";
import { MainLayout } from "@/components/layouts/MainLayout";
import { DarkLayout } from "@/components/layouts/DarkLayout";
import { NextPageWithLayout } from "./_app";
import { ReactElement } from "react";
/**
 * This is a TypeScript React function that renders an About page with a link to the Home page.
 * @returns The `about` function is returning a JSX element that represents the About page of a
 * website. It includes a `MainLayout` component, a heading with the text "About Page", and a `Link`
 * component that leads to the home page.
 */
export const About: NextPageWithLayout = () => {
  return (
    <>
      <h1>About Page</h1>

      <h1 className={"title"}>
        Ir a <Link href="/">Home</Link>
      </h1>

      <p className={"description"}>
        Get started by editing <code className={"code"}>pages/about.jsx</code>
      </p>
    </>
  );
};

About.getLayout = function getLayout(page: ReactElement) {
  return (
    <MainLayout>
      <DarkLayout> {page}</DarkLayout>
    </MainLayout>
  );
};
export default About;
