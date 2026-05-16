import { Link } from 'react-router-dom';

type HeaderProps = {
  title: string;
  subtitle: string;
  buttonText: string;
  buttonLink: string;
};

const Header = ({ title, subtitle, buttonText, buttonLink }: HeaderProps) => (
  <div className="h-[85vh] bg-linear-to-b from-black/50 to-black/50 bg-[url('https://images.pexels.com/photos/904616/pexels-photo-904616.jpeg?auto=compress&cs=tinysrgb&w=1600')] bg-cover bg-center flex flex-col justify-center items-center text-center text-white px-5">
    <h1 className="text-4xl md:text-6xl mb-5">{title}</h1>
    <p className="text-lg mb-7.5 opacity-90 max-w-150">{subtitle}</p>
    <Link to={buttonLink} className="bg-orange-600 text-white px-7.5 py-3 no-underline font-semibold rounded-[30px] inline-block transition-all hover:bg-orange-500 hover:-translate-y-0.5">
      {buttonText}
    </Link>
  </div>
);

export default Header;