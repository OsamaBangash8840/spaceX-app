import { Settings } from "@/app/types/settings";
import { routes } from "../constants";
import { Slides } from "@/app/types/slides";
import { Images } from "../../../../public/images";
// import { Images } from "../../../../public/images";

export const menu = [
    {name: 'Capsules', route:routes.capsules},
    {name:'Cores',route:routes.cores},
    {name:'Crew',route:routes.crew},
    {name:'Dragons',route:routes.dragons},
    {name:'Launches',route:routes.launches},
    {name:'Rockets',route:routes.rockets},
    {name : 'Landpads', route:routes.landpads},
    {name : 'Launchpads', route:routes.launchpads},
    {name : 'Ships', route:routes.ships},
    {name : 'StarLink', route:routes.starlink},
    {name : 'Payloads', route:routes.payloads},
]


export const settings : Settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  };


  export const slides : Slides[] = [
    {
      id: 1,
      title: "Explore the Wonders of Space",
      description: "Embark on an interstellar journey and discover the mysteries of the universe, from distant galaxies to the infinite possibilities of space exploration.",
      image: Images.Slider1,
    },
    {
      id: 2,
      title: "The Final Frontier Awaits",
      description: "Venture beyond our planet and uncover the secrets of space. Whether it's the moons of Jupiter or the vast emptiness of deep space, there's always something new to discover.",
      image:Images.Slider2,
    },
    {
      id: 3,
      title: "Journey Through the Stars",
      description: "Travel across the stars and explore the celestial wonders that make up our universe. From the formation of stars to the breathtaking beauty of nebulae, space holds limitless wonders.",
      image: Images.Slider3,
    },
  ];