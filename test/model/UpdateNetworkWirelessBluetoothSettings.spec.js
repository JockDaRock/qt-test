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

  describe('(package)', function() {
    describe('UpdateNetworkWirelessBluetoothSettings', function() {
      beforeEach(function() {
        instance = new MerakiDashboardApi.UpdateNetworkWirelessBluetoothSettings();
      });

      it('should create an instance of UpdateNetworkWirelessBluetoothSettings', function() {
        // TODO: update the code to test UpdateNetworkWirelessBluetoothSettings
        expect(instance).to.be.a(MerakiDashboardApi.UpdateNetworkWirelessBluetoothSettings);
      });

      it('should have the property scanningEnabled (base name: "scanningEnabled")', function() {
        // TODO: update the code to test the property scanningEnabled
        expect(instance).to.have.property('scanningEnabled');
        // expect(instance.scanningEnabled).to.be(expectedValueLiteral);
      });

      it('should have the property advertisingEnabled (base name: "advertisingEnabled")', function() {
        // TODO: update the code to test the property advertisingEnabled
        expect(instance).to.have.property('advertisingEnabled');
        // expect(instance.advertisingEnabled).to.be(expectedValueLiteral);
      });

      it('should have the property uuid (base name: "uuid")', function() {
        // TODO: update the code to test the property uuid
        expect(instance).to.have.property('uuid');
        // expect(instance.uuid).to.be(expectedValueLiteral);
      });

      it('should have the property majorMinorAssignmentMode (base name: "majorMinorAssignmentMode")', function() {
        // TODO: update the code to test the property majorMinorAssignmentMode
        expect(instance).to.have.property('majorMinorAssignmentMode');
        // expect(instance.majorMinorAssignmentMode).to.be(expectedValueLiteral);
      });

      it('should have the property major (base name: "major")', function() {
        // TODO: update the code to test the property major
        expect(instance).to.have.property('major');
        // expect(instance.major).to.be(expectedValueLiteral);
      });

      it('should have the property minor (base name: "minor")', function() {
        // TODO: update the code to test the property minor
        expect(instance).to.have.property('minor');
        // expect(instance.minor).to.be(expectedValueLiteral);
      });

    });
  });

}));
