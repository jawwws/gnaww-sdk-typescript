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
 * One named material inside a material composition.
 * @export
 * @interface AppModelsProducerMaterialCompositionPart
 */
export interface AppModelsProducerMaterialCompositionPart {
    /**
     *
     * @type {string}
     * @memberof AppModelsProducerMaterialCompositionPart
     */
    material: string;
    /**
     *
     * @type {number}
     * @memberof AppModelsProducerMaterialCompositionPart
     */
    percentage?: number | null;
}

/**
 * Check if a given object implements the AppModelsProducerMaterialCompositionPart interface.
 */
export function instanceOfAppModelsProducerMaterialCompositionPart(value: object): value is AppModelsProducerMaterialCompositionPart {
    if (!('material' in value) || value['material'] === undefined) return false;
    return true;
}

export function AppModelsProducerMaterialCompositionPartFromJSON(json: any): AppModelsProducerMaterialCompositionPart {
    return AppModelsProducerMaterialCompositionPartFromJSONTyped(json, false);
}

export function AppModelsProducerMaterialCompositionPartFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppModelsProducerMaterialCompositionPart {
    if (json == null) {
        return json;
    }
    return {

        'material': json['material'],
        'percentage': json['percentage'] == null ? undefined : json['percentage'],
    };
}

export function AppModelsProducerMaterialCompositionPartToJSON(json: any): AppModelsProducerMaterialCompositionPart {
    return AppModelsProducerMaterialCompositionPartToJSONTyped(json, false);
}

export function AppModelsProducerMaterialCompositionPartToJSONTyped(value?: AppModelsProducerMaterialCompositionPart | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'material': value['material'],
        'percentage': value['percentage'],
    };
}
