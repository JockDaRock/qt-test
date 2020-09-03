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
    instance = new MerakiDashboardApi.IdpsApi();
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

  describe('IdpsApi', function() {
    describe('createOrganizationSamlIdp', function() {
      it('should call createOrganizationSamlIdp successfully', function(done) {
        //uncomment below and update the code to test createOrganizationSamlIdp
        //instance.createOrganizationSamlIdp(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteOrganizationSamlIdp', function() {
      it('should call deleteOrganizationSamlIdp successfully', function(done) {
        //uncomment below and update the code to test deleteOrganizationSamlIdp
        //instance.deleteOrganizationSamlIdp(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getOrganizationSamlIdp', function() {
      it('should call getOrganizationSamlIdp successfully', function(done) {
        //uncomment below and update the code to test getOrganizationSamlIdp
        //instance.getOrganizationSamlIdp(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getOrganizationSamlIdps', function() {
      it('should call getOrganizationSamlIdps successfully', function(done) {
        //uncomment below and update the code to test getOrganizationSamlIdps
        //instance.getOrganizationSamlIdps(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateOrganizationSamlIdp', function() {
      it('should call updateOrganizationSamlIdp successfully', function(done) {
        //uncomment below and update the code to test updateOrganizationSamlIdp
        //instance.updateOrganizationSamlIdp(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
