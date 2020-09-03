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
    instance = new MerakiDashboardApi.NetworksnetworkIdwirelessssidsnumberfirewalll3FirewallRulesRules();
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

  describe('NetworksnetworkIdwirelessssidsnumberfirewalll3FirewallRulesRules', function() {
    it('should create an instance of NetworksnetworkIdwirelessssidsnumberfirewalll3FirewallRulesRules', function() {
      // uncomment below and update the code to test NetworksnetworkIdwirelessssidsnumberfirewalll3FirewallRulesRules
      //var instane = new MerakiDashboardApi.NetworksnetworkIdwirelessssidsnumberfirewalll3FirewallRulesRules();
      //expect(instance).to.be.a(MerakiDashboardApi.NetworksnetworkIdwirelessssidsnumberfirewalll3FirewallRulesRules);
    });

    it('should have the property comment (base name: "comment")', function() {
      // uncomment below and update the code to test the property comment
      //var instane = new MerakiDashboardApi.NetworksnetworkIdwirelessssidsnumberfirewalll3FirewallRulesRules();
      //expect(instance).to.be();
    });

    it('should have the property policy (base name: "policy")', function() {
      // uncomment below and update the code to test the property policy
      //var instane = new MerakiDashboardApi.NetworksnetworkIdwirelessssidsnumberfirewalll3FirewallRulesRules();
      //expect(instance).to.be();
    });

    it('should have the property protocol (base name: "protocol")', function() {
      // uncomment below and update the code to test the property protocol
      //var instane = new MerakiDashboardApi.NetworksnetworkIdwirelessssidsnumberfirewalll3FirewallRulesRules();
      //expect(instance).to.be();
    });

    it('should have the property destPort (base name: "destPort")', function() {
      // uncomment below and update the code to test the property destPort
      //var instane = new MerakiDashboardApi.NetworksnetworkIdwirelessssidsnumberfirewalll3FirewallRulesRules();
      //expect(instance).to.be();
    });

    it('should have the property destCidr (base name: "destCidr")', function() {
      // uncomment below and update the code to test the property destCidr
      //var instane = new MerakiDashboardApi.NetworksnetworkIdwirelessssidsnumberfirewalll3FirewallRulesRules();
      //expect(instance).to.be();
    });

  });

}));
