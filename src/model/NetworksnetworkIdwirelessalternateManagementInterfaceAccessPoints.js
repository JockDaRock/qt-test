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
* The NetworksnetworkIdwirelessalternateManagementInterfaceAccessPoints model module.
* @module model/NetworksnetworkIdwirelessalternateManagementInterfaceAccessPoints
* @version 1.0.0
*/
export default class NetworksnetworkIdwirelessalternateManagementInterfaceAccessPoints {
    /**
    * Constructs a new <code>NetworksnetworkIdwirelessalternateManagementInterfaceAccessPoints</code>.
    * @alias module:model/NetworksnetworkIdwirelessalternateManagementInterfaceAccessPoints
    * @class
    * @param serial {String} Serial number of access point to be configured with alternate management IP
    * @param alternateManagementIp {String} Wireless alternate management interface device IP. Provide an empty string to remove alternate management IP assignment
    */

    constructor(serial, alternateManagementIp) {
        
        
        this['serial'] = serial;
        this['alternateManagementIp'] = alternateManagementIp;
        
    }

    /**
    * Constructs a <code>NetworksnetworkIdwirelessalternateManagementInterfaceAccessPoints</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/NetworksnetworkIdwirelessalternateManagementInterfaceAccessPoints} obj Optional instance to populate.
    * @return {module:model/NetworksnetworkIdwirelessalternateManagementInterfaceAccessPoints} The populated <code>NetworksnetworkIdwirelessalternateManagementInterfaceAccessPoints</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new NetworksnetworkIdwirelessalternateManagementInterfaceAccessPoints();
                        
            
            if (data.hasOwnProperty('serial')) {
                obj['serial'] = ApiClient.convertToType(data['serial'], 'String');
            }
            if (data.hasOwnProperty('alternateManagementIp')) {
                obj['alternateManagementIp'] = ApiClient.convertToType(data['alternateManagementIp'], 'String');
            }
            if (data.hasOwnProperty('subnetMask')) {
                obj['subnetMask'] = ApiClient.convertToType(data['subnetMask'], 'String');
            }
            if (data.hasOwnProperty('gateway')) {
                obj['gateway'] = ApiClient.convertToType(data['gateway'], 'String');
            }
            if (data.hasOwnProperty('dns1')) {
                obj['dns1'] = ApiClient.convertToType(data['dns1'], 'String');
            }
            if (data.hasOwnProperty('dns2')) {
                obj['dns2'] = ApiClient.convertToType(data['dns2'], 'String');
            }
        }
        return obj;
    }

    /**
    * Serial number of access point to be configured with alternate management IP
    * @member {String} serial
    */
    'serial' = undefined;
    /**
    * Wireless alternate management interface device IP. Provide an empty string to remove alternate management IP assignment
    * @member {String} alternateManagementIp
    */
    'alternateManagementIp' = undefined;
    /**
    * Subnet mask must be in IP format
    * @member {String} subnetMask
    */
    'subnetMask' = undefined;
    /**
    * Gateway must be in IP format
    * @member {String} gateway
    */
    'gateway' = undefined;
    /**
    * Primary DNS must be in IP format
    * @member {String} dns1
    */
    'dns1' = undefined;
    /**
    * Optional secondary DNS must be in IP format
    * @member {String} dns2
    */
    'dns2' = undefined;




}
