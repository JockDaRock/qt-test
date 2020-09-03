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
    instance = new MerakiDashboardApi.TargetGroupsApi();
  });

  describe('(package)', function() {
    describe('TargetGroupsApi', function() {
      describe('createNetworkSmTargetGroup', function() {
        it('should call createNetworkSmTargetGroup successfully', function(done) {
          // TODO: uncomment, update parameter values for createNetworkSmTargetGroup call and complete the assertions
          /*
          var networkId = "networkId_example";
          var opts = {};
          opts.createNetworkSmTargetGroup = new MerakiDashboardApi.CreateNetworkSmTargetGroup();
          opts.createNetworkSmTargetGroup.name = "";
          opts.createNetworkSmTargetGroup.scope = "";

          instance.createNetworkSmTargetGroup(networkId, opts, function(error, data, response) {
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
      describe('deleteNetworkSmTargetGroup', function() {
        it('should call deleteNetworkSmTargetGroup successfully', function(done) {
          // TODO: uncomment, update parameter values for deleteNetworkSmTargetGroup call
          /*
          var networkId = "networkId_example";
          var targetGroupId = "targetGroupId_example";

          instance.deleteNetworkSmTargetGroup(networkId, targetGroupId, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getNetworkSmTargetGroup', function() {
        it('should call getNetworkSmTargetGroup successfully', function(done) {
          // TODO: uncomment, update parameter values for getNetworkSmTargetGroup call and complete the assertions
          /*
          var networkId = "networkId_example";
          var targetGroupId = "targetGroupId_example";
          var opts = {};
          opts.withDetails = true;

          instance.getNetworkSmTargetGroup(networkId, targetGroupId, opts, function(error, data, response) {
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
      describe('getNetworkSmTargetGroups', function() {
        it('should call getNetworkSmTargetGroups successfully', function(done) {
          // TODO: uncomment, update parameter values for getNetworkSmTargetGroups call and complete the assertions
          /*
          var networkId = "networkId_example";
          var opts = {};
          opts.withDetails = true;

          instance.getNetworkSmTargetGroups(networkId, opts, function(error, data, response) {
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
      describe('updateNetworkSmTargetGroup', function() {
        it('should call updateNetworkSmTargetGroup successfully', function(done) {
          // TODO: uncomment, update parameter values for updateNetworkSmTargetGroup call and complete the assertions
          /*
          var networkId = "networkId_example";
          var targetGroupId = "targetGroupId_example";
          var opts = {};
          opts.updateNetworkSmTargetGroup = new MerakiDashboardApi.UpdateNetworkSmTargetGroup();
          opts.updateNetworkSmTargetGroup.name = "";
          opts.updateNetworkSmTargetGroup.scope = "";

          instance.updateNetworkSmTargetGroup(networkId, targetGroupId, opts, function(error, data, response) {
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
