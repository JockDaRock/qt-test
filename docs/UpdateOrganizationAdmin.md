# MerakiDashboardApi.UpdateOrganizationAdmin

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | The name of the dashboard administrator | [optional] 
**orgAccess** | **String** | The privilege of the dashboard administrator on the organization. Can be one of 'full', 'read-only', 'enterprise' or 'none' | [optional] 
**tags** | [**[OrganizationsorganizationIdadminsTags]**](OrganizationsorganizationIdadminsTags.md) | The list of tags that the dashboard administrator has privileges on | [optional] 
**networks** | [**[OrganizationsorganizationIdadminsNetworks]**](OrganizationsorganizationIdadminsNetworks.md) | The list of networks that the dashboard administrator has privileges on | [optional] 


<a name="OrgAccessEnum"></a>
## Enum: OrgAccessEnum


* `full` (value: `"full"`)

* `readOnly` (value: `"read-only"`)

* `enterprise` (value: `"enterprise"`)

* `none` (value: `"none"`)




