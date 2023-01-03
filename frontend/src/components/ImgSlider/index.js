import React,{useState,useEffect} from 'react'
import "swiper/css/navigation"
import "swiper/css/pagination"
import 'swiper/css'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper'
import { images } from '../../general'
import './styles.css'

const ImgSlider = () => {
  const [screenWidth, setScreenWidth] = useState(1440)
  const getScreenWidth = () => {
    setScreenWidth(window.innerWidth)
  }
  useEffect(() => {
    window.addEventListener('resize', getScreenWidth)
    // getProductFromDatabase()
  }, [screenWidth])

  return (
    <div>
      <Swiper
            slidesPerView={screenWidth >= 1200 ? 3 : screenWidth >= 801 && screenWidth <= 1199 ? 3 : screenWidth >= 601 && screenWidth <= 800 ? 2 : 1}
            //  spaceBetween={0.5}
            pagination={{
              clickable: 'true',
              dynamicBullets: true,
            }}
            //  navigation={true}
            modules={[Pagination]}
            // className="mySwiper wrapper-start"
            style={{
              //  border:'1px solid black',
              height: '80%',
              // padding: '0.1% 1% 40px 3%',
            }}>
              {/* <img src=""/> */}
            {
              images.map((item) => {

                return <>
                  <SwiperSlide>
                    <img className="img-slider"src={item} alt="image not available"/>
                  </SwiperSlide>
                </>
              })
            }
          </Swiper>
    </div>
  )
}

export default ImgSlider