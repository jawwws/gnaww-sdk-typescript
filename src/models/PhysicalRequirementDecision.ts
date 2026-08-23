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
 * Machine-readable physical-demand decision with buyer-safe guidance.
 * @export
 * @interface PhysicalRequirementDecision
 */
export interface PhysicalRequirementDecision {
    /**
     *
     * @type {boolean}
     * @memberof PhysicalRequirementDecision
     */
    approvalRequired?: boolean;
    /**
     *
     * @type {string}
     * @memberof PhysicalRequirementDecision
     */
    buyerMessage: string;
    /**
     *
     * @type {string}
     * @memberof PhysicalRequirementDecision
     */
    buyerQuestion?: string | null;
    /**
     *
     * @type {Array<{ [key: string]: any; }>}
     * @memberof PhysicalRequirementDecision
     */
    candidates?: Array<{ [key: string]: any; }>;
    /**
     *
     * @type {PhysicalRequirementDecisionClassificationEnum}
     * @memberof PhysicalRequirementDecision
     */
    classification: PhysicalRequirementDecisionClassificationEnum;
    /**
     *
     * @type {string}
     * @memberof PhysicalRequirementDecision
     */
    fieldPath: string;
    /**
     *
     * @type {string}
     * @memberof PhysicalRequirementDecision
     */
    posture: string;
    /**
     *
     * @type {string}
     * @memberof PhysicalRequirementDecision
     */
    propertyType: string;
    /**
     *
     * @type {{ [key: string]: any; }}
     * @memberof PhysicalRequirementDecision
     */
    requested?: { [key: string]: any; };
    /**
     *
     * @type {PhysicalRequirementDecisionSchemaNameEnum}
     * @memberof PhysicalRequirementDecision
     */
    schemaName?: PhysicalRequirementDecisionSchemaNameEnum;
    /**
     *
     * @type {string}
     * @memberof PhysicalRequirementDecision
     */
    schemaVersion?: string;
}


/**
 * @export
 */
export const PhysicalRequirementDecisionClassificationEnum = {
    Exact: 'exact',
    AcceptableSubstitute: 'acceptable_substitute',
    ReviewRequired: 'review_required',
    Unacceptable: 'unacceptable',
    Unknown: 'unknown'
} as const;
export type PhysicalRequirementDecisionClassificationEnum = typeof PhysicalRequirementDecisionClassificationEnum[keyof typeof PhysicalRequirementDecisionClassificationEnum];

/**
 * @export
 */
export const PhysicalRequirementDecisionSchemaNameEnum = {
    GnawwPhysicalRequirementDecision: 'gnaww.physical_requirement_decision'
} as const;
export type PhysicalRequirementDecisionSchemaNameEnum = typeof PhysicalRequirementDecisionSchemaNameEnum[keyof typeof PhysicalRequirementDecisionSchemaNameEnum];


/**
 * Check if a given object implements the PhysicalRequirementDecision interface.
 */
export function instanceOfPhysicalRequirementDecision(value: object): value is PhysicalRequirementDecision {
    if (!('buyerMessage' in value) || value['buyerMessage'] === undefined) return false;
    if (!('classification' in value) || value['classification'] === undefined) return false;
    if (!('fieldPath' in value) || value['fieldPath'] === undefined) return false;
    if (!('posture' in value) || value['posture'] === undefined) return false;
    if (!('propertyType' in value) || value['propertyType'] === undefined) return false;
    return true;
}

export function PhysicalRequirementDecisionFromJSON(json: any): PhysicalRequirementDecision {
    return PhysicalRequirementDecisionFromJSONTyped(json, false);
}

export function PhysicalRequirementDecisionFromJSONTyped(json: any, ignoreDiscriminator: boolean): PhysicalRequirementDecision {
    if (json == null) {
        return json;
    }
    return {

        'approvalRequired': json['approval_required'] == null ? undefined : json['approval_required'],
        'buyerMessage': json['buyer_message'],
        'buyerQuestion': json['buyer_question'] == null ? undefined : json['buyer_question'],
        'candidates': json['candidates'] == null ? undefined : json['candidates'],
        'classification': json['classification'],
        'fieldPath': json['field_path'],
        'posture': json['posture'],
        'propertyType': json['property_type'],
        'requested': json['requested'] == null ? undefined : json['requested'],
        'schemaName': json['schema_name'] == null ? undefined : json['schema_name'],
        'schemaVersion': json['schema_version'] == null ? undefined : json['schema_version'],
    };
}

export function PhysicalRequirementDecisionToJSON(json: any): PhysicalRequirementDecision {
    return PhysicalRequirementDecisionToJSONTyped(json, false);
}

export function PhysicalRequirementDecisionToJSONTyped(value?: PhysicalRequirementDecision | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'approval_required': value['approvalRequired'],
        'buyer_message': value['buyerMessage'],
        'buyer_question': value['buyerQuestion'],
        'candidates': value['candidates'],
        'classification': value['classification'],
        'field_path': value['fieldPath'],
        'posture': value['posture'],
        'property_type': value['propertyType'],
        'requested': value['requested'],
        'schema_name': value['schemaName'],
        'schema_version': value['schemaVersion'],
    };
}
