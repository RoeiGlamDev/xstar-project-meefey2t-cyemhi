export const BRAND_NAME = "AI";

export const COLORS = {
    primary: "#FF4500", // orange
    secondary: "#FF0000", // red
    background: "#FFFFFF", // white
};

export const CONFIG = {
    websiteTitle: "VidNexus - AI-Powered Video Creation",
    description: "Revolutionizing video creation with cutting-edge AI technology.",
    industry: "Technology",
    version: "1.0.0",
};

/
 * AI Video Creation Configuration
 * This interface defines the structure for video creation settings.
 */
export interface VideoCreationSettings {
    resolution: string; // e.g., '1080p', '4K'
    frameRate: number; // e.g., 24, 30, 60
    format: string; // e.g., 'mp4', 'avi'
    duration: number; // duration in seconds
}

/
 * AI Video Object
 * This interface defines the structure for an AI-generated video.
 */
export interface AIVideo {
    id: string; // Unique identifier for the video
    title: string; // Title of the video
    description: string; // Description of the video content
    settings: VideoCreationSettings; // Video creation settings
    createdAt: Date; // Creation timestamp
}

/
 * Example Video Creation Settings
 * These settings can be used for initializing a new video creation process.
 */
export const defaultVideoSettings: VideoCreationSettings = {
    resolution: "1080p",
    frameRate: 30,
    format: "mp4",
    duration: 120, // Default duration set to 2 minutes
};