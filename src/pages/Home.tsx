import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      {/*     hero */}
      <section className="text-white">
        <div
          className="hero min-h-screen relative bg-cover bg-center -z-10"
          style={{
            backgroundImage:
              "url(https://www.autocar.co.uk/sites/autocar.co.uk/files/images/car-reviews/first-drives/legacy/3-supercar-showroom.jpg)",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-bgColorFrom to-bgColorTo -z-10"></div>
        </div>
        <div>
          {" "}
          {/* title */}
          <div className="absolute text-center mx-auto top-[10%] left-0 right-0">
            <h1 className="text-5xl mb-4 mt-20">
              Ca<span className="text-blue-500 uppercase">r</span>ent Time
            </h1>
            <h3 className="text-4xl">
              Save your time and feel freedom with 30+ premium cars
            </h3>
          </div>
          {/* About us */}
          <div className="w-[450px] h-1/5 absolute bottom-[40%] left-1/4">
            <div className="flex justify-center  mb-2">
              <img
                src="https://www.hillsun.com/wp-content/uploads/2016/02/Icon-About-Us.png"
                alt="icon about us"
                width={30}
                height={30}
              />
              <h2 className="text-2xl text-center ml-2">About Us</h2>
            </div>
            <p className="text-base  mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
              tempora debitis, cum quasi ipsum omnis sequi illum ea!
            </p>
          </div>
          {/* We offer */}
          <div className="w-[450px] h-1/5 absolute bottom-[40%] right-1/4">
            <div className="flex justify-center  mb-2">
              <img
                src="https://www.clipartmax.com/png/full/290-2908659_login-icon-png-free-user-access-icon.png"
                alt="icon about us"
                width={30}
                height={30}
              />
              <h2 className="text-2xl text-center ml-2">We offer</h2>
            </div>
            <p className="text-base  mb-4">
              Rental car service with a driver, without a driver, for a wedding,
              anythig you want more than 10 cities in Ukraine
            </p>
          </div>
          {/* buttons group */}
          <div className="w-[450px] h-1/5 absolute bottom-1/4 right-1/4">
            <div className="flex justify-center  mb-4">
              <img
                src="https://usercontent.one/wp/rentfrom.mndutchcarrental.nl/wp-content/uploads/2019/05/auto.png?media=1637724050"
                alt="car icon"
                width={30}
                height={30}
              />
              <h2 className="text-2xl text-center ml-2">
                Start you're adventure
              </h2>
            </div>
            <ul className="flex justify-center gap-14">
              <li>
                <Link
                  to="/catalog"
                  className="btn bg-mainBtn hover:bg-active text-white  border-0 text-xs"
                >
                  Catalog
                </Link>
              </li>
              <li>
                <Link
                  to="/favorites"
                  className="btn bg-mainBtn hover:bg-active text-white  border-0 text-xs"
                >
                  Favorites
                </Link>
              </li>
            </ul>
          </div>
          {/* Contact us */}
          <div className="w-[450px] h-1/5 absolute bottom-1/4 left-1/4 flex flex-col items-center ">
            <div className="flex justify-center mb-2">
              <img
                src="https://cdn0.iconfinder.com/data/icons/simpline-mix/64/simpline_49-512.png"
                alt="icon about us"
                width={30}
                height={30}
              />
              <h2 className="text-2xl text-center ml-2">Contact us</h2>
            </div>
            <a href="tel:+380730000000" className="block ">
              Phone:{" "}
              <span className="underline cursor-pointer">+380730000000</span>
            </a>
            <a href="mailto:example@gmail.com" className="block mb-2">
              Email:{" "}
              <span className="underline cursor-pointer">
                example@gmail.com
              </span>
            </a>

            <ul className="flex gap-6">
              <li>
                <a href="https://facebook.com/" rel="noreferrer noopener">
                  <img
                    src="https://th.bing.com/th/id/R.b71261c8579351e0800709cf47e1880b?rik=mdFLPlOrF9SfuQ&riu=http%3a%2f%2fpluspng.com%2fimg-png%2ffacebook-transparent-pics-image-38360-512.png&ehk=uC5QqB9VLoIOTv1ptmGKBoBm2QxkOadfKk3SfIsFcM4%3d&risl=&pid=ImgRaw&r=0"
                    alt="facebook icon"
                    width={40}
                    height={40}
                  />
                </a>
              </li>
              <li>
                <a href="https://instagram.com/" rel="noreferrer noopener">
                  <img
                    src="https://th.bing.com/th/id/R.735dda68880a385ce8cc5be4f3c5fcd6?rik=qSxRw2lCZYy9Mw&riu=http%3a%2f%2fpngimg.com%2fuploads%2finstagram%2finstagram_PNG11.png&ehk=QVCbfkCKi8pJLF08bRkS%2fLeMqLTnJQf402WRaIdN6jE%3d&risl=&pid=ImgRaw&r=0"
                    alt="instagram icon"
                    width={40}
                    height={40}
                  />
                </a>
              </li>
              <li>
                <a href="https://twitter.com/" rel="noreferrer noopener">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/WikiProject_X_icon.svg/1024px-WikiProject_X_icon.svg.png"
                    alt="x icon"
                    width={40}
                    height={40}
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
