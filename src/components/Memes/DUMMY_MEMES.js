import meme1 from '../../images/brian.jpg';
import meme2 from '../..//images/problemy.jpg';
import meme3 from '../..//images/foreveralone.jpg';
import meme4 from '../..//images/kredki.jpg';

const DUMMY_MEMES = [
    {
      id: "e1",
      title: "Polonez",
      amount: meme1,
      date: new Date(2020, 7, 14),
      upvotes: 7,
      downvotes: 0,
    },
    { id: "e2", title: "Problemy pierwszego świata", amount: meme2, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Forever Alone",
      amount: meme3,
      date: new Date(2021, 2, 28),
      upvotes: 4,
      downvotes: 2,
    },
    {
      id: "e4",
      title: "Kredki",
      amount: meme4,
      date: new Date(2021, 5, 12),
      upvotes: 10,
      downvotes: 6,
    },
  ];

  export default DUMMY_MEMES