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
    describe('UpdateDeviceSwitchRoutingInterfaceDhcp', function() {
      beforeEach(function() {
        instance = new MerakiDashboardApi.UpdateDeviceSwitchRoutingInterfaceDhcp();
      });

      it('should create an instance of UpdateDeviceSwitchRoutingInterfaceDhcp', function() {
        // TODO: update the code to test UpdateDeviceSwitchRoutingInterfaceDhcp
        expect(instance).to.be.a(MerakiDashboardApi.UpdateDeviceSwitchRoutingInterfaceDhcp);
      });

      it('should have the property dhcpMode (base name: "dhcpMode")', function() {
        // TODO: update the code to test the property dhcpMode
        expect(instance).to.have.property('dhcpMode');
        // expect(instance.dhcpMode).to.be(expectedValueLiteral);
      });

      it('should have the property dhcpRelayServerIps (base name: "dhcpRelayServerIps")', function() {
        // TODO: update the code to test the property dhcpRelayServerIps
        expect(instance).to.have.property('dhcpRelayServerIps');
        // expect(instance.dhcpRelayServerIps).to.be(expectedValueLiteral);
      });

      it('should have the property dhcpLeaseTime (base name: "dhcpLeaseTime")', function() {
        // TODO: update the code to test the property dhcpLeaseTime
        expect(instance).to.have.property('dhcpLeaseTime');
        // expect(instance.dhcpLeaseTime).to.be(expectedValueLiteral);
      });

      it('should have the property dnsNameserversOption (base name: "dnsNameserversOption")', function() {
        // TODO: update the code to test the property dnsNameserversOption
        expect(instance).to.have.property('dnsNameserversOption');
        // expect(instance.dnsNameserversOption).to.be(expectedValueLiteral);
      });

      it('should have the property dnsCustomNameservers (base name: "dnsCustomNameservers")', function() {
        // TODO: update the code to test the property dnsCustomNameservers
        expect(instance).to.have.property('dnsCustomNameservers');
        // expect(instance.dnsCustomNameservers).to.be(expectedValueLiteral);
      });

      it('should have the property bootOptionsEnabled (base name: "bootOptionsEnabled")', function() {
        // TODO: update the code to test the property bootOptionsEnabled
        expect(instance).to.have.property('bootOptionsEnabled');
        // expect(instance.bootOptionsEnabled).to.be(expectedValueLiteral);
      });

      it('should have the property bootNextServer (base name: "bootNextServer")', function() {
        // TODO: update the code to test the property bootNextServer
        expect(instance).to.have.property('bootNextServer');
        // expect(instance.bootNextServer).to.be(expectedValueLiteral);
      });

      it('should have the property bootFileName (base name: "bootFileName")', function() {
        // TODO: update the code to test the property bootFileName
        expect(instance).to.have.property('bootFileName');
        // expect(instance.bootFileName).to.be(expectedValueLiteral);
      });

      it('should have the property dhcpOptions (base name: "dhcpOptions")', function() {
        // TODO: update the code to test the property dhcpOptions
        expect(instance).to.have.property('dhcpOptions');
        // expect(instance.dhcpOptions).to.be(expectedValueLiteral);
      });

      it('should have the property reservedIpRanges (base name: "reservedIpRanges")', function() {
        // TODO: update the code to test the property reservedIpRanges
        expect(instance).to.have.property('reservedIpRanges');
        // expect(instance.reservedIpRanges).to.be(expectedValueLiteral);
      });

      it('should have the property fixedIpAssignments (base name: "fixedIpAssignments")', function() {
        // TODO: update the code to test the property fixedIpAssignments
        expect(instance).to.have.property('fixedIpAssignments');
        // expect(instance.fixedIpAssignments).to.be(expectedValueLiteral);
      });

    });
  });

}));
