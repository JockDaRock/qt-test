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
    instance = new MerakiDashboardApi.Body62();
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

  describe('Body62', function() {
    it('should create an instance of Body62', function() {
      // uncomment below and update the code to test Body62
      //var instane = new MerakiDashboardApi.Body62();
      //expect(instance).to.be.a(MerakiDashboardApi.Body62);
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new MerakiDashboardApi.Body62();
      //expect(instance).to.be();
    });

    it('should have the property scheduling (base name: "scheduling")', function() {
      // uncomment below and update the code to test the property scheduling
      //var instane = new MerakiDashboardApi.Body62();
      //expect(instance).to.be();
    });

    it('should have the property bandwidth (base name: "bandwidth")', function() {
      // uncomment below and update the code to test the property bandwidth
      //var instane = new MerakiDashboardApi.Body62();
      //expect(instance).to.be();
    });

    it('should have the property firewallAndTrafficShaping (base name: "firewallAndTrafficShaping")', function() {
      // uncomment below and update the code to test the property firewallAndTrafficShaping
      //var instane = new MerakiDashboardApi.Body62();
      //expect(instance).to.be();
    });

    it('should have the property contentFiltering (base name: "contentFiltering")', function() {
      // uncomment below and update the code to test the property contentFiltering
      //var instane = new MerakiDashboardApi.Body62();
      //expect(instance).to.be();
    });

    it('should have the property splashAuthSettings (base name: "splashAuthSettings")', function() {
      // uncomment below and update the code to test the property splashAuthSettings
      //var instane = new MerakiDashboardApi.Body62();
      //expect(instance).to.be();
    });

    it('should have the property vlanTagging (base name: "vlanTagging")', function() {
      // uncomment below and update the code to test the property vlanTagging
      //var instane = new MerakiDashboardApi.Body62();
      //expect(instance).to.be();
    });

    it('should have the property bonjourForwarding (base name: "bonjourForwarding")', function() {
      // uncomment below and update the code to test the property bonjourForwarding
      //var instane = new MerakiDashboardApi.Body62();
      //expect(instance).to.be();
    });

  });

}));