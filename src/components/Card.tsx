import Card1 from "../images/cards/card 1.png";
import Card2 from "../images/cards/card 2.png";
import Card3 from "../images/cards/card 3.png";
import Card4 from "../images/cards/card 4.png";
export default function Card () {
    const CardBody = (props: any) => {
        return (
            <div className="card-body">{props.children}</div>
        )
    }
    const CardItem = (props: any) => {
        return (
            <div className="card">{props.children}</div>
        )
    } 
    return (
        <>
            <CardItem>
                <img src={Card1} alt="Meal"/>
                <CardBody>
                    <h4>Chicken Paella</h4>
                    <p>We just don't make and sell food.Good food warms.</p>
                </CardBody>
            </CardItem>
            <CardItem>
                <img src={Card2} alt="Meal" />
                <CardBody>
                    <h4>Taco Del Mar</h4>
                    <p>Taco Del Mar brings the best out of Mexican cuisine with fresh.</p>
                </CardBody>
            </CardItem>
            <CardItem>
                <img src={Card3} alt="Meal" />
                <CardBody>
                    <h4>Bon Au Pain</h4>
                    <p>Bon Au Pain is a pioneer in the healthy fast food scene.</p>
                </CardBody>
            </CardItem>
            <CardItem>
                <img src={Card4} alt="Meal" />
                <CardBody>
                    <h4>Pizza Hut</h4>
                    <p>Although the Pizza Hut Menu Prices have tumbled over the years.</p>
                </CardBody>
            </CardItem>            
        </>
    )
}