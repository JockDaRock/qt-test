# MerakiDashboardApi.NetworksnetworkIdclientsprovisionPoliciesBySsid0

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**devicePolicy** | **String** | The policy to apply to the specified client. Can be &#x27;Allowed&#x27;, &#x27;Blocked&#x27;, &#x27;Normal&#x27; or &#x27;Group policy&#x27;. Required. | 
**groupPolicyId** | **String** | The ID of the desired group policy to apply to the client. Required if &#x27;devicePolicy&#x27; is set to \&quot;Group policy\&quot;. Otherwise this is ignored. | [optional] 

<a name="DevicePolicyEnum"></a>
## Enum: DevicePolicyEnum

* `Allowed` (value: `"Allowed"`)
* `Blocked` (value: `"Blocked"`)
* `Normal` (value: `"Normal"`)
* `Group policy` (value: `"Group policy"`)

