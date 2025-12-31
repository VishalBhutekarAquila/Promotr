import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import card1 from '@assets/HostPage/WhatHostsHandle/card1.svg'
import card2 from '@assets/HostPage/WhatHostsHandle/card2.svg'
import card3 from '@assets/HostPage/WhatHostsHandle/card3.svg'
import card4 from '@assets/HostPage/WhatHostsHandle/card4.svg'
import ServiceCard from '@components/common/ServiceCard/ServiceCard'

const CardScroll = () => {
  const data = [
    {
      title: 'Welcome and Registration',
      img: card1,
      desc: 'Greeting guests, managing entry, handling registration desks, badges, and check-ins so arrivals feel organized and relaxed.',
    },
    {
      title: 'Guest Guidance and Information',
      img: card2,
      desc: 'Directing people to halls, sessions, booths, dining areas, or seating; answering common questions about schedules, facilities, and event details.',
    },
    {
      title: 'VIP and Speaker Care',
      img: card3,
      desc: 'Looking after VIP guests, speakers, and key stakeholders with special attention, escorting them, and coordinating with backstage and production teams.',
    },
    {
      title: 'On-Ground Coordination Support',
      img: card4,
      desc: 'Supporting the event manager with announcements, crowd flow, basic coordination with crew, and helping resolve small issues before they grow.',
    },
  ]
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  }
  return (
    <div className="px-80">
      <div className="-mx-3">
        <Slider {...settings}>
          {data.map((data, index) => (
            <div key={index}>
              <ServiceCard title={data.title} img={data.img} description={data.desc} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default CardScroll
