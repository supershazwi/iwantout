import Head from 'next/head'
import Link from 'next/link'
import Navbar from './navbar'
import Footer from './footer'

export const siteTitle = 'Workwand - Find the best countries to work at'

export default function Layout({ children, home }) {
  return (
    <div>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700" />
        <link href="/css/fullcalendar.bundle.css" rel="stylesheet" type="text/css" />
        <link href="/css/plugins.bundle.css" rel="stylesheet" type="text/css" />
        <link href="/css/prismjs.bundle.css" rel="stylesheet" type="text/css" /> 
      </Head>
      <body id="kt_body" className="header-fixed header-mobile-fixed page-loading">
        <Navbar />

        <Footer />
      </body>
    </div>
  )
}