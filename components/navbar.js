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
      <div>
        <div className="d-flex flex-column flex-root">
          <div className="d-flex flex-row flex-column-fluid page">
            <div className="d-flex flex-column flex-row-fluid wrapper container" id="kt_wrapper">
              <div id="kt_header" className="header header-fixed">
                <div className="container">
                  <div className="header-menu-wrapper header-menu-wrapper-left" id="kt_header_menu_wrapper">
                    <div className="header-logo mr-10 d-none d-lg-flex">
                      <a href="index.html">
                        <img alt="Logo" src="/img/logo.svg" className="h-35px" />
                      </a>
                    </div>
                    <div id="kt_header_menu" className="header-menu header-menu-left header-menu-mobile header-menu-layout-default">
                      <ul className="menu-nav">
                        <li className="menu-item menu-item-active" aria-haspopup="true">
                          <a href="index.html" className="menu-link">
                            <span className="menu-text">Dashboard</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="content d-flex flex-column flex-column-fluid" id="kt_content">
                <div className="d-flex flex-column-fluid">
                  <div className="container">
                    <div className="row" data-sticky-container="">
                      <div className="col-lg-3 col-xl-3">
                        <div className="card card-custom bg-gray-100 sticky" data-sticky="true" data-margin-top="140px" data-sticky-for="1023" data-sticky-class="sticky">
                          <div className="card-body p-0">
                            <ul className="navi navi-bold navi-hover my-5" role="tablist">
                              <li className="navi-item">
                                <a className="navi-link" data-toggle="tab" href="#kt_profile_tab_personal_information">
                                  <span className="navi-icon" style={{ fontSize: "1.08rem" }}>
                                    🏡
                                  </span>
                                  <span className="navi-text" style={{ fontSize: "1.08rem" }}>Accommodation</span>
                                </a>
                              </li>
                              <li className="navi-item">
                                <a className="navi-link" data-toggle="tab" href="#kt_profile_tab_personal_information" style={{ paddingBottom: "0" }}>
                                  <span className="navi-text" style={{ fontSize: "1.08rem" }}>School Fees</span>
                                </a>
                              </li>
                              <li className="navi-item">
                                <a className="navi-link" data-toggle="tab" href="#kt_profile_tab_personal_information">
                                  <span className="navi-text" style={{ fontSize: "1.08rem" }}>Education Schemes, Subsidies & Grants</span>
                                </a>
                              </li>
                              <li className="navi-item">
                                <a className="navi-link" data-toggle="tab" href="#kt_profile_tab_personal_information">
                                  <span className="navi-icon" style={{ fontSize: "1.08rem" }}>
                                    🎓
                                  </span>
                                  <span className="navi-text" style={{ fontSize: "1.08rem" }}>Education</span>
                                </a>
                              </li>
                              <li className="navi-item">
                                <a className="navi-link" data-toggle="tab" href="#kt_profile_tab_personal_information" style={{ paddingBottom: "0" }}>
                                  <span className="navi-text" style={{ fontSize: "1.08rem" }}>School Fees</span>
                                </a>
                              </li>
                              <li className="navi-item">
                                <a className="navi-link" data-toggle="tab" href="#kt_profile_tab_personal_information">
                                  <span className="navi-text" style={{ fontSize: "1.08rem" }}>Education Schemes, Subsidies & Grants</span>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-9 col-xl-9">
                        <div className="card card-custom card-shadowless bg-gray-100">
                          <div className="card-body pt-4 pb-4">
                            <div className="table-responsive">

                              <div className="alert alert-dark" role="alert" style={{ marginTop: "1rem" }}>
                                <h4 style={{ marginBottom: "0rem" }}>School Fees</h4>
                              </div>

                              <table className="table table-borderless table-vertical-center">
                                <thead>
                                  <tr>
                                    <th className=""></th>
                                    <th className="text-center" style={{ fontSize: "1.08rem" }}>Foreigner</th>
                                    <th className="text-center" style={{ fontSize: "1.08rem" }}>Permanent Resident</th>
                                    <th className="text-center" style={{ fontSize: "1.08rem" }}>Citizen</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td className="py-5">
                                      <span className="text-dark-100 font-weight-bolder d-block font-size-lg">Primary School</span>
                                      <span className="text-dark-100">7 - 12 years old</span>
                                    </td>
                                    <td className="text-center">
                                      <span className="text-dark-100 d-block font-size-lg">440 - 700 SGD</span>
                                    </td>
                                    <td className="text-center">
                                      <span className="text-dark-100 d-block font-size-lg">180 SGD</span>
                                    </td>
                                    <td className="text-center">
                                      <span className="text-dark-100 d-block font-size-lg">Free</span>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td className="py-5">
                                      <span className="text-dark-100 font-weight-bolder d-block font-size-lg">Secondary School</span>
                                      <span className="text-dark-100">13 - 16 years old</span>
                                    </td>
                                    <td className="text-center">
                                      <span className="text-dark-100 d-block font-size-lg">720 - 1,250 SGD</span>
                                    </td>
                                    <td className="text-center">
                                      <span className="text-dark-100 d-block font-size-lg">320 SGD</span>
                                    </td>
                                    <td className="text-center">
                                      <span className="text-dark-100 d-block font-size-lg">5 SGD</span>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td className="py-5">
                                      <span className="text-dark-100 font-weight-bolder d-block font-size-lg">Junior College</span>
                                      <span className="text-dark-100">17 - 20 years old</span>
                                    </td>
                                    <td className="text-center">
                                      <span className="text-dark-100 d-block font-size-lg">980 - 1,600 SGD</span>
                                    </td>
                                    <td className="text-center">
                                      <span className="text-dark-100 d-block font-size-lg">400 SGD</span>
                                    </td>
                                    <td className="text-center">
                                      <span className="text-dark-100 d-block font-size-lg">6 SGD</span>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td className="py-5">
                                      <span className="text-dark-100 font-weight-bolder d-block font-size-lg">Institute of Technical Education</span>
                                      <span className="text-dark-100">17 - 20 years old</span>
                                    </td>
                                    <td className="text-center">
                                      <span className="text-dark-100 d-block font-size-lg">13,470 - 20,480 SGD</span>
                                    </td>
                                    <td className="text-center">
                                      <span className="text-dark-100 d-block font-size-lg">5,023 - 7,833 SGD</span>
                                    </td>
                                    <td className="text-center">
                                      <span className="text-dark-100 d-block font-size-lg">406 - 626 SGD</span>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td className="py-5">
                                      <span className="text-dark-100 font-weight-bolder d-block font-size-lg">Polytechnic</span>
                                      <span className="text-dark-100">17 - 20 years old</span>
                                    </td>
                                    <td className="text-center">
                                      <span className="text-dark-100 d-block font-size-lg">10,000 SGD</span>
                                    </td>
                                    <td className="text-center">
                                      <span className="text-dark-100 d-block font-size-lg">5,600 SGD</span>
                                    </td>
                                    <td className="text-center">
                                      <span className="text-dark-100 d-block font-size-lg">2,800 SGD</span>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td className="py-5">
                                      <span className="text-dark-100 font-weight-bolder d-block font-size-lg">University</span>
                                      <span className="text-dark-100">21 - 24 years old</span>
                                    </td>
                                    <td className="text-center">
                                      <span className="text-dark-100 d-block font-size-lg">POA</span>
                                    </td>
                                    <td className="text-center">
                                      <span className="text-dark-100 d-block font-size-lg">POA</span>
                                    </td>
                                    <td className="text-center">
                                      <span className="text-dark-100 d-block font-size-lg">POA</span>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                        <br />
                        <div className="card card-custom card-shadowless bg-gray-100">
                          <div className="card-body pt-4 pb-4">
                            <div className="table-responsive">

                              <div className="alert alert-dark" role="alert" style={{ marginTop: "1rem" }}>
                                <h4 style={{ marginBottom: "0rem" }}>Education Schemes, Subsidies & Grants</h4>
                              </div>

                              <table className="table table-borderless table-vertical-center">
                                <thead>
                                  <tr>
                                    <th className="" style={{ padding: "0" }}>
                                      <div className="alert alert-dark" role="alert" style={{ background: "#2c3e50" }}>
                                        <h6 style={{ marginBottom: "0rem" }}>Edusave Contributions</h6>
                                      </div>
                                    </th>
                                    <th className="text-center" style={{ fontSize: "1.08rem" }}>Foreigner</th>
                                    <th className="text-center" style={{ fontSize: "1.08rem" }}>Permanent Resident</th>
                                    <th className="text-center" style={{ fontSize: "1.08rem" }}>Citizen</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td className="py-5">
                                      <span className="text-dark-100 font-weight-bolder d-block font-size-lg">Primary School</span>
                                      <span className="text-dark-100">7 - 12 years old</span>
                                    </td>
                                    <td className="text-center">
                                      <span className="text-dark-100 d-block font-size-lg">N.A.</span>
                                    </td>
                                    <td className="text-center">
                                      <span className="text-dark-100 d-block font-size-lg">N.A.</span>
                                    </td>
                                    <td className="text-center">
                                      <span className="text-dark-100 d-block font-size-lg">230 SGD</span>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td className="py-5">
                                      <span className="text-dark-100 font-weight-bolder d-block font-size-lg">Secondary School</span>
                                      <span className="text-dark-100">13 - 16 years old</span>
                                    </td>
                                    <td className="text-center">
                                      <span className="text-dark-100 d-block font-size-lg">N.A.</span>
                                    </td>
                                    <td className="text-center">
                                      <span className="text-dark-100 d-block font-size-lg">N.A.</span>
                                    </td>
                                    <td className="text-center">
                                      <span className="text-dark-100 d-block font-size-lg">290 SGD</span>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}