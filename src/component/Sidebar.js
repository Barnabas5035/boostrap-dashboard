import React from 'react'
import { Link } from 'react-router-dom'

const SideBar = () => {
  return (
    <div>
      <nav className='navbar navbar-expand-lg navbar-dark bg-dark fixed-top'>
        <div className='container-fluid'>
          <button
            className='navbar-toggler me-2'
            type='button'
            data-bs-toggle='offcanvas'
            data-bs-target='#offcanvasExample'
            aria-controls='offcanvasExample'
          >
            <span className='navbar-toggler-icon' />
          </button>
          <Link className='navbar-brand fw-bold text-uppercase me-auto ' to='#'>
            Navbar
          </Link>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarSupportedContent'
            aria-controls='navbarSupportedContent'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon' />
          </button>
          <div className='collapse navbar-collapse' id='navbarSupportedContent'>
            <form className='d-flex ms-auto'>
              <div className='input-group my-3'>
                <input
                  type='text'
                  className='form-control'
                  placeholder="Recipient's username"
                  aria-label="Recipient's username"
                  aria-describedby='button-addon2'
                />
                <button
                  className='btn btn-primary'
                  type='button'
                  id='button-addon2'
                >
                  <i className='bi bi-search' />
                </button>
              </div>
            </form>
            <ul className='navbar-nav  mb-2 mb-lg-0'>
              <li className='nav-item dropdown'>
                <Link
                  className='nav-link dropdown-toggle'
                  data-bs-toggle='dropdown'
                  to='#'
                  role='button'
                  aria-expanded='false'
                >
                  <i className='bi bi-person-plus-fill' />
                </Link>
                <ul className='dropdown-menu dropdown-menu-end'>
                  <li>
                    <Link className='dropdown-item' to='#'>
                      Action
                    </Link>
                  </li>
                  <li>
                    <Link className='dropdown-item' to='#'>
                      Another action
                    </Link>
                  </li>
                  <li>
                    <Link className='dropdown-item' to='#'>
                      Something else here
                    </Link>
                  </li>
                  <li>
                    <hr className='dropdown-divider' />
                  </li>
                  <li>
                    <Link className='dropdown-item' href='#'>
                      Separated link
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div
        class='offcanvas offcanvas-start  bg-dark text-white sidebar-nav'
        tabindex='-1'
        id='offcanvasExample'
        aria-labelledby='offcanvasExampleLabel'
      >
        <div class='offcanvas-body p-0'>
          <nav className='navbar-dark'>
            <ul className='navbar-nav'>
              <li>
                <div className='text-muted small fw-bold uppercase px-3'>
                  CORE
                </div>
              </li>
              <li>
                <Link to='/' className='nav-link px-3 active'>
                  <span className=' me-2'>
                    <i class='bi bi-speedometer2'></i>
                    <span className='nav-items ms-2'>dashboard</span>
                  </span>
                </Link>
              </li>
              <li className='my-4'>
                <hr className='dropdown-divider' />
              </li>
              <li>
                <div className='text-muted small fw-bold uppercase px-3'>
                  interface
                </div>
              </li>
              <li>
                <Link
                  class='nav-link px-3 sidebar-link'
                  data-bs-toggle='collapse'
                  to='#multicollapseExample'
                  role='button'
                  aria-expanded='false'
                  aria-controls='multicollapseExample'
                >
                  <span className='me-2'>
                    <i class='bi bi-grid-3x3-gap-fill'></i>
                    <span className='nav-items ms-2'>Layout</span>
                  </span>
                  <span class='right-icon ms-auto'>
                    <i class='bi bi-chevron-down'></i>
                  </span>
                </Link>
                <div class='multicollapse' id='multicollapseExample'>
                  <div>
                    <ul className='navbar-nav px-3 '>
                      <li>
                        <Link to='/mailbox' className='nav-link '>
                          <span className=' me-2'>
                            <i class='bi bi-envelope-fill'></i>
                            <span className='nav-items ms-2'>mailBox</span>
                          </span>
                        </Link>
                      </li>
                      <li>
                        <Link to='/cart' className='nav-link '>
                          <span className=' me-2'>
                            <i class='bi bi-cart-check-fill'></i>
                            <span className='nav-items ms-2'>Carts</span>
                          </span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li>
                <Link to='#' className='nav-link px-3 '>
                  <span className=' me-2'>
                    <i class='bi bi-image'></i>
                    <span className='nav-items ms-2'>Gallery</span>
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  class='nav-link px-3 sidebar-link'
                  data-bs-toggle='collapse'
                  to='#collapseExample'
                  role='button'
                  aria-expanded='false'
                  aria-controls='collapseExample'
                >
                  <span className='me-2'>
                    <i class='bi bi-grid-3x3-gap-fill'></i>
                    <span className='nav-items ms-2'>Reading</span>
                  </span>
                  <span class='right-icon ms-auto'>
                    <i class='bi bi-chevron-down'></i>
                  </span>
                </Link>
                <div class='collapse' id='collapseExample'>
                  <div>
                    <ul className='navbar-nav px-3 '>
                      <li>
                        <Link to='/login' className='nav-link '>
                          <span className=' me-2'>
                            <i class='bi bi-envelope-fill'></i>
                            <span className='nav-items ms-2'>mailBox</span>
                          </span>
                        </Link>
                      </li>
                      <li>
                        <Link to='#' className='nav-link '>
                          <span className=' me-2'>
                            <i class='bi bi-cart-check-fill'></i>
                            <span className='nav-items ms-2'>Carts</span>
                          </span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  )
}

export default SideBar
