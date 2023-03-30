import CardNews from "../common/CardNews";
import { v4 as uuidv4 } from "uuid";
import Carroussel from "../common/Caroussel";

function AboutMe() {
  let cards = [
    {
      key: uuidv4(),
      content: <CardNews />,
    },
    {
      key: uuidv4(),
      content: <CardNews />,
    },
    {
      key: uuidv4(),
      content: <CardNews />,
    },
    {
      key: uuidv4(),
      content: <CardNews />,
    },
    {
      key: uuidv4(),
      content: <CardNews />,
    },
    {
      key: uuidv4(),
      content: <CardNews />,
    },
    {
      key: uuidv4(),
      content: <CardNews />,
    },
  ];
  return (
    <div>
      <h2
        id="about"
        className="cursor-default text-3xl font-bold text-slate-700"
        data-aos="fade-up"
      >
        VERSEHUB TEST
      </h2>
      <Carroussel
        cards={cards}
        height="500px"
        width="100%"
        margin="0 auto"
        offset={2}
        showArrows={false}
      />
    </div>
  );
}

export default AboutMe;
