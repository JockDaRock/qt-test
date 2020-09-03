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
* The Body140 model module.
* @module model/Body140
* @version 1.0.0
*/
export default class Body140 {
    /**
    * Constructs a new <code>Body140</code>.
    * @alias module:model/Body140
    * @class
    * @param destOrganizationId {String} The ID of the organization to move the licenses to
    * @param licenseIds {Array.<String>} A list of IDs of licenses to move to the new organization
    */

    constructor(destOrganizationId, licenseIds) {
        
        
        this['destOrganizationId'] = destOrganizationId;
        this['licenseIds'] = licenseIds;
        
    }

    /**
    * Constructs a <code>Body140</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/Body140} obj Optional instance to populate.
    * @return {module:model/Body140} The populated <code>Body140</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Body140();
                        
            
            if (data.hasOwnProperty('destOrganizationId')) {
                obj['destOrganizationId'] = ApiClient.convertToType(data['destOrganizationId'], 'String');
            }
            if (data.hasOwnProperty('licenseIds')) {
                obj['licenseIds'] = ApiClient.convertToType(data['licenseIds'], ['String']);
            }
        }
        return obj;
    }

    /**
    * The ID of the organization to move the licenses to
    * @member {String} destOrganizationId
    */
    'destOrganizationId' = undefined;
    /**
    * A list of IDs of licenses to move to the new organization
    * @member {Array.<String>} licenseIds
    */
    'licenseIds' = undefined;




}