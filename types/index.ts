import { VideoFormat, VideoQuality } from './videoTypes';

/
 * @interface IVideo
 * @description Represents a video created by the AI platform.
 * @property {string} id - Unique identifier for the video.
 * @property {string} title - Title of the video.
 * @property {string} description - Description of the video.
 * @property {VideoFormat} format - The format of the video (e.g., MP4, AVI).
 * @property {VideoQuality} quality - The quality setting of the video (e.g., 720p, 1080p).
 * @property {Date} createdAt - The date the video was created.
 * @property {string} creatorId - Identifier for the user who created the video.
 */
export interface IVideo {
    id: string;
    title: string;
    description: string;
    format: VideoFormat;
    quality: VideoQuality;
    createdAt: Date;
    creatorId: string;
}

/
 * @interface IUser
 * @description Represents a user of the AI platform.
 * @property {string} id - Unique identifier for the user.
 * @property {string} username - The username of the user.
 * @property {string} email - The email address of the user.
 * @property {string} passwordHash - The hashed password of the user.
 * @property {Date} createdAt - The date the user account was created.
 */
export interface IUser {
    id: string;
    username: string;
    email: string;
    passwordHash: string;
    createdAt: Date;
}

/
 * @interface IVideoRequest
 * @description Represents a request to create a new video using AI technology.
 * @property {string} title - Title for the new video.
 * @property {string} description - Description for the new video.
 * @property {VideoFormat} format - Desired format for the new video.
 * @property {VideoQuality} quality - Desired quality for the new video.
 * @property {string} creatorId - Identifier for the user making the request.
 */
export interface IVideoRequest {
    title: string;
    description: string;
    format: VideoFormat;
    quality: VideoQuality;
    creatorId: string;
}

/
 * @enum VideoFormat
 * @description Enum for supported video formats.
 */
export enum VideoFormat {
    MP4 = 'MP4',
    AVI = 'AVI',
    WEBM = 'WEBM',
}

/
 * @enum VideoQuality
 * @description Enum for supported video quality settings.
 */
export enum VideoQuality {
    SD = '480p',
    HD = '720p',
    FullHD = '1080p',
    UltraHD = '4K',
}

/
 * @function createVideo
 * @description Function to create a new video using the AI platform.
 * @param {IVideoRequest} request - The request object containing video details.
 * @returns {IVideo} - The created video object.
 */
export function createVideo(request: IVideoRequest): IVideo {
    const newVideo: IVideo = {
        id: generateUniqueId(),
        title: request.title,
        description: request.description,
        format: request.format,
        quality: request.quality,
        createdAt: new Date(),
        creatorId: request.creatorId,
    };
    // Logic to save the video to a database would go here
    return newVideo;
}

/
 * @function generateUniqueId
 * @description Generates a unique identifier for new videos.
 * @returns {string} - A unique identifier string.
 */
function generateUniqueId(): string {
    return 'vid-' + Math.random().toString(36).substr(2, 9);
}