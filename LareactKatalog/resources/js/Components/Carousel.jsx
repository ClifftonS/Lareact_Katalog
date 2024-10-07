const Carousel = ({ images }) => {
    return (
        <div
            id="default-carousel"
            className="relative w-full"
            data-carousel="static"
        >
            {/* Carousel wrapper */}
            <div className="relative h-56 overflow-hidden rounded-lg md:h-56">
                {images.map((image, i) => (
                    <div
                        className="hidden duration-500 ease-in-out"
                        key={i}
                        data-carousel-item={i == 0 && "active"}
                    >
                        <img
                            src={`/img/${image.image}`}
                            className={`absolute object-contain block w-full h-full ${
                                i % 2 == 0 ? "bg-gray-600" : "bg-gray-400"
                            }  -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2`}
                            alt="..."
                        />
                    </div>
                ))}
            </div>
            {/* Slider indicators */}
            {images.length > 1 && (
                <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse translate-y-11">
                    {images.map((_, i) => (
                        <button
                            type="button"
                            className="w-3 h-3 bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800 rounded-full"
                            aria-current="true"
                            aria-label="Slide 1"
                            data-carousel-slide-to={i}
                            key={i}
                        />
                    ))}
                </div>
            )}
            {/* Slider controls */}
            {images.length > 1 && (
                <>
                    <button
                        type="button"
                        className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                        data-carousel-prev
                    >
                        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                            <svg
                                className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 6 10"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M5 1 1 5l4 4"
                                />
                            </svg>
                            <span className="sr-only">Previous</span>
                        </span>
                    </button>
                    <button
                        type="button"
                        className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                        data-carousel-next
                    >
                        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                            <svg
                                className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 6 10"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="m1 9 4-4-4-4"
                                />
                            </svg>
                            <span className="sr-only">Next</span>
                        </span>
                    </button>
                </>
            )}
        </div>
    );
};

export default Carousel;
