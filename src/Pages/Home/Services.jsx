import { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { Zoom } from "react-awesome-reveal";

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('./services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div className="mt-10 text-center">
            <div className="flex flex-col items-center justify-center">
                <h2 className="text-[#ff3811] font-bold text-xl">Service</h2>
                <h1 className="text-5xl font-bold">Our Service Area</h1>
                <p className="py-6 text-slate-500 w-1/2">the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                {
                    services.map(service => <div key={service._id}>
                        <Zoom>
                            <div className="card bg-base-100 shadow-xl">
                                <figure className="px-10 pt-10">
                                    <img src={service.img} alt="Shoes" className="rounded-xl h-52" />
                                </figure>
                                <div className="px-10 py-8">
                                    <h2 className="card-title">{service.title}</h2>
                                    <div className="flex items-center justify-between">
                                        <p className="text-red-500 text-xl">Price: ${service.price}</p>
                                        <button className="btn text-red-500"><FaArrowRight />
                                        </button>
                                    </div>


                                </div>
                            </div>

                        </Zoom>


                    </div>)
                }
            </div>

        </div>
    );
};

export default Services;