"use client"
import Link from 'next/link';
import React, { useState } from 'react';
import Image from 'next/image';
// internal
import img_1 from '@/assets/images/assets/img_11.jpg';
import img_2 from '@/assets/images/assets/img_12.jpg';
import img_3 from '@/assets/images/assets/img_13.jpg';
import shape_1 from '@/assets/images/shape/shape_06.svg';
import shape_2 from '@/assets/images/shape/shape_21.svg';
import VideoPopup from '../common/video-popup';
import CounterOne from '../counter/counter-one';


const FeatureThree = () => {
	const [isVideoOpen, setIsVideoOpen] = useState<boolean>(false);
	return (
		<>
			<section className="text-feature-one position-relative pt-180 xl-pt-150 lg-pt-100 md-pt-80">
				<div className="container">
					<div className="row align-items-center">
						<div className="col-lg-5 order-lg-last">
							<div className="ps-lg-4 wow fadeInRight">
								<div className="title-one">
									<h2 className="fw-600">Who <br /> We Are ?</h2>
								</div>
								<p className="mt-40 md-mt-20 mb-40 md-mb-20 text-md">We are a <span className="" style={{color:"#037EF2"}}> global youth-led organization striving to achieve peace and fulfillment of humankind’s potential</span> by activating leadership qualities in youth through learning from practical experiences in challenging environments.</p>
								<ul className="list-style-one style-none">
									<li>Seamless searching</li>
									<li>Protected payments, every time</li>
									<li>Wide rang of job categories</li>
								</ul>
								<Link href="/about-us" className="btn-five border6 mt-70 md-mt-30">Learn More</Link>
							</div>
						</div>
						<div className="col-lg-7 col-md-8 m-auto order-lg-first">
							<div className="img-data position-relative me-xl-5 md-mt-20">
								<div className="row align-items-center gx-xl-5">
									<div className="col-6">
										<Image src={"https://res.cloudinary.com/dhwh1oqno/image/upload/v1729327779/e774d5a8-25e3-425a-ae05-7e3bc7d269aa_fthdfb.jpg"} alt="image" className="lazy-img mt-35 md-mt-20 wow fadeInLeft img" width={320} height={460}/>
									</div>
									<div className="col-6">
										<Image src={"https://res.cloudinary.com/dhwh1oqno/image/upload/v1729328415/photo_2024-08-17_18-41-45_tfj2mu.jpg"} alt="image" className="lazy-img mt-35 md-mt-20 wow fadeInDown img" width={316} height={383} />
										<Image src={"https://res.cloudinary.com/dhwh1oqno/image/upload/v1729327779/3d168487-4212-483c-a03b-f284b1ef4bdc_qsqyp5.jpg"} alt="image" className="lazy-img mt-35 md-mt-20 wow fadeInUp img"  width={200} height={219}  />
									</div>
								</div>
								<Image src={shape_1} alt="shape" className="lazy-img shapes shape_02" />
								<Image src={shape_2} alt="hsape" className="lazy-img shapes shape_03" />
								<a className="fancybox rounded-circle video-icon tran3s text-center"
									onClick={() => setIsVideoOpen(true)} style={{ cursor: 'pointer' }}>
									<i className="bi bi-play-fill"></i>
								</a>
							</div>
						</div>
					</div>

					<div className="border-bottom pb-50 lg-pb-20 mt-90 lg-mt-30">
						<div className="row justify-content-center">
							<CounterOne />
						</div>
					</div>
				</div>
			</section>

			{/* video modal start */}
			<VideoPopup isVideoOpen={isVideoOpen} setIsVideoOpen={setIsVideoOpen} videoId={'-6ZbrfSRWKc'} />
			{/* video modal end */}
		</>
	);
};

export default FeatureThree;