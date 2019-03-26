import React, { Fragment } from 'react';
import headerBackground from '../../theme_styles/img/header-13.jpg'
import vidImg from '../../theme_styles/img/video-1.jpg';
import textImg from '../../theme_styles/img/card-image-background-2.jpg'
import noteImg from '../../theme_styles/img/header-inner-2.jpg';

const landing = () => (
  <Fragment>
    <section className="bg-dark height-70 overlay-dark overlay-top">
      <img src={headerBackground} alt="Background Image" className="bg-image bg-image opacity-20" />
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <div className="col-lg-5 mb-3 mb-lg-0">
            <h1 className="display-3 text-white font-alt-1">Blockhain &amp; Simple.</h1>
            <p className="lead text-white">Interact with a Decentralized application (DApp) and experience why blockchain is here to make things simpler.</p> <a href="https://wallet.dapp-ejemplo.com" className="btn btn-lg btn-primary">Get Started</a>
          </div>
          <div className="col-lg-7">
            <div className="video-cover rounded shadow-lg">
              <img  src={vidImg} className="bg-image" />
              <div className="embed-responsive embed-responsive-16by9">
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="p-0 bg-white">
      <img src={noteImg}  className="bg-image position-md-absolute" />
      <div className="container-fluid p-0">
        <div className="row no-gutters">
          <div className="col-md-7 col-lg-6 col-xl-5">
            <div className="card p-0 p-md-3 m-3">
              <div className="card-body p-0 p-md-4">
                <span className="h2 d-block">Blockchain in a few words</span>
                <p className="lead">A network, of computers accross the globe, keeps a distributed ledger that tracks <strong>every transaction</strong>. No reversing, no bouncing, no spoofing; a transaction either gets confirmed or it doesn't.<br/>
                This makes for an incredibly difficult system to cheat on. No need to trust just on our word on this, mathematics back it all backup!</p> <a href="#" className="btn btn-primary btn-lg">Learn More</a>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div className="container">
        <div className="row justify-content-around align-items-center">
          <div className="col-sm-6 col-lg-4 mb-3 mb-sm-0">
            <img className="rounded" src={textImg}  />
          </div>
          <div className="col-sm-6 col-lg-5">
            <span className="h5">Experiencing something is the best way to learn</span>
            <span className="h2 d-block mt-3 mt-md-4">Get a glimpse into what's coming next for digital transactions. By selling and transfering your own properties in seconds instead of weeks.</span>
          </div>
        </div>
      </div>
    </section>
    <footer className="bg-dark spacer-y-3">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-auto mb-3 mb-md-0"> <a href="https://www.celera.com.gt">
            <img src="assets/img/logo-white.svg" alt="Celera" />
          </a>

          </div>
          <div className="col-12 col-md-auto">
            <ul className="list-unstyled d-md-flex mb-0">
              <li className="mx-md-2"><a href="#" className="text-white">Product Features</a>
              </li>
              <li className="mx-md-2"><a href="#" className="text-white">Why Celera?</a>
              </li>
              <li className="mx-md-2"><a href="#" className="text-white">Customers</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="row justify-content-between align-items-center mt-3 mt-md-4">
          <div className="col-lg-auto col-12 order-lg-2">
            <ul className="list-social-links d-flex mb-lg-0">
              <li className="text-white"><a href="#"><i className="socicon-facebook"></i></a>
              </li>
              <li className="text-white"><a href="#"><i className="socicon-twitter"></i></a>
              </li>
              <li className="text-white"><a href="#"><i className="socicon-youtube"></i></a>
              </li>
              <li className="text-white"><a href="#"><i className="socicon-linkedin"></i></a>
              </li>
              <li className="text-white"><a href="#"><i className="socicon-instagram"></i></a>
              </li>
            </ul>
          </div>
          <div className="col order-lg-1">
            <span className="text-small text-white opacity-50">&copy; 2019 Celera, S.A <br/> Made in <span role="img" aria-label="Guatemala-flag">🇬🇹</span></span>
          </div>
        </div>
      </div>
    </footer>
  </Fragment>
)

export default landing;
