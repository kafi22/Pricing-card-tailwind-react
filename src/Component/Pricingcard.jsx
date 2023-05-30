import React from 'react'

const Pricingcard = (props) => {

  const {title, price, description, currency, frequency, feature, id, mostpopular, cta, icons} = props



  return (
    <div>
        <article className=' pricing_card bg-white rounded-2xl shadow-lg  border border-slate-200 text-left flex flex-col p-8 relative justify-between h-full  hover:-translate-y-3 cursor-pointer '>
       
          {mostpopular && (<span className= 'bg-blue-200 text-white font-semibold absolute top-0  -translate-y-1/2 left-4 py-[4px] px-[8px] rounded-lg shadow-lg text-[14px]'>Most Popular</span>)}

          <div>
            <div className='  flex justify-between items-center mb-3'>
        <h1 className=' heading text-2xl font-bold capitalize tracking-wider text-slate-700'>{title}</h1>

        <span className=' text-cyan-200'>{icons}</span>

            </div>
        <p className=' text-[17px] font-serif font-medium mt-2 text-slate-700  capitalize'>{description}</p>
          </div>
        <div className=' bg-slate-50 -mx-6 p-6 rounded-lg shadow-lg mt-6'>
          <p className=' text-slate-500 font-semibold flex items-center'>
          <span className='  uppercase'>{currency}</span>
          <span className=' text-4xl ml-2 text-slate-900 capitalize'>{price}</span>
          <span className=' ml-2'>{frequency}</span>
          </p>
        </div>

        <ul className=' mt-6 space-y-2  flex-1'>
        {feature.map((item, index) => (
          <li key={index} className=' text-xm text-slate-700 leading-6 capitalize flex' >

        <svg  className=' h-5 w-5 text-cyan-500' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M11.1 18.6L4 13.4L5.7 11L10.5 14.5L17.1 6L19.4 7.8L11.1 18.6Z" fill="currentColor" fill-opacity="0.6"/>
        </svg>


            <span className=' ml-3'>{item}</span>
          </li>
        ))}
        </ul>

        <div className='mt-12'>
          <button className={` rounded-lg block py-4 px-3 w-full  text-sm text-center font-semibold capitalize ${ mostpopular ? ' bg-cyan-500 text-white hover:bg-cyan-600  shadow-md' : ' bg-cyan-50 text-slate-800  hover:bg-cyan-100' }`}>{cta}</button>
        </div>
        </article>
    </div>
  )
}

export default Pricingcard