import { Video, User } from './types';

/
 * Utility functions for the AI application.
 * @module utils
 */

/
 * Function to generate a class name string based on conditions.
 * This is essential for applying modern design principles to our AI website.
 * 
 * @param baseClass - The base class name to append conditions to.
 * @param conditions - An object containing condition keys and their boolean values.
 * @returns A string of class names based on the provided conditions.
 */
export function cn(baseClass: string, conditions: Record<string, boolean>): string {
    return Object.keys(conditions)
        .filter(key => conditions[key])
        .reduce((acc, key) => ${acc} ${key}, baseClass)
        .trim();
}

/
 * Formatter functions to handle various data formats for the AI application.
 * This is crucial for ensuring that video and user data is displayed correctly on the VidNexus platform.
 */
export const formatters = {
    /
     * Format the duration of a video.
     * 
     * @param seconds - The duration of the video in seconds.
     * @returns A string formatted as "MM:SS".
     */
    formatVideoDuration: (seconds: number): string => {
        const minutes = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return ${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')};
    },

    /
     * Format user names for display.
     * 
     * @param user - The user object.
     * @returns A string representing the formatted user name.
     */
    formatUserName: (user: User): string => {
        return ${user.firstName} ${user.lastName};
    },
};

/
 * Video utility function to create a new video object.
 * This function is designed for the VidNexus platform to create AI-generated videos.
 * 
 * @param title - The title of the video.
 * @param creator - The user who created the video.
 * @param duration - The duration of the video in seconds.
 * @returns A Video object with the provided details.
 */
export function createVideo(title: string, creator: User, duration: number): Video {
    return {
        title,
        creator,
        duration,
        createdAt: new Date(),
        updatedAt: new Date(),
    };
}