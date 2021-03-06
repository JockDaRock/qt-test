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
    define(['ApiClient', 'model/AssignOrganizationLicensesSeats', 'model/MoveOrganizationLicenses', 'model/MoveOrganizationLicensesSeats', 'model/RenewOrganizationLicensesSeats', 'model/UpdateOrganizationLicense'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/AssignOrganizationLicensesSeats'), require('../model/MoveOrganizationLicenses'), require('../model/MoveOrganizationLicensesSeats'), require('../model/RenewOrganizationLicensesSeats'), require('../model/UpdateOrganizationLicense'));
  } else {
    // Browser globals (root is window)
    if (!root.MerakiDashboardApi) {
      root.MerakiDashboardApi = {};
    }
    root.MerakiDashboardApi.LicensesApi = factory(root.MerakiDashboardApi.ApiClient, root.MerakiDashboardApi.AssignOrganizationLicensesSeats, root.MerakiDashboardApi.MoveOrganizationLicenses, root.MerakiDashboardApi.MoveOrganizationLicensesSeats, root.MerakiDashboardApi.RenewOrganizationLicensesSeats, root.MerakiDashboardApi.UpdateOrganizationLicense);
  }
}(this, function(ApiClient, AssignOrganizationLicensesSeats, MoveOrganizationLicenses, MoveOrganizationLicensesSeats, RenewOrganizationLicensesSeats, UpdateOrganizationLicense) {
  'use strict';

  /**
   * Licenses service.
   * @module api/LicensesApi
   * @version 1.1.0
   */

  /**
   * Constructs a new LicensesApi. 
   * @alias module:api/LicensesApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the assignOrganizationLicensesSeats operation.
     * @callback module:api/LicensesApi~assignOrganizationLicensesSeatsCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Assign SM seats to a network. This will increase the managed SM device limit of the network
     * Assign SM seats to a network. This will increase the managed SM device limit of the network
     * @param {String} organizationId 
     * @param {module:model/AssignOrganizationLicensesSeats} assignOrganizationLicensesSeats 
     * @param {module:api/LicensesApi~assignOrganizationLicensesSeatsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    this.assignOrganizationLicensesSeats = function(organizationId, assignOrganizationLicensesSeats, callback) {
      var postBody = assignOrganizationLicensesSeats;

      // verify the required parameter 'organizationId' is set
      if (organizationId === undefined || organizationId === null) {
        throw new Error("Missing the required parameter 'organizationId' when calling assignOrganizationLicensesSeats");
      }

      // verify the required parameter 'assignOrganizationLicensesSeats' is set
      if (assignOrganizationLicensesSeats === undefined || assignOrganizationLicensesSeats === null) {
        throw new Error("Missing the required parameter 'assignOrganizationLicensesSeats' when calling assignOrganizationLicensesSeats");
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
        '/organizations/{organizationId}/licenses/assignSeats', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getOrganizationLicense operation.
     * @callback module:api/LicensesApi~getOrganizationLicenseCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Display a license
     * Display a license
     * @param {String} organizationId 
     * @param {String} licenseId 
     * @param {module:api/LicensesApi~getOrganizationLicenseCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    this.getOrganizationLicense = function(organizationId, licenseId, callback) {
      var postBody = null;

      // verify the required parameter 'organizationId' is set
      if (organizationId === undefined || organizationId === null) {
        throw new Error("Missing the required parameter 'organizationId' when calling getOrganizationLicense");
      }

      // verify the required parameter 'licenseId' is set
      if (licenseId === undefined || licenseId === null) {
        throw new Error("Missing the required parameter 'licenseId' when calling getOrganizationLicense");
      }


      var pathParams = {
        'organizationId': organizationId,
        'licenseId': licenseId
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
        '/organizations/{organizationId}/licenses/{licenseId}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getOrganizationLicenses operation.
     * @callback module:api/LicensesApi~getOrganizationLicensesCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List the licenses for an organization
     * List the licenses for an organization
     * @param {String} organizationId 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.perPage The number of entries per page returned. Acceptable range is 3 - 1000. Default is 1000.
     * @param {String} opts.startingAfter A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it.
     * @param {String} opts.endingBefore A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it.
     * @param {String} opts.deviceSerial Filter the licenses to those assigned to a particular device
     * @param {String} opts.networkId Filter the licenses to those assigned in a particular network
     * @param {module:model/String} opts.state Filter the licenses to those in a particular state. Can be one of 'active', 'expired', 'expiring', 'unused', 'unusedActive' or 'recentlyQueued'
     * @param {module:api/LicensesApi~getOrganizationLicensesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    this.getOrganizationLicenses = function(organizationId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'organizationId' is set
      if (organizationId === undefined || organizationId === null) {
        throw new Error("Missing the required parameter 'organizationId' when calling getOrganizationLicenses");
      }


      var pathParams = {
        'organizationId': organizationId
      };
      var queryParams = {
        'perPage': opts['perPage'],
        'startingAfter': opts['startingAfter'],
        'endingBefore': opts['endingBefore'],
        'deviceSerial': opts['deviceSerial'],
        'networkId': opts['networkId'],
        'state': opts['state'],
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
        '/organizations/{organizationId}/licenses', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getOrganizationLicensesOverview operation.
     * @callback module:api/LicensesApi~getOrganizationLicensesOverviewCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Return an overview of the license state for an organization
     * Return an overview of the license state for an organization
     * @param {String} organizationId 
     * @param {module:api/LicensesApi~getOrganizationLicensesOverviewCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    this.getOrganizationLicensesOverview = function(organizationId, callback) {
      var postBody = null;

      // verify the required parameter 'organizationId' is set
      if (organizationId === undefined || organizationId === null) {
        throw new Error("Missing the required parameter 'organizationId' when calling getOrganizationLicensesOverview");
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
        '/organizations/{organizationId}/licenses/overview', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the moveOrganizationLicenses operation.
     * @callback module:api/LicensesApi~moveOrganizationLicensesCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Move licenses to another organization. This will also move any devices that the licenses are assigned to
     * Move licenses to another organization. This will also move any devices that the licenses are assigned to
     * @param {String} organizationId 
     * @param {module:model/MoveOrganizationLicenses} moveOrganizationLicenses 
     * @param {module:api/LicensesApi~moveOrganizationLicensesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    this.moveOrganizationLicenses = function(organizationId, moveOrganizationLicenses, callback) {
      var postBody = moveOrganizationLicenses;

      // verify the required parameter 'organizationId' is set
      if (organizationId === undefined || organizationId === null) {
        throw new Error("Missing the required parameter 'organizationId' when calling moveOrganizationLicenses");
      }

      // verify the required parameter 'moveOrganizationLicenses' is set
      if (moveOrganizationLicenses === undefined || moveOrganizationLicenses === null) {
        throw new Error("Missing the required parameter 'moveOrganizationLicenses' when calling moveOrganizationLicenses");
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
        '/organizations/{organizationId}/licenses/move', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the moveOrganizationLicensesSeats operation.
     * @callback module:api/LicensesApi~moveOrganizationLicensesSeatsCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Move SM seats to another organization
     * Move SM seats to another organization
     * @param {String} organizationId 
     * @param {module:model/MoveOrganizationLicensesSeats} moveOrganizationLicensesSeats 
     * @param {module:api/LicensesApi~moveOrganizationLicensesSeatsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    this.moveOrganizationLicensesSeats = function(organizationId, moveOrganizationLicensesSeats, callback) {
      var postBody = moveOrganizationLicensesSeats;

      // verify the required parameter 'organizationId' is set
      if (organizationId === undefined || organizationId === null) {
        throw new Error("Missing the required parameter 'organizationId' when calling moveOrganizationLicensesSeats");
      }

      // verify the required parameter 'moveOrganizationLicensesSeats' is set
      if (moveOrganizationLicensesSeats === undefined || moveOrganizationLicensesSeats === null) {
        throw new Error("Missing the required parameter 'moveOrganizationLicensesSeats' when calling moveOrganizationLicensesSeats");
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
        '/organizations/{organizationId}/licenses/moveSeats', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the renewOrganizationLicensesSeats operation.
     * @callback module:api/LicensesApi~renewOrganizationLicensesSeatsCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Renew SM seats of a license. This will extend the license expiration date of managed SM devices covered by this license
     * Renew SM seats of a license. This will extend the license expiration date of managed SM devices covered by this license
     * @param {String} organizationId 
     * @param {module:model/RenewOrganizationLicensesSeats} renewOrganizationLicensesSeats 
     * @param {module:api/LicensesApi~renewOrganizationLicensesSeatsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    this.renewOrganizationLicensesSeats = function(organizationId, renewOrganizationLicensesSeats, callback) {
      var postBody = renewOrganizationLicensesSeats;

      // verify the required parameter 'organizationId' is set
      if (organizationId === undefined || organizationId === null) {
        throw new Error("Missing the required parameter 'organizationId' when calling renewOrganizationLicensesSeats");
      }

      // verify the required parameter 'renewOrganizationLicensesSeats' is set
      if (renewOrganizationLicensesSeats === undefined || renewOrganizationLicensesSeats === null) {
        throw new Error("Missing the required parameter 'renewOrganizationLicensesSeats' when calling renewOrganizationLicensesSeats");
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
        '/organizations/{organizationId}/licenses/renewSeats', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateOrganizationLicense operation.
     * @callback module:api/LicensesApi~updateOrganizationLicenseCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a license
     * Update a license
     * @param {String} organizationId 
     * @param {String} licenseId 
     * @param {Object} opts Optional parameters
     * @param {module:model/UpdateOrganizationLicense} opts.updateOrganizationLicense 
     * @param {module:api/LicensesApi~updateOrganizationLicenseCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    this.updateOrganizationLicense = function(organizationId, licenseId, opts, callback) {
      opts = opts || {};
      var postBody = opts['updateOrganizationLicense'];

      // verify the required parameter 'organizationId' is set
      if (organizationId === undefined || organizationId === null) {
        throw new Error("Missing the required parameter 'organizationId' when calling updateOrganizationLicense");
      }

      // verify the required parameter 'licenseId' is set
      if (licenseId === undefined || licenseId === null) {
        throw new Error("Missing the required parameter 'licenseId' when calling updateOrganizationLicense");
      }


      var pathParams = {
        'organizationId': organizationId,
        'licenseId': licenseId
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
        '/organizations/{organizationId}/licenses/{licenseId}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
