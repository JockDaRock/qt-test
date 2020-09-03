# MerakiDashboardApi.NetworksnetworkIdgroupPoliciesFirewallAndTrafficShapingL7FirewallRules

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**policy** | **String** | The policy applied to matching traffic. Must be 'deny'. | [optional] 
**type** | **String** | Type of the L7 Rule. Must be 'application', 'applicationCategory', 'host', 'port' or 'ipRange' | [optional] 
**value** | **String** | The 'value' of what you want to block. If 'type' is 'host', 'port' or 'ipRange', 'value' must be a string matching either a hostname (e.g. somewhere.com), a port (e.g. 8080), or an IP range (e.g. 192.1.0.0/16). If 'type' is 'application' or 'applicationCategory', then 'value' must be an object with an ID for the application. | [optional] 


<a name="PolicyEnum"></a>
## Enum: PolicyEnum


* `deny` (value: `"deny"`)




<a name="TypeEnum"></a>
## Enum: TypeEnum


* `application` (value: `"application"`)

* `applicationCategory` (value: `"applicationCategory"`)

* `host` (value: `"host"`)

* `port` (value: `"port"`)

* `ipRange` (value: `"ipRange"`)




