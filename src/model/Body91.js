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
import NetworksnetworkIdswitchroutingospfAreas from './NetworksnetworkIdswitchroutingospfAreas';
import NetworksnetworkIdswitchroutingospfMd5AuthenticationKey from './NetworksnetworkIdswitchroutingospfMd5AuthenticationKey';

/**
* The Body91 model module.
* @module model/Body91
* @version 1.0.0
*/
export default class Body91 {
    /**
    * Constructs a new <code>Body91</code>.
    * @alias module:model/Body91
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>Body91</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/Body91} obj Optional instance to populate.
    * @return {module:model/Body91} The populated <code>Body91</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Body91();
                        
            
            if (data.hasOwnProperty('enabled')) {
                obj['enabled'] = ApiClient.convertToType(data['enabled'], 'Boolean');
            }
            if (data.hasOwnProperty('helloTimerInSeconds')) {
                obj['helloTimerInSeconds'] = ApiClient.convertToType(data['helloTimerInSeconds'], 'Number');
            }
            if (data.hasOwnProperty('deadTimerInSeconds')) {
                obj['deadTimerInSeconds'] = ApiClient.convertToType(data['deadTimerInSeconds'], 'Number');
            }
            if (data.hasOwnProperty('areas')) {
                obj['areas'] = ApiClient.convertToType(data['areas'], [NetworksnetworkIdswitchroutingospfAreas]);
            }
            if (data.hasOwnProperty('md5AuthenticationEnabled')) {
                obj['md5AuthenticationEnabled'] = ApiClient.convertToType(data['md5AuthenticationEnabled'], 'Boolean');
            }
            if (data.hasOwnProperty('md5AuthenticationKey')) {
                obj['md5AuthenticationKey'] = NetworksnetworkIdswitchroutingospfMd5AuthenticationKey.constructFromObject(data['md5AuthenticationKey']);
            }
        }
        return obj;
    }

    /**
    * Boolean value to enable or disable OSPF routing. OSPF routing is disabled by default.
    * @member {Boolean} enabled
    */
    'enabled' = undefined;
    /**
    * Time interval in seconds at which hello packet will be sent to OSPF neighbors to maintain connectivity. Value must be between 1 and 255. Default is 10 seconds
    * @member {Number} helloTimerInSeconds
    */
    'helloTimerInSeconds' = undefined;
    /**
    * Time interval to determine when the peer will be declare inactive/dead. Value must be between 1 and 65535
    * @member {Number} deadTimerInSeconds
    */
    'deadTimerInSeconds' = undefined;
    /**
    * OSPF areas
    * @member {Array.<module:model/NetworksnetworkIdswitchroutingospfAreas>} areas
    */
    'areas' = undefined;
    /**
    * Boolean value to enable or disable MD5 authentication. MD5 authentication is disabled by default.
    * @member {Boolean} md5AuthenticationEnabled
    */
    'md5AuthenticationEnabled' = undefined;
    /**
    * @member {module:model/NetworksnetworkIdswitchroutingospfMd5AuthenticationKey} md5AuthenticationKey
    */
    'md5AuthenticationKey' = undefined;




}