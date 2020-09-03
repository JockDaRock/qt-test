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
* The NetworksnetworkIdclientsprovisionPoliciesBySecurityAppliance model module.
* @module model/NetworksnetworkIdclientsprovisionPoliciesBySecurityAppliance
* @version 1.0.0
*/
export default class NetworksnetworkIdclientsprovisionPoliciesBySecurityAppliance {
    /**
    * Constructs a new <code>NetworksnetworkIdclientsprovisionPoliciesBySecurityAppliance</code>.
    * An object, describing what the policy-connection association is for the security appliance. (Only relevant if the security appliance is actually within the network)
    * @alias module:model/NetworksnetworkIdclientsprovisionPoliciesBySecurityAppliance
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>NetworksnetworkIdclientsprovisionPoliciesBySecurityAppliance</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/NetworksnetworkIdclientsprovisionPoliciesBySecurityAppliance} obj Optional instance to populate.
    * @return {module:model/NetworksnetworkIdclientsprovisionPoliciesBySecurityAppliance} The populated <code>NetworksnetworkIdclientsprovisionPoliciesBySecurityAppliance</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new NetworksnetworkIdclientsprovisionPoliciesBySecurityAppliance();
                        
            
            if (data.hasOwnProperty('devicePolicy')) {
                obj['devicePolicy'] = ApiClient.convertToType(data['devicePolicy'], 'String');
            }
        }
        return obj;
    }

    /**
    * The policy to apply to the specified client. Can be 'Allowed', 'Blocked' or 'Normal'. Required.
    * @member {module:model/NetworksnetworkIdclientsprovisionPoliciesBySecurityAppliance.DevicePolicyEnum} devicePolicy
    */
    'devicePolicy' = undefined;



    /**
    * Allowed values for the <code>devicePolicy</code> property.
    * @enum {String}
    * @readonly
    */
    static DevicePolicyEnum = {
        /**
         * value: "Allowed"
         * @const
         */
        "Allowed": "Allowed",
        /**
         * value: "Blocked"
         * @const
         */
        "Blocked": "Blocked",
        /**
         * value: "Normal"
         * @const
         */
        "Normal": "Normal"    };

}