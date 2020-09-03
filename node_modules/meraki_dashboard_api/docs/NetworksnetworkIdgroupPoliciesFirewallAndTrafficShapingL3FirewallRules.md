# MerakiDashboardApi.NetworksnetworkIdgroupPoliciesFirewallAndTrafficShapingL3FirewallRules

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**comment** | **String** | Description of the rule (optional) | [optional] 
**policy** | **String** | &#x27;allow&#x27; or &#x27;deny&#x27; traffic specified by this rule | 
**protocol** | **String** | The type of protocol (must be &#x27;tcp&#x27;, &#x27;udp&#x27;, &#x27;icmp&#x27; or &#x27;any&#x27;) | 
**destPort** | **String** | Destination port (integer in the range 1-65535), a port range (e.g. 8080-9090), or &#x27;any&#x27; | [optional] 
**destCidr** | **String** | Destination IP address (in IP or CIDR notation), a fully-qualified domain name (FQDN, if your network supports it) or &#x27;any&#x27;. | 
