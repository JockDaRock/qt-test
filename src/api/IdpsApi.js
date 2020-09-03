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
import Body147 from '../model/Body147';
import Body148 from '../model/Body148';

/**
* Idps service.
* @module api/IdpsApi
* @version 1.0.0
*/
export default class IdpsApi {

    /**
    * Constructs a new IdpsApi. 
    * @alias module:api/IdpsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    /**
     * Callback function to receive the result of the createOrganizationSamlIdp operation.
     * @callback module:api/IdpsApi~createOrganizationSamlIdpCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a SAML IdP for your organization.
     * Create a SAML IdP for your organization.
     * @param {module:api/IdpsApi~createOrganizationSamlIdpCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    createOrganizationSamlIdp(body, organizationId, callback) {
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
        '/organizations/{organizationId}/saml/idps', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the deleteOrganizationSamlIdp operation.
     * @callback module:api/IdpsApi~deleteOrganizationSamlIdpCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Remove a SAML IdP in your organization.
     * Remove a SAML IdP in your organization.
     * @param {module:api/IdpsApi~deleteOrganizationSamlIdpCallback} callback The callback function, accepting three arguments: error, data, response
     */
    deleteOrganizationSamlIdp(organizationId, idpId, callback) {
      let postBody = null;

      let pathParams = {
        'organizationId': organizationId,
        'idpId': idpId
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
        '/organizations/{organizationId}/saml/idps/{idpId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getOrganizationSamlIdp operation.
     * @callback module:api/IdpsApi~getOrganizationSamlIdpCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a SAML IdP from your organization.
     * Get a SAML IdP from your organization.
     * @param {module:api/IdpsApi~getOrganizationSamlIdpCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    getOrganizationSamlIdp(organizationId, idpId, callback) {
      let postBody = null;

      let pathParams = {
        'organizationId': organizationId,
        'idpId': idpId
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
        '/organizations/{organizationId}/saml/idps/{idpId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getOrganizationSamlIdps operation.
     * @callback module:api/IdpsApi~getOrganizationSamlIdpsCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List the SAML IdPs in your organization.
     * List the SAML IdPs in your organization.
     * @param {module:api/IdpsApi~getOrganizationSamlIdpsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    getOrganizationSamlIdps(organizationId, callback) {
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
        '/organizations/{organizationId}/saml/idps', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the updateOrganizationSamlIdp operation.
     * @callback module:api/IdpsApi~updateOrganizationSamlIdpCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a SAML IdP in your organization
     * Update a SAML IdP in your organization
     * @param {Object} opts Optional parameters
     * @param {module:api/IdpsApi~updateOrganizationSamlIdpCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    updateOrganizationSamlIdp(organizationId, idpId, opts, callback) {
      opts = opts || {};
      let postBody = opts['body'];

      let pathParams = {
        'organizationId': organizationId,
        'idpId': idpId
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
        '/organizations/{organizationId}/saml/idps/{idpId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

}
