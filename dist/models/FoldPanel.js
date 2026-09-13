"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.instanceOfFoldPanel = instanceOfFoldPanel;
exports.FoldPanelFromJSON = FoldPanelFromJSON;
exports.FoldPanelFromJSONTyped = FoldPanelFromJSONTyped;
exports.FoldPanelToJSON = FoldPanelToJSON;
exports.FoldPanelToJSONTyped = FoldPanelToJSONTyped;
const Rectangle2D_1 = require("./Rectangle2D");
/**
 * Check if a given object implements the FoldPanel interface.
 */
function instanceOfFoldPanel(value) {
    if (!('area' in value) || value['area'] === undefined)
        return false;
    if (!('panelId' in value) || value['panelId'] === undefined)
        return false;
    return true;
}
function FoldPanelFromJSON(json) {
    return FoldPanelFromJSONTyped(json, false);
}
function FoldPanelFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'area': (0, Rectangle2D_1.Rectangle2DFromJSON)(json['area']),
        'panelId': json['panel_id'],
        'role': json['role'] == null ? undefined : json['role'],
    };
}
function FoldPanelToJSON(json) {
    return FoldPanelToJSONTyped(json, false);
}
function FoldPanelToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'area': (0, Rectangle2D_1.Rectangle2DToJSON)(value['area']),
        'panel_id': value['panelId'],
        'role': value['role'],
    };
}
