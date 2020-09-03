# MerakiDashboardApi.NetworksnetworkIdgroupPoliciesFirewallAndTrafficShapingL7FirewallRules

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**policy** | **String** | The policy applied to matching traffic. Must be &#x27;deny&#x27;. | [optional] 
**type** | **String** | Type of the L7 Rule. Must be &#x27;application&#x27;, &#x27;applicationCategory&#x27;, &#x27;host&#x27;, &#x27;port&#x27; or &#x27;ipRange&#x27; | [optional] 
**value** | **String** | The &#x27;value&#x27; of what you want to block. If &#x27;type&#x27; is &#x27;host&#x27;, &#x27;port&#x27; or &#x27;ipRange&#x27;, &#x27;value&#x27; must be a string matching either a hostname (e.g. somewhere.com), a port (e.g. 8080), or an IP range (e.g. 192.1.0.0/16). If &#x27;type&#x27; is &#x27;application&#x27; or &#x27;applicationCategory&#x27;, then &#x27;value&#x27; must be an object with an ID for the application. | [optional] 

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

