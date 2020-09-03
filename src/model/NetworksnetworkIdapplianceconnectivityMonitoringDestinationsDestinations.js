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
* The NetworksnetworkIdapplianceconnectivityMonitoringDestinationsDestinations model module.
* @module model/NetworksnetworkIdapplianceconnectivityMonitoringDestinationsDestinations
* @version 1.0.0
*/
export default class NetworksnetworkIdapplianceconnectivityMonitoringDestinationsDestinations {
    /**
    * Constructs a new <code>NetworksnetworkIdapplianceconnectivityMonitoringDestinationsDestinations</code>.
    * @alias module:model/NetworksnetworkIdapplianceconnectivityMonitoringDestinationsDestinations
    * @class
    * @param ip {String} The IP address to test connectivity with
    */

    constructor(ip) {
        
        
        this['ip'] = ip;
        
    }

    /**
    * Constructs a <code>NetworksnetworkIdapplianceconnectivityMonitoringDestinationsDestinations</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/NetworksnetworkIdapplianceconnectivityMonitoringDestinationsDestinations} obj Optional instance to populate.
    * @return {module:model/NetworksnetworkIdapplianceconnectivityMonitoringDestinationsDestinations} The populated <code>NetworksnetworkIdapplianceconnectivityMonitoringDestinationsDestinations</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new NetworksnetworkIdapplianceconnectivityMonitoringDestinationsDestinations();
                        
            
            if (data.hasOwnProperty('ip')) {
                obj['ip'] = ApiClient.convertToType(data['ip'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('default')) {
                obj['default'] = ApiClient.convertToType(data['default'], 'Boolean');
            }
        }
        return obj;
    }

    /**
    * The IP address to test connectivity with
    * @member {String} ip
    */
    'ip' = undefined;
    /**
    * Description of the testing destination. Optional, defaults to null
    * @member {String} description
    */
    'description' = undefined;
    /**
    * Boolean indicating whether this is the default testing destination (true) or not (false). Defaults to false. Only one default is allowed
    * @member {Boolean} default
    */
    'default' = undefined;




}
