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
 * Demand-side grammage target, range and substitution posture.
 * @export
 * @interface GrammageRequirement
 */
export interface GrammageRequirement {
    /**
     *
     * @type {number}
     * @memberof GrammageRequirement
     */
    maximumGsm?: number | null;
    /**
     *
     * @type {number}
     * @memberof GrammageRequirement
     */
    minimumGsm?: number | null;
    /**
     *
     * @type {string}
     * @memberof GrammageRequirement
     */
    outcome?: string | null;
    /**
     *
     * @type {GrammageRequirementPostureEnum}
     * @memberof GrammageRequirement
     */
    posture?: GrammageRequirementPostureEnum;
    /**
     *
     * @type {string}
     * @memberof GrammageRequirement
     */
    sourceExpression?: string | null;
    /**
     *
     * @type {boolean}
     * @memberof GrammageRequirement
     */
    substituteApprovalRequired?: boolean;
    /**
     *
     * @type {number}
     * @memberof GrammageRequirement
     */
    targetGsm?: number | null;
}


/**
 * @export
 */
export const GrammageRequirementPostureEnum = {
    ExactRequired: 'exact_required',
    PreferredTarget: 'preferred_target',
    AcceptableRange: 'acceptable_range',
    CloseSubstituteAcceptable: 'close_substitute_acceptable',
    ProducerRecommendationAcceptable: 'producer_recommendation_acceptable',
    Unspecified: 'unspecified'
} as const;
export type GrammageRequirementPostureEnum = typeof GrammageRequirementPostureEnum[keyof typeof GrammageRequirementPostureEnum];


/**
 * Check if a given object implements the GrammageRequirement interface.
 */
export function instanceOfGrammageRequirement(value: object): value is GrammageRequirement {
    return true;
}

export function GrammageRequirementFromJSON(json: any): GrammageRequirement {
    return GrammageRequirementFromJSONTyped(json, false);
}

export function GrammageRequirementFromJSONTyped(json: any, ignoreDiscriminator: boolean): GrammageRequirement {
    if (json == null) {
        return json;
    }
    return {

        'maximumGsm': json['maximum_gsm'] == null ? undefined : json['maximum_gsm'],
        'minimumGsm': json['minimum_gsm'] == null ? undefined : json['minimum_gsm'],
        'outcome': json['outcome'] == null ? undefined : json['outcome'],
        'posture': json['posture'] == null ? undefined : json['posture'],
        'sourceExpression': json['source_expression'] == null ? undefined : json['source_expression'],
        'substituteApprovalRequired': json['substitute_approval_required'] == null ? undefined : json['substitute_approval_required'],
        'targetGsm': json['target_gsm'] == null ? undefined : json['target_gsm'],
    };
}

export function GrammageRequirementToJSON(json: any): GrammageRequirement {
    return GrammageRequirementToJSONTyped(json, false);
}

export function GrammageRequirementToJSONTyped(value?: GrammageRequirement | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'maximum_gsm': value['maximumGsm'],
        'minimum_gsm': value['minimumGsm'],
        'outcome': value['outcome'],
        'posture': value['posture'],
        'source_expression': value['sourceExpression'],
        'substitute_approval_required': value['substituteApprovalRequired'],
        'target_gsm': value['targetGsm'],
    };
}
