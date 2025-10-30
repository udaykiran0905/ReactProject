import React from 'react'
import servicesData from '../../../data/servicesData'
import '../advantages/Advantage.css'

export default function Advantage() {
  return (
    <div>
      <h3 className='text-white text-center p-5'>Our Advantages</h3>
      <div className="product-service-data text-white bg-dark">

        {servicesData.map((item) => {
          const Icon = item.icon;
          return (
            <div key={item.id} className="product-icon">
              <Icon size={54} color="red" />
              <div className="product-icon-info">
                <p>{item.title}</p>
                <p className='text-secondary'>{item.info}</p>
              </div>
            </div>
          );
        })}

      </div>
    </div>
  )
}
