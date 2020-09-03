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
    instance = new MerakiDashboardApi.SecurityApi();
  });

  describe('(package)', function() {
    describe('SecurityApi', function() {
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
      describe('getNetworkApplianceSecurityEvents', function() {
        it('should call getNetworkApplianceSecurityEvents successfully', function(done) {
          // TODO: uncomment, update parameter values for getNetworkApplianceSecurityEvents call and complete the assertions
          /*
          var networkId = "networkId_example";
          var opts = {};
          opts.t0 = "t0_example";
          opts.t1 = "t1_example";
          opts.timespan = 3.4;
          opts.perPage = 56;
          opts.startingAfter = "startingAfter_example";
          opts.endingBefore = "endingBefore_example";
          opts.sortOrder = "sortOrder_example";

          instance.getNetworkApplianceSecurityEvents(networkId, opts, function(error, data, response) {
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
      describe('getNetworkApplianceSecurityIntrusion', function() {
        it('should call getNetworkApplianceSecurityIntrusion successfully', function(done) {
          // TODO: uncomment, update parameter values for getNetworkApplianceSecurityIntrusion call and complete the assertions
          /*
          var networkId = "networkId_example";

          instance.getNetworkApplianceSecurityIntrusion(networkId, function(error, data, response) {
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
      describe('getNetworkApplianceSecurityMalware', function() {
        it('should call getNetworkApplianceSecurityMalware successfully', function(done) {
          // TODO: uncomment, update parameter values for getNetworkApplianceSecurityMalware call and complete the assertions
          /*
          var networkId = "networkId_example";

          instance.getNetworkApplianceSecurityMalware(networkId, function(error, data, response) {
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
      describe('getOrganizationApplianceSecurityEvents', function() {
        it('should call getOrganizationApplianceSecurityEvents successfully', function(done) {
          // TODO: uncomment, update parameter values for getOrganizationApplianceSecurityEvents call and complete the assertions
          /*
          var organizationId = "organizationId_example";
          var opts = {};
          opts.t0 = "t0_example";
          opts.t1 = "t1_example";
          opts.timespan = 3.4;
          opts.perPage = 56;
          opts.startingAfter = "startingAfter_example";
          opts.endingBefore = "endingBefore_example";
          opts.sortOrder = "sortOrder_example";

          instance.getOrganizationApplianceSecurityEvents(organizationId, opts, function(error, data, response) {
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
      describe('getOrganizationApplianceSecurityIntrusion', function() {
        it('should call getOrganizationApplianceSecurityIntrusion successfully', function(done) {
          // TODO: uncomment, update parameter values for getOrganizationApplianceSecurityIntrusion call and complete the assertions
          /*
          var organizationId = "organizationId_example";

          instance.getOrganizationApplianceSecurityIntrusion(organizationId, function(error, data, response) {
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
      describe('updateNetworkApplianceSecurityIntrusion', function() {
        it('should call updateNetworkApplianceSecurityIntrusion successfully', function(done) {
          // TODO: uncomment, update parameter values for updateNetworkApplianceSecurityIntrusion call and complete the assertions
          /*
          var networkId = "networkId_example";
          var opts = {};
          opts.updateNetworkApplianceSecurityIntrusion = new MerakiDashboardApi.UpdateNetworkApplianceSecurityIntrusion();
          opts.updateNetworkApplianceSecurityIntrusion.mode = "prevention";
          opts.updateNetworkApplianceSecurityIntrusion.idsRulesets = "connectivity";
          opts.updateNetworkApplianceSecurityIntrusion.protectedNetworks = new MerakiDashboardApi.NetworksnetworkIdappliancesecurityintrusionProtectedNetworks();
          opts.updateNetworkApplianceSecurityIntrusion.protectedNetworks.useDefault = false;
          opts.updateNetworkApplianceSecurityIntrusion.protectedNetworks.includedCidr = [""];
          opts.updateNetworkApplianceSecurityIntrusion.protectedNetworks.excludedCidr = [""];

          instance.updateNetworkApplianceSecurityIntrusion(networkId, opts, function(error, data, response) {
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
      describe('updateNetworkApplianceSecurityMalware', function() {
        it('should call updateNetworkApplianceSecurityMalware successfully', function(done) {
          // TODO: uncomment, update parameter values for updateNetworkApplianceSecurityMalware call and complete the assertions
          /*
          var networkId = "networkId_example";
          var updateNetworkApplianceSecurityMalware = new MerakiDashboardApi.UpdateNetworkApplianceSecurityMalware();
          updateNetworkApplianceSecurityMalware.mode = "enabled";
          updateNetworkApplianceSecurityMalware.allowedUrls = [new MerakiDashboardApi.NetworksnetworkIdappliancesecuritymalwareAllowedUrls()];
          updateNetworkApplianceSecurityMalware.allowedUrls[0].url = "";
          updateNetworkApplianceSecurityMalware.allowedUrls[0].comment = "";
          updateNetworkApplianceSecurityMalware.allowedFiles = [new MerakiDashboardApi.NetworksnetworkIdappliancesecuritymalwareAllowedFiles()];
          updateNetworkApplianceSecurityMalware.allowedFiles[0].sha256 = "";
          updateNetworkApplianceSecurityMalware.allowedFiles[0].comment = "";

          instance.updateNetworkApplianceSecurityMalware(networkId, updateNetworkApplianceSecurityMalware, function(error, data, response) {
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
      describe('updateOrganizationApplianceSecurityIntrusion', function() {
        it('should call updateOrganizationApplianceSecurityIntrusion successfully', function(done) {
          // TODO: uncomment, update parameter values for updateOrganizationApplianceSecurityIntrusion call and complete the assertions
          /*
          var organizationId = "organizationId_example";
          var updateOrganizationApplianceSecurityIntrusion = new MerakiDashboardApi.UpdateOrganizationApplianceSecurityIntrusion();
          updateOrganizationApplianceSecurityIntrusion.allowedRules = [new MerakiDashboardApi.OrganizationsorganizationIdappliancesecurityintrusionAllowedRules()];
          updateOrganizationApplianceSecurityIntrusion.allowedRules[0].ruleId = "";
          updateOrganizationApplianceSecurityIntrusion.allowedRules[0].message = "";

          instance.updateOrganizationApplianceSecurityIntrusion(organizationId, updateOrganizationApplianceSecurityIntrusion, function(error, data, response) {
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
