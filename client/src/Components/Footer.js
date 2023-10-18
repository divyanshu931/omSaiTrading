import "../Components/Style-Footer.css";
import AOS from "aos";
import "aos/dist/aos.css";

import {
  Facebook,
  Instagram,
  WhatsApp,
  Email,
  LinkedIn,
  Share,
  Twitter,
  Phone,
} from "@mui/icons-material";

const Footer = () => {
  const openWhatsApp = () => {
    const phoneNumber = "9717430487";
    window.open(`https://wa.me/${phoneNumber}`, "_blank");
  };

  AOS.init();
  
  return (
    <>
      <div className="container-fluid footer-container">
        <div className="row">
          {/*---Footer Left Section---*/}

          <div
            className="col-lg-6 ms-lg-5 my-5"
            data-aos="zoom-in-up"
            data-aos-duration="1000"
          >
            <div className="ms-lg-5 mb-3 d-flex justify-content-center">
              <h1 className="text-white over"> Share us </h1>
            </div>

            {/* Icons Div */}
            <div className="d-flex difference-line justify-content-center">
              <div
                className="mx-5 pe-4 share-btn mb-4 text-white footer-logo"
                onClick={() =>
                  window.open(
                    "https://www.facebook.com/sharer/sharer.php?u=https://omsaitrading.netlify.app/",
                    "_blank"
                  )
                }
              >
                <Share />
              </div>
              <div
                className="me-5 text-white footer-logo"
                onClick={() =>
                  window.open(
                    `https://wa.me/?text=https://omsaitrading.netlify.app/`,
                    "_blank"
                  )
                }
              >
                <WhatsApp />
              </div>
              <div
                className="me-5 text-white footer-logo"
                onClick={() =>
                  window.open(
                    "https://www.facebook.com/sharer/sharer.php?u=https://omsaitrading.netlify.app/",
                    "_blank"
                  )
                }
              >
                <Facebook />
              </div>
              <div
                className="text-white footer-logo"
                onClick={() =>
                  window.open(
                    `mailto:?subject=Discover Something Exciting!&body=Hi there! I found this amazing website and thought you might enjoy it too. Check it out here: https://omsaitrading.netlify.app/`,
                    "_blank"
                  )
                }
              >
                <Email />
              </div>
            </div>

            <div className="d-flex justify-content-center mt-4">
              <h2 className="text-white over">Social Media</h2>
            </div>

            <div className="d-flex justify-content-evenly mt-3 text-white footer-logo">
              <Facebook
                onClick={() =>
                  window.open("https://www.facebook.com/divyanshu", "_blank")
                }
              />
              <LinkedIn
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/divyanshu-tomar-0b6380232",
                    "_blank"
                  )
                }
              />
              <Instagram
                onClick={() =>
                  window.open(
                    "https://www.instagram.com/diyanshutomar943",
                    "_blank"
                  )
                }
              />
              <Twitter
                onClick={() =>
                  window.open("https://twitter.com/omsaitrading", "_blank")
                }
              />
            </div>
          </div>

          {/* Footer right Section */}
          <div
            className="col-lg-5 my-lg-5 ms-lg-4"
            data-aos="zoom-in-up"
            data-aos-duration="1000"
          >
            <div className="d-flex justify-content-center ">
              <h2 className="text-white over">Contact Information</h2>
            </div>
            <div className="d-flex justify-content-center mt-2">
              <p className="text-white ">
                <strong>Address:</strong> 2117, 1st floor, Chah Indara, Bhagirath place, Chandani chowk, Delhi 110006
              </p>
            </div>
            <div className="d-flex justify-content-center mt-3 text-white footer-logo">
              <Phone />
              <p className="text-white ps-2">
                <strong>Telephone Number:</strong> 
                <span className="data-text pointer-cursor" onClick={() => { window.location.href = "tel:011-23873590"; }}>
                  011-23873590
                </span>, 
                <span className="data-text pointer-cursor" onClick={() => { window.location.href = "tel:011-42316081"; }}>
                  011-42316081
                </span>
              </p>
            </div>
            <div className="d-flex mt-1 justify-content-center mt-2 text-white footer-logo"
              onClick={() => window.open("mailto:omsaitrading.ostc@gmail.com", "_blank")}
              style={{ cursor: "pointer" }}
            >
              <Email />
              <p className="text-white ps-2">
                <strong>Email:</strong>
                <span className="data-text pointer-cursor">omsaitrading.ostc@gmail.com</span>
              </p>
            </div>
            <div className="d-flex mt-1 justify-content-center mt-2 text-white footer-logo"
              onClick={openWhatsApp}
              style={{ cursor: "pointer" }}
            >
              <WhatsApp />
              <p className="text-white ps-2">
                <strong>Whatsapp Number:</strong>
                <span className="data-text pointer-cursor">+91 9717430487</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
