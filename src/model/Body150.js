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
import OrganizationsorganizationIdsamlRolesNetworks from './OrganizationsorganizationIdsamlRolesNetworks';
import OrganizationsorganizationIdsamlRolesTags from './OrganizationsorganizationIdsamlRolesTags';

/**
* The Body150 model module.
* @module model/Body150
* @version 1.0.0
*/
export default class Body150 {
    /**
    * Constructs a new <code>Body150</code>.
    * @alias module:model/Body150
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>Body150</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/Body150} obj Optional instance to populate.
    * @return {module:model/Body150} The populated <code>Body150</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Body150();
                        
            
            if (data.hasOwnProperty('role')) {
                obj['role'] = ApiClient.convertToType(data['role'], 'String');
            }
            if (data.hasOwnProperty('orgAccess')) {
                obj['orgAccess'] = ApiClient.convertToType(data['orgAccess'], 'String');
            }
            if (data.hasOwnProperty('tags')) {
                obj['tags'] = ApiClient.convertToType(data['tags'], [OrganizationsorganizationIdsamlRolesTags]);
            }
            if (data.hasOwnProperty('networks')) {
                obj['networks'] = ApiClient.convertToType(data['networks'], [OrganizationsorganizationIdsamlRolesNetworks]);
            }
        }
        return obj;
    }

    /**
    * The role of the SAML administrator
    * @member {String} role
    */
    'role' = undefined;
    /**
    * The privilege of the SAML administrator on the organization. Can be one of 'none', 'read-only' or 'full'
    * @member {module:model/Body150.OrgAccessEnum} orgAccess
    */
    'orgAccess' = undefined;
    /**
    * The list of tags that the SAML administrator has privleges on
    * @member {Array.<module:model/OrganizationsorganizationIdsamlRolesTags>} tags
    */
    'tags' = undefined;
    /**
    * The list of networks that the SAML administrator has privileges on
    * @member {Array.<module:model/OrganizationsorganizationIdsamlRolesNetworks>} networks
    */
    'networks' = undefined;



    /**
    * Allowed values for the <code>orgAccess</code> property.
    * @enum {String}
    * @readonly
    */
    static OrgAccessEnum = {
        /**
         * value: "none"
         * @const
         */
        "none": "none",
        /**
         * value: "read-only"
         * @const
         */
        "read-only": "read-only",
        /**
         * value: "full"
         * @const
         */
        "full": "full"    };

}