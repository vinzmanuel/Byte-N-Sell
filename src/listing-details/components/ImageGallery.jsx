import React, { useEffect } from "react";
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CustomArrow = ({ className, style, onClick, direction }) => {
    const isLeft = direction === "left";
    return (
        <div
            className={className}
            style={{
            ...style,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "rgba(0, 0, 0, 0.0)",
            color: "#ff",
            borderRadius: "50%",
            width: "40px",
            height: "40px",
            position: "absolute",
            top: "50%",
            transform: "translateY(-50%)",
            [isLeft ? "left" : "right"]: "10px", // Dynamic positioning for left or right
            zIndex: 10,
            cursor: "pointer",
            }}
            onClick={onClick}
        >
            {isLeft ? "<" : ">"}
        </div>
        );
    };

function ImageGallery({ listingDetails }) {
    useEffect(() => {
        Fancybox.bind("[data-fancybox]", {
        Thumbs: {
            autoStart: true,
        },
        });

        return () => {
        Fancybox.destroy();
        };
    }, []);

    const sliderSettings = {
        dots: true,
        infinite: false,
        speed: 600,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: <CustomArrow direction="left" />,
        nextArrow: <CustomArrow direction="right" />,
    };

    const images = listingDetails?.images;

    return (
        <div className="items-center">
        {images?.length > 1 ? (
            <Slider {...sliderSettings}>
            {images.map((image, index) => (
                <div key={index}>
                <a href={image?.imageUrl} data-fancybox="gallery"  data-fancybox-index={index}>
                    <img
                    src={image?.imageUrl}
                    className="w-full h-[500px] object-cover rounded-xl"
                    alt={`Slide ${index + 1}`}
                    />
                </a>
                </div>
            ))}
            </Slider>
        ) : (
            <div>
            {images?.[0] && (
                <a href={images[0]?.imageUrl} data-fancybox="gallery">
                <img
                    src={images[0]?.imageUrl}
                    className="w-full h-[500px] object-cover rounded-xl"
                    alt="Single Image"
                />
                </a>
            )}
            </div>
        )}
        </div>
    );
}

export default ImageGallery;
