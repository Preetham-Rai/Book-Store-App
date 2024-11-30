import book_1 from "./books/book-1.png";
import book_2 from "./books/book-2.png";
import book_3 from "./books/book-3.png";
import book_4 from "./books/book-4.png";
import book_5 from "./books/book-5.png";
import book_6 from "./books/book-6.png";
import book_7 from "./books/book-7.png";
import book_8 from "./books/book-8.png";
import book_9 from "./books/book-9.png";
import book_10 from "./books/book-10.png";
import book_11 from "./books/book-11.png";
import book_12 from "./books/book-12.png";
import book_13 from "./books/book-13.png";
import book_14 from "./books/book-14.png";
import book_15 from "./books/book-15.png";
import book_16 from "./books/book-16.png";
import book_17 from "./books/book-17.png";
import book_18 from "./books/book-18.png";
import book_19 from "./books/book-19.png";
import book_20 from "./books/book-20.png";

import avatar from "./avatar.png";
import bannerImage from "./bannerImage.png";
import footerIMage from "./footer-logo.png";

export const assets = {
  avatar,
  bannerImage,
  footerIMage,
};

export const books = [
  {
    _id: 1,
    title: "How to Grow Your Online Store",
    description:
      "Learn the best strategies to grow your online store in today's competitive market.",
    category: "business",
    trending: true,
    coverImage: [book_1],
    oldPrice: 29.99,
    newPrice: 19.99,
  },
  {
    _id: 2,
    title: "Top 10 Fiction Books This Year",
    description:
      "A curated list of the best fiction books that are trending this year.",
    category: "books",
    trending: true,
    coverImage: [book_2],
    oldPrice: 24.99,
    newPrice: 14.99,
  },
  {
    _id: 3,
    title: "Mastering SEO in 2024",
    description:
      "Tips and tricks to boost your SEO and rank higher on search engines.",
    category: "marketing",
    trending: true,
    coverImage: [book_3],
    oldPrice: 39.99,
    newPrice: 29.99,
  },
  {
    _id: 4,
    title: "Best eCommerce Platforms",
    description:
      "A comprehensive guide on choosing the best eCommerce platforms for 2024.",
    category: "business",
    trending: false,
    coverImage: [book_4],
    oldPrice: 49.99,
    newPrice: 39.99,
  },
  {
    _id: 5,
    title: "Non-Fiction Reads You Must Try",
    description:
      "Our top picks for non-fiction books to add to your reading list.",
    category: "books",
    trending: true,
    coverImage: [book_5],
    oldPrice: 19.99,
    newPrice: 9.99,
  },
  {
    _id: 6,
    title: "Ultimate Guide to Digital Marketing",
    description: "A complete guide to digital marketing strategies for 2024.",
    category: "marketing",
    trending: false,
    coverImage: [book_6],
    oldPrice: 44.99,
    newPrice: 34.99,
  },
  {
    _id: 7,
    title: "The First Days",
    description:
      "Katie is driving to work one beautiful day when a dead man jumps into her car and tries to eat her.  That same morning, Jenni opens a bedroom door to find her husband devouring their toddler son. ",
    category: "horror",
    trending: true,
    coverImage: [book_7],
    oldPrice: 59.99,
    newPrice: 49.99,
  },
  {
    _id: 8,
    title: "The Hunger Games",
    description:
      "Could you survive on your own in the wild, with every one out to make sure you don't live to see the morning?",
    category: "fiction",
    trending: true,
    coverImage: [book_8],
    oldPrice: 21.99,
    newPrice: 16.99,
  },
  {
    _id: 9,
    title: "Harry Potter and the Order of the Phoenix",
    description:
      "Harry Potter is about to start his fifth year at Hogwarts School of Witchcraft and Wizardry. Unlike most schoolboys, Harry never enjoys his summer holidays",
    category: "adventure",
    trending: false,
    coverImage: [book_9],
    oldPrice: 27.99,
    newPrice: 18.99,
  },
  {
    _id: 10,
    title: "Pride and Prejudice",
    description:
      "The romantic clash between the opinionated Elizabeth and her proud beau, Mr. Darcy, is a splendid performance of civilized sparring.",
    category: "fiction",
    trending: true,
    coverImage: [book_10],
    oldPrice: 14.99,
    newPrice: 10.99,
  },
  {
    _id: 11,
    title: "To Kill a Mockingbird",
    description:
      "The unforgettable novel of a childhood in a sleepy Southern town and the crisis of conscience that rocked it. 'To Kill A Mockingbird' became both an instant bestseller",
    category: "fiction",
    trending: true,
    coverImage: [book_11],
    oldPrice: 32.99,
    newPrice: 25.99,
  },
  {
    _id: 12,
    title: "The Fault in Our Stars",
    description:
      "Despite the tumor-shrinking medical miracle that has bought her a few years, Hazel has never been anything but terminal, her final chapter inscribed upon diagnosis. ",
    category: "business",
    trending: true,
    coverImage: [book_12],
    oldPrice: 19.99,
    newPrice: 9.99,
  },
  {
    _id: 13,
    title: "The Picture of Dorian Gray",
    description:
      "Oscar Wilde’s only novel is the dreamlike story of a young man who sells his soul for eternal youth and beauty.",
    category: "horror",
    trending: true,
    coverImage: [book_13],
    oldPrice: 26.99,
    newPrice: 21.99,
  },
  {
    _id: 14,
    title: "The Giving Tree",
    description:
      "'Once there was a tree...and she loved a little boy.'So begins a story of unforgettable perception, beautifully written and illustrated by the gifted and versatile Shel Silverstein.",
    category: "fiction",
    trending: false,
    coverImage: [book_14],
    oldPrice: 34.99,
    newPrice: 24.99,
  },
  {
    _id: 15,
    title: "Gone with the Wind",
    description:
      "Scarlett O'Hara, the beautiful, spoiled daughter of a well-to-do Georgia plantation owner, must use every means at her disposal to claw her way out of the poverty she finds herself in after Sherman's March to the Sea.",
    category: "fiction",
    trending: false,
    coverImage: [book_15],
    oldPrice: 22.99,
    newPrice: 12.99,
  },
  {
    _id: 16,
    title: "The Lightning Thief",
    description:
      "Percy Jackson is a good kid, but he can't seem to focus on his schoolwork or control his temper. And lately, being away at boarding school is only getting worse - Percy could have sworn his pre-algebra teacher turned into a monster and tried to kill him",
    category: "fiction",
    trending: false,
    coverImage: [book_16],
    oldPrice: 24.99,
    newPrice: 19.99,
  },
  {
    _id: 17,
    title: "Alice’s Adventures in Wonderland",
    description:
      "When Alice sees a white rabbit take a watch out of its waistcoat pocket she decides to follow it, and a sequence of most unusual events is set in motion. This mini book contains the entire topsy-turvy stories of Alice's Adventures in Wonderland",
    category: "adventure",
    trending: true,
    coverImage: [book_17],
    oldPrice: 49.99,
    newPrice: 39.99,
  },
  {
    _id: 18,
    title: "Divergent",
    description:
      "On an appointed day of every year, all sixteen-year-olds must select the faction to which they will devote the rest of their lives. For Beatrice, the decision is between staying with her family and being who she really is",
    category: "business",
    trending: true,
    coverImage: [book_18],
    oldPrice: 18.99,
    newPrice: 12.99,
  },
  {
    _id: 19,
    title: "The Alchemist",
    description:
      "Paulo Coelho's masterpiece tells the mystical story of Santiago, an Andalusian shepherd boy who yearns to travel in search of a worldly treasure.",
    category: "adventure",
    trending: true,
    coverImage: [book_19],
    oldPrice: 35.99,
    newPrice: 27.99,
  },
  {
    _id: 20,
    title: "Four Thousand Weeks",
    description:
      "Nobody needs to be told there isn’t enough time. We’re obsessed with our lengthening to-do lists, overfilled inboxes, work-life balance, and ceaseless battle against distraction; we’re deluged with advice on becoming more productive and efficient",
    category: "business",
    trending: false,
    coverImage: [book_20],
    oldPrice: 24.99,
    newPrice: 14.99,
  },
];
