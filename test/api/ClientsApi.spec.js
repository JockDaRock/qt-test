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
    instance = new MerakiDashboardApi.ClientsApi();
  });

  describe('(package)', function() {
    describe('ClientsApi', function() {
      describe('getDeviceClients', function() {
        it('should call getDeviceClients successfully', function(done) {
          // TODO: uncomment, update parameter values for getDeviceClients call and complete the assertions
          /*
          var serial = "serial_example";
          var opts = {};
          opts.t0 = "t0_example";
          opts.timespan = 3.4;

          instance.getDeviceClients(serial, opts, function(error, data, response) {
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
      describe('getNetworkApplianceClientSecurityEvents', function() {
        it('should call getNetworkApplianceClientSecurityEvents successfully', function(done) {
          // TODO: uncomment, update parameter values for getNetworkApplianceClientSecurityEvents call and complete the assertions
          /*
          var networkId = "networkId_example";
          var clientId = "clientId_example";
          var opts = {};
          opts.t0 = "t0_example";
          opts.t1 = "t1_example";
          opts.timespan = 3.4;
          opts.perPage = 56;
          opts.startingAfter = "startingAfter_example";
          opts.endingBefore = "endingBefore_example";
          opts.sortOrder = "sortOrder_example";

          instance.getNetworkApplianceClientSecurityEvents(networkId, clientId, opts, function(error, data, response) {
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
      describe('getNetworkClient', function() {
        it('should call getNetworkClient successfully', function(done) {
          // TODO: uncomment, update parameter values for getNetworkClient call and complete the assertions
          /*
          var networkId = "networkId_example";
          var clientId = "clientId_example";

          instance.getNetworkClient(networkId, clientId, function(error, data, response) {
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
      describe('getNetworkClientPolicy', function() {
        it('should call getNetworkClientPolicy successfully', function(done) {
          // TODO: uncomment, update parameter values for getNetworkClientPolicy call and complete the assertions
          /*
          var networkId = "networkId_example";
          var clientId = "clientId_example";

          instance.getNetworkClientPolicy(networkId, clientId, function(error, data, response) {
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
      describe('getNetworkClientTrafficHistory', function() {
        it('should call getNetworkClientTrafficHistory successfully', function(done) {
          // TODO: uncomment, update parameter values for getNetworkClientTrafficHistory call and complete the assertions
          /*
          var networkId = "networkId_example";
          var clientId = "clientId_example";
          var opts = {};
          opts.perPage = 56;
          opts.startingAfter = "startingAfter_example";
          opts.endingBefore = "endingBefore_example";

          instance.getNetworkClientTrafficHistory(networkId, clientId, opts, function(error, data, response) {
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
      describe('getNetworkClientUsageHistory', function() {
        it('should call getNetworkClientUsageHistory successfully', function(done) {
          // TODO: uncomment, update parameter values for getNetworkClientUsageHistory call and complete the assertions
          /*
          var networkId = "networkId_example";
          var clientId = "clientId_example";

          instance.getNetworkClientUsageHistory(networkId, clientId, function(error, data, response) {
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
      describe('getNetworkClients', function() {
        it('should call getNetworkClients successfully', function(done) {
          // TODO: uncomment, update parameter values for getNetworkClients call and complete the assertions
          /*
          var networkId = "networkId_example";
          var opts = {};
          opts.t0 = "t0_example";
          opts.timespan = 3.4;
          opts.perPage = 56;
          opts.startingAfter = "startingAfter_example";
          opts.endingBefore = "endingBefore_example";

          instance.getNetworkClients(networkId, opts, function(error, data, response) {
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
      describe('getNetworkWirelessClientConnectionStats', function() {
        it('should call getNetworkWirelessClientConnectionStats successfully', function(done) {
          // TODO: uncomment, update parameter values for getNetworkWirelessClientConnectionStats call and complete the assertions
          /*
          var networkId = "networkId_example";
          var clientId = "clientId_example";
          var opts = {};
          opts.t0 = "t0_example";
          opts.t1 = "t1_example";
          opts.timespan = 3.4;
          opts.band = "band_example";
          opts.ssid = 56;
          opts.vlan = 56;
          opts.apTag = "apTag_example";

          instance.getNetworkWirelessClientConnectionStats(networkId, clientId, opts, function(error, data, response) {
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
      describe('getNetworkWirelessClientConnectivityEvents', function() {
        it('should call getNetworkWirelessClientConnectivityEvents successfully', function(done) {
          // TODO: uncomment, update parameter values for getNetworkWirelessClientConnectivityEvents call and complete the assertions
          /*
          var networkId = "networkId_example";
          var clientId = "clientId_example";
          var opts = {};
          opts.perPage = 56;
          opts.startingAfter = "startingAfter_example";
          opts.endingBefore = "endingBefore_example";
          opts.t0 = "t0_example";
          opts.t1 = "t1_example";
          opts.timespan = 3.4;
          opts.types = ["types_example"];
          opts.includedSeverities = ["includedSeverities_example"];
          opts.band = "band_example";
          opts.ssidNumber = 56;
          opts.deviceSerial = "deviceSerial_example";

          instance.getNetworkWirelessClientConnectivityEvents(networkId, clientId, opts, function(error, data, response) {
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
      describe('getNetworkWirelessClientLatencyHistory', function() {
        it('should call getNetworkWirelessClientLatencyHistory successfully', function(done) {
          // TODO: uncomment, update parameter values for getNetworkWirelessClientLatencyHistory call and complete the assertions
          /*
          var networkId = "networkId_example";
          var clientId = "clientId_example";
          var opts = {};
          opts.t0 = "t0_example";
          opts.t1 = "t1_example";
          opts.timespan = 3.4;
          opts.resolution = 56;

          instance.getNetworkWirelessClientLatencyHistory(networkId, clientId, opts, function(error, data, response) {
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
      describe('getNetworkWirelessClientLatencyStats', function() {
        it('should call getNetworkWirelessClientLatencyStats successfully', function(done) {
          // TODO: uncomment, update parameter values for getNetworkWirelessClientLatencyStats call and complete the assertions
          /*
          var networkId = "networkId_example";
          var clientId = "clientId_example";
          var opts = {};
          opts.t0 = "t0_example";
          opts.t1 = "t1_example";
          opts.timespan = 3.4;
          opts.band = "band_example";
          opts.ssid = 56;
          opts.vlan = 56;
          opts.apTag = "apTag_example";
          opts.fields = "fields_example";

          instance.getNetworkWirelessClientLatencyStats(networkId, clientId, opts, function(error, data, response) {
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
      describe('getNetworkWirelessClientsConnectionStats', function() {
        it('should call getNetworkWirelessClientsConnectionStats successfully', function(done) {
          // TODO: uncomment, update parameter values for getNetworkWirelessClientsConnectionStats call and complete the assertions
          /*
          var networkId = "networkId_example";
          var opts = {};
          opts.t0 = "t0_example";
          opts.t1 = "t1_example";
          opts.timespan = 3.4;
          opts.band = "band_example";
          opts.ssid = 56;
          opts.vlan = 56;
          opts.apTag = "apTag_example";

          instance.getNetworkWirelessClientsConnectionStats(networkId, opts, function(error, data, response) {
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
      describe('getNetworkWirelessClientsLatencyStats', function() {
        it('should call getNetworkWirelessClientsLatencyStats successfully', function(done) {
          // TODO: uncomment, update parameter values for getNetworkWirelessClientsLatencyStats call and complete the assertions
          /*
          var networkId = "networkId_example";
          var opts = {};
          opts.t0 = "t0_example";
          opts.t1 = "t1_example";
          opts.timespan = 3.4;
          opts.band = "band_example";
          opts.ssid = 56;
          opts.vlan = 56;
          opts.apTag = "apTag_example";
          opts.fields = "fields_example";

          instance.getNetworkWirelessClientsLatencyStats(networkId, opts, function(error, data, response) {
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
      describe('provisionNetworkClients', function() {
        it('should call provisionNetworkClients successfully', function(done) {
          // TODO: uncomment, update parameter values for provisionNetworkClients call and complete the assertions
          /*
          var networkId = "networkId_example";
          var provisionNetworkClients = new MerakiDashboardApi.ProvisionNetworkClients();
          provisionNetworkClients.clients = [new MerakiDashboardApi.NetworksnetworkIdclientsprovisionClients()];
          provisionNetworkClients.clients[0].mac = "";
          provisionNetworkClients.clients[0].name = "";
          provisionNetworkClients.devicePolicy = "Group policy";
          provisionNetworkClients.groupPolicyId = "";
          provisionNetworkClients.policiesBySecurityAppliance = new MerakiDashboardApi.NetworksnetworkIdclientsprovisionPoliciesBySecurityAppliance();
          provisionNetworkClients.policiesBySecurityAppliance.devicePolicy = "Allowed";
          provisionNetworkClients.policiesBySsid = new MerakiDashboardApi.NetworksnetworkIdclientsprovisionPoliciesBySsid();
          provisionNetworkClients.policiesBySsid._0 = new MerakiDashboardApi.NetworksnetworkIdclientsprovisionPoliciesBySsid0();
          provisionNetworkClients.policiesBySsid._0.devicePolicy = "Allowed";
          provisionNetworkClients.policiesBySsid._0.groupPolicyId = "";
          provisionNetworkClients.policiesBySsid._1 = new MerakiDashboardApi.NetworksnetworkIdclientsprovisionPoliciesBySsid0();
          provisionNetworkClients.policiesBySsid._1.devicePolicy = "Allowed";
          provisionNetworkClients.policiesBySsid._1.groupPolicyId = "";
          provisionNetworkClients.policiesBySsid._2 = new MerakiDashboardApi.NetworksnetworkIdclientsprovisionPoliciesBySsid0();
          provisionNetworkClients.policiesBySsid._2.devicePolicy = "Allowed";
          provisionNetworkClients.policiesBySsid._2.groupPolicyId = "";
          provisionNetworkClients.policiesBySsid._3 = new MerakiDashboardApi.NetworksnetworkIdclientsprovisionPoliciesBySsid0();
          provisionNetworkClients.policiesBySsid._3.devicePolicy = "Allowed";
          provisionNetworkClients.policiesBySsid._3.groupPolicyId = "";
          provisionNetworkClients.policiesBySsid._4 = new MerakiDashboardApi.NetworksnetworkIdclientsprovisionPoliciesBySsid0();
          provisionNetworkClients.policiesBySsid._4.devicePolicy = "Allowed";
          provisionNetworkClients.policiesBySsid._4.groupPolicyId = "";
          provisionNetworkClients.policiesBySsid._5 = new MerakiDashboardApi.NetworksnetworkIdclientsprovisionPoliciesBySsid0();
          provisionNetworkClients.policiesBySsid._5.devicePolicy = "Allowed";
          provisionNetworkClients.policiesBySsid._5.groupPolicyId = "";
          provisionNetworkClients.policiesBySsid._6 = new MerakiDashboardApi.NetworksnetworkIdclientsprovisionPoliciesBySsid0();
          provisionNetworkClients.policiesBySsid._6.devicePolicy = "Allowed";
          provisionNetworkClients.policiesBySsid._6.groupPolicyId = "";
          provisionNetworkClients.policiesBySsid._7 = new MerakiDashboardApi.NetworksnetworkIdclientsprovisionPoliciesBySsid0();
          provisionNetworkClients.policiesBySsid._7.devicePolicy = "Allowed";
          provisionNetworkClients.policiesBySsid._7.groupPolicyId = "";
          provisionNetworkClients.policiesBySsid._8 = new MerakiDashboardApi.NetworksnetworkIdclientsprovisionPoliciesBySsid0();
          provisionNetworkClients.policiesBySsid._8.devicePolicy = "Allowed";
          provisionNetworkClients.policiesBySsid._8.groupPolicyId = "";
          provisionNetworkClients.policiesBySsid._9 = new MerakiDashboardApi.NetworksnetworkIdclientsprovisionPoliciesBySsid0();
          provisionNetworkClients.policiesBySsid._9.devicePolicy = "Allowed";
          provisionNetworkClients.policiesBySsid._9.groupPolicyId = "";
          provisionNetworkClients.policiesBySsid._10 = new MerakiDashboardApi.NetworksnetworkIdclientsprovisionPoliciesBySsid0();
          provisionNetworkClients.policiesBySsid._10.devicePolicy = "Allowed";
          provisionNetworkClients.policiesBySsid._10.groupPolicyId = "";
          provisionNetworkClients.policiesBySsid._11 = new MerakiDashboardApi.NetworksnetworkIdclientsprovisionPoliciesBySsid0();
          provisionNetworkClients.policiesBySsid._11.devicePolicy = "Allowed";
          provisionNetworkClients.policiesBySsid._11.groupPolicyId = "";
          provisionNetworkClients.policiesBySsid._12 = new MerakiDashboardApi.NetworksnetworkIdclientsprovisionPoliciesBySsid0();
          provisionNetworkClients.policiesBySsid._12.devicePolicy = "Allowed";
          provisionNetworkClients.policiesBySsid._12.groupPolicyId = "";
          provisionNetworkClients.policiesBySsid._13 = new MerakiDashboardApi.NetworksnetworkIdclientsprovisionPoliciesBySsid0();
          provisionNetworkClients.policiesBySsid._13.devicePolicy = "Allowed";
          provisionNetworkClients.policiesBySsid._13.groupPolicyId = "";
          provisionNetworkClients.policiesBySsid._14 = new MerakiDashboardApi.NetworksnetworkIdclientsprovisionPoliciesBySsid0();
          provisionNetworkClients.policiesBySsid._14.devicePolicy = "Allowed";
          provisionNetworkClients.policiesBySsid._14.groupPolicyId = "";

          instance.provisionNetworkClients(networkId, provisionNetworkClients, function(error, data, response) {
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
      describe('updateNetworkClientPolicy', function() {
        it('should call updateNetworkClientPolicy successfully', function(done) {
          // TODO: uncomment, update parameter values for updateNetworkClientPolicy call and complete the assertions
          /*
          var networkId = "networkId_example";
          var clientId = "clientId_example";
          var updateNetworkClientPolicy = new MerakiDashboardApi.UpdateNetworkClientPolicy();
          updateNetworkClientPolicy.devicePolicy = "";
          updateNetworkClientPolicy.groupPolicyId = "";

          instance.updateNetworkClientPolicy(networkId, clientId, updateNetworkClientPolicy, function(error, data, response) {
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
