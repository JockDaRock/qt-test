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
import NetworksnetworkIdalertssettingsAlertDestinations from './NetworksnetworkIdalertssettingsAlertDestinations';

/**
* The NetworksnetworkIdalertssettingsAlerts model module.
* @module model/NetworksnetworkIdalertssettingsAlerts
* @version 1.0.0
*/
export default class NetworksnetworkIdalertssettingsAlerts {
    /**
    * Constructs a new <code>NetworksnetworkIdalertssettingsAlerts</code>.
    * @alias module:model/NetworksnetworkIdalertssettingsAlerts
    * @class
    * @param type {String} The type of alert
    */

    constructor(type) {
        
        
        this['type'] = type;
        
    }

    /**
    * Constructs a <code>NetworksnetworkIdalertssettingsAlerts</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/NetworksnetworkIdalertssettingsAlerts} obj Optional instance to populate.
    * @return {module:model/NetworksnetworkIdalertssettingsAlerts} The populated <code>NetworksnetworkIdalertssettingsAlerts</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new NetworksnetworkIdalertssettingsAlerts();
                        
            
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('enabled')) {
                obj['enabled'] = ApiClient.convertToType(data['enabled'], 'Boolean');
            }
            if (data.hasOwnProperty('alertDestinations')) {
                obj['alertDestinations'] = NetworksnetworkIdalertssettingsAlertDestinations.constructFromObject(data['alertDestinations']);
            }
            if (data.hasOwnProperty('filters')) {
                obj['filters'] = ApiClient.convertToType(data['filters'], Object);
            }
        }
        return obj;
    }

    /**
    * The type of alert
    * @member {String} type
    */
    'type' = undefined;
    /**
    * A boolean depicting if the alert is turned on or off
    * @member {Boolean} enabled
    */
    'enabled' = undefined;
    /**
    * @member {module:model/NetworksnetworkIdalertssettingsAlertDestinations} alertDestinations
    */
    'alertDestinations' = undefined;
    /**
    * A hash of specific configuration data for the alert. Only filters specific to the alert will be updated.
    * @member {Object} filters
    */
    'filters' = undefined;




}
