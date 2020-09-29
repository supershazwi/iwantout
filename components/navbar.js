import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import { useRouter } from 'next/router'

export default class Navbar extends React.Component {
	state = {
		destinations: []
	}

	componentDidMount() {
	}

  render() {
  	const { destinations } = this.state

    return (
      <div className="sticky-top">
        <nav className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
          <a className="navbar-brand col-md-3 col-lg-2 mr-0 px-3" href="#">Workwand</a>
          <button className="navbar-toggler position-absolute d-md-none collapsed" type="button" data-toggle="collapse" data-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <ul className="navbar-nav px-3">
            <li className="nav-item text-nowrap">
              <a className="nav-link" href="#">Sign out</a>
            </li>
          </ul>
        </nav>
      </div>
    )
  }
}