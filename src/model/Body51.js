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
* The Body51 model module.
* @module model/Body51
* @version 1.0.0
*/
export default class Body51 {
    /**
    * Constructs a new <code>Body51</code>.
    * @alias module:model/Body51
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>Body51</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/Body51} obj Optional instance to populate.
    * @return {module:model/Body51} The populated <code>Body51</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Body51();
                        
            
            if (data.hasOwnProperty('dhcpLeaseTime')) {
                obj['dhcpLeaseTime'] = ApiClient.convertToType(data['dhcpLeaseTime'], 'String');
            }
            if (data.hasOwnProperty('dnsNameservers')) {
                obj['dnsNameservers'] = ApiClient.convertToType(data['dnsNameservers'], 'String');
            }
            if (data.hasOwnProperty('dnsCustomNameservers')) {
                obj['dnsCustomNameservers'] = ApiClient.convertToType(data['dnsCustomNameservers'], ['String']);
            }
        }
        return obj;
    }

    /**
    * DHCP Lease time for all MG of the network. It can be '30 minutes', '1 hour', '4 hours', '12 hours', '1 day' or '1 week'.
    * @member {String} dhcpLeaseTime
    */
    'dhcpLeaseTime' = undefined;
    /**
    * DNS name servers mode for all MG of the network. It can take 4 different values: 'upstream_dns', 'google_dns', 'opendns', 'custom'.
    * @member {String} dnsNameservers
    */
    'dnsNameservers' = undefined;
    /**
    * list of fixed IP representing the the DNS Name servers when the mode is 'custom'
    * @member {Array.<String>} dnsCustomNameservers
    */
    'dnsCustomNameservers' = undefined;




}
