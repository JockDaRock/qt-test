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
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.MerakiDashboardApi);
  }
}(this, function(expect, MerakiDashboardApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new MerakiDashboardApi.SnmpApi();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('SnmpApi', function() {
    describe('getNetworkSnmp', function() {
      it('should call getNetworkSnmp successfully', function(done) {
        //uncomment below and update the code to test getNetworkSnmp
        //instance.getNetworkSnmp(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getOrganizationSnmp', function() {
      it('should call getOrganizationSnmp successfully', function(done) {
        //uncomment below and update the code to test getOrganizationSnmp
        //instance.getOrganizationSnmp(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateNetworkSnmp', function() {
      it('should call updateNetworkSnmp successfully', function(done) {
        //uncomment below and update the code to test updateNetworkSnmp
        //instance.updateNetworkSnmp(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateOrganizationSnmp', function() {
      it('should call updateOrganizationSnmp successfully', function(done) {
        //uncomment below and update the code to test updateOrganizationSnmp
        //instance.updateOrganizationSnmp(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
