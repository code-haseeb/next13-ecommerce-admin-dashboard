import { Component } from "react";
// import newsletterimg from "";
import "./Modal.css";
class Modal extends Component {
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
            onClick={() => {
              console.log("Close overlay clicked"); // Add this line
              this.closeModal();
            }}
          ></div>

          <div className="modal-content">
            <button
              className="modal-close-btn"
              data-modal-close
              onClick={() => {
                console.log("Close button clicked"); // Add this line
                this.closeModal();
              }}
            >
              Close
            </button>

            <div className="newsletter-img">
              <img
                src="https://unsplash.com/photos/xDQKvPjxtxo"
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
