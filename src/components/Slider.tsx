import data from '../data/testimonials.json'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import { Pagination, Autoplay } from 'swiper'

export function Slider () {
  return (
    <>
      <Swiper
        pagination={{
          dynamicBullets: true,
          clickable: true
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false
        }}
        loop
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >

        {
          data.map(({ img, name, job, description }) => (
            <SwiperSlide>
              <div className="content">

                <div className="profile">
                  <img src={img} alt="puede ser una imagen del rostro de un cliente" />
                </div>

                <h2 className='name'>{name}</h2>
                <small className='job'>{job}</small>
                <p className='description'>{description}</p>

              </div>

            </SwiperSlide>

          ))
        }

      </Swiper>
    </>
  )
}
