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

  beforeEach(function() {
    instance = new MerakiDashboardApi.SplashAuthorizationStatusApi();
  });

  describe('(package)', function() {
    describe('SplashAuthorizationStatusApi', function() {
      describe('getNetworkClientSplashAuthorizationStatus', function() {
        it('should call getNetworkClientSplashAuthorizationStatus successfully', function(done) {
          // TODO: uncomment, update parameter values for getNetworkClientSplashAuthorizationStatus call and complete the assertions
          /*
          var networkId = "networkId_example";
          var clientId = "clientId_example";

          instance.getNetworkClientSplashAuthorizationStatus(networkId, clientId, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(Object);
            // expect(data).to.be(null);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('updateNetworkClientSplashAuthorizationStatus', function() {
        it('should call updateNetworkClientSplashAuthorizationStatus successfully', function(done) {
          // TODO: uncomment, update parameter values for updateNetworkClientSplashAuthorizationStatus call and complete the assertions
          /*
          var networkId = "networkId_example";
          var clientId = "clientId_example";
          var updateNetworkClientSplashAuthorizationStatus = new MerakiDashboardApi.UpdateNetworkClientSplashAuthorizationStatus();
          updateNetworkClientSplashAuthorizationStatus.ssids = new MerakiDashboardApi.NetworksnetworkIdclientsclientIdsplashAuthorizationStatusSsids();
          updateNetworkClientSplashAuthorizationStatus.ssids._0 = new MerakiDashboardApi.NetworksnetworkIdclientsclientIdsplashAuthorizationStatusSsids0();
          updateNetworkClientSplashAuthorizationStatus.ssids._0.isAuthorized = false;
          updateNetworkClientSplashAuthorizationStatus.ssids._1 = new MerakiDashboardApi.NetworksnetworkIdclientsclientIdsplashAuthorizationStatusSsids1();
          updateNetworkClientSplashAuthorizationStatus.ssids._1.isAuthorized = false;
          updateNetworkClientSplashAuthorizationStatus.ssids._2 = new MerakiDashboardApi.NetworksnetworkIdclientsclientIdsplashAuthorizationStatusSsids2();
          updateNetworkClientSplashAuthorizationStatus.ssids._2.isAuthorized = false;
          updateNetworkClientSplashAuthorizationStatus.ssids._3 = new MerakiDashboardApi.NetworksnetworkIdclientsclientIdsplashAuthorizationStatusSsids3();
          updateNetworkClientSplashAuthorizationStatus.ssids._3.isAuthorized = false;
          updateNetworkClientSplashAuthorizationStatus.ssids._4 = new MerakiDashboardApi.NetworksnetworkIdclientsclientIdsplashAuthorizationStatusSsids4();
          updateNetworkClientSplashAuthorizationStatus.ssids._4.isAuthorized = false;
          updateNetworkClientSplashAuthorizationStatus.ssids._5 = new MerakiDashboardApi.NetworksnetworkIdclientsclientIdsplashAuthorizationStatusSsids5();
          updateNetworkClientSplashAuthorizationStatus.ssids._5.isAuthorized = false;
          updateNetworkClientSplashAuthorizationStatus.ssids._6 = new MerakiDashboardApi.NetworksnetworkIdclientsclientIdsplashAuthorizationStatusSsids6();
          updateNetworkClientSplashAuthorizationStatus.ssids._6.isAuthorized = false;
          updateNetworkClientSplashAuthorizationStatus.ssids._7 = new MerakiDashboardApi.NetworksnetworkIdclientsclientIdsplashAuthorizationStatusSsids7();
          updateNetworkClientSplashAuthorizationStatus.ssids._7.isAuthorized = false;
          updateNetworkClientSplashAuthorizationStatus.ssids._8 = new MerakiDashboardApi.NetworksnetworkIdclientsclientIdsplashAuthorizationStatusSsids8();
          updateNetworkClientSplashAuthorizationStatus.ssids._8.isAuthorized = false;
          updateNetworkClientSplashAuthorizationStatus.ssids._9 = new MerakiDashboardApi.NetworksnetworkIdclientsclientIdsplashAuthorizationStatusSsids9();
          updateNetworkClientSplashAuthorizationStatus.ssids._9.isAuthorized = false;
          updateNetworkClientSplashAuthorizationStatus.ssids._10 = new MerakiDashboardApi.NetworksnetworkIdclientsclientIdsplashAuthorizationStatusSsids10();
          updateNetworkClientSplashAuthorizationStatus.ssids._10.isAuthorized = false;
          updateNetworkClientSplashAuthorizationStatus.ssids._11 = new MerakiDashboardApi.NetworksnetworkIdclientsclientIdsplashAuthorizationStatusSsids11();
          updateNetworkClientSplashAuthorizationStatus.ssids._11.isAuthorized = false;
          updateNetworkClientSplashAuthorizationStatus.ssids._12 = new MerakiDashboardApi.NetworksnetworkIdclientsclientIdsplashAuthorizationStatusSsids12();
          updateNetworkClientSplashAuthorizationStatus.ssids._12.isAuthorized = false;
          updateNetworkClientSplashAuthorizationStatus.ssids._13 = new MerakiDashboardApi.NetworksnetworkIdclientsclientIdsplashAuthorizationStatusSsids13();
          updateNetworkClientSplashAuthorizationStatus.ssids._13.isAuthorized = false;
          updateNetworkClientSplashAuthorizationStatus.ssids._14 = new MerakiDashboardApi.NetworksnetworkIdclientsclientIdsplashAuthorizationStatusSsids14();
          updateNetworkClientSplashAuthorizationStatus.ssids._14.isAuthorized = false;

          instance.updateNetworkClientSplashAuthorizationStatus(networkId, clientId, updateNetworkClientSplashAuthorizationStatus, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(Object);
            // expect(data).to.be(null);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
    });
  });

}));
