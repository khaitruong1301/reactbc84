import React from 'react'

const BT_Modal = (props) => { //lấy props state modal từ component cha truyền vào 
    const {dataModal} = props;
  return (
    <div>
      <div>
  {/* Modal trigger button */}
  <button type="button" className="btn btn-primary btn-lg" data-bs-toggle="modal" data-bs-target="#modalId">
    Launch
  </button>
  {/* Modal Body */}
  {/* if you want to close by clicking outside the modal, delete the last endpoint:data-bs-backdrop and data-bs-keyboard */}
  <div className="modal fade" id="modalId" tabIndex={-1} data-bs-backdrop="static" data-bs-keyboard="false" role="dialog" aria-labelledby="modalTitleId" aria-hidden="true">
    <div className="modal-dialog modal-dialog-scrollable modal-dialog-centered modal-lg" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="modalTitleId">
            {dataModal.name}
          </h5>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
        </div>
        <div className="modal-body">
            <img src={dataModal.img} alt='...' className='w-100' />
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
            Close
          </button>
          <button type="button" className="btn btn-primary">Save</button>
        </div>
      </div>
    </div>
  </div>
  {/* Optional: Place to the bottom of scripts */}
</div>

        
    </div>
  )
}

export default BT_Modal