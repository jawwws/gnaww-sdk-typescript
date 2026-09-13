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

import { mapValues } from '../runtime';
import type { Rectangle2D } from './Rectangle2D';
import {
    Rectangle2DFromJSON,
    Rectangle2DFromJSONTyped,
    Rectangle2DToJSON,
    Rectangle2DToJSONTyped,
} from './Rectangle2D';

/**
 * One physical panel in flat/input coordinates, not a printed face/page count.
 * @export
 * @interface FoldPanel
 */
export interface FoldPanel {
    /**
     *
     * @type {Rectangle2D}
     * @memberof FoldPanel
     */
    area: Rectangle2D;
    /**
     *
     * @type {string}
     * @memberof FoldPanel
     */
    panelId: string;
    /**
     *
     * @type {string}
     * @memberof FoldPanel
     */
    role?: string | null;
}

/**
 * Check if a given object implements the FoldPanel interface.
 */
export function instanceOfFoldPanel(value: object): value is FoldPanel {
    if (!('area' in value) || value['area'] === undefined) return false;
    if (!('panelId' in value) || value['panelId'] === undefined) return false;
    return true;
}

export function FoldPanelFromJSON(json: any): FoldPanel {
    return FoldPanelFromJSONTyped(json, false);
}

export function FoldPanelFromJSONTyped(json: any, ignoreDiscriminator: boolean): FoldPanel {
    if (json == null) {
        return json;
    }
    return {

        'area': Rectangle2DFromJSON(json['area']),
        'panelId': json['panel_id'],
        'role': json['role'] == null ? undefined : json['role'],
    };
}

export function FoldPanelToJSON(json: any): FoldPanel {
    return FoldPanelToJSONTyped(json, false);
}

export function FoldPanelToJSONTyped(value?: FoldPanel | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'area': Rectangle2DToJSON(value['area']),
        'panel_id': value['panelId'],
        'role': value['role'],
    };
}
