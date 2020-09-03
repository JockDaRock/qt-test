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
    describe('UpdateDeviceSwitchRoutingInterface', function() {
      beforeEach(function() {
        instance = new MerakiDashboardApi.UpdateDeviceSwitchRoutingInterface();
      });

      it('should create an instance of UpdateDeviceSwitchRoutingInterface', function() {
        // TODO: update the code to test UpdateDeviceSwitchRoutingInterface
        expect(instance).to.be.a(MerakiDashboardApi.UpdateDeviceSwitchRoutingInterface);
      });

      it('should have the property name (base name: "name")', function() {
        // TODO: update the code to test the property name
        expect(instance).to.have.property('name');
        // expect(instance.name).to.be(expectedValueLiteral);
      });

      it('should have the property subnet (base name: "subnet")', function() {
        // TODO: update the code to test the property subnet
        expect(instance).to.have.property('subnet');
        // expect(instance.subnet).to.be(expectedValueLiteral);
      });

      it('should have the property interfaceIp (base name: "interfaceIp")', function() {
        // TODO: update the code to test the property interfaceIp
        expect(instance).to.have.property('interfaceIp');
        // expect(instance.interfaceIp).to.be(expectedValueLiteral);
      });

      it('should have the property multicastRouting (base name: "multicastRouting")', function() {
        // TODO: update the code to test the property multicastRouting
        expect(instance).to.have.property('multicastRouting');
        // expect(instance.multicastRouting).to.be(expectedValueLiteral);
      });

      it('should have the property vlanId (base name: "vlanId")', function() {
        // TODO: update the code to test the property vlanId
        expect(instance).to.have.property('vlanId');
        // expect(instance.vlanId).to.be(expectedValueLiteral);
      });

      it('should have the property ospfSettings (base name: "ospfSettings")', function() {
        // TODO: update the code to test the property ospfSettings
        expect(instance).to.have.property('ospfSettings');
        // expect(instance.ospfSettings).to.be(expectedValueLiteral);
      });

    });
  });

}));
