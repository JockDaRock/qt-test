# MerakiDashboardApi.OrganizationsorganizationIdbrandingPoliciesAdminSettings

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**appliesTo** | **String** | Which kinds of admins this policy applies to. Can be one of 'All organization admins', 'All enterprise admins', 'All network admins', 'All admins of networks...', 'All admins of networks tagged...', 'Specific admins...', 'All admins' or 'All SAML admins'. | [optional] 
**values** | **[String]** |     If 'appliesTo' is set to one of 'Specific admins...', 'All admins of networks...' or 'All admins of networks tagged...', then you must specify this 'values' property to provide the set of     entities to apply the branding policy to. For 'Specific admins...', specify an array of admin IDs. For 'All admins of     networks...', specify an array of network IDs and/or configuration template IDs. For 'All admins of networks tagged...',     specify an array of tag names.  | [optional] 


<a name="AppliesToEnum"></a>
## Enum: AppliesToEnum


* `allOrganizationAdmins` (value: `"All organization admins"`)

* `allEnterpriseAdmins` (value: `"All enterprise admins"`)

* `allNetworkAdmins` (value: `"All network admins"`)

* `allAdminsOfNetworks_` (value: `"All admins of networks..."`)

* `allAdminsOfNetworksTagged_` (value: `"All admins of networks tagged..."`)

* `specificAdmins_` (value: `"Specific admins..."`)

* `allAdmins` (value: `"All admins"`)

* `allSAMLAdmins` (value: `"All SAML admins"`)




