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
    instance = new MerakiDashboardApi.RulesApi();
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

  describe('RulesApi', function() {
    describe('getNetworkApplianceTrafficShapingRules', function() {
      it('should call getNetworkApplianceTrafficShapingRules successfully', function(done) {
        //uncomment below and update the code to test getNetworkApplianceTrafficShapingRules
        //instance.getNetworkApplianceTrafficShapingRules(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getNetworkWirelessSsidTrafficShapingRules', function() {
      it('should call getNetworkWirelessSsidTrafficShapingRules successfully', function(done) {
        //uncomment below and update the code to test getNetworkWirelessSsidTrafficShapingRules
        //instance.getNetworkWirelessSsidTrafficShapingRules(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateNetworkApplianceTrafficShapingRules', function() {
      it('should call updateNetworkApplianceTrafficShapingRules successfully', function(done) {
        //uncomment below and update the code to test updateNetworkApplianceTrafficShapingRules
        //instance.updateNetworkApplianceTrafficShapingRules(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateNetworkWirelessSsidTrafficShapingRules', function() {
      it('should call updateNetworkWirelessSsidTrafficShapingRules successfully', function(done) {
        //uncomment below and update the code to test updateNetworkWirelessSsidTrafficShapingRules
        //instance.updateNetworkWirelessSsidTrafficShapingRules(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
