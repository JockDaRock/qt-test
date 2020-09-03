# MerakiDashboardApi.Body124

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email** | **String** | The email of the dashboard administrator. This attribute can not be updated. | 
**name** | **String** | The name of the dashboard administrator | 
**orgAccess** | **String** | The privilege of the dashboard administrator on the organization. Can be one of &#x27;full&#x27;, &#x27;read-only&#x27;, &#x27;enterprise&#x27; or &#x27;none&#x27; | 
**tags** | [**[OrganizationsorganizationIdadminsTags]**](OrganizationsorganizationIdadminsTags.md) | The list of tags that the dashboard administrator has privileges on | [optional] 
**networks** | [**[OrganizationsorganizationIdadminsNetworks]**](OrganizationsorganizationIdadminsNetworks.md) | The list of networks that the dashboard administrator has privileges on | [optional] 
**authenticationMethod** | **String** | The method of authentication the user will use to sign in to the Meraki dashboard. Can be one of &#x27;Email&#x27; or &#x27;Cisco SecureX Sign-On&#x27;. The default is Email authentication | [optional] 

<a name="OrgAccessEnum"></a>
## Enum: OrgAccessEnum

* `full` (value: `"full"`)
* `read-only` (value: `"read-only"`)
* `enterprise` (value: `"enterprise"`)
* `none` (value: `"none"`)


<a name="AuthenticationMethodEnum"></a>
## Enum: AuthenticationMethodEnum

* `Email` (value: `"Email"`)
* `Cisco SecureX Sign-On` (value: `"Cisco SecureX Sign-On"`)

