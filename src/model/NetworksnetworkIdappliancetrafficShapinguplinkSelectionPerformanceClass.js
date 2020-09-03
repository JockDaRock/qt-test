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
* The NetworksnetworkIdappliancetrafficShapinguplinkSelectionPerformanceClass model module.
* @module model/NetworksnetworkIdappliancetrafficShapinguplinkSelectionPerformanceClass
* @version 1.0.0
*/
export default class NetworksnetworkIdappliancetrafficShapinguplinkSelectionPerformanceClass {
    /**
    * Constructs a new <code>NetworksnetworkIdappliancetrafficShapinguplinkSelectionPerformanceClass</code>.
    * Performance class setting for this uplink preference rule
    * @alias module:model/NetworksnetworkIdappliancetrafficShapinguplinkSelectionPerformanceClass
    * @class
    * @param type {module:model/NetworksnetworkIdappliancetrafficShapinguplinkSelectionPerformanceClass.TypeEnum} Type of this performance class. Must be one of: 'builtin' or 'custom'
    */

    constructor(type) {
        
        
        this['type'] = type;
        
    }

    /**
    * Constructs a <code>NetworksnetworkIdappliancetrafficShapinguplinkSelectionPerformanceClass</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/NetworksnetworkIdappliancetrafficShapinguplinkSelectionPerformanceClass} obj Optional instance to populate.
    * @return {module:model/NetworksnetworkIdappliancetrafficShapinguplinkSelectionPerformanceClass} The populated <code>NetworksnetworkIdappliancetrafficShapinguplinkSelectionPerformanceClass</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new NetworksnetworkIdappliancetrafficShapinguplinkSelectionPerformanceClass();
                        
            
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('builtinPerformanceClassName')) {
                obj['builtinPerformanceClassName'] = ApiClient.convertToType(data['builtinPerformanceClassName'], 'String');
            }
            if (data.hasOwnProperty('customPerformanceClassId')) {
                obj['customPerformanceClassId'] = ApiClient.convertToType(data['customPerformanceClassId'], 'String');
            }
        }
        return obj;
    }

    /**
    * Type of this performance class. Must be one of: 'builtin' or 'custom'
    * @member {module:model/NetworksnetworkIdappliancetrafficShapinguplinkSelectionPerformanceClass.TypeEnum} type
    */
    'type' = undefined;
    /**
    * Name of builtin performance class, must be present when performanceClass type is 'builtin', and value must be one of: 'VoIP'
    * @member {module:model/NetworksnetworkIdappliancetrafficShapinguplinkSelectionPerformanceClass.BuiltinPerformanceClassNameEnum} builtinPerformanceClassName
    */
    'builtinPerformanceClassName' = undefined;
    /**
    * ID of created custom performance class, must be present when performanceClass type is 'custom'
    * @member {String} customPerformanceClassId
    */
    'customPerformanceClassId' = undefined;



    /**
    * Allowed values for the <code>type</code> property.
    * @enum {String}
    * @readonly
    */
    static TypeEnum = {
        /**
         * value: "builtin"
         * @const
         */
        "builtin": "builtin",
        /**
         * value: "custom"
         * @const
         */
        "custom": "custom"    };
    /**
    * Allowed values for the <code>builtinPerformanceClassName</code> property.
    * @enum {String}
    * @readonly
    */
    static BuiltinPerformanceClassNameEnum = {
        /**
         * value: "VoIP"
         * @const
         */
        "VoIP": "VoIP"    };

}
