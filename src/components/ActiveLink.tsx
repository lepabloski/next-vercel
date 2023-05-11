import Link from "next/link";
import { useRouter } from "next/router";

interface LinkTuple {
  text: string;
  href: string;
}

const style = {
  color: "#0070f3",
  textDecoration: "underline",
};
/**
 * This is a TypeScript React component that renders a link with conditional styling based on the
 * current URL path.
 * @param {LinkTuple}  - The `ActiveLink` component takes in an object with two properties: `text` and
 * `href`. `text` is a string representing the text to be displayed for the link, and `href` is a
 * string representing the URL that the link should navigate to. The component also uses the `
 * @returns A React functional component named `ActiveLink` is being returned. It takes in an object
 * with two properties `text` and `href` as its argument. It uses the `useRouter` hook from Next.js to
 * get the current path and compares it with the `href` property. If they match, it applies a `style`
 * object to the `Link` component, otherwise, it applies
 */
export const ActiveLink = ({ text, href }: LinkTuple) => {
  const { asPath } = useRouter();

  return (
    <Link href={href} style={asPath === href ? style : undefined}>
      {text}
    </Link>
  );
};
