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
* The Body10 model module.
* @module model/Body10
* @version 1.0.0
*/
export default class Body10 {
    /**
    * Constructs a new <code>Body10</code>.
    * @alias module:model/Body10
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>Body10</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/Body10} obj Optional instance to populate.
    * @return {module:model/Body10} The populated <code>Body10</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Body10();
                        
            
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('tags')) {
                obj['tags'] = ApiClient.convertToType(data['tags'], ['String']);
            }
            if (data.hasOwnProperty('enabled')) {
                obj['enabled'] = ApiClient.convertToType(data['enabled'], 'Boolean');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('vlan')) {
                obj['vlan'] = ApiClient.convertToType(data['vlan'], 'Number');
            }
            if (data.hasOwnProperty('voiceVlan')) {
                obj['voiceVlan'] = ApiClient.convertToType(data['voiceVlan'], 'Number');
            }
            if (data.hasOwnProperty('allowedVlans')) {
                obj['allowedVlans'] = ApiClient.convertToType(data['allowedVlans'], 'String');
            }
            if (data.hasOwnProperty('poeEnabled')) {
                obj['poeEnabled'] = ApiClient.convertToType(data['poeEnabled'], 'Boolean');
            }
            if (data.hasOwnProperty('isolationEnabled')) {
                obj['isolationEnabled'] = ApiClient.convertToType(data['isolationEnabled'], 'Boolean');
            }
            if (data.hasOwnProperty('rstpEnabled')) {
                obj['rstpEnabled'] = ApiClient.convertToType(data['rstpEnabled'], 'Boolean');
            }
            if (data.hasOwnProperty('stpGuard')) {
                obj['stpGuard'] = ApiClient.convertToType(data['stpGuard'], 'String');
            }
            if (data.hasOwnProperty('linkNegotiation')) {
                obj['linkNegotiation'] = ApiClient.convertToType(data['linkNegotiation'], 'String');
            }
            if (data.hasOwnProperty('portScheduleId')) {
                obj['portScheduleId'] = ApiClient.convertToType(data['portScheduleId'], 'String');
            }
            if (data.hasOwnProperty('udld')) {
                obj['udld'] = ApiClient.convertToType(data['udld'], 'String');
            }
            if (data.hasOwnProperty('accessPolicyType')) {
                obj['accessPolicyType'] = ApiClient.convertToType(data['accessPolicyType'], 'String');
            }
            if (data.hasOwnProperty('accessPolicyNumber')) {
                obj['accessPolicyNumber'] = ApiClient.convertToType(data['accessPolicyNumber'], 'Number');
            }
            if (data.hasOwnProperty('macAllowList')) {
                obj['macAllowList'] = ApiClient.convertToType(data['macAllowList'], ['String']);
            }
            if (data.hasOwnProperty('stickyMacAllowList')) {
                obj['stickyMacAllowList'] = ApiClient.convertToType(data['stickyMacAllowList'], ['String']);
            }
            if (data.hasOwnProperty('stickyMacAllowListLimit')) {
                obj['stickyMacAllowListLimit'] = ApiClient.convertToType(data['stickyMacAllowListLimit'], 'Number');
            }
            if (data.hasOwnProperty('stormControlEnabled')) {
                obj['stormControlEnabled'] = ApiClient.convertToType(data['stormControlEnabled'], 'Boolean');
            }
        }
        return obj;
    }

    /**
    * The name of the switch port
    * @member {String} name
    */
    'name' = undefined;
    /**
    * The list of tags of the switch port
    * @member {Array.<String>} tags
    */
    'tags' = undefined;
    /**
    * The status of the switch port
    * @member {Boolean} enabled
    */
    'enabled' = undefined;
    /**
    * The type of the switch port ('trunk' or 'access')
    * @member {module:model/Body10.TypeEnum} type
    */
    'type' = undefined;
    /**
    * The VLAN of the switch port. A null value will clear the value set for trunk ports.
    * @member {Number} vlan
    */
    'vlan' = undefined;
    /**
    * The voice VLAN of the switch port. Only applicable to access ports.
    * @member {Number} voiceVlan
    */
    'voiceVlan' = undefined;
    /**
    * The VLANs allowed on the switch port. Only applicable to trunk ports.
    * @member {String} allowedVlans
    */
    'allowedVlans' = undefined;
    /**
    * The PoE status of the switch port
    * @member {Boolean} poeEnabled
    */
    'poeEnabled' = undefined;
    /**
    * The isolation status of the switch port
    * @member {Boolean} isolationEnabled
    */
    'isolationEnabled' = undefined;
    /**
    * The rapid spanning tree protocol status
    * @member {Boolean} rstpEnabled
    */
    'rstpEnabled' = undefined;
    /**
    * The state of the STP guard ('disabled', 'root guard', 'bpdu guard' or 'loop guard')
    * @member {module:model/Body10.StpGuardEnum} stpGuard
    */
    'stpGuard' = undefined;
    /**
    * The link speed for the switch port
    * @member {String} linkNegotiation
    */
    'linkNegotiation' = undefined;
    /**
    * The ID of the port schedule. A value of null will clear the port schedule.
    * @member {String} portScheduleId
    */
    'portScheduleId' = undefined;
    /**
    * The action to take when Unidirectional Link is detected (Alert only, Enforce). Default configuration is Alert only.
    * @member {module:model/Body10.UdldEnum} udld
    */
    'udld' = undefined;
    /**
    * The type of the access policy of the switch port. Only applicable to access ports. Can be one of 'Open', 'Custom access policy', 'MAC allow list' or 'Sticky MAC allow list'
    * @member {module:model/Body10.AccessPolicyTypeEnum} accessPolicyType
    */
    'accessPolicyType' = undefined;
    /**
    * The number of a custom access policy to configure on the switch port. Only applicable when 'accessPolicyType' is 'Custom access policy'
    * @member {Number} accessPolicyNumber
    */
    'accessPolicyNumber' = undefined;
    /**
    * Only devices with MAC addresses specified in this list will have access to this port. Up to 20 MAC addresses can be defined. Only applicable when 'accessPolicyType' is 'MAC allow list'
    * @member {Array.<String>} macAllowList
    */
    'macAllowList' = undefined;
    /**
    * The initial list of MAC addresses for sticky Mac allow list. Only applicable when 'accessPolicyType' is 'Sticky MAC allow list'
    * @member {Array.<String>} stickyMacAllowList
    */
    'stickyMacAllowList' = undefined;
    /**
    * The maximum number of MAC addresses for sticky MAC allow list. Only applicable when 'accessPolicyType' is 'Sticky MAC allow list'
    * @member {Number} stickyMacAllowListLimit
    */
    'stickyMacAllowListLimit' = undefined;
    /**
    * The storm control status of the switch port
    * @member {Boolean} stormControlEnabled
    */
    'stormControlEnabled' = undefined;



    /**
    * Allowed values for the <code>type</code> property.
    * @enum {String}
    * @readonly
    */
    static TypeEnum = {
        /**
         * value: "trunk"
         * @const
         */
        "trunk": "trunk",
        /**
         * value: "access"
         * @const
         */
        "access": "access"    };
    /**
    * Allowed values for the <code>stpGuard</code> property.
    * @enum {String}
    * @readonly
    */
    static StpGuardEnum = {
        /**
         * value: "disabled"
         * @const
         */
        "disabled": "disabled",
        /**
         * value: "root guard"
         * @const
         */
        "root guard": "root guard",
        /**
         * value: "bpdu guard"
         * @const
         */
        "bpdu guard": "bpdu guard",
        /**
         * value: "loop guard"
         * @const
         */
        "loop guard": "loop guard"    };
    /**
    * Allowed values for the <code>udld</code> property.
    * @enum {String}
    * @readonly
    */
    static UdldEnum = {
        /**
         * value: "Alert only"
         * @const
         */
        "Alert only": "Alert only",
        /**
         * value: "Enforce"
         * @const
         */
        "Enforce": "Enforce"    };
    /**
    * Allowed values for the <code>accessPolicyType</code> property.
    * @enum {String}
    * @readonly
    */
    static AccessPolicyTypeEnum = {
        /**
         * value: "Open"
         * @const
         */
        "Open": "Open",
        /**
         * value: "Custom access policy"
         * @const
         */
        "Custom access policy": "Custom access policy",
        /**
         * value: "MAC allow list"
         * @const
         */
        "MAC allow list": "MAC allow list",
        /**
         * value: "Sticky MAC allow list"
         * @const
         */
        "Sticky MAC allow list": "Sticky MAC allow list"    };

}