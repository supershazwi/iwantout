import Head from 'next/head'
import Link from 'next/link'
import Navbar from './navbar'
import Footer from './footer'

export const siteTitle = 'Workwand - Find the best countries to work at'

export default function Layout({ children, home }) {
  return (
    <div>
      <Head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="description" content="" />
        <meta name="author" content="Mark Otto, Jacob Thornton, and Bootstrap contributors" />
        <meta name="generator" content="Jekyll v4.1.1" />
        <title>Dashboard Template · Bootstrap</title>

        <link rel="canonical" href="https://getbootstrap.com/docs/4.5/examples/dashboard/" />
        <link href="/css/bootstrap.min.css" rel="stylesheet" />
        <link href="/css/dashboard.css" rel="stylesheet" />
        <link href="/css/fontawesome.css" rel="stylesheet" />

        <script defer src="/js/all.js"></script>
      </Head>
      <body>
        <Navbar />
          <main>{children}</main>
        <Footer />
      </body>
    </div>
  )
}