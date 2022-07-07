import Subheading from "../../../components/Subheading";
import WirelessScheme from "./WirelessScheme";
import Citate from "./Citate";
import garet from "../../../assets/garet.jpg"

const text = "It really took me by surprise honestly to have such full beautiful sound that coming out of this small compact device. And with the brush aluminum surface, it feels so familiar. Like my iPhone."
const Technology = () => {
    return (
        <div className="technology d-flex flex-column align-items-center justify-content-center">
            <div className="technology__subheading">
                <Subheading title="Technology" />
                <WirelessScheme />
                <div className="technology__citate">
                    <Citate
                        img={garet}
                        text={text}
                        name="Garrett Martin"
                        position="Creative Director"
                    />
                </div>
            </div>
        </div>
    )
}

export default Technology;