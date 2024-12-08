// testimonialData.js

import userimgOne from "../assets/images/user1.png";
import userimgTwo from "../assets/images/user2.png";
import userimgThird from "../assets/images/user3.png";

const testimonialData = [
    {
        id: 1,
        imgId: userimgTwo,
        review: "This is due to their best service, pricing and customer support. It's thoroughly refreshing to receive such a personal touch. Duis aute irure lupsum reprehenderit.",
        name: "Jessica Brown",
        rating: 5, // Add a rating to dynamically render the stars
    },
    {
        id: 2,
        imgId: userimgOne,
        review: "This is due to their best service, pricing, and customer support. It's thoroughly refreshing to receive such a personal touch. Duis aute irure lupsum reprehenderit.",
        name: "Shirley Smith",
        rating: 4,
    },
    {
        id: 3,
        imgId: userimgThird,
        review: "This is due to their best service, pricing, and customer support. It's thoroughly refreshing to receive such a personal touch. Duis aute irure lupsum reprehenderit.",
        name: "Kevin Martin",
        rating: 5,
    }
];

export default testimonialData;
