import CountUp from "./CountUp"
import GradientText from "./GradientText"

function Stats() {
    return (
        <>
            <section className="bg-neutral-700">
                <div className="max-w-5xl mx-auto grid sm:grid-cols-4 grid-cols-2 gap-4 md:pb-12 sm:pb-8 pb-6 md:px-6 px-4">
                    {Array.from({ length: 4 }, (_, index) => (
                        <div key={index} className="text-center space-y-2">
                            <GradientText
                                colors={["#FFE52A", "#FF9D00", "#FFE52A", "#FF9D00", "#FFE52A"]}
                                animationSpeed={3}
                                showBorder={false}
                                className="rounded-none"
                            >
                                <CountUp
                                    from={0}
                                    to={100}
                                    separator=","
                                    direction="up"
                                    duration={1}
                                    className="text-5xl font-semibold font-heading tracking-wide cursor-default"
                                />
                            </GradientText>
                            <p className="uppercase text-neutral-300 font-medium">Lorem, ipsum.</p>
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}

export default Stats
