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
/**
 * One controlled constituent of a manufactured material.
 * @export
 * @interface AppModelsManufacturingGeometryMaterialCompositionPart
 */
export interface AppModelsManufacturingGeometryMaterialCompositionPart {
    /**
     *
     * @type {string}
     * @memberof AppModelsManufacturingGeometryMaterialCompositionPart
     */
    name: string;
    /**
     *
     * @type {number}
     * @memberof AppModelsManufacturingGeometryMaterialCompositionPart
     */
    percentage?: number | null;
}

/**
 * Check if a given object implements the AppModelsManufacturingGeometryMaterialCompositionPart interface.
 */
export function instanceOfAppModelsManufacturingGeometryMaterialCompositionPart(value: object): value is AppModelsManufacturingGeometryMaterialCompositionPart {
    if (!('name' in value) || value['name'] === undefined) return false;
    return true;
}

export function AppModelsManufacturingGeometryMaterialCompositionPartFromJSON(json: any): AppModelsManufacturingGeometryMaterialCompositionPart {
    return AppModelsManufacturingGeometryMaterialCompositionPartFromJSONTyped(json, false);
}

export function AppModelsManufacturingGeometryMaterialCompositionPartFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppModelsManufacturingGeometryMaterialCompositionPart {
    if (json == null) {
        return json;
    }
    return {

        'name': json['name'],
        'percentage': json['percentage'] == null ? undefined : json['percentage'],
    };
}

export function AppModelsManufacturingGeometryMaterialCompositionPartToJSON(json: any): AppModelsManufacturingGeometryMaterialCompositionPart {
    return AppModelsManufacturingGeometryMaterialCompositionPartToJSONTyped(json, false);
}

export function AppModelsManufacturingGeometryMaterialCompositionPartToJSONTyped(value?: AppModelsManufacturingGeometryMaterialCompositionPart | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'name': value['name'],
        'percentage': value['percentage'],
    };
}
