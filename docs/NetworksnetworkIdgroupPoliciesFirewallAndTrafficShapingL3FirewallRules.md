# MerakiDashboardApi.NetworksnetworkIdgroupPoliciesFirewallAndTrafficShapingL3FirewallRules

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**comment** | **String** | Description of the rule (optional) | [optional] 
**policy** | **String** | 'allow' or 'deny' traffic specified by this rule | 
**protocol** | **String** | The type of protocol (must be 'tcp', 'udp', 'icmp' or 'any') | 
**destPort** | **String** | Destination port (integer in the range 1-65535), a port range (e.g. 8080-9090), or 'any' | [optional] 
**destCidr** | **String** | Destination IP address (in IP or CIDR notation), a fully-qualified domain name (FQDN, if your network supports it) or 'any'. | 


