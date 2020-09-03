# MerakiDashboardApi.NetworksnetworkIdclientsprovisionPoliciesBySsid0

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**devicePolicy** | **String** | The policy to apply to the specified client. Can be 'Allowed', 'Blocked', 'Normal' or 'Group policy'. Required. | 
**groupPolicyId** | **String** | The ID of the desired group policy to apply to the client. Required if 'devicePolicy' is set to \"Group policy\". Otherwise this is ignored. | [optional] 


<a name="DevicePolicyEnum"></a>
## Enum: DevicePolicyEnum


* `allowed` (value: `"Allowed"`)

* `blocked` (value: `"Blocked"`)

* `normal` (value: `"Normal"`)

* `groupPolicy` (value: `"Group policy"`)




