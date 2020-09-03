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
* The DevicesserialswitchroutinginterfacesinterfaceIddhcpFixedIpAssignments model module.
* @module model/DevicesserialswitchroutinginterfacesinterfaceIddhcpFixedIpAssignments
* @version 1.0.0
*/
export default class DevicesserialswitchroutinginterfacesinterfaceIddhcpFixedIpAssignments {
    /**
    * Constructs a new <code>DevicesserialswitchroutinginterfacesinterfaceIddhcpFixedIpAssignments</code>.
    * @alias module:model/DevicesserialswitchroutinginterfacesinterfaceIddhcpFixedIpAssignments
    * @class
    * @param name {String} The name of the client which has fixed IP address
    * @param mac {String} The MAC address of the client which has fixed IP address
    * @param ip {String} The IP address of the client which has fixed IP address assigned to it
    */

    constructor(name, mac, ip) {
        
        
        this['name'] = name;
        this['mac'] = mac;
        this['ip'] = ip;
        
    }

    /**
    * Constructs a <code>DevicesserialswitchroutinginterfacesinterfaceIddhcpFixedIpAssignments</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/DevicesserialswitchroutinginterfacesinterfaceIddhcpFixedIpAssignments} obj Optional instance to populate.
    * @return {module:model/DevicesserialswitchroutinginterfacesinterfaceIddhcpFixedIpAssignments} The populated <code>DevicesserialswitchroutinginterfacesinterfaceIddhcpFixedIpAssignments</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DevicesserialswitchroutinginterfacesinterfaceIddhcpFixedIpAssignments();
                        
            
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('mac')) {
                obj['mac'] = ApiClient.convertToType(data['mac'], 'String');
            }
            if (data.hasOwnProperty('ip')) {
                obj['ip'] = ApiClient.convertToType(data['ip'], 'String');
            }
        }
        return obj;
    }

    /**
    * The name of the client which has fixed IP address
    * @member {String} name
    */
    'name' = undefined;
    /**
    * The MAC address of the client which has fixed IP address
    * @member {String} mac
    */
    'mac' = undefined;
    /**
    * The IP address of the client which has fixed IP address assigned to it
    * @member {String} ip
    */
    'ip' = undefined;




}
