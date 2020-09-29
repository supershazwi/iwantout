import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout'
import Sidebar from '../components/sidebar'

export default function Home() {
  return (
    <Layout>
    	<div className="container-fluid">
    	  	<Sidebar />
    	</div>
    </Layout>
  )
}

export async function getStaticProps() {

  return {
    props: {  },
  }
}