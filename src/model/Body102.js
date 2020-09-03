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
import NetworksnetworkIdswitchstpStpBridgePriority from './NetworksnetworkIdswitchstpStpBridgePriority';

/**
* The Body102 model module.
* @module model/Body102
* @version 1.0.0
*/
export default class Body102 {
    /**
    * Constructs a new <code>Body102</code>.
    * @alias module:model/Body102
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>Body102</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/Body102} obj Optional instance to populate.
    * @return {module:model/Body102} The populated <code>Body102</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Body102();
                        
            
            if (data.hasOwnProperty('rstpEnabled')) {
                obj['rstpEnabled'] = ApiClient.convertToType(data['rstpEnabled'], 'Boolean');
            }
            if (data.hasOwnProperty('stpBridgePriority')) {
                obj['stpBridgePriority'] = ApiClient.convertToType(data['stpBridgePriority'], [NetworksnetworkIdswitchstpStpBridgePriority]);
            }
        }
        return obj;
    }

    /**
    * The spanning tree protocol status in network
    * @member {Boolean} rstpEnabled
    */
    'rstpEnabled' = undefined;
    /**
    * STP bridge priority for switches/stacks or switch profiles. An empty array will clear the STP bridge priority settings.
    * @member {Array.<module:model/NetworksnetworkIdswitchstpStpBridgePriority>} stpBridgePriority
    */
    'stpBridgePriority' = undefined;




}
