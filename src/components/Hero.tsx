import hero from "../assets/hero.png";

type Props = {};

function Hero({}: Props) {
  return (
    <div>
      <img src={hero} alt="hero" className="w-full max-h-[600px] object-cover" />
    </div>
  );
}

export default Hero;
