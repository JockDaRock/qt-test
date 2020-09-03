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
import Body126 from '../model/Body126';
import Body32 from '../model/Body32';

/**
* Intrusion service.
* @module api/IntrusionApi
* @version 1.0.0
*/
export default class IntrusionApi {

    /**
    * Constructs a new IntrusionApi. 
    * @alias module:api/IntrusionApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    /**
     * Callback function to receive the result of the getNetworkApplianceSecurityIntrusion operation.
     * @callback module:api/IntrusionApi~getNetworkApplianceSecurityIntrusionCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns all supported intrusion settings for an MX network
     * Returns all supported intrusion settings for an MX network
     * @param {module:api/IntrusionApi~getNetworkApplianceSecurityIntrusionCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    getNetworkApplianceSecurityIntrusion(networkId, callback) {
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
        '/networks/{networkId}/appliance/security/intrusion', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getOrganizationApplianceSecurityIntrusion operation.
     * @callback module:api/IntrusionApi~getOrganizationApplianceSecurityIntrusionCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns all supported intrusion settings for an organization
     * Returns all supported intrusion settings for an organization
     * @param {module:api/IntrusionApi~getOrganizationApplianceSecurityIntrusionCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    getOrganizationApplianceSecurityIntrusion(organizationId, callback) {
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
        '/organizations/{organizationId}/appliance/security/intrusion', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the updateNetworkApplianceSecurityIntrusion operation.
     * @callback module:api/IntrusionApi~updateNetworkApplianceSecurityIntrusionCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Set the supported intrusion settings for an MX network
     * Set the supported intrusion settings for an MX network
     * @param {Object} opts Optional parameters
     * @param {module:api/IntrusionApi~updateNetworkApplianceSecurityIntrusionCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    updateNetworkApplianceSecurityIntrusion(networkId, opts, callback) {
      opts = opts || {};
      let postBody = opts['body'];

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
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = Object;

      return this.apiClient.callApi(
        '/networks/{networkId}/appliance/security/intrusion', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the updateOrganizationApplianceSecurityIntrusion operation.
     * @callback module:api/IntrusionApi~updateOrganizationApplianceSecurityIntrusionCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Sets supported intrusion settings for an organization
     * Sets supported intrusion settings for an organization
     * @param {module:api/IntrusionApi~updateOrganizationApplianceSecurityIntrusionCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    updateOrganizationApplianceSecurityIntrusion(body, organizationId, callback) {
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
        '/organizations/{organizationId}/appliance/security/intrusion', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

}
