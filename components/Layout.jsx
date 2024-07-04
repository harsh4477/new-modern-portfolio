import { Sora } from "next/font/google";
import Head from "next/head";
import Header from "../components/Header";
import Nav from "../components/Nav";

// setup font
const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

const Layout = ({ children }) => {
  return (
    <main
      className={`page bg-site text-white bg-cover bg-no-repeat ${sora.variable} font-sora relative`}
    >
      <Head>
        <title>HarshPatel | Portfolio</title>
        <meta name="description" content="" />
        <meta
          name="keywords"
          content="react, next, nextjs, html, css, javascript, js, modern-ui, modern-ux, portfolio, framer-motion, 3d-website, particle-effect"
        />
        <meta name="theme-color" content="#f13024" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="./favicon_ions/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="./favicon_ions/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="./favicon_ions/favicon-16x16.png"
        />
        <link rel="manifest" href="./favicon_ions/site.webmanifest" />
      </Head>

      <Nav />
      <Header />

      {/* main content */}
      {children}
    </main>
  );
};

export default Layout;
