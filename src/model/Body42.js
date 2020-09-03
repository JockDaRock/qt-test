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
* The Body42 model module.
* @module model/Body42
* @version 1.0.0
*/
export default class Body42 {
    /**
    * Constructs a new <code>Body42</code>.
    * @alias module:model/Body42
    * @class
    * @param id {String} The VLAN ID of the new VLAN (must be between 1 and 4094)
    * @param name {String} The name of the new VLAN
    * @param subnet {String} The subnet of the VLAN
    * @param applianceIp {String} The local IP of the appliance on the VLAN
    */

    constructor(id, name, subnet, applianceIp) {
        
        
        this['id'] = id;
        this['name'] = name;
        this['subnet'] = subnet;
        this['applianceIp'] = applianceIp;
        
    }

    /**
    * Constructs a <code>Body42</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/Body42} obj Optional instance to populate.
    * @return {module:model/Body42} The populated <code>Body42</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Body42();
                        
            
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('subnet')) {
                obj['subnet'] = ApiClient.convertToType(data['subnet'], 'String');
            }
            if (data.hasOwnProperty('applianceIp')) {
                obj['applianceIp'] = ApiClient.convertToType(data['applianceIp'], 'String');
            }
            if (data.hasOwnProperty('groupPolicyId')) {
                obj['groupPolicyId'] = ApiClient.convertToType(data['groupPolicyId'], 'String');
            }
        }
        return obj;
    }

    /**
    * The VLAN ID of the new VLAN (must be between 1 and 4094)
    * @member {String} id
    */
    'id' = undefined;
    /**
    * The name of the new VLAN
    * @member {String} name
    */
    'name' = undefined;
    /**
    * The subnet of the VLAN
    * @member {String} subnet
    */
    'subnet' = undefined;
    /**
    * The local IP of the appliance on the VLAN
    * @member {String} applianceIp
    */
    'applianceIp' = undefined;
    /**
    * The id of the desired group policy to apply to the VLAN
    * @member {String} groupPolicyId
    */
    'groupPolicyId' = undefined;




}
