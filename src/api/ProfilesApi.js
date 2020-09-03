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

import ApiClient from "../ApiClient";
import Body136 from '../model/Body136';

/**
* Profiles service.
* @module api/ProfilesApi
* @version 1.0.0
*/
export default class ProfilesApi {

    /**
    * Constructs a new ProfilesApi. 
    * @alias module:api/ProfilesApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    /**
     * Callback function to receive the result of the getNetworkSmProfiles operation.
     * @callback module:api/ProfilesApi~getNetworkSmProfilesCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List all profiles in a network
     * List all profiles in a network
     * @param {module:api/ProfilesApi~getNetworkSmProfilesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    getNetworkSmProfiles(networkId, callback) {
      let postBody = null;

      let pathParams = {
        'networkId': networkId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['meraki_api_key'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Object;

      return this.apiClient.callApi(
        '/networks/{networkId}/sm/profiles', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getOrganizationConfigTemplateSwitchProfilePort operation.
     * @callback module:api/ProfilesApi~getOrganizationConfigTemplateSwitchProfilePortCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Return a switch profile port
     * Return a switch profile port
     * @param {module:api/ProfilesApi~getOrganizationConfigTemplateSwitchProfilePortCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    getOrganizationConfigTemplateSwitchProfilePort(organizationId, configTemplateId, profileId, portId, callback) {
      let postBody = null;

      let pathParams = {
        'organizationId': organizationId,
        'configTemplateId': configTemplateId,
        'profileId': profileId,
        'portId': portId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['meraki_api_key'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Object;

      return this.apiClient.callApi(
        '/organizations/{organizationId}/configTemplates/{configTemplateId}/switch/profiles/{profileId}/ports/{portId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getOrganizationConfigTemplateSwitchProfilePorts operation.
     * @callback module:api/ProfilesApi~getOrganizationConfigTemplateSwitchProfilePortsCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Return all the ports of a switch profile
     * Return all the ports of a switch profile
     * @param {module:api/ProfilesApi~getOrganizationConfigTemplateSwitchProfilePortsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    getOrganizationConfigTemplateSwitchProfilePorts(organizationId, configTemplateId, profileId, callback) {
      let postBody = null;

      let pathParams = {
        'organizationId': organizationId,
        'configTemplateId': configTemplateId,
        'profileId': profileId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['meraki_api_key'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Object;

      return this.apiClient.callApi(
        '/organizations/{organizationId}/configTemplates/{configTemplateId}/switch/profiles/{profileId}/ports', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getOrganizationConfigTemplateSwitchProfiles operation.
     * @callback module:api/ProfilesApi~getOrganizationConfigTemplateSwitchProfilesCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List the switch profiles for your switch template configuration
     * List the switch profiles for your switch template configuration
     * @param {module:api/ProfilesApi~getOrganizationConfigTemplateSwitchProfilesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    getOrganizationConfigTemplateSwitchProfiles(organizationId, configTemplateId, callback) {
      let postBody = null;

      let pathParams = {
        'organizationId': organizationId,
        'configTemplateId': configTemplateId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['meraki_api_key'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Object;

      return this.apiClient.callApi(
        '/organizations/{organizationId}/configTemplates/{configTemplateId}/switch/profiles', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the updateOrganizationConfigTemplateSwitchProfilePort operation.
     * @callback module:api/ProfilesApi~updateOrganizationConfigTemplateSwitchProfilePortCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a switch profile port
     * Update a switch profile port
     * @param {Object} opts Optional parameters
     * @param {module:api/ProfilesApi~updateOrganizationConfigTemplateSwitchProfilePortCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    updateOrganizationConfigTemplateSwitchProfilePort(organizationId, configTemplateId, profileId, portId, opts, callback) {
      opts = opts || {};
      let postBody = opts['body'];

      let pathParams = {
        'organizationId': organizationId,
        'configTemplateId': configTemplateId,
        'profileId': profileId,
        'portId': portId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['meraki_api_key'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = Object;

      return this.apiClient.callApi(
        '/organizations/{organizationId}/configTemplates/{configTemplateId}/switch/profiles/{profileId}/ports/{portId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

}
