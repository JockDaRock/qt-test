/**
 * Meraki Dashboard API
 * The Cisco Meraki Dashboard API is a modern REST API based on the OpenAPI specification.  > Date: 05 August, 2020 > > [What's New](https://meraki.io/whats-new/)  ---  [API Documentation](https://meraki.io/api)  [Community Support](https://meraki.io/community)  [Meraki Homepage](https://www.meraki.com) 
 *
 * OpenAPI spec version: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
* The OrganizationsorganizationIdappliancevpnthirdPartyVPNPeersIpsecPolicies model module.
* @module model/OrganizationsorganizationIdappliancevpnthirdPartyVPNPeersIpsecPolicies
* @version 1.0.0
*/
export default class OrganizationsorganizationIdappliancevpnthirdPartyVPNPeersIpsecPolicies {
    /**
    * Constructs a new <code>OrganizationsorganizationIdappliancevpnthirdPartyVPNPeersIpsecPolicies</code>.
    * Custom IPSec policies for the VPN peer. If not included and a preset has not been chosen, the default preset for IPSec policies will be used.
    * @alias module:model/OrganizationsorganizationIdappliancevpnthirdPartyVPNPeersIpsecPolicies
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>OrganizationsorganizationIdappliancevpnthirdPartyVPNPeersIpsecPolicies</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/OrganizationsorganizationIdappliancevpnthirdPartyVPNPeersIpsecPolicies} obj Optional instance to populate.
    * @return {module:model/OrganizationsorganizationIdappliancevpnthirdPartyVPNPeersIpsecPolicies} The populated <code>OrganizationsorganizationIdappliancevpnthirdPartyVPNPeersIpsecPolicies</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OrganizationsorganizationIdappliancevpnthirdPartyVPNPeersIpsecPolicies();
                        
            
            if (data.hasOwnProperty('ikeCipherAlgo')) {
                obj['ikeCipherAlgo'] = ApiClient.convertToType(data['ikeCipherAlgo'], ['String']);
            }
            if (data.hasOwnProperty('ikeAuthAlgo')) {
                obj['ikeAuthAlgo'] = ApiClient.convertToType(data['ikeAuthAlgo'], ['String']);
            }
            if (data.hasOwnProperty('ikePrfAlgo')) {
                obj['ikePrfAlgo'] = ApiClient.convertToType(data['ikePrfAlgo'], ['String']);
            }
            if (data.hasOwnProperty('ikeDiffieHellmanGroup')) {
                obj['ikeDiffieHellmanGroup'] = ApiClient.convertToType(data['ikeDiffieHellmanGroup'], ['String']);
            }
            if (data.hasOwnProperty('ikeLifetime')) {
                obj['ikeLifetime'] = ApiClient.convertToType(data['ikeLifetime'], 'Number');
            }
            if (data.hasOwnProperty('childCipherAlgo')) {
                obj['childCipherAlgo'] = ApiClient.convertToType(data['childCipherAlgo'], ['String']);
            }
            if (data.hasOwnProperty('childAuthAlgo')) {
                obj['childAuthAlgo'] = ApiClient.convertToType(data['childAuthAlgo'], ['String']);
            }
            if (data.hasOwnProperty('childPfsGroup')) {
                obj['childPfsGroup'] = ApiClient.convertToType(data['childPfsGroup'], ['String']);
            }
            if (data.hasOwnProperty('childLifetime')) {
                obj['childLifetime'] = ApiClient.convertToType(data['childLifetime'], 'Number');
            }
        }
        return obj;
    }

    /**
    * This is the cipher algorithm to be used in Phase 1. The value should be an array with one of the following algorithms: 'aes256', 'aes192', 'aes128', 'tripledes', 'des'
    * @member {Array.<String>} ikeCipherAlgo
    */
    'ikeCipherAlgo' = undefined;
    /**
    * This is the authentication algorithm to be used in Phase 1. The value should be an array with one of the following algorithms: 'sha256', 'sha1', 'md5'
    * @member {Array.<String>} ikeAuthAlgo
    */
    'ikeAuthAlgo' = undefined;
    /**
    * [optional] This is the pseudo-random function to be used in IKE_SA. The value should be an array with one of the following algorithms: 'prfsha256', 'prfsha1', 'prfmd5', 'default'. The 'default' option can be used to default to the Authentication algorithm.
    * @member {Array.<module:model/OrganizationsorganizationIdappliancevpnthirdPartyVPNPeersIpsecPolicies.IkePrfAlgoEnum>} ikePrfAlgo
    */
    'ikePrfAlgo' = undefined;
    /**
    * This is the Diffie-Hellman group to be used in Phase 1. The value should be an array with one of the following algorithms: 'group14', 'group5', 'group2', 'group1'
    * @member {Array.<String>} ikeDiffieHellmanGroup
    */
    'ikeDiffieHellmanGroup' = undefined;
    /**
    * The lifetime of the Phase 1 SA in seconds.
    * @member {Number} ikeLifetime
    */
    'ikeLifetime' = undefined;
    /**
    * This is the cipher algorithms to be used in Phase 2. The value should be an array with one or more of the following algorithms: 'aes256', 'aes192', 'aes128', 'tripledes', 'des', 'null'
    * @member {Array.<String>} childCipherAlgo
    */
    'childCipherAlgo' = undefined;
    /**
    * This is the authentication algorithms to be used in Phase 2. The value should be an array with one of the following algorithms: 'sha256', 'sha1', 'md5'
    * @member {Array.<String>} childAuthAlgo
    */
    'childAuthAlgo' = undefined;
    /**
    * This is the Diffie-Hellman group to be used for Perfect Forward Secrecy in Phase 2. The value should be an array with one of the following values: 'disabled','group14', 'group5', 'group2', 'group1'
    * @member {Array.<String>} childPfsGroup
    */
    'childPfsGroup' = undefined;
    /**
    * The lifetime of the Phase 2 SA in seconds.
    * @member {Number} childLifetime
    */
    'childLifetime' = undefined;



    /**
    * Allowed values for the <code>ikePrfAlgo</code> property.
    * @enum {String}
    * @readonly
    */
    static IkePrfAlgoEnum = {
        /**
         * value: "prfsha256"
         * @const
         */
        "prfsha256": "prfsha256",
        /**
         * value: "prfsha1"
         * @const
         */
        "prfsha1": "prfsha1",
        /**
         * value: "prfmd5"
         * @const
         */
        "prfmd5": "prfmd5",
        /**
         * value: "default"
         * @const
         */
        "default": "default"    };

}
