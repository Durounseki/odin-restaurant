//Wings images
import classicWings from "./classic-wings.jpeg";
import sauceWings from "./sauce-wings2.jpeg";
import halfNHalf from "./half-n-half2.jpeg";
// import classicWings2 from "./classic-wings2.jpeg";

const wingSlides = [
    {
        name: "Classic Wings",
        src: classicWings,
    },
    {
        name: "Spicy Sauce Wings",
        src: sauceWings
    },
    {
        name: "Half and Half",
        src: halfNHalf
    }
]

import buffalo from "./buffalo.png"
import cajun from "./cajun.png"
import cheese from "./cheese.png"
import chiliSauce from "./chili-sauce.png"
import creamySesame from "./creamy-sesame.png"
import honeyMustard from "./honey-mustard.png"
import jerkGarlic from "./jerk-garlic.png"
import lemonPepper from "./lemon-pepper.png"
import mildBbq from "./mild-bbq.png"
import normal from "./normal.png"
import saltNPepper from "./salt-n-pepper.png"
import spicyBbq from "./spicy-bbq.png"
import sweetBbq from "./sweet-bbq.png"
import sweetChili from "./sweet-chili.png"
import tandoori from "./tandoori.png"

//Icons for extra information use font awesome

const asterisk = {name: "asterisk", faClass: "fa-solid fa-asterisk", description: "Tax included"}
const dry = {name:"dry", faClass: "fa-solid fa-cubes-stacked", description: "Dry rub"};
const wet = {name:"wet" , faClass: "fa-solid fa-droplet", description: "Sauce"};
const spicy = {name:"spicy", faClass: "fa-solid fa-pepper-hot", description: "Spicy hot"};
const topChoice = {
    name: "Top Choice",
    star: {name:"star", faClass: "fa-solid fa-star fa-stack-2x"}, 
    one: {name:"one", faClass: "fa-solid fa-1 fa-stack-1x fa-inverse"}
}

const Icons = [asterisk, dry, wet, spicy];

const wingsItems = [
    { name: "Jerk Garlic", src: jerkGarlic, icons: [dry]},
    { name: "Lemon Pepper", src: lemonPepper, icons: [topChoice, dry] },
    { name: "Cajun", src: cajun, icons: [dry,spicy] },
    { name: "Buffalo", src: buffalo, icons: [wet,spicy,spicy] },
    { name: "Sweet Chili", src: sweetChili, icons: [wet,spicy] },
    { name: "Normal", src: normal, icons: [dry] },
    { name: "Tandoori", src: tandoori, icons: [dry,spicy] },
    { name: "Salt & Pepper", src: saltNPepper, icons: [dry] },
    { name: "Chili Sauce", src: chiliSauce, icons: [wet,spicy] },
    { name: "Creamy Sesame", src: creamySesame, icons: [wet] },
    { name: "Honey Mustard", src: honeyMustard, icons: [wet] },
    { name: "Sweet BBQ", src: sweetBbq, icons: [wet] },
    { name: "Mild BBQ", src: mildBbq, icons: [wet,spicy] },
    { name: "Spicy BBQ", src: spicyBbq, icons: [wet,spicy,spicy] },
    { name: "Cheese", src: cheese, icons: [dry] },
]

//Fingers images
import classicFingers from "./fingers-classic.jpeg";
import fingersDips from "./fingers-dips.jpeg";
import classicFingers2 from "./fingers-classic2.jpeg";

const fingersSlides = [
    {
        name: "Classic Fingers",
        src: classicFingers
    },
    // {
    //     name: "Dip your finger",
    //     src: fingersDips
    // },
    {
        name:"Take Away",
        src:classicFingers2
    }
];

import buffaloDip from "./buffalo-dip.png"
import mildMustard from "./mild-mustard.png"
import ranch from "./ranch.png"
import chiliDip from "./chili-dip.png"
import creamySesameDip from "./creamy-sesame-dip.png"
import honeyMustardDip from "./honey-mustard-dip.png"
import sweetChiliDip from "./sweet-chili-dip.png"
import original from "./original.png"
import mildBbqDip from "./mild-bbq-dip.png"
import spicyBbqDip from "./spicy-bbq-dip.png"
import sweetBbqDip from "./sweet-bbq-dip.png"

const fingersItems = [
    { name: "Mild Mustard", src: mildMustard, icons: []},
    { name: "Ranch", src: ranch, icons: [] },
    { name: "Buffalo", src: buffaloDip, icons: [spicy,spicy] },
    { name: "Sweet Chili", src: sweetChiliDip, icons: [spicy] },
    { name: "Original sauce (included)", src: original, icons: [] },
    { name: "Chili", src: chiliDip, icons: [spicy,spicy] },
    { name: "Creamy Sesame", src: creamySesameDip, icons: [] },
    { name: "Honey Mustard", src: honeyMustardDip, icons: [] },
    { name: "Sweet BBQ", src: sweetBbqDip, icons: [] },
    { name: "Mild BBQ", src: mildBbqDip, icons: [spicy] },
    { name: "Spicy BBQ", src: spicyBbqDip, icons: [spicy,spicy] },
]


//Potatoes images
import classicPotatoes from "./potatoes2.jpeg";
import classicPotatoes2 from "./potatoes3.jpeg";

const potatoesSlides = [
    {
        name: "Potatoes 1",
        src: classicPotatoes
    },
    {
        name: "Potatoes 2",
        src: classicPotatoes2
    }
];

//Sandwich images
import classicSandwich from "./classic-sandwich2.jpeg";
import spicySandwich from "./spicy-sandwich.jpeg";
import classicSandwich2 from "./classic-sandwich4.jpeg";

const sandwichSlides = [
    {
        name: "Classic Sandwich",
        src: classicSandwich
    },
    // {
    //     name: "Spicy Sandwich",
    //     src: spicySandwich
    // },
    // {
    //     name: "Classic Sandwich 2",
    //     src: classicSandwich2
    // }
];

import sandwichIcon from "./sandwich-icon.png";
import spicySandwichIcon from "./spicy-sandwich-icon.png";
import potatoesIcon from "./potatoes-icon.png";


const sandwichPotatoesItems = [
    {name: "Original sauce", src: sandwichIcon, icons: []},
    {name: "Spicy sauce", src: spicySandwichIcon, icons: [spicy,spicy]},
    {name: "French Fries", src: potatoesIcon, icons: []},
    {name: "Fries include ketchup", src: buffaloDip, icons: []}

]
export { wingSlides, wingsItems, fingersSlides, fingersItems, potatoesSlides, sandwichSlides, sandwichPotatoesItems, Icons };