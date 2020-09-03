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
import Body134 from '../model/Body134';
import Body135 from '../model/Body135';
import Body136 from '../model/Body136';

/**
* ConfigTemplates service.
* @module api/ConfigTemplatesApi
* @version 1.0.0
*/
export default class ConfigTemplatesApi {

    /**
    * Constructs a new ConfigTemplatesApi. 
    * @alias module:api/ConfigTemplatesApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    /**
     * Callback function to receive the result of the createOrganizationConfigTemplate operation.
     * @callback module:api/ConfigTemplatesApi~createOrganizationConfigTemplateCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a new configuration template
     * Create a new configuration template
     * @param {module:api/ConfigTemplatesApi~createOrganizationConfigTemplateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    createOrganizationConfigTemplate(body, organizationId, callback) {
      let postBody = body;

      let pathParams = {
        'organizationId': organizationId
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
        '/organizations/{organizationId}/configTemplates', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the deleteOrganizationConfigTemplate operation.
     * @callback module:api/ConfigTemplatesApi~deleteOrganizationConfigTemplateCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Remove a configuration template
     * Remove a configuration template
     * @param {module:api/ConfigTemplatesApi~deleteOrganizationConfigTemplateCallback} callback The callback function, accepting three arguments: error, data, response
     */
    deleteOrganizationConfigTemplate(organizationId, configTemplateId, callback) {
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
      let accepts = [];
      let returnType = null;

      return this.apiClient.callApi(
        '/organizations/{organizationId}/configTemplates/{configTemplateId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getOrganizationConfigTemplate operation.
     * @callback module:api/ConfigTemplatesApi~getOrganizationConfigTemplateCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Return a single configuration template
     * Return a single configuration template
     * @param {module:api/ConfigTemplatesApi~getOrganizationConfigTemplateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    getOrganizationConfigTemplate(organizationId, configTemplateId, callback) {
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
        '/organizations/{organizationId}/configTemplates/{configTemplateId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getOrganizationConfigTemplateSwitchProfilePort operation.
     * @callback module:api/ConfigTemplatesApi~getOrganizationConfigTemplateSwitchProfilePortCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Return a switch profile port
     * Return a switch profile port
     * @param {module:api/ConfigTemplatesApi~getOrganizationConfigTemplateSwitchProfilePortCallback} callback The callback function, accepting three arguments: error, data, response
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
     * @callback module:api/ConfigTemplatesApi~getOrganizationConfigTemplateSwitchProfilePortsCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Return all the ports of a switch profile
     * Return all the ports of a switch profile
     * @param {module:api/ConfigTemplatesApi~getOrganizationConfigTemplateSwitchProfilePortsCallback} callback The callback function, accepting three arguments: error, data, response
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
     * @callback module:api/ConfigTemplatesApi~getOrganizationConfigTemplateSwitchProfilesCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List the switch profiles for your switch template configuration
     * List the switch profiles for your switch template configuration
     * @param {module:api/ConfigTemplatesApi~getOrganizationConfigTemplateSwitchProfilesCallback} callback The callback function, accepting three arguments: error, data, response
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
     * Callback function to receive the result of the getOrganizationConfigTemplates operation.
     * @callback module:api/ConfigTemplatesApi~getOrganizationConfigTemplatesCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List the configuration templates for this organization
     * List the configuration templates for this organization
     * @param {module:api/ConfigTemplatesApi~getOrganizationConfigTemplatesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    getOrganizationConfigTemplates(organizationId, callback) {
      let postBody = null;

      let pathParams = {
        'organizationId': organizationId
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
        '/organizations/{organizationId}/configTemplates', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the updateOrganizationConfigTemplate operation.
     * @callback module:api/ConfigTemplatesApi~updateOrganizationConfigTemplateCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a configuration template
     * Update a configuration template
     * @param {Object} opts Optional parameters
     * @param {module:api/ConfigTemplatesApi~updateOrganizationConfigTemplateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    updateOrganizationConfigTemplate(organizationId, configTemplateId, opts, callback) {
      opts = opts || {};
      let postBody = opts['body'];

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
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = Object;

      return this.apiClient.callApi(
        '/organizations/{organizationId}/configTemplates/{configTemplateId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the updateOrganizationConfigTemplateSwitchProfilePort operation.
     * @callback module:api/ConfigTemplatesApi~updateOrganizationConfigTemplateSwitchProfilePortCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a switch profile port
     * Update a switch profile port
     * @param {Object} opts Optional parameters
     * @param {module:api/ConfigTemplatesApi~updateOrganizationConfigTemplateSwitchProfilePortCallback} callback The callback function, accepting three arguments: error, data, response
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
