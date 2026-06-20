/**
 * Utility to clean HTTP header objects by removing null/undefined values.
 * Safari sessions from /api/v1/self don't include csrftoken, leaving it null.
 * Angular's HTTP client crashes when trying to stringify null header values.
 */
export function cleanHeaders(headers: { [key: string]: any }): { [key: string]: string } {
    const cleaned: { [key: string]: string } = {};
    Object.entries(headers).forEach(([key, value]) => {
        if (value != null && value !== '') {
            cleaned[key] = String(value);
        }
    });
    return cleaned;
}
