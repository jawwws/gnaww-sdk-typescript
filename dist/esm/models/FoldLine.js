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
import { Line2DFromJSON, Line2DToJSON, } from './Line2D';
/**
 * @export
 */
export const FoldLineAxisEnum = {
    Vertical: 'vertical',
    Horizontal: 'horizontal',
    Custom: 'custom'
};
/**
 * @export
 */
export const FoldLineDirectionEnum = {
    Valley: 'valley',
    Mountain: 'mountain',
    Unknown: 'unknown'
};
/**
 * Check if a given object implements the FoldLine interface.
 */
export function instanceOfFoldLine(value) {
    if (!('line' in value) || value['line'] === undefined)
        return false;
    if (!('sequence' in value) || value['sequence'] === undefined)
        return false;
    return true;
}
export function FoldLineFromJSON(json) {
    return FoldLineFromJSONTyped(json, false);
}
export function FoldLineFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'axis': json['axis'] == null ? undefined : json['axis'],
        'direction': json['direction'] == null ? undefined : json['direction'],
        'line': Line2DFromJSON(json['line']),
        'sequence': json['sequence'],
    };
}
export function FoldLineToJSON(json) {
    return FoldLineToJSONTyped(json, false);
}
export function FoldLineToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'axis': value['axis'],
        'direction': value['direction'],
        'line': Line2DToJSON(value['line']),
        'sequence': value['sequence'],
    };
}
