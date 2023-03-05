import { useState, useEffect } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from '../assets/img/header-img.svg'

export const Banner = () => {
    const [loopNumber, setLoopNumber] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [currentText, setCurrentText] = useState('');
    // Determines typing speed of letters for banner text
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const toRotate = ['Web Developer', 'Software Developer', 'Programmer'];
    // Determines how quickly the words are rotated through
    const period = 2000;

    useEffect(() => {
      let ticker = setInterval(() => {
        tick();
      }, delta )
    
      return () => {
        clearInterval(ticker)
      };
    }, [currentText])
    
    const tick = () => {
        let i = loopNumber % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, currentText.length - 1) : fullText.substring(0, currentText.length +1);

        setCurrentText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2)
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period)
        } else if(isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNumber(loopNumber + 1);
            setDelta(500);
        }
    } 

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <span className="tagline">Welcome to my Portfolio</span>
            <h1>
              {`Hi I'm Diante `}
              <span className="wrap">{currentText}</span>
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
              dignissimos eum possimus explicabo quia sed dolore doloremque illo
              molestiae, quam quae recusandae hic sunt? Quo vero quae ratione
              delectus ab!
            </p>
            <buttom onClick={() => console.log("connect")}>
              Let's Connect <ArrowRightCircle size={25}/>
            </buttom>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={headerImg} alt='Header' />
          </Col>
        </Row>
      </Container>
    </section>
  );
};
