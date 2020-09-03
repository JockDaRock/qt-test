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
* The Body69 model module.
* @module model/Body69
* @version 1.0.0
*/
export default class Body69 {
    /**
    * Constructs a new <code>Body69</code>.
    * @alias module:model/Body69
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>Body69</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/Body69} obj Optional instance to populate.
    * @return {module:model/Body69} The populated <code>Body69</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Body69();
                        
            
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('datasets')) {
                obj['datasets'] = ApiClient.convertToType(data['datasets'], ['String']);
            }
            if (data.hasOwnProperty('username')) {
                obj['username'] = ApiClient.convertToType(data['username'], 'String');
            }
            if (data.hasOwnProperty('email')) {
                obj['email'] = ApiClient.convertToType(data['email'], 'String');
            }
            if (data.hasOwnProperty('mac')) {
                obj['mac'] = ApiClient.convertToType(data['mac'], 'String');
            }
            if (data.hasOwnProperty('smDeviceId')) {
                obj['smDeviceId'] = ApiClient.convertToType(data['smDeviceId'], 'String');
            }
            if (data.hasOwnProperty('smUserId')) {
                obj['smUserId'] = ApiClient.convertToType(data['smUserId'], 'String');
            }
        }
        return obj;
    }

    /**
    * One of \"delete\" or \"restrict processing\"
    * @member {module:model/Body69.TypeEnum} type
    */
    'type' = undefined;
    /**
    * The datasets related to the provided key that should be deleted. Only applies to \"delete\" requests. The value \"all\" will be expanded to all datasets applicable to this type. The datasets by applicable to each type are: mac (usage, events, traffic), email (users, loginAttempts), username (users, loginAttempts), bluetoothMac (client, connectivity), smDeviceId (device), smUserId (user)
    * @member {Array.<String>} datasets
    */
    'datasets' = undefined;
    /**
    * The username of a network log in. Only applies to \"delete\" requests.
    * @member {String} username
    */
    'username' = undefined;
    /**
    * The email of a network user account. Only applies to \"delete\" requests.
    * @member {String} email
    */
    'email' = undefined;
    /**
    * The MAC of a network client device. Applies to both \"restrict processing\" and \"delete\" requests.
    * @member {String} mac
    */
    'mac' = undefined;
    /**
    * The sm_device_id of a Systems Manager device. The only way to \"restrict processing\" or \"delete\" a Systems Manager device. Must include \"device\" in the dataset for a \"delete\" request to destroy the device.
    * @member {String} smDeviceId
    */
    'smDeviceId' = undefined;
    /**
    * The sm_user_id of a Systems Manager user. The only way to \"restrict processing\" or \"delete\" a Systems Manager user. Must include \"user\" in the dataset for a \"delete\" request to destroy the user.
    * @member {String} smUserId
    */
    'smUserId' = undefined;



    /**
    * Allowed values for the <code>type</code> property.
    * @enum {String}
    * @readonly
    */
    static TypeEnum = {
        /**
         * value: "delete"
         * @const
         */
        "delete": "delete",
        /**
         * value: "restrict processing"
         * @const
         */
        "restrict processing": "restrict processing"    };

}