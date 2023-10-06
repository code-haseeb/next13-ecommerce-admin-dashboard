import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const CarouselSlider = (props) => {
  const {
    autoPlay,
    swipeable,
    draggeable,
    showDots,
    infinite,
    keyboardControl,
    autoPlaySpeed,
    ssr,
    response,
    children,
  } = props;

  return (
    <Carousel
      autoPlay={autoPlay}
      infinite={infinite}
      showDots={showDots}
      ssr={ssr}
      swipeable={swipeable}
      draggeable={draggeable}
      keyboardControl={keyboardControl}
      autoPlaySpeed={autoPlaySpeed}
      responsive={responsive}
    >
      {children}
    </Carousel>
  );
};
