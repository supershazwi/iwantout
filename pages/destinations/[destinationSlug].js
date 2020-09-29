import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/layout'
import Sidebar from '../../components/sidebar'

export default function Home() {
  return (
    <Layout>
    	<div className="container-fluid">
    	  	<Sidebar />
          <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-md-4">
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
              <h1 className="h2">Living in Singapore</h1>
            </div>

            <h3>🏡 Accommodation</h3>
            <div className="table-responsive">
              <table className="table table-striped table-sm">
                <thead>
                  <tr>
                    <th>Property Prices</th>
                    <th>Foreigner</th>
                    <th>Permanent Resident</th>
                    <th>Citizen</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td colspan="4"><strong>Condominium Rental</strong></td>
                  </tr>
                  <tr>
                    <td><i class="fas fa-angle-right"></i> Prime Locations</td>
                    <td colspan="3" style={{ textAlign: "center", verticalAlign: "middle", background: "rgba(52, 172, 224, 0.1)" }}>S$ 13,000 per month</td>
                  </tr>
                  <tr>
                    <td><i class="fas fa-angle-right"></i> Heartland Locations</td>
                    <td colspan="3" style={{ textAlign: "center", verticalAlign: "middle", background: "rgba(52, 172, 224, 0.1)" }}>S$ 3,500 per month</td>
                  </tr>
                  <tr>
                    <td colspan="4"><strong>Condominium Purchase</strong></td>
                  </tr>
                  <tr>
                    <td><i class="fas fa-angle-right"></i> Prime Locations</td>
                    <td colspan="3" style={{ textAlign: "center", verticalAlign: "middle", background: "rgba(52, 172, 224, 0.1)" }}>S$ 9,200,000</td>
                  </tr>
                  <tr>
                    <td><i class="fas fa-angle-right"></i> Heartland Locations</td>
                    <td colspan="3" style={{ textAlign: "center", verticalAlign: "middle", background: "rgba(52, 172, 224, 0.1)" }}>S$ 1.250,000</td>
                  </tr>
                  <tr>
                    <td colspan="4"><strong>Landed Property Rental</strong></td>
                  </tr>
                  <tr>
                    <td><i class="fas fa-angle-right"></i> Prime Locations</td>
                    <td colspan="3" style={{ textAlign: "center", verticalAlign: "middle", background: "rgba(52, 172, 224, 0.1)" }}>S$ 9,500 per month</td>
                  </tr>
                  <tr>
                    <td><i class="fas fa-angle-right"></i> Heartland Locations</td>
                    <td colspan="3" style={{ textAlign: "center", verticalAlign: "middle", background: "rgba(52, 172, 224, 0.1)" }}>S$ 5,500 per month</td>
                  </tr>
                  <tr>
                    <td colspan="4"><strong>Landed Property Purchase</strong></td>
                  </tr>
                  <tr>
                    <td><i class="fas fa-angle-right"></i> Prime Locations</td>
                    <td colspan="3" style={{ textAlign: "center", verticalAlign: "middle", background: "rgba(52, 172, 224, 0.1)" }}>S$ 7,500,000</td>
                  </tr>
                  <tr>
                    <td><i class="fas fa-angle-right"></i> Heartland Locations</td>
                    <td colspan="3" style={{ textAlign: "center", verticalAlign: "middle", background: "rgba(52, 172, 224, 0.1)" }}>S$ 4,000,000</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <br />
            <h3>🎓Education</h3>
            <div className="table-responsive">
              <table className="table table-striped table-sm">
                <thead>
                  <tr>
                    <th>School Fees</th>
                    <th>Foreigner</th>
                    <th>Permanent Resident</th>
                    <th>Citizen</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td colspan="4"><strong>Government Schools</strong></td>
                  </tr>
                  <tr>
                    <td><i class="fas fa-angle-right"></i> Primary Level</td>
                    <td>S$ 440 - 700 per month</td>
                    <td>S$ 180 per month</td>
                    <td>Free</td>
                  </tr>
                  <tr>
                    <td><i class="fas fa-angle-right"></i> Secondary Level</td>
                    <td>S$ 720 - 1,250 per month</td>
                    <td>S$ 320 per month</td>
                    <td>S$ 5 per month</td>
                  </tr>
                  <tr>
                    <td><i class="fas fa-angle-right"></i> Pre-University level (Junior Colleges, Centralised Institute)  </td>
                    <td>S$ 980 - 1,600 per month</td>
                    <td>S$ 400 per month</td>
                    <td>S$ 6 per month</td>
                  </tr>
                  <tr>
                    <td colspan="4"><strong>Others</strong></td>
                  </tr>
                  <tr>
                    <td><i class="fas fa-angle-right"></i> ITE</td>
                    <td>S$ 13,470 - 20,480 per year</td>
                    <td>S$ 5,023 - 7,833 per year</td>
                    <td>S$ 406 - 626 per year</td>
                  </tr>
                  <tr>
                    <td><i class="fas fa-angle-right"></i> Polytechnics</td>
                    <td>S$ 10,000 per year</td>
                    <td>S$ 5,600 per year</td>
                    <td>S$ 2,800 per year</td>
                  </tr>
                  <tr>
                    <td><i class="fas fa-angle-right"></i> Universities</td>
                    <td>POA</td>
                    <td>POA</td>
                    <td>POA</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="table-responsive">
              <table className="table table-striped table-sm">
                <thead>
                  <tr>
                    <th style={{ color: "#218c74" }}>Schemes - Edusave</th>
                    <th>Foreigner</th>
                    <th>Permanent Resident</th>
                    <th>Citizen</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td colspan="4"><strong>Government Schools</strong></td>
                  </tr>
                  <tr>
                    <td><i class="fas fa-angle-right"></i> Primary Level</td>
                    <td rowspan="2" colspan="2" style={{ textAlign: "center", verticalAlign: "middle", background: "rgba(52, 172, 224, 0.1)" }}>Not Eligible</td>
                    <td style={{ color: "#218c74" }}>S$ 230 per year</td>
                  </tr>
                  <tr>
                    <td><i class="fas fa-angle-right"></i> Secondary Level</td>
                    <td style={{ color: "#218c74" }}>S$ 290 per year</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="table-responsive">
              <table className="table table-striped table-sm">
                <thead>
                  <tr>
                    <th style={{ color: "#218c74" }}>Subsidies - MOE Financial Assistance Scheme (FAS)</th>
                    <th>Foreigner</th>
                    <th>Permanent Resident</th>
                    <th>Citizen</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td colspan="4"><strong>Government Schools</strong></td>
                  </tr>
                  <tr>
                    <td><i class="fas fa-angle-right"></i> Primary Level</td>
                    <td rowspan="3" style={{ textAlign: "center", verticalAlign: "middle", background: "rgba(52, 172, 224, 0.1)" }}>Not Eligible</td>
                    <td rowspan="3" style={{ textAlign: "center", verticalAlign: "middle", background: "rgba(52, 172, 224, 0.1)" }}>Not Eligible</td>
                    <td style={{ color: "#218c74" }} rowspan="3">
                      <ul style={{ paddingInlineStart: "20px", marginBottom: 0 }}>
                        <li>A full subsidy for school fees.</li>
                        <li>A full subsidy of $6.50 per month for standard miscellaneous fees.</li>
                        <li>Free textbooks and school attire.</li>
                        <li>S$ 15 transport credit per month if your child takes public transport.</li>
                        <li>A S$ 2 per meal subsidy for school meals, applicable to 7 meals per school week.</li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td><i class="fas fa-angle-right"></i> Secondary Level</td>
                  </tr>
                  <tr>
                    <td><i class="fas fa-angle-right"></i> Pre-University level (Junior Colleges, Centralised Institute)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </main>
    	</div>
    </Layout>
  )
}

export async function getStaticPaths() {
  return {
    paths: [{ params: { destinationSlug: 'singapore' } }],
    fallback: false
  }
}

export async function getStaticProps() {

  return {
    props: {  },
  }
}