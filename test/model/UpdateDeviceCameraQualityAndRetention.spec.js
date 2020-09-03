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
    describe('UpdateDeviceCameraQualityAndRetention', function() {
      beforeEach(function() {
        instance = new MerakiDashboardApi.UpdateDeviceCameraQualityAndRetention();
      });

      it('should create an instance of UpdateDeviceCameraQualityAndRetention', function() {
        // TODO: update the code to test UpdateDeviceCameraQualityAndRetention
        expect(instance).to.be.a(MerakiDashboardApi.UpdateDeviceCameraQualityAndRetention);
      });

      it('should have the property profileId (base name: "profileId")', function() {
        // TODO: update the code to test the property profileId
        expect(instance).to.have.property('profileId');
        // expect(instance.profileId).to.be(expectedValueLiteral);
      });

      it('should have the property motionBasedRetentionEnabled (base name: "motionBasedRetentionEnabled")', function() {
        // TODO: update the code to test the property motionBasedRetentionEnabled
        expect(instance).to.have.property('motionBasedRetentionEnabled');
        // expect(instance.motionBasedRetentionEnabled).to.be(expectedValueLiteral);
      });

      it('should have the property audioRecordingEnabled (base name: "audioRecordingEnabled")', function() {
        // TODO: update the code to test the property audioRecordingEnabled
        expect(instance).to.have.property('audioRecordingEnabled');
        // expect(instance.audioRecordingEnabled).to.be(expectedValueLiteral);
      });

      it('should have the property restrictedBandwidthModeEnabled (base name: "restrictedBandwidthModeEnabled")', function() {
        // TODO: update the code to test the property restrictedBandwidthModeEnabled
        expect(instance).to.have.property('restrictedBandwidthModeEnabled');
        // expect(instance.restrictedBandwidthModeEnabled).to.be(expectedValueLiteral);
      });

      it('should have the property quality (base name: "quality")', function() {
        // TODO: update the code to test the property quality
        expect(instance).to.have.property('quality');
        // expect(instance.quality).to.be(expectedValueLiteral);
      });

      it('should have the property resolution (base name: "resolution")', function() {
        // TODO: update the code to test the property resolution
        expect(instance).to.have.property('resolution');
        // expect(instance.resolution).to.be(expectedValueLiteral);
      });

      it('should have the property motionDetectorVersion (base name: "motionDetectorVersion")', function() {
        // TODO: update the code to test the property motionDetectorVersion
        expect(instance).to.have.property('motionDetectorVersion');
        // expect(instance.motionDetectorVersion).to.be(expectedValueLiteral);
      });

    });
  });

}));
