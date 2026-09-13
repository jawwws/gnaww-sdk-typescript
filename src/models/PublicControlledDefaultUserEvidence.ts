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
 * Property-scoped buyer evidence created by controlled-default verification.
 * @export
 * @interface PublicControlledDefaultUserEvidence
 */
export interface PublicControlledDefaultUserEvidence {
    /**
     *
     * @type {PublicControlledDefaultUserEvidenceEvidenceBasisEnum}
     * @memberof PublicControlledDefaultUserEvidence
     */
    evidenceBasis: PublicControlledDefaultUserEvidenceEvidenceBasisEnum;
    /**
     *
     * @type {string}
     * @memberof PublicControlledDefaultUserEvidence
     */
    propertyPath: string;
    /**
     *
     * @type {string}
     * @memberof PublicControlledDefaultUserEvidence
     */
    value: string;
}


/**
 * @export
 */
export const PublicControlledDefaultUserEvidenceEvidenceBasisEnum = {
    UserConfirmation: 'user_confirmation',
    UserCorrection: 'user_correction'
} as const;
export type PublicControlledDefaultUserEvidenceEvidenceBasisEnum = typeof PublicControlledDefaultUserEvidenceEvidenceBasisEnum[keyof typeof PublicControlledDefaultUserEvidenceEvidenceBasisEnum];


/**
 * Check if a given object implements the PublicControlledDefaultUserEvidence interface.
 */
export function instanceOfPublicControlledDefaultUserEvidence(value: object): value is PublicControlledDefaultUserEvidence {
    if (!('evidenceBasis' in value) || value['evidenceBasis'] === undefined) return false;
    if (!('propertyPath' in value) || value['propertyPath'] === undefined) return false;
    if (!('value' in value) || value['value'] === undefined) return false;
    return true;
}

export function PublicControlledDefaultUserEvidenceFromJSON(json: any): PublicControlledDefaultUserEvidence {
    return PublicControlledDefaultUserEvidenceFromJSONTyped(json, false);
}

export function PublicControlledDefaultUserEvidenceFromJSONTyped(json: any, ignoreDiscriminator: boolean): PublicControlledDefaultUserEvidence {
    if (json == null) {
        return json;
    }
    return {

        'evidenceBasis': json['evidence_basis'],
        'propertyPath': json['property_path'],
        'value': json['value'],
    };
}

export function PublicControlledDefaultUserEvidenceToJSON(json: any): PublicControlledDefaultUserEvidence {
    return PublicControlledDefaultUserEvidenceToJSONTyped(json, false);
}

export function PublicControlledDefaultUserEvidenceToJSONTyped(value?: PublicControlledDefaultUserEvidence | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'evidence_basis': value['evidenceBasis'],
        'property_path': value['propertyPath'],
        'value': value['value'],
    };
}
