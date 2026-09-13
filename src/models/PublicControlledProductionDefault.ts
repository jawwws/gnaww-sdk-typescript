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
import type { PublicControlledDefaultFoldGeometry } from './PublicControlledDefaultFoldGeometry';
import {
    PublicControlledDefaultFoldGeometryFromJSON,
    PublicControlledDefaultFoldGeometryFromJSONTyped,
    PublicControlledDefaultFoldGeometryToJSON,
    PublicControlledDefaultFoldGeometryToJSONTyped,
} from './PublicControlledDefaultFoldGeometry';
import type { PublicControlledDefaultUserEvidence } from './PublicControlledDefaultUserEvidence';
import {
    PublicControlledDefaultUserEvidenceFromJSON,
    PublicControlledDefaultUserEvidenceFromJSONTyped,
    PublicControlledDefaultUserEvidenceToJSON,
    PublicControlledDefaultUserEvidenceToJSONTyped,
} from './PublicControlledDefaultUserEvidence';

/**
 * Approved production convention shown separately from explicit source evidence.
 * @export
 * @interface PublicControlledProductionDefault
 */
export interface PublicControlledProductionDefault {
    /**
     *
     * @type {Array<string>}
     * @memberof PublicControlledProductionDefault
     */
    evidenceIds: Array<string>;
    /**
     *
     * @type {PublicControlledDefaultFoldGeometry}
     * @memberof PublicControlledProductionDefault
     */
    foldGeometry: PublicControlledDefaultFoldGeometry;
    /**
     *
     * @type {string}
     * @memberof PublicControlledProductionDefault
     */
    label: string;
    /**
     *
     * @type {string}
     * @memberof PublicControlledProductionDefault
     */
    ruleId: string;
    /**
     *
     * @type {string}
     * @memberof PublicControlledProductionDefault
     */
    ruleVersion: string;
    /**
     *
     * @type {string}
     * @memberof PublicControlledProductionDefault
     */
    summary: string;
    /**
     *
     * @type {string}
     * @memberof PublicControlledProductionDefault
     */
    targetPath: string;
    /**
     *
     * @type {PublicControlledProductionDefaultTruthStateEnum}
     * @memberof PublicControlledProductionDefault
     */
    truthState: PublicControlledProductionDefaultTruthStateEnum;
    /**
     *
     * @type {PublicControlledDefaultUserEvidence}
     * @memberof PublicControlledProductionDefault
     */
    userEvidence?: PublicControlledDefaultUserEvidence | null;
    /**
     *
     * @type {string}
     * @memberof PublicControlledProductionDefault
     */
    verificationKey: string;
}


/**
 * @export
 */
export const PublicControlledProductionDefaultTruthStateEnum = {
    Defaulted: 'defaulted',
    Confirmed: 'confirmed',
    Changed: 'changed'
} as const;
export type PublicControlledProductionDefaultTruthStateEnum = typeof PublicControlledProductionDefaultTruthStateEnum[keyof typeof PublicControlledProductionDefaultTruthStateEnum];


/**
 * Check if a given object implements the PublicControlledProductionDefault interface.
 */
export function instanceOfPublicControlledProductionDefault(value: object): value is PublicControlledProductionDefault {
    if (!('evidenceIds' in value) || value['evidenceIds'] === undefined) return false;
    if (!('foldGeometry' in value) || value['foldGeometry'] === undefined) return false;
    if (!('label' in value) || value['label'] === undefined) return false;
    if (!('ruleId' in value) || value['ruleId'] === undefined) return false;
    if (!('ruleVersion' in value) || value['ruleVersion'] === undefined) return false;
    if (!('summary' in value) || value['summary'] === undefined) return false;
    if (!('targetPath' in value) || value['targetPath'] === undefined) return false;
    if (!('truthState' in value) || value['truthState'] === undefined) return false;
    if (!('verificationKey' in value) || value['verificationKey'] === undefined) return false;
    return true;
}

export function PublicControlledProductionDefaultFromJSON(json: any): PublicControlledProductionDefault {
    return PublicControlledProductionDefaultFromJSONTyped(json, false);
}

export function PublicControlledProductionDefaultFromJSONTyped(json: any, ignoreDiscriminator: boolean): PublicControlledProductionDefault {
    if (json == null) {
        return json;
    }
    return {

        'evidenceIds': json['evidence_ids'],
        'foldGeometry': PublicControlledDefaultFoldGeometryFromJSON(json['fold_geometry']),
        'label': json['label'],
        'ruleId': json['rule_id'],
        'ruleVersion': json['rule_version'],
        'summary': json['summary'],
        'targetPath': json['target_path'],
        'truthState': json['truth_state'],
        'userEvidence': json['user_evidence'] == null ? undefined : PublicControlledDefaultUserEvidenceFromJSON(json['user_evidence']),
        'verificationKey': json['verification_key'],
    };
}

export function PublicControlledProductionDefaultToJSON(json: any): PublicControlledProductionDefault {
    return PublicControlledProductionDefaultToJSONTyped(json, false);
}

export function PublicControlledProductionDefaultToJSONTyped(value?: PublicControlledProductionDefault | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'evidence_ids': value['evidenceIds'],
        'fold_geometry': PublicControlledDefaultFoldGeometryToJSON(value['foldGeometry']),
        'label': value['label'],
        'rule_id': value['ruleId'],
        'rule_version': value['ruleVersion'],
        'summary': value['summary'],
        'target_path': value['targetPath'],
        'truth_state': value['truthState'],
        'user_evidence': PublicControlledDefaultUserEvidenceToJSON(value['userEvidence']),
        'verification_key': value['verificationKey'],
    };
}
