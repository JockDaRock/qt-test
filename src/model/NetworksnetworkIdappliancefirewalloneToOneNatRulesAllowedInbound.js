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
* The NetworksnetworkIdappliancefirewalloneToOneNatRulesAllowedInbound model module.
* @module model/NetworksnetworkIdappliancefirewalloneToOneNatRulesAllowedInbound
* @version 1.0.0
*/
export default class NetworksnetworkIdappliancefirewalloneToOneNatRulesAllowedInbound {
    /**
    * Constructs a new <code>NetworksnetworkIdappliancefirewalloneToOneNatRulesAllowedInbound</code>.
    * @alias module:model/NetworksnetworkIdappliancefirewalloneToOneNatRulesAllowedInbound
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>NetworksnetworkIdappliancefirewalloneToOneNatRulesAllowedInbound</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/NetworksnetworkIdappliancefirewalloneToOneNatRulesAllowedInbound} obj Optional instance to populate.
    * @return {module:model/NetworksnetworkIdappliancefirewalloneToOneNatRulesAllowedInbound} The populated <code>NetworksnetworkIdappliancefirewalloneToOneNatRulesAllowedInbound</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new NetworksnetworkIdappliancefirewalloneToOneNatRulesAllowedInbound();
                        
            
            if (data.hasOwnProperty('protocol')) {
                obj['protocol'] = ApiClient.convertToType(data['protocol'], 'String');
            }
            if (data.hasOwnProperty('destinationPorts')) {
                obj['destinationPorts'] = ApiClient.convertToType(data['destinationPorts'], ['String']);
            }
            if (data.hasOwnProperty('allowedIps')) {
                obj['allowedIps'] = ApiClient.convertToType(data['allowedIps'], ['String']);
            }
        }
        return obj;
    }

    /**
    * Either of the following: 'tcp', 'udp', 'icmp-ping' or 'any'
    * @member {module:model/NetworksnetworkIdappliancefirewalloneToOneNatRulesAllowedInbound.ProtocolEnum} protocol
    */
    'protocol' = undefined;
    /**
    * An array of ports or port ranges that will be forwarded to the host on the LAN
    * @member {Array.<String>} destinationPorts
    */
    'destinationPorts' = undefined;
    /**
    * An array of ranges of WAN IP addresses that are allowed to make inbound connections on the specified ports or port ranges, or 'any'
    * @member {Array.<String>} allowedIps
    */
    'allowedIps' = undefined;



    /**
    * Allowed values for the <code>protocol</code> property.
    * @enum {String}
    * @readonly
    */
    static ProtocolEnum = {
        /**
         * value: "tcp"
         * @const
         */
        "tcp": "tcp",
        /**
         * value: "udp"
         * @const
         */
        "udp": "udp",
        /**
         * value: "icmp-ping"
         * @const
         */
        "icmp-ping": "icmp-ping",
        /**
         * value: "any"
         * @const
         */
        "any": "any"    };

}