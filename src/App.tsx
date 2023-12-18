import Logo from "./icon.svg";
import Container from "./components/Container";
import Card from "./components/Card";
export default function App () {
  return (
    <>
      <header>
        <Container>
            <a href="/">
              <img src={Logo} alt="Logo"/>
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
    </>
  )
}

