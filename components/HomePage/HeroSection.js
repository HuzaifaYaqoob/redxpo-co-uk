

const HeadingSection = (props) => {
    return (
        <div className="px-5">
            <h3 className="text-red-600">Your success partner</h3>
            <h1 className="text-3xl md:text-left md:text-6xl mb-3 md:mb-9 font-medium text-dark-RE">Business value through digital products.</h1>
            <p className="mb-9 md:mb-0">Helping <span className="text-red-600">Startups</span> and <span className="text-red-600">Growth Companies</span>. We build
                custom softwares, providing reliable end-to-end
                design & development solutions</p>
        </div>
    )
}


const HeroSection = () => {
    return (
        <div
            className={`w-full max-w-7xl px-5 md:px-0 mx-auto my-20 md:flex md:items-center`}
        >
            <HeadingSection />
            <img className="w-full max-w-2xl" src="/images/bulb-img.svg" alt="" />
        </div>
    )
}

export default HeroSection