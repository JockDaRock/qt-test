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
* The NetworksnetworkIdgroupPoliciesSchedulingThursday model module.
* @module model/NetworksnetworkIdgroupPoliciesSchedulingThursday
* @version 1.0.0
*/
export default class NetworksnetworkIdgroupPoliciesSchedulingThursday {
    /**
    * Constructs a new <code>NetworksnetworkIdgroupPoliciesSchedulingThursday</code>.
    * The schedule object for Thursday.
    * @alias module:model/NetworksnetworkIdgroupPoliciesSchedulingThursday
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>NetworksnetworkIdgroupPoliciesSchedulingThursday</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/NetworksnetworkIdgroupPoliciesSchedulingThursday} obj Optional instance to populate.
    * @return {module:model/NetworksnetworkIdgroupPoliciesSchedulingThursday} The populated <code>NetworksnetworkIdgroupPoliciesSchedulingThursday</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new NetworksnetworkIdgroupPoliciesSchedulingThursday();
                        
            
            if (data.hasOwnProperty('active')) {
                obj['active'] = ApiClient.convertToType(data['active'], 'Boolean');
            }
            if (data.hasOwnProperty('from')) {
                obj['from'] = ApiClient.convertToType(data['from'], 'String');
            }
            if (data.hasOwnProperty('to')) {
                obj['to'] = ApiClient.convertToType(data['to'], 'String');
            }
        }
        return obj;
    }

    /**
    * Whether the schedule is active (true) or inactive (false) during the time specified between 'from' and 'to'. Defaults to true.
    * @member {Boolean} active
    */
    'active' = undefined;
    /**
    * The time, from '00:00' to '24:00'. Must be less than the time specified in 'to'. Defaults to '00:00'. Only 30 minute increments are allowed.
    * @member {String} from
    */
    'from' = undefined;
    /**
    * The time, from '00:00' to '24:00'. Must be greater than the time specified in 'from'. Defaults to '24:00'. Only 30 minute increments are allowed.
    * @member {String} to
    */
    'to' = undefined;




}
