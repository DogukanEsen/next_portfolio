import React from "react";
import Head from "next/head";

const Layout = ({ title, description, children }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:site_name" content={title} />
        <meta property="og:description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="font-montserrat">
        <div className="m-full h-full">{children}</div>
      </div>
    </>
  );
};

export default Layout;
