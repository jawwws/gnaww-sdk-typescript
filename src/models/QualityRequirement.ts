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
import type { OperationTarget } from './OperationTarget';
import {
    OperationTargetFromJSON,
    OperationTargetFromJSONTyped,
    OperationTargetToJSON,
    OperationTargetToJSONTyped,
} from './OperationTarget';
import type { NumericTolerance } from './NumericTolerance';
import {
    NumericToleranceFromJSON,
    NumericToleranceFromJSONTyped,
    NumericToleranceToJSON,
    NumericToleranceToJSONTyped,
} from './NumericTolerance';

/**
 *
 * @export
 * @interface QualityRequirement
 */
export interface QualityRequirement {
    /**
     *
     * @type {QualityRequirementCategoryEnum}
     * @memberof QualityRequirement
     */
    category: QualityRequirementCategoryEnum;
    /**
     *
     * @type {string}
     * @memberof QualityRequirement
     */
    description: string;
    /**
     *
     * @type {string}
     * @memberof QualityRequirement
     */
    requirementId: string;
    /**
     *
     * @type {OperationTarget}
     * @memberof QualityRequirement
     */
    target?: OperationTarget | null;
    /**
     *
     * @type {NumericTolerance}
     * @memberof QualityRequirement
     */
    tolerance?: NumericTolerance | null;
}


/**
 * @export
 */
export const QualityRequirementCategoryEnum = {
    Colour: 'colour',
    Dimension: 'dimension',
    Weight: 'weight',
    Registration: 'registration',
    CodeReadability: 'code_readability',
    Surface: 'surface',
    BatchConsistency: 'batch_consistency',
    Other: 'other'
} as const;
export type QualityRequirementCategoryEnum = typeof QualityRequirementCategoryEnum[keyof typeof QualityRequirementCategoryEnum];


/**
 * Check if a given object implements the QualityRequirement interface.
 */
export function instanceOfQualityRequirement(value: object): value is QualityRequirement {
    if (!('category' in value) || value['category'] === undefined) return false;
    if (!('description' in value) || value['description'] === undefined) return false;
    if (!('requirementId' in value) || value['requirementId'] === undefined) return false;
    return true;
}

export function QualityRequirementFromJSON(json: any): QualityRequirement {
    return QualityRequirementFromJSONTyped(json, false);
}

export function QualityRequirementFromJSONTyped(json: any, ignoreDiscriminator: boolean): QualityRequirement {
    if (json == null) {
        return json;
    }
    return {

        'category': json['category'],
        'description': json['description'],
        'requirementId': json['requirement_id'],
        'target': json['target'] == null ? undefined : OperationTargetFromJSON(json['target']),
        'tolerance': json['tolerance'] == null ? undefined : NumericToleranceFromJSON(json['tolerance']),
    };
}

export function QualityRequirementToJSON(json: any): QualityRequirement {
    return QualityRequirementToJSONTyped(json, false);
}

export function QualityRequirementToJSONTyped(value?: QualityRequirement | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'category': value['category'],
        'description': value['description'],
        'requirement_id': value['requirementId'],
        'target': OperationTargetToJSON(value['target']),
        'tolerance': NumericToleranceToJSON(value['tolerance']),
    };
}
