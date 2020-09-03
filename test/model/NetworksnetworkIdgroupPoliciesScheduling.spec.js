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
    instance = new MerakiDashboardApi.NetworksnetworkIdgroupPoliciesScheduling();
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

  describe('NetworksnetworkIdgroupPoliciesScheduling', function() {
    it('should create an instance of NetworksnetworkIdgroupPoliciesScheduling', function() {
      // uncomment below and update the code to test NetworksnetworkIdgroupPoliciesScheduling
      //var instane = new MerakiDashboardApi.NetworksnetworkIdgroupPoliciesScheduling();
      //expect(instance).to.be.a(MerakiDashboardApi.NetworksnetworkIdgroupPoliciesScheduling);
    });

    it('should have the property enabled (base name: "enabled")', function() {
      // uncomment below and update the code to test the property enabled
      //var instane = new MerakiDashboardApi.NetworksnetworkIdgroupPoliciesScheduling();
      //expect(instance).to.be();
    });

    it('should have the property monday (base name: "monday")', function() {
      // uncomment below and update the code to test the property monday
      //var instane = new MerakiDashboardApi.NetworksnetworkIdgroupPoliciesScheduling();
      //expect(instance).to.be();
    });

    it('should have the property tuesday (base name: "tuesday")', function() {
      // uncomment below and update the code to test the property tuesday
      //var instane = new MerakiDashboardApi.NetworksnetworkIdgroupPoliciesScheduling();
      //expect(instance).to.be();
    });

    it('should have the property wednesday (base name: "wednesday")', function() {
      // uncomment below and update the code to test the property wednesday
      //var instane = new MerakiDashboardApi.NetworksnetworkIdgroupPoliciesScheduling();
      //expect(instance).to.be();
    });

    it('should have the property thursday (base name: "thursday")', function() {
      // uncomment below and update the code to test the property thursday
      //var instane = new MerakiDashboardApi.NetworksnetworkIdgroupPoliciesScheduling();
      //expect(instance).to.be();
    });

    it('should have the property friday (base name: "friday")', function() {
      // uncomment below and update the code to test the property friday
      //var instane = new MerakiDashboardApi.NetworksnetworkIdgroupPoliciesScheduling();
      //expect(instance).to.be();
    });

    it('should have the property saturday (base name: "saturday")', function() {
      // uncomment below and update the code to test the property saturday
      //var instane = new MerakiDashboardApi.NetworksnetworkIdgroupPoliciesScheduling();
      //expect(instance).to.be();
    });

    it('should have the property sunday (base name: "sunday")', function() {
      // uncomment below and update the code to test the property sunday
      //var instane = new MerakiDashboardApi.NetworksnetworkIdgroupPoliciesScheduling();
      //expect(instance).to.be();
    });

  });

}));