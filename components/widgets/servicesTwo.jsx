import { CheckIcon } from '@heroicons/react/24/outline';
import React from 'react';
import services from '../../data/services';
function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
const products = [


  {
    id: 1,
    name: 'Zip Tote Basket',
    color: 'White and black',
    href: '#',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-03-related-product-01.jpg',
    imageAlt: 'Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.',
    price: '$140',
  },
  // More products...
]

function ServicesTwoPage(props) {
  return (
    <div >
      <div className="relative h-screen isolate mt-32 bg-white px-6 sm:mt-56 lg:px-8">
        <div className="p-32">

          <div
            className="absolute inset-x-0 -top-3 -z-10 transform-gpu overflow-hidden px-36 blur-3xl"
            aria-hidden="true"
          >
            <div
              className="mx-auto aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
            />
          </div>
          <div className="mx-auto max-w-2xl text-center lg:max-w-4xl">
            {/* <h2 className="text-base font-semibold leading-7 text-indigo-600">Pricing</h2> */}
            <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
             More Services
            </p>
          </div>
          <p className="mx-auto mt-6 max-w-7xl text-center text-4xl leading-8 text-gray-600">
            Design mindset, is a skeleton of success
          </p>
        </div>
          <div className="mx-auto max-w-2xl px-4 py-4 sm:px-6 sm:py-4 lg:max-w-7xl lg:px-8">

            <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
              {services.slice(4,8).map((service, key) => (
                <div key={key}>
                  <div className="relative">
                    <div className="relative h-72 w-full overflow-hidden rounded-lg">
                      <img
                        src={service.imgSrc}
                        alt={service.alt}
                        className="h-full w-full object-cover object-center"
                      />
                    </div>
                    
                  </div>
                  <div className="mt-2">
                    <a
                      href={"#"}
                      className="relative flex items-center justify-center rounded-md border border-transparent bg-sky-700 px-8 py-2 text-sm font-medium text-gray-100 hover:bg-sky-600"
                    >
                      <span className="">{service.name}</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mx-auto max-w-2xl text-center text-2xl px-4 py-4 sm:px-6 sm:py-4 lg:max-w-7xl lg:px-8">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita maiores nesciunt animi
             cumque odio pariatur voluptates quod, reprehenderit eaque labore,
             officia excepturi voluptatem earum temporibus ducimus nemo eligendi repellat tempora!
          </div>
      </div>
    </div>
  );
}

export default ServicesTwoPage;