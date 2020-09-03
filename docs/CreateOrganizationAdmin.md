# MerakiDashboardApi.CreateOrganizationAdmin

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email** | **String** | The email of the dashboard administrator. This attribute can not be updated. | 
**name** | **String** | The name of the dashboard administrator | 
**orgAccess** | **String** | The privilege of the dashboard administrator on the organization. Can be one of 'full', 'read-only', 'enterprise' or 'none' | 
**tags** | [**[OrganizationsorganizationIdadminsTags]**](OrganizationsorganizationIdadminsTags.md) | The list of tags that the dashboard administrator has privileges on | [optional] 
**networks** | [**[OrganizationsorganizationIdadminsNetworks]**](OrganizationsorganizationIdadminsNetworks.md) | The list of networks that the dashboard administrator has privileges on | [optional] 
**authenticationMethod** | **String** | The method of authentication the user will use to sign in to the Meraki dashboard. Can be one of 'Email' or 'Cisco SecureX Sign-On'. The default is Email authentication | [optional] 


<a name="OrgAccessEnum"></a>
## Enum: OrgAccessEnum


* `full` (value: `"full"`)

* `readOnly` (value: `"read-only"`)

* `enterprise` (value: `"enterprise"`)

* `none` (value: `"none"`)




<a name="AuthenticationMethodEnum"></a>
## Enum: AuthenticationMethodEnum


* `email` (value: `"Email"`)

* `ciscoSecureXSignOn` (value: `"Cisco SecureX Sign-On"`)




