'use client'
import { Carousel } from 'react-bootstrap'
import Image from 'next/image'

import './slider.css'

const Slider = () => {
  return (
    <section className="slider-head">
      <Carousel className="slider" pause={false} interval={4000}>
        <Carousel.Item className="sliderWrapper">
          <div className="slideImg">
            <Image
              src="/assets/images/ev2.jpeg"
              alt="promotion"
              width={720}
              height={480}
              className="imageOverlay"
            />
          </div>
        </Carousel.Item>

        <Carousel.Item className="sliderWrapper">
          <div className="slideImg">
            <Image
              src="/assets/images/phone.png"
              alt="promotion"
              width={720}
              height={480}
              className="imageOverlay"
            />
            <Carousel.Caption className="sliderTextBox">
              <h2>Innovative Gadgets, Endless Possibilities</h2>
              <p>From cutting-edge laptops to state-of-the-art smartphones and accessories.</p>
            </Carousel.Caption>
          </div>
        </Carousel.Item>

        <Carousel.Item className="sliderWrapper">
          <div className="slideImg">
            <Image
              src="/assets/images/se.png"
              alt="promotion"
              width={720}
              height={480}
              className="imageOverlay"
            />
            <Carousel.Caption className="sliderTextBox">
              <h2>Revolutionize Your Daily Commute</h2>
              <p>Upgrade to eco-friendly electric bikes and scooters for sustainable transport.</p>
            </Carousel.Caption>
          </div>
        </Carousel.Item>
      </Carousel>
    </section>
  )
}

export default Slider