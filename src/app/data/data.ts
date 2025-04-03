export const images = {
  wonderla:
    'https://d22pimhl2qmbj7.cloudfront.net/public/Main_Logo_0ad2299b54.png?w=256&q=75',
};
export const navbarOptions = [
  {
    iconSrc:
      'https://d22pimhl2qmbj7.cloudfront.net/public/discount_star_01_fdc6bc5632.svg?w=48&q=75',
    optionName: 'OFFERS',
  },
  {
    iconSrc:
      'https://d22pimhl2qmbj7.cloudfront.net/public/marker_02_e495ae7481.svg?w=48&q=75',
    optionName: 'RIDES',
  },
  {
    iconSrc:
      'https://d22pimhl2qmbj7.cloudfront.net/public/Frame_12_ebee895750.svg?w=48&q=75',
    optionName: 'RESTAURANTS',
  },
  {
    iconSrc:
      '	https://d22pimhl2qmbj7.cloudfront.net/public/Frame_13_c4d6212160.svg?w=48&q=75',
    optionName: 'EVENTS',
  },
];
export const cities = [
  {
    name: 'kochi',
    href: '/',
    image:
      '	https://d22pimhl2qmbj7.cloudfront.net/public/Kochi_cb42a7a748.jpg?w=96&q=75',
    subSection: [],
  },
  {
    name: 'bengaluru',
    href: '/',
    image:
      'https://d22pimhl2qmbj7.cloudfront.net/public/Bangalore_a29cdf2e2c.jpg?w=96&q=75',
    subSection: [
      {
        name: 'park',
        image:
          'https://www.wonderla.com/_next/image?url=%2Fimages%2Fbangalore-park.png&w=96&q=75',
      },
      {
        name: 'resort',
        image:
          'https://www.wonderla.com/_next/image?url=%2Fimages%2Fbangalore-resort.png&w=96&q=75',
      },
    ],
  },
  {
    name: 'hyderabad',
    href: '/',
    image:
      'https://d22pimhl2qmbj7.cloudfront.net/public/Hyderabad_44ee040feb.jpg?w=96&q=75',
    subSection: [],
  },
  {
    name: 'bhubaneshwar',
    href: '/',
    image:
      'https://d22pimhl2qmbj7.cloudfront.net/public/Bhubaneswar_b007f8a2ac.jpg?w=96&q=75',
    subSection: [],
  },
];
export const circularRideSection = [
  {
    name: 'land',
    image: 'icons/landRides.svg',
    imageClasses: 'top-24 right-20',
    tagClasses: 'top-24 -right-20',
    rideNumber: '73',
    magnifierCoords: { x: 28.5, y: 6.5 },
  },
  {
    name: 'water',
    image: 'icons/waterRides.svg',
    imageClasses: 'top-1/2 -right-3',
    tagClasses: 'top-1/2 -right-42',
    rideNumber: '54',
    magnifierCoords: { x: 34.5, y: 19 },
  },
  {
    name: 'kids',
    image: 'icons/kidsRides.svg',
    imageClasses: 'bottom-12 right-20',
    tagClasses: 'bottom-12 -right-20',
    rideNumber: '35',
    magnifierCoords: { x: 28.5, y: 30.5 },
  },
];


export const rides = [
  [
    {
      name: 'Sky Ring',
      href: '/rides/kochi/rides/sky-ring',
      location: 'Kochi',
      description:
        'Shoot up a sky-high tower for a birds-eye view of Wonderla Kochi!',
      videoUrl:
        'https://d22pimhl2qmbj7.cloudfront.net/public/Sky_Ring_480p_1749236cd3.mp4',
    },
    {
      name: 'Mission Interstellar',
      href: '/rides/bengaluru/rides/mission-interstellar',
      location: 'Bengaluru',
      description:
        'Blast through cosmic chaos on a wild, out-of-this-world space\n              ride!',
      videoUrl:
        'https://d22pimhl2qmbj7.cloudfront.net/public/MI_3s_V_5_MB_8572eacf1a.mp4',
    },
    {
      name: 'G Fall',
      href: '/rides/hyderabad/rides/g-fall',
      location: 'Hyderabad',
      description:
        'Brace yourself for a heart-pounding, high-speed plunge into a\n              dizzying freefall!',
      videoUrl:
        'https://d22pimhl2qmbj7.cloudfront.net/public/G_Fall_480p_54a0131d48.mp4',
    },
    {
      name: 'Equinox',
      href: '/rides/bhubaneswar/rides/equinox',
      location: 'Bhubaneswar',
      description:
        'A thrill monster that flips you around 360 degrees in a\n              gravity-defying spin.',
      videoUrl:
        'https://d22pimhl2qmbj7.cloudfront.net/public/Equinox_480p_bafc65400f.mp4',
    },
    {
      name: 'Space Gun',
      href: '/rides/kochi/rides/space-gun',
      location: 'Kochi',
      description:
        'See the world upside-down, dangling from high up above the ground!',
      videoUrl:
        'https://d22pimhl2qmbj7.cloudfront.net/public/Space_Gun_480p_a91b755b34.mp4',
    },
    {
      name: 'Recoil',
      href: '/rides/bengaluru/rides/recoil',
      location: 'Bengaluru',
      description:
        'India’s first-ever action-packed reverse looping roller coaster\n              ride!',
      videoUrl:
        'https://d22pimhl2qmbj7.cloudfront.net/public/Recoil_480p_dd3c781929.mp4',
    },
    {
      name: 'Hyperverse',
      href: '/rides/hyderabad/rides/hyperverse',
      location: 'Hyderabad',
      description:
        'Get transported to another world as you soar through a\n              breathtaking 3D metaverse!',
      videoUrl:
        'https://d22pimhl2qmbj7.cloudfront.net/public/Hyperverse_480p_c539001b46.mp4',
    },
    {
      name: 'Spinning Coaster',
      href: '/rides/bhubaneswar/rides/spinning-coaster',
      location: 'Bhubaneswar',
      description:
        'A heart-pounding roller coaster ride that twists, turns and spins\n              you around!',
      videoUrl:
        'https://d22pimhl2qmbj7.cloudfront.net/public/Spinning_Coaster_8bde2ae30d.mp4',
    },
    {
      name: 'Air Race',
      href: '/rides/kochi/rides/air-race',
      location: 'Kochi',
      description:
        'An exhilarating flight simulation with banks, loops and dives.',
      videoUrl:
        'https://d22pimhl2qmbj7.cloudfront.net/public/Air_Race_480p_5d9fb9b2f6.mp4',
    },
    {
      name: 'Y-Scream',
      href: '/rides/bengaluru/rides/y-scream',
      location: 'Bengaluru',
      description:
        'Strap in tight to swing, spin and scream on this dizzying\n              360-degree thrill fest!',
      videoUrl:
        'https://d22pimhl2qmbj7.cloudfront.net/public/Y_Scream_480p_0a746cad75.mp4',
    },
  ],

  [
    {
      name: 'Water Pendulum',
      href: '/rides/kochi/rides/water-pendulum',
      location: 'Kochi',
      description:
        'Hold on tight as you glide up and down on a water tube across a\n              U-shaped slide!',
      videoUrl:
        'https://d22pimhl2qmbj7.cloudfront.net/public/Water_Pendulam_480p_53805faa9e.mp4',
    },
    {
      name: 'Drop Loop',
      href: '/rides/bengaluru/rides/drop-loop',
      location: 'Bengaluru',
      description:
        'Slide down a sky-high slope, twist through a loop and make a\n              splashy exit!',
      videoUrl:
        'https://d22pimhl2qmbj7.cloudfront.net/public/Drop_Loop_480p_604a9571a6.mp4',
    },
    {
      name: 'Sea Lagoon',
      href: '/rides/hyderabad/rides/sea-lagoon',
      location: 'Hyderabad',
      description:
        'Get soaked, splashed and sprayed in this thrilling pool paradise!',
      videoUrl:
        'https://d22pimhl2qmbj7.cloudfront.net/public/Sea_Lagoon_480p_072171123b.mp4',
    },
    {
      name: 'Wave Pool',
      href: '/rides/bhubaneswar/rides/wave-pool',
      location: 'Bhubaneswar',
      description:
        'Experience the bliss of waves washing over you, far away from the\n              sea.',
      videoUrl:
        'https://d22pimhl2qmbj7.cloudfront.net/public/Wave_Pool_1_480p_7ff2c460ac.mp4',
    },
    {
      name: 'Korneto',
      href: '/rides/kochi/rides/korneto',
      location: 'Kochi',
      description:
        'Slide, swirl and splash through a whirling vortex on this slippery\n              ride!',
      videoUrl:
        'https://d22pimhl2qmbj7.cloudfront.net/public/Korneto_480p_76298a8b68.mp4',
    },
    {
      name: 'Bullet',
      href: '/rides/bengaluru/rides/bullet',
      location: 'Bengaluru',
      description:
        'Navigate through twists, tunnels and loops on 3 epic water slides!',
      videoUrl:
        'https://d22pimhl2qmbj7.cloudfront.net/public/Banded_Kraits_480p_191dfcc9cf.mp4',
    },
    {
      name: 'Screw',
      href: '/rides/hyderabad/rides/screw',
      location: 'Hyderabad',
      description:
        'Get ready to rush through dizzying turns and loops at mind-blowing\n              speeds!',
      videoUrl:
        'https://d22pimhl2qmbj7.cloudfront.net/public/Skrew_480p_e740d8313b.mp4',
    },
    {
      name: 'Drop & Tornado',
      href: '/rides/bhubaneswar/rides/drop-tornado',
      location: 'Bhubaneswar',
      description:
        'Zoom down through a twisty maze of 4 thrilling tunnels into a\n              splashy escape!',
      videoUrl:
        'https://d22pimhl2qmbj7.cloudfront.net/public/Drop_480p_592faaf01c.mp4',
    },
    {
      name: 'Water Falls',
      href: '/rides/kochi/rides/water-falls',
      location: 'Kochi',
      description: 'Get drenched under a cascading waterfall with steep rocks.',
      videoUrl:
        'https://d22pimhl2qmbj7.cloudfront.net/public/Waterfall_480p_986c910678.mp4',
    },
    {
      name: 'Harakiri',
      href: '/rides/bengaluru/rides/harakiri',
      location: 'Bengaluru',
      description:
        'Rush down, take a breather, and slide back down to the finish for\n              pure, non-stop thrill!',
      videoUrl:
        'https://d22pimhl2qmbj7.cloudfront.net/public/Harakiri_480p_fb97d12eba.mp4',
    },
  ],
  [
    {
      name: 'Happy Kangaroo',
      href: '/rides/kochi/rides/happy-kangaroo',
      location: 'Kochi',
      description:
        'Plummet into a safe freefall with a tall & cheerful kangaroo!',
      videoUrl:
        'https://d22pimhl2qmbj7.cloudfront.net/public/Happy_Kangaroo_480p_d24bd08f2f.mp4',
    },
    {
      name: 'Mini Coco Cup',
      href: '/rides/bengaluru/rides/mini-coco-cup',
      location: 'Bengaluru',
      description:
        'Spin around in a gigantic cup placed on a rotating turntable\n              floor!',
      videoUrl:
        'https://d22pimhl2qmbj7.cloudfront.net/public/Mini_Coco_Cup_480p_1a7bd75ee8.mp4',
    },
    {
      name: 'Carousel',
      href: '/rides/hyderabad/rides/carousel',
      location: 'Hyderabad',
      description: 'Gallop around on colourful horses like a seasoned cowboy!',
      videoUrl:
        'https://d22pimhl2qmbj7.cloudfront.net/public/Carousel_480p_85c91d1be3.mp4',
    },
    {
      name: 'Crazy Cars',
      href: '/rides/bhubaneswar/rides/crazy-cars',
      location: 'Bhubaneswar',
      description:
        'Dash and crash into your friends’ cars in your very own Formula 1\n              circuit!',
      videoUrl:
        'https://d22pimhl2qmbj7.cloudfront.net/public/Crazy_Car_480p_c70c8a223b.mp4',
    },
    {
      name: 'Pony Train',
      href: '/rides/kochi/rides/pony-train',
      location: 'Kochi',
      description:
        'Hop onto a chariot-pulled pony ride through the world of fantasy!',
      videoUrl:
        'https://d22pimhl2qmbj7.cloudfront.net/public/Pony_Train_480p_6eb01f2b42.mp4',
    },
    {
      name: 'Kiddies Wheel',
      href: '/rides/bengaluru/rides/kiddies-wheel',
      location: 'Bengaluru',
      description:
        'A miniature giant wheel designed to give your children a taste of\n              real thrill without being half as scary.',
      videoUrl:
        'https://d22pimhl2qmbj7.cloudfront.net/public/Kiddies_Wheel_480p_f961a5151c.mp4',
    },
    {
      name: 'Funky Monkey',
      href: '/rides/hyderabad/rides/funky-monkey',
      location: 'Hyderabad',
      description: 'Plummet into a safe freefall with a tall & playful monkey!',
      videoUrl:
        'https://d22pimhl2qmbj7.cloudfront.net/public/Funky_Monkey_480p_29dfcf386b.mp4',
    },
    {
      name: 'Jack-O-Coaster',
      href: '/rides/bhubaneswar/rides/jack-o-coaster',
      location: 'Bhubaneswar',
      description:
        'Ride on the edge with sharp curves, steep climbs and dizzying\n              drops!',
      videoUrl:
        'https://d22pimhl2qmbj7.cloudfront.net/public/Jack_o_Coaster_74a32315bb.mp4',
    },
    {
      name: 'Mini Pirate Ship',
      href: '/rides/kochi/rides/mini-pirate-ship',
      location: 'Kochi',
      description:
        'Sail like a pirate on a miniature, adrenaline-filled flying boat!',
      videoUrl:
        'https://d22pimhl2qmbj7.cloudfront.net/public/Pirate_Ship_480p_b86cf5715a.mp4',
    },
    {
      name: 'Jumping Frog',
      href: '/rides/bengaluru/rides/jumping-frog',
      location: 'Bengaluru',
      description:
        'Hop on a frog and leap into ribbiting fun as you spin around!',
      videoUrl:
        'https://d22pimhl2qmbj7.cloudfront.net/public/Jumping_Frog_480p_c2a969782a.mp4',
    },
  ],
];


export const menuOptions = [
  {
    imageSrc:
      'https://d22pimhl2qmbj7.cloudfront.net/public/city_45e0a87cc8.svg?w=48&q=75',
    name: 'Resorts',
    description: 'Get a rejuvenating experience at Wonderla Resort',
  },
  {
    imageSrc:
      'https://d22pimhl2qmbj7.cloudfront.net/public/discount_e3ac599ad9.svg?w=48&q=75',
    name: 'Offers & Combos',
    description: 'Plan the perfect day with exciting offers',
  },
  {
    imageSrc:
      'https://d22pimhl2qmbj7.cloudfront.net/public/time_68af0a1a84.svg?w=48&q=75',
    name: 'Timings And Guidelines',
    description: 'Know the timings and other guidelines',
  },
  {
    imageSrc:
      'https://d22pimhl2qmbj7.cloudfront.net/public/about_us_3ae10e9512.svg?w=48&q=75',
    name: 'About Us',
    description: 'Know all about Wonderla',
  },
  {
    imageSrc:
      'https://d22pimhl2qmbj7.cloudfront.net/public/support_1_f316ee7cce.svg?w=48&q=75',
    name: 'Contact Us',
    description: 'Get In Touch Wordela Team',
  },
];
export const specialMenuOptions = [
  {
    imageSrc:
      'https://d22pimhl2qmbj7.cloudfront.net/public/playground_e8b25627b1.svg?w=48&q=75',
    name: 'Parks',
    description: 'Explore Your favourite Wonderla Park',
  },
  {
    imageSrc:
      'https://d22pimhl2qmbj7.cloudfront.net/public/unlink_1_bb57b8aa2f.svg?w=48&q=75',
    name: 'Quick Links',
    description: 'Explore all other relevant information here',
  },
];
export const premiumMenuLinks = [
  {
    imageSrc:
      'https://d22pimhl2qmbj7.cloudfront.net/public/group_booking_1adcd0978a.svg?w=96&q=75',
    name: 'Group Booking',
    description: 'Reach Out To Wanderla Team',
    bgColor: 'rgb(250, 214, 0)',
    textColor:"rgb(0,0,0)"
  },
  {
    imageSrc:
      'https://d22pimhl2qmbj7.cloudfront.net/public/tour_portal_c097403085.svg?w=96&q=75',
    name: 'Tour Operator Portal',
    description: 'Reach Out To Wanderla Team',
    bgColor: 'rgb(51,77,207)',
    textColor:"rgb(255,255,255)",
  },
  {
    imageSrc:
      'https://d22pimhl2qmbj7.cloudfront.net/public/group_booking_1adcd0978a.svg?w=96&q=75',
    name: 'Partner With Us',
    description: 'Reach Out To Wanderla Team',
    bgColor: 'rgb(250, 214, 0)',
    textColor:"rgb(0,0,0)"
  },
];
