import React from 'react';
import logos from '../../data/logos';

function HomePage(props) {
    return (
        <div>
            <div className="relative isolate overflow-hidden bg-gray-100 pt-14 sm:pb-20 h-screen">
                <img
                    src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2830&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
                    alt=""
                    className="sr-only absolute inset-0 -z-10 h-full w-full object-cover"
                />
                <div
                    className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
                    aria-hidden="true"
                >
                    <div
                        className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#00a8a3] to-[#10a1a0] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                        style={{
                            clipPath:
                                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                        }}
                    />
                </div>
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-48">
                        <div className="hidden sm:mb-8 sm:flex sm:justify-center">
                            <div className="relative rounded-full px-3 py-1 text-xl leading-6 text-gray-700 ring-1 ring-white/10 hover:ring-white/20">
                                Contact us now.{' '}
                                <a href="#" className="font-semibold text-sky-900">
                                    <span className="absolute inset-0 " aria-hidden="true" />
                                    We design <span aria-hidden="true">&rarr;</span>
                                </a>
                            </div>
                        </div>
                        <div className="text-center">
                            <h1 className="text-2xl font-bold tracking-tight text-gray-700 sm:text-3xl">
                                Freelancer - Passionate Graphic Designer
                            </h1>
                            <div className="mt-4 flex items-center justify-center gap-x-6">
                                <a
                                    href="#"
                                    className="rounded-md bg-sky-700 px-3.5 py-2.5 text-2xl font-semibold text-white shadow-sm hover:bg-sky-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500"
                                >
                                    Tools Inhouse
                                </a>

                            </div>
                            <p className="mt-6 text-lg leading-8 text-gray-600">
                                Adobe Creative Suite - Photoshop,
                                Illustrator, Indesign, Basic HTML & CSS
                                languages, Filmora, Affinity Suite, Corel Draw
                                Gimp, and Inkscape.
                            </p>
                            <div className="mt-4 flex items-center justify-center gap-x-6">
                                <a
                                    href="#"
                                    className="rounded-md bg-orange-700 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-900"
                                >
                                    Send an Email
                                </a>
                                <a href="#" className="text-sm font-semibold leading-6 text-gray-600">
                                    WhatsApp message <span aria-hidden="true">→</span>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Logo cloud */}

                    <div className="mx-auto grid max-w-lg grid-cols-3 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
                        {
                            logos.map((logo, key) => {
                                return <div className="" key={key}>
                                    <img
                                        className="col-span-2 max-h-32 w-full object-contain lg:col-span-1"
                                        src={logo.imgSrc}
                                        alt={logo.alt}
                                        width={158}
                                        height={48}
                                    />
                                </div>
                            })
                        }
                      
                    </div>

                </div>
                <div
                    className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
                    aria-hidden="true"
                >
                    <div
                        className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                        style={{
                            clipPath:
                                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                        }}
                    />
                </div>
            </div>
        </div>
    );
}

export default HomePage;