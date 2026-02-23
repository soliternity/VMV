import { useNavigate } from "react-router-dom";
import "./Landing.css";

export default function Landing() {
  const navigate = useNavigate();
  return (
    <>
      <header>
        <div class="logo">
          <i class="fas fa-car"></i> JEFFIX
        </div>
        <nav>
          <a href="#About">About Us</a>
          <a href="#Features">Features</a>
          <a href="#Contact">Contact</a>
          <button onClick={() => navigate("/login")}>Signin</button>
        </nav>
      </header>

      <main>
        <section class="app">
          <h1>Advance AI Car Diagnostics</h1>
          <p>
            Instantly identify issues with your Toyota Vios Gen 3 — powered by <br />
            cutting-edge AI technology for accurate results.
          </p>
          <div class="app-buttons">
            <a href="#Features">
              <i class="fas fa-info-circle"></i>Learn More
            </a>
            <button class="app-button">
              <i class="fas fa-download"></i>Download
            </button>
          </div>
        </section>

        <section class="About">
          <h2>About JEFFIX Diagnostics</h2>
          <p>
            JEFFIX Car Diagnostics is built specifically for Toyota Vios Gen 3
            owners who want fast, reliable, and AI-powered insights into their
            vehicle's damage. Our system combines automotive expertise with
            artificial intelligence to provide accurate diagnostics. Whether
            your car won't start, makes strange noises, or shows warning lights,
            our system helps you understand the cause before stepping into the
            repair shop, saving you time and money.
          </p>
        </section>

        <section class="Features">
          <h2>Why Choose JEFFIX?</h2>
          <div class="feature-column">
            <i class="fa-solid fa-microchip"></i>
            <h3>AI-Powered Analysis</h3>
            <p>
              Our advanced system uses machine learning to analyze your input
              and predict car issues with 95% accuracy.
            </p>
          </div>

          <div class="feature-column">
            <i class="fa-solid fa-car-burst"></i>
            <h3>Detailed Issue Reports</h3>
            <p>
              Receive comprehensive breakdowns of problems, severity levels, and
              recommended fixes with estimated costs.
            </p>
          </div>

          <div class="feature-column">
            <i class="fa-solid fa-bell"></i>
            <h3>Maintenance Alerts</h3>
            <p>
              Receive timely reminders for upcoming services, repairs, and
              checkups to keep your vehicle in top condition.
            </p>
          </div>
        </section>
        <section>
          <h2>Disclaimer</h2>
          <p>
            This page is only for school or learning purposes. It does not copy
            or break any copyrights.
          </p>
        </section>
      </main>

      <footer>
        <div class="footer-column">
          <h3>JEFFIX</h3>
          <p>
            Advanced AI-powered car diagnostics for Toyota Vios Gen 3 owners.
          </p>
          <div class="social-links">
            <a href="#">
              <i class="fab fa-facebook-f"></i>
            </a>
            <a href="#">
              <i class="fab fa-twitter"></i>
            </a>
            <a href="#">
              <i class="fab fa-instagram"></i>
            </a>
            <a href="#">
              <i class="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>

        <div class="footer-column">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <a href="#About">About Us</a>
            </li>
            <li>
              <a href="#Features">Features</a>
            </li>
            <li>
              <a href="Contact">Contact</a>
            </li>
          </ul>
        </div>

        <div class="footer-column">
          <h3>Support</h3>
          <ul>
            <li>
              <a href="">Help Center</a>
            </li>
            <li>
              <a href="">Privacy Policy</a>
            </li>
            <li>
              <a href="">Terms of Service</a>
            </li>
            <li>
              <a href="">Contact Us</a>
            </li>
          </ul>
        </div>

        <div class="Copyright">
          <p>
            © 2025 JEFFIX Car Diagnostics. All rights reserved. Academic
            Purposes Only.
          </p>
        </div>
      </footer>
    </>
  );
}
