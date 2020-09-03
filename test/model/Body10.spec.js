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
    instance = new MerakiDashboardApi.Body10();
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

  describe('Body10', function() {
    it('should create an instance of Body10', function() {
      // uncomment below and update the code to test Body10
      //var instane = new MerakiDashboardApi.Body10();
      //expect(instance).to.be.a(MerakiDashboardApi.Body10);
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new MerakiDashboardApi.Body10();
      //expect(instance).to.be();
    });

    it('should have the property tags (base name: "tags")', function() {
      // uncomment below and update the code to test the property tags
      //var instane = new MerakiDashboardApi.Body10();
      //expect(instance).to.be();
    });

    it('should have the property enabled (base name: "enabled")', function() {
      // uncomment below and update the code to test the property enabled
      //var instane = new MerakiDashboardApi.Body10();
      //expect(instance).to.be();
    });

    it('should have the property type (base name: "type")', function() {
      // uncomment below and update the code to test the property type
      //var instane = new MerakiDashboardApi.Body10();
      //expect(instance).to.be();
    });

    it('should have the property vlan (base name: "vlan")', function() {
      // uncomment below and update the code to test the property vlan
      //var instane = new MerakiDashboardApi.Body10();
      //expect(instance).to.be();
    });

    it('should have the property voiceVlan (base name: "voiceVlan")', function() {
      // uncomment below and update the code to test the property voiceVlan
      //var instane = new MerakiDashboardApi.Body10();
      //expect(instance).to.be();
    });

    it('should have the property allowedVlans (base name: "allowedVlans")', function() {
      // uncomment below and update the code to test the property allowedVlans
      //var instane = new MerakiDashboardApi.Body10();
      //expect(instance).to.be();
    });

    it('should have the property poeEnabled (base name: "poeEnabled")', function() {
      // uncomment below and update the code to test the property poeEnabled
      //var instane = new MerakiDashboardApi.Body10();
      //expect(instance).to.be();
    });

    it('should have the property isolationEnabled (base name: "isolationEnabled")', function() {
      // uncomment below and update the code to test the property isolationEnabled
      //var instane = new MerakiDashboardApi.Body10();
      //expect(instance).to.be();
    });

    it('should have the property rstpEnabled (base name: "rstpEnabled")', function() {
      // uncomment below and update the code to test the property rstpEnabled
      //var instane = new MerakiDashboardApi.Body10();
      //expect(instance).to.be();
    });

    it('should have the property stpGuard (base name: "stpGuard")', function() {
      // uncomment below and update the code to test the property stpGuard
      //var instane = new MerakiDashboardApi.Body10();
      //expect(instance).to.be();
    });

    it('should have the property linkNegotiation (base name: "linkNegotiation")', function() {
      // uncomment below and update the code to test the property linkNegotiation
      //var instane = new MerakiDashboardApi.Body10();
      //expect(instance).to.be();
    });

    it('should have the property portScheduleId (base name: "portScheduleId")', function() {
      // uncomment below and update the code to test the property portScheduleId
      //var instane = new MerakiDashboardApi.Body10();
      //expect(instance).to.be();
    });

    it('should have the property udld (base name: "udld")', function() {
      // uncomment below and update the code to test the property udld
      //var instane = new MerakiDashboardApi.Body10();
      //expect(instance).to.be();
    });

    it('should have the property accessPolicyType (base name: "accessPolicyType")', function() {
      // uncomment below and update the code to test the property accessPolicyType
      //var instane = new MerakiDashboardApi.Body10();
      //expect(instance).to.be();
    });

    it('should have the property accessPolicyNumber (base name: "accessPolicyNumber")', function() {
      // uncomment below and update the code to test the property accessPolicyNumber
      //var instane = new MerakiDashboardApi.Body10();
      //expect(instance).to.be();
    });

    it('should have the property macAllowList (base name: "macAllowList")', function() {
      // uncomment below and update the code to test the property macAllowList
      //var instane = new MerakiDashboardApi.Body10();
      //expect(instance).to.be();
    });

    it('should have the property stickyMacAllowList (base name: "stickyMacAllowList")', function() {
      // uncomment below and update the code to test the property stickyMacAllowList
      //var instane = new MerakiDashboardApi.Body10();
      //expect(instance).to.be();
    });

    it('should have the property stickyMacAllowListLimit (base name: "stickyMacAllowListLimit")', function() {
      // uncomment below and update the code to test the property stickyMacAllowListLimit
      //var instane = new MerakiDashboardApi.Body10();
      //expect(instance).to.be();
    });

    it('should have the property stormControlEnabled (base name: "stormControlEnabled")', function() {
      // uncomment below and update the code to test the property stormControlEnabled
      //var instane = new MerakiDashboardApi.Body10();
      //expect(instance).to.be();
    });

  });

}));
