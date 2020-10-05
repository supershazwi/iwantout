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

            <h3 id="accommodation">🏡 Accommodation</h3>
            <div className="table-responsive">
              <table className="table table-striped table-sm">
                <thead>
                  <tr>
                    <th style={{ width: "40%" }}>Property Prices</th>
                    <th style={{ width: "20%" }}>Foreigner</th>
                    <th style={{ width: "20%" }}>Permanent Resident</th>
                    <th style={{ width: "20%" }}>Citizen</th>
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
            <h3 id="education">🎓 Education</h3>
            <div className="table-responsive">
              <table className="table table-striped table-sm">
                <thead>
                  <tr>
                    <th style={{ width: "40%" }}>School Fees</th>
                    <th style={{ width: "20%" }}>Foreigner</th>
                    <th style={{ width: "20%" }}>Permanent Resident</th>
                    <th style={{ width: "20%" }}>Citizen</th>
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
                    <th style={{ color: "#218c74", width: "40%" }}>Schemes - Edusave</th>
                    <th style={{ width: "20%" }}>Foreigner</th>
                    <th style={{ width: "20%" }}>Permanent Resident</th>
                    <th style={{ width: "20%" }}>Citizen</th>
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
                    <th style={{ color: "#218c74", width: "40%" }}>Subsidies - MOE Financial Assistance Scheme (FAS)</th>
                    <th style={{ width: "20%" }}>Foreigner</th>
                    <th style={{ width: "20%" }}>Permanent Resident</th>
                    <th style={{ width: "20%" }}>Citizen</th>
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
                    <td style={{ color: "#218c74", verticalAlign: "middle", background: "rgba(52, 172, 224, 0.1)" }} rowspan="3">
                      <ul style={{ paddingInlineStart: "20px", marginBottom: 0}}>
                        <li>A full subsidy for school fees</li>
                        <li>A full subsidy of $6.50 per month for standard miscellaneous fees</li>
                        <li>Free textbooks and school attire</li>
                        <li>S$ 15 transport credit per month if your child takes public transport</li>
                        <li>A S$ 2 per meal subsidy for school meals, applicable to 7 meals per school week</li>
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
            <div className="table-responsive">
              <table className="table table-striped table-sm">
                <thead>
                  <tr>
                    <th style={{ color: "#218c74", width: "40%" }}>Subsidies - Higher Education Community Bursary</th>
                    <th style={{ width: "20%" }}>Foreigner</th>
                    <th style={{ width: "20%" }}>Permanent Resident</th>
                    <th style={{ width: "20%" }}>Citizen</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td colspan="4"><strong>Government Schools</strong></td>
                  </tr>
                  <tr>
                    <td><i class="fas fa-angle-right"></i> ITE</td>
                    <td rowspan="4" style={{ textAlign: "center", verticalAlign: "middle", background: "rgba(52, 172, 224, 0.1)" }}>Not Eligible</td>
                    <td rowspan="4" style={{ textAlign: "center", verticalAlign: "middle", background: "rgba(52, 172, 224, 0.1)" }}>Not Eligible</td>
                    <td style={{ color: "#218c74", verticalAlign: "middle" }}>S$ 1,250 - 100% tuition fee subsidy + S$ 1,500 per year</td>
                  </tr>
                  <tr>
                    <td><i class="fas fa-angle-right"></i> Polytechnics</td>
                    <td style={{ color: "#218c74" }}>S$ 2,400 - 2,750 per year</td>
                  </tr>
                  <tr>
                    <td><i class="fas fa-angle-right"></i> Universities (excluding Medicine/Dentistry students)</td>
                    <td style={{ color: "#218c74" }}>S$ 5,000 - 6,200 per year</td>
                  </tr>
                  <tr>
                    <td><i class="fas fa-angle-right"></i> Universities (Medicine/Dentistry students)</td>
                    <td style={{ color: "#218c74" }}>S$ 14,900 - 24,700 per year</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="table-responsive">
              <table className="table table-striped table-sm">
                <thead>
                  <tr>
                    <th style={{ color: "#218c74", width: "40%" }}>Subsidies - Higher Education Bursary</th>
                    <th style={{ width: "20%" }}>Foreigner</th>
                    <th style={{ width: "20%" }}>Permanent Resident</th>
                    <th style={{ width: "20%" }}>Citizen</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td colspan="4"><strong>Government Schools</strong></td>
                  </tr>
                  <tr>
                    <td><i class="fas fa-angle-right"></i> ITE</td>
                    <td rowspan="4" style={{ textAlign: "center", verticalAlign: "middle", background: "rgba(52, 172, 224, 0.1)" }}>Not Eligible</td>
                    <td rowspan="4" style={{ textAlign: "center", verticalAlign: "middle", background: "rgba(52, 172, 224, 0.1)" }}>Not Eligible</td>
                    <td style={{ color: "#218c74", verticalAlign: "middle" }}>S$ 400 - 600 per year</td>
                  </tr>
                  <tr>
                    <td><i class="fas fa-angle-right"></i> Polytechnics</td>
                    <td style={{ color: "#218c74" }}>S$ 850 - 1,900 per year</td>
                  </tr>
                  <tr>
                    <td><i class="fas fa-angle-right"></i> Universities (excluding Medicine/Dentistry students)</td>
                    <td style={{ color: "#218c74" }}>S$ 1,350 - 3,200 per year</td>
                  </tr>
                  <tr>
                    <td><i class="fas fa-angle-right"></i> Universities (Medicine/Dentistry students)</td>
                    <td style={{ color: "#218c74" }}>S$ 4,900 - 16,700 per year</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <br />
            <h3 id="food_beverages">🍜 Food & Beverages</h3>
            <div className="table-responsive">
              <table className="table table-striped table-sm">
                <thead>
                  <tr>
                    <th style={{ width: "40%"}}></th>
                    <th style={{ width: "20%" }}>Foreigner</th>
                    <th style={{ width: "20%" }}>Permanent Resident</th>
                    <th style={{ width: "20%" }}>Citizen</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td colspan="4"><strong>Hawker Food</strong></td>
                  </tr>
                  <tr>
                    <td><i class="fas fa-angle-right"></i> Chicken Rice</td>
                    <td colspan="3" style={{ textAlign: "center", verticalAlign: "middle", background: "rgba(52, 172, 224, 0.1)" }}>S$ 4.00</td>
                  </tr>
                  <tr>
                    <td><i class="fas fa-angle-right"></i> Nasi Lemak</td>
                    <td colspan="3" style={{ textAlign: "center", verticalAlign: "middle", background: "rgba(52, 172, 224, 0.1)" }}>S$ 4.50</td>
                  </tr>
                  <tr>
                    <td><i class="fas fa-angle-right"></i> Economy Rice</td>
                    <td colspan="3" style={{ textAlign: "center", verticalAlign: "middle", background: "rgba(52, 172, 224, 0.1)" }}>S$ 3.50</td>
                  </tr>
                  <tr>
                    <td colspan="4"><strong>Restaurant/Cafe Food</strong></td>
                  </tr>
                  <tr>
                    <td><i class="fas fa-angle-right"></i> Cheeseburger</td>
                    <td colspan="3" style={{ textAlign: "center", verticalAlign: "middle", background: "rgba(52, 172, 224, 0.1)" }}>S$ 14</td>
                  </tr>
                  <tr>
                    <td><i class="fas fa-angle-right"></i> Steak with Mashed Potatoes</td>
                    <td colspan="3" style={{ textAlign: "center", verticalAlign: "middle", background: "rgba(52, 172, 224, 0.1)" }}>S$ 26</td>
                  </tr>
                  <tr>
                    <td><i class="fas fa-angle-right"></i> Grilled Norwegian Salmon</td>
                    <td colspan="3" style={{ textAlign: "center", verticalAlign: "middle", background: "rgba(52, 172, 224, 0.1)" }}>S$ 24</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <br />
            <h3 id="taxes">🧾 Taxes</h3>
            <div className="table-responsive">
              <table className="table table-striped table-sm">
                <thead>
                  <tr>
                    <th style={{ width: "40%"}}></th>
                    <th style={{ width: "30%" }}>Non-resident</th>
                    <th style={{ width: "30%" }}>Resident</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><i class="fas fa-angle-right"></i> Personal Income Tax Type</td>
                    <td>Flat or progressive, whichever higher</td>
                    <td>Progressive</td>
                  </tr>
                  <tr>
                    <td><i class="fas fa-angle-right"></i> Personal Income Tax Rate</td>
                    <td>15 - 22% per year of assessment</td>
                    <td>0 - 20% per year of assessment</td>
                  </tr>
                  <tr>
                    <td><i class="fas fa-angle-right"></i> Capital Gains & Dividends</td>
                    <td colspan="2" style={{ textAlign: "center", verticalAlign: "middle", background: "rgba(52, 172, 224, 0.1)" }}>0%</td>
                  </tr>
                  <tr>
                    <td><i class="fas fa-angle-right"></i> Corporate Tax Type</td>
                    <td colspan="2" style={{ textAlign: "center", verticalAlign: "middle", background: "rgba(52, 172, 224, 0.1)" }}>Flat</td>
                  </tr>
                  <tr>
                    <td><i class="fas fa-angle-right"></i> Corporate Tax Rate</td>
                    <td colspan="2" style={{ textAlign: "center", verticalAlign: "middle", background: "rgba(52, 172, 224, 0.1)" }}>17%</td>
                  </tr>
                  <tr>
                    <td><i class="fas fa-angle-right"></i> Corporate Tax Rate for startups in first 3 years</td>
                    <td colspan="2" style={{ verticalAlign: "middle", background: "rgba(52, 172, 224, 0.1)" }}>
                      <ul style={{ paddingInlineStart: "20px", marginBottom: 0}}>
                        <li>0% on first S$ 100,000</li>
                        <li>8.5% on next S$ 200,000</li>
                        <li>17% on amounts above S$300,000</li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td><i class="fas fa-angle-right"></i> Corporate Tax Rebate</td>
                    <td>Not Eligible</td>
                    <td style={{ color: "#218c74" }}>30%, capped at S$ 20,000 per year</td>
                  </tr>
                  <tr>
                    <td><i class="fas fa-angle-right"></i> Double Taxation Treaty</td>
                    <td colspan="2" style={{ textAlign: "center", verticalAlign: "middle", background: "rgba(52, 172, 224, 0.1)" }}>Yes</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <br />
            <h3 id="transportation">🚗 Transportation</h3>
            <div className="table-responsive">
              <table className="table table-striped table-sm">
                <thead>
                  <tr>
                    <th style={{ width: "40%"}}></th>
                    <th style={{ width: "20%" }}>Foreigner</th>
                    <th style={{ width: "20%" }}>Permanent Resident</th>
                    <th style={{ width: "20%" }}>Citizen</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td colspan="4"><strong>Public Transportation</strong></td>
                  </tr>
                  <tr>
                    <td><i class="fas fa-angle-right"></i> Bus</td>
                    <td colspan="3" style={{ textAlign: "center", verticalAlign: "middle", background: "rgba(52, 172, 224, 0.1)" }}>S$ 0.92 - 2.80 per trip</td>
                  </tr>
                  <tr>
                    <td><i class="fas fa-angle-right"></i> Train</td>
                    <td colspan="3" style={{ textAlign: "center", verticalAlign: "middle", background: "rgba(52, 172, 224, 0.1)" }}>S$ 0.42 SGD - 1.67 per trip</td>
                  </tr>
                  <tr>
                    <td><i class="fas fa-angle-right"></i> Bus + Train Concession Card</td>
                    <td colspan="3" style={{ textAlign: "center", verticalAlign: "middle", background: "rgba(52, 172, 224, 0.1)" }}>S$ 128 for unlimited trips</td>
                  </tr>
                  <tr>
                    <td><i class="fas fa-angle-right"></i> Taxi/Ride-hailing</td>
                    <td colspan="3" style={{ textAlign: "center", verticalAlign: "middle", background: "rgba(52, 172, 224, 0.1)" }}>S$ 8 - 32 per trip</td>
                  </tr>
                  <tr>
                    <td colspan="4"><strong>Private Transportation</strong></td>
                  </tr>
                  <tr>
                    <td><i class="fas fa-angle-right"></i> Car Rental</td>
                    <td colspan="3" style={{ textAlign: "center", verticalAlign: "middle", background: "rgba(52, 172, 224, 0.1)" }}>S$ 74 (Hatchback) - 95 (SUV) per day</td>
                  </tr>
                  <tr>
                    <td><i class="fas fa-angle-right"></i> Car Purchase</td>
                    <td colspan="3" style={{ textAlign: "center", verticalAlign: "middle", background: "rgba(52, 172, 224, 0.1)" }}>S$ 78,999 (Hatchback) - 151,999 (SUV)</td>
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