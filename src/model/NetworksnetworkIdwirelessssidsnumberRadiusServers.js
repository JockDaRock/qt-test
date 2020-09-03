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
* The NetworksnetworkIdwirelessssidsnumberRadiusServers model module.
* @module model/NetworksnetworkIdwirelessssidsnumberRadiusServers
* @version 1.0.0
*/
export default class NetworksnetworkIdwirelessssidsnumberRadiusServers {
    /**
    * Constructs a new <code>NetworksnetworkIdwirelessssidsnumberRadiusServers</code>.
    * @alias module:model/NetworksnetworkIdwirelessssidsnumberRadiusServers
    * @class
    * @param host {String} IP address of your RADIUS server
    * @param secret {String} RADIUS client shared secret
    */

    constructor(host, secret) {
        
        
        this['host'] = host;
        this['secret'] = secret;
        
    }

    /**
    * Constructs a <code>NetworksnetworkIdwirelessssidsnumberRadiusServers</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/NetworksnetworkIdwirelessssidsnumberRadiusServers} obj Optional instance to populate.
    * @return {module:model/NetworksnetworkIdwirelessssidsnumberRadiusServers} The populated <code>NetworksnetworkIdwirelessssidsnumberRadiusServers</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new NetworksnetworkIdwirelessssidsnumberRadiusServers();
                        
            
            if (data.hasOwnProperty('host')) {
                obj['host'] = ApiClient.convertToType(data['host'], 'String');
            }
            if (data.hasOwnProperty('port')) {
                obj['port'] = ApiClient.convertToType(data['port'], 'Number');
            }
            if (data.hasOwnProperty('secret')) {
                obj['secret'] = ApiClient.convertToType(data['secret'], 'String');
            }
        }
        return obj;
    }

    /**
    * IP address of your RADIUS server
    * @member {String} host
    */
    'host' = undefined;
    /**
    * UDP port the RADIUS server listens on for Access-requests
    * @member {Number} port
    */
    'port' = undefined;
    /**
    * RADIUS client shared secret
    * @member {String} secret
    */
    'secret' = undefined;




}