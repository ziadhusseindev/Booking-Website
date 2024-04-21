import React from 'react'
import "./PropertyList.css"

const PropertyList = () => {
  return (
    <div className='pList'>
        <div className="pListItem">
          <img src="https://www.luxuryabode.com/mona/img/hotels.jpg" alt="" className="pListImg"/>
            <div className="pListTitles">
            <h1>Hotels</h1>
            <h2>123 properties</h2>
            </div>
        </div>

        <div className="pListItem">
          <img src="https://www.common.com/_next/image?url=%2Fimages%2Fsplash-page.jpeg&w=3840&q=75" alt="" className="pListImg"/>
            <div className="pListTitles">
            <h1>Apartments</h1>
            <h2>123 properties</h2>
            </div>
        </div>

        <div className="pListItem">
          <img src="https://hips.hearstapps.com/hmg-prod/images/82-28-img-0084-1551825116.jpg" alt="" className="pListImg"/>
            <div className="pListTitles">
            <h1>Resorts</h1>
            <h2>123 properties</h2>
            </div>
        </div>

        <div className="pListItem">
          <img src="https://res.cloudinary.com/premiervillas/image/upload/t_MainWebsiteView/s3media/villa_media/1486_2021-07-02-12-19-31_60def6434f02c.jpg" alt="" className="pListImg"/>
            <div className="pListTitles">
            <h1>Villas</h1>
            <h2>123 properties</h2>
            </div>
        </div>

        <div className="pListItem">
          <img src="https://cdn.decoist.com/wp-content/uploads/2017/05/The-classic-wood-cabin-with-a-strong-element-of-simplicity-870x520.jpeg" alt="" className="pListImg"/>
            <div className="pListTitles">
            <h1>Cabins</h1>
            <h2>123 properties</h2>
            </div>
        </div>

    </div>
  )
}

export default PropertyList