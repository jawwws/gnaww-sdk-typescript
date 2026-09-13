/* tslint:disable */
/* eslint-disable */
/**
 * Gnaww Developer API
 * Reviewed public print-intelligence contract for direct HTTP, CLI, SDK and MCP consumers. Capability fit is not price, live availability, producer acceptance or an order.
 *
 * The version of the OpenAPI document: 0.1
 *
 *
 */
/**
 * @export
 */
export const PublicUnderstoodSizeOrientationEnum = {
    Portrait: 'portrait',
    Landscape: 'landscape',
    Square: 'square'
};
/**
 * Check if a given object implements the PublicUnderstoodSize interface.
 */
export function instanceOfPublicUnderstoodSize(value) {
    return true;
}
export function PublicUnderstoodSizeFromJSON(json) {
    return PublicUnderstoodSizeFromJSONTyped(json, false);
}
export function PublicUnderstoodSizeFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'heightMm': json['height_mm'] == null ? undefined : json['height_mm'],
        'orientation': json['orientation'] == null ? undefined : json['orientation'],
        'standardName': json['standard_name'] == null ? undefined : json['standard_name'],
        'widthMm': json['width_mm'] == null ? undefined : json['width_mm'],
    };
}
export function PublicUnderstoodSizeToJSON(json) {
    return PublicUnderstoodSizeToJSONTyped(json, false);
}
export function PublicUnderstoodSizeToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'height_mm': value['heightMm'],
        'orientation': value['orientation'],
        'standard_name': value['standardName'],
        'width_mm': value['widthMm'],
    };
}
