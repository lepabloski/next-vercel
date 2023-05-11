import styles from "../components/layouts/MainLayout.module.css";
import Link from "next/link";
import { MainLayout } from "@/components/layouts/MainLayout";

/**
 * This is a TypeScript React function that renders a main section with a link to an About page.
 * @returns The Home component is being returned, which contains a Head component with metadata and a
 * main component with a link to the About page.
 */
export default function Contactpage() {
  return (
    <MainLayout>
      <h1>Contact Page</h1>

      <h1 className={"title"}>
        Ir a <Link href="/">Home</Link>
      </h1>

      <p className={"description"}>
        Get started by editing <code className={"code"}>pages/contact.jsx</code>
      </p>
    </MainLayout>
    // <MainLayout>
    //   <h1>About Page</h1>
    //   <div className={styles.grid}>
    //     <Link href="/about" className={styles.card} rel="noopener noreferrer">
    //       <h2>
    //         Home <span>-&gt;</span>
    //       </h2>
    //       <p>Te lleva al about</p>
    //     </Link>
    //   </div>
    // </MainLayout>
  );
}
