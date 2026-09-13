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
import { Rectangle2DFromJSON, Rectangle2DToJSON, } from './Rectangle2D';
/**
 * Check if a given object implements the FoldPanel interface.
 */
export function instanceOfFoldPanel(value) {
    if (!('area' in value) || value['area'] === undefined)
        return false;
    if (!('panelId' in value) || value['panelId'] === undefined)
        return false;
    return true;
}
export function FoldPanelFromJSON(json) {
    return FoldPanelFromJSONTyped(json, false);
}
export function FoldPanelFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'area': Rectangle2DFromJSON(json['area']),
        'panelId': json['panel_id'],
        'role': json['role'] == null ? undefined : json['role'],
    };
}
export function FoldPanelToJSON(json) {
    return FoldPanelToJSONTyped(json, false);
}
export function FoldPanelToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'area': Rectangle2DToJSON(value['area']),
        'panel_id': value['panelId'],
        'role': value['role'],
    };
}
