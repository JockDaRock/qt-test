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
    instance = new MerakiDashboardApi.DevicesserialswitchroutinginterfacesinterfaceIddhcpReservedIpRanges();
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

  describe('DevicesserialswitchroutinginterfacesinterfaceIddhcpReservedIpRanges', function() {
    it('should create an instance of DevicesserialswitchroutinginterfacesinterfaceIddhcpReservedIpRanges', function() {
      // uncomment below and update the code to test DevicesserialswitchroutinginterfacesinterfaceIddhcpReservedIpRanges
      //var instane = new MerakiDashboardApi.DevicesserialswitchroutinginterfacesinterfaceIddhcpReservedIpRanges();
      //expect(instance).to.be.a(MerakiDashboardApi.DevicesserialswitchroutinginterfacesinterfaceIddhcpReservedIpRanges);
    });

    it('should have the property start (base name: "start")', function() {
      // uncomment below and update the code to test the property start
      //var instane = new MerakiDashboardApi.DevicesserialswitchroutinginterfacesinterfaceIddhcpReservedIpRanges();
      //expect(instance).to.be();
    });

    it('should have the property end (base name: "end")', function() {
      // uncomment below and update the code to test the property end
      //var instane = new MerakiDashboardApi.DevicesserialswitchroutinginterfacesinterfaceIddhcpReservedIpRanges();
      //expect(instance).to.be();
    });

    it('should have the property comment (base name: "comment")', function() {
      // uncomment below and update the code to test the property comment
      //var instane = new MerakiDashboardApi.DevicesserialswitchroutinginterfacesinterfaceIddhcpReservedIpRanges();
      //expect(instance).to.be();
    });

  });

}));
