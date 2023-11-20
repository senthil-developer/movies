import React from 'react'
import dayjs from 'dayjs';

const Dayjs = ({res}) => {
  return (
    <div className='text-gray-400'>
            {res?.release_date?dayjs(res.release_date).format("D MM YYYY"):''}
            {res?.first_air_date?dayjs(res.first_air_date).format("D MM YYYY"):''}
    </div>
  )
}

export default Dayjs