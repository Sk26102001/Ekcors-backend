import CountUp from "./CountUp"
import GradientText from "./GradientText"

function Stats() {
    return (
        <>
            <section className="bg-neutral-700">
                <div className="max-w-5xl mx-auto grid sm:grid-cols-4 grid-cols-2 gap-4 md:pb-12 sm:pb-8 pb-6 md:px-6 px-4">
                    <div className="text-center space-y-2">
                        <GradientText
                            colors={["#FFE52A", "#FF9D00", "#FFE52A", "#FF9D00", "#FFE52A"]}
                            animationSpeed={3}
                            showBorder={false}
                            className="rounded-none text-5xl font-semibold font-heading tracking-wide cursor-default"
                        >
                            <CountUp
                                from={0}
                                to={1200}
                                separator=","
                                direction="up"
                                duration={0.5}
                            />
                            <span>+</span>
                        </GradientText>
                        <p className="text-neutral-300 font-medium">Machines Listed</p>
                    </div>
                    <div className="text-center space-y-2">
                        <GradientText
                            colors={["#FFE52A", "#FF9D00", "#FFE52A", "#FF9D00", "#FFE52A"]}
                            animationSpeed={3}
                            showBorder={false}
                            className="rounded-none text-5xl font-semibold font-heading tracking-wide cursor-default"
                        >
                            <CountUp
                                from={0}
                                to={85}
                                separator=","
                                direction="up"
                                duration={0.5}
                            />
                            <span>+</span>
                        </GradientText>
                        <p className="text-neutral-300 font-medium">Cities Covered</p>
                    </div>
                    <div className="text-center space-y-2">
                        <GradientText
                            colors={["#FFE52A", "#FF9D00", "#FFE52A", "#FF9D00", "#FFE52A"]}
                            animationSpeed={3}
                            showBorder={false}
                            className="rounded-none text-5xl font-semibold font-heading tracking-wide cursor-default"
                        >
                            <CountUp
                                from={0}
                                to={2000}
                                separator=","
                                direction="up"
                                duration={0.5}
                            />
                            <span>+</span>
                        </GradientText>
                        <p className="text-neutral-300 font-medium">Completed Deals</p>
                    </div>
                    <div className="text-center space-y-2">
                        <GradientText
                            colors={["#FFE52A", "#FF9D00", "#FFE52A", "#FF9D00", "#FFE52A"]}
                            animationSpeed={3}
                            showBorder={false}
                            className="rounded-none text-5xl font-semibold font-heading tracking-wide cursor-default"
                        >
                            <CountUp
                                from={0}
                                to={600}
                                separator=","
                                direction="up"
                                duration={0.5}
                            />
                            <span>+</span>
                        </GradientText>
                        <p className="text-neutral-300 font-medium">Verified Owners</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Stats
