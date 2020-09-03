# MerakiDashboardApi.Body125

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | The name of the dashboard administrator | [optional] 
**orgAccess** | **String** | The privilege of the dashboard administrator on the organization. Can be one of &#x27;full&#x27;, &#x27;read-only&#x27;, &#x27;enterprise&#x27; or &#x27;none&#x27; | [optional] 
**tags** | [**[OrganizationsorganizationIdadminsTags]**](OrganizationsorganizationIdadminsTags.md) | The list of tags that the dashboard administrator has privileges on | [optional] 
**networks** | [**[OrganizationsorganizationIdadminsNetworks]**](OrganizationsorganizationIdadminsNetworks.md) | The list of networks that the dashboard administrator has privileges on | [optional] 

<a name="OrgAccessEnum"></a>
## Enum: OrgAccessEnum

* `full` (value: `"full"`)
* `read-only` (value: `"read-only"`)
* `enterprise` (value: `"enterprise"`)
* `none` (value: `"none"`)

