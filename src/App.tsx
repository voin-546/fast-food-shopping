import Logo from "./icon.svg";
import Container from "./components/Container";
import Card from "./components/Card";
import Burger from "./images/burger.png";
import Clients from "./images/clients.png";
import Facebook from "./images/social_links/facebook.png";
import Instagram from "./images/social_links/instagram.png";
import Twitter from "./images/social_links/twitter.png";
import Linkedin from "./images/social_links/linkedin.png"
export default function App() {
  return (
    <>
      <header>
        <Container>
          <a href="/">
            <img src={Logo} alt="Logo" />
          </a>
          <nav>
            <ul>
              <li><a href="/" className="active">Home</a></li>
              <li><a href="/pages">Pages</a></li>
              <li><a href="/offer">Our Offer</a></li>
              <li><a href="/pricing">Pricing</a></li>
              <li><a href="/shop">Shop</a></li>
            </ul>
            <a href="/signup" className="btn">Order Now</a>
          </nav>
        </Container>
      </header>
      <section className="hero">
        <Container>
          <div className="text">
            <p className="lorem">Fast Food Burgers</p>
            <h1>The fastest food, for instant hunger.</h1>
            <p className="ipsum">Some food has looked so awful that it's looked like something that the dog's brought home, yet after one mouthful I've been left eating my thoughts, my words & my food and gone back for seconds.</p>
            <a href="/signup">Order Now</a>
          </div>
        </Container>
      </section>
      <section className="cards">
        <Container>
          <Card></Card>
        </Container>
      </section>
      <section className="burger">
        <Container>
          <img src={Burger} alt="Burger" />
          <div className="text">
            <h1>Burger King</h1>
            <p>Together with McDonald’s, Burger King has grown to become synonymous with burgers in the US.</p>
            <h4>$6<span>$8</span></h4>
            <a href="/signup">Order Now</a>
          </div>
        </Container>
      </section>
      <section className="pricing">
        <Container>
          <div className="item">
            <div>
              <h2>Dairy Queen</h2>
              <p>Dairy Queen is one of the biggest fast-food.</p>
              <h4>$4<span>$6</span></h4>
              <a href="/signup">Order Now</a>
            </div>
          </div>
          <div className="item">
            <div>
              <h2>Pizza Hut</h2>
              <p>Although the Pizza Hut Menu Prices .</p>
              <h4>$3<span>$7</span></h4>
              <a href="/signup">Order Now</a>
            </div>
          </div>
          <div className="item">
            <div>
              <h2>Burger King</h2>
              <p>Although the Pizza Hut Menu Prices.</p>
              <h4>$5<span>$6</span></h4>
              <a href="/signup">Order Now</a>
            </div>
          </div>
          <div className="item">
            <div>
              <h2>Papa John's</h2>
              <p>Papa John’s is one of the most popular fast-food.</p>
              <h4>$6<span>$8</span></h4>
              <a href="/signup">Order Now</a>
            </div>
          </div>
        </Container>
      </section>
      <section className="clients">
        <Container>
          <img src={Clients} alt="Clients" />
          <div className="text">
            <svg xmlns="http://www.w3.org/2000/svg" width="47" height="47" viewBox="0 0 47 47" fill="none">
              <circle opacity="0.1" cx="25.5" cy="21.6738" r="21.5" fill="#F6762C" />
              <path d="M12.8079 14.8666H4.26931C3.08325 14.8666 2.07531 15.2817 1.24501 16.1117C0.415108 16.9418 0 17.9497 0 19.1359V27.6742C0 28.8602 0.414874 29.868 1.24501 30.698C2.07523 31.5279 3.08348 31.9432 4.26931 31.9432H9.25006C9.84281 31.9432 10.3469 32.1508 10.762 32.5658C11.1772 32.9805 11.3846 33.4848 11.3846 34.078V34.7891C11.3846 36.3605 10.8286 37.7017 9.71696 38.8136C8.6052 39.9251 7.26377 40.481 5.6922 40.481H4.26931C3.88364 40.481 3.55023 40.6222 3.26845 40.9037C2.98691 41.1851 2.84602 41.5188 2.84602 41.9042V44.7507C2.84602 45.1355 2.98691 45.4698 3.26845 45.7513C3.55046 46.0327 3.88356 46.174 4.26931 46.174H5.69228C7.2341 46.174 8.70536 45.8734 10.1063 45.2732C11.5071 44.673 12.7189 43.8611 13.7418 42.8383C14.7645 41.8153 15.5761 40.6038 16.1764 39.2028C16.7767 37.802 17.0769 36.3308 17.0769 34.7892V19.1356C17.0769 17.9494 16.6618 16.9416 15.8318 16.1116C15.0018 15.2816 13.9937 14.8666 12.8079 14.8666Z" fill="#F6762C" />
              <path d="M35.7546 16.1115C34.9247 15.2816 33.9167 14.8665 32.7306 14.8665H24.1923C23.0062 14.8665 21.9983 15.2816 21.1683 16.1115C20.3384 16.9418 19.9235 17.9496 19.9235 19.1358V27.6741C19.9235 28.8601 20.3384 29.8679 21.1683 30.6979C21.9983 31.5278 23.0063 31.9431 24.1923 31.9431H29.1731C29.7658 31.9431 30.2703 32.1507 30.6854 32.5656C31.1 32.9806 31.3079 33.4846 31.3079 34.0779V34.789C31.3079 36.3604 30.7519 37.7015 29.64 38.8135C28.5284 39.925 27.1872 40.4809 25.6155 40.4809H24.1923C23.8069 40.4809 23.4732 40.6221 23.1918 40.9036C22.9101 41.185 22.769 41.5187 22.769 41.9041V44.7506C22.769 45.1354 22.9101 45.4697 23.1918 45.7512C23.4731 46.0326 23.8069 46.1739 24.1923 46.1739H25.6155C27.1571 46.1739 28.6283 45.8732 30.0294 45.2731C31.43 44.6729 32.6416 43.861 33.6646 42.8381C34.6874 41.8152 35.4996 40.6033 36.0995 39.2027C36.6997 37.8022 37.0001 36.3307 37.0001 34.7891V19.1354C36.9998 17.9493 36.5851 16.9415 35.7546 16.1115Z" fill="#F6762C" />
            </svg>
            <p>Thanks a lot for the prompt service. Really appreciate. Excellence taste in Every Bite.Add a joy of best Taste. Foodie Moments.</p>
            <h3>Adele A. McNeill</h3>
            <small>AMIRICAN</small>
          </div>
        </Container>
      </section>
      <section className="download">
        <Container>
          <h1>Download Our Menu</h1>
          <a href="#!">Download</a>
        </Container>
      </section>
      <footer>
        <Container>
          <div className="footer-col">
            <a href="/" className="logo">
              <img src={Logo} alt="Logo" />
            </a>
            <ul>
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="13" viewBox="0 0 12 13" fill="none">
                  <path d="M10.9453 1.17383H1.05469C0.473859 1.17383 0 1.64717 0 2.22852V9.25977C0 9.83914 0.47175 10.3145 1.05469 10.3145H10.9453C11.5247 10.3145 12 9.8427 12 9.25977V2.22852C12 1.64914 11.5282 1.17383 10.9453 1.17383ZM10.7997 1.87695L6.02236 6.65429L1.20373 1.87695H10.7997ZM0.703125 9.11417V2.37076L4.08935 5.72795L0.703125 9.11417ZM1.2003 9.61133L4.58866 6.22297L5.77594 7.40005C5.91337 7.53631 6.13516 7.53587 6.27204 7.39897L7.42969 6.24132L10.7997 9.61133H1.2003ZM11.2969 9.11415L7.92687 5.74414L11.2969 2.37411V9.11415Z" fill="#F6762C" />
                </svg>
                <a href="#!">fastfood_usa@gmail.com</a>
              </li>
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="13" viewBox="0 0 12 13" fill="none">
                  <g clip-path="url(#clip0_1_58)">
                    <path d="M6 0.173828C2.69156 0.173828 0 2.86539 0 6.17383C0 9.48227 2.69156 12.1738 6 12.1738C9.30844 12.1738 12 9.48227 12 6.17383C12 2.86539 9.30844 0.173828 6 0.173828ZM5.64844 3.1189C5.11359 3.09592 4.58414 3.02075 4.07858 2.89853C4.15933 2.70718 4.24695 2.52344 4.34143 2.3493C4.72906 1.63501 5.20496 1.13376 5.64844 0.952209V3.1189ZM5.64844 3.82257V5.82227H3.45255C3.48349 5.04178 3.61652 4.26697 3.83652 3.56219C4.41953 3.70905 5.03156 3.79794 5.64844 3.82257ZM5.64844 6.52539V8.52509C5.03156 8.54971 4.41953 8.63861 3.83652 8.78546C3.61652 8.08069 3.48349 7.30588 3.45255 6.52539H5.64844ZM5.64844 9.22876V11.3954C5.20496 11.2139 4.72906 10.7126 4.34143 9.99835C4.24695 9.82422 4.15933 9.64047 4.07858 9.44913C4.58414 9.3269 5.11349 9.25174 5.64844 9.22876ZM6.35156 9.22876C6.88641 9.25174 7.41586 9.3269 7.92142 9.44913C7.84067 9.64047 7.75305 9.82422 7.65857 9.99835C7.27094 10.7126 6.79504 11.2139 6.35156 11.3954V9.22876ZM6.35156 8.52509V6.52539H8.54745C8.51651 7.30588 8.38348 8.08069 8.16348 8.78546C7.58047 8.63861 6.96844 8.54971 6.35156 8.52509ZM6.35156 5.82227V3.82257C6.96844 3.79794 7.58047 3.70905 8.16348 3.56219C8.38348 4.26697 8.51651 5.04178 8.54745 5.82227H6.35156ZM6.35156 3.1189V0.952209C6.79504 1.13376 7.27094 1.63501 7.65857 2.3493C7.75305 2.52344 7.84067 2.70718 7.92142 2.89853C7.41586 3.02075 6.88641 3.09592 6.35156 3.1189ZM8.27655 2.01395C8.10049 1.68948 7.90924 1.40347 7.70764 1.15948C8.41058 1.39954 9.04733 1.7836 9.58282 2.27615C9.2774 2.43976 8.94827 2.58185 8.60202 2.70059C8.50378 2.46201 8.3952 2.23248 8.27655 2.01395ZM3.72345 2.01395C3.6048 2.23248 3.49622 2.46201 3.39798 2.70059C3.05173 2.58185 2.7226 2.43967 2.41718 2.27615C2.95267 1.7836 3.58942 1.39954 4.29236 1.15948C4.09076 1.40347 3.8996 1.68939 3.72345 2.01395ZM3.16013 3.36142C2.92017 4.12909 2.77908 4.96597 2.74869 5.82227H0.715118C0.790375 4.6796 1.22919 3.63461 1.9173 2.80276C2.29916 3.02176 2.71738 3.20908 3.16013 3.36142ZM2.74869 6.52539C2.77908 7.38177 2.92017 8.21857 3.16013 8.98624C2.71738 9.13858 2.29916 9.3259 1.9173 9.54489C1.22919 8.71304 0.790375 7.66806 0.715118 6.52539H2.74869ZM3.39798 9.64706C3.49622 9.88565 3.6048 10.1152 3.72345 10.3337C3.8996 10.6582 4.09076 10.9442 4.29236 11.1882C3.58942 10.9481 2.95267 10.5641 2.41727 10.0715C2.7225 9.90799 3.05173 9.76581 3.39798 9.64706ZM8.27655 10.3337C8.3952 10.1152 8.50378 9.88565 8.60202 9.64706C8.94827 9.76581 9.2774 9.90799 9.58282 10.0715C9.04733 10.5641 8.41058 10.9481 7.70764 11.1882C7.90924 10.9442 8.1004 10.6583 8.27655 10.3337ZM8.83987 8.98624C9.07983 8.21857 9.22092 7.38168 9.25131 6.52539H11.2849C11.2096 7.66806 10.7708 8.71304 10.0827 9.54489C9.70084 9.3259 9.28262 9.13858 8.83987 8.98624ZM9.25131 5.82227C9.22092 4.96588 9.07983 4.12909 8.83987 3.36142C9.28262 3.20908 9.70084 3.02176 10.0827 2.80276C10.7708 3.63461 11.2096 4.6796 11.2849 5.82227H9.25131Z" fill="#F6762C" />
                  </g>
                  <defs>
                    <clipPath id="clip0_1_58">
                      <rect width="12" height="12" fill="white" transform="translate(0 0.173828)" />
                    </clipPath>
                  </defs>
                </svg>
                <a href="#!"> www.fastfood_usa.com</a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Our Menu</h4>
            <ul>
                <li><a href="#!">Breakfast</a></li>
                <li><a href="#!">Lunce</a></li>
                <li><a href="#!">Dinner</a></li>
              </ul>
          </div>
          <div className="footer-col">
            <h4>Information</h4>
            <ul>
              <li><a href="#!">About Us</a></li>
              <li><a href="#!">Testimonial</a></li>
              <li><a href="#!">Event</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Useful Links</h4>
            <ul>
              <li><a href="#!">Services</a></li>
              <li><a href="#!">Support</a></li>
              <li><a href="#!">Conditions</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Social Handles</h4>
            <div className="social-links">
              <a href="#!">
                <img src={Facebook} alt="Facebook icon"/>
              </a>
              <a href="#!">
                <img src={Twitter} alt="Twitter Icon"/>
              </a>
              <a href="#!">
                <img src={Instagram} alt="Instagram Icon" />
              </a>
              <a href="#!">
                <img src={Linkedin} alt="Linkedin Icon"/>
              </a>
            </div>
          </div>
        </Container>
      </footer>
    </>
  )
}

