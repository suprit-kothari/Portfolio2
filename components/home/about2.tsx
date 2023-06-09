import { MENULINKS } from "../../constants";
import Image from "next/image";
import { MutableRefObject, useEffect, useRef, useState } from "react";
import { gsap, Linear } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const ABOUT_STYLES = {
	SECTION:"w-full relative select-none mb-24 section-container py-12 flex flex-col justify-center",
	SKILL_TITLE: "section-title-sm mb-4 seq",
};

const About2Section = () => {
	const targetSection: MutableRefObject<HTMLDivElement> = useRef(null);
	const [willChange, setwillChange] = useState(false);

	const initRevealAnimation = (
		targetSection: MutableRefObject<HTMLDivElement>
	): ScrollTrigger => {
		const revealTl = gsap.timeline({ defaults: { ease: Linear.easeNone } });
		revealTl.from(
			targetSection.current.querySelectorAll(".seq"),
			{ opacity: 0, duration: 0.5, stagger: 0.5 },
			"<"
		);

		return ScrollTrigger.create({
			trigger: targetSection.current.querySelector(".skills-wrapper"),
			start: "100px bottom",
			end: `center center`,
			animation: revealTl,
			scrub: 0,
			onToggle: (self) => setwillChange(self.isActive),
		});
	};

	useEffect(() => {
		const revealAnimationRef = initRevealAnimation(targetSection);

		return revealAnimationRef.kill;
	}, [targetSection]);
	const renderSectionTitle = (): React.ReactNode => (
		<div className="row">
		  <div className="col-10">
		    <div className="flex flex-row justify-between">
		      <div className="flex flex-col ml-2">
		        <p className="section-title-sm seq">ABOUT ME</p>
		        <h1 className="section-heading seq mt-2">Suprit Kothari</h1>
		        <h2 className="text-2xl md:max-w-2xl w-full seq mt-2">
		          Senior CSE Student and Developer{" "}
		        </h2>
		      </div>
		      <div className="flex items-end" style={{marginRight: '15%'}}>
		        <Image
		          src={'/main.png'}
		          alt={'main'}
		          height={110}
		          width={110}
		        />
		      </div>
		    </div>
		  </div>
		</div>
	          );
	          
	          


	const renderAboutMe = (): React.ReactNode => (
		<div style={{ marginRight: '15%', fontSize: '120%' }}>
			<p>I am a driven and enthusiastic Computer Science Engineering student with a profound interest in Data Science and a passion for finance, business, and entrepreneurship. The fusion of these diverse fields equips me with a unique perspective and a valuable skill set to tackle the complex challenges of the digital landscape.
			</p>
			<br />
			<p>Beyond my academic pursuits, I find inspiration in extracurricular activities. Playing and watching football, immersing myself in video games, and capturing the world&apos;s beauty through photography recharge my batteries and fuel my motivation to explore new horizons.
			</p>
			<br />
			<p>My ultimate dedication lies in expanding my horizons within the realm of technology. I am thrilled to delve into emerging technologies, craft innovative solutions, and contribute to the growth of businesses and organizations. Whether you are interested in my technical expertise, potential collaborations, or simply wish to share experiences, I am always eager to connect with like-minded individuals and engage in meaningful conversations.
			</p>
			<br />
		</div>
	);

	const renderBackgroundPattern = (): React.ReactNode => (
		<>
			<div className="absolute right-0 -bottom-1/3 w-1/5 max-w-xs md:flex hidden justify-end">
				<Image
					src="/pattern-r.svg"
					loading="lazy"
					height={700}
					width={320}
					alt="pattern"
				/>
			</div>
			<div className="absolute left-0 -bottom-3.5 w-1/12 max-w-xs md:block hidden">
				<Image
					src="/pattern-l.svg"
					loading="lazy"
					height={335}
					width={140}
					alt="pattern"
				/>
			</div>
		</>
	);

	return (
		<section className="relative">
			{renderBackgroundPattern()}
			<div
				className={ABOUT_STYLES.SECTION}
				id={"about2"}
				ref={targetSection}
			>
				<div className="flex flex-col skills-wrapper">
					{renderSectionTitle()}
					<div className="mt-10">
						{renderAboutMe()}
					</div>
				</div>
			</div>
		</section>
	);
};

export default About2Section;
