import React from 'react'

function Card1 ({
  amount,
  usage,
  userCount,
  storageCapacity,
  publicProject,
  access,
  privateProject,
  phoneSupport,
  subdomain,
  status,
  textMuted,
  textUnMuted,
  checkIcon,
  timesIcon
}) {
  return (
    <>
      <div className='card mb-5 mb-lg-0'>
        <div className='card-body'>
          <h5 className='card-title text-muted text-uppercase text-center'>
            {usage}
          </h5>
          <h6 className='card-price text-center'>
            ${amount}
            <span className='period'>/month</span>
          </h6>
          <hr />
          <ul className='fa-ul'>
            <li>
              <span className='fa-li'>
                <i className='fas fa-check'></i>
              </span>
              <strong>{userCount}</strong>
            </li>
            <li>
              <span className='fa-li'>
                <i className='fas fa-check'></i>
              </span>
              {storageCapacity}
            </li>
            <li>
              <span className='fa-li'>
                <i className='fas fa-check'></i>
              </span>
              {publicProject}
            </li>
            <li>
              <span className='fa-li'>
                <i className='fas fa-check'></i>
              </span>
              {access}
            </li>
            <li className={amount == 0 ? textMuted : textUnMuted}>
              <span className='fa-li'>
                <i className={amount == 0 ? timesIcon : checkIcon}></i>
              </span>
              {privateProject}
            </li>
            <li className={amount == 0 ? textMuted : textUnMuted}>
              <span className='fa-li'>
                <i className={amount == 0 ? timesIcon : checkIcon}></i>
              </span>
              {phoneSupport}
            </li>
            <li className={amount == 0 ? textMuted : textUnMuted}>
              <span className='fa-li'>
                <i className={amount == 0 ? timesIcon : checkIcon}></i>
              </span>
              {subdomain}
            </li>
            <li
              className={amount == 9 || amount == 0 ? textMuted : textUnMuted}
            >
              <span className='fa-li'>
                <i
                  className={amount == 9 || amount == 0 ? timesIcon : checkIcon}
                ></i>
              </span>
              {status}
            </li>
          </ul>
          <div className='d-grid'>
            <a href='#' className='btn btn-primary text-uppercase'>
              Button
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Card1
