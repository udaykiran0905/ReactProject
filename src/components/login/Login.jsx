import React from 'react';
import '../login/Login.css';
import { FaFacebookF, FaGoogle, FaTwitter } from 'react-icons/fa';

export default function Login({
  showPreview,
  setShowPreview,
  modal,
  setModal,
}) {
  const openLogin = () => {
    setShowPreview(false);
    setModal('login');
  };

  const openSignup = () => setModal('signup');
  const backToLogin = () => setModal('login');

  const closeAll = () => {
    setModal(null);
    setShowPreview(false);
  };

  return (
    <>
      {showPreview && modal === null && (
        <div
          className="bg-dark border border-secondary text-white p-3 rounded shadow-lg"
          style={{ position: 'absolute',top: '70px',  right: '40px', width: '300px',zIndex: 2000,}}>
          <p className="mb-0 text-white">Hello!</p>
          <p className="text-white opacity-50">Access account and manage orders</p>
         <button className="btn btn-outline-light btn-sm w-50 opacity-75" onClick={openLogin}>
            Login/Signup</button>

          <hr className="border-secondary-subtle" />
          <p className="text-white opacity-50">Please Login</p>
        </div>
      )}

      {modal === 'login' && (
        <div className="modal-backdrop fade show" style={{ zIndex: 1050 }} onClick={closeAll} >
          <div className="modal d-block"  onClick={(e) => e.stopPropagation()} style={{ zIndex: 1055 }}>
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content bg-dark border border-secondary-subtle w-75">
                <div className="modal-body p-4 position-relative ">
                  <button type="button" className="btn-close btn-close-white position-absolute top-0 end-0 mt-2 me-2" onClick={closeAll} />
                  <h4 className="text-white mb-3">Login</h4>
                   <div className="d-flex mb-3">
                    <p className="text-white me-1 opacity-50">New to Tech-Shop?</p>
                    <button className="btn btn-link text-white text-decoration-none btn-create p-0 "
                      onClick={openSignup}
                    >Create an account </button>
                  </div>
                    <form onSubmit={(e) => e.preventDefault()}>
                    <div className="mb-3">
                      <input type="email" className="form-control bg-dark border-secondary-subtle text-white" placeholder="Email" required/>
                    </div>
                    <div className="mb-3">
                      <input type="password" className="form-control bg-dark border-secondary-subtle text-white"placeholder="Password"
                        required
                      />
                    </div>
                    <div className="d-grid">
                      <button type="submit" className="btn btn-danger">Login</button>
                    </div>
                     <div className="text-center mt-3 text-white">
                      __________ Or Login With ___________
                    </div>

                    <div className="d-flex justify-content-between gap-2 mt-3">
                      <button type="button" className="btn btn-primary flex-fill">Facebook</button>
                      <button type="button" className="btn btn-danger flex-fill"> Google </button>
                      <button type="button" className="btn btn-info text-white flex-fill">Twitter</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {modal === 'signup' && (
        <div className="modal-backdrop fade show" style={{ zIndex: 1050 }} onClick={closeAll}>
          <div className="modal d-block" onClick={(e) => e.stopPropagation()} style={{ zIndex: 1055 }}>
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content bg-dark border border-secondary-subtle w-75">
                <div className="modal-body p-4 position-relative">
                  <button type="button" className="btn-close btn-close-white position-absolute top-0 end-0 mt-2 me-2" onClick={closeAll} />
                  <h4 className="text-white mb-3">Sign Up</h4>
                   <div className="d-flex mb-3">
                    <p className="text-white me-1 opacity-50">Already have an account?</p>
                    <button className="btn btn-link text-white text-decoration-none btn-login p-0 " onClick={backToLogin} >
                      Login</button>
                  </div>

                  <form onSubmit={(e) => e.preventDefault()}>
                    <div className="mb-3">
                      <input type="text" className="form-control bg-dark border-secondary-subtle text-white" placeholder="Username" required />
                    </div>
                    <div className="mb-3">
                      <input type="email" className="form-control bg-dark border-secondary-subtle text-white" placeholder="Email" required />
                    </div>
                    <div className="mb-3">
                      <input type="password" className="form-control bg-dark border-secondary-subtle text-white" placeholder="Password" required  />
                    </div>
                    <div className="mb-3">
                      <input  type="password"  className="form-control bg-dark border-secondary-subtle text-white" placeholder="Confirm Password"  required />
                    </div>

                    <div className="d-grid">
                      <button type="submit" className="btn btn-danger"> Sign Up</button>
                    </div>

                    <div className="text-center mt-3 text-white">
                      _________ Or Sign Up With _________
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}