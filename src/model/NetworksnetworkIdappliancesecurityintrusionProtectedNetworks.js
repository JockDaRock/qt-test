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
* The NetworksnetworkIdappliancesecurityintrusionProtectedNetworks model module.
* @module model/NetworksnetworkIdappliancesecurityintrusionProtectedNetworks
* @version 1.0.0
*/
export default class NetworksnetworkIdappliancesecurityintrusionProtectedNetworks {
    /**
    * Constructs a new <code>NetworksnetworkIdappliancesecurityintrusionProtectedNetworks</code>.
    * Set the included/excluded networks from the intrusion engine (optional - omitting will leave current config unchanged). This is available only in &#x27;passthrough&#x27; mode
    * @alias module:model/NetworksnetworkIdappliancesecurityintrusionProtectedNetworks
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>NetworksnetworkIdappliancesecurityintrusionProtectedNetworks</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/NetworksnetworkIdappliancesecurityintrusionProtectedNetworks} obj Optional instance to populate.
    * @return {module:model/NetworksnetworkIdappliancesecurityintrusionProtectedNetworks} The populated <code>NetworksnetworkIdappliancesecurityintrusionProtectedNetworks</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new NetworksnetworkIdappliancesecurityintrusionProtectedNetworks();
                        
            
            if (data.hasOwnProperty('useDefault')) {
                obj['useDefault'] = ApiClient.convertToType(data['useDefault'], 'Boolean');
            }
            if (data.hasOwnProperty('includedCidr')) {
                obj['includedCidr'] = ApiClient.convertToType(data['includedCidr'], ['String']);
            }
            if (data.hasOwnProperty('excludedCidr')) {
                obj['excludedCidr'] = ApiClient.convertToType(data['excludedCidr'], ['String']);
            }
        }
        return obj;
    }

    /**
    * true/false whether to use special IPv4 addresses: https://tools.ietf.org/html/rfc5735 (required). Default value is true if none currently saved
    * @member {Boolean} useDefault
    */
    'useDefault' = undefined;
    /**
    * list of IP addresses or subnets being protected (required if 'useDefault' is false)
    * @member {Array.<String>} includedCidr
    */
    'includedCidr' = undefined;
    /**
    * list of IP addresses or subnets being excluded from protection (required if 'useDefault' is false)
    * @member {Array.<String>} excludedCidr
    */
    'excludedCidr' = undefined;




}