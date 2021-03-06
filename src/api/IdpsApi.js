/*
 * Meraki Dashboard API
 * The Cisco Meraki Dashboard API is a modern REST API based on the OpenAPI specification.  > Date: 02 September, 2020 > > [What's New](https://meraki.io/whats-new/)  ---  [API Documentation](https://meraki.io/api)  [Community Support](https://meraki.io/community)  [Meraki Homepage](https://www.meraki.com) 
 *
 * OpenAPI spec version: 1.1.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.15
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/CreateOrganizationSamlIdp', 'model/UpdateOrganizationSamlIdp'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/CreateOrganizationSamlIdp'), require('../model/UpdateOrganizationSamlIdp'));
  } else {
    // Browser globals (root is window)
    if (!root.MerakiDashboardApi) {
      root.MerakiDashboardApi = {};
    }
    root.MerakiDashboardApi.IdpsApi = factory(root.MerakiDashboardApi.ApiClient, root.MerakiDashboardApi.CreateOrganizationSamlIdp, root.MerakiDashboardApi.UpdateOrganizationSamlIdp);
  }
}(this, function(ApiClient, CreateOrganizationSamlIdp, UpdateOrganizationSamlIdp) {
  'use strict';

  /**
   * Idps service.
   * @module api/IdpsApi
   * @version 1.1.0
   */

  /**
   * Constructs a new IdpsApi. 
   * @alias module:api/IdpsApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


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
     * @param {String} organizationId 
     * @param {module:model/CreateOrganizationSamlIdp} createOrganizationSamlIdp 
     * @param {module:api/IdpsApi~createOrganizationSamlIdpCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    this.createOrganizationSamlIdp = function(organizationId, createOrganizationSamlIdp, callback) {
      var postBody = createOrganizationSamlIdp;

      // verify the required parameter 'organizationId' is set
      if (organizationId === undefined || organizationId === null) {
        throw new Error("Missing the required parameter 'organizationId' when calling createOrganizationSamlIdp");
      }

      // verify the required parameter 'createOrganizationSamlIdp' is set
      if (createOrganizationSamlIdp === undefined || createOrganizationSamlIdp === null) {
        throw new Error("Missing the required parameter 'createOrganizationSamlIdp' when calling createOrganizationSamlIdp");
      }


      var pathParams = {
        'organizationId': organizationId
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['meraki_api_key'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = Object;

      return this.apiClient.callApi(
        '/organizations/{organizationId}/saml/idps', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
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
     * @param {String} organizationId 
     * @param {String} idpId 
     * @param {module:api/IdpsApi~deleteOrganizationSamlIdpCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteOrganizationSamlIdp = function(organizationId, idpId, callback) {
      var postBody = null;

      // verify the required parameter 'organizationId' is set
      if (organizationId === undefined || organizationId === null) {
        throw new Error("Missing the required parameter 'organizationId' when calling deleteOrganizationSamlIdp");
      }

      // verify the required parameter 'idpId' is set
      if (idpId === undefined || idpId === null) {
        throw new Error("Missing the required parameter 'idpId' when calling deleteOrganizationSamlIdp");
      }


      var pathParams = {
        'organizationId': organizationId,
        'idpId': idpId
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['meraki_api_key'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/organizations/{organizationId}/saml/idps/{idpId}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
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
     * @param {String} organizationId 
     * @param {String} idpId 
     * @param {module:api/IdpsApi~getOrganizationSamlIdpCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    this.getOrganizationSamlIdp = function(organizationId, idpId, callback) {
      var postBody = null;

      // verify the required parameter 'organizationId' is set
      if (organizationId === undefined || organizationId === null) {
        throw new Error("Missing the required parameter 'organizationId' when calling getOrganizationSamlIdp");
      }

      // verify the required parameter 'idpId' is set
      if (idpId === undefined || idpId === null) {
        throw new Error("Missing the required parameter 'idpId' when calling getOrganizationSamlIdp");
      }


      var pathParams = {
        'organizationId': organizationId,
        'idpId': idpId
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['meraki_api_key'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = Object;

      return this.apiClient.callApi(
        '/organizations/{organizationId}/saml/idps/{idpId}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
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
     * @param {String} organizationId 
     * @param {module:api/IdpsApi~getOrganizationSamlIdpsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    this.getOrganizationSamlIdps = function(organizationId, callback) {
      var postBody = null;

      // verify the required parameter 'organizationId' is set
      if (organizationId === undefined || organizationId === null) {
        throw new Error("Missing the required parameter 'organizationId' when calling getOrganizationSamlIdps");
      }


      var pathParams = {
        'organizationId': organizationId
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['meraki_api_key'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = Object;

      return this.apiClient.callApi(
        '/organizations/{organizationId}/saml/idps', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
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
     * @param {String} organizationId 
     * @param {String} idpId 
     * @param {Object} opts Optional parameters
     * @param {module:model/UpdateOrganizationSamlIdp} opts.updateOrganizationSamlIdp 
     * @param {module:api/IdpsApi~updateOrganizationSamlIdpCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    this.updateOrganizationSamlIdp = function(organizationId, idpId, opts, callback) {
      opts = opts || {};
      var postBody = opts['updateOrganizationSamlIdp'];

      // verify the required parameter 'organizationId' is set
      if (organizationId === undefined || organizationId === null) {
        throw new Error("Missing the required parameter 'organizationId' when calling updateOrganizationSamlIdp");
      }

      // verify the required parameter 'idpId' is set
      if (idpId === undefined || idpId === null) {
        throw new Error("Missing the required parameter 'idpId' when calling updateOrganizationSamlIdp");
      }


      var pathParams = {
        'organizationId': organizationId,
        'idpId': idpId
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['meraki_api_key'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = Object;

      return this.apiClient.callApi(
        '/organizations/{organizationId}/saml/idps/{idpId}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
