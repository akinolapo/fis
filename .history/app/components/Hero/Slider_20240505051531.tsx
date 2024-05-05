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
              src="/"
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
          </div>
        </Carousel.Item>
      </Carousel>
    </section>
  )
}

export default Slider