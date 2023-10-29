import { Carousel } from "react-bootstrap";

const CarouselHome = () => {
    return(
    <>
     <Carousel>
      <Carousel.Item interval={3000}>
        <img  
          className="d-block w-100"
          style={{maxHeight: "500px", objectFit: 'cover'}}
          src="https://3.bp.blogspot.com/-Hl5e-hKCBSI/Vxy5hFMhrEI/AAAAAAADARg/ZaGhPuNX0QQqyDY78nYkFJIVaAyFwrXYwCLcB/s1600/los%2Bmejores%2Bpaisajes%2Bdel%2Bmundo%2Bbanco%2Bde%2Bimagenes%2Bfotos%2Blindas.jpg"
          alt= "Paisaje 1"
          />
          <Carousel.Caption>
          <h3>
            Río hermoso</h3>
            <p>Córdoba, Argentina</p>
          </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img 
        className="d-block w-100"
        style={{maxHeight: "500px", objectFit: 'cover'}}
        src="https://th.bing.com/th/id/R.955bbd7864750cdc32366fc9851cd9f2?rik=m3LlvfJERDxxJA&riu=http%3a%2f%2fdata.1freewallpapers.com%2fdownload%2fbeautiful-scenery-of-yosemite-1920x1200.jpg&ehk=deIQw7%2b8uJzhrb2CKKA3BumcYzfqsSb8HiQ6Mo09E2Q%3d&risl=&pid=ImgRaw&r=0"
        alt="Paisaje 2"
        />
        <Carousel.Caption>
          <h3>
            Potrerillos</h3>
            <p>Mendoza, Argentina</p>
          </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img  
          className="d-block w-100"
          style={{maxHeight: "500px", objectFit: 'cover'}}
          src="https://th.bing.com/th/id/R.b57e395533271ff8aa5a7dfc016d7892?rik=%2bwMUOuJg6m5Z5w&pid=ImgRaw&r=0"
          alt= "Paisaje 3"
          />
          <Carousel.Caption>
          <h3>
            Pinamar</h3>
            <p> Buenos Aires, Argentina</p>
          </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

    </>
    )
} 

export default CarouselHome