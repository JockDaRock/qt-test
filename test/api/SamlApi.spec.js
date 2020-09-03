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
    instance = new MerakiDashboardApi.SamlApi();
  });

  describe('(package)', function() {
    describe('SamlApi', function() {
      describe('createOrganizationSamlIdp', function() {
        it('should call createOrganizationSamlIdp successfully', function(done) {
          // TODO: uncomment, update parameter values for createOrganizationSamlIdp call and complete the assertions
          /*
          var organizationId = "organizationId_example";
          var createOrganizationSamlIdp = new MerakiDashboardApi.CreateOrganizationSamlIdp();
          createOrganizationSamlIdp.x509certSha1Fingerprint = "";
          createOrganizationSamlIdp.sloLogoutUrl = "";

          instance.createOrganizationSamlIdp(organizationId, createOrganizationSamlIdp, function(error, data, response) {
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
      describe('deleteOrganizationSamlIdp', function() {
        it('should call deleteOrganizationSamlIdp successfully', function(done) {
          // TODO: uncomment, update parameter values for deleteOrganizationSamlIdp call
          /*
          var organizationId = "organizationId_example";
          var idpId = "idpId_example";

          instance.deleteOrganizationSamlIdp(organizationId, idpId, function(error, data, response) {
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
      describe('getOrganizationSaml', function() {
        it('should call getOrganizationSaml successfully', function(done) {
          // TODO: uncomment, update parameter values for getOrganizationSaml call and complete the assertions
          /*
          var organizationId = "organizationId_example";

          instance.getOrganizationSaml(organizationId, function(error, data, response) {
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
      describe('getOrganizationSamlIdp', function() {
        it('should call getOrganizationSamlIdp successfully', function(done) {
          // TODO: uncomment, update parameter values for getOrganizationSamlIdp call and complete the assertions
          /*
          var organizationId = "organizationId_example";
          var idpId = "idpId_example";

          instance.getOrganizationSamlIdp(organizationId, idpId, function(error, data, response) {
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
      describe('getOrganizationSamlIdps', function() {
        it('should call getOrganizationSamlIdps successfully', function(done) {
          // TODO: uncomment, update parameter values for getOrganizationSamlIdps call and complete the assertions
          /*
          var organizationId = "organizationId_example";

          instance.getOrganizationSamlIdps(organizationId, function(error, data, response) {
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
      describe('updateOrganizationSaml', function() {
        it('should call updateOrganizationSaml successfully', function(done) {
          // TODO: uncomment, update parameter values for updateOrganizationSaml call and complete the assertions
          /*
          var organizationId = "organizationId_example";
          var opts = {};
          opts.updateOrganizationSaml = new MerakiDashboardApi.UpdateOrganizationSaml();
          opts.updateOrganizationSaml.enabled = false;

          instance.updateOrganizationSaml(organizationId, opts, function(error, data, response) {
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
      describe('updateOrganizationSamlIdp', function() {
        it('should call updateOrganizationSamlIdp successfully', function(done) {
          // TODO: uncomment, update parameter values for updateOrganizationSamlIdp call and complete the assertions
          /*
          var organizationId = "organizationId_example";
          var idpId = "idpId_example";
          var opts = {};
          opts.updateOrganizationSamlIdp = new MerakiDashboardApi.UpdateOrganizationSamlIdp();
          opts.updateOrganizationSamlIdp.x509certSha1Fingerprint = "";
          opts.updateOrganizationSamlIdp.sloLogoutUrl = "";

          instance.updateOrganizationSamlIdp(organizationId, idpId, opts, function(error, data, response) {
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
