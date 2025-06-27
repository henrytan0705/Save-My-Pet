// components/MediaRenderer.jsx
import React from "react";


const MediaRenderer = ({ src, url, alt, className = "" }) => {
    // Handle local images first
    if (src) {
        return (
            <img
                src={src}
                alt={alt}
                className={`${className} rounded-lg`}
                loading="lazy"
            />
        );
    }

    // Only process URL if it exists
    if (url) {
        // Check if URL is an image (supports common formats)
        const isImage = /\.(jpg|jpeg|png|gif|webp|avif)$/i.test(url);

        // Check if URL is from Reddit/Twitter (for embeds)
        const isRedditEmbed = url.includes("reddit.com") || url.includes("redd.it");
        const isTwitterEmbed = url.includes("twitter.com") || url.includes("x.com");

        if (isImage) {
            return (
                <div className="gallery-item">
                    <img
                        src={url}
                        alt={alt}
                        className="w-full h-auto object-cover rounded-lg"
                        loading="lazy"
                    />
                </div>
            );
        }

        if (isRedditEmbed) {
            return (
                <div className="gallery-item bg-gray-100 p-4 rounded-lg">
                    <RedditEmbed url={url} />
                </div>
            );
        }

        if (isTwitterEmbed) {
            return (
                <div className="gallery-item">
                    <TwitterEmbed url={url} />
                </div>
            );
        }
    }

    // Fallback for unsupported cases
    return (
        <div className="gallery-item">
            {url ? (
                <a href={url} target="_blank" rel="noopener noreferrer">
                    {url}
                </a>
            ) : (
                <div>No media source provided</div>
            )}
        </div>
    );
};

// Keep your RedditEmbed and TwitterEmbed components the same
const RedditEmbed = ({ url }) => (
    <blockquote className="reddit-embed">
        <a href={url}></a>
    </blockquote>
);

const TwitterEmbed = ({ url }) => (
    <blockquote className="twitter-tweet">
        <a href={url}></a>
    </blockquote>
);

export default MediaRenderer;