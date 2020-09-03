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
* The NetworksnetworkIdsnmpUsers model module.
* @module model/NetworksnetworkIdsnmpUsers
* @version 1.0.0
*/
export default class NetworksnetworkIdsnmpUsers {
    /**
    * Constructs a new <code>NetworksnetworkIdsnmpUsers</code>.
    * @alias module:model/NetworksnetworkIdsnmpUsers
    * @class
    * @param username {String} The username for the SNMP user. Required.
    * @param passphrase {String} The passphrase for the SNMP user. Required.
    */

    constructor(username, passphrase) {
        
        
        this['username'] = username;
        this['passphrase'] = passphrase;
        
    }

    /**
    * Constructs a <code>NetworksnetworkIdsnmpUsers</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/NetworksnetworkIdsnmpUsers} obj Optional instance to populate.
    * @return {module:model/NetworksnetworkIdsnmpUsers} The populated <code>NetworksnetworkIdsnmpUsers</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new NetworksnetworkIdsnmpUsers();
                        
            
            if (data.hasOwnProperty('username')) {
                obj['username'] = ApiClient.convertToType(data['username'], 'String');
            }
            if (data.hasOwnProperty('passphrase')) {
                obj['passphrase'] = ApiClient.convertToType(data['passphrase'], 'String');
            }
        }
        return obj;
    }

    /**
    * The username for the SNMP user. Required.
    * @member {String} username
    */
    'username' = undefined;
    /**
    * The passphrase for the SNMP user. Required.
    * @member {String} passphrase
    */
    'passphrase' = undefined;




}