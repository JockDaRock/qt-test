# MerakiDashboardApi.NetworksnetworkIdwirelessssidsnumberfirewalll3FirewallRulesRules

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**comment** | **String** | Description of the rule (optional) | [optional] 
**policy** | **String** | 'allow' or 'deny' traffic specified by this rule | 
**protocol** | **String** | The type of protocol (must be 'tcp', 'udp', 'icmp' or 'any') | 
**destPort** | **String** | Comma-separated list of destination port(s) (integer in the range 1-65535), or 'any' | [optional] 
**destCidr** | **String** | Comma-separated list of destination IP address(es) (in IP or CIDR notation), fully-qualified domain names (FQDN) or 'any' | 


<a name="PolicyEnum"></a>
## Enum: PolicyEnum


* `allow` (value: `"allow"`)

* `deny` (value: `"deny"`)




<a name="ProtocolEnum"></a>
## Enum: ProtocolEnum


* `tcp` (value: `"tcp"`)

* `udp` (value: `"udp"`)

* `icmp` (value: `"icmp"`)

* `any` (value: `"any"`)




