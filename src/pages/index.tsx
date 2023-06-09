import styles from "../components/layouts/MainLayout.module.css";
import Link from "next/link";
import { MainLayout } from "@/components/layouts/MainLayout";

/**
 * This is a TypeScript React function that renders a main section with a link to an About page.
 * @returns The Home component is being returned, which contains a Head component with metadata and a
 * main component with a link to the About page.
 */
export default function Home() {
  return (
    <MainLayout>
      <h1>Home Page</h1>

      <h1 className="title">
        {/* Ir a <a href="/about">About</a> */}
        Ir a <Link href="/about">About</Link>
      </h1>

      <p className={"description"}>
        Get started by editing <code className={"code"}>pages/index.js</code>
      </p>
    </MainLayout>
  );
}
