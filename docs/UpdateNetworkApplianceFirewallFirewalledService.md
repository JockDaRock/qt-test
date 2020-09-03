# MerakiDashboardApi.UpdateNetworkApplianceFirewallFirewalledService

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**access** | **String** | A string indicating the rule for which IPs are allowed to use the specified service. Acceptable values are \"blocked\" (no remote IPs can access the service), \"restricted\" (only allowed IPs can access the service), and \"unrestriced\" (any remote IP can access the service). This field is required | 
**allowedIps** | **[String]** | An array of allowed IPs that can access the service. This field is required if \"access\" is set to \"restricted\". Otherwise this field is ignored | [optional] 


<a name="AccessEnum"></a>
## Enum: AccessEnum


* `blocked` (value: `"blocked"`)

* `restricted` (value: `"restricted"`)

* `unrestricted` (value: `"unrestricted"`)




