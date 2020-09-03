# MerakiDashboardApi.Body150

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**role** | **String** | The role of the SAML administrator | [optional] 
**orgAccess** | **String** | The privilege of the SAML administrator on the organization. Can be one of &#x27;none&#x27;, &#x27;read-only&#x27; or &#x27;full&#x27; | [optional] 
**tags** | [**[OrganizationsorganizationIdsamlRolesTags]**](OrganizationsorganizationIdsamlRolesTags.md) | The list of tags that the SAML administrator has privleges on | [optional] 
**networks** | [**[OrganizationsorganizationIdsamlRolesNetworks]**](OrganizationsorganizationIdsamlRolesNetworks.md) | The list of networks that the SAML administrator has privileges on | [optional] 

<a name="OrgAccessEnum"></a>
## Enum: OrgAccessEnum

* `none` (value: `"none"`)
* `read-only` (value: `"read-only"`)
* `full` (value: `"full"`)

