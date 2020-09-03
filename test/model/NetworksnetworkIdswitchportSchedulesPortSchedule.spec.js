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
    describe('NetworksnetworkIdswitchportSchedulesPortSchedule', function() {
      beforeEach(function() {
        instance = new MerakiDashboardApi.NetworksnetworkIdswitchportSchedulesPortSchedule();
      });

      it('should create an instance of NetworksnetworkIdswitchportSchedulesPortSchedule', function() {
        // TODO: update the code to test NetworksnetworkIdswitchportSchedulesPortSchedule
        expect(instance).to.be.a(MerakiDashboardApi.NetworksnetworkIdswitchportSchedulesPortSchedule);
      });

      it('should have the property monday (base name: "monday")', function() {
        // TODO: update the code to test the property monday
        expect(instance).to.have.property('monday');
        // expect(instance.monday).to.be(expectedValueLiteral);
      });

      it('should have the property tuesday (base name: "tuesday")', function() {
        // TODO: update the code to test the property tuesday
        expect(instance).to.have.property('tuesday');
        // expect(instance.tuesday).to.be(expectedValueLiteral);
      });

      it('should have the property wednesday (base name: "wednesday")', function() {
        // TODO: update the code to test the property wednesday
        expect(instance).to.have.property('wednesday');
        // expect(instance.wednesday).to.be(expectedValueLiteral);
      });

      it('should have the property thursday (base name: "thursday")', function() {
        // TODO: update the code to test the property thursday
        expect(instance).to.have.property('thursday');
        // expect(instance.thursday).to.be(expectedValueLiteral);
      });

      it('should have the property friday (base name: "friday")', function() {
        // TODO: update the code to test the property friday
        expect(instance).to.have.property('friday');
        // expect(instance.friday).to.be(expectedValueLiteral);
      });

      it('should have the property saturday (base name: "saturday")', function() {
        // TODO: update the code to test the property saturday
        expect(instance).to.have.property('saturday');
        // expect(instance.saturday).to.be(expectedValueLiteral);
      });

      it('should have the property sunday (base name: "sunday")', function() {
        // TODO: update the code to test the property sunday
        expect(instance).to.have.property('sunday');
        // expect(instance.sunday).to.be(expectedValueLiteral);
      });

    });
  });

}));
