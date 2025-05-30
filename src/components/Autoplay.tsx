import { Box, useMediaQuery } from "@mui/material";
import { SwiperSlide } from "swiper/react";
import { Autoplay as SwiperAutoplay } from "swiper/modules";
import { Swiper } from "./Swiper";

// @ts-expect-error
import "swiper/css";
// @ts-expect-error
import "swiper/css/autoplay";

export const Autoplay = () => {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("md"));

  return (
    <Box>
      <Swiper
        modules={[SwiperAutoplay]}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        spaceBetween={24}
        slidesPerView={isMobile ? 3 : 6}
        style={{ padding: "0 16px" }} // Add padding to create space between slides
      >
        <SwiperSlide>
          <Box component='img' src='/1.png' width='100%' height='auto' />
        </SwiperSlide>
        <SwiperSlide>
          <Box component='img' src='/2.png' width='100%' height='auto' />
        </SwiperSlide>
        <SwiperSlide>
          <Box component='img' src='/3.png' width='100%' height='auto' />
        </SwiperSlide>
        <SwiperSlide>
          <Box component='img' src='/4.png' width='100%' height='auto' />
        </SwiperSlide>
        <SwiperSlide>
          <Box component='img' src='/5.png' width='100%' height='auto' />
        </SwiperSlide>
        <SwiperSlide>
          <Box component='img' src='/6.png' width='100%' height='auto' />
        </SwiperSlide>
        <SwiperSlide>
          <Box component='img' src='/1.png' width='100%' height='auto' />
        </SwiperSlide>
        <SwiperSlide>
          <Box component='img' src='/2.png' width='100%' height='auto' />
        </SwiperSlide>
        <SwiperSlide>
          <Box component='img' src='/3.png' width='100%' height='auto' />
        </SwiperSlide>
        <SwiperSlide>
          <Box component='img' src='/4.png' width='100%' height='auto' />
        </SwiperSlide>
        <SwiperSlide>
          <Box component='img' src='/5.png' width='100%' height='auto' />
        </SwiperSlide>
        <SwiperSlide>
          <Box component='img' src='/6.png' width='100%' height='auto' />
        </SwiperSlide>
      </Swiper>
    </Box>
  );
};
