import React from 'react'
import Chart from './Component/Chart'
import AreaChart from './Component/AreaChart'
import DemoPie from './Component/DemoPie'
import MasterPage from './Component/mainPage/MasterPage'
const App = () => {
  return (
    <MasterPage>
      <main className='mt-5 pt-2'>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-md-12 fw-bold fs-3 mt-5 '>Dashboard</div>
          </div>
          <div className='row'>
            <div className='col-md-3 mb-3 '>
              <div class='card text-white bg-primary  h-90'>
                <div class='card-body'>
                  <h5 class='card-title'>20%</h5>
                  <h5 class='card-title'>Neworder</h5>
                  <div class='card-header bg-primary mt-3'>
                    More info
                    <span>
                      <i class='bi bi-chevron-down'></i>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-md-3 mb-3'>
              <div class='card text-white bg-warning  h-90'>
                <div class='card-body'>
                  <h5 class='card-title'>67%</h5>
                  <h5 class='card-title'>Bounce Rate</h5>
                  <div class='card-header'>
                    More info
                    <span>
                      <i class='bi bi-chevron-down'></i>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-md-3 mb-3 '>
              <div class='card text-white bg-danger  h-90'>
                <div class='card-body'>
                  <h5 class='card-title'>15</h5>
                  <h5 class='card-title'>Registration</h5>
                  <div class='card-header'>
                    More info
                    <span>
                      <i class='bi bi-chevron-down'></i>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-md-3 mb-3 '>
              <div class='card text-white bg-success h-90 '>
                <div class='card-body'>
                  <h5 class='card-title'>150</h5>
                  <h5 class='card-title'>visitor</h5>
                  <div class='card-header'>
                    More info
                    <span>
                      <i class='bi bi-chevron-down'></i>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-md-6'>
              <div className='card'>
                <div className='card-header'>Area</div>
                <div className='card-body'>
                  <AreaChart className='chart' width='400' height='200' />
                </div>
              </div>
            </div>
            <div className='col-md-6'>
              <div className='card'>
                <div className='card-header'>chart</div>
                <div className='card-body'>
                  <Chart className='chart' width='400' height='200' />
                </div>
              </div>
            </div>
          </div>
          <div className='row mt-3'>
            <div className='col-md-12'>
              <div className='card'>
                <div className='card-header'>Demopie</div>
                <div className='card-body'>
                  <DemoPie className='chart' width='200' height='200' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </MasterPage>
  )
}

export default App
