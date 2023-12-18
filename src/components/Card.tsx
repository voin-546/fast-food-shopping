export default function Card () {
    const Image = (props: any) => {
        return (
          <img src={props.src} alt={props.alt} />
        )
    }
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
        <CardItem>
            <Image src="../images.cards/card 1.png" alt="Pizza"/>
            <CardBody></CardBody>
        </CardItem>
    )
}