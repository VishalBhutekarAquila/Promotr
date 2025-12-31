import React from 'react'
import Slider from 'react-slick'
import Card from './TestimonalCard'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import character from '../../../assets/WhatOurClientsSay/character.svg'

const data = [
  {
    name: 'Rahul Mehta',
    location: 'Mumbai',
    quote:
      'Aquila transformed our event staffing process completely. Their verified manpower and seamless app made hiring quick and reliable. Our last three events went off without a hitch thanks to their professionalism.',
  },
  {
    name: 'Sneha Kapoor',
    location: 'Delhi',
    quote:
      'The quality of brand ambassadors and promoters from Aquila was outstanding. They understood our vision and connected perfectly with our audience, driving engagement and brand love like never before.',
  },
  {
    name: 'Arjun Desai',
    location: 'Bangalore',
    quote:
      "From trade shows to product launches, Aquila's team has always delivered dependable, skilled staff on short notice. Their support and real-time tracking make managing large events easy and stress-free.",
  },
]

const CardCarousel = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  return (
    <div className="overflow-hidden  cursor-pointer ">
      <Slider {...settings}>
        {data.map((item, index) => (
          <Card
            image={character}
            key={index}
            name={item.name}
            location={item.location}
            quote={item.quote}
          />
        ))}
      </Slider>
    </div>
  )
}

export default CardCarousel
