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
    instance = new MerakiDashboardApi.SnmpApi();
  });

  describe('(package)', function() {
    describe('SnmpApi', function() {
      describe('getNetworkSnmp', function() {
        it('should call getNetworkSnmp successfully', function(done) {
          // TODO: uncomment, update parameter values for getNetworkSnmp call and complete the assertions
          /*
          var networkId = "networkId_example";

          instance.getNetworkSnmp(networkId, function(error, data, response) {
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
      describe('getOrganizationSnmp', function() {
        it('should call getOrganizationSnmp successfully', function(done) {
          // TODO: uncomment, update parameter values for getOrganizationSnmp call and complete the assertions
          /*
          var organizationId = "organizationId_example";

          instance.getOrganizationSnmp(organizationId, function(error, data, response) {
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
      describe('updateNetworkSnmp', function() {
        it('should call updateNetworkSnmp successfully', function(done) {
          // TODO: uncomment, update parameter values for updateNetworkSnmp call and complete the assertions
          /*
          var networkId = "networkId_example";
          var opts = {};
          opts.updateNetworkSnmp = new MerakiDashboardApi.UpdateNetworkSnmp();
          opts.updateNetworkSnmp.access = "none";
          opts.updateNetworkSnmp.communityString = "";
          opts.updateNetworkSnmp.users = [new MerakiDashboardApi.NetworksnetworkIdsnmpUsers()];
          opts.updateNetworkSnmp.users[0].username = "";
          opts.updateNetworkSnmp.users[0].passphrase = "";

          instance.updateNetworkSnmp(networkId, opts, function(error, data, response) {
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
      describe('updateOrganizationSnmp', function() {
        it('should call updateOrganizationSnmp successfully', function(done) {
          // TODO: uncomment, update parameter values for updateOrganizationSnmp call and complete the assertions
          /*
          var organizationId = "organizationId_example";
          var opts = {};
          opts.updateOrganizationSnmp = new MerakiDashboardApi.UpdateOrganizationSnmp();
          opts.updateOrganizationSnmp.v2cEnabled = false;
          opts.updateOrganizationSnmp.v3Enabled = false;
          opts.updateOrganizationSnmp.v3AuthMode = "MD5";
          opts.updateOrganizationSnmp.v3AuthPass = "";
          opts.updateOrganizationSnmp.v3PrivMode = "DES";
          opts.updateOrganizationSnmp.v3PrivPass = "";
          opts.updateOrganizationSnmp.peerIps = [""];

          instance.updateOrganizationSnmp(organizationId, opts, function(error, data, response) {
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
