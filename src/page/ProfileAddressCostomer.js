import React from 'react'
import DashboardMenu from '../components/DashboardMenu'
import Navbar from '../components/Navbar'
import ModalAddAddress from '../components/ModalAddAddress'
import CardAddress from '../components/CardAddress'

export default function ProfileAddressCostomer() {
  return (
    <>
      <Navbar />
      <div className="fash-dashboard-body d-flex">
          <DashboardMenu />
          <div className="fash-dashboard-content flex-fill">
          <div className="fash-control-content h-fill bc-white d-flex flex-column gap-4">
            <div className="d-flex flex-column gap-2">
                <span className="fash-h4 fw-4">Choose another address</span>
                <span className="fash-h6 c-dark">Manage your shipping address</span>
            </div>
            <span className="fash-line"></span>
            <div className="d-flex p-3">
              <div className="d-flex flex-column gap-4 w-100">
                <ModalAddAddress />
                <CardAddress address='wvsvbaivbuvbsvbruvbsjvbysrvhj' name='budi' key={1} />
              </div>
          </div>
          </div>
          </div>
      </div>
    </>
  )
}
