import { Component } from "react";
import newsletterimg from "../assets/images/newsletter.png";
import "./Modal.css";
class Modal extends Component {
  // Add constructor and state if needed
  // Define functions for opening and closing the modal
  // Render the modal HTML structure
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false,
    };
  }
  openModal = () => {
    this.setState({ isModalOpen: true });
  };

  closeModal = () => {
    this.setState({ isModalOpen: false });
  };
  render() {
    return (
      <div>
        {/* Overlay */}
        <div className="overlay" data-overlay></div>

        {/* Modal */}
        <div
          className={`modal ${this.state.isModalOpen ? "active" : ""}`}
          data-modal
        >
          <div
            className="modal-close-overlay"
            data-modal-overlay
            onClick={this.closeModal}
          ></div>

          <div className="modal-content">
            <button
              className="modal-close-btn"
              data-modal-close
              onClick={this.closeModal}
            >
              Close
              {/* <ion-icon name="close-outline"></ion-icon> */}
            </button>

            <div className="newsletter-img">
              <img
                src={newsletterimg}
                alt="subscribe newsletter"
                width={400}
                height={400}
              />
            </div>

            <div className="newsletter">
              <form action="#">
                <div className="newsletter-header">
                  <h3 className="newsletter-title">Subscribe Newsletter.</h3>
                  <p className="newsletter-desc">
                    Subscribe the <b>Anon</b> to get the latest products and
                    discount updates.
                  </p>
                </div>

                <input
                  type="email"
                  name="email"
                  className="email-field"
                  placeholder="Email Address"
                  required
                />

                <button type="submit" className="btn-newsletter">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
