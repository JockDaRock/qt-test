# MerakiDashboardApi.Body113

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | The name of the SSID | [optional] 
**enabled** | **Boolean** | Whether or not the SSID is enabled | [optional] 
**authMode** | **String** | The association control method for the SSID (&#x27;open&#x27;, &#x27;psk&#x27;, &#x27;open-with-radius&#x27;, &#x27;8021x-meraki&#x27;, &#x27;8021x-radius&#x27;, &#x27;ipsk-with-radius&#x27; or &#x27;ipsk-without-radius&#x27;) | [optional] 
**enterpriseAdminAccess** | **String** | Whether or not an SSID is accessible by &#x27;enterprise&#x27; administrators (&#x27;access disabled&#x27; or &#x27;access enabled&#x27;) | [optional] 
**encryptionMode** | **String** | The psk encryption mode for the SSID (&#x27;wep&#x27; or &#x27;wpa&#x27;). This param is only valid if the authMode is &#x27;psk&#x27; | [optional] 
**psk** | **String** | The passkey for the SSID. This param is only valid if the authMode is &#x27;psk&#x27; | [optional] 
**wpaEncryptionMode** | **String** | The types of WPA encryption. (&#x27;WPA1 only&#x27;, &#x27;WPA1 and WPA2&#x27;, &#x27;WPA2 only&#x27;, &#x27;WPA3 Transition Mode&#x27; or &#x27;WPA3 only&#x27;) | [optional] 
**splashPage** | **String** | The type of splash page for the SSID (&#x27;None&#x27;, &#x27;Click-through splash page&#x27;, &#x27;Billing&#x27;, &#x27;Password-protected with Meraki RADIUS&#x27;, &#x27;Password-protected with custom RADIUS&#x27;, &#x27;Password-protected with Active Directory&#x27;, &#x27;Password-protected with LDAP&#x27;, &#x27;SMS authentication&#x27;, &#x27;Systems Manager Sentry&#x27;, &#x27;Facebook Wi-Fi&#x27;, &#x27;Google OAuth&#x27; or &#x27;Sponsored guest&#x27;). This attribute is not supported for template children. | [optional] 
**radiusServers** | [**[NetworksnetworkIdwirelessssidsnumberRadiusServers]**](NetworksnetworkIdwirelessssidsnumberRadiusServers.md) | The RADIUS 802.1X servers to be used for authentication. This param is only valid if the authMode is &#x27;open-with-radius&#x27;, &#x27;8021x-radius&#x27; or &#x27;ipsk-with-radius&#x27; | [optional] 
**radiusProxyEnabled** | **Boolean** | If true, Meraki devices will proxy RADIUS messages through the Meraki cloud to the configured RADIUS auth and accounting servers. | [optional] 
**radiusCoaEnabled** | **Boolean** | If true, Meraki devices will act as a RADIUS Dynamic Authorization Server and will respond to RADIUS Change-of-Authorization and Disconnect messages sent by the RADIUS server. | [optional] 
**radiusFailoverPolicy** | **String** | This policy determines how authentication requests should be handled in the event that all of the configured RADIUS servers are unreachable (&#x27;Deny access&#x27; or &#x27;Allow access&#x27;) | [optional] 
**radiusLoadBalancingPolicy** | **String** | This policy determines which RADIUS server will be contacted first in an authentication attempt and the ordering of any necessary retry attempts (&#x27;Strict priority order&#x27; or &#x27;Round robin&#x27;) | [optional] 
**radiusAccountingEnabled** | **Boolean** | Whether or not RADIUS accounting is enabled. This param is only valid if the authMode is &#x27;open-with-radius&#x27;, &#x27;8021x-radius&#x27; or &#x27;ipsk-with-radius&#x27; | [optional] 
**radiusAccountingServers** | [**[NetworksnetworkIdwirelessssidsnumberRadiusAccountingServers]**](NetworksnetworkIdwirelessssidsnumberRadiusAccountingServers.md) | The RADIUS accounting 802.1X servers to be used for authentication. This param is only valid if the authMode is &#x27;open-with-radius&#x27;, &#x27;8021x-radius&#x27; or &#x27;ipsk-with-radius&#x27; and radiusAccountingEnabled is &#x27;true&#x27; | [optional] 
**radiusAttributeForGroupPolicies** | **String** | Specify the RADIUS attribute used to look up group policies (&#x27;Filter-Id&#x27;, &#x27;Reply-Message&#x27;, &#x27;Airespace-ACL-Name&#x27; or &#x27;Aruba-User-Role&#x27;). Access points must receive this attribute in the RADIUS Access-Accept message | [optional] 
**ipAssignmentMode** | **String** | The client IP assignment mode (&#x27;NAT mode&#x27;, &#x27;Bridge mode&#x27;, &#x27;Layer 3 roaming&#x27;, &#x27;Layer 3 roaming with a concentrator&#x27; or &#x27;VPN&#x27;) | [optional] 
**useVlanTagging** | **Boolean** | Whether or not traffic should be directed to use specific VLANs. This param is only valid if the ipAssignmentMode is &#x27;Bridge mode&#x27; or &#x27;Layer 3 roaming&#x27; | [optional] 
**concentratorNetworkId** | **String** | The concentrator to use when the ipAssignmentMode is &#x27;Layer 3 roaming with a concentrator&#x27; or &#x27;VPN&#x27;. | [optional] 
**vlanId** | **Number** | The VLAN ID used for VLAN tagging. This param is only valid when the ipAssignmentMode is &#x27;Layer 3 roaming with a concentrator&#x27; or &#x27;VPN&#x27; | [optional] 
**defaultVlanId** | **Number** | The default VLAN ID used for &#x27;all other APs&#x27;. This param is only valid when the ipAssignmentMode is &#x27;Bridge mode&#x27; or &#x27;Layer 3 roaming&#x27; | [optional] 
**apTagsAndVlanIds** | [**[NetworksnetworkIdwirelessssidsnumberApTagsAndVlanIds]**](NetworksnetworkIdwirelessssidsnumberApTagsAndVlanIds.md) | The list of tags and VLAN IDs used for VLAN tagging. This param is only valid when the ipAssignmentMode is &#x27;Bridge mode&#x27; or &#x27;Layer 3 roaming&#x27; | [optional] 
**walledGardenEnabled** | **Boolean** | Allow access to a configurable list of IP ranges, which users may access prior to sign-on. | [optional] 
**walledGardenRanges** | **[String]** | Specify your walled garden by entering an array of addresses, ranges using CIDR notation, domain names, and domain wildcards (e.g. &#x27;192.168.1.1/24&#x27;, &#x27;192.168.37.10/32&#x27;, &#x27;www.yahoo.com&#x27;, &#x27;*.google.com&#x27;]). Meraki&#x27;s splash page is automatically included in your walled garden. | [optional] 
**radiusOverride** | **Boolean** | If true, the RADIUS response can override VLAN tag. This is not valid when ipAssignmentMode is &#x27;NAT mode&#x27;. | [optional] 
**radiusGuestVlanEnabled** | **Boolean** | Whether or not RADIUS Guest VLAN is enabled. This param is only valid if the authMode is &#x27;open-with-radius&#x27; and addressing mode is not set to &#x27;isolated&#x27; or &#x27;nat&#x27; mode | [optional] 
**radiusGuestVlanId** | **Number** | VLAN ID of the RADIUS Guest VLAN. This param is only valid if the authMode is &#x27;open-with-radius&#x27; and addressing mode is not set to &#x27;isolated&#x27; or &#x27;nat&#x27; mode | [optional] 
**minBitrate** | **Number** | The minimum bitrate in Mbps. (&#x27;1&#x27;, &#x27;2&#x27;, &#x27;5.5&#x27;, &#x27;6&#x27;, &#x27;9&#x27;, &#x27;11&#x27;, &#x27;12&#x27;, &#x27;18&#x27;, &#x27;24&#x27;, &#x27;36&#x27;, &#x27;48&#x27; or &#x27;54&#x27;) | [optional] 
**bandSelection** | **String** | The client-serving radio frequencies. (&#x27;Dual band operation&#x27;, &#x27;5 GHz band only&#x27; or &#x27;Dual band operation with Band Steering&#x27;) | [optional] 
**perClientBandwidthLimitUp** | **Number** | The upload bandwidth limit in Kbps. (0 represents no limit.) | [optional] 
**perClientBandwidthLimitDown** | **Number** | The download bandwidth limit in Kbps. (0 represents no limit.) | [optional] 
**perSsidBandwidthLimitUp** | **Number** | The total upload bandwidth limit in Kbps. (0 represents no limit.) | [optional] 
**perSsidBandwidthLimitDown** | **Number** | The total download bandwidth limit in Kbps. (0 represents no limit.) | [optional] 
**lanIsolationEnabled** | **Boolean** | Boolean indicating whether Layer 2 LAN isolation should be enabled or disabled. Only configurable when ipAssignmentMode is &#x27;Bridge mode&#x27;. | [optional] 
**visible** | **Boolean** | Boolean indicating whether APs should advertise or hide this SSID. APs will only broadcast this SSID if set to true | [optional] 
**availableOnAllAps** | **Boolean** | Boolean indicating whether all APs should broadcast the SSID or if it should be restricted to APs matching any availability tags. Can only be false if the SSID has availability tags. | [optional] 
**availabilityTags** | **[String]** | Accepts a list of tags for this SSID. If availableOnAllAps is false, then the SSID will only be broadcast by APs with tags matching any of the tags in this list. | [optional] 

<a name="AuthModeEnum"></a>
## Enum: AuthModeEnum

* `open` (value: `"open"`)
* `psk` (value: `"psk"`)
* `open-with-radius` (value: `"open-with-radius"`)
* `8021x-meraki` (value: `"8021x-meraki"`)
* `8021x-radius` (value: `"8021x-radius"`)
* `ipsk-with-radius` (value: `"ipsk-with-radius"`)
* `ipsk-without-radius` (value: `"ipsk-without-radius"`)


<a name="EnterpriseAdminAccessEnum"></a>
## Enum: EnterpriseAdminAccessEnum

* `disabled` (value: `"access disabled"`)
* `enabled` (value: `"access enabled"`)


<a name="EncryptionModeEnum"></a>
## Enum: EncryptionModeEnum

* `wep` (value: `"wep"`)
* `wpa` (value: `"wpa"`)


<a name="WpaEncryptionModeEnum"></a>
## Enum: WpaEncryptionModeEnum

* `WPA1 only` (value: `"WPA1 only"`)
* `WPA1 and WPA2` (value: `"WPA1 and WPA2"`)
* `WPA2 only` (value: `"WPA2 only"`)
* `WPA3 Transition Mode` (value: `"WPA3 Transition Mode"`)
* `WPA3 only` (value: `"WPA3 only"`)


<a name="SplashPageEnum"></a>
## Enum: SplashPageEnum

* `None` (value: `"None"`)
* `Click-through splash page` (value: `"Click-through splash page"`)
* `Billing` (value: `"Billing"`)
* `Password-protected with Meraki RADIUS` (value: `"Password-protected with Meraki RADIUS"`)
* `Password-protected with custom RADIUS` (value: `"Password-protected with custom RADIUS"`)
* `Password-protected with Active Directory` (value: `"Password-protected with Active Directory"`)
* `Password-protected with LDAP` (value: `"Password-protected with LDAP"`)
* `SMS authentication` (value: `"SMS authentication"`)
* `Systems Manager Sentry` (value: `"Systems Manager Sentry"`)
* `Facebook Wi-Fi` (value: `"Facebook Wi-Fi"`)
* `Google OAuth` (value: `"Google OAuth"`)
* `Sponsored guest` (value: `"Sponsored guest"`)


<a name="RadiusFailoverPolicyEnum"></a>
## Enum: RadiusFailoverPolicyEnum

* `Deny access` (value: `"Deny access"`)
* `Allow access` (value: `"Allow access"`)


<a name="RadiusLoadBalancingPolicyEnum"></a>
## Enum: RadiusLoadBalancingPolicyEnum

* `Strict priority order` (value: `"Strict priority order"`)
* `Round robin` (value: `"Round robin"`)


<a name="RadiusAttributeForGroupPoliciesEnum"></a>
## Enum: RadiusAttributeForGroupPoliciesEnum

* `Filter-Id` (value: `"Filter-Id"`)
* `Reply-Message` (value: `"Reply-Message"`)
* `Airespace-ACL-Name` (value: `"Airespace-ACL-Name"`)
* `Aruba-User-Role` (value: `"Aruba-User-Role"`)

