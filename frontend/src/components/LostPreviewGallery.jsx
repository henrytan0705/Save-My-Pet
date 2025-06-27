import React, { useEffect } from "react";
import MediaRenderer from "./MediaRenderer";
import { ErrorBoundary } from 'react-error-boundary';
import cocker from "../assets/cocker-spaniel.png"

const EmbedErrorBoundary = ({ children, fallback = <div>Failed to load embed</div> }) => {
    const [hasError, setHasError] = React.useState(false);

    if (hasError) {
        return fallback;
    }

    return (
        <div className="h-full" onError={() => setHasError(true)}>
            {children}
        </div>
    );
};

const LostPreviewGallery = () => {
    // Combined gallery items (embeds + images)
    const galleryItems = [
        {
            type: "twitter",
            url: "https://twitter.com/___jxhsjcv53624/status/1932060669857153152",
            fallback: (
                <div className="p-4">
                    <h3 className="font-bold">Prince is lost!</h3>
                    <p>Couldn't load Twitter post. <a
                        href="https://twitter.com/___jxhsjcv53624/status/1932060669857153152"
                        className="text-blue-500 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        View on Twitter
                    </a></p>
                </div>
            )
        },
        {
            type: "reddit",
            url: "https://www.reddit.com/r/nyc/comments/1l3r2qw/loststolen_dog_in_east_village/",
            fallback: (
                <div className="p-4">
                    <h3 className="font-bold">LOST/STOLEN DOG IN EAST VILLAGE</h3>
                    <p>Couldn't load Reddit post. <a
                        href="https://www.reddit.com/r/nyc/comments/1l3r2qw/loststolen_dog_in_east_village/"
                        className="text-blue-500 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        View on Reddit
                    </a></p>
                </div>
            )
        },
        {
            type: "image",
            src: cocker,
            alt: "Missing golden retriever"
        }
        // Add more items as needed
    ];

    useEffect(() => {
        // Load Twitter widget if any Twitter URLs exist
        if (galleryItems.some(item => item.type === "twitter") &&
            !document.querySelector('script[src*="twitter.com/widgets.js"]')) {
            const twitterScript = document.createElement('script');
            twitterScript.src = 'https://platform.twitter.com/widgets.js';
            twitterScript.async = true;
            document.body.appendChild(twitterScript);
        }

        // Load Reddit widget if any Reddit URLs exist
        if (galleryItems.some(item => item.type === "reddit") &&
            !document.querySelector('script[src*="embed.reddit.com/widgets.js"]')) {
            const redditScript = document.createElement('script');
            redditScript.src = 'https://embed.reddit.com/widgets.js';
            redditScript.async = true;
            document.body.appendChild(redditScript);
        }
    }, []);
    return (
        <div className="bg-gray-50 flex items-center justify-center">
            <div className="max-w-12xl mx-auto">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 px-4 md:px-0 ">
                    Recent Missing Pets
                </h2>
                <div className="flex flex-col lg:flex-row lg:overflow-x-auto lg:snap-x lg:snap-mandatory gap-4 px-4 lg:px-0 items-center justify-center">
                    {galleryItems.map((item, index) => (
                        <div
                            key={index}
                            jsx
                            className="w-full lg:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.334rem)] xl:w-[calc(25%-1.5rem)] flex-shrink-0 bg-white rounded-lg shadow-md overflow-hidden flex items-center justify-center min-h-[500px]"
                        >
                            {item.type === "image" ? (
                                <MediaRenderer
                                    src={item.src}
                                    alt={item.alt}
                                    className="w-full h-full object-cover"
                                />
                            ) : (
                                <EmbedErrorBoundary fallback={item.fallback}>
                                    <div className="h-full w-full flex items-center justify-center">
                                        {item.type === "twitter" && (
                                            <blockquote className="twitter-tweet">
                                                <a href={item.url}></a>
                                            </blockquote>
                                        )}
                                        {item.type === "reddit" && (
                                            <blockquote
                                                className="reddit-embed-bq"
                                                style={{ height: "500px" }}
                                                data-embed-height="740"
                                                data-embed-show-media="true"
                                                data-embed-show-comments="false"
                                            >
                                                <a href={item.url}></a>
                                            </blockquote>
                                        )}
                                    </div>
                                </EmbedErrorBoundary>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default LostPreviewGallery;